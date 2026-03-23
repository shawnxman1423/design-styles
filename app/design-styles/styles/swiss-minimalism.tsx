export function SwissMinimalism() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 0,
        padding: 24,
        color: "#000",
        borderLeft: "4px solid #000",
      }}
    >
      <h2
        style={{
          fontSize: 28,
          fontWeight: 300,
          marginBottom: 4,
          letterSpacing: -0.5,
          textTransform: "uppercase" as const,
        }}
      >
        Swiss
      </h2>
      <h3
        style={{
          fontSize: 13,
          fontWeight: 700,
          marginBottom: 16,
          textTransform: "uppercase" as const,
          letterSpacing: 3,
          color: "#666",
        }}
      >
        Minimalism
      </h3>
      <p
        style={{
          fontSize: 14,
          marginBottom: 16,
          lineHeight: 1.7,
          maxWidth: 280,
        }}
      >
        Maximum clarity through reduction. Strong typography, ample
        whitespace, systematic grids.
      </p>
      <div
        style={{ display: "flex", gap: 12, alignItems: "center" }}
      >
        <span
          style={{
            width: 20,
            height: 20,
            background: "#000",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: 20,
            height: 20,
            background: "#ff0000",
            display: "inline-block",
          }}
        />
        <span style={{ fontSize: 11, color: "#999", letterSpacing: 2 }}>
          GRID · TYPE · SPACE
        </span>
      </div>
    </div>
  );
}
