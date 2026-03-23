export function MacOSAqua() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #f6f6f6 0%, #e8e8e8 100%)",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid #b0b0b0",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(180deg, #e8e8e8 0%, #d0d0d0 100%)",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          borderBottom: "1px solid #b0b0b0",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 0 1px rgba(0,0,0,0.2)" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 0 1px rgba(0,0,0,0.2)" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 0 1px rgba(0,0,0,0.2)" }} />
        </div>
        <span style={{ fontSize: 13, fontWeight: 500, color: "#4a4a4a", flex: 1, textAlign: "center" as const }}>
          macOS Aqua
        </span>
      </div>
      <div style={{ padding: 20, color: "#333" }}>
        <p style={{ fontSize: 13, marginBottom: 14, lineHeight: 1.5 }}>
          Lickable UI. Glossy gel buttons, pinstripe textures, traffic light
          controls, translucent panels.
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            style={{
              background: "linear-gradient(180deg, #6cb4f8 0%, #1a82f7 50%, #0970e0 100%)",
              border: "none",
              borderRadius: 6,
              padding: "6px 20px",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: 12,
              color: "#fff",
              boxShadow: "0 1px 3px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
              textShadow: "0 -1px 0 rgba(0,0,0,0.2)",
            }}
          >
            Default
          </button>
          <button
            style={{
              background: "linear-gradient(180deg, #fff 0%, #e8e8e8 100%)",
              border: "1px solid #b0b0b0",
              borderRadius: 6,
              padding: "6px 20px",
              fontWeight: 500,
              cursor: "pointer",
              fontSize: 12,
              color: "#333",
              boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
            }}
          >
            Regular
          </button>
        </div>
      </div>
    </div>
  );
}
