export function MemphisDesign() {
  return (
    <div
      style={{
        background: "#ffeaa7",
        borderRadius: 0,
        padding: 24,
        color: "#2d1b4e",
        border: "3px solid #2d1b4e",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "#ff6b81",
          border: "2px solid #2d1b4e",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 12,
          right: 50,
          width: 0,
          height: 0,
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderBottom: "26px solid #6c5ce7",
        }}
      />
      <h2
        style={{
          fontSize: 22,
          fontWeight: 900,
          marginBottom: 8,
          position: "relative",
        }}
      >
        Memphis Design
      </h2>
      <p
        style={{
          fontSize: 14,
          marginBottom: 16,
          lineHeight: 1.5,
          position: "relative",
        }}
      >
        1980s Italian movement. Geometric shapes, bold patterns, clashing
        colors. Anti-minimalism.
      </p>
      <div style={{ display: "flex", gap: 8, position: "relative" }}>
        <button
          style={{
            background: "#6c5ce7",
            border: "2px solid #2d1b4e",
            borderRadius: 0,
            padding: "8px 16px",
            fontWeight: 800,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
          }}
        >
          BOLD
        </button>
        <button
          style={{
            background: "#00cec9",
            border: "2px solid #2d1b4e",
            borderRadius: 20,
            padding: "8px 16px",
            fontWeight: 800,
            cursor: "pointer",
            fontSize: 13,
            color: "#2d1b4e",
          }}
        >
          POP
        </button>
      </div>
    </div>
  );
}
