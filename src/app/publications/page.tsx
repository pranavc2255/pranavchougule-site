import type { Metadata } from 'next'
import { PublicationList } from '@/components/ResearchContent'

export const metadata: Metadata = {
  title: 'Publications — Pranav Chougule',
  description: 'Journal articles, conference proceedings, and manuscripts under review in robotic inspection, multimodal AI, and nondestructive evaluation.',
}

export default function PublicationsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="mb-10 md:mb-16">
        <span className="tag mb-4 inline-block">Publications</span>
        <h1 className="font-serif text-ink mb-4">Publications &amp; Manuscripts</h1>
        <hr className="accent-rule w-20 mb-6" />
        <p className="font-sans text-sm md:text-base text-stone leading-relaxed max-w-2xl">
          Published research in robotic inspection and intelligent sensing, followed by ongoing work under peer review.
        </p>
      </div>
      <PublicationList />
      <details className="mt-12">
        <summary className="cursor-pointer font-serif text-lg text-navy py-3 mb-4">SPIE publication: full citation and abstract</summary>
        <article className="bg-white border border-gray-200 p-6 md:p-8 hover:shadow-md transition-shadow">
          
          {/* Metadata Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-navy text-white text-[10px] md:text-xs font-mono uppercase tracking-widest px-2.5 py-1">
              Conference Proceeding
            </span>
            <span className="bg-green-700 text-white text-[10px] md:text-xs font-mono uppercase tracking-widest px-2.5 py-1">
              Published
            </span>
            <span className="text-stone text-xs md:text-sm font-sans font-medium">
              16 April 2026
            </span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-xl md:text-2xl text-navy font-semibold leading-snug mb-3">
            <a href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13952/139520L/Laser-based-monitoring-of-robotic-carbon-dioxide-injection-in-fresh/10.1117/12.3093819.full?tab=ArticleLink" target="_blank" rel="noopener noreferrer" className="hover:text-saffron transition-colors">
              Laser-based monitoring of robotic carbon dioxide injection in fresh additively manufactured concrete
            </a>
          </h2>

          {/* Authors */}
          <p className="font-sans text-sm md:text-base text-stone mb-2">
            <span className="font-semibold text-ink">Pranav Chougule</span>, David Abraham, Yaghoob (Amir) Farnam, and Arvin Ebrahimkhanlou
          </p>

          {/* Venue & Event Info */}
          <p className="font-sans text-sm text-stone italic mb-6">
            Proc. SPIE 13952, Digital Twins, AI, and NDE for Industry Applications and Energy Systems 2026, 139520L. <br className="hidden md:block" />
            <span className="not-italic font-medium">Event:</span> SPIE Smart Structures + Nondestructive Evaluation, 2026, Vancouver, BC, Canada.
          </p>

          {/* Links / DOI Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="https://doi.org/10.1117/12.3093819" target="_blank" rel="noopener noreferrer" className="font-sans text-xs md:text-sm font-medium text-white bg-navy px-4 py-2 hover:bg-navy-light transition-colors flex items-center gap-2">
              DOI: 10.1117/12.3093819 ↗
            </a>
            <a href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13952/139520L/Laser-based-monitoring-of-robotic-carbon-dioxide-injection-in-fresh/10.1117/12.3093819.full?tab=ArticleLink" target="_blank" rel="noopener noreferrer" className="font-sans text-xs md:text-sm font-medium text-navy border border-navy px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-2">
              SPIE Digital Library ↗
            </a>
          </div>

          {/* Citation Block */}
          <div className="mb-8">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-navy mb-2 font-semibold">Citation</h3>
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-sm">
              <p className="font-mono text-xs md:text-sm text-stone whitespace-pre-wrap break-words leading-relaxed">
                Pranav Chougule, David Abraham, Yaghoob (Amir) Farnam, and Arvin Ebrahimkhanlou "Laser-based monitoring of robotic carbon dioxide injection in fresh additively manufactured concrete", Proc. SPIE 13952, Digital Twins, AI, and NDE for Industry Applications and Energy Systems 2026, 139520L (16 April 2026); https://doi.org/10.1117/12.3093819
              </p>
            </div>
          </div>

          {/* Abstract */}
          <div className="bg-mist border-l-4 border-saffron p-5 md:p-6">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-navy mb-3 font-semibold">Abstract</h3>
            <p className="font-sans text-sm text-stone leading-relaxed">
              This study focuses on monitoring a novel process for injecting CO₂ gas into fresh 3D-printed concrete. The construction sector is responsible for nearly 8% of global carbon emissions, and embodied carbon in concrete is a major contributor. CO₂ sequestration into fresh cementitious material presents a promising solution. Mineral carbonation of fresh cementitious paste offers permanent in-situ CO₂ storage, and extrusion-based 3D concrete printing (3DCP) provides a uniquely favorable geometry for robotic inter-layer injection between printing passes. The authors have developed a robotic system and a laser-based monitoring pipeline for gas injection into fresh concrete. The system integrates a 6-DOF collaborative robotic arm, a syringe-based gas actuator, and a Keyence line laser profilometer on a motorized stage under a shared coordinate frame. Experiments cover 30 penetrations in fresh mortar under a 3×3×3 full factorial parameter design varying injection depth, flow rate, and volume. The pipeline detected a measurable surface depression in 28 of 30 injections. Injection depth was the dominant driver of surface response, with mean depression depth increasing from 1.63 mm at 10 mm depth to 3.52 mm at 35 mm depth. A significant depth-by-speed interaction was also identified: fast injection produces substantially deeper surface depressions at shallow depths, but this effect diminishes at greater injection depths. This validated pipeline establishes the foundation for future optimization of CO₂ injection parameters in 3D-printed cementitious layers.
            </p>
          </div>

        </article>
      </details>
    </div>
  )
}
