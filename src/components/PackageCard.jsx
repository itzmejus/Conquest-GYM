import { Link } from 'react-router-dom'

export default function PackageCard({ pkg }) {
  return (
    <div
      className={`card relative flex h-full flex-col p-8 ${
        pkg.recommended ? 'border-accent-500/60 ring-1 ring-accent-500/40' : ''
      }`}
    >
      {pkg.recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-ink-950">
          Most Popular
        </span>
      )}

      <h3 className="text-center font-heading text-xl font-bold uppercase tracking-wide">
        {pkg.name}
      </h3>
      <p className="mt-2 text-center text-sm text-gray-400">{pkg.description}</p>

      <div className="my-6 flex items-baseline justify-center gap-1.5">
        <span className="text-2xl font-bold text-white sm:text-3xl">AED</span>
        <span className="text-4xl font-bold text-white">{pkg.price}</span>
        <span className="text-sm text-gray-400">/ {pkg.period}</span>
      </div>

      <ul className="mb-8 flex-1 space-y-3 text-sm text-gray-300">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={pkg.recommended ? 'btn-primary w-full' : 'btn-outline w-full'}
      >
        Join Now
      </Link>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}
