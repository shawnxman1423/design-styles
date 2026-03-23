export function FrutigerAero() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #d4f0ff 0%, #a8e0ff 30%, #80d0ff 100%)",
        borderRadius: 12,
        padding: 24,
        color: "#1a4060",
      }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 8,
          textShadow: "0 1px 0 rgba(255,255,255,0.5)",
        }}
      >
        Frutiger Aero
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
        Glossy 2006-2013 optimism. Nature imagery, transparency, and
        skeuomorphic gloss.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background:
              "linear-gradient(180deg, #7ec8f0 0%, #4aa8e0 50%, #3898d0 100%)",
            border: "1px solid #2888c0",
            borderRadius: 20,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
            textShadow: "0 -1px 0 rgba(0,0,0,0.2)",
            boxShadow:
              "0 2px 6px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)",
          }}
        >
          Glossy
        </button>
        <button
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 100%)",
            border: "1px solid rgba(255,255,255,0.5)",
            borderRadius: 20,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#2a6090",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          Airy
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "rgba(255,255,255,0.4)",
          borderRadius: 8,
          padding: 12,
          fontSize: 13,
          border: "1px solid rgba(255,255,255,0.5)",
        }}
      >
        Sky blue gradients, glossy buttons, translucent layers.
      </div>
    </div>
  );
}
