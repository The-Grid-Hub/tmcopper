import Image from 'next/image'
import { TECH_ITEMS, SUSTAINABILITY_ITEMS } from '@/lib/constants'

export default function Technology() {
  return (
    <section id="technology" className="fp-section fp-section-alt">
      <div className="content-wrap">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-center">

          {/* Left: Tech content */}
          <div>
            <span className="section-label">Technical Advantage</span>
            <h2 className="section-title text-text">Advanced Survey &amp; Diagnostics</h2>
            <div className="section-divider section-divider-left mb-6" />

            <p className="text-text-light mb-6">
              TM Copper Limited deploys modern engineering tools and technologies to improve planning
              accuracy, reduce execution risk, and strengthen infrastructure resilience. We recognise
              that no two erosion problems are identical — every intervention is based on terrain behaviour,
              hydrological conditions, soil stability, and infrastructure exposure risk.
            </p>

            <div className="space-y-4">
              {TECH_ITEMS.map(item => (
                <div key={item} className="flex gap-4 items-center">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: '#1A52C8' }}
                    aria-hidden="true"
                  />
                  <span className="text-text-light text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + Future capability box */}
          <div className="space-y-7">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/tech-img.jpg"
                alt="Advanced Survey &amp; Diagnostics"
                width={600}
                height={380}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="rounded-xl p-7" style={{ background: '#091B3D' }}>
              <span className="section-label mb-2">Future Capability</span>
              <h3 className="font-heading font-bold text-white text-base mb-4">
                Expanding Technical Capabilities
              </h3>
              <ul className="space-y-3">
                {SUSTAINABILITY_ITEMS.map(item => (
                  <li key={item} className="flex gap-3 items-start">
                    <span
                      className="text-sm flex-shrink-0 mt-0.5"
                      style={{ color: '#1A52C8' }}
                      aria-hidden="true"
                    >
                      ▶
                    </span>
                    <span className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.78)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs mt-4 mb-0" style={{ color: 'rgba(255,255,255,0.45)' }}>
                By combining advanced diagnostics with terrain-specific engineering, we deliver more accurate
                interventions and better infrastructure durability.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
