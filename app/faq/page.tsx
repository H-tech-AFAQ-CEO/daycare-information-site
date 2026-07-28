import type { Metadata } from 'next'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { CtaBanner } from '@/components/cta-banner'
import { faqs } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about Sunny Meadows Daycare — ages, hours, staff qualifications, safety, meals, allergies and enrollment.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        eyebrow="FAQ"
        title="Questions, answered"
        description="Everything parents usually ask before their first visit. Still curious? We are always happy to chat."
      />

      <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={faq.question}
              name="faq"
              className="group rounded-2xl border border-border bg-card px-5 transition-colors open:border-primary/40 open:bg-card"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-base font-semibold text-foreground marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                {faq.question}
                <Plus
                  className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-secondary/60 p-6 text-center">
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Didn&apos;t find your answer?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Reach out and a member of our team will get back to you personally.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contact us
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
