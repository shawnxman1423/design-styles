export function BentoGrid() {
  return (
    <div
      style={{
        background: "#f8f8f8",
        borderRadius: 20,
        padding: 24,
        color: "#1a1a1a",
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
        Bento Grid
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: 12,
            fontSize: 13,
            gridColumn: "1 / -1",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          Modular layout inspired by Japanese bento boxes. Neat, compartmentalized.
        </div>
        <div
          style={{
            background: "#1a1a1a",
            borderRadius: 12,
            padding: 12,
            fontSize: 13,
            color: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          Cell A
        </div>
        <div
          style={{
            background: "#4f46e5",
            borderRadius: 12,
            padding: 12,
            fontSize: 13,
            color: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          Cell B
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: 12,
            fontSize: 13,
            gridColumn: "1 / -1",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            textAlign: "center" as const,
          }}
        >
          Consistent gaps, rounded cards, varied spans.
        </div>
      </div>
    </div>
  );
}
