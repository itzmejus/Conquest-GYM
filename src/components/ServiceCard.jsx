import { Link } from 'react-router-dom'

export default function ServiceCard({ service, detailed = false }) {
  return (
    <article className="card flex h-full flex-col overflow-hidden">
      <img
        src={service.image}
        alt={service.alt}
        className="h-52 w-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">{service.description}</p>

        {detailed && (
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <CheckIcon />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}

        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-accent-500 hover:text-accent-400"
        >
          Enquire Now
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-5.5-5.5M19.5 12l-5.5 5.5" />
          </svg>
        </Link>
      </div>
    </article>
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
