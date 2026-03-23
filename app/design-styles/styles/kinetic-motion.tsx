export function KineticMotion() {
  return (
    <div
      style={{
        background: "#f0f0f0",
        borderRadius: 16,
        padding: 24,
        color: "#1a1a1a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #ff0066, #ffcc00, #00ccff, #ff0066)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite",
        }}
      />
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 8,
          marginTop: 4,
        }}
      >
        Kinetic / Motion
      </h2>
      <p
        style={{
          fontSize: 14,
          marginBottom: 16,
          lineHeight: 1.5,
          color: "#666",
        }}
      >
        UI built around purposeful animation, scroll-driven transitions, and
        dynamic typography.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "#1a1a1a",
            border: "none",
            borderRadius: 8,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
        >
          Animate
        </button>
        <button
          style={{
            background: "transparent",
            border: "2px solid #1a1a1a",
            borderRadius: 8,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#1a1a1a",
            transition: "all 0.2s",
          }}
        >
          Transition
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          fontSize: 13,
          color: "#888",
        }}
      >
        Scroll-driven animations, smooth transitions, parallax.
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }`,
        }}
      />
    </div>
  );
}
