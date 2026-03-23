export function Y2KRetroFuturism() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #ff00ff 0%, #00ffff 50%, #ff00ff 100%)",
        borderRadius: 4,
        padding: 3,
      }}
    >
      <div
        style={{
          background: "#1a0030",
          borderRadius: 2,
          padding: 24,
          color: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: 22,
            fontWeight: 900,
            marginBottom: 8,
            background:
              "linear-gradient(90deg, #ff00ff, #00ffff, #ffff00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Y2K / Retro-Futurism
        </h2>
        <p
          style={{
            fontSize: 14,
            marginBottom: 16,
            lineHeight: 1.5,
            color: "#c0a0ff",
          }}
        >
          Late-90s/early-2000s nostalgia. Chrome, neon, bubbly shapes, and
          techno-optimism.
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            style={{
              background:
                "linear-gradient(135deg, #ff00ff, #ff6600)",
              border: "2px solid #ff00ff",
              borderRadius: 20,
              padding: "8px 16px",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: 13,
              color: "#fff",
              textShadow: "0 0 8px #ff00ff",
            }}
          >
            Chrome
          </button>
          <button
            style={{
              background: "transparent",
              border: "2px solid #00ffff",
              borderRadius: 20,
              padding: "8px 16px",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: 13,
              color: "#00ffff",
              textShadow: "0 0 8px #00ffff",
            }}
          >
            Neon
          </button>
        </div>
        <div
          style={{
            marginTop: 16,
            background: "rgba(255,0,255,0.1)",
            borderRadius: 4,
            padding: 12,
            fontSize: 13,
            border: "1px solid rgba(255,0,255,0.3)",
            color: "#e0c0ff",
          }}
        >
          Neon gradients, metallic sheen, glowing text.
        </div>
      </div>
    </div>
  );
}
