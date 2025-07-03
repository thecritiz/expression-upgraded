// src/components/FeaturesSection.jsx
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section className="py-20 px-8 bg-gray-900 text-gray-200" id="features">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="text-3xl font-bold mb-12 text-white text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          Features
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold mb-2">⚡ Real-Time Emotion Detection</h3>
            <p>Capture your facial expressions via webcam and analyze them instantly using a deep learning CNN model.</p>
          </motion.div>
          <motion.div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold mb-2">🎯 Mood-Based Movie Mapping</h3>
            <p>Smart genre mapping ensures you get the right recommendation based on your detected emotional state.</p>
          </motion.div>
          <motion.div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold mb-2">💎 Intuitive Modern UI</h3>
            <p>Enjoy a sleek, animated interface built with React, Tailwind, and Framer Motion for a smooth experience.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
