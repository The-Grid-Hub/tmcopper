import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // When RESEND_API_KEY is set, send via Resend SDK.
    // Until then, log the submission server-side (safe for development).
    const apiKey = process.env.RESEND_API_KEY
    if (apiKey) {
      const { Resend } = await import('resend')
      const resend = new Resend(apiKey)
      await resend.emails.send({
        from: 'TM Copper Website <noreply@tmcopperltd.com>',
        to: [process.env.CONTACT_TO_EMAIL ?? 'info@tmcopperltd.com'],
        replyTo: email,
        subject: `Website Enquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        `,
      })
    } else {
      console.log('[Contact Form]', { name, email, phone, subject, message })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Contact API]', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
