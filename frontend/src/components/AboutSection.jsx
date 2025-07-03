// src/components/AboutSection.jsx
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 px-8 bg-gray-800 text-gray-200" id="about">
      <div className="max-w-5xl mx-auto">
        <motion.h2 className="text-3xl font-bold mb-6 text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          About the Project
        </motion.h2>
        <motion.p className="text-lg text-gray-300 leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          This project is a fusion of artificial intelligence and entertainment. By leveraging a deep learning model trained on facial expressions,
          we detect real-time emotions and map them to curated movie genres. Whether you're feeling joyful, sad, surprised, or neutral, our system
          finds a film that fits your mood. Built with FastAPI, TensorFlow, and React, it's a fast, elegant example of emotion-aware user interfaces.
        </motion.p>
      </div>
    </section>
  );
}
