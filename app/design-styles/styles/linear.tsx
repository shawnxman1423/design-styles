export function Linear() {
  return (
    <div
      style={{
        background: "#111118",
        borderRadius: 12,
        padding: 24,
        color: "#b4aebd",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 500,
          color: "#f2f0ff",
          marginBottom: 8,
          letterSpacing: -0.3,
        }}
      >
        Linear
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
        Ultra-refined dark UI. Subtle purplish-gray tones, razor-sharp
        typography, buttery animations. Craft as ethos.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "linear-gradient(180deg, #8b7dfa 0%, #5e54d4 100%)",
            border: "none",
            borderRadius: 8,
            padding: "8px 16px",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
            boxShadow: "0 1px 2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          Get started
        </button>
        <button
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 8,
            padding: "8px 16px",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 13,
            color: "#b4aebd",
          }}
        >
          See features
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "rgba(255,255,255,0.02)",
          borderRadius: 8,
          padding: 12,
          fontSize: 13,
          border: "1px solid rgba(255,255,255,0.04)",
          color: "#7a7488",
        }}
      >
        Precise spacing, muted purple, crafted micro-interactions.
      </div>
    </div>
  );
}
