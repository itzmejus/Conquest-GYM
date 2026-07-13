import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/navigation'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b transition-colors duration-300 ${
          scrolled ? 'border-white/10 bg-ink-950/95 backdrop-blur' : 'border-transparent bg-ink-950'
        }`}
      >
        <div className="container-page relative flex h-20 items-center md:justify-between">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:left-auto md:top-auto md:translate-x-0 md:translate-y-0">
            <Logo />
          </div>

          <nav aria-label="Primary navigation" className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `font-heading text-sm font-semibold uppercase tracking-wide ${
                    isActive ? 'text-accent-500' : 'text-gray-200 hover:text-accent-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3 md:ml-0">
            <NavLink to="/contact" className="btn-primary hidden md:inline-flex">
              Join Now
            </NavLink>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="rounded-md p-2 text-white hover:bg-white/10 md:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
