'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useScrollShadow } from '@/hooks/useScrollShadow'
import { NAV_LINKS } from '@/lib/constants'

export default function Header() {
  const scrolled = useScrollShadow(60)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className="sticky top-0 z-[1000] transition-shadow duration-300"
      style={{
        background: 'linear-gradient(135deg, #091B3D 0%, #122E70 100%)',
        boxShadow: scrolled ? '0 2px 24px rgba(9,27,61,0.28)' : 'none',
      }}
      role="banner"
    >
      <nav
        ref={navRef}
        aria-label="Primary Navigation"
        className="relative"
      >
        <div className="content-wrap flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 no-underline flex-shrink-0" aria-label="TM Copper Limited">
            <div className="relative w-[56px] h-[56px]">
              <Image
                src="/images/logo_white.png"
                alt="TM Copper Limited"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-[0.82rem] font-semibold tracking-[0.06em] uppercase no-underline transition-colors duration-300"
                style={{ color: 'rgba(255,255,255,0.82)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1A52C8')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.82)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contacts"
              className="hidden xl:inline-block btn btn-amber"
              style={{ padding: '10px 22px', fontSize: '0.78rem' }}
            >
              Get in Touch
            </a>

            <button
              className="xl:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded transition-all duration-300"
              aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen(v => !v)}
            >
              <span
                className="block h-[2px] w-6 rounded-full bg-white transition-all duration-300 origin-center"
                style={menuOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}}
              />
              <span
                className="block h-[2px] w-6 rounded-full bg-white transition-all duration-300"
                style={menuOpen ? { opacity: 0 } : {}}
              />
              <span
                className="block h-[2px] w-6 rounded-full bg-white transition-all duration-300 origin-center"
                style={menuOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}}
              />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          id="mobile-nav"
          className="xl:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: menuOpen ? '500px' : '0',
            borderTop: menuOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
          }}
          aria-label="Mobile Navigation"
        >
          <div className="content-wrap py-5 flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="font-heading text-sm font-semibold tracking-[0.06em] uppercase no-underline py-3 px-2 rounded transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.82)' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={handleNavClick}
              className="btn btn-amber btn-lg mt-4 text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
