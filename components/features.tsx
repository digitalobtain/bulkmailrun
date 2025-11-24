"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ShieldCheck, Settings2 } from "lucide-react"

const features = [
  {
    title: "Guaranteed Deliverability",
    description:
      "I have DKIM, DMARC, SPF setup the RIGHT way. This requires perfection and isn't something anyone can nor should do manually.",
    icon: CheckCircle2,
    color: "text-green-500",
  },
  {
    title: "Zero Domain Risk for You",
    description:
      "I'll be using my own domain and email accounts for sending. Specific domain / email account structure to be able to send large volumes without burning out your domain.",
    icon: ShieldCheck,
    color: "text-blue-500",
  },
  {
    title: "On-Going Management",
    description:
      "Cold email campaigns aren't a 'set & forget' kind of thing. They are evolving organisms that you must constantly tweak if you want to land in the inbox.",
    icon: Settings2,
    color: "text-purple-500",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 border-b border-white/10 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Why Work With Me Instead of <span className="text-gradient">Doing It Yourself?</span>
          </h2>
          <p className="text-white/60 text-lg">
            Professional infrastructure managed by an expert, so you can focus on closing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <div className={`p-3 rounded-lg bg-white/5 w-fit mb-6 ${feature.color}`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
