import { AlertTriangle } from "lucide-react"
import Image from "next/image"

export function Capacity() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-orange-950/20">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 text-orange-500 mb-6 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-semibold uppercase tracking-wider text-sm">High Demand</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Limited Capacity – Only <span className="text-orange-500">5–10 Clients</span> at a Time
        </h2>

        <p className="max-w-2xl mx-auto text-xl text-white/70 leading-relaxed mb-12">
          Running massive cold email campaigns requires daily deliverability management and hands-on effort. That's why
          I only take on 5–10 clients at a time. Once spots are filled, you'll have to join the waitlist.
        </p>

        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 mb-4">
            <Image
              src="/images/cropped-circle-image.png"
              alt="Anas Chowdhury"
              fill
              className="rounded-full object-cover border-2 border-white/20"
            />
          </div>
          <p className="font-bold text-lg">Anas Chowdhury</p>
          <p className="text-sm text-white/40">Email Infrastructure Expert</p>
        </div>
      </div>
    </section>
  )
}
