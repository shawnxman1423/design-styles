export function Vaporwave() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #1a0030 0%, #2d1050 50%, #0a1040 100%)",
        borderRadius: 12,
        padding: 24,
        color: "#f0c0ff",
      }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 8,
          color: "#ff71ce",
          textShadow: "0 0 10px #ff71ce, 0 0 20px #ff71ce40",
          fontStyle: "italic",
        }}
      >
        Vaporwave
      </h2>
      <p
        style={{
          fontSize: 14,
          marginBottom: 16,
          lineHeight: 1.5,
          color: "#b090d0",
        }}
      >
        Dreamy internet-era nostalgia. Pastel neons, retro grids, and
        surreal aesthetics.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "linear-gradient(135deg, #ff71ce, #01cdfe)",
            border: "none",
            borderRadius: 4,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
            textShadow: "0 0 6px rgba(255,113,206,0.5)",
          }}
        >
          Dream
        </button>
        <button
          style={{
            background: "transparent",
            border: "1px solid #b967ff",
            borderRadius: 4,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#b967ff",
          }}
        >
          Retro
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "rgba(185,103,255,0.1)",
          borderRadius: 8,
          padding: 12,
          fontSize: 13,
          border: "1px solid rgba(185,103,255,0.2)",
          fontStyle: "italic",
        }}
      >
        ア エ ス テ — Pastel neon glow, retro grids, dreamy blur.
      </div>
    </div>
  );
}
