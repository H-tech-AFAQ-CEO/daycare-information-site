import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/site-data'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ServicesPreview() {
  return (
    <section className="bg-muted/50">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Our programs
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Age-appropriate rooms for every stage
            </h2>
          </div>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'rounded-full',
            )}
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.name} at Sunny Meadows Daycare`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-accent-foreground">
                  {service.ageRange}
                </p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
