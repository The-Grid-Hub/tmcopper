'use client'
import Image from 'next/image'
import { FOOTER_SERVICES, FOOTER_COMPANY, CONTACT, NAV_LINKS } from '@/lib/constants'

const SOCIAL = [
  { label: 'in',  title: 'LinkedIn',  href: '#' },
  { label: 'tw',  title: 'Twitter/X', href: '#' },
  { label: 'fb',  title: 'Facebook',  href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #091B3D 0%, #0D2456 100%)' }}>
      {/* Main footer columns */}
      <div className="content-wrap py-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

          {/* Col 1: About */}
          <div>
            <div className="relative w-[120px] h-[44px] mb-5">
              <Image src="/images/logo.png" alt="TM Copper Limited" fill className="object-contain object-left" />
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.62)' }}>
              TM Copper Limited — Pipeline Right-of-Way Erosion Control &amp; Infrastructure Protection Specialists.
            </p>
            <p className="text-xs mb-5" style={{ color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' }}>
              Protecting Pipeline Corridors. Preserving Critical Infrastructure.
            </p>
            <div className="flex gap-2 flex-wrap">
              {SOCIAL.map(s => (
                <a
                  key={s.title}
                  href={s.href}
                  title={s.title}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-heading uppercase no-underline transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#1A52C8'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-[0.12em] uppercase mb-5">Our Services</h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map(s => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm no-underline transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.62)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#1A52C8')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.62)')}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-[0.12em] uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {FOOTER_COMPANY.map(c => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="text-sm no-underline transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.62)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#1A52C8')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.62)')}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-[0.12em] uppercase mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.62)' }}>
                <span className="block text-[#1A52C8] text-xs font-bold uppercase tracking-wider mb-1">Address</span>
                {CONTACT.address}
              </li>
              <li className="text-sm" style={{ color: 'rgba(255,255,255,0.62)' }}>
                <span className="block text-[#1A52C8] text-xs font-bold uppercase tracking-wider mb-1">Phone</span>
                <a href={`tel:${CONTACT.phone}`} className="no-underline hover:text-[#1A52C8] transition-colors" style={{ color: 'rgba(255,255,255,0.62)' }}>
                  {CONTACT.phone}
                </a>
              </li>
              <li className="text-sm" style={{ color: 'rgba(255,255,255,0.62)' }}>
                <span className="block text-[#1A52C8] text-xs font-bold uppercase tracking-wider mb-1">Email</span>
                <a href={`mailto:${CONTACT.email}`} className="no-underline hover:text-[#1A52C8] transition-colors" style={{ color: 'rgba(255,255,255,0.62)' }}>
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-sm" style={{ color: 'rgba(255,255,255,0.62)' }}>
                <span className="block text-[#1A52C8] text-xs font-bold uppercase tracking-wider mb-1">Hours</span>
                {CONTACT.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="content-wrap py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
            &copy; {new Date().getFullYear()} TM Copper Limited. All rights reserved.
          </p>
          <div className="flex gap-5">
            {NAV_LINKS.slice(0, 4).map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-heading uppercase tracking-wider no-underline transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.45)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1A52C8')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
