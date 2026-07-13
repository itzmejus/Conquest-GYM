import { Link } from 'react-router-dom'
import { siteInfo } from '../data/siteInfo'

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink-950 sm:min-h-[85vh]">
      {/* Mobile: full-bleed dimmed background image */}
      <img
        src="/hero-banner.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover sm:hidden"
        style={{ objectPosition: '0% 0%' }}
        loading="eager"
      />
      <div className="absolute inset-0 bg-ink-950/55 sm:hidden" aria-hidden="true" />

      {/* Desktop: diagonal image panel */}
      <img
        src="/hero-banner.png"
        alt={`Athlete training at ${siteInfo.brand}`}
        className="absolute inset-y-0 right-0 hidden h-full w-[48%] object-cover object-top sm:block"
        style={{ clipPath: 'polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        loading="eager"
      />

      <div className="container-page relative z-10">
        <div className="max-w-xl">
          <DumbbellIcon className="mb-5 h-8 w-8 text-white" aria-hidden="true" />
          <h1 className="font-heading text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
            <span className="text-accent-500">Train</span>{' '}
            <span className="text-white">Strong.</span>
            <br />
            <span className="text-white">Live</span>{' '}
            <span className="text-accent-500">Better.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-gray-300 sm:text-lg">
            Join {siteInfo.brand} in {siteInfo.city} and achieve your fitness goals with premium
            equipment, expert trainers, and a motivating training environment.
          </p>
          <div className="mt-9 flex flex-nowrap gap-2.5 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-full bg-accent-500 px-3 py-3 font-heading text-xs font-bold uppercase tracking-wider text-ink-950 hover:bg-accent-400 sm:flex-none sm:px-8 sm:py-4 sm:text-sm"
            >
              Join Today
            </Link>
            <Link
              to="/packages"
              className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-full border-2 border-white/60 px-3 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white hover:border-accent-500 hover:text-accent-500 sm:flex-none sm:px-8 sm:py-4 sm:text-sm"
            >
              View Memberships
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function DumbbellIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M2 9.5h1.5v5H2v-5Zm2.5.5H6v4H4.5v-4ZM7 8h2v8H7V8Zm3 3.25h4v1.5h-4v-1.5Zm5-3h2v8h-2V8Zm3 1.5h1.5v5H18v-5Z" />
    </svg>
  )
}
