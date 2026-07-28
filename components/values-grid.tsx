import { values } from '@/lib/site-data'
import { ValueIcon } from '@/components/value-icon'

export function ValuesGrid() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Why parents choose us
        </p>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Care you can trust, every single day
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          We combine a nurturing environment with a thoughtful, play-based
          program so your child feels happy, safe and ready to learn.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
              <ValueIcon name={value.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
              {value.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
