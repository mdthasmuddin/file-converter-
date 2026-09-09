function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

const statusLabel = {
  queued: 'Queued',
  converting: 'Converting…',
  done: 'Ready',
  error: 'Couldn\u2019t convert',
}

export default function FileList({ files, outputExt, onDownload, onDownloadAll }) {
  if (files.length === 0) return null

  const allDone = files.every((f) => f.status === 'done')

  return (
    <div className="mt-6 rounded-md border border-inkLine bg-inkSoft">
      <div className="flex items-center justify-between border-b border-inkLine px-5 py-3">
        <span className="font-sans text-xs text-ash">
          {files.length} file{files.length > 1 ? 's' : ''}
        </span>
        {allDone && files.length > 1 && (
          <button
            onClick={onDownloadAll}
            className="font-sans text-xs font-medium text-brass hover:text-brassDark"
          >
            Download all as .zip
          </button>
        )}
      </div>
      <ul>
        {files.map((f) => (
          <li
            key={f.id}
            className="flex items-center justify-between gap-4 border-b border-inkLine px-5 py-3.5 last:border-b-0"
          >
            <div className="min-w-0 flex-1">
              <p className="truncate font-sans text-sm text-cream">{f.name}</p>
              <p className="mt-0.5 font-sans text-xs text-ash">
                {formatSize(f.size)} · {statusLabel[f.status]}
              </p>
              {f.status === 'converting' && (
                <div className="mt-2 h-1 w-full max-w-[200px] overflow-hidden rounded-full bg-ink">
                  <div
                    className="h-full rounded-full bg-brass transition-all duration-150"
                    style={{ width: `${f.progress}%` }}
                  />
                </div>
              )}
            </div>

            {f.status === 'done' && (
              <button
                onClick={() => onDownload(f)}
                className="shrink-0 rounded-md border border-teal px-3 py-1.5 font-sans text-xs font-medium text-teal transition-colors hover:bg-teal hover:text-cream"
              >
                Download .{outputExt}
              </button>
            )}
            {f.status === 'error' && (
              <span className="shrink-0 font-sans text-xs text-ash">Try again</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
