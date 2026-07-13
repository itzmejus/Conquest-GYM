import { siteInfo } from '../data/siteInfo'

export default function TeamCard({ trainer }) {
  return (
    <article className="card overflow-hidden text-center">
      <img
        src={trainer.photo}
        alt={`${trainer.name}, ${trainer.role} at ${siteInfo.brand}`}
        className="h-64 w-full object-cover"
        loading="lazy"
      />
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold">{trainer.name}</h3>
        <p className="mt-1 text-sm text-accent-500">{trainer.role}</p>
      </div>
    </article>
  )
}
