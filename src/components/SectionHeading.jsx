export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <div className={`mb-12 flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-gray-400">{description}</p>}
    </div>
  )
}
