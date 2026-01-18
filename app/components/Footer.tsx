export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-gray-900 text-center">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Md. Minhajul Haque. Built with Next.js &
        Tailwind CSS.
      </p>
    </footer>
  );
}
