export function Claymorphism() {
  return (
    <div
      style={{
        background: "#f0e6ff",
        borderRadius: 24,
        padding: 24,
        color: "#4a3070",
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow:
          "0 8px 30px rgba(100, 60, 160, 0.15), inset 0 -4px 6px rgba(100, 60, 160, 0.1), inset 0 4px 6px rgba(255,255,255,0.7)",
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
        Claymorphism
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
        Puffy 3D clay-like appearance. Elements look inflated and soft like
        molded plasticine.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#c4a0ff",
            border: "1px solid rgba(255,255,255,0.4)",
            borderRadius: 16,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
            boxShadow:
              "0 4px 12px rgba(100,60,160,0.2), inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -2px 4px rgba(100,60,160,0.15)",
          }}
        >
          Squishy
        </button>
        <button
          style={{
            background: "#ffe0f0",
            border: "1px solid rgba(255,255,255,0.4)",
            borderRadius: 16,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#a04080",
            boxShadow:
              "0 4px 12px rgba(160,60,120,0.15), inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -2px 4px rgba(160,60,120,0.1)",
          }}
        >
          Puffy
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#e8d8ff",
          borderRadius: 16,
          padding: 12,
          fontSize: 13,
          border: "1px solid rgba(255,255,255,0.4)",
          boxShadow:
            "inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -2px 4px rgba(100,60,160,0.1)",
        }}
      >
        Inset + outer shadows, pastels, rounded corners.
      </div>
    </div>
  );
}
