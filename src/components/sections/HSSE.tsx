'use client'
import { motion } from 'framer-motion'
import { HSSE_PILLARS } from '@/lib/constants'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function HSSE() {
  return (
    <section
      id="hsse"
      className="fp-section relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/hsse-img.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'rgba(9,27,61,0.88)' }}
        role="presentation"
      />

      <div className="content-wrap relative z-10">

        <div className="section-header">
          <span className="section-label">Safety, Health &amp; Environment</span>
          <h2 className="section-title text-white">
            Health, Safety &amp; Environment (HSE) Policy
          </h2>
          <p className="section-desc">
            TM Copper Limited operates under a clear commitment: Zero Harm | Zero Spills | Zero Community
            Disruption. Safety and environmental stewardship are fundamental to every project we undertake.
          </p>
          <div className="section-divider" />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {HSSE_PILLARS.map(p => (
            <motion.div key={p.title} variants={card} className="hsse-card">
              <div className="text-4xl mb-4" aria-hidden="true">{p.icon}</div>
              <h4 className="font-heading font-bold text-white text-base mb-3">{p.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
