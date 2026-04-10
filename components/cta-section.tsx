"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Video, MapPin, ArrowRight } from "lucide-react"

const features = [
  {
    icon: MapPin,
    text: "Brooklyn & Rockland County",
  },
  {
    icon: Video,
    text: "Worldwide via Zoom",
  },
  {
    icon: Calendar,
    text: "Flexible Scheduling",
  },
]

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-primary/10 via-secondary to-accent/30 rounded-3xl p-12 lg:p-16 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
                Ready to Begin?
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground leading-tight">
                Start Your Journey
                <span className="block text-primary">Today</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Whether you prefer in-person sessions or the comfort of your own space, 
                I&apos;m here to support your transformation.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <feature.icon className="text-primary" size={18} />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-10 py-6 rounded-full group"
              >
                <Link href="/booking">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
