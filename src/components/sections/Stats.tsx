'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { STATS } from '@/lib/constants'

function useCounter(target: number | null, duration = 1800, inView: boolean) {
  const [count, setCount] = useState(0)
  const animated = useRef(false)

  useEffect(() => {
    if (!inView || animated.current || target === null) return
    animated.current = true
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return count
}

function StatItem({ stat }: { stat: typeof STATS[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useCounter(stat.number, 1800, inView)

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-10 px-6 text-center flex-1"
      style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}
    >
      <span
        className="font-heading font-bold block mb-2"
        style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', color: '#1A52C8' }}
      >
        {stat.number !== null ? `${count}${stat.suffix ?? ''}` : stat.display}
      </span>
      <span
        className="font-heading text-xs font-bold tracking-[0.18em] uppercase"
        style={{ color: 'rgba(255,255,255,0.6)' }}
      >
        {stat.label}
      </span>
    </div>
  )
}

export default function Stats() {
  return (
    <div
      id="stats"
      className="flex flex-col xl:flex-row"
      style={{ background: 'linear-gradient(90deg, #091B3D 0%, #122E70 100%)' }}
    >
      {STATS.map(stat => (
        <StatItem key={stat.label} stat={stat} />
      ))}
    </div>
  )
}
