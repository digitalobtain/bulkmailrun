import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <span className="text-white">Bulk</span>
          <span className="text-[#86868b]">Sender</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link href="#features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#guarantee" className="hover:text-white transition-colors">
            Guarantee
          </Link>
          <Link href="#lists" className="hover:text-white transition-colors">
            Lists
          </Link>
          <Link href="#faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
        </div>
        <Button
          asChild
          className="bg-white text-black hover:bg-gray-200 rounded-full px-6 text-sm font-medium transition-all"
        >
          <a href="https://calendly.com/anaschow/30min" target="_blank" rel="noopener noreferrer">
            Book a Call
          </a>
        </Button>
      </div>
    </nav>
  )
}
