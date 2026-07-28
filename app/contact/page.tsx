import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { site } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Sunny Meadows Daycare to book a tour or ask a question. Call, email, or send us a message and we will reply personally.',
}

const details = [
  {
    icon: MapPin,
    label: 'Visit us',
    value: site.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(site.address)}`,
  },
  {
    icon: Phone,
    label: 'Call us',
    value: site.phone,
    href: `tel:${site.phone.replace(/[^0-9+]/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email us',
    value: site.email,
    href: `mailto:${site.email}`,
  },
  { icon: Clock, label: 'Opening hours', value: site.hours },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Book a tour, ask a question, or just say hello. Fill in the form below or reach us directly — a real member of our team will reply."
      />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-5 lg:gap-12 lg:px-8">
        <div className="lg:col-span-2">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Get in touch
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Prefer to talk? We are here during opening hours and always happy to
            arrange a visit.
          </p>
          <ul className="mt-8 space-y-5">
            {details.map((d) => (
              <li key={d.label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <d.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <iframe
              title={`Map showing the location of ${site.name}`}
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.45%2C37.75%2C-122.39%2C37.79&layer=mapnik"
              className="h-56 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-3">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
