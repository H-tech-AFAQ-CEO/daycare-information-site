import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { site } from '@/lib/site-data'

export function CtaBanner() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12 md:py-16">
        <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          Come see Sunny Meadows for yourself
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
          Book a friendly, no-pressure tour and meet the team who will care for
          your little one. We would love to answer all of your questions.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'secondary' }),
              'rounded-full',
            )}
          >
            Book a Tour
          </Link>
          <a
            href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`}
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
            )}
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
