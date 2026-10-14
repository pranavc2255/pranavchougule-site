import { focusAreas, projects, publications, profileLinks } from '@/data/profile'

export function FocusAreas() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {focusAreas.map((area, i) => (
        <div key={area.label} className="research-card bg-white p-5 md:p-6 border border-gray-100">
          <span className="font-mono text-saffron text-base md:text-lg mb-3 block">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="font-serif text-lg font-semibold text-navy mb-2">{area.label}</h3>
          <p className="font-sans text-xs md:text-sm text-stone leading-relaxed">{area.sub}</p>
        </div>
      ))}
    </div>
  )
}

export function FeaturedProjects() {
  return (
    <div className="grid md:grid-cols-2 gap-5 md:gap-8">
      {projects.map(project => (
        <article key={project.title} className={`research-card border p-5 md:p-8 ${project.status ? 'border-saffron/40 bg-[#fffdf7]' : 'border-gray-100 bg-white'}`}>
          {project.status && <span className="tag tag-saffron inline-block mb-4">{project.status}</span>}
          <h3 className="font-serif text-xl md:text-2xl text-navy leading-snug mb-3">{project.title}</h3>
          <p className="font-mono text-xs text-saffron-dark leading-relaxed mb-4">{project.topics}</p>
          <p className="font-sans text-sm text-stone leading-relaxed mb-4">{project.description}</p>
          {project.results && <p className="font-sans text-sm text-navy leading-relaxed mb-5 border-l-2 border-saffron pl-4">{project.results}</p>}
          <p className="font-mono text-[10px] text-stone uppercase tracking-widest mb-2">Technologies</p>
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map(tech => <li key={tech} className="tag">{tech}</li>)}
          </ul>
        </article>
      ))}
    </div>
  )
}

export function PublicationList() {
  return (
    <div className="space-y-8">
      {publications.map(paper => (
        <div key={paper.title}>
          <h3 className="font-mono text-xs text-stone uppercase tracking-widest mb-3">{paper.category}</h3>
          <article className={`research-card border p-5 md:p-7 ${paper.underReview ? 'border-saffron/40 bg-[#fffdf7]' : 'border-gray-100 bg-white'}`}>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`tag ${paper.underReview ? 'tag-saffron' : 'text-green-800 bg-green-50'}`}>{paper.status}</span>
              {paper.firstAuthor && <span className="tag">First Author</span>}
            </div>
            <h4 className="font-serif text-lg md:text-xl font-semibold text-navy leading-snug mb-3">
              {paper.doi ? <a className="hover:text-navy-light transition-colors" href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">{paper.title}</a> : paper.title}
            </h4>
            <p className="font-sans text-sm text-stone leading-relaxed mb-2">{paper.authors}</p>
            <p className="font-sans text-sm italic text-stone mb-3">{paper.venue}</p>
            {paper.doi && <a className="inline-block font-mono text-xs text-navy hover:underline break-all py-2" href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">DOI: {paper.doi} ↗</a>}
          </article>
        </div>
      ))}
    </div>
  )
}

export function ProfileLinks() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {profileLinks.map(link => (
        <a key={link.label} href={link.href} target={link.href.startsWith('https') ? '_blank' : undefined}
          rel={link.href.startsWith('https') ? 'noopener noreferrer' : undefined}
          className="font-sans text-sm text-navy hover:text-navy-light transition-colors touch-target break-all">
          {link.label === 'Email' ? link.value : link.label}
        </a>
      ))}
    </div>
  )
}
