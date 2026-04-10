import { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, BookOpen, Heart, Users, Sparkles, Globe, Layers, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Mendy Klein - Life Coach & Somatic Practitioner",
  description: "Learn about Mendy Klein&apos;s journey, certifications, and approach to holistic healing through life coaching, somatic therapy, breathwork, and transformational touch.",
}

const certifications = [
  { icon: Award, title: "Certified Life Coach", description: "ICF Accredited Program" },
  { icon: Heart, title: "Somatic Practitioner", description: "Somatic Experiencing Institute" },
  { icon: BookOpen, title: "Breathwork Facilitator", description: "Advanced Breathwork Certification" },
  { icon: Users, title: "Transformational Touch", description: "Therapeutic Touch Certified" },
]

const uniqueApproach = [
  {
    icon: Sparkles,
    title: "Kabbalah, Chassidus & Musar Integration",
    description: "Drawing from deep Jewish wisdom traditions to illuminate the path of personal growth and spiritual development.",
  },
  {
    icon: Globe,
    title: "Multicultural Experience",
    description: "Having worked with diverse cultures worldwide, I bring a unique perspective that honors different backgrounds and traditions.",
  },
  {
    icon: Layers,
    title: "Personalized Toolbox",
    description: "Using a diverse range of methods tailored specifically to your needs, ensuring the approach fits your unique journey.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] bg-gradient-to-br from-secondary via-accent/50 to-secondary rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/mendy-klein.png"
                  alt="Mendy Klein - Life Coach and Somatic Practitioner"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Name overlay */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="font-serif text-2xl">Mendy Klein</p>
                  <p className="text-sm text-white/80 mt-1 tracking-wide">Life Coach & Healer</p>
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
                <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">My Story</span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
                  A Journey of <span className="text-primary">Healing</span>
                </h1>
              </div>

              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  My path to becoming a healer began with my own journey through transformation. 
                  Like many of my clients, I once felt disconnected from my body, stuck in patterns 
                  that no longer served me, and searching for something more.
                </p>
                <p>
                  Through years of study, personal work, and deep exploration of somatic practices, 
                  breathwork, and transformational healing - combined with the wisdom of Kabbalah, 
                  Chassidus, and Musar - I discovered the profound wisdom that lives within each of us.
                </p>
                <p>
                  Today, I combine my certifications in life coaching, somatic therapy, breathwork, 
                  and transformational touch to offer a truly integrative approach to healing that 
                  honors body, mind, and soul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Approach Section */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">What Sets Me Apart</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
              My Unique Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {uniqueApproach.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">My Philosophy</span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground leading-relaxed">
            &quot;The body holds our stories. Through gentle, compassionate work, 
            we can release what no longer serves us and step into 
            <span className="text-primary"> wholeness</span>.&quot;
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I believe that every person has the innate capacity to heal. My role is simply 
            to create the conditions for that healing to unfold naturally, integrating 
            ancient wisdom with modern practices.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Credentials</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
              Training & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="text-center p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">What I Stand For</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-medium text-primary">Compassion</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every session is held with deep compassion and non-judgment. 
                I meet you exactly where you are, honoring your unique journey.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-medium text-primary">Authenticity</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in creating spaces where you can show up fully as yourself. 
                No masks, no pretense - just genuine connection and growth.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-medium text-primary">Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                True healing happens when we integrate mind, body, and spirit. 
                My approach addresses all aspects of your being as one unified whole.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Ready to Begin Your <span className="text-primary">Transformation</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            I&apos;d love to connect and explore how we can work together on your healing journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-full group"
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
              className="border-foreground/20 text-foreground hover:bg-foreground/5 px-8 py-6 rounded-full"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
