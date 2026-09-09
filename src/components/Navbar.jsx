export default function Navbar() {
  return (
    <header className="relative z-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            <rect x="3" y="2" width="16" height="20" rx="1.5" fill="#EDE7DA" />
            <rect x="7" y="6" width="16" height="20" rx="1.5" fill="none" stroke="#C9973E" strokeWidth="1.6" />
          </svg>
          <span className="font-display text-lg text-cream">Presswork</span>
        </a>
        <nav className="hidden items-center gap-8 font-sans text-sm text-ash md:flex">
          <a href="#tool" className="transition-colors hover:text-cream">Converter</a>
          <a href="#how" className="transition-colors hover:text-cream">How it works</a>
          <a
            href="https://github.com"
            className="rounded-full border border-inkLine px-4 py-1.5 text-cream transition-colors hover:border-brass hover:text-brass"
          >
            View source
          </a>
        </nav>
      </div>
    </header>
  )
}
