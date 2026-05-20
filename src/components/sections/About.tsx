import Image from 'next/image'

const FEATURES = [
  'Pipeline right-of-way erosion control across swamp, riverine, and flood-prone terrain',
  'Civil & geotechnical engineering — gabion walls, riprap, geotextile reinforcement',
  'Committed to Zero Harm | Zero Spills | Zero Community Disruption on every project',
  'Serving oil & gas operators, pipeline owners, EPC contractors, and government agencies',
]

export default function About() {
  return (
    <section id="about" className="fp-section fp-section-alt">
      <div className="content-wrap">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/about-bg.jpg"
                alt="TM Copper Limited pipeline engineering operations"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            {/* Badge */}
            <div
              className="absolute -bottom-5 -right-5 xs:static xs:mt-4 flex flex-col items-center justify-center w-[110px] h-[110px] rounded-full text-white shadow-xl z-10"
              style={{ background: 'linear-gradient(135deg, #1A52C8, #C84E06)' }}
            >
              <span className="font-heading font-bold text-sm leading-tight text-center px-2">Niger Delta</span>
              <span className="font-heading text-xs font-semibold tracking-wider uppercase">Specialists</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-label">Who We Are</span>
            <h2 className="section-title text-text">
              Pipeline Right-of-Way Erosion Control &amp; Infrastructure Protection
            </h2>
            <div className="section-divider section-divider-left mb-6" />

            <p className="text-text-light mb-4">
              TM Copper Limited is a specialised indigenous oil and gas engineering company dedicated
              exclusively to the protection, stabilisation, and preservation of pipeline right-of-way
              corridors through advanced erosion control engineering and environmental infrastructure solutions.
            </p>
            <p className="text-text-light mb-4">
              Our expertise lies in safeguarding pipeline corridors across complex terrains, particularly
              within the environmentally sensitive and operationally challenging Niger Delta region, where
              seasonal flooding, unstable soil conditions, and erosion present persistent threats.
            </p>
            <p className="text-text-light mb-7">
              Through innovative, sustainable, and technically proven interventions, we deliver solutions that
              improve infrastructure durability, operational continuity, environmental resilience, and
              regulatory compliance.
            </p>

            <ul className="space-y-3 mb-8">
              {FEATURES.map(f => (
                <li key={f} className="flex gap-3 items-start">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                    style={{ background: '#1A52C8' }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-text-light text-sm leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            <a href="#contacts" className="btn">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
