
import { useState } from 'react'

export default function InstagramEmbed() {
  const [reloadKey, setReloadKey] = useState(0)

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '700px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div>
        <h2 style={{ margin: '0 0 6px' }}>Instagram</h2>
        <p style={{ margin: 0, fontSize: '14px', opacity: 0.75 }}>
          Testing Instagram inside Social. Instagram controls what can load
          here, so Social's content restrictions may not apply.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button
          onClick={() => setReloadKey((current) => current + 1)}
          style={{
            padding: '9px 14px',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            background: 'var(--surface-soft)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
          }}
        >
          Reload Instagram
        </button>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '9px 14px',
            borderRadius: '8px',
            background: 'var(--accent)',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          Open Instagram separately
        </a>
      </div>

      <div
        style={{
          flex: 1,
          minHeight: '600px',
          overflow: 'hidden',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          background: 'var(--surface)',
        }}
      >
        <iframe
          key={reloadKey}
          src="https://www.instagram.com/"
          title="Instagram"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '600px',
            border: 0,
            display: 'block',
          }}
          allow="camera; microphone; clipboard-read; clipboard-write"
        />
      </div>

      <p style={{ margin: 0, fontSize: '12px', opacity: 0.65 }}>
        If Instagram shows a blank area, refuses to load, or cannot keep you
        signed in, that is an Instagram/browser restriction—not an error in
        your Social app.
      </p>
    </div>
  )
}
