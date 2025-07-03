// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function HeroSection() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-center px-6 overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            color: { value: "#ffffff" },
            move: { enable: true, speed: 1 },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
          },
        }}
      />
      <motion.h1 className="text-5xl font-bold mb-4 z-10" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}>
        🎥 Mood-Based Movie Recommender
      </motion.h1>
      <p className="max-w-xl text-lg text-gray-300 z-10">
        Uses facial emotion recognition to recommend the perfect movie for your current mood.
      </p>
      <a
        href="#demo"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-white font-semibold z-10"
      >
        Try It Live
      </a>
    </section>
  );
}
