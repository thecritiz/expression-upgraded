export default function Recommendations({ emotion, movies }) {
  if (!emotion || !movies.length) return null;

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-white mb-4 capitalize">
        Detected Emotion: <span className="text-green-400">{emotion}</span>
      </h2>
      <h3 className="text-xl text-gray-300 mb-6">Recommended Movies Based on Your Mood</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-700 transition duration-200"
          >
            <h4 className="text-lg font-semibold text-white">{movie.title}</h4>
            <p className="text-sm text-gray-400 mt-1 italic">{movie.genres}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
