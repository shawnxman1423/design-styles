export function Notion() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 4,
        padding: 24,
        color: "#37352f",
      }}
    >
      <h2 style={{ fontSize: 30, fontWeight: 700, marginBottom: 8, letterSpacing: -0.5 }}>
        Notion
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.6, color: "#787774" }}>
        Content-first minimalism. Warm grays, generous whitespace, inline
        blocks, and a writing-native interface.
      </p>
      <div style={{ display: "flex", gap: 6 }}>
        <button
          style={{
            background: "#2383e2",
            border: "none",
            borderRadius: 4,
            padding: "6px 14px",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
          }}
        >
          New page
        </button>
        <button
          style={{
            background: "#f1f1ef",
            border: "none",
            borderRadius: 4,
            padding: "6px 14px",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 13,
            color: "#37352f",
          }}
        >
          Import
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          padding: "8px 12px",
          fontSize: 14,
          color: "#787774",
          borderLeft: "3px solid #e8e7e4",
        }}
      >
        Warm whites, serif headers, block-based, inline color chips.
      </div>
    </div>
  );
}
