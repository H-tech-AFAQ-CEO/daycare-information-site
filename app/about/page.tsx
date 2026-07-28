import type { Metadata } from 'next'
import Image from 'next/image'
import { Sprout, Users, Sparkles, Baby } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { StatsRow } from '@/components/stats-row'
import { CtaBanner } from '@/components/cta-banner'
import { site } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Sunny Meadows Daycare — our story, our nurturing philosophy, and the qualified, caring team behind our licensed childcare center.',
}

const philosophy = [
  {
    icon: Sprout,
    title: 'Learning through play',
    text: 'Children make sense of the world by doing. Our days are full of purposeful play that builds curiosity, language and confidence.',
  },
  {
    icon: Users,
    title: 'Every child is seen',
    text: 'Low ratios mean our educators truly know each child, celebrating their strengths and gently supporting their next steps.',
  },
  {
    icon: Sparkles,
    title: 'A partnership with families',
    text: 'We keep you close with daily updates and open conversation, because the best outcomes happen when home and center work together.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Caring for your family like our own"
        description={`For over 15 years, ${site.name} has been a second home for children ${site.ages}, built on warmth, safety and a genuine love of early learning.`}
      />

      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/about-teacher.png"
            alt="A caring teacher reading a picture book to a small group of attentive toddlers in a cozy reading nook"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our story
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Sunny Meadows began with a simple belief: that every child
              deserves a warm, safe place to be curious, make friends and grow
              at their own pace. What started as a small neighborhood program
              has grown into a trusted, fully licensed center — but our heart
              has never changed.
            </p>
            <p>
              Today our purpose-built rooms are filled with natural light,
              wooden toys and busy little hands. Our educators bring both
              professional training and a genuine love for children, creating
              days that feel less like daycare and more like an extended
              family.
            </p>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <dt className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Baby className="h-4 w-4 text-primary" aria-hidden="true" />
                Ages served
              </dt>
              <dd className="mt-1 text-muted-foreground">{site.ages}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                Our team
              </dt>
              <dd className="mt-1 text-muted-foreground">
                12 qualified educators
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <StatsRow />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our philosophy
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How we help children thrive
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {philosophy.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
