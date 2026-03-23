"use client";

import React, { useState, type CSSProperties } from "react";

// ─── Cutealism palette ───────────────────────────────────────────────
const P = {
  pink:       "#FFB6D9",
  pinkLight:  "#FFD6EC",
  pinkPale:   "#FFF0F6",
  lavender:   "#D4B8FF",
  lavLight:   "#EDE0FF",
  lavPale:    "#F8F2FF",
  mint:       "#A8F0D4",
  mintLight:  "#D0FAE8",
  mintPale:   "#EEFFF7",
  peach:      "#FFD1A9",
  peachLight: "#FFE4CC",
  yellow:     "#FFF0B3",
  yellowLight:"#FFF8D6",
  white:      "#FFFFFF",
  bg:         "#FFF7FB",
  text:       "#4A3560",
  textLight:  "#7B6B8E",
  textMuted:  "#A99BBD",
  border:     "#F0DBF0",
  shadow:     "rgba(180, 130, 200, 0.15)",
};

const FONT =
  "'Nunito', 'Quicksand', 'Comfortaa', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

// ─── tiny helpers ────────────────────────────────────────────────────
const pill: CSSProperties = {
  borderRadius: 9999,
};

const cardBase: CSSProperties = {
  borderRadius: 24,
  border: `2px solid ${P.border}`,
  background: P.white,
  boxShadow: `0 8px 24px ${P.shadow}`,
  padding: "32px 28px",
};

const sectionPad: CSSProperties = {
  padding: "80px 24px",
  maxWidth: 1120,
  margin: "0 auto",
};

const heading2: CSSProperties = {
  fontSize: 36,
  fontWeight: 800,
  color: P.text,
  textAlign: "center" as const,
  marginBottom: 12,
};

const sub: CSSProperties = {
  fontSize: 17,
  color: P.textLight,
  textAlign: "center" as const,
  marginBottom: 48,
  maxWidth: 540,
  marginLeft: "auto",
  marginRight: "auto",
  lineHeight: 1.6,
};

