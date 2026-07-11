import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <img src="/Logo.png" alt="" className="h-10 w-auto invert" />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-2xl font-bold uppercase tracking-wide text-white">
          Conquest<span className="text-accent-500">.</span>
        </span>
        <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-400">
          Fitness Centre
        </span>
      </span>
    </Link>
  )
}
