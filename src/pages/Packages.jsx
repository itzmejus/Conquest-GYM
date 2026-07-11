import PageMeta from '../components/PageMeta'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import PackageCard from '../components/PackageCard'
import CTASection from '../components/CTASection'
import { images } from '../data/images'
import { packages } from '../data/packages'

const faqs = [
  {
    question: 'Can I change plans later?',
    answer: 'Yes. Speak with our team about upgrading or downgrading your membership at any time.',
  },
  {
    question: 'How do I sign up?',
    answer: 'There is no online checkout — contact us and a member of our team will help you choose a plan and get started in person.',
  },
  {
    question: 'Can I visit before joining?',
    answer: 'Absolutely. Contact us to arrange a visit to Conquest Fitness Centre and see the gym floor for yourself.',
  },
]

export default function Packages() {
  return (
    <>
      <PageMeta
        title="Membership Packages | Conquest Fitness Centre"
        description="Compare Conquest Fitness Centre membership packages — Basic, Standard, and Premium — and find the right plan for your training goals in Abu Dhabi."
      />

      <Hero
        eyebrow="Membership Packages"
        title="Simple Pricing for Every Fitness Goal"
        description="Choose the membership that fits your training style. Every plan includes full access to a modern gym floor and expert coaching support."
        image={images.dumbbellRack}
        imageAlt="Rack of dumbbells in the Conquest Fitness Centre weight room"
        primaryCta={{ label: 'Talk to Us', to: '/contact' }}
        secondaryCta={{ label: 'View Services', to: '/services' }}
        minHeight="min-h-[55vh]"
      />

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Choose Your Plan"
            title="Membership Packages"
            description="No checkout, no payment forms — just tell us which plan you're interested in and our team will set you up."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-900">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Membership FAQs" />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card p-6">
                <h3 className="font-heading text-base font-bold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Join Conquest Fitness?"
        description="Reach out and our team will help you pick the right membership and get started."
        ctaLabel="Contact Us to Join"
        ctaTo="/contact"
      />
    </>
  )
}
