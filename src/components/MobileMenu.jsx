import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/navigation'

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${open ? '' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <nav
        aria-label="Mobile navigation"
        className={`absolute right-0 top-0 flex h-full w-72 max-w-[85%] flex-col gap-2 bg-ink-900 p-6 shadow-xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-heading text-lg font-bold uppercase text-white">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-2 text-gray-300 hover:bg-white/10 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={onClose}
            className={({ isActive }) =>
              `rounded-md px-3 py-3 font-heading text-base font-semibold uppercase tracking-wide ${
                isActive ? 'bg-white/5 text-accent-500' : 'text-gray-200 hover:bg-white/5 hover:text-accent-500'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/contact" onClick={onClose} className="btn-primary mt-4 w-full">
          Join Now
        </NavLink>
      </nav>
    </div>
  )
}
