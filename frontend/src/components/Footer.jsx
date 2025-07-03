// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-center text-gray-400 text-sm">
      <div className="max-w-5xl mx-auto px-4">
        <p className="mb-2">
          Made with ❤️ by a guy who loves AI & movies.
        </p>
        <p>
          Built using <strong>FastAPI</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>TensorFlow</strong>
        </p>
        <div className="mt-4 flex justify-center gap-6 text-gray-500">
          <a href="#" className="hover:text-white transition">GitHub</a>
          <a href="#" className="hover:text-white transition">Docs</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
