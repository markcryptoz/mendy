"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, CheckCircle, ArrowRight } from "lucide-react"

const services = [
  { value: "consultation", label: "Free Consultation (15 min)" },
  { value: "life-coaching", label: "Life Coaching Session" },
  { value: "somatic-therapy", label: "Somatic Therapy Session" },
  { value: "breathwork", label: "Breathwork Session" },
  { value: "transformational-touch", label: "Transformational Touch Session" },
]

const sessionTypes = [
  { value: "in-person-brooklyn", label: "In-Person (Brooklyn, NY)" },
  { value: "in-person-rockland", label: "In-Person (Rockland County)" },
  { value: "zoom", label: "Virtual (Zoom)" },
]

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
]

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [service, setService] = useState("")
  const [sessionType, setSessionType] = useState("")
  const [preferredTime, setPreferredTime] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service,
          sessionType,
          preferredDate: formData.get("preferredDate"),
          preferredTime,
          message: formData.get("message"),
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Error submitting booking:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12 space-y-6">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
          <CheckCircle className="text-primary" size={48} />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl font-medium text-foreground">Booking Request Received!</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Thank you for reaching out. I&apos;ll review your request and send a confirmation 
            email within 24 hours.
          </p>
        </div>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full"
        >
          Book Another Session
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <div className="space-y-5">
        <h3 className="text-sm font-medium text-primary uppercase tracking-wider">
          Your Information
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground text-sm">Full Name *</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your full name"
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
          <Label htmlFor="phone" className="text-foreground text-sm">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(optional) For appointment reminders"
            className="bg-secondary/30 border-border/50 focus:border-primary rounded-lg"
          />
        </div>
      </div>

      {/* Session Details */}
      <div className="space-y-5">
        <h3 className="text-sm font-medium text-primary uppercase tracking-wider">
          Session Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-foreground text-sm">Service *</Label>
            <Select value={service} onValueChange={setService} required>
              <SelectTrigger className="bg-secondary/30 border-border/50 focus:border-primary rounded-lg">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-foreground text-sm">Session Type *</Label>
            <Select value={sessionType} onValueChange={setSessionType} required>
              <SelectTrigger className="bg-secondary/30 border-border/50 focus:border-primary rounded-lg">
                <SelectValue placeholder="In-person or Zoom" />
              </SelectTrigger>
              <SelectContent>
                {sessionTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="preferredDate" className="text-foreground text-sm">Preferred Date *</Label>
            <div className="relative">
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                className="bg-secondary/30 border-border/50 focus:border-primary rounded-lg"
              />
              <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-foreground text-sm">Preferred Time *</Label>
            <Select value={preferredTime} onValueChange={setPreferredTime} required>
              <SelectTrigger className="bg-secondary/30 border-border/50 focus:border-primary rounded-lg">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-5">
        <h3 className="text-sm font-medium text-primary uppercase tracking-wider">
          Additional Information
        </h3>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground text-sm">
            What brings you to this work?
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Share a bit about yourself and what you're hoping to achieve (optional)"
            className="bg-secondary/30 border-border/50 focus:border-primary resize-none rounded-lg"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !service || !sessionType || !preferredTime}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 rounded-full group"
      >
        {isSubmitting ? "Submitting..." : "Request Booking"}
        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
      </Button>

      <p className="text-center text-muted-foreground text-sm">
        Your booking will be confirmed via email within 24 hours
      </p>
    </form>
  )
}
