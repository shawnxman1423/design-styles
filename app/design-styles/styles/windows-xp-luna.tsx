export function WindowsXPLuna() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #0a246a 0%, #3a6ea5 6%, #6ba2d6 12%, #ece9d8 12%)",
        borderRadius: 8,
        overflow: "hidden",
        border: "2px solid #0054e3",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(180deg, #0058e6 0%, #3a8cf2 40%, #1a6cf0 100%)",
          padding: "6px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "6px 6px 0 0",
        }}
      >
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 13, textShadow: "1px 1px 1px rgba(0,0,0,0.3)" }}>
          Windows XP / Luna
        </span>
        <div style={{ display: "flex", gap: 2 }}>
          <div style={{ width: 18, height: 18, borderRadius: 3, background: "linear-gradient(180deg, #3dc93ddd 0%, #3dc93d 50%, #3dc93daa 100%)", border: "1px solid rgba(0,0,0,0.2)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)" }} />
          <div style={{ width: 18, height: 18, borderRadius: 3, background: "linear-gradient(180deg, #dede00dd 0%, #dede00 50%, #dede00aa 100%)", border: "1px solid rgba(0,0,0,0.2)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)" }} />
          <div style={{ width: 18, height: 18, borderRadius: 3, background: "linear-gradient(180deg, #e04040dd 0%, #e04040 50%, #e04040aa 100%)", border: "1px solid rgba(0,0,0,0.2)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)" }} />
        </div>
      </div>
      <div style={{ background: "#ece9d8", padding: 16, color: "#000" }}>
        <p style={{ fontSize: 13, marginBottom: 12, lineHeight: 1.5 }}>
          The classic Luna theme. Blue title bars, silver/olive taskbar,
          glossy buttons with gradient sheen.
        </p>
        <div style={{ display: "flex", gap: 6 }}>
          <button
            style={{
              background: "linear-gradient(180deg, #fff 0%, #ece9d8 45%, #d6ceb8 100%)",
              border: "1px solid #003c74",
              borderRadius: 3,
              padding: "4px 20px",
              fontSize: 12,
              cursor: "pointer",
              boxShadow: "0 1px 0 rgba(255,255,255,0.5) inset",
            }}
          >
            OK
          </button>
          <button
            style={{
              background: "linear-gradient(180deg, #fff 0%, #ece9d8 45%, #d6ceb8 100%)",
              border: "1px solid #003c74",
              borderRadius: 3,
              padding: "4px 20px",
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
        <div
          style={{
            marginTop: 12,
            background: "#fff",
            border: "1px solid #7f9db9",
            borderRadius: 2,
            padding: 8,
            fontSize: 12,
            color: "#333",
          }}
        >
          Gradient title bars, beveled buttons, #ece9d8 canvas.
        </div>
      </div>
    </div>
  );
}
