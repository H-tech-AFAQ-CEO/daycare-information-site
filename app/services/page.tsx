import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Clock, Utensils, HeartPulse } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { CtaBanner } from '@/components/cta-banner'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { services, site } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Services & Programs',
  description:
    'Explore Sunny Meadows Daycare programs: infant care, toddler program, preschool, and outdoor enrichment — each designed for a specific age and stage.',
}

const included = [
  { icon: Utensils, text: 'Freshly prepared meals & snacks' },
  { icon: Clock, text: 'Flexible full-day & part-day options' },
  { icon: HeartPulse, text: 'First-aid trained educators on site' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Programs that grow with your child"
        description={`From first steps to school-readiness, every ${site.name} room is designed around the needs of a specific age group.`}
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <Image
                  src={service.image}
                  alt={`${service.name} program at ${site.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {service.ageRange}
                </span>
                <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {service.name}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="text-foreground">{h}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(buttonVariants(), 'mt-8 rounded-full')}
                >
                  Ask about {service.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {included.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Enrollment is handled personally by our team so we can match your
            family to the right program.{' '}
            <Link
              href="/contact"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Get in touch to start the conversation.
            </Link>
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
