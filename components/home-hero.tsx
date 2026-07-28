import Image from 'next/image'
import Link from 'next/link'
import { Star, ShieldCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { site } from '@/lib/site-data'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            {site.license}
          </span>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            A warm place for little ones to{' '}
            <span className="text-primary">learn and grow</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.name} offers safe, nurturing, play-based childcare for
            children {site.ages}. Qualified educators, healthy meals, and plenty
            of room to explore.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: 'lg' }), 'rounded-full')}
            >
              Book a Tour
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'rounded-full bg-transparent',
              )}
            >
              Explore Our Programs
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-accent text-accent"
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Loved by 200+ local families
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/hero-classroom.png"
              alt="Toddlers playing with wooden toys while a smiling teacher helps them in a bright, sunny daycare classroom"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:block">
            <p className="text-2xl font-bold text-primary">1:4</p>
            <p className="text-xs text-muted-foreground">Infant teacher ratio</p>
          </div>
        </div>
      </div>
    </section>
  )
}
