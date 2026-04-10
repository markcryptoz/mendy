import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, Wind, Heart, Hand, Clock, Video, MapPin, Check, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Mendy Klein - Life Coaching, Somatic Therapy & Breathwork",
  description: "Explore Mendy Klein&apos;s comprehensive healing services including life coaching, somatic therapy, breathwork facilitation, and transformational touch therapy.",
}

const services = [
  {
    id: "life-coaching",
    icon: Sparkles,
    title: "Life Coaching",
    description: "Unlock your potential and create lasting positive change in your life through personalized guidance and proven coaching methodologies, integrating spiritual wisdom with practical strategies.",
    benefits: [
      "Clarity on life purpose and direction",
      "Overcome limiting beliefs and patterns",
      "Goal setting and accountability",
      "Improved relationships and communication",
      "Greater confidence and self-awareness",
    ],
    duration: "60-90 minute sessions",
    format: "In-person or Zoom",
    color: "bg-primary/10",
  },
  {
    id: "somatic-therapy",
    icon: Heart,
    title: "Somatic Therapy",
    description: "Release stored trauma and reconnect with your body through gentle, body-centered healing practices that honor your nervous system and support deep, lasting transformation.",
    benefits: [
      "Release trapped emotions and trauma",
      "Regulate your nervous system",
      "Increase body awareness and connection",
      "Reduce chronic tension and pain",
      "Experience greater embodiment and presence",
    ],
    duration: "75-90 minute sessions",
    format: "In-person recommended",
    color: "bg-rose-500/10",
  },
  {
    id: "breathwork",
    icon: Wind,
    title: "Breathwork",
    description: "Experience profound transformation through conscious breathing techniques and guided sessions that access deeper states of awareness and facilitate spiritual insights.",
    benefits: [
      "Access altered states of consciousness",
      "Release emotional blocks",
      "Increase energy and vitality",
      "Reduce anxiety and stress",
      "Spiritual insights and clarity",
    ],
    duration: "90-120 minute sessions",
    format: "In-person or Zoom",
    color: "bg-sky-500/10",
  },
  {
    id: "transformational-touch",
    icon: Hand,
    title: "Transformational Touch",
    description: "Heal through the power of therapeutic touch, releasing tension, restoring balance, and facilitating deep energetic shifts that support your body&apos;s innate healing wisdom.",
    benefits: [
      "Deep relaxation and stress relief",
      "Release muscular holding patterns",
      "Energy balancing and alignment",
      "Enhanced mind-body connection",
      "Support for emotional processing",
    ],
    duration: "60-75 minute sessions",
    format: "In-person only",
    color: "bg-amber-500/10",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Services</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            Pathways to <span className="text-primary">Healing</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Each modality offers a unique pathway to transformation. Many clients find that 
            combining approaches creates the most profound results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              id={service.id}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-500"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="text-foreground/70" size={32} />
                  </div>
                  <h2 className="font-serif text-3xl font-medium text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                      <Clock className="text-primary" size={14} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                      {service.format.includes("Zoom") ? (
                        <Video className="text-primary" size={14} />
                      ) : (
                        <MapPin className="text-primary" size={14} />
                      )}
                      <span>{service.format}</span>
                    </div>
                  </div>
                </div>

                <div className={`bg-secondary/30 p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <h4 className="font-medium text-foreground mb-6">What You&apos;ll Experience</h4>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-primary" size={12} />
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Investment</span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Investment in Your Transformation
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I offer a free initial consultation to discuss your needs and determine which 
            approach would best serve your healing journey. Session packages and sliding 
            scale options are available to make this work accessible.
          </p>
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-full group"
            >
              <Link href="/contact">
                Inquire About Pricing
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Locations</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
              Where We Can Connect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">Brooklyn, NY</h3>
              <p className="text-muted-foreground text-sm">
                In-person sessions available for all services
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">Rockland County, NY</h3>
              <p className="text-muted-foreground text-sm">
                In-person sessions available for all services
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Video className="text-primary" size={24} />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">Worldwide via Zoom</h3>
              <p className="text-muted-foreground text-sm">
                Life Coaching & Breathwork available online
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Ready to Take the <span className="text-primary">First Step</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Book a free consultation to discuss which approach is right for your journey.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 rounded-full group"
          >
            <Link href="/booking">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
