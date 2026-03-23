export function MonochromeTypographic() {
  return (
    <div
      style={{
        background: "#000",
        borderRadius: 0,
        padding: 24,
        color: "#fff",
      }}
    >
      <h2
        style={{
          fontSize: 38,
          fontWeight: 100,
          marginBottom: 4,
          letterSpacing: -1,
          lineHeight: 1,
        }}
      >
        Mono
      </h2>
      <h3
        style={{
          fontSize: 38,
          fontWeight: 900,
          marginBottom: 12,
          letterSpacing: -1,
          lineHeight: 1,
        }}
      >
        Chrome
      </h3>
      <p
        style={{
          fontSize: 14,
          marginBottom: 16,
          lineHeight: 1.5,
          color: "#888",
          maxWidth: 260,
        }}
      >
        Single-color design where typography is the primary visual element.
        Type as art.
      </p>
      <div
        style={{
          borderTop: "1px solid #333",
          paddingTop: 12,
          fontSize: 11,
          letterSpacing: 4,
          textTransform: "uppercase" as const,
          color: "#666",
        }}
      >
        Weight · Scale · Spacing · Rhythm
      </div>
    </div>
  );
}
