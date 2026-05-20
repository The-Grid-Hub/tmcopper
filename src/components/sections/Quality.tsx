import { QUALITY_ITEMS, CSR_ITEMS, OUTLOOK_ITEMS } from '@/lib/constants'

function CheckItem({ text, color = '#1A52C8' }: { text: string; color?: string }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="text-sm flex-shrink-0 mt-0.5 font-bold" style={{ color }} aria-hidden="true">✓</span>
      <span className="text-text-light text-sm leading-snug">{text}</span>
    </li>
  )
}

function ArrowItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="text-sm flex-shrink-0 mt-0.5" style={{ color: '#1A52C8' }} aria-hidden="true">▶</span>
      <span className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.78)' }}>{text}</span>
    </li>
  )
}

export default function Quality() {
  return (
    <section id="quality" className="fp-section fp-section-light">
      <div className="content-wrap">

        <div className="section-header">
          <span className="section-label">Standards &amp; Commitments</span>
          <h2 className="section-title text-text">Quality, ESG &amp; Future Outlook</h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7">

          {/* Quality Assurance */}
          <div
            className="rounded-xl p-8 bg-white"
            style={{ border: '1px solid #DCE4EE', borderTop: '3px solid #1A52C8' }}
          >
            <div className="text-4xl mb-4" aria-hidden="true" style={{ color: '#1A52C8' }}>✅</div>
            <h3 className="font-heading font-bold text-text text-lg mb-4">Quality Policy</h3>
            <p className="text-text-light text-sm mb-4">
              TM Copper Limited is committed to delivering engineering services that meet the highest standards
              of quality, reliability, safety, and technical performance.
            </p>
            <ul className="space-y-3">
              {QUALITY_ITEMS.map(q => <CheckItem key={q} text={q} color="#1A52C8" />)}
            </ul>
          </div>

          {/* ESG / CSR */}
          <div
            className="rounded-xl p-8 bg-white"
            style={{ border: '1px solid #DCE4EE', borderTop: '3px solid #E8610A' }}
          >
            <div className="text-4xl mb-4" aria-hidden="true" style={{ color: '#E8610A' }}>🏘️</div>
            <h3 className="font-heading font-bold text-text text-lg mb-3">ESG &amp; Community Responsibility</h3>
            <p className="text-text-light text-sm mb-4">
              We believe infrastructure protection must be environmentally responsible and socially beneficial
              to the communities we operate in.
            </p>
            <ul className="space-y-3">
              {CSR_ITEMS.map(c => <CheckItem key={c} text={c} color="#E8610A" />)}
            </ul>
          </div>

          {/* Future Outlook */}
          <div className="rounded-xl p-8" style={{ background: '#091B3D' }}>
            <div className="text-4xl mb-4" aria-hidden="true" style={{ color: '#E8610A' }}>🚀</div>
            <h3 className="font-heading font-bold text-white text-lg mb-3">Future Outlook</h3>
            <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
              TM Copper Limited is strategically committed to expanding capability across the Niger Delta
              and wider West African energy sector:
            </p>
            <ul className="space-y-3">
              {OUTLOOK_ITEMS.map(o => <ArrowItem key={o} text={o} />)}
            </ul>
            <p className="text-xs mt-5 mb-0" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Our ambition: West Africa&apos;s leading specialist in pipeline right-of-way erosion control.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
