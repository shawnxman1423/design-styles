export function GhibliStorybook() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #e8f4e8 0%, #f5edd6 60%, #fce4c0 100%)",
        borderRadius: 20,
        padding: 24,
        color: "#4a6741",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 16,
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, #fff8e0, #ffe8a0)",
          opacity: 0.6,
        }}
      />
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, position: "relative" }}>
        Ghibli / Storybook
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.6, position: "relative" }}>
        Watercolor warmth, nature greens, hand-painted feel. Nostalgic,
        dreamy, and gentle. Soft gradients that breathe.
      </p>
      <div style={{ display: "flex", gap: 8, position: "relative" }}>
        <button
          style={{
            background: "#6b9a5e",
            border: "none",
            borderRadius: 20,
            padding: "8px 20px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#fff",
            boxShadow: "0 2px 8px rgba(107,154,94,0.3)",
          }}
        >
          Explore
        </button>
        <button
          style={{
            background: "rgba(255,255,255,0.5)",
            border: "1px solid rgba(107,154,94,0.3)",
            borderRadius: 20,
            padding: "8px 20px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
            color: "#5a8a4a",
          }}
        >
          Wander
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          background: "rgba(255,255,255,0.4)",
          borderRadius: 12,
          padding: 12,
          fontSize: 13,
          color: "#6a8a5a",
          position: "relative",
        }}
      >
        Nature greens, warm parchment, watercolor gradient, dreamy.
      </div>
    </div>
  );
}
