export function SoftPop() {
  return (
    <div
      style={{
        background: "#fef0f5",
        borderRadius: 24,
        padding: 24,
        color: "#6b3a5a",
        boxShadow: "0 8px 30px rgba(200, 100, 150, 0.1)",
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
        Soft Pop
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
        Friendly and approachable with pastel candy colors, rounded shapes,
        and gentle depth.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
            border: "none",
            borderRadius: 20,
            padding: "8px 20px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
            boxShadow: "0 4px 15px rgba(255, 154, 158, 0.35)",
          }}
        >
          Sweet
        </button>
        <button
          style={{
            background: "#fff",
            border: "none",
            borderRadius: 20,
            padding: "8px 20px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#e07090",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
          }}
        >
          Soft
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#fff0f6",
          borderRadius: 16,
          padding: 12,
          fontSize: 13,
          boxShadow: "0 2px 10px rgba(200,100,150,0.06)",
        }}
      >
        Pastels, pillowy radii, diffused shadows.
      </div>
    </div>
  );
}
