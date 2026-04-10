"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Calendar, 
  Clock, 
  Mail, 
  Phone, 
  MapPin, 
  LogOut, 
  CheckCircle, 
  XCircle, 
  Clock3,
  User,
  Home
} from "lucide-react"
import Link from "next/link"

type Booking = {
  id: string
  name: string
  email: string
  phone: string | null
  service: string
  session_type: string
  preferred_date: string
  preferred_time: string
  message: string | null
  status: "pending" | "confirmed" | "cancelled"
  created_at: string
}

type AdminDashboardProps = {
  bookings: Booking[]
  userEmail: string
}

const serviceLabels: Record<string, string> = {
  consultation: "Free Consultation",
  "life-coaching": "Life Coaching",
  "somatic-therapy": "Somatic Therapy",
  breathwork: "Breathwork",
  "transformational-touch": "Transformational Touch",
}

const sessionTypeLabels: Record<string, string> = {
  "in-person-brooklyn": "In-Person (Brooklyn)",
  "in-person-rockland": "In-Person (Rockland)",
  zoom: "Zoom",
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  confirmed: "bg-green-500/20 text-green-400 border-green-500/30",
  cancelled: "bg-red-500/20 text-red-400 border-red-500/30",
}

const statusIcons: Record<string, typeof Clock3> = {
  pending: Clock3,
  confirmed: CheckCircle,
  cancelled: XCircle,
}

export function AdminDashboard({ bookings, userEmail }: AdminDashboardProps) {
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/admin/login")
    router.refresh()
  }

  async function updateBookingStatus(bookingId: string, newStatus: string) {
    const supabase = createClient()
    
    const { error } = await supabase
      .from("bookings")
      .update({ status: newStatus })
      .eq("id", bookingId)

    if (error) {
      console.error("Error updating booking:", error)
      return
    }

    router.refresh()
  }

  const filteredBookings = statusFilter === "all" 
    ? bookings 
    : bookings.filter(b => b.status === statusFilter)

  const pendingCount = bookings.filter(b => b.status === "pending").length
  const confirmedCount = bookings.filter(b => b.status === "confirmed").length
  const totalCount = bookings.length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-semibold text-primary">
              Mendy Klein
            </Link>
            <Badge variant="outline" className="border-primary/30 text-muted-foreground">
              Admin
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">{userEmail}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="border-border text-muted-foreground hover:text-foreground"
            >
              <LogOut size={16} className="mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card/50 border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground font-normal">Total Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-light text-foreground">{totalCount}</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground font-normal">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-light text-yellow-400">{pendingCount}</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground font-normal">Confirmed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-light text-green-400">{confirmedCount}</p>
            </CardContent>
          </Card>
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-light text-foreground">Booking Requests</h2>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40 bg-input border-border">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Bookings</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredBookings.length === 0 ? (
            <Card className="bg-card/50 border-border/50">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No bookings found</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {filteredBookings.map((booking) => {
                const StatusIcon = statusIcons[booking.status]
                return (
                  <Card key={booking.id} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                        {/* Client Info */}
                        <div className="flex-1 space-y-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <User className="text-primary" size={20} />
                                <h3 className="text-lg font-medium text-foreground">{booking.name}</h3>
                                <Badge className={`${statusColors[booking.status]} border`}>
                                  <StatusIcon size={14} className="mr-1" />
                                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                </Badge>
                              </div>
                              <p className="text-primary font-medium">
                                {serviceLabels[booking.service] || booking.service}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Mail size={16} />
                              <a href={`mailto:${booking.email}`} className="hover:text-primary">
                                {booking.email}
                              </a>
                            </div>
                            {booking.phone && (
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Phone size={16} />
                                <a href={`tel:${booking.phone}`} className="hover:text-primary">
                                  {booking.phone}
                                </a>
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar size={16} />
                              <span>{new Date(booking.preferred_date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock size={16} />
                              <span>{booking.preferred_time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              {booking.session_type === "zoom" ? (
                                <Home size={16} />
                              ) : (
                                <MapPin size={16} />
                              )}
                              <span>{sessionTypeLabels[booking.session_type] || booking.session_type}</span>
                            </div>
                          </div>

                          {booking.message && (
                            <div className="p-3 bg-secondary/30 rounded-lg">
                              <p className="text-sm text-muted-foreground">{booking.message}</p>
                            </div>
                          )}

                          <p className="text-xs text-muted-foreground">
                            Submitted: {new Date(booking.created_at).toLocaleString()}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-row lg:flex-col gap-2">
                          {booking.status !== "confirmed" && (
                            <Button
                              size="sm"
                              onClick={() => updateBookingStatus(booking.id, "confirmed")}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              <CheckCircle size={16} className="mr-1" />
                              Confirm
                            </Button>
                          )}
                          {booking.status !== "cancelled" && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateBookingStatus(booking.id, "cancelled")}
                              className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                            >
                              <XCircle size={16} className="mr-1" />
                              Cancel
                            </Button>
                          )}
                          {booking.status !== "pending" && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateBookingStatus(booking.id, "pending")}
                              className="border-border text-muted-foreground hover:text-foreground"
                            >
                              <Clock3 size={16} className="mr-1" />
                              Pending
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
