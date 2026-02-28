import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Publications — Pranav Chougule',
  description: 'Publications and presentations by Pranav Chougule in robotics, NDE, and AI.'
}

const publications = [
  {
    type: 'Conference Paper',
    status: 'Accepted',
    year: '2026',
    authors: 'Chougule, P., Farnam, Y., Ebrahimkhanlou, A.',
    title: 'Laser-based monitoring of robotic carbon dioxide injection in fresh additively manufactured concrete.',
    venue: 'SPIE Smart Structures + NDE',
    date: '17 March 2026',
    doi: null,
    highlight: true,
    abstract: 'This work presents a robotic system for precise CO₂ injection in fresh additively manufactured (AM) concrete, coupled with laser displacement sensing for real-time surface monitoring. The platform enables high-resolution documentation of carbonation-induced changes in AM concrete geometry during and after injection, providing insights for sustainable construction applications.'
  },
]

export default function PublicationsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <span className="tag mb-4 inline-block">Publications</span>
        <h1 className="font-serif text-5xl text-ink mb-4">Publications</h1>
        <hr className="accent-rule w-20 mb-6" />
        <p className="font-sans text-base text-stone max-w-2xl leading-relaxed">
          Peer-reviewed publications, conference presentations, and technical contributions
          from my research in robotic NDE, intelligent sensing, and infrastructure monitoring.
        </p>
      </div>

      {/* Conference Papers */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-serif text-3xl text-navy">Conference Papers</h2>
          <span className="font-mono text-xs text-stone bg-mist border border-gray-100 px-3 py-1">
            {publications.length} item{publications.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <div key={i} className={`research-card border p-8 ${pub.highlight ? 'border-saffron/40 bg-[#fffdf7]' : 'border-gray-100 bg-white'}`}>
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`tag ${pub.highlight ? 'tag-saffron' : ''}`}>{pub.type}</span>
                <span className="tag bg-green-50 text-green-800 border-green-200">{pub.status}</span>
                <span className="font-mono text-xs text-stone">{pub.date}</span>
              </div>

              {/* Authors */}
              <p className="font-sans text-sm text-stone mb-2 leading-relaxed">
                {pub.authors}
              </p>

              {/* Title */}
              <h3 className="font-serif text-2xl text-navy mb-2 leading-snug">
                &ldquo;{pub.title}&rdquo;
              </h3>

              {/* Venue */}
              <p className="font-sans text-sm font-medium text-saffron-dark mb-5">
                {pub.venue} · {pub.year}
              </p>

              {/* Abstract */}
              {pub.abstract && (
                <div className="border-l-2 border-gray-200 pl-5">
                  <p className="font-mono text-xs text-stone uppercase tracking-wider mb-2">Abstract</p>
                  <p className="font-sans text-sm text-stone leading-relaxed">{pub.abstract}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Note on ongoing work */}
      <div className="bg-mist border border-gray-100 p-8">
        <h3 className="font-serif text-2xl text-navy mb-3">Ongoing Research</h3>
        <p className="font-sans text-base text-stone leading-relaxed">
          Additional manuscripts are in preparation, covering vision-language model interpretation
          of UPV signals, Gaussian Splatting for multi-visit NDE scene registration, and
          robotic acoustic emission source localisation in reinforced concrete structures.
          This page will be updated as submissions are accepted.
        </p>
      </div>
    </div>
  )
}
