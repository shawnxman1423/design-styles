export function Neumorphism() {
  return (
    <div
      style={{
        background: "#e0e0e0",
        borderRadius: 20,
        padding: 24,
        color: "#555",
        boxShadow: "8px 8px 16px #bebebe, -8px -8px 16px #ffffff",
      }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 8,
          color: "#333",
        }}
      >
        Neumorphism
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
        Soft, extruded surfaces that push out from the background. Subtle
        and tactile.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#e0e0e0",
            border: "none",
            borderRadius: 12,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#555",
            boxShadow:
              "4px 4px 8px #bebebe, -4px -4px 8px #ffffff, inset 1px 1px 2px #ffffff",
          }}
        >
          Raised
        </button>
        <button
          style={{
            background: "#e0e0e0",
            border: "none",
            borderRadius: 12,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#555",
            boxShadow:
              "inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff",
          }}
        >
          Inset
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#e0e0e0",
          borderRadius: 12,
          padding: 12,
          fontSize: 13,
          boxShadow:
            "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff",
        }}
      >
        Dual shadows, matching bg, soft depth.
      </div>
    </div>
  );
}
