export function MaterialDesign() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        padding: 24,
        color: "#212121",
        boxShadow:
          "0 2px 4px rgba(0,0,0,0.14), 0 3px 4px rgba(0,0,0,0.12), 0 1px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 8,
          color: "#6200ee",
        }}
      >
        Material Design
      </h2>
      <p
        style={{
          fontSize: 14,
          marginBottom: 16,
          lineHeight: 1.5,
          color: "#666",
        }}
      >
        Google&apos;s system. Flat aesthetics with subtle elevation via
        layered shadows.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#6200ee",
            border: "none",
            borderRadius: 4,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
            boxShadow:
              "0 2px 4px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.14)",
            textTransform: "uppercase" as const,
            letterSpacing: 1,
          }}
        >
          Contained
        </button>
        <button
          style={{
            background: "transparent",
            border: "1px solid #6200ee",
            borderRadius: 4,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#6200ee",
            textTransform: "uppercase" as const,
            letterSpacing: 1,
          }}
        >
          Outlined
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#f5f5f5",
          borderRadius: 4,
          padding: 12,
          fontSize: 13,
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.1), 0 1px 1px rgba(0,0,0,0.06)",
        }}
      >
        Elevation hierarchy, ripple effects, 8px grid.
      </div>
    </div>
  );
}
