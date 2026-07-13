// All brand/contact details are read from environment variables so this
// codebase can be reused for a different gym by only editing .env — see
// .env.example for the full list of variables and README.md for the
// white-label workflow. Nothing in the rest of the app should hardcode
// a brand name, address, or contact detail; import siteInfo instead.
const env = import.meta.env

const brand = env.VITE_BRAND_NAME
const brandShort = env.VITE_BRAND_SHORT || brand

const addressLines = [env.VITE_ADDRESS_LINE1, env.VITE_ADDRESS_LINE2, env.VITE_ADDRESS_LINE3].filter(
  Boolean,
)
const address = addressLines.join(', ')

const mapQuery = encodeURIComponent(`${brand}, ${address}`)

export const siteInfo = {
  brand,
  brandShort,
  city: env.VITE_CITY,
  phone: env.VITE_PHONE,
  phoneAlt: env.VITE_PHONE_ALT,
  email: env.VITE_EMAIL,
  address,
  addressLines,
  hours: [
    { days: env.VITE_HOURS_WEEKDAY_DAYS, time: env.VITE_HOURS_WEEKDAY_TIME },
    { days: env.VITE_HOURS_WEEKEND_DAYS, time: env.VITE_HOURS_WEEKEND_TIME },
  ],
  // Placeholder ("#") links until official social accounts are provided by the client.
  social: [
    { label: 'Facebook', href: env.VITE_SOCIAL_FACEBOOK || '#' },
    { label: 'Instagram', href: env.VITE_SOCIAL_INSTAGRAM || '#' },
    { label: 'Twitter', href: env.VITE_SOCIAL_TWITTER || '#' },
  ],
  mapEmbedSrc: `https://www.google.com/maps?q=${mapQuery}&output=embed`,
  mapLinkHref: env.VITE_MAP_LINK || `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  siteUrl: env.VITE_SITE_URL,
  siteTitle: env.VITE_SITE_TITLE,
  metaDescription: env.VITE_META_DESCRIPTION,
  // "cards" (default) = individual trainer photo/name/role cards.
  // "photo" = a single team photo (public/OurTeam.png).
  teamLayout: env.VITE_TEAM_LAYOUT === 'photo' ? 'photo' : 'cards',
  // Path (from public/) to this brand's logo file. Defaults to /Logo.png.
  logoPath: env.VITE_LOGO_PATH || '/Logo.png',
}
