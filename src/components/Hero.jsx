import { Link } from 'react-router-dom'

export default function Hero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryCta = { label: 'Join Now', to: '/contact' },
  secondaryCta = { label: 'View Services', to: '/services' },
  minHeight = 'min-h-[85vh]',
}) {
  return (
    <section className={`relative flex ${minHeight} items-center overflow-hidden bg-ink-950`}>
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
      <div className="container-page relative z-10 py-24">
        <div className="max-w-2xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          {description && <p className="mt-6 text-lg leading-relaxed text-gray-300">{description}</p>}
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryCta && <CtaLink cta={primaryCta} className="btn-primary" />}
            {secondaryCta && <CtaLink cta={secondaryCta} className="btn-outline" />}
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaLink({ cta, className }) {
  if (cta.to.startsWith('#')) {
    return (
      <a href={cta.to} className={className}>
        {cta.label}
      </a>
    )
  }

  return (
    <Link to={cta.to} className={className}>
      {cta.label}
    </Link>
  )
}
