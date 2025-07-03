// src/components/HowItWorksSection.jsx
import { motion } from "framer-motion";

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-8 bg-gray-800 text-gray-100" id="how-it-works">
      <div className="max-w-5xl mx-auto">
        <motion.h2 className="text-3xl font-bold mb-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          How It Works
        </motion.h2>
        <div className="space-y-8 text-lg">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <strong>1. Capture Your Face 🎥:</strong> Your webcam takes a live snapshot when you click the button.
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <strong>2. Emotion Analysis 🧠:</strong> The backend model processes the image and identifies your current mood.
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <strong>3. Genre Matching 🎯:</strong> Each emotion is linked to relevant movie genres (e.g., happy → comedy).
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <strong>4. Movie Suggestions 🍿:</strong> The frontend shows a list of handpicked movies tailored to your mood.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
