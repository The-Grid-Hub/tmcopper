'use client'
import { useState, FormEvent } from 'react'
import { CONTACT } from '@/lib/constants'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function Contacts() {
  const [status, setStatus] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contacts"
      className="fp-section relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/contact-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'rgba(9,27,61,0.90)' }}
        role="presentation"
      />

      <div className="content-wrap relative z-10">

        <div className="section-header">
          <span className="section-label">Reach Us</span>
          <h2 className="section-title text-white">Contact TM Copper Limited</h2>
          <p className="section-desc">
            Have a pipeline protection project or want to explore a partnership? Fill in the form and
            our team will respond within one business day.
          </p>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14">

          {/* Contact details */}
          <div>
            <h3 className="font-heading font-bold text-white text-xl mb-7">Our Details</h3>

            <div className="contact-detail-item">
              <span className="contact-detail-label">Head Office</span>
              <span className="contact-detail-value">
                26, Boskel Road, Off Aba Road,<br />
                Port Harcourt, Rivers State, Nigeria
              </span>
            </div>

            <div className="contact-detail-item">
              <span className="contact-detail-label">Phone</span>
              <span className="contact-detail-value">
                <a href={`tel:${CONTACT.phone}`} className="hover:text-cyan transition-colors no-underline" style={{ color: 'rgba(255,255,255,0.78)' }}>
                  {CONTACT.phone}
                </a>
              </span>
            </div>

            <div className="contact-detail-item">
              <span className="contact-detail-label">Email</span>
              <span className="contact-detail-value">
                <a href={`mailto:${CONTACT.email}`} className="hover:text-cyan transition-colors no-underline" style={{ color: 'rgba(255,255,255,0.78)' }}>
                  {CONTACT.email}
                </a>
              </span>
            </div>

            <div className="contact-detail-item">
              <span className="contact-detail-label">Website</span>
              <span className="contact-detail-value">
                <a href={`https://${CONTACT.website}`} target="_blank" rel="noopener noreferrer"
                  className="no-underline" style={{ color: '#1A52C8' }}>
                  {CONTACT.website}
                </a>
              </span>
            </div>

            <div className="contact-detail-item">
              <span className="contact-detail-label">Business Hours</span>
              <span className="contact-detail-value">{CONTACT.hours}</span>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="grid gap-4">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="contact-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="contact-input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="contact-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="contact-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="contact-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234 ..."
                  className="contact-input"
                />
              </div>

              <div>
                <label htmlFor="subject" className="contact-label">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Pipeline Erosion Control Enquiry"
                  className="contact-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="contact-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your pipeline protection project or enquiry..."
                  className="contact-input resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-amber btn-lg w-full text-center"
                style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
              >
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-center py-2" style={{ color: '#1A52C8' }}>
                  ✓ Thank you! Your message has been sent. We&apos;ll be in touch within one business day.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-center py-2" style={{ color: '#E8610A' }}>
                  Something went wrong. Please try again or email us directly at {CONTACT.email}.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
