import Image from 'next/image'

const CARDS = [
  {
    image: '/images/vision-mission-bg.jpg',
    imageAlt: 'Vision — TM Copper Limited',
    labelColor: '#1A52C8',
    label: 'Vision',
    title: "West Africa's Leading Pipeline ROW Specialist",
    desc: "To become West Africa's leading indigenous engineering company specialising in pipeline right-of-way erosion control, terrain stabilisation, and infrastructure resilience — recognised for engineering excellence, operational reliability, environmental stewardship, and sustainable infrastructure protection.",
  },
  {
    image: '/images/vision-img.jpg',
    imageAlt: 'Mission — TM Copper Limited',
    labelColor: '#E8610A',
    label: 'Mission',
    title: 'Securing Critical Pipeline Infrastructure',
    desc: 'To secure and preserve critical oil and gas infrastructure through world-class erosion control engineering, flood mitigation systems, and terrain-responsive protection solutions — protecting pipeline corridors, improving infrastructure resilience, preventing operational disruptions, and preserving ecosystems.',
  },
]

const PURPOSE_ITEMS = [
  'Erosion',
  'Flooding',
  'Terrain instability',
  'Riverbank degradation',
  'Washouts',
  'Pipeline exposure',
]

export default function Vision() {
  return (
    <section id="vision" className="fp-section fp-section-light">
      <div className="content-wrap">

        <div className="section-header">
          <span className="section-label">Purpose &amp; Direction</span>
          <h2 className="section-title text-text">Vision, Mission &amp; Purpose</h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
          {CARDS.map(card => (
            <div
              key={card.label}
              className="rounded-xl overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-xl"
              style={{ background: '#fff', border: '1px solid #DCE4EE' }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <span
                  className="font-heading text-xs font-bold tracking-[0.18em] uppercase block mb-3"
                  style={{ color: card.labelColor }}
                >
                  {card.label}
                </span>
                <h3 className="font-heading font-bold text-text text-xl mb-3">{card.title}</h3>
                <p className="text-text-light text-[0.95rem] leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Purpose block */}
        <div
          className="rounded-xl p-8 md:p-10"
          style={{ background: '#fff', border: '1px solid #DCE4EE' }}
        >
          <span className="font-heading text-xs font-bold tracking-[0.18em] uppercase block mb-3" style={{ color: '#1A52C8' }}>
            Our Purpose
          </span>
          <h3 className="font-heading font-bold text-text text-xl mb-3">
            Protecting Pipeline Corridors. Preserving Critical Infrastructure.
          </h3>
          <p className="text-text-light text-[0.95rem] leading-relaxed mb-6">
            At TM Copper Limited, our purpose is clear: to protect critical pipeline corridors, preserve
            vulnerable terrain, and ensure operational continuity through specialist erosion control engineering.
            We exist to solve the growing infrastructure threats caused by:
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PURPOSE_ITEMS.map(item => (
              <li key={item} className="flex gap-2 items-center text-sm text-text-light">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#E8610A' }} />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-text-light text-[0.95rem] leading-relaxed mt-5">
            Through technical expertise, innovative methodologies, and responsible execution, we create
            long-term value for our clients and host communities while promoting sustainable and
            environmentally responsible outcomes.
          </p>
        </div>

      </div>
    </section>
  )
}
