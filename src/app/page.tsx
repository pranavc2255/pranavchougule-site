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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Text — appears first on mobile */}
          <div className="order-2 md:order-1">
            <span className="tag tag-saffron mb-5 md:mb-6 inline-block">PhD Researcher</span>
            <h1 className="font-serif font-light text-ink leading-tight mb-4">
              Pranav<br/>
              <span className="font-semibold text-navy">Chougule</span>
            </h1>
            <hr className="accent-rule w-16 md:w-20 mb-5 md:mb-6" />
            <p className="font-serif text-lg md:text-xl italic text-stone mb-5 md:mb-6 leading-relaxed">
              Robotics & AI for Infrastructure NDE
            </p>
            <p className="font-sans text-sm md:text-base text-stone leading-relaxed mb-8 md:mb-10 max-w-lg">
              I design and deploy robotic sensing systems that make infrastructure evaluation
              faster, safer, and more reliable — combining multimodal perception,
              machine learning, and autonomous platforms.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link href="/research"
                className="inline-block bg-navy text-white font-sans text-sm font-medium px-5 md:px-6 py-3 hover:bg-navy-light transition-colors tracking-wide">
                View Research →
              </Link>
              <Link href="/contact"
                className="inline-block border border-navy text-navy font-sans text-sm font-medium px-5 md:px-6 py-3 hover:bg-mist transition-colors tracking-wide">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Portrait — appears first on mobile as a banner-style crop */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-none md:w-auto">
              {/* Decorative frames — hidden on small screens to reduce clutter */}
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full border-2 border-saffron opacity-40 z-0 hidden sm:block" />
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full border border-navy opacity-20 z-0 hidden sm:block" />
              {/* Portrait container: shorter on mobile, taller on desktop */}
              <div className="relative z-10 w-full md:w-72 lg:w-80 h-56 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                <Image
                  src="/images/portrait.jpg"
                  alt="Pranav Chougule"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 384px, 320px"
                />
              </div>
              {/* Label card */}
              <div className="absolute -bottom-5 left-0 bg-white border border-gray-100 shadow-sm px-3 md:px-4 py-1.5 md:py-2 z-20">
                <p className="font-mono text-[9px] md:text-xs text-navy tracking-widest uppercase">
                  Drexel University
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Focus Areas ────────────────────────────────────── */}
      <section className="bg-mist border-y border-gray-100 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-navy mb-2">Research Focus Areas</h2>
          <hr className="accent-rule w-16 mb-8 md:mb-10" />
          {/* 1 col → 2 col → 3 col */}
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
          {/* Main copy */}
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

          {/* Meta sidebar — horizontal scroll on very small screens */}
          <div className="flex md:flex-col gap-5 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {[
              { label: 'Affiliation', value: 'Drexel University', link: null },
              { label: 'Degree', value: 'PhD — Robotics & AI for Infrastructure NDE', link: null },
              { label: 'Contact', value: 'pranavc2204@gmail.com', link: 'mailto:pranavc2204@gmail.com' },
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
