import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://nntqvbpbrwzowfoacnbm.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5udHF2YnBicnd6b3dmb2FjbmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5OTE3NjEsImV4cCI6MjA3OTU2Nzc2MX0.ellGqi3ZgKLfKojHPcvlM5N61Krfwt5C2kkbf-IAmfU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
