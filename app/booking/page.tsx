import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { Calendar, Video, MapPin, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Book a Session | Mendy Klein - Life Coach & Somatic Practitioner",
  description: "Schedule your free consultation or session with Mendy Klein. In-person sessions in Brooklyn and Rockland County, or worldwide via Zoom.",
}

const features = [
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose a time that works for your schedule",
  },
  {
    icon: Clock,
    title: "Free Consultation",
    description: "Initial 15-minute call to discuss your needs",
  },
  {
    icon: MapPin,
    title: "In-Person Options",
    description: "Brooklyn, NY & Rockland County locations",
  },
  {
    icon: Video,
    title: "Zoom Sessions",
    description: "Connect from anywhere in the world",
  },
]

export default function BookingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Book a Session</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            Begin Your <span className="text-primary">Journey</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Take the first step towards transformation. Book your free consultation 
            and let&apos;s explore how we can work together.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-5 bg-card rounded-xl border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-medium text-foreground text-sm">{feature.title}</h3>
                <p className="text-muted-foreground text-xs mt-1">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl border border-border/50 p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
                Request Your <span className="text-primary">Session</span>
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and I&apos;ll reach out to confirm your appointment.
              </p>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">The Process</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mt-4">
              What to Expect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-primary font-serif font-semibold text-2xl">1</span>
              </div>
              <h3 className="font-medium text-foreground">Submit Request</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fill out the booking form with your preferred date, time, and service.
              </p>
            </div>
            <div className="relative text-center space-y-4">
              {/* Connector line */}
              <div className="hidden md:block absolute top-7 -left-4 w-8 h-px bg-border" />
              <div className="hidden md:block absolute top-7 -right-4 w-8 h-px bg-border" />
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-primary font-serif font-semibold text-2xl">2</span>
              </div>
              <h3 className="font-medium text-foreground">Confirmation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I&apos;ll review your request and send a confirmation within 24 hours.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-primary font-serif font-semibold text-2xl">3</span>
              </div>
              <h3 className="font-medium text-foreground">Connect</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We&apos;ll meet for your session - in person or via Zoom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
