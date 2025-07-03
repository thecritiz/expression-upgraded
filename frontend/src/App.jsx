// src/App.jsx
import { useState } from "react";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WebcamSection from "./components/WebcamCapture.jsx";
import RecommendationsSection from "./components/Recommendations";
import Footer from "./components/Footer";

export default function App() {
  const [emotion, setEmotion] = useState(null);
  const [movies, setMovies] = useState([]);

  const handleCapture = async (blob) => {
    const formData = new FormData();
    formData.append("file", blob);
    const res = await fetch("/predict", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setEmotion(data.emotion);
    setMovies(data.movies);
  };

  return (
    <main className="bg-gray-900 text-white font-sans scroll-smooth">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WebcamSection emotion={emotion} onCapture={handleCapture} />
      <RecommendationsSection emotion={emotion} movies={movies} />
      <Footer />
    </main>
  );
}
