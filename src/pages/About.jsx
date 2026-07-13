import PageMeta from '../components/PageMeta'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import StatsBar from '../components/StatsBar'
import TeamCard from '../components/TeamCard'
import TeamPhoto from '../components/TeamPhoto'
import CTASection from '../components/CTASection'
import { images } from '../data/images'
import { team } from '../data/team'
import { siteInfo } from '../data/siteInfo'

const values = [
  {
    title: 'Mission',
    description:
      'To make expert coaching and modern training accessible, helping every member build a stronger, healthier life.',
  },
  {
    title: 'Vision',
    description:
      'To be the gym our community trusts most — known for real results, honest coaching, and a welcoming floor.',
  },
  {
    title: 'Core Values',
    description:
      'Discipline, accountability, and respect. We train hard, support each other, and celebrate every milestone.',
  },
]

const facilities = [
  {
    title: 'Free Weights & Strength Zone',
    description: 'A full range of barbells, dumbbells, and racks for serious strength training.',
    image: images.weightRoom,
    alt: `Free weights and strength training area at ${siteInfo.brand}`,
  },
  {
    title: 'Cardio Deck',
    description: 'Treadmills, bikes, and rowers with heart-rate tracking for every fitness level.',
    image: images.treadmillRun,
    alt: `Cardio machines including treadmills at ${siteInfo.brand}`,
  },
  {
    title: 'Group Studio',
    description: 'A dedicated studio for HIIT, spin, and bootcamp-style classes.',
    image: images.spinClass,
    alt: 'Group fitness studio used for spin and HIIT classes',
  },
]

export default function About() {
  return (
    <>
      <PageMeta
        title={`About ${siteInfo.brand}`}
        description={`Learn about ${siteInfo.brand} in ${siteInfo.city} — a community-focused gym with modern equipment, friendly trainers, and a clean, motivating training environment.`}
      />

      <Hero
        eyebrow={`About ${siteInfo.brandShort}`}
        title={`A Community-Focused Gym in ${siteInfo.city}`}
        description={`${siteInfo.brand} brings together modern strength and cardio equipment, friendly and experienced trainers, and a clean, motivating environment for members of every level.`}
        image={images.aboutFacility}
        imageAlt={`Wide view of the ${siteInfo.brand} gym facility`}
        primaryCta={{ label: 'Join Today', to: '/contact' }}
        secondaryCta={{ label: 'Meet the Trainers', to: '#team' }}
        minHeight="min-h-[60vh]"
      />

      {/* Story */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <img
            src={images.gymFloor}
            alt={`Members training on the ${siteInfo.brand} gym floor`}
            className="h-full w-full rounded-xl object-cover"
            loading="lazy"
          />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="text-3xl font-bold sm:text-4xl">
              A Gym Built Around Coaching, Not Just Equipment
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-400">
              {siteInfo.brand} gives members access to modern strength and cardio equipment
              alongside friendly, experienced trainers — in a clean, motivating space designed
              for serious training without the intimidation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400">
              Conveniently located in {siteInfo.city}, {siteInfo.brandShort} supports members at
              every stage — from first-time gym-goers to experienced athletes — with personal
              training, strength and cardio programs, and group fitness classes under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section bg-ink-900">
        <div className="container-page">
          <SectionHeading eyebrow="What Drives Us" title="Mission, Vision & Values" />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container-page">
          <StatsBar />
        </div>
      </section>

      {/* Facilities */}
      <section className="section bg-ink-900">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Facilities"
            title="Everything You Need to Train"
            description="A gym floor designed for strength, cardio, and group training — all in one space."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {facilities.map((facility) => (
              <div key={facility.title} className="card overflow-hidden">
                <img src={facility.image} alt={facility.alt} className="h-48 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold">{facility.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section scroll-mt-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Meet The Coaches"
            title="Our Training Team"
            description="Certified trainers dedicated to helping you train safely and see real progress."
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

      <CTASection />
    </>
  )
}
