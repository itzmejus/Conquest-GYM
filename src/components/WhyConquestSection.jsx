import { Link } from 'react-router-dom'

const points = [
  'Personal Training',
  'Strength Training',
  'Cardio & Functional Training',
  'Group Fitness Classes',
]

export default function WhyConquestSection() {
  return (
    <section className="section bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <TriangleAccents side="left" />
          <img
            src="/why-conquest.jpg"
            alt="Conquest Fitness Centre members training together"
            className="relative z-10 w-full rounded-xl object-cover shadow-xl"
            loading="lazy"
          />
          <TriangleAccents side="right" />
        </div>

        <div>
          <span className="mb-3 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.2em] text-accent-500">
            Why Conquest Fitness
          </span>
          <h2 className="font-heading text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink-950 sm:text-5xl">
            Best <span className="text-accent-500">Equipment</span>
            <br />
            &amp; <span className="text-accent-500">Professional</span> Trainers
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600">
            Conquest Fitness Centre is built around modern strength and cardio equipment,
            friendly and experienced trainers, and a clean, motivating environment. Whether
            you're just getting started or you're an experienced lifter, our coaches design a
            plan that meets you where you are.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-semibold text-ink-950">
                <span className="h-5 w-5 flex-shrink-0 rounded-full border-2 border-accent-500" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-nowrap items-center gap-3 sm:gap-6">
            <Link
              to="/contact"
              className="inline-flex flex-shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-accent-500 px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-ink-950 hover:bg-accent-400 sm:px-9 sm:py-4 sm:text-sm"
            >
              Let's Start
            </Link>
            <Link
              to="/services"
              className="group inline-flex min-w-0 items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-ink-950 hover:text-accent-500 sm:gap-3 sm:text-sm"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-ink-950 group-hover:border-accent-500 sm:h-14 sm:w-14">
                <ArrowIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </span>
              <span className="whitespace-nowrap">Our Services</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function TriangleAccents({ side }) {
  const items =
    side === 'left'
      ? [
          { color: 'bg-accent-500', top: '5%', left: '-8%' },
          { color: 'bg-ink-950', top: '13%', left: '-2%' },
          { color: 'bg-ink-950', top: '21%', left: '-10%' },
        ]
      : [
          { color: 'bg-accent-500', bottom: '18%', right: '-8%' },
          { color: 'bg-ink-950', bottom: '10%', right: '-1%' },
          { color: 'bg-accent-500', bottom: '2%', right: '-9%' },
        ]

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden sm:block">
      {items.map((item, i) => (
        <span
          key={i}
          className={`absolute h-3.5 w-3.5 ${item.color}`}
          style={{
            top: item.top,
            left: item.left,
            bottom: item.bottom,
            right: item.right,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />
      ))}
    </div>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-5.5-5.5M19.5 12l-5.5 5.5" />
    </svg>
  )
}
