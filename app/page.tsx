import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ServicesPreview } from "@/components/services-preview"
import { AboutPreview } from "@/components/about-preview"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <ServicesPreview />
        <AboutPreview />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
