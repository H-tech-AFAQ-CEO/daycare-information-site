'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions/contact'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const initialState: ContactState = { status: 'idle', message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full rounded-full sm:w-auto"
    >
      {pending ? (
        'Sending…'
      ) : (
        <span className="flex items-center gap-2">
          <Send className="h-4 w-4" aria-hidden="true" />
          Send message
        </span>
      )}
    </Button>
  )
}

const fieldBase =
  'w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40'

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState)
  const errors = state.errors ?? {}

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-primary/30 bg-secondary/50 p-10 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
        <h2 className="mt-4 font-heading text-xl font-semibold text-foreground">
          Message sent
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.status === 'error' && state.message && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{state.message}</span>
        </div>
      )}

      {/* Honeypot field, hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Your name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={cn(fieldBase, errors.name && 'border-destructive')}
            placeholder="Jamie Parent"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={cn(fieldBase)}
            placeholder="(555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Email <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={cn(fieldBase, errors.email && 'border-destructive')}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          How can we help? <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(fieldBase, 'resize-y', errors.message && 'border-destructive')}
          placeholder="Tell us a little about your child and what you're looking for."
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <SubmitButton />
      <p className="text-xs text-muted-foreground">
        Fields marked <span className="text-destructive">*</span> are required.
        We&apos;ll only use your details to reply to your enquiry.
      </p>
    </form>
  )
}
