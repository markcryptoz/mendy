"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, ArrowRight } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
          <CheckCircle className="text-primary" size={36} />
        </div>
        <h3 className="font-serif text-2xl font-medium text-foreground">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. I&apos;ll get back to you within 24-48 hours.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground text-sm">Name *</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="bg-secondary/30 border-border/50 focus:border-primary rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground text-sm">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="bg-secondary/30 border-border/50 focus:border-primary rounded-lg"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-foreground text-sm">Subject *</Label>
        <Input
          id="subject"
          name="subject"
          required
          placeholder="What would you like to discuss?"
          className="bg-secondary/30 border-border/50 focus:border-primary rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground text-sm">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me a bit about yourself and what you're looking for..."
          className="bg-secondary/30 border-border/50 focus:border-primary resize-none rounded-lg"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 rounded-full group"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  )
}
