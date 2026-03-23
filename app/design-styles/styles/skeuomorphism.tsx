export function Skeuomorphism() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #f5f0e8 0%, #e8ddd0 100%)",
        borderRadius: 12,
        padding: 24,
        color: "#4a3f35",
        border: "1px solid #c4b8a8",
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 8,
          textShadow: "0 1px 0 rgba(255,255,255,0.5)",
        }}
      >
        Skeuomorphism
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
        Realistic textures and materials imitating physical objects. Leather,
        metal, paper.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background:
              "linear-gradient(180deg, #6cb5f7 0%, #3a8ee0 50%, #2a7dd0 100%)",
            border: "1px solid #1a5da0",
            borderRadius: 8,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
            textShadow: "0 -1px 0 rgba(0,0,0,0.3)",
            boxShadow:
              "0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
          }}
        >
          Glossy
        </button>
        <button
          style={{
            background:
              "linear-gradient(180deg, #f0ebe4 0%, #d8d0c4 50%, #ccc4b8 100%)",
            border: "1px solid #b0a898",
            borderRadius: 8,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#5a5040",
            textShadow: "0 1px 0 rgba(255,255,255,0.5)",
            boxShadow:
              "0 2px 4px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          Matte
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background:
            "linear-gradient(180deg, #f8f4ee 0%, #efe8dc 100%)",
          borderRadius: 6,
          padding: 12,
          fontSize: 13,
          border: "1px solid #d4c8b8",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.08)",
        }}
      >
        Gradients, beveled edges, realistic detail.
      </div>
    </div>
  );
}
