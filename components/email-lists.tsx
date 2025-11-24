"use client"

import { motion } from "framer-motion"
import { MapPin, Building2, ShieldCheck } from "lucide-react"

const categories = [
  { name: "HVAC", color: "bg-cyan-500/20 border-cyan-500/50 text-cyan-400" },
  { name: "Roofers", color: "bg-orange-500/20 border-orange-500/50 text-orange-400" },
  { name: "Plumbers", color: "bg-blue-500/20 border-blue-500/50 text-blue-400" },
  { name: "SaaS Owners", color: "bg-pink-500/20 border-pink-500/50 text-pink-400" },
  { name: "Digital Agencies", color: "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" },
  { name: "Realtors", color: "bg-yellow-500/20 border-yellow-500/50 text-yellow-400" },
  { name: "Therapists", color: "bg-purple-500/20 border-purple-500/50 text-purple-400" },
  { name: "Psychologists", color: "bg-indigo-500/20 border-indigo-500/50 text-indigo-400" },
  { name: "Salons", color: "bg-rose-500/20 border-rose-500/50 text-rose-400" },
  { name: "Restaurants", color: "bg-red-500/20 border-red-500/50 text-red-400" },
  { name: "Medical Spas", color: "bg-teal-500/20 border-teal-500/50 text-teal-400" },
  { name: "Lawyers", color: "bg-slate-500/20 border-slate-500/50 text-slate-400" },
  { name: "Consultants", color: "bg-violet-500/20 border-violet-500/50 text-violet-400" },
  { name: "E-commerce", color: "bg-sky-500/20 border-sky-500/50 text-sky-400" },
  { name: "Insurance", color: "bg-gray-500/20 border-gray-500/50 text-gray-400" },
  { name: "Auto Dealers", color: "bg-zinc-500/20 border-zinc-500/50 text-zinc-400" },
  { name: "Fitness Trainers", color: "bg-orange-600/20 border-orange-600/50 text-orange-500" },
  { name: "Chiropractors", color: "bg-green-500/20 border-green-500/50 text-green-400" },
]

export function EmailLists() {
  return (
    <section id="lists" className="py-24 border-b border-white/10 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Email Lists Provided</h2>
          <p className="text-white/60 text-lg mb-12">
            Verified email lists tailored to your goals. Whether you want to target a specific state, city, or industry,
            I'll source the right contacts for you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
            <div className="flex gap-4">
              <div className="p-2 bg-orange-500/10 rounded-lg h-fit">
                <MapPin className="text-orange-500 h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Location-Based</h4>
                <p className="text-sm text-white/50">State, city, or nationwide targeting.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2 bg-blue-500/10 rounded-lg h-fit">
                <Building2 className="text-blue-500 h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Industry-Specific</h4>
                <p className="text-sm text-white/50">From SaaS to real estate to local services.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2 bg-green-500/10 rounded-lg h-fit">
                <ShieldCheck className="text-green-500 h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Verified & Cleaned</h4>
                <p className="text-sm text-white/50">Avoids hard bounces and spam traps.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`px-4 py-3 rounded-xl border text-center text-sm font-medium backdrop-blur-sm cursor-default hover:brightness-125 transition-all ${cat.color}`}
            >
              {cat.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
