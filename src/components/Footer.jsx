import { Link } from 'react-router-dom'
import { navLinks } from '../data/navigation'
import { packages } from '../data/packages'
import { siteInfo } from '../data/siteInfo'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Conquest Fitness Centre is a modern gym in Al Danah, Abu Dhabi, offering strength and
            cardio training, personal coaching, and group fitness classes in a clean, motivating
            environment.
          </p>
          {/* Placeholder social links until official accounts are available. */}
          <div className="mt-6 flex gap-3">
            {siteInfo.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-300 hover:border-accent-500 hover:text-accent-500"
              >
                <SocialIcon label={item.label} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-gray-400 hover:text-accent-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Membership Packages
          </h3>
          <ul className="space-y-2 text-sm">
            {packages.map((pkg) => (
              <li key={pkg.name}>
                <Link to="/packages" className="text-gray-400 hover:text-accent-500">
                  {pkg.name}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wide text-white">
            Opening Hours
          </h3>
          <ul className="space-y-1 text-sm text-gray-400">
            {siteInfo.hours.map((slot) => (
              <li key={slot.days}>
                <span className="text-gray-300">{slot.days}:</span> {slot.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {siteInfo.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li>
              <a href={`tel:${siteInfo.phone.replace(/[^\d+]/g, '')}`} className="hover:text-accent-500">
                {siteInfo.phone}
              </a>
            </li>
            <li>
              <a href={`tel:${siteInfo.phoneAlt.replace(/[^\d+]/g, '')}`} className="hover:text-accent-500">
                {siteInfo.phoneAlt}
              </a>
            </li>
            <li>
              {/* Placeholder email until the client provides an official address. */}
              <a href={`mailto:${siteInfo.email}`} className="hover:text-accent-500">
                {siteInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-gray-500 sm:flex-row">
          <p>© {year} Conquest Fitness Centre. All rights reserved.</p>
          <p>Al Falah Street, Al Danah, Abu Dhabi</p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ label }) {
  const paths = {
    Facebook:
      'M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.24 4.32 15.36 4.25 14.33 4.25c-2.15 0-3.62 1.31-3.62 3.72V10.5H8.5v3H10.71V21h2.79Z',
    Instagram:
      'M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 6.15a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8ZM16.2 4.5H7.8a3.3 3.3 0 0 0-3.3 3.3v8.4a3.3 3.3 0 0 0 3.3 3.3h8.4a3.3 3.3 0 0 0 3.3-3.3V7.8a3.3 3.3 0 0 0-3.3-3.3Zm1.95 11.7a1.95 1.95 0 0 1-1.95 1.95H7.8a1.95 1.95 0 0 1-1.95-1.95V7.8A1.95 1.95 0 0 1 7.8 5.85h8.4a1.95 1.95 0 0 1 1.95 1.95v8.4ZM16.65 7.35a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z',
    Twitter:
      'M20.25 6.4c-.55.24-1.14.4-1.76.48a3.07 3.07 0 0 0 1.35-1.7c-.6.35-1.26.6-1.96.74a3.06 3.06 0 0 0-5.22 2.79A8.7 8.7 0 0 1 6.1 5.6a3.06 3.06 0 0 0 .95 4.09c-.5-.02-.97-.16-1.38-.38v.04a3.06 3.06 0 0 0 2.46 3A3.1 3.1 0 0 1 6.75 12c-.13 0-.26 0-.39-.03a3.07 3.07 0 0 0 2.86 2.13A6.15 6.15 0 0 1 4.5 15.6a8.68 8.68 0 0 0 4.7 1.38c5.64 0 8.72-4.67 8.72-8.72l-.01-.4c.6-.43 1.12-.97 1.34-1.46Z',
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d={paths[label]} />
    </svg>
  )
}
