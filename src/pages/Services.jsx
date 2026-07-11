import PageMeta from '../components/PageMeta'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { images } from '../data/images'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <PageMeta
        title="Fitness Services | Conquest Fitness Centre"
        description="Explore Conquest Fitness Centre services in Abu Dhabi: personal training, strength training, cardio and functional training, group fitness, weight management, and nutrition guidance."
      />

      <Hero
        eyebrow="Our Services"
        title="Training Programs Built Around Your Goals"
        description="From one-on-one coaching to high-energy group classes, every Conquest Fitness program is guided by professional trainers to help you get real results."
        image={images.strengthTraining}
        imageAlt="Trainer guiding a client through a strength training exercise"
        primaryCta={{ label: 'Book a Free Consultation', to: '/contact' }}
        secondaryCta={{ label: 'View Packages', to: '/packages' }}
        minHeight="min-h-[60vh]"
      />

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Offer"
            title="Every Way to Train at Conquest Fitness"
            description="Pick a single program or combine a few — our coaches will help you build the right plan."
            align="left"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} detailed />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which program fits you?"
        description="Book a free consultation and our coaching team will recommend the right mix of services for your goals."
        ctaLabel="Book a Free Consultation"
        ctaTo="/contact"
      />
    </>
  )
}
