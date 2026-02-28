'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/',             label: 'Home' },
  { href: '/research',     label: 'Research' },
  { href: '/background',   label: 'Background' },
  { href: '/publications', label: 'Publications' },
  { href: '/contact',      label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / name */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-serif text-xl font-semibold text-navy tracking-tight group-hover:text-navy-light transition-colors">
            Pranav Chougule
          </span>
          <span className="font-mono text-[10px] text-stone tracking-widest uppercase mt-0.5">
            Robotics · AI · NDE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link font-sans text-sm font-medium tracking-wide pb-0.5 transition-colors ${
                pathname === l.href ? 'text-navy active' : 'text-stone hover:text-navy'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-stone hover:text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block h-0.5 w-6 bg-current transition-all ${open ? 'opacity-0' : ''}`}/>
            <span className={`block h-0.5 w-6 bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}/>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium border-b border-gray-50 ${
                pathname === l.href ? 'text-navy bg-mist' : 'text-stone hover:text-navy hover:bg-mist'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
