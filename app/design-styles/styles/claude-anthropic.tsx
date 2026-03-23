export function ClaudeAnthropic() {
  return (
    <div
      style={{
        background: "#2b1810",
        borderRadius: 16,
        padding: 24,
        color: "#e8ddd0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #d4a574, #c4956a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 700,
            color: "#2b1810",
          }}
        >
          C
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 600, color: "#f0e6da" }}>
          Claude / Anthropic
        </h2>
      </div>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5, color: "#a89080" }}>
        Warm earthy tones. Terracotta accents on dark cocoa. Thoughtful,
        approachable, human-feeling. Parchment surfaces.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#d4956a",
            border: "none",
            borderRadius: 10,
            padding: "8px 18px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#2b1810",
          }}
        >
          Start chat
        </button>
        <button
          style={{
            background: "rgba(212,149,106,0.12)",
            border: "1px solid rgba(212,149,106,0.25)",
            borderRadius: 10,
            padding: "8px 18px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#d4a574",
          }}
        >
          Learn more
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "rgba(212,149,106,0.06)",
          borderRadius: 10,
          padding: 12,
          fontSize: 13,
          border: "1px solid rgba(212,149,106,0.12)",
          color: "#a08070",
        }}
      >
        Warm browns, terracotta accent, soft radii, parchment feel.
      </div>
    </div>
  );
}
