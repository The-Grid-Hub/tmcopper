'use client'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Services() {
  return (
    <section id="services" className="fp-section fp-section-dark">
      <div className="content-wrap">

        <div className="section-header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title text-white">Core Services</h2>
          <p className="section-desc">
            TM Copper Limited provides specialised engineering services focused exclusively on the
            protection, stabilisation, and resilience of pipeline right-of-way corridors.
          </p>
          <div className="section-divider" />
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SERVICES.map(s => (
            <motion.div key={s.title} variants={card} className="service-card">
              <div className="text-4xl mb-5" aria-hidden="true">{s.icon}</div>
              <h3 className="font-heading font-bold text-text text-lg mb-3">{s.title}</h3>
              <p className="text-text-light text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
