import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin | Mendy Klein",
  description: "Admin dashboard for managing bookings",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
