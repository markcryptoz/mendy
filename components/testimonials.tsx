"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Brooklyn, NY",
    text: "Working with Mendy has been life-changing. His somatic approach helped me release years of stored tension and find peace I didn&apos;t know was possible.",
    rating: 5,
  },
  {
    name: "David R.",
    location: "Rockland County, NY",
    text: "The breathwork sessions were transformative. Mendy creates such a safe space to explore and heal. I&apos;ve recommended him to everyone I know.",
    rating: 5,
  },
  {
    name: "Rachel K.",
    location: "Los Angeles, CA (via Zoom)",
    text: "Even through virtual sessions, Mendy&apos;s presence and guidance are powerful. His coaching helped me navigate a major life transition with clarity.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Client Experiences
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from people who have experienced transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 rounded-2xl overflow-hidden"
            >
              <CardContent className="pt-8 pb-8 px-8 space-y-6">
                <Quote className="text-primary/30" size={40} />
                
                <p className="text-foreground/80 leading-relaxed text-lg">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-amber-400" size={16} />
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
