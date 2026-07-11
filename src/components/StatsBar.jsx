import { stats } from '../data/stats'

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-xl border border-white/5 bg-ink-900 p-5 sm:gap-8 sm:p-8 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="min-w-0 text-center">
          <p className="font-heading text-lg font-bold leading-tight text-accent-500 sm:text-2xl md:text-3xl lg:text-4xl">
            {stat.value}
          </p>
          <p className="mt-1 text-[11px] font-semibold uppercase leading-snug tracking-wide text-gray-400 sm:text-xs md:text-sm">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
