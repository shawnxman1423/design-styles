export function DarkModeAesthetic() {
  return (
    <div
      style={{
        background: "#111111",
        borderRadius: 16,
        padding: 24,
        color: "#e0e0e0",
        border: "1px solid #222",
      }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 8,
          color: "#fff",
        }}
      >
        Dark Mode
      </h2>
      <p
        style={{
          fontSize: 14,
          marginBottom: 16,
          lineHeight: 1.5,
          color: "#888",
        }}
      >
        Premium dark-first design. Careful luminance hierarchy with high
        contrast accents.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#000",
          }}
        >
          Primary
        </button>
        <button
          style={{
            background: "#222",
            border: "1px solid #333",
            borderRadius: 8,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#ccc",
          }}
        >
          Ghost
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#1a1a1a",
          borderRadius: 8,
          padding: 12,
          fontSize: 13,
          border: "1px solid #222",
          color: "#666",
        }}
      >
        Elevated surfaces, accent pops, managed contrast.
      </div>
    </div>
  );
}
