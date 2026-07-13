import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import HomeHero from '../components/HomeHero'
import WhyConquestSection from '../components/WhyConquestSection'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import PackageCard from '../components/PackageCard'
import TestimonialCard from '../components/TestimonialCard'
import TeamCard from '../components/TeamCard'
import TeamPhoto from '../components/TeamPhoto'
import StatsBar from '../components/StatsBar'
import CTASection from '../components/CTASection'
import { services } from '../data/services'
import { packages } from '../data/packages'
import { testimonials } from '../data/testimonials'
import { team } from '../data/team'
import { siteInfo } from '../data/siteInfo'

const whyChooseUs = [
  {
    title: 'Expert Coaching',
    description: 'Certified trainers who build programs around your goals, not the other way around.',
  },
  {
    title: 'Modern Equipment',
    description: 'A fully equipped gym floor with the latest strength and cardio machines.',
  },
  {
    title: 'Flexible Scheduling',
    description: 'Classes and personal training slots that fit around your work and life.',
  },
  {
    title: 'Real Results',
    description: 'Structured programs and progress tracking so effort turns into visible results.',
  },
]

export default function Home() {
  return (
    <>
      <PageMeta title={siteInfo.siteTitle} description={siteInfo.metaDescription} />

      <HomeHero />

      <WhyConquestSection />

      {/* Featured services */}
      <section className="section bg-ink-900">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Offer"
            title="Featured Services"
            description="Everything you need to train smarter, from personal coaching to group classes."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow={`Why ${siteInfo.brandShort}`}
            title="Why Members Choose Us"
            description="A gym experience built on coaching quality, equipment, and community."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <StatsBar />
          </div>
        </div>
      </section>

      {/* Featured packages */}
      <section className="section bg-ink-900">
        <div className="container-page">
          <SectionHeading
            eyebrow="Membership"
            title="Featured Packages"
            description="Simple, transparent pricing with no hidden fees. Cancel or upgrade anytime."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/packages" className="btn-outline">
              Compare All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Meet The Coaches"
            title="Our Trainers"
            description="Certified professionals dedicated to helping you train safely and effectively."
          />
          {siteInfo.teamLayout === 'photo' ? (
            <TeamPhoto />
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((trainer) => (
                <TeamCard key={trainer.name} trainer={trainer} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-ink-900">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Members Say"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
