import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden"
      aria-label="Hero Banner"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(105deg, rgba(9,27,61,0.9) 0%, rgba(18,46,112,0.65) 100%)' }}
        role="presentation"
      />

      {/* Content */}
      <div className="content-wrap relative z-[2] py-[120px]">
        <div className="max-w-[700px]">
          <p
            className="section-label mb-5"
            style={{ color: 'rgba(255,255,255,0.72)', letterSpacing: '0.2em' }}
          >
            Engineering Resilience for Critical Pipeline Infrastructure
          </p>

          <h1
            className="font-heading font-bold text-white leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            Protecting Pipeline Corridors.<br />
            <span style={{ color: '#1A52C8' }}>Preserving Critical</span>
            <span style={{ color: '#E8610A' }}> Infrastructure.</span>
          </h1>

          <p
            className="text-[1.05rem] leading-[1.8] mb-10 max-w-[580px]"
            style={{ color: 'rgba(255,255,255,0.78)' }}
          >
            TM Copper Limited is a specialised indigenous engineering company dedicated to the protection,
            stabilisation, and preservation of pipeline right-of-way corridors through advanced erosion
            control engineering and terrain-responsive solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#services" className="btn btn-amber btn-lg">
              Our Services
            </a>
            <a href="#contacts" className="btn btn-outline btn-lg">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
