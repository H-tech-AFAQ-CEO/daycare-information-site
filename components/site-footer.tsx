import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { nav, site } from '@/lib/site-data'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-9 w-9" />
            <span className="font-heading text-lg font-bold text-foreground">
              {site.shortName}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.tagline} A licensed daycare caring for children {site.ages}.
          </p>
          <p className="mt-4 text-xs font-medium text-primary">
            {site.license}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-heading text-sm font-semibold text-foreground">
            Explore
          </h2>
          <ul className="mt-4 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-semibold text-foreground">
            Visit us
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>{site.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold text-foreground">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>Nurturing curious minds, one day at a time.</p>
        </div>
      </div>
    </footer>
  )
}
