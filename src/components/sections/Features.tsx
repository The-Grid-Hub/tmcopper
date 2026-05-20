'use client'
import { motion } from 'framer-motion'
import { ADVANTAGES } from '@/lib/constants'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Features() {
  return (
    <section id="advantages" className="fp-section fp-section-navy2">
      <div className="content-wrap">

        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title text-white">Competitive Advantages</h2>
          <p className="section-desc">
            What sets TM Copper Limited apart as a specialist pipeline right-of-way erosion control company.
          </p>
          <div className="section-divider" />
        </div>

        <motion.div
          className="grid grid-cols-1 xl:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {ADVANTAGES.map((adv, i) => (
            <motion.div
              key={adv.title}
              variants={item}
              className="flex gap-5 items-start p-7 rounded-xl transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span
                className="font-heading font-bold text-3xl flex-shrink-0 leading-none"
                style={{ color: 'rgba(26,82,200,0.35)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-heading font-bold text-white text-base mb-2">{adv.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{adv.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
