import { siteInfo } from '../data/siteInfo'

export default function TeamPhoto() {
  return (
    <div className="mx-auto max-w-4xl">
      <img
        src="/OurTeam.png"
        alt={`The ${siteInfo.brand} training team`}
        className="w-full rounded-xl object-cover shadow-xl"
        loading="lazy"
      />
    </div>
  )
}
