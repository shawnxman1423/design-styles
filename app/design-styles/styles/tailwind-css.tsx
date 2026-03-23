export function TailwindCSS() {
  return (
    <div
      style={{
        background: "#f8fafc",
        borderRadius: 16,
        padding: 24,
        color: "#0f172a",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 10px 30px rgba(0,0,0,0.04)",
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#0f172a" }}>
        Tailwind CSS
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5, color: "#64748b" }}>
        Utility-first aesthetic. Sky-blue brand, carefully curated color
        scales, crisp shadows, generous radii.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#0ea5e9",
            border: "none",
            borderRadius: 8,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
            boxShadow: "0 1px 2px rgba(14,165,233,0.3)",
          }}
        >
          Get started
        </button>
        <button
          style={{
            background: "#f1f5f9",
            border: "none",
            borderRadius: 8,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#0f172a",
          }}
        >
          Docs
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#fff",
          borderRadius: 8,
          padding: 12,
          fontSize: 13,
          border: "1px solid #e2e8f0",
          color: "#64748b",
        }}
      >
        Slate grays, sky blue accent, 8-radius, layered shadows.
      </div>
    </div>
  );
}
