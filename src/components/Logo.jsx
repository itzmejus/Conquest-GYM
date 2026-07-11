import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <img src="/Logo.png" alt="" className="h-8 w-auto invert sm:h-10" />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-bold uppercase tracking-wide text-white sm:text-2xl">
          Conquest<span className="text-accent-500">.</span>
        </span>
        <span className="font-heading text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-400 sm:text-[11px] sm:tracking-[0.3em]">
          Fitness Centre
        </span>
      </span>
    </Link>
  )
}
