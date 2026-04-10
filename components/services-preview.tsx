"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Wind, Heart, Hand, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Life Coaching",
    description: "Unlock your potential and create lasting change through personalized guidance, integrating practical strategies with spiritual wisdom.",
    color: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Somatic Therapy",
    description: "Release stored trauma and reconnect with your body through gentle, body-centered healing practices that honor your unique journey.",
    color: "bg-rose-500/10",
  },
  {
    icon: Wind,
    title: "Breathwork",
    description: "Experience profound transformation through conscious breathing techniques, accessing deeper states of awareness and healing.",
    color: "bg-sky-500/10",
  },
  {
    icon: Hand,
    title: "Transformational Touch",
    description: "Heal through the power of therapeutic touch, releasing tension, restoring balance, and awakening your body&apos;s innate wisdom.",
    color: "bg-amber-500/10",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            What I Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Pathways to Healing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each modality works synergistically to support your unique healing journey, 
            addressing body, mind, and spirit as one integrated whole.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-foreground/70" size={26} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-medium text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full group"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
