import Image from 'next/image'
import { PROJECTS, CLIENTS } from '@/lib/constants'

export default function Projects() {
  return (
    <section id="projects" className="fp-section fp-section-dark">
      <div className="content-wrap">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14">

          {/* Left: Flagship Project Types */}
          <div>
            <span className="section-label">Flagship Programmes</span>
            <h2 className="section-title text-white">Project Types &amp; Capabilities</h2>
            <div className="section-divider section-divider-left mb-7" />

            <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.65)' }}>
              TM Copper Limited delivers specialist engineering interventions designed to address real-world
              erosion threats affecting pipeline corridors across complex Niger Delta terrain.
            </p>

            <div className="space-y-4">
              {PROJECTS.map(p => (
                <div key={p} className="flex gap-4 items-start">
                  <span className="project-bullet" />
                  <p className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.8)' }}>{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Clients */}
          <div>
            <span className="section-label">Industries We Serve</span>
            <h2 className="section-title text-white">Clients &amp; Target Sectors</h2>
            <div className="section-divider section-divider-left mb-7" />

            <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.65)' }}>
              TM Copper Limited is strategically positioned to support organisations operating within oil and
              gas infrastructure environments across Nigeria and West Africa.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {CLIENTS.map(c => (
                <span key={c} className="client-tag">{c}</span>
              ))}
            </div>

            <div className="relative rounded-xl overflow-hidden" style={{ height: '200px' }}>
              <Image
                src="/images/projects-img.jpg"
                alt="Pipeline infrastructure operations"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
