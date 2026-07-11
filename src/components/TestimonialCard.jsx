export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="card flex h-full flex-col p-8">
      <QuoteIcon />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-300">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6">
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
          {testimonial.name}
        </p>
        <p className="text-xs text-gray-500">{testimonial.location}</p>
      </figcaption>
    </figure>
  )
}

function QuoteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-accent-500/70">
      <path d="M7.17 6C4.86 6 3 7.86 3 10.17c0 2.1 1.53 3.83 3.53 4.13-.2 1.6-1.1 2.7-2.53 3.4v2.3c3.13-.7 5.5-3.4 5.5-6.7V10.17C9.5 7.86 7.64 6 7.17 6Zm10 0c-2.31 0-4.17 1.86-4.17 4.17 0 2.1 1.53 3.83 3.53 4.13-.2 1.6-1.1 2.7-2.53 3.4v2.3c3.13-.7 5.5-3.4 5.5-6.7V10.17C19.5 7.86 17.64 6 17.17 6Z" />
    </svg>
  )
}
