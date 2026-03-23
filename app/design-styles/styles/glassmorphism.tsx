export function Glassmorphism() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        borderRadius: 20,
        padding: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 18,
          padding: 24,
          color: "#fff",
          height: "100%",
        }}
      >
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
          Glassmorphism
        </h2>
        <p
          style={{
            fontSize: 14,
            marginBottom: 16,
            lineHeight: 1.5,
            opacity: 0.9,
          }}
        >
          Frosted-glass layers with translucent surfaces, blur, and vibrant
          gradients behind.
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 12,
              padding: "8px 16px",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: 13,
              backdropFilter: "blur(8px)",
            }}
          >
            Action
          </button>
          <button
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 12,
              padding: "8px 16px",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: 13,
            }}
          >
            Secondary
          </button>
        </div>
        <div
          style={{
            marginTop: 16,
            background: "rgba(255,255,255,0.08)",
            borderRadius: 12,
            padding: 12,
            fontSize: 13,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          Backdrop blur, translucent panels, soft glow.
        </div>
      </div>
    </div>
  );
}
