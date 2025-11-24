"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("start-campaign")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-grid-small-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 backdrop-blur-xl mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Accepting 2 new clients for this month
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            I Send the Bulk Emails. <br />
            <span className="text-gradient-purple">You Close the Deals.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I can send <span className="text-white font-semibold">30,000–300,000</span> bulk emails per month on your
            behalf to my email lists and guarantee <span className="text-white font-semibold">10%+ open rate</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-black hover:bg-gray-200 h-12 px-8 text-base rounded-full w-full sm:w-auto"
            >
              Start Campaigns <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
    </section>
  )
}
