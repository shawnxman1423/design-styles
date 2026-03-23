export function HandDrawnSketchy() {
  return (
    <div
      style={{
        background: "#fef9f0",
        borderRadius: 4,
        padding: 24,
        color: "#3a3a2e",
        border: "2px solid #3a3a2e",
        transform: "rotate(-0.5deg)",
        boxShadow: "2px 3px 0 #d4c8b0",
      }}
    >
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          marginBottom: 8,
          fontStyle: "italic",
          transform: "rotate(0.5deg)",
        }}
      >
        Hand-Drawn ~
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
        Imperfect, human-touch aesthetic. Wobbly lines, sketchy textures,
        organic warmth.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#3a3a2e",
            border: "none",
            borderRadius: 2,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#fef9f0",
            transform: "rotate(1deg)",
          }}
        >
          Scribble
        </button>
        <button
          style={{
            background: "transparent",
            border: "2px dashed #3a3a2e",
            borderRadius: 2,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#3a3a2e",
            transform: "rotate(-0.5deg)",
          }}
        >
          Doodle
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          fontSize: 13,
          fontStyle: "italic",
          color: "#6a6a5e",
          borderBottom: "2px dashed #c0b8a0",
          paddingBottom: 8,
        }}
      >
        Wobbly transforms, dashed borders, warm paper tones.
      </div>
    </div>
  );
}
