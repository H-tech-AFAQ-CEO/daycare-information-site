'use server'

import { site } from '@/lib/site-data'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Partial<Record<'name' | 'email' | 'phone' | 'message', string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: bots fill hidden fields, humans don't.
  if ((formData.get('company') as string)?.trim()) {
    return { status: 'success', message: 'Thanks! Your message has been sent.' }
  }

  const name = (formData.get('name') as string)?.trim() ?? ''
  const email = (formData.get('email') as string)?.trim() ?? ''
  const phone = (formData.get('phone') as string)?.trim() ?? ''
  const message = (formData.get('message') as string)?.trim() ?? ''

  const errors: ContactState['errors'] = {}
  if (name.length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
  if (message.length < 10)
    errors.message = 'Please share a little more (at least 10 characters).'

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please fix the highlighted fields and try again.',
      errors,
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL ?? site.email
  const from = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'

  const text = [
    `New enquiry from the ${site.name} website`,
    '',
    `Name:  ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'not provided'}`,
    '',
    'Message:',
    message,
  ].join('\n')

  // If no email provider is configured yet, don't fail the visitor.
  // The message is logged and a friendly success is returned.
  // See README.md → "Wiring up the contact form" to enable real delivery.
  if (!apiKey) {
    console.log('[v0] Contact form submission (email provider not configured):')
    console.log(text)
    return {
      status: 'success',
      message: 'Thanks! Your message has been received. We will be in touch soon.',
    }
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${site.shortName} Website <${from}>`,
        to: [to],
        reply_to: email,
        subject: `New website enquiry from ${name}`,
        text,
      }),
    })

    if (!res.ok) {
      console.error('[v0] Resend error:', await res.text())
      return {
        status: 'error',
        message:
          'Sorry, something went wrong sending your message. Please call us instead.',
      }
    }

    return {
      status: 'success',
      message: 'Thanks! Your message has been sent. We will be in touch soon.',
    }
  } catch (err) {
    console.error('[v0] Contact form error:', err)
    return {
      status: 'error',
      message:
        'Sorry, something went wrong sending your message. Please call us instead.',
    }
  }
}
