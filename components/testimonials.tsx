import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/site-data'

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          From our families
        </p>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Parents love Sunny Meadows
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.author}
            className="flex flex-col rounded-2xl border border-border bg-card p-6"
          >
            <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
            <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-semibold text-foreground">{t.author}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
