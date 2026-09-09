const steps = [
  {
    n: '01',
    title: 'Drop your files',
    body: 'Drag in a batch of photos, or a PDF you need in an editable format. Presswork sorts them by what they need.',
  },
  {
    n: '02',
    title: 'Watch it convert',
    body: 'Each file moves through its own conversion pass, with a manifest showing exactly where it is.',
  },
  {
    n: '03',
    title: 'Download the result',
    body: 'Grab files one at a time, or everything at once as a single archive.',
  },
]

export default function Steps() {
  return (
    <section id="how" className="border-t border-inkLine">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="font-display text-2xl text-cream md:text-3xl">How it works</h2>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s) => (
            <div key={s.n} className="border-l border-inkLine pl-6">
              <span className="font-display text-sm text-brass">{s.n}</span>
              <h3 className="mt-3 font-sans text-base font-medium text-cream">{s.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ash">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
