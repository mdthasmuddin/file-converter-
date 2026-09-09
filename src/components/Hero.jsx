export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-24">
        <div>
          <h1 className="font-display text-[2.6rem] leading-[1.08] text-cream sm:text-[3.4rem]">
            Turn a photo into a PDF.
            <br />
            Turn a PDF into a document
            <br />
            you can actually edit.
          </h1>
          <p className="mt-6 max-w-md font-sans text-[15px] leading-relaxed text-ash">
            Presswork handles both directions of the everyday file shuffle —
            scans and screenshots into clean PDFs, and locked-down PDFs into
            editable Word files. Nothing leaves your browser.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#tool"
              className="rounded-md bg-brass px-6 py-3 font-sans text-sm font-medium text-ink transition-colors hover:bg-brassDark"
            >
              Start converting
            </a>
            <span className="font-sans text-sm text-ash">
              No account. No upload to a server.
            </span>
          </div>
        </div>

        <div className="relative mx-auto h-72 w-full max-w-sm md:h-80">
          <PaperStack />
        </div>
      </div>
    </section>
  )
}

function PaperStack() {
  return (
    <svg
      viewBox="0 0 360 320"
      className="h-full w-full"
      role="img"
      aria-label="An image file transforming into a PDF, and a PDF transforming into a Word document"
    >
      {/* connecting path */}
      <path
        d="M 70 160 C 130 100, 170 220, 230 160"
        stroke="#2A313B"
        strokeWidth="1.5"
        strokeDasharray="3 6"
        fill="none"
      />

      {/* image sheet */}
      <g transform="translate(20,90) rotate(-8)">
        <rect width="110" height="140" rx="4" fill="#1C222A" stroke="#2A313B" />
        <rect x="14" y="16" width="82" height="60" rx="2" fill="#3F6E64" opacity="0.35" />
        <path d="M14 62 L38 40 L58 58 L76 34 L96 62 Z" fill="#3F6E64" opacity="0.7" />
        <circle cx="30" cy="30" r="6" fill="#C9973E" />
        <rect x="14" y="90" width="60" height="6" rx="3" fill="#2A313B" />
        <rect x="14" y="104" width="82" height="6" rx="3" fill="#2A313B" />
        <text x="55" y="132" textAnchor="middle" fontSize="10" fill="#8B93A0" fontFamily="IBM Plex Sans">JPG</text>
      </g>

      {/* pdf sheet, center, upright and larger to show it's the pivot */}
      <g transform="translate(125,55)">
        <rect width="118" height="150" rx="4" fill="#EDE7DA" stroke="#CFC6AE" />
        <rect x="16" y="20" width="86" height="6" rx="3" fill="#C9973E" />
        <rect x="16" y="34" width="86" height="5" rx="2.5" fill="#CFC6AE" />
        <rect x="16" y="46" width="70" height="5" rx="2.5" fill="#CFC6AE" />
        <rect x="16" y="58" width="86" height="5" rx="2.5" fill="#CFC6AE" />
        <rect x="16" y="70" width="54" height="5" rx="2.5" fill="#CFC6AE" />
        <rect x="16" y="110" width="34" height="20" rx="2" fill="none" stroke="#A97C2E" strokeWidth="1.4" />
        <text x="33" y="123" textAnchor="middle" fontSize="9" fill="#A97C2E" fontFamily="IBM Plex Sans" fontWeight="600">PDF</text>
      </g>

      {/* word sheet */}
      <g transform="translate(250,95) rotate(7)">
        <rect width="100" height="128" rx="4" fill="#1C222A" stroke="#2A313B" />
        <rect x="12" y="16" width="76" height="5" rx="2.5" fill="#3F6E64" />
        <rect x="12" y="28" width="76" height="4" rx="2" fill="#2A313B" />
        <rect x="12" y="38" width="60" height="4" rx="2" fill="#2A313B" />
        <rect x="12" y="48" width="76" height="4" rx="2" fill="#2A313B" />
        <rect x="12" y="58" width="44" height="4" rx="2" fill="#2A313B" />
        <text x="50" y="108" textAnchor="middle" fontSize="9" fill="#3F6E64" fontFamily="IBM Plex Sans" fontWeight="600">DOCX</text>
      </g>
    </svg>
  )
}
