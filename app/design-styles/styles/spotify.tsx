export function Spotify() {
  return (
    <div
      style={{
        background: "#121212",
        borderRadius: 12,
        padding: 24,
        color: "#b3b3b3",
      }}
    >
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
        Spotify
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
        Dark immersive UI with signature green CTAs. Card-based browsing,
        circular avatars, album art vibrancy.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#1db954",
            border: "none",
            borderRadius: 24,
            padding: "10px 24px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 13,
            color: "#000",
            textTransform: "uppercase" as const,
            letterSpacing: 1,
          }}
        >
          Play
        </button>
        <button
          style={{
            background: "transparent",
            border: "1px solid #b3b3b3",
            borderRadius: 24,
            padding: "10px 24px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
            textTransform: "uppercase" as const,
            letterSpacing: 1,
          }}
        >
          Follow
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "#1a1a1a",
          borderRadius: 8,
          padding: 12,
          fontSize: 13,
        }}
      >
        #121212 dark, #1db954 green, pill buttons, bold weight.
      </div>
    </div>
  );
}
