'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

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
  const menuRef = useRef<HTMLDivElement>(null)

  // Close on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      ref={menuRef}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex flex-col leading-none group min-w-0">
          <span className="font-serif text-lg sm:text-xl font-semibold text-navy tracking-tight group-hover:text-navy-light transition-colors truncate">
            Pranav Chougule
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] text-stone tracking-widest uppercase mt-0.5 hidden xs:block">
            Robotics · AI · NDE
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link font-sans text-sm font-medium tracking-wide pb-0.5 transition-colors whitespace-nowrap ${
                pathname === l.href ? 'text-navy active' : 'text-stone hover:text-navy'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* ── Mobile hamburger button ── */}
        <button
          className="touch-target md:hidden text-stone hover:text-navy transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-navy/30 -mr-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg
            width="22" height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18"
                  style={{ transition: 'all 0.2s' }}/>
                <line x1="18" y1="4" x2="4" y2="18"
                  style={{ transition: 'all 0.2s' }}/>
              </>
            ) : (
              <>
                <line x1="3" y1="7"  x2="19" y2="7"  />
                <line x1="3" y1="12" x2="19" y2="12" />
                <line x1="3" y1="17" x2="14" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile menu panel ── */}
      {open && (
        <div
          id="mobile-menu"
          className="mobile-menu-open md:hidden border-t border-gray-100 bg-white shadow-lg"
        >
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={`
                  flex items-center justify-between
                  px-3 py-3.5
                  font-sans text-[15px] font-medium
                  border-b border-gray-50 last:border-0
                  transition-colors rounded-sm
                  ${pathname === l.href
                    ? 'text-navy bg-mist'
                    : 'text-stone hover:text-navy hover:bg-gray-50'
                  }
                `}
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <span>{l.label}</span>
                {pathname === l.href && (
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron shrink-0" />
                )}
              </Link>
            ))}

            {/* Contact CTA in mobile menu */}
            <div className="pt-4 pb-2 px-3">
              <a
                href="mailto:pranavc2204@gmail.com"
                className="block text-center font-sans text-sm font-medium text-white bg-navy py-3 px-4 hover:bg-navy-light transition-colors"
              >
                pranavc2204@gmail.com
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
