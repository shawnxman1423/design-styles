export function AuroraGradientMesh() {
  return (
    <div
      style={{
        background: "#0a0a1a",
        borderRadius: 20,
        padding: 24,
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -30,
          right: -30,
          width: 160,
          height: 160,
          background: "radial-gradient(circle, #7c3aed80 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -20,
          left: -20,
          width: 140,
          height: 140,
          background: "radial-gradient(circle, #06b6d480 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div style={{ position: "relative" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
          Aurora / Gradient Mesh
        </h2>
        <p
          style={{
            fontSize: 14,
            marginBottom: 16,
            lineHeight: 1.5,
            color: "#a0a0c0",
          }}
        >
          Fluid luminous gradients mimicking aurora borealis. Organic,
          flowing color blobs.
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            style={{
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              border: "none",
              borderRadius: 12,
              padding: "8px 16px",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: 13,
              color: "#fff",
            }}
          >
            Glow
          </button>
          <button
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "8px 16px",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: 13,
              color: "#c0c0e0",
            }}
          >
            Mesh
          </button>
        </div>
        <div
          style={{
            marginTop: 16,
            background: "rgba(255,255,255,0.04)",
            borderRadius: 12,
            padding: 12,
            fontSize: 13,
            color: "#a0a0c0",
          }}
        >
          Blurred radial gradients, dark base, vibrant accents.
        </div>
      </div>
    </div>
  );
}
