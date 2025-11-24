import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { EmailLists } from "@/components/email-lists"
import { Guarantee } from "@/components/guarantee"
import { FAQ } from "@/components/faq"
import { Capacity } from "@/components/capacity"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <Features />
      <EmailLists />
      <Guarantee />
      <Capacity />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  )
}
