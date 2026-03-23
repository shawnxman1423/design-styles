export function Cyberpunk() {
  return (
    <div
      style={{
        background: "#0a0a12",
        borderRadius: 2,
        padding: 24,
        color: "#e0e0e0",
        border: "1px solid #0ff",
        boxShadow: "0 0 10px rgba(0,255,255,0.2), inset 0 0 10px rgba(0,255,255,0.05)",
      }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 900,
          marginBottom: 8,
          color: "#0ff",
          textShadow: "0 0 10px #0ff, 0 0 30px #0ff40",
          fontFamily: "monospace",
          textTransform: "uppercase" as const,
          letterSpacing: 3,
        }}
      >
        Cyberpunk
      </h2>
      <p
        style={{
          fontSize: 14,
          marginBottom: 16,
          lineHeight: 1.5,
          color: "#888",
          fontFamily: "monospace",
        }}
      >
        Dark dystopian-futuristic. Neon glows, glitch effects, angular
        clipped shapes.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#0ff",
            border: "none",
            borderRadius: 0,
            padding: "8px 16px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 13,
            color: "#000",
            fontFamily: "monospace",
            textTransform: "uppercase" as const,
            clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          Execute
        </button>
        <button
          style={{
            background: "transparent",
            border: "1px solid #f0f",
            borderRadius: 0,
            padding: "8px 16px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 13,
            color: "#f0f",
            fontFamily: "monospace",
            textTransform: "uppercase" as const,
            textShadow: "0 0 8px #f0f",
          }}
        >
          Hack
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "rgba(0,255,255,0.05)",
          padding: 12,
          fontSize: 13,
          borderLeft: "2px solid #0ff",
          fontFamily: "monospace",
          color: "#0f8",
        }}
      >
        {"> "}Neon accents, clip-path, dark base, mono font.
      </div>
    </div>
  );
}
