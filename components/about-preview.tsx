"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Quote } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-gradient-to-br from-secondary via-accent/50 to-secondary rounded-2xl overflow-hidden relative">
              <Image
                src="/images/mendy-klein.png"
                alt="Mendy Klein - Life Coach and Somatic Practitioner"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Name overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-serif text-2xl">Mendy Klein</p>
                <p className="text-sm text-white/80 mt-1 tracking-wide">
                  Life Coach & Healer
                </p>
              </div>
              {/* Decorative lines */}
              <div className="absolute top-8 left-8 w-20 h-px bg-white/30" />
              <div className="absolute top-8 left-8 w-px h-20 bg-white/30" />
              <div className="absolute bottom-8 right-8 w-20 h-px bg-white/30" />
              <div className="absolute bottom-8 right-8 w-px h-20 bg-white/30" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
                About Me
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground leading-tight">
                Your Guide to
                <span className="block text-primary">Transformation</span>
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                I believe that true healing happens when we reconnect with our bodies, 
                release what no longer serves us, and step into our authentic power.
              </p>
              <p>
                Drawing from diverse wisdom traditions including Kabbalah, Chassidus, and Musar, 
                combined with modern somatic practices, I offer a unique and personalized approach 
                to transformation that honors the whole person - body, mind, and soul.
              </p>
            </div>

            <div className="bg-secondary/50 border-l-4 border-primary p-6 rounded-r-xl">
              <Quote className="text-primary/50 mb-3" size={24} />
              <p className="text-foreground font-serif italic text-xl leading-relaxed">
                &quot;The body holds the wisdom. My role is to help you access it.&quot;
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full group"
            >
              <Link href="/about">
                Learn More About My Journey
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
