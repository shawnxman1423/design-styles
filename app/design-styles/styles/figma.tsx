export function Figma() {
  return (
    <div
      style={{
        background: "#2c2c2c",
        borderRadius: 8,
        padding: 24,
        color: "#ccc",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#f24e1e" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff7262" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#a259ff" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1abcfe" }} />
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 600, color: "#fff" }}>
          Figma
        </h2>
      </div>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5, color: "#999" }}>
        Dark chrome canvas with colorful multiplayer accents. Tool-first,
        functional panels, vibrant brand colors.
      </p>
      <div style={{ display: "flex", gap: 6 }}>
        <button
          style={{
            background: "#0c8ce9",
            border: "none",
            borderRadius: 6,
            padding: "6px 14px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 12,
            color: "#fff",
          }}
        >
          Design file
        </button>
        <button
          style={{
            background: "#3a3a3a",
            border: "1px solid #4a4a4a",
            borderRadius: 6,
            padding: "6px 14px",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 12,
            color: "#ccc",
          }}
        >
          FigJam
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#1e1e1e",
          borderRadius: 4,
          padding: 12,
          fontSize: 12,
          border: "1px solid #3a3a3a",
          color: "#888",
        }}
      >
        Dark canvas #2c2c2c, blue primary, multi-color brand dots.
      </div>
    </div>
  );
}
