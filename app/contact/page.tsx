import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Mendy Klein - Life Coach & Somatic Practitioner",
  description: "Get in touch with Mendy Klein for inquiries about life coaching, somatic therapy, breathwork, and transformational touch sessions.",
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/infinitelifelifecoaching",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mendykleinlifecoach",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/infinitelifecoach",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Contact</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            Let&apos;s <span className="text-primary">Connect</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about my services or want to learn more? I&apos;d love to hear from you.
            Fill out the form below or reach out directly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="font-serif text-3xl font-medium text-foreground">
                  Get in <span className="text-primary">Touch</span>
                </h2>
                
                <div className="space-y-4">
                  <a
                    href="mailto:Kleinscoaching@gmail.com"
                    className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="text-primary" size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">Kleinscoaching@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+13479776675"
                    className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="text-primary" size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">+1 (347) 977-6675</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border/50">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="text-primary" size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Locations</p>
                      <p className="text-foreground font-medium">Brooklyn, NY & Rockland County</p>
                      <p className="text-muted-foreground text-sm">Worldwide via Zoom</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border/50">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="text-primary" size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                      <p className="text-foreground font-medium">Within 24-48 hours</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4">Connect on Social Media</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full bg-foreground/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                        aria-label={social.name}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-medium text-foreground">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="p-5 bg-secondary/50 rounded-xl">
                    <p className="font-medium text-foreground mb-2">Do you offer online sessions?</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Yes! Life coaching and breathwork sessions are available via Zoom for clients worldwide.
                      Somatic therapy and transformational touch are best experienced in person.
                    </p>
                  </div>
                  
                  <div className="p-5 bg-secondary/50 rounded-xl">
                    <p className="font-medium text-foreground mb-2">What should I expect in a first session?</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Our first session is a consultation where we&apos;ll discuss your goals, 
                      answer your questions, and determine the best approach for your journey.
                    </p>
                  </div>
                  
                  <div className="p-5 bg-secondary/50 rounded-xl">
                    <p className="font-medium text-foreground mb-2">Do you offer sliding scale pricing?</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Yes, I believe healing should be accessible. Reach out to discuss options 
                      that work for your situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl border border-border/50 p-8 lg:p-10 h-fit">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
                Send a <span className="text-primary">Message</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and I&apos;ll get back to you soon.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
