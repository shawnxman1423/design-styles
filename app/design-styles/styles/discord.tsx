export function Discord() {
  return (
    <div
      style={{
        background: "#313338",
        borderRadius: 12,
        padding: 24,
        color: "#dbdee1",
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
        Discord
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5, color: "#b5bac1" }}>
        Blurple meets dark gray. Casual, gaming-rooted, with rounded
        elements and a playful tone throughout.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#5865f2",
            border: "none",
            borderRadius: 3,
            padding: "8px 18px",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
          }}
        >
          Open Discord
        </button>
        <button
          style={{
            background: "#4e5058",
            border: "none",
            borderRadius: 3,
            padding: "8px 18px",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
          }}
        >
          Download
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#2b2d31",
          borderRadius: 8,
          padding: 12,
          fontSize: 13,
          color: "#949ba4",
        }}
      >
        Blurple #5865f2, dark gray #313338, small radius, gg font.
      </div>
    </div>
  );
}
