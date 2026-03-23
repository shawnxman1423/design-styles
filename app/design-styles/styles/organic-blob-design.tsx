export function OrganicBlobDesign() {
  return (
    <div
      style={{
        background: "#faf5ef",
        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        padding: 32,
        color: "#5a4030",
        position: "relative",
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
        Organic / Blob
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
        Soft flowing irregular curves. Natural and human, avoiding rigid
        geometry.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#c4a882",
            border: "none",
            borderRadius: "40% 60% 55% 45% / 50% 40% 60% 50%",
            padding: "8px 20px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
          }}
        >
          Flow
        </button>
        <button
          style={{
            background: "#e8ddd0",
            border: "none",
            borderRadius: "55% 45% 40% 60% / 45% 55% 45% 55%",
            padding: "8px 20px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#7a6a58",
          }}
        >
          Natural
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          fontSize: 13,
          color: "#8a7a68",
        }}
      >
        Irregular border-radius, earth tones, organic shapes.
      </div>
    </div>
  );
}
