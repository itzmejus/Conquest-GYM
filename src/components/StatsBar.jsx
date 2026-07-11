import { stats } from '../data/stats'

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-8 rounded-xl border border-white/5 bg-ink-900 p-8 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="font-heading text-3xl font-bold text-accent-500 sm:text-4xl">{stat.value}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-400 sm:text-sm">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
