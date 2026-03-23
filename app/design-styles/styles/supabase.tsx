export function Supabase() {
  return (
    <div
      style={{
        background: "#1c1c1c",
        borderRadius: 12,
        padding: 24,
        color: "#ededed",
        border: "1px solid #2a2a2a",
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>
        <span style={{ color: "#3ecf8e" }}>Supa</span>base
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5, color: "#888" }}>
        Dark developer dashboard aesthetic. Emerald green brand accent,
        dashboard-dense with clean data tables.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#3ecf8e",
            border: "none",
            borderRadius: 4,
            padding: "8px 16px",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 13,
            color: "#000",
          }}
        >
          Start project
        </button>
        <button
          style={{
            background: "transparent",
            border: "1px solid #444",
            borderRadius: 4,
            padding: "8px 16px",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 13,
            color: "#ccc",
          }}
        >
          Documentation
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#252525",
          borderRadius: 4,
          padding: 12,
          fontSize: 13,
          border: "1px solid #333",
          color: "#666",
        }}
      >
        Dark base, #3ecf8e green, dashboard-native, small radius.
      </div>
    </div>
  );
}
