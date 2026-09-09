import { useRef, useState } from 'react'

export default function DropZone({ accept, hint, onFiles }) {
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef(null)

  function handleDrop(e) {
    e.preventDefault()
    setDragging(false)
    const files = Array.from(e.dataTransfer.files || [])
    if (files.length) onFiles(files)
  }

  function handlePick(e) {
    const files = Array.from(e.target.files || [])
    if (files.length) onFiles(files)
    e.target.value = ''
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault()
        setDragging(true)
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={`flex flex-col items-center justify-center rounded-md border-2 border-dashed px-6 py-14 text-center transition-colors ${
        dragging ? 'border-brass bg-paperDim' : 'border-paperLine bg-paper'
      }`}
    >
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className="mb-4">
        <path d="M17 5 L17 22" stroke="#A97C2E" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 13 L17 5 L24 13" stroke="#A97C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="5" y="25" width="24" height="4" rx="1" fill="#3F6E64" opacity="0.4" />
      </svg>
      <p className="font-sans text-sm text-ink">
        Drop {hint} here, or{' '}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="font-medium text-brassDark underline decoration-brassDark/40 underline-offset-2 hover:decoration-brassDark"
        >
          browse your files
        </button>
      </p>
      <p className="mt-1.5 font-sans text-xs text-ash">{accept}</p>
      <input
        ref={inputRef}
        type="file"
        multiple
        accept={accept}
        onChange={handlePick}
        className="hidden"
      />
    </div>
  )
}
