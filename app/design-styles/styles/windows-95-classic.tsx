export function Windows95Classic() {
  return (
    <div
      style={{
        background: "#c0c0c0",
        border: "2px outset #dfdfdf",
        padding: 0,
        color: "#000",
      }}
    >
      <div
        style={{
          background: "linear-gradient(90deg, #000080, #1084d0)",
          padding: "4px 6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 12 }}>
          Windows 95 / Classic
        </span>
        <div style={{ display: "flex", gap: 2 }}>
          <button
            style={{
              width: 16,
              height: 14,
              background: "#c0c0c0",
              border: "2px outset #dfdfdf",
              fontSize: 9,
              lineHeight: "8px",
              cursor: "pointer",
              padding: 0,
              fontWeight: 700,
            }}
          >
            _
          </button>
          <button
            style={{
              width: 16,
              height: 14,
              background: "#c0c0c0",
              border: "2px outset #dfdfdf",
              fontSize: 9,
              lineHeight: "8px",
              cursor: "pointer",
              padding: 0,
              fontWeight: 700,
            }}
          >
            X
          </button>
        </div>
      </div>
      <div style={{ padding: 16 }}>
        <p style={{ fontSize: 12, marginBottom: 12, lineHeight: 1.5, fontFamily: "sans-serif" }}>
          The 3D beveled look. Outset/inset borders create tactile depth on
          a silver-gray canvas.
        </p>
        <div style={{ display: "flex", gap: 4 }}>
          <button
            style={{
              background: "#c0c0c0",
              border: "2px outset #dfdfdf",
              padding: "3px 16px",
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            OK
          </button>
          <button
            style={{
              background: "#c0c0c0",
              border: "2px outset #dfdfdf",
              padding: "3px 16px",
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
            border: "2px inset #808080",
            padding: 8,
            fontSize: 11,
          }}
        >
          Outset borders, #c0c0c0 background, system font, 3D widgets.
        </div>
      </div>
    </div>
  );
}
