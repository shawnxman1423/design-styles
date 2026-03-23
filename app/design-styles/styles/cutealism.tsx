export function Cutealism() {
  return (
    <div
      style={{
        background: "#fff0f8",
        borderRadius: 20,
        padding: 24,
        color: "#2a2a2a",
        border: "2px solid #2a2a2a",
        fontFamily: "monospace",
      }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 900,
          marginBottom: 8,
          color: "#ff1493",
        }}
      >
        cute-alism ♡
      </h2>
      <p style={{ fontSize: 13, marginBottom: 16, lineHeight: 1.5 }}>
        Brutalist structure meets kawaii details. Raw grids + pink hearts +
        sticker vibes.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#ff1493",
            border: "2px solid #000",
            borderRadius: 20,
            padding: "6px 16px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 12,
            color: "#fff",
            fontFamily: "monospace",
          }}
        >
          uwu
        </button>
        <button
          style={{
            background: "#fff",
            border: "2px solid #000",
            borderRadius: 0,
            padding: "6px 16px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 12,
            color: "#ff1493",
            fontFamily: "monospace",
          }}
        >
          mono
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#fff",
          border: "2px solid #2a2a2a",
          padding: 12,
          fontSize: 12,
          textAlign: "center" as const,
        }}
      >
        ✿ brutal grid + kawaii energy ✿
      </div>
    </div>
  );
}
