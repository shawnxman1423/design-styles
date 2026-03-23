export function Bauhaus() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 0,
        padding: 24,
        color: "#000",
        borderTop: "8px solid #000",
      }}
    >
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "#e63946",
          }}
        />
        <div style={{ width: 24, height: 24, background: "#457b9d" }} />
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderBottom: "24px solid #f4a261",
          }}
        />
      </div>
      <h2
        style={{
          fontSize: 22,
          fontWeight: 900,
          marginBottom: 8,
          textTransform: "uppercase" as const,
          letterSpacing: 4,
        }}
      >
        Bauhaus
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
        Functional geometric design. Primary colors, strict grids,
        sans-serif. Form follows function.
      </p>
      <div
        style={{
          background: "#000",
          padding: 12,
          fontSize: 13,
          color: "#fff",
          fontWeight: 600,
        }}
      >
        Circle. Square. Triangle. Primary palette.
      </div>
    </div>
  );
}
