import { Link } from 'react-router-dom'
import { siteInfo } from '../data/siteInfo'

export default function Logo({ className = '' }) {
  const [firstWord, ...rest] = siteInfo.brand.split(' ')
  const restWords = rest.join(' ')

  return (
    <Link to="/" className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <img src={siteInfo.logoPath} alt="" className="h-8 w-auto invert sm:h-10" />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-bold uppercase tracking-wide text-white sm:text-2xl">
          {firstWord}
          <span className="text-accent-500">.</span>
        </span>
        {restWords && (
          <span className="font-heading text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-400 sm:text-[11px] sm:tracking-[0.3em]">
            {restWords}
          </span>
        )}
      </span>
    </Link>
  )
}
