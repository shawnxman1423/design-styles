export function Maximalism() {
  return (
    <div
      style={{
        background:
          "linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff)",
        borderRadius: 12,
        padding: 4,
      }}
    >
      <div
        style={{
          background:
            "repeating-linear-gradient(45deg, #ff6b6b20, #ff6b6b20 10px, transparent 10px, transparent 20px)",
          borderRadius: 10,
          padding: 24,
          color: "#1a0530",
        }}
      >
        <h2
          style={{
            fontSize: 26,
            fontWeight: 900,
            marginBottom: 8,
            background: "linear-gradient(90deg, #ff0000, #ff6600, #ffcc00, #00ff00, #0066ff, #9900ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MAXIMALISM
        </h2>
        <p
          style={{
            fontSize: 14,
            marginBottom: 16,
            lineHeight: 1.5,
            fontWeight: 600,
            color: "#4a1070",
          }}
        >
          Bold, dense, layered! Multiple colors, patterns, textures,
          competing elements. MORE IS MORE.
        </p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
          <button
            style={{
              background: "#ff0066",
              border: "2px solid #ffcc00",
              borderRadius: 20,
              padding: "6px 14px",
              fontWeight: 800,
              cursor: "pointer",
              fontSize: 12,
              color: "#fff",
            }}
          >
            LOUD
          </button>
          <button
            style={{
              background: "#00ccff",
              border: "2px solid #ff00ff",
              borderRadius: 4,
              padding: "6px 14px",
              fontWeight: 800,
              cursor: "pointer",
              fontSize: 12,
              color: "#1a0030",
            }}
          >
            BOLD
          </button>
          <button
            style={{
              background: "#ffcc00",
              border: "2px solid #ff0066",
              borderRadius: 0,
              padding: "6px 14px",
              fontWeight: 800,
              cursor: "pointer",
              fontSize: 12,
              color: "#1a0030",
            }}
          >
            EXTRA
          </button>
        </div>
      </div>
    </div>
  );
}
