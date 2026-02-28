import Image from 'next/image'
import Link from 'next/link'

const focusAreas = [
  { icon: '◈', label: 'Ultrasonic Pulse Velocity', sub: 'UPV signal acquisition & ML interpretation' },
  { icon: '◈', label: 'Acoustic Emission', sub: 'Real-time structural health monitoring' },
  { icon: '◈', label: 'Hyperspectral Imaging', sub: 'Material characterisation at scale' },
  { icon: '◈', label: 'Gaussian Splatting', sub: '3D scene reconstruction for NDE' },
  { icon: '◈', label: 'Vision-Language Models', sub: 'Florence-based VLM for NDE reasoning' },
  { icon: '◈', label: 'Laser Surface Monitoring', sub: 'High-resolution displacement sensing' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="tag tag-saffron mb-6 inline-block">PhD Researcher</span>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-ink leading-tight mb-4">
            Pranav<br/>
            <span className="font-semibold text-navy">Chougule</span>
          </h1>
          <hr className="accent-rule w-20 mb-6" />
          <p className="font-serif text-xl italic text-stone mb-6 leading-relaxed">
            Robotics & AI for Infrastructure NDE
          </p>
          <p className="font-sans text-base text-stone leading-relaxed mb-10 max-w-lg prose-academic">
            I design and deploy robotic sensing systems that make infrastructure evaluation
            faster, safer, and more reliable — combining multimodal perception,
            machine learning, and autonomous platforms.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/research"
              className="inline-block bg-navy text-white font-sans text-sm font-medium px-6 py-3 hover:bg-navy-light transition-colors tracking-wide">
              View Research →
            </Link>
            <Link href="/contact"
              className="inline-block border border-navy text-navy font-sans text-sm font-medium px-6 py-3 hover:bg-mist transition-colors tracking-wide">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Portrait */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-saffron opacity-40 z-0" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-navy opacity-20 z-0" />
            <div className="relative z-10 w-72 h-80 md:w-80 md:h-96 overflow-hidden">
              <Image
                src="/images/portrait.jpg"
                alt="Pranav Chougule"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                priority
                className=""
              />
            </div>
            {/* Label card */}
            <div className="absolute -bottom-6 left-0 bg-white border border-gray-100 shadow-sm px-4 py-2 z-20">
              <p className="font-mono text-xs text-navy tracking-widest uppercase">Drexel University</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Focus strip ─────────────────────────────────── */}
      <section className="bg-mist border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-navy mb-2">Research Focus Areas</h2>
          <hr className="accent-rule w-16 mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((f, i) => (
              <div key={i} className="research-card bg-white p-6 border border-gray-100">
                <span className="font-mono text-saffron text-lg mb-3 block">{f.icon}</span>
                <h3 className="font-serif text-lg font-semibold text-navy mb-1">{f.label}</h3>
                <p className="font-sans text-sm text-stone">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick intro ──────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <span className="tag mb-4 inline-block">About</span>
          <h2 className="font-serif text-3xl text-ink mb-4">
            Advancing the frontier of autonomous infrastructure assessment
          </h2>
          <p className="font-sans text-base text-stone leading-relaxed mb-4">
            My doctoral work sits at the convergence of robotic systems, multimodal sensing,
            and artificial intelligence — applied specifically to nondestructive evaluation
            of civil infrastructure. The stakes are concrete: bridges, buildings, and
            manufactured structures that society depends on.
          </p>
          <p className="font-sans text-base text-stone leading-relaxed">
            I bring together ultrasonic sensing, acoustic emission analysis, 3D reconstruction
            via Gaussian Splatting, and Vision-Language Models to give robotic platforms the
            perceptual intelligence needed for autonomous field evaluation.
          </p>
        </div>
        <div className="space-y-6">
          <div className="border-l-2 border-saffron pl-5">
            <p className="font-mono text-xs text-stone uppercase tracking-widest mb-1">Affiliation</p>
            <p className="font-serif text-base text-navy">Drexel University</p>
          </div>
          <div className="border-l-2 border-saffron pl-5">
            <p className="font-mono text-xs text-stone uppercase tracking-widest mb-1">Degree</p>
            <p className="font-serif text-base text-navy">PhD — Robotics & AI for Infrastructure NDE</p>
          </div>
          <div className="border-l-2 border-saffron pl-5">
            <p className="font-mono text-xs text-stone uppercase tracking-widest mb-1">Contact</p>
            <a href="mailto:pranavc2204@gmail.com"
               className="font-sans text-sm text-navy hover:text-navy-light transition-colors break-all">
              pranavc2204@gmail.com
            </a>
          </div>
          <div className="border-l-2 border-navy pl-5 mt-2">
            <p className="font-mono text-xs text-stone uppercase tracking-widest mb-2">Profiles</p>
            <div className="flex flex-col gap-1">
              <a href="https://www.linkedin.com/in/pranavc2255/" target="_blank" rel="noopener noreferrer"
                 className="font-sans text-sm text-stone hover:text-navy transition-colors">
                LinkedIn ↗
              </a>
              <a href="https://github.com/pranavc2255/" target="_blank" rel="noopener noreferrer"
                 className="font-sans text-sm text-stone hover:text-navy transition-colors">
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
