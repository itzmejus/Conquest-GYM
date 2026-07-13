import PageMeta from '../components/PageMeta'
import ContactForm from '../components/ContactForm'
import SectionHeading from '../components/SectionHeading'
import { siteInfo } from '../data/siteInfo'

const infoCards = [
  {
    title: 'Visit Us',
    lines: siteInfo.addressLines,
    icon: 'location',
  },
  {
    title: 'Call Us',
    lines: [siteInfo.phone, siteInfo.phoneAlt],
    icon: 'phone',
  },
  {
    title: 'Email Us',
    lines: [siteInfo.email],
    icon: 'mail',
  },
]

export default function Contact() {
  return (
    <>
      <PageMeta
        title={`Contact ${siteInfo.brand}`}
        description={`Get in touch with ${siteInfo.brand} in ${siteInfo.city}. Send us a message, find our address and opening hours, or ask about memberships.`}
      />

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Talk About Your Goals"
            description="Have a question about memberships, classes, or personal training? Send us a message and our team will get back to you shortly."
          />

          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            {infoCards.map((card) => (
              <div key={card.title} className="card p-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/15 text-accent-500">
                  <Icon name={card.icon} />
                </div>
                <h3 className="font-heading text-base font-bold uppercase tracking-wide">
                  {card.title}
                </h3>
                {card.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-gray-400">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <div className="space-y-8 lg:col-span-2">
              <div className="card p-6">
                <h3 className="font-heading text-lg font-bold">Opening Hours</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  {siteInfo.hours.map((slot) => (
                    <li key={slot.days} className="flex justify-between gap-4">
                      <span className="text-gray-300">{slot.days}</span>
                      <span>{slot.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-heading text-lg font-bold">Follow Us</h3>
                {/* Placeholder links until official social accounts are available. */}
                <div className="mt-4 flex gap-3">
                  {siteInfo.social.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-white/10 px-4 py-2 text-sm font-semibold text-gray-300 hover:border-accent-500 hover:text-accent-500"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          <div className="card overflow-hidden">
            <iframe
              title={`${siteInfo.brand} location map`}
              src={siteInfo.mapEmbedSrc}
              className="h-96 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href={siteInfo.mapLinkHref}
              target="_blank"
              rel="noreferrer"
              className="font-heading text-sm font-semibold uppercase tracking-wide text-accent-500 hover:text-accent-400"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function Icon({ name }) {
  const icons = {
    location: 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
    phone:
      'M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z',
    mail: 'M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 2v.01L12 13l8-5.99V7l-8 6-8-6Z',
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d={icons[name]} />
    </svg>
  )
}