// ─── Component ───────────────────────────────────────────────────────
export function CutealismLanding() {
  return (
    <div style={{ fontFamily: FONT, background: P.bg, color: P.text, minHeight: "100vh", overflowX: "hidden" as const }}>
      <Header />
      <Hero />
      <LogosBar />
      <Features />
      <Testimonials />
      <Pricing />
      <CtaSection />
      <Footer />
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────────────────
function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const navLinks = ["Features", "Pricing", "Docs", "Blog"];

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 1120,
        margin: "0 auto",
        padding: "18px 24px",
      }}
    >
      <div style={{ fontWeight: 800, fontSize: 20, color: P.text, letterSpacing: -0.5 }}>
        <span style={{ color: P.lavender, marginRight: 6 }}>▲</span>Stackpulse
      </div>

      <nav style={{ display: "flex", gap: 32 }}>
        {navLinks.map((l) => (
          <a
            key={l}
            href="#"
            onMouseEnter={() => setHovered(l)}
            onMouseLeave={() => setHovered(null)}
            style={{
              textDecoration: "none",
              color: hovered === l ? P.lavender : P.textLight,
              fontWeight: 600,
              fontSize: 15,
              transition: "color 0.2s",
            }}
          >
            {l}
          </a>
        ))}
      </nav>

      <CuteButton size="sm" variant="primary">
        Sign up free ✨
      </CuteButton>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "72px 24px 56px",
        maxWidth: 780,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* decorative blobs */}
      <div
        style={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: P.pinkLight,
          opacity: 0.45,
          top: -40,
          left: -80,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: P.lavLight,
          opacity: 0.4,
          bottom: -30,
          right: -60,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <span
        style={{
          display: "inline-block",
          ...pill,
          background: P.pinkPale,
          border: `1.5px solid ${P.pink}`,
          padding: "6px 18px",
          fontSize: 13,
          fontWeight: 700,
          color: P.text,
          marginBottom: 28,
        }}
      >
        Now in public beta 🎀
      </span>

      <h1
        style={{
          fontSize: 56,
          fontWeight: 900,
          lineHeight: 1.15,
          color: P.text,
          marginBottom: 20,
          letterSpacing: -1,
        }}
      >
        Ship delightful products,{" "}
        <span
          style={{
            background: `linear-gradient(135deg, ${P.pink}, ${P.lavender})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          effortlessly
        </span>
      </h1>

      <p
        style={{
          fontSize: 19,
          color: P.textLight,
          lineHeight: 1.7,
          maxWidth: 560,
          margin: "0 auto 36px",
        }}
      >
        Stackpulse gives your team the sweetest workflow tools — from idea to
        deploy — so you can focus on building things people love.
      </p>

      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <CuteButton size="lg" variant="primary">
          Get started free 💖
        </CuteButton>
        <CuteButton size="lg" variant="secondary">
          See a demo 🌸
        </CuteButton>
      </div>
    </section>
  );
}

// ─── Logos Bar ────────────────────────────────────────────────────────
function LogosBar() {
  const brands = ["Petal", "Moonbeam", "Frosting", "Clover", "Starbloom"];
  return (
    <section
      style={{
        textAlign: "center",
        padding: "40px 24px 56px",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <p style={{ fontSize: 13, fontWeight: 700, color: P.textMuted, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 24 }}>
        Trusted by 2,000+ makers at
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", alignItems: "center" }}>
        {brands.map((b) => (
          <span
            key={b}
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: P.textMuted,
              opacity: 0.55,
              letterSpacing: -0.3,
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

// ─── Features ────────────────────────────────────────────────────────
const features = [
  {
    icon: "🧁",
    title: "Instant Deploys",
    desc: "Push to main and your site is live in seconds. Zero config, maximum joy.",
    accent: P.pinkPale,
    accentBorder: P.pink,
  },
  {
    icon: "🌈",
    title: "Collaborative Editing",
    desc: "Work together in real-time with cursors, comments, and cozy vibes.",
    accent: P.lavPale,
    accentBorder: P.lavender,
  },
  {
    icon: "🍡",
    title: "Smart Analytics",
    desc: "Understand your users with dashboards so pretty you'll actually check them.",
    accent: P.mintPale,
    accentBorder: P.mint,
  },
];

function Features() {
  return (
    <section style={{ ...sectionPad, paddingTop: 48 }}>
      <h2 style={heading2}>Everything you need, nothing you don't</h2>
      <p style={sub}>
        A carefully curated set of tools designed to make building a joy.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {features.map((f) => (
          <div key={f.title} style={{ ...cardBase, display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 18,
                background: f.accent,
                border: `2px solid ${f.accentBorder}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
              }}
            >
              {f.icon}
            </div>
            <h3 style={{ fontSize: 19, fontWeight: 800, color: P.text, margin: 0 }}>{f.title}</h3>
            <p style={{ fontSize: 15, color: P.textLight, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────
const testimonials = [
  {
    quote: "Stackpulse made our workflow feel like a warm hug. We shipped 3x faster in our first month!",
    name: "Lily Chen",
    role: "CTO at Petal",
    accent: P.pinkPale,
  },
  {
    quote: "I've never been so excited to check analytics. The dashboards are genuinely adorable.",
    name: "Marcus Rivera",
    role: "Product Lead at Moonbeam",
    accent: P.lavPale,
  },
  {
    quote: "Our whole team switched from three different tools. Stackpulse is the only one we need now.",
    name: "Aiko Tanaka",
    role: "Founder at Starbloom",
    accent: P.mintPale,
  },
];

function Testimonials() {
  return (
    <section style={{ ...sectionPad, background: P.pinkPale }}>
      <h2 style={heading2}>Loved by teams everywhere 💕</h2>
      <p style={sub}>Don't just take our word for it.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            style={{
              ...cardBase,
              background: P.white,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: P.text,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              "{t.quote}"
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 14,
                  background: t.accent,
                  border: `2px solid ${P.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 800,
                  color: P.text,
                }}
              >
                {t.name[0]}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: P.text }}>{t.name}</div>
                <div style={{ fontSize: 13, color: P.textMuted }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────
const tiers = [
  {
    name: "Starter",
    price: "Free",
    sub: "forever",
    features: ["1 project", "Basic analytics", "Community support", "500 MB storage"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    sub: "/month",
    features: ["Unlimited projects", "Advanced analytics", "Priority support", "50 GB storage", "Custom domains"],
    cta: "Start free trial ✨",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$79",
    sub: "/month",
    features: ["Everything in Pro", "Team collaboration", "SSO & audit logs", "200 GB storage", "Dedicated account manager"],
    cta: "Contact sales",
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section style={sectionPad}>
      <h2 style={heading2}>Simple, friendly pricing</h2>
      <p style={sub}>Start free. Upgrade when you're ready. No surprises.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          alignItems: "start",
        }}
      >
        {tiers.map((t) => (
          <div
            key={t.name}
            style={{
              ...cardBase,
              border: t.highlighted ? `2.5px solid ${P.lavender}` : `2px solid ${P.border}`,
              background: t.highlighted ? P.lavPale : P.white,
              position: "relative" as const,
              overflow: "hidden" as const,
            }}
          >
            {t.highlighted && (
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  right: -30,
                  background: `linear-gradient(135deg, ${P.pink}, ${P.lavender})`,
                  color: P.white,
                  fontSize: 11,
                  fontWeight: 800,
                  padding: "4px 36px",
                  transform: "rotate(40deg)",
                  letterSpacing: 0.5,
                }}
              >
                POPULAR
              </div>
            )}

            <div style={{ fontSize: 13, fontWeight: 700, color: P.textMuted, textTransform: "uppercase" as const, letterSpacing: 1, marginBottom: 8 }}>
              {t.name}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 24 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: P.text, letterSpacing: -1 }}>{t.price}</span>
              <span style={{ fontSize: 15, color: P.textMuted, fontWeight: 600 }}>{t.sub}</span>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12 }}>
              {t.features.map((f) => (
                <li key={f} style={{ fontSize: 14, color: P.textLight, display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 8,
                      background: t.highlighted ? P.lavender : P.mintLight,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <CuteButton
              size="md"
              variant={t.highlighted ? "primary" : "secondary"}
              full
            >
              {t.cta}
            </CuteButton>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────
function CtaSection() {
  return (
    <section
      style={{
        margin: "0 auto 80px",
        maxWidth: 1120,
        padding: "0 24px",
      }}
    >
      <div
        style={{
          background: `linear-gradient(135deg, ${P.pinkLight}, ${P.lavLight}, ${P.mintLight})`,
          borderRadius: 32,
          border: `2px solid ${P.border}`,
          padding: "64px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: P.white,
            opacity: 0.25,
            top: -40,
            right: -20,
            pointerEvents: "none",
          }}
        />
        <h2
          style={{
            fontSize: 38,
            fontWeight: 900,
            color: P.text,
            marginBottom: 16,
            letterSpacing: -0.5,
          }}
        >
          Ready to build something sweet?
        </h2>
        <p
          style={{
            fontSize: 17,
            color: P.textLight,
            marginBottom: 32,
            maxWidth: 480,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          Join thousands of teams who ship faster and smile more with Stackpulse.
        </p>
        <CuteButton size="lg" variant="primary">
          Start for free 🎀
        </CuteButton>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────
const footerCols: { title: string; links: string[] }[] = [
  { title: "Product", links: ["Features", "Pricing", "Changelog", "Integrations"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
];

function Footer() {
  return (
    <footer
      style={{
        borderTop: `2px solid ${P.border}`,
        background: P.white,
        padding: "56px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 48,
        }}
      >
        {/* logo + tagline */}
        <div style={{ maxWidth: 240 }}>
          <div style={{ fontWeight: 800, fontSize: 20, color: P.text, marginBottom: 10 }}>
            <span style={{ color: P.lavender, marginRight: 6 }}>▲</span>Stackpulse
          </div>
          <p style={{ fontSize: 14, color: P.textMuted, lineHeight: 1.6, margin: 0 }}>
            The sweetest way to build, ship, and grow your product.
          </p>
        </div>

        {/* link columns */}
        <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
          {footerCols.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: P.text,
                  textTransform: "uppercase",
                  letterSpacing: 1.2,
                  marginBottom: 16,
                }}
              >
                {col.title}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        fontSize: 14,
                        color: P.textLight,
                        fontWeight: 500,
                      }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* copyright */}
      <div
        style={{
          maxWidth: 1120,
          margin: "40px auto 0",
          borderTop: `1.5px solid ${P.border}`,
          paddingTop: 20,
          textAlign: "center",
          fontSize: 13,
          color: P.textMuted,
        }}
      >
        © 2026 Stackpulse. Made with 💖
      </div>
    </footer>
  );
}

// ─── Shared Button ───────────────────────────────────────────────────
function CuteButton({
  children,
  variant = "primary",
  size = "md",
  full = false,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  full?: boolean;
}) {
  const [hover, setHover] = useState(false);

  const padMap = { sm: "8px 20px", md: "12px 28px", lg: "16px 36px" };
  const fontMap = { sm: 13, md: 15, lg: 16 };

  const isPrimary = variant === "primary";

  const base: CSSProperties = {
    ...pill,
    padding: padMap[size],
    fontSize: fontMap[size],
    fontWeight: 700,
    fontFamily: FONT,
    border: isPrimary ? "none" : `2px solid ${P.border}`,
    background: isPrimary
      ? hover
        ? `linear-gradient(135deg, ${P.lavender}, ${P.pink})`
        : `linear-gradient(135deg, ${P.pink}, ${P.lavender})`
      : hover
        ? P.pinkPale
        : P.white,
    color: isPrimary ? P.white : P.text,
    cursor: "pointer",
    transition: "all 0.25s ease",
    boxShadow: isPrimary
      ? `0 4px 16px ${P.shadow}`
      : "none",
    width: full ? "100%" : undefined,
    transform: hover ? "translateY(-1px)" : "translateY(0)",
  };

  return (
    <button
      style={base}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
}
