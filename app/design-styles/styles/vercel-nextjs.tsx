export function VercelNextJS() {
  return (
    <div
      style={{
        background: "#000",
        borderRadius: 12,
        padding: 24,
        color: "#ededed",
        border: "1px solid #333",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <svg width="18" height="18" viewBox="0 0 76 65" fill="#fff">
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
        </svg>
        <h2 style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.3 }}>
          Vercel
        </h2>
      </div>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5, color: "#888" }}>
        Monochrome precision. Black canvas, white text, subtle borders.
        Geist font. Developer-focused minimalism.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "8px 16px",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 13,
            color: "#000",
          }}
        >
          Deploy
        </button>
        <button
          style={{
            background: "transparent",
            border: "1px solid #333",
            borderRadius: 6,
            padding: "8px 16px",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 13,
            color: "#ededed",
          }}
        >
          Learn More
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#111",
          borderRadius: 6,
          padding: 12,
          fontSize: 13,
          border: "1px solid #222",
          color: "#666",
          fontFamily: "monospace",
        }}
      >
        $ npx create-next-app@latest
      </div>
    </div>
  );
}
