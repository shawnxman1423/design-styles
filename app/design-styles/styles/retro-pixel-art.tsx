export function RetroPixelArt() {
  return (
    <div
      style={{
        background: "#2c003e",
        borderRadius: 0,
        padding: 24,
        color: "#0f0",
        fontFamily: "monospace",
        imageRendering: "pixelated" as const,
      }}
    >
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          marginBottom: 8,
          fontFamily: "monospace",
          textTransform: "uppercase" as const,
        }}
      >
        [Pixel / Retro]
      </h2>
      <p
        style={{
          fontSize: 13,
          marginBottom: 16,
          lineHeight: 1.6,
          color: "#8bc34a",
        }}
      >
        8-bit / 16-bit gaming nostalgia. Pixel fonts, limited palettes,
        chunky grids.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#0f0",
            border: "none",
            borderRadius: 0,
            padding: "8px 16px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 12,
            color: "#000",
            fontFamily: "monospace",
            textTransform: "uppercase" as const,
          }}
        >
          ► Start
        </button>
        <button
          style={{
            background: "transparent",
            border: "2px solid #0f0",
            borderRadius: 0,
            padding: "8px 16px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 12,
            color: "#0f0",
            fontFamily: "monospace",
            textTransform: "uppercase" as const,
          }}
        >
          Options
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          borderTop: "2px dashed #0f050",
          paddingTop: 12,
          fontSize: 12,
          color: "#4caf50",
        }}
      >
        &gt; READY PLAYER ONE_
      </div>
    </div>
  );
}
