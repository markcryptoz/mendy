import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Authentication Error | Mendy Klein",
}

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
          <AlertCircle className="text-destructive" size={32} />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-light text-foreground">Authentication Error</h1>
          <p className="text-muted-foreground">
            There was an issue with the authentication process. Please try signing in again.
          </p>
        </div>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/admin/login">Back to Login</Link>
        </Button>
      </div>
    </div>
  )
}
