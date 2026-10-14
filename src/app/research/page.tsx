import type { Metadata } from 'next'
import { FocusAreas, FeaturedProjects } from '@/components/ResearchContent'

export const metadata: Metadata = {
  title: 'Research — Pranav Chougule',
  description: 'Robot learning, Physical AI, computer vision, and robotic manipulation, with nondestructive evaluation as a primary research application.',
}

export default function ResearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="mb-10 md:mb-16">
        <span className="tag mb-4 inline-block">Research</span>
        <h1 className="font-serif text-ink mb-4">Robot Learning &amp; Physical AI</h1>
        <hr className="accent-rule w-20 mb-6" />
        <p className="font-sans text-sm md:text-base text-stone max-w-2xl leading-relaxed">
          My research connects robotic perception, physical interaction, and learning from sensor feedback.
          Nondestructive evaluation (NDE) is my primary research application, including autonomous,
          contact-aware ultrasonic inspection of reclaimed construction materials.
        </p>
      </div>
      <section aria-labelledby="projects-title" className="mb-12 md:mb-20">
        <h2 id="projects-title" className="font-serif text-navy mb-6">Featured Projects</h2>
        <FeaturedProjects />
      </section>
      <section aria-labelledby="focus-title">
        <h2 id="focus-title" className="font-serif text-navy mb-6">Research Focus Areas</h2>
        <FocusAreas />
      </section>
    </div>
  )
}
