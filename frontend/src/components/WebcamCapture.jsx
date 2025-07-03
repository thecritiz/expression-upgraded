import Webcam from "react-webcam";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function WebcamSection({ emotion, onCapture }) {
  const webcamRef = useRef(null);
  const [showWebcam, setShowWebcam] = useState(false);

  const startWebcam = () => setShowWebcam(true);

  const captureImage = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const blob = await (await fetch(imageSrc)).blob();
    onCapture(blob);
  };

  return (
    <section className="py-20 px-8 bg-gray-900 text-center text-white" id="demo">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Live Emotion Detector
        </motion.h2>

        {!showWebcam ? (
          <button
            onClick={startWebcam}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-medium shadow-md"
          >
            🎥 Activate Webcam
          </button>
        ) : (
          <div className="flex flex-col items-center gap-6">
            <div className="border-4 border-blue-500 rounded-xl overflow-hidden shadow-xl">
              <Webcam
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={640}
                height={490}
                className="rounded-lg"
              />
            </div>
            <button
              onClick={captureImage}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-medium shadow-md"
            >
              🎯 Detect Expression
            </button>
          </div>
        )}

        {emotion && (
          <motion.p
            className="text-2xl mt-6 text-green-400 font-semibold capitalize"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            You look {emotion}!
          </motion.p>
        )}
      </div>
    </section>
  );
}
