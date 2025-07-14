
# 🎭 Expression-Upgraded: Emotion-Based Movie Recommender🎬

A full-stack application that detects human emotions from images and recommends movies based on the detected emotion.

---

## 🧠 Features

- 🎯 **Emotion Detection** using a trained deep learning model
- 🎞️ **Movie Recommendation** mapped by emotion → genre
- ⚡ **FastAPI Backend** for emotion inference
- 🌐 **React Frontend** for webcam capture and result display
- 🎨 Styled with TailwindCSS and animated via Framer Motion

---

## 🗂️ Project Structure

```
Project-Upgrade/
├── frontend/      # React + Tailwind + Vite frontend
├── backend/       # FastAPI backend with model and CSV loader
└── README.md      # You are here
```

---

## 🚀 Getting Started

### 📦 Prerequisites

- Python 3.8+
- Node.js 16+
- npm or yarn

---

## 🛠️ Setup Instructions

### 🔙 Backend (FastAPI)

1. Navigate to backend folder:

```bash
cd backend
```

2. Create a virtual environment:

```bash
python -m venv venv
venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Place your trained model file `Emotions.h5` inside `backend/`

5. Start the server:

```bash
uvicorn main:app --reload
```

API runs at: `http://localhost:8000/predict/`

---

### 🔜 Frontend (React + Vite)

1. Navigate to frontend:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the app:

```bash
npm run dev
```

App runs at: `http://localhost:5173`

---

## 🤖 How It Works

1. The frontend captures a snapshot using the webcam.
2. The image is sent to the FastAPI backend.
3. The backend predicts the emotion using a deep learning model.
4. Based on the emotion, the app recommends relevant movie genres.

---

## 📌 Tech Stack

- **Frontend:** React, Vite, TailwindCSS, Framer Motion
- **Backend:** FastAPI, TensorFlow/Keras, OpenCV, Pandas
- **Model:** Trained on FER2013 dataset (expected as `Emotions.h5`)
- **Data:** Movie dataset as CSV (filtered by emotion genre map)

---

## 🧾 Example Emotion → Genre Map

| Emotion   | Genres                      |
|-----------|-----------------------------|
| Happy     | Comedy, Family, Romance     |
| Sad       | Drama, Music                |
| Angry     | Action, Thriller            |
| Fear      | Horror, Mystery             |
| Surprise  | Adventure, Fantasy          |
| Disgust   | Crime, War                  |
| Neutral   | Documentary, Drama          |

---

## 🛡️ Disclaimer

This is an academic/emotional AI demo. Emotion classification and genre recommendations are based on heuristic mappings and may not reflect real user preferences.

---

## 📬 Contact

**Author:** [@thecritiz](https://github.com/thecritiz)  
**Repo:** [Expression-Upgraded](https://github.com/thecritiz/expression-upgraded)

---


