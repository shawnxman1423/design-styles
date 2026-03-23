export function GitHub() {
  return (
    <div
      style={{
        background: "#0d1117",
        borderRadius: 8,
        padding: 24,
        color: "#c9d1d9",
        border: "1px solid #30363d",
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 600, color: "#f0f6fc", marginBottom: 8 }}>
        GitHub
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5, color: "#8b949e" }}>
        Developer-focused dark theme. Syntax-highlight-friendly palette,
        clear information hierarchy, code-first layout.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#238636",
            border: "1px solid rgba(240,246,252,0.1)",
            borderRadius: 6,
            padding: "6px 16px",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
          }}
        >
          Code
        </button>
        <button
          style={{
            background: "#21262d",
            border: "1px solid #30363d",
            borderRadius: 6,
            padding: "6px 16px",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 13,
            color: "#c9d1d9",
          }}
        >
          Issues
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#161b22",
          borderRadius: 6,
          padding: 12,
          fontSize: 13,
          border: "1px solid #21262d",
          color: "#8b949e",
          fontFamily: "monospace",
        }}
      >
        #0d1117 base, green CTAs, mono code, muted borders.
      </div>
    </div>
  );
}
