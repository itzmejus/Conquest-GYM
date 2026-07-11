import { Link } from 'react-router-dom'
import { images } from '../data/images'

export default function CTASection({
  title = 'Ready to start your fitness journey?',
  description = 'Book a free consultation with our team and get a training plan built around your goals.',
  ctaLabel = 'Book a Free Consultation',
  ctaTo = '/contact',
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20">
      <img
        src={images.gymWide}
        alt="Members training on the gym floor"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        loading="lazy"
      />
      <div className="container-page relative z-10 flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-base leading-relaxed text-gray-300">{description}</p>
        <Link to={ctaTo} className="btn-primary">
          {ctaLabel}
        </Link>
      </div>
    </section>
  )
}
