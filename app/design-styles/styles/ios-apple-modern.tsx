export function IOSAppleModern() {
  return (
    <div
      style={{
        background: "rgba(242, 242, 247, 1)",
        borderRadius: 20,
        padding: 24,
        color: "#1c1c1e",
      }}
    >
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4, letterSpacing: -0.5 }}>
        Apple / iOS
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5, color: "#8e8e93" }}>
        San Francisco font, vibrant system colors, rounded rectangles,
        semantic spacing, and effortless clarity.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#007aff",
            border: "none",
            borderRadius: 12,
            padding: "10px 20px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 14,
            color: "#fff",
          }}
        >
          Continue
        </button>
        <button
          style={{
            background: "rgba(0,122,255,0.1)",
            border: "none",
            borderRadius: 12,
            padding: "10px 20px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 14,
            color: "#007aff",
          }}
        >
          Cancel
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#fff",
          borderRadius: 12,
          padding: 12,
          fontSize: 13,
          color: "#8e8e93",
        }}
      >
        System blue, rounded rects, semantic hierarchy, vibrancy.
      </div>
    </div>
  );
}
