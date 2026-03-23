export function Stripe() {
  return (
    <div
      style={{
        background: "#0a2540",
        borderRadius: 12,
        padding: 24,
        color: "#adbdcc",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 200,
          height: 200,
          background: "conic-gradient(from 180deg, #80ecff, #7b73ff, #ff72e1, #f7cc4b, #80ecff)",
          filter: "blur(50px)",
          opacity: 0.3,
        }}
      />
      <div style={{ position: "relative" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
          Stripe
        </h2>
        <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
          Deep navy base with vivid gradient meshes. Premium, developer-trusted.
          Clean type hierarchy with colorful flair.
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            style={{
              background: "#635bff",
              border: "none",
              borderRadius: 8,
              padding: "8px 18px",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: 13,
              color: "#fff",
            }}
          >
            Start now
          </button>
          <button
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8,
              padding: "8px 18px",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: 13,
              color: "#fff",
            }}
          >
            Contact sales
          </button>
        </div>
        <div
          style={{
            marginTop: 16,
            background: "rgba(255,255,255,0.04)",
            borderRadius: 8,
            padding: 12,
            fontSize: 13,
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          Navy #0a2540, blurple #635bff, gradient mesh accents.
        </div>
      </div>
    </div>
  );
}
