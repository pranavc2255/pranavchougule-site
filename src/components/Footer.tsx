export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-serif text-base text-navy font-semibold">Pranav Chougule</p>
          <p className="font-mono text-xs text-stone tracking-wider uppercase mt-1">
            PhD Researcher · Robotics & AI for Infrastructure NDE
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/pranavc2255/" target="_blank" rel="noopener noreferrer"
             className="font-sans text-xs text-stone hover:text-navy transition-colors tracking-wide">
            LinkedIn
          </a>
          <a href="https://github.com/pranavc2255/" target="_blank" rel="noopener noreferrer"
             className="font-sans text-xs text-stone hover:text-navy transition-colors tracking-wide">
            GitHub
          </a>
          <a href="mailto:pranavc2204@gmail.com"
             className="font-sans text-xs text-stone hover:text-navy transition-colors tracking-wide">
            Email
          </a>
        </div>
        <p className="font-mono text-xs text-gray-300">
          © {new Date().getFullYear()} Pranav Chougule
        </p>
      </div>
    </footer>
  )
}
