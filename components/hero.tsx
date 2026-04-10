"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Globe, Heart, Layers } from "lucide-react"

const highlights = [
  {
    icon: Sparkles,
    text: "Kabbalah, Chassidus & Musar Integration",
  },
  {
    icon: Globe,
    text: "Experience with Cultures Worldwide",
  },
  {
    icon: Heart,
    text: "Mind, Body & Soul Alignment",
  },
  {
    icon: Layers,
    text: "Personalized Coaching Approach",
  },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Eyebrow */}
          <div className="animate-fade-in-up">
            <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Life Coach &bull; Somatic Practitioner &bull; Breathwork Facilitator
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight animate-fade-in-up animation-delay-200 text-balance">
            Transformational Touch for
            <span className="block text-primary mt-2">Body, Mind & Spirit</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 text-pretty">
            Discover deep healing and lasting transformation through personalized coaching, 
            somatic practices, and breathwork - integrating ancient wisdom with modern techniques.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up animation-delay-600">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-full group"
            >
              <Link href="/booking">
                Book a Session
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 text-base px-8 py-6 rounded-full"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-600">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <highlight.icon className="text-primary" size={20} />
              </div>
              <span className="text-sm text-foreground/80 leading-tight">{highlight.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
