# Presswork

A front-end portfolio project: a converter tool for **images → PDF** and
**PDF → Word**, built with React and Tailwind CSS.

This is a **UI/UX demo**. Conversions are simulated client-side (progress
bars, status changes, mock downloads) so the project can be shown off without
a backend. The "Notes for going further" section below covers how to wire in
real conversion.

## Stack

- React 18
- Vite
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  App.jsx              — page assembly
  index.css            — Tailwind directives + a few global rules
  components/
    Navbar.jsx
    Hero.jsx            — headline + paper-stack SVG illustration
    Converter.jsx        — the tool: mode tabs, state, mock conversion logic
    DropZone.jsx         — drag-and-drop + file picker
    FileList.jsx         — per-file status/progress/download row
    Steps.jsx            — "how it works" 3-step explainer
    Footer.jsx
```

## Notes for going further

If you want to make this fully functional for a stronger portfolio piece:

- **Image → PDF**: [`pdf-lib`](https://github.com/Hopding/pdf-lib) or
  [`jspdf`](https://github.com/parallax/jsPDF) can build a real PDF from
  image files entirely in the browser — no server needed.
- **PDF → Word**: this direction is harder to do purely client-side with good
  fidelity. A common approach is a small backend endpoint (e.g. using
  `pdf2docx` in Python, or a hosted conversion API) that the front end calls.
- Swap the mock `runMockConversion` / `downloadOne` functions in
  `Converter.jsx` for real calls once you've picked your approach — the rest
  of the UI (progress, statuses, download list) is already wired to work
  with real async operations.

## License

Free to use for your own portfolio.
