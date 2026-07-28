import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-8 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
          <span className="font-display text-sm tracking-[0.2em] uppercase font-light">
            KĀLIX <span className="text-black/40">services</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm tracking-wide relative font-light hover:font-normal transition-all ${
                  isActive ? 'font-normal' : ''
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative pb-1">
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-black" />
                  )}
                </span>
              )}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="text-sm tracking-wide font-light border border-black/20 px-5 py-2.5 hover:bg-black hover:text-white transition-all duration-300"
          >
            Get Started
          </Link>
        </nav>

        <button
          className="md:hidden p-2 -mr-2 text-black transition-transform active:scale-95 z-50 relative"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-40 flex flex-col pt-28 px-8 pb-12 md:hidden overflow-y-auto">
          <nav className="flex flex-col gap-8 flex-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-3xl tracking-wide font-light ${isActive ? 'font-normal' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-3xl tracking-wide font-light"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
