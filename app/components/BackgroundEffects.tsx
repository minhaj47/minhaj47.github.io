export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated Circles */}
      <div
        className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute top-1/4 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "5s", animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "7s", animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "5.5s", animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-2/3 right-10 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "6.5s", animationDelay: "2.5s" }}
      />
    </div>
  );
}
