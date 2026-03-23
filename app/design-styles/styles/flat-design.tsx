export function FlatDesign() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 0,
        padding: 24,
        color: "#333",
      }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 8,
          color: "#1a73e8",
        }}
      >
        Flat Design
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
        Pure minimalism. No shadows, no gradients, no textures. Just clean
        shapes and solid colors.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#1a73e8",
            border: "none",
            borderRadius: 0,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
          }}
        >
          Primary
        </button>
        <button
          style={{
            background: "#e8f0fe",
            border: "none",
            borderRadius: 0,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#1a73e8",
          }}
        >
          Secondary
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#f1f3f4",
          padding: 12,
          fontSize: 13,
        }}
      >
        No decoration. Solid fills only.
      </div>
    </div>
  );
}
