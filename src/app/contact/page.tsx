import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Pranav Chougule',
  description: 'Contact Pranav Chougule for research collaborations or enquiries.'
}

const channels = [
  {
    label: 'Email',
    value: 'pranavc2204@gmail.com',
    href: 'mailto:pranavc2204@gmail.com',
    desc: 'Best for research collaborations, academic enquiries, or general correspondence.',
    icon: '✉'
  },
  {
    label: 'LinkedIn',
    value: '/in/pranavc2255',
    href: 'https://www.linkedin.com/in/pranavc2255/',
    desc: 'Professional network, institutional affiliations, and conference connections.',
    icon: '⬡'
  },
  {
    label: 'GitHub',
    value: '/pranavc2255',
    href: 'https://github.com/pranavc2255/',
    desc: 'Open-source code, research tools, and software from ongoing projects.',
    icon: '⊙'
  },
]

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* Header */}
      <div className="mb-10 md:mb-16">
        <span className="tag mb-4 inline-block">Contact</span>
        <h1 className="font-serif text-ink mb-4">Get in Touch</h1>
        <hr className="accent-rule w-20 mb-5 md:mb-6" />
        <p className="font-sans text-sm md:text-base text-stone max-w-2xl leading-relaxed">
          I welcome conversations about research collaborations, speaking engagements,
          industry partnerships, or any questions related to my work in robotic NDE and
          infrastructure AI.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Contact cards */}
        <div className="space-y-4 md:space-y-5">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="research-card flex items-start gap-4 md:gap-5 border border-gray-100 bg-white p-5 md:p-6 hover:border-navy/30 transition-colors block"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 bg-mist flex items-center justify-center shrink-0 font-serif text-base md:text-lg text-navy">
                {c.icon}
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] md:text-xs text-stone uppercase tracking-widest mb-1">{c.label}</p>
                <p className="font-serif text-base md:text-lg text-navy mb-1 break-all">{c.value}</p>
                <p className="font-sans text-xs md:text-sm text-stone leading-relaxed">{c.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Right panel */}
        <div>
          <div className="bg-navy text-white p-6 md:p-8 mb-5 md:mb-6">
            <h2 className="font-serif text-xl md:text-2xl mb-3 md:mb-4">Research Collaboration</h2>
            <p className="font-sans text-sm text-blue-200 leading-relaxed mb-5 md:mb-6">
              I am particularly interested in connecting with researchers and engineers
              working on related problems in:
            </p>
            <ul className="space-y-2">
              {[
                'Robotic inspection systems',
                'NDE and structural health monitoring',
                'AI-powered signal interpretation',
                'Construction and infrastructure sensing',
                'Vision-language models for engineering',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 font-sans text-sm text-blue-100">
                  <span className="w-1.5 h-1.5 bg-saffron rounded-full shrink-0"/>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-gray-100 p-5 md:p-6">
            <p className="font-mono text-[10px] md:text-xs text-stone uppercase tracking-widest mb-2 md:mb-3">Current Affiliation</p>
            <p className="font-serif text-lg md:text-xl text-navy mb-1">Drexel University</p>
            <p className="font-sans text-sm text-stone">Philadelphia, Pennsylvania, USA</p>
            <hr className="border-gray-100 my-4" />
            <p className="font-mono text-[10px] md:text-xs text-stone uppercase tracking-widest mb-2 md:mb-3">Response Time</p>
            <p className="font-sans text-sm text-stone">I aim to respond to all enquiries within 2–3 business days.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
