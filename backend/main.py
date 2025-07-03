# main.py  –  FastAPI inference server for full‑res CK+ model
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
import pandas as pd
import cv2
from tensorflow.keras.models import load_model

# ─────────────────────────── CONFIG ────────────────────────────
EMOTION_LABELS = [
    "angry", "disgust", "fear",
    "happy", "sad", "surprise", "neutral"
]

EMOTION_GENRE_MAP = {
    "happy":    ["Comedy", "Family", "Romance"],
    "sad":      ["Drama", "Music"],
    "angry":    ["Action", "Thriller"],
    "fear":     ["Horror", "Mystery"],
    "surprise": ["Adventure", "Fantasy"],
    "disgust":  ["Crime", "War"],
    "neutral":  ["Documentary", "Drama"],
}

# CK+ full‑resolution expected by the model (width, height)
CK_WIDTH, CK_HEIGHT = 640, 490
# ────────────────────────────────────────────────────────────────

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # <‑‑ restrict to your domain in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─── Load model once on startup ────────────────────────────────
model = load_model("Emotions.h5")
print("[INFO] CK+ model loaded. Input shape:", model.input_shape)

# ─── Load movies CSV once ──────────────────────────────────────
movie_df = pd.read_csv("movies.csv")

# ─── Prediction route ─────────────────────────────────────────
@app.post("/predict/")
async def predict_emotion(file: UploadFile = File(...)):
    # 1) decode upload → BGR image
    bytes_img = await file.read()
    frame = cv2.imdecode(np.frombuffer(bytes_img, np.uint8), cv2.IMREAD_COLOR)
    if frame is None:
        return {"error": "Invalid image upload"}

    # 2) preprocess → RGB, resize to 640×490, scale 0‑1
    rgb   = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    rgb   = cv2.resize(rgb, (CK_WIDTH, CK_HEIGHT))            # (w, h)
    inp   = rgb.astype("float32") / 255.0
    inp   = np.expand_dims(inp, axis=0)                       # (1, 490, 640, 3)

    # 3) predict emotion
    preds          = model.predict(inp)
    idx            = int(np.argmax(preds))
    emotion        = EMOTION_LABELS[idx]
    confidence_pct = round(float(np.max(preds)) * 100, 2)

    # 4) recommend movies by genre mapping
    genres      = EMOTION_GENRE_MAP.get(emotion, [])
    recommendations = (
        movie_df[movie_df["genres"].str.contains("|".join(genres), na=False)]
        .sample(n=min(10, len(movie_df)))
        .to_dict(orient="records")
    )

    return {
        "emotion": emotion,
        "confidence": confidence_pct,
        "movies": [
            {"title": m["title"], "genres": m["genres"]} for m in recommendations
        ],
    }

# ─── run (dev) ─────────────────────────────────────────────────
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
