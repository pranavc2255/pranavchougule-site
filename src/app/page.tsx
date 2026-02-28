import Image from 'next/image'
import Link from 'next/link'

const focusAreas = [
  { icon: '◈', label: 'Ultrasonic Pulse Velocity', sub: 'UPV signal acquisition & ML interpretation' },
  { icon: '◈', label: 'Acoustic Emission',         sub: 'Real-time structural health monitoring' },
  { icon: '◈', label: 'Hyperspectral Imaging',     sub: 'Material characterisation at scale' },
  { icon: '◈', label: 'Gaussian Splatting',        sub: '3D scene reconstruction for NDE' },
  { icon: '◈', label: 'Vision-Language Models',    sub: 'Florence-based VLM for NDE reasoning' },
  { icon: '◈', label: 'Laser Surface Monitoring',  sub: 'High-resolution displacement sensing' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 md:pt-20 pb-14 md:pb-24">

        {/*
          Side-by-side on ALL screen sizes (including mobile).
          On mobile: text takes ~55% width, portrait takes ~45%.
          On desktop: equal 50/50 columns with more breathing room.
        */}
        <div className="flex flex-row items-start gap-5 sm:gap-8 md:gap-16">

          {/* ── Text column ── */}
          <div className="flex-1 min-w-0 order-1">
            <span className="tag tag-saffron mb-4 md:mb-6 inline-block text-[9px] sm:text-[11px]">
              PhD Researcher
            </span>

            {/* Name — scales fluidly so it never wraps badly on small screens */}
            <h1
              className="font-serif font-light text-ink leading-tight mb-3 md:mb-4"
              style={{ fontSize: 'clamp(1.6rem, 7vw, 3.75rem)' }}
            >
              Pranav<br/>
              <span className="font-semibold text-navy">Chougule</span>
            </h1>

            <hr className="accent-rule w-12 md:w-20 mb-4 md:mb-6" />

            <p className="font-serif italic text-stone mb-4 md:mb-6 leading-relaxed"
               style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1.25rem)' }}>
              Robotics & AI for Infrastructure NDE
            </p>

            {/* Body copy — hidden on very small screens to keep hero clean */}
            <p className="hidden sm:block font-sans text-sm md:text-base text-stone leading-relaxed mb-6 md:mb-10 max-w-lg">
              I design and deploy robotic sensing systems that make infrastructure evaluation
              faster, safer, and more reliable — combining multimodal perception,
              machine learning, and autonomous platforms.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-2 md:gap-4">
              <Link href="/research"
                className="inline-block bg-navy text-white font-sans font-medium px-4 md:px-6 py-2.5 md:py-3 hover:bg-navy-light transition-colors tracking-wide text-center"
                style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>
                Research →
              </Link>
              <Link href="/contact"
                className="inline-block border border-navy text-navy font-sans font-medium px-4 md:px-6 py-2.5 md:py-3 hover:bg-mist transition-colors tracking-wide text-center"
                style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>
                Contact
              </Link>
            </div>
          </div>

          {/* ── Portrait column ── */}
          <div className="order-2 shrink-0"
               style={{ width: 'clamp(120px, 38vw, 340px)' }}>
            <div className="relative">

              {/* Decorative border frames — scale with container */}
              <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-full h-full border border-saffron opacity-50 z-0 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-full h-full border border-navy opacity-20 z-0 pointer-events-none" />

              {/*
                Portrait image:
                - Uses aspect-ratio to avoid cropping — image fills width,
                  height is determined by the photo's natural proportions.
                - objectPosition center-top keeps face in frame.
              */}
              <div
                className="relative z-10 w-full overflow-hidden"
                style={{ aspectRatio: '3 / 4' }}
              >
                <Image
                  src="/images/portrait.jpg"
                  alt="Pranav Chougule"
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                  }}
                  priority
                  sizes="(max-width: 640px) 38vw, (max-width: 768px) 40vw, 340px"
                />
              </div>

            </div>
          </div>
          {/* end portrait column */}

        </div>

        {/* Body copy shown below on mobile (hidden above sm) */}
        <p className="sm:hidden font-sans text-sm text-stone leading-relaxed mt-8">
          I design and deploy robotic sensing systems that make infrastructure evaluation
          faster, safer, and more reliable — combining multimodal perception,
          machine learning, and autonomous platforms.
        </p>

      </section>

      {/* ── Focus Areas ────────────────────────────────────── */}
      <section className="bg-mist border-y border-gray-100 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-navy mb-2">Research Focus Areas</h2>
          <hr className="accent-rule w-16 mb-8 md:mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {focusAreas.map((f, i) => (
              <div key={i} className="research-card bg-white p-5 md:p-6 border border-gray-100">
                <span className="font-mono text-saffron text-base md:text-lg mb-2 md:mb-3 block">{f.icon}</span>
                <h3 className="font-serif text-base md:text-lg font-semibold text-navy mb-1">{f.label}</h3>
                <p className="font-sans text-xs md:text-sm text-stone">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About strip ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          <div className="md:col-span-2">
            <span className="tag mb-4 inline-block">About</span>
            <h2 className="font-serif text-ink mb-4">
              Advancing the frontier of autonomous infrastructure assessment
            </h2>
            <p className="font-sans text-sm md:text-base text-stone leading-relaxed mb-4">
              My doctoral work sits at the convergence of robotic systems, multimodal sensing,
              and artificial intelligence — applied specifically to nondestructive evaluation
              of civil infrastructure. The stakes are concrete: bridges, buildings, and
              manufactured structures that society depends on.
            </p>
            <p className="font-sans text-sm md:text-base text-stone leading-relaxed">
              I bring together ultrasonic sensing, acoustic emission analysis, 3D reconstruction
              via Gaussian Splatting, and Vision-Language Models to give robotic platforms the
              perceptual intelligence needed for autonomous field evaluation.
            </p>
          </div>
          <div className="flex md:flex-col gap-5 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {[
              { label: 'Affiliation', value: 'Drexel University',                              link: null },
              { label: 'Degree',      value: 'PhD — Robotics & AI for Infrastructure NDE',    link: null },
              { label: 'Contact',     value: 'pranavc2204@gmail.com',                          link: 'mailto:pranavc2204@gmail.com' },
            ].map(item => (
              <div key={item.label} className="border-l-2 border-saffron pl-4 md:pl-5 shrink-0 md:shrink">
                <p className="font-mono text-[10px] text-stone uppercase tracking-widest mb-1 whitespace-nowrap">{item.label}</p>
                {item.link ? (
                  <a href={item.link} className="font-serif text-sm md:text-base text-navy hover:text-navy-light transition-colors break-all">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-serif text-sm md:text-base text-navy">{item.value}</p>
                )}
              </div>
            ))}
            <div className="border-l-2 border-navy pl-4 md:pl-5 shrink-0 md:shrink">
              <p className="font-mono text-[10px] text-stone uppercase tracking-widest mb-2 whitespace-nowrap">Profiles</p>
              <div className="flex flex-row md:flex-col gap-3 md:gap-1">
                <a href="https://www.linkedin.com/in/pranavc2255/" target="_blank" rel="noopener noreferrer"
                   className="font-sans text-sm text-stone hover:text-navy transition-colors whitespace-nowrap">LinkedIn ↗</a>
                <a href="https://github.com/pranavc2255/" target="_blank" rel="noopener noreferrer"
                   className="font-sans text-sm text-stone hover:text-navy transition-colors whitespace-nowrap">GitHub ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
