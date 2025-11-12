import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projecten', label: 'Projecten' },
  { to: '/bureau', label: 'Bureau' },
  { to: '/nieuws', label: 'Nieuws' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-black tracking-tight text-2xl">
            <span className="inline-block pr-1">OTH</span>
            <span className="inline-block -ml-1">_</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative py-1 transition-colors ${
                  location.pathname === item.to
                    ? 'text-black'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                <span>{item.label}</span>
                {location.pathname === item.to && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent" />
                )}
              </Link>
            ))}
          </nav>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10 bg-white/70"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`block px-2 py-3 rounded-lg transition-colors ${
                  location.pathname === item.to
                    ? 'bg-black text-white'
                    : 'text-black/80 hover:bg-black/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
