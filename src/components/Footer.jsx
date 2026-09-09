export default function Footer() {
  return (
    <footer className="border-t border-inkLine">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 font-sans text-sm text-ash md:flex-row md:items-center md:px-10">
        <p>Presswork — a front-end portfolio project. Conversions shown here are simulated in the browser.</p>
        <a href="https://github.com" className="transition-colors hover:text-brass">
          Source on GitHub
        </a>
      </div>
    </footer>
  )
}
