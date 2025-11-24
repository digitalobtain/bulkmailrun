"use client"

import { motion } from "framer-motion"
import { Quote, Mail, TrendingUp, Users } from "lucide-react"
import Image from "next/image"

export function CaseStudy() {
  const stats = [
    {
      icon: Users,
      value: "10,000",
      label: "Leads Contacted",
    },
    {
      icon: Mail,
      value: "25",
      label: "Interested Replies",
    },
    {
      icon: TrendingUp,
      value: "0.25%",
      label: "Response Rate",
    },
  ]

  const screenshots = [
    {
      src: "/images/ada-powers-1.png",
      alt: "Email conversation with Ada Powers showing initial setup",
    },
    {
      src: "/images/ada-powers-2.png",
      alt: "Follow-up email conversation showing forwarded replies",
    },
    {
      src: "/images/ada-powers-stats.png",
      alt: "Campaign statistics dashboard showing high delivery and open rates",
    },
  ]

  return (
    <section className="py-24 border-b border-white/10 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient">Case Study</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Real results from real clients</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main case study card */}
          <div className="relative p-8 md:p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-black to-blue-500/10 backdrop-blur-sm">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-purple-500/30" />

            <div className="relative z-10">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ms. Ada Powers</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  Ms. Ada Powers gave her purchased email list of{" "}
                  <span className="text-purple-400 font-semibold">Shopify software owners</span> to offer her newsletter
                  services. Asked me to forward all interested replies to her. In total, she received{" "}
                  <span className="text-blue-400 font-semibold">25 replies</span> from her first campaign to{" "}
                  <span className="text-purple-400 font-semibold">10k leads</span>.
                </p>
              </div>

              {/* Screenshots gallery */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {screenshots.map((shot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
                  >
                    <Image
                      src={shot.src || "/placeholder.svg"}
                      alt={shot.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>

              {/* Stats grid */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="p-6 rounded-xl bg-black/50 border border-white/10 text-center hover:border-purple-500/50 transition-colors"
                  >
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-purple-400" />
                    <div className="text-3xl font-bold mb-1 text-gradient">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
