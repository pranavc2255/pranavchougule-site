export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-16 md:mt-24 safe-bottom">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-10">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-6">
          <div>
            <p className="font-serif text-base text-navy font-semibold">Pranav Chougule</p>
            <p className="font-mono text-[10px] text-stone tracking-wider uppercase mt-1">
              PhD Researcher · Robotics & AI for Infrastructure NDE
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="https://www.linkedin.com/in/pranavc2255/"
               target="_blank" rel="noopener noreferrer"
               className="font-sans text-xs text-stone hover:text-navy transition-colors tracking-wide touch-target">
              LinkedIn
            </a>
            <a href="https://github.com/pranavc2255/"
               target="_blank" rel="noopener noreferrer"
               className="font-sans text-xs text-stone hover:text-navy transition-colors tracking-wide touch-target">
              GitHub
            </a>
            <a href="mailto:pranavc2204@gmail.com"
               className="font-sans text-xs text-stone hover:text-navy transition-colors tracking-wide touch-target">
              Email
            </a>
          </div>
        </div>
        {/* Bottom row */}
        <div className="border-t border-gray-50 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-mono text-xs text-gray-300">
            © {new Date().getFullYear()} Pranav Chougule
          </p>
          <p className="font-mono text-xs text-gray-300">
            Drexel University · Philadelphia, PA
          </p>
        </div>
      </div>
    </footer>
  )
}
