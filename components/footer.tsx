export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black text-center text-white/40 text-sm">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} BulkSender. All rights reserved.</p>
        <p className="mt-2">Designed for high-volume email performance.</p>
      </div>
    </footer>
  )
}
