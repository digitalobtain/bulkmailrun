"use client"

import { motion } from "framer-motion"

export function Guarantee() {
  return (
    <section id="guarantee" className="py-24 border-b border-white/10 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-purple-500/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            My <span className="text-gradient">Guarantee</span> To You
          </h2>
          <div className="p-1 rounded-2xl bg-gradient-to-r from-orange-500/20 to-purple-500/20">
            <div className="bg-black/80 backdrop-blur-xl rounded-xl p-8 md:p-12 border border-white/10">
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                "This is NOT one of those 'I'll guarantee you 50 new clients in the next 30 days or you don't pay'.
                That's hype. If I don't send the agreed number of emails{" "}
                <span className="text-white font-bold">AND</span> achieve at least a{" "}
                <span className="text-white font-bold">10% open rate</span>, I'll refund you in full."
              </p>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white font-semibold tracking-wide uppercase text-sm">No Risk. No Excuses.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
