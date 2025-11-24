"use server"

import { supabase } from "@/lib/supabase"

export async function submitCampaign(formData: {
  name: string
  email: string
  phone: string
}) {
  try {
    const { data, error } = await supabase
      .from("campaign_requests")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error("[v0] Supabase error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Submit campaign error:", error)
    return { success: false, error: "Failed to submit campaign request" }
  }
}
