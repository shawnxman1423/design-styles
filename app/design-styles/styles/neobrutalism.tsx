export function Neobrutalism() {
  return (
    <div
      style={{
        background: "#ffe156",
        border: "3px solid #000",
        boxShadow: "6px 6px 0 #000",
        borderRadius: 4,
        padding: 24,
        color: "#000",
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8 }}>
        Neobrutalism
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
        Bold, raw aesthetic with high contrast, chunky elements, and hard
        shadows. Unapologetically loud.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#ff6b6b",
            border: "2px solid #000",
            boxShadow: "3px 3px 0 #000",
            padding: "8px 16px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          Action
        </button>
        <button
          style={{
            background: "#fff",
            border: "2px solid #000",
            boxShadow: "3px 3px 0 #000",
            padding: "8px 16px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          Secondary
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#fff",
          border: "2px solid #000",
          padding: 12,
          fontSize: 13,
        }}
      >
        Thick borders, offset shadows, clashing colors.
      </div>
    </div>
  );
}
