import Image from 'next/image'
import Link from 'next/link'
import { FocusAreas, FeaturedProjects, PublicationList, ProfileLinks } from '@/components/ResearchContent'
import { introduction, interaction, about, interests } from '@/data/profile'

export default function HomePage() {
  return (
    <>
      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 md:pt-20 pb-14 md:pb-24">
        <div className="flex flex-row items-start gap-5 sm:gap-8 md:gap-16">
          <div className="flex-1 min-w-0">
            <span className="tag tag-saffron mb-4 md:mb-6 inline-block text-[9px] sm:text-[11px]" style={{ whiteSpace: 'normal', lineHeight: 1.6 }}>Ph.D. Researcher | Drexel University</span>
            <h1 className="font-serif font-light text-ink leading-tight mb-4" style={{ fontSize: 'clamp(1.6rem, 7vw, 3.75rem)' }}>
              Pranav<br /><span className="font-semibold text-navy">Chougule</span>
            </h1>
            <hr className="accent-rule w-12 md:w-20 mb-4 md:mb-6" />
            <p className="font-serif italic text-stone mb-6 leading-relaxed" style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1.25rem)' }}>
              Robot Learning · Physical AI · Computer Vision · Robotics
            </p>
            <div className="hidden sm:block font-sans text-sm md:text-base text-stone leading-relaxed mb-8 max-w-xl space-y-4">
              <p>{introduction}</p><p>{interaction}</p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4">
              <Link href="/research" className="inline-block bg-navy text-white font-sans text-sm font-medium px-4 md:px-6 py-3 hover:bg-navy-light transition-colors text-center">Research →</Link>
              <a href="#contact" className="inline-block border border-navy text-navy font-sans text-sm font-medium px-4 md:px-6 py-3 hover:bg-mist transition-colors text-center">Contact</a>
            </div>
          </div>
          <div className="shrink-0" style={{ width: 'clamp(120px, 38vw, 340px)' }}>
            <div className="relative">
              <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-full h-full border border-saffron opacity-50 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-full h-full border border-navy opacity-20 pointer-events-none" />
              <div className="relative z-10 w-full overflow-hidden" style={{ aspectRatio: '3 / 4' }}>
                <Image src="/images/portrait.jpg" alt="Pranav Chougule" fill priority
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                  sizes="(max-width: 768px) 38vw, 340px" />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden font-sans text-sm text-stone leading-relaxed mt-8 space-y-4">
          <p>{introduction}</p><p>{interaction}</p>
        </div>
      </section>

      <section id="focus-areas" aria-labelledby="focus-title" className="bg-mist border-y border-gray-100 py-12 md:py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 id="focus-title" className="font-serif text-navy mb-2">Research Focus Areas</h2>
          <hr className="accent-rule w-16 mb-8 md:mb-10" />
          <FocusAreas />
        </div>
      </section>

      <section id="projects" aria-labelledby="projects-title" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 scroll-mt-20">
        <h2 id="projects-title" className="font-serif text-navy mb-2">Featured Projects</h2>
        <hr className="accent-rule w-16 mb-8 md:mb-10" />
        <FeaturedProjects />
      </section>

      <section id="publications" aria-labelledby="publications-title" className="bg-mist border-y border-gray-100 py-12 md:py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 id="publications-title" className="font-serif text-navy mb-2">Publications</h2>
          <hr className="accent-rule w-16 mb-8 md:mb-10" />
          <PublicationList />
          <Link href="/publications" className="inline-block font-sans text-sm text-navy hover:underline mt-6 py-2">Publication details →</Link>
        </div>
      </section>

      <section id="about" aria-labelledby="about-title" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 scroll-mt-20">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          <div className="md:col-span-2">
            <span className="tag mb-4 inline-block">About</span>
            <h2 id="about-title" className="font-serif text-ink mb-4">About Me</h2>
            <div className="font-sans text-sm md:text-base text-stone leading-relaxed space-y-4">
              {about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              <p><strong className="text-navy">Research Interests:</strong> {interests}</p>
            </div>
          </div>
          <dl className="space-y-6">
            <div className="border-l-2 border-saffron pl-5">
              <dt className="font-mono text-[10px] text-stone uppercase tracking-widest mb-2">Degree</dt>
              <dd className="font-serif text-base text-navy">Ph.D. Researcher — Drexel University</dd>
            </div>
            <div className="border-l-2 border-saffron pl-5">
              <dt className="font-mono text-[10px] text-stone uppercase tracking-widest mb-2">Research Area</dt>
              <dd className="font-serif text-base text-navy">Robotics, Physical AI, Computer Vision &amp; Robot Learning</dd>
            </div>
            <div className="border-l-2 border-navy pl-5">
              <dt className="font-mono text-[10px] text-stone uppercase tracking-widest mb-2">Primary Research Application</dt>
              <dd className="font-serif text-base text-navy">Nondestructive Evaluation (NDE)</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="bg-mist border-y border-gray-100 py-12 md:py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 id="contact-title" className="font-serif text-navy mb-2">Contact</h2>
          <hr className="accent-rule w-16 mb-6" />
          <p className="font-sans text-sm md:text-base text-stone leading-relaxed mb-5 max-w-2xl">
            I welcome research collaborations and internship opportunities in robot learning, Physical AI, computer vision, and robotics.
          </p>
          <ProfileLinks />
        </div>
      </section>
    </>
  )
}
