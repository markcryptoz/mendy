import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    "https://ysbzrtllsyaayhckyyvy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzYnpydGxsc3lhYXloY2t5eXZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NjU1NDMsImV4cCI6MjA5MTM0MTU0M30.crmIdaYakBI7aYBqaWoGOj7mMsDtzUgsfX4MMHS2hlE"
  )
}