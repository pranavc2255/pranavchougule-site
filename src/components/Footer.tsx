import { profileLinks } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-16 md:mt-24 safe-bottom">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">
          <div>
            <p className="font-serif text-base text-navy font-semibold">Pranav Chougule | Ph.D. Researcher</p>
            <p className="font-mono text-[10px] text-stone tracking-wider uppercase mt-1">Robotics · Physical AI · Robot Learning</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {profileLinks.map(link => (
              <a key={link.label} href={link.href}
                target={link.href.startsWith('https') ? '_blank' : undefined}
                rel={link.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                className="font-sans text-xs text-stone hover:text-navy transition-colors tracking-wide touch-target">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-50 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-mono text-xs text-stone">© {new Date().getFullYear()} Pranav Chougule</p>
          <p className="font-mono text-xs text-stone">Drexel University · Philadelphia, PA</p>
        </div>
      </div>
    </footer>
  )
}
