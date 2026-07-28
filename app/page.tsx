import { HomeHero } from '@/components/home-hero'
import { StatsRow } from '@/components/stats-row'
import { ValuesGrid } from '@/components/values-grid'
import { ServicesPreview } from '@/components/services-preview'
import { Testimonials } from '@/components/testimonials'
import { CtaBanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsRow />
      <ValuesGrid />
      <ServicesPreview />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
