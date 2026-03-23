"use client";

import React, { useState, CSSProperties } from "react";

/* ──────────────────────────────────────────────
   Maximalism Landing
   Dense, loud, layered, expressive — every
   pixel fights for attention.
   ────────────────────────────────────────────── */

const palette = {
  hotPink: "#FF2D87",
  electricBlue: "#2D6BFF",
  acidGreen: "#A8FF00",
  deepViolet: "#3A0066",
  sunYellow: "#FFD600",
  black: "#0A0A0A",
  white: "#FEFEFE",
  offWhite: "#F5F0FF",
  magenta: "#D600FF",
  orange: "#FF6B00",
};

const font = {
  heading: "'Impact', 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
  body: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  mono: "'Courier New', Courier, monospace",
};

/* ── Shared micro-styles ─────────────────────── */

const sectionBase: CSSProperties = {
  padding: "80px 24px",
  position: "relative",
  overflow: "hidden",
};

const container: CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  position: "relative",
  zIndex: 2,
};

const sectionHeading: CSSProperties = {
  fontFamily: font.heading,
  fontSize: "clamp(40px, 6vw, 72px)",
  textTransform: "uppercase",
  letterSpacing: "-1px",
  lineHeight: 1,
  marginBottom: 12,
};

const sectionSub: CSSProperties = {
  fontFamily: font.body,
  fontSize: 18,
  lineHeight: 1.5,
  maxWidth: 600,
  margin: "0 auto 48px",
};

const cardBase: CSSProperties = {
  borderRadius: 0,
  padding: 32,
  position: "relative",
  overflow: "hidden",
  border: `3px solid ${palette.black}`,
};

/* ── Decorative floating shapes ────────────── */

function DecoShape({
  color,
  size,
  top,
  left,
  rotate,
  shape = "square",
}: {
  color: string;
  size: number;
  top: string;
  left: string;
  rotate: number;
  shape?: "square" | "circle" | "triangle";
}) {
  const base: CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    top,
    left,
    transform: `rotate(${rotate}deg)`,
    opacity: 0.35,
    zIndex: 1,
    pointerEvents: "none",
  };

  if (shape === "circle") {
    return <div style={{ ...base, borderRadius: "50%", background: color }} />;
  }
  if (shape === "triangle") {
    return (
      <div
        style={{
          ...base,
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
          background: "transparent",
        }}
      />
    );
  }
  return <div style={{ ...base, background: color }} />;
}

/* ── Noise overlay for texture ─────────────── */

function NoiseOverlay() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        opacity: 0.06,
        pointerEvents: "none",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
        backgroundSize: "180px 180px",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════
   1. HEADER
   ═══════════════════════════════════════════════ */

function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const links = ["Features", "Pricing", "Docs", "Blog"];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: palette.black,
        borderBottom: `4px solid ${palette.hotPink}`,
        padding: "0 24px",
      }}
    >
      <div
        style={{
          ...container,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: font.heading,
            fontSize: 22,
            color: palette.white,
            textTransform: "uppercase",
            letterSpacing: 2,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ color: palette.acidGreen, fontSize: 28 }}>▲</span>{" "}
          Stackpulse
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 32 }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onMouseEnter={() => setHovered(l)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontFamily: font.body,
                fontSize: 14,
                fontWeight: 700,
                color: hovered === l ? palette.acidGreen : palette.white,
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                transition: "color .15s",
              }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Sign-up */}
        <button
          style={{
            fontFamily: font.heading,
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: 2,
            padding: "10px 28px",
            background: palette.hotPink,
            color: palette.white,
            border: "none",
            cursor: "pointer",
            transition: "transform .15s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.06)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════════
   2. HERO
   ═══════════════════════════════════════════════ */

function Hero() {
  return (
    <section
      style={{
        ...sectionBase,
        padding: "120px 24px 100px",
        background: `linear-gradient(135deg, ${palette.deepViolet} 0%, ${palette.black} 50%, ${palette.deepViolet} 100%)`,
        textAlign: "center",
        color: palette.white,
      }}
    >
      <NoiseOverlay />
      <DecoShape
        color={palette.hotPink}
        size={320}
        top="-60px"
        left="-80px"
        rotate={25}
        shape="circle"
      />
      <DecoShape
        color={palette.acidGreen}
        size={200}
        top="40%"
        left="85%"
        rotate={-15}
        shape="triangle"
      />
      <DecoShape
        color={palette.electricBlue}
        size={160}
        top="70%"
        left="5%"
        rotate={45}
      />
      <DecoShape
        color={palette.sunYellow}
        size={100}
        top="10%"
        left="78%"
        rotate={12}
      />
      <DecoShape
        color={palette.magenta}
        size={240}
        top="55%"
        left="60%"
        rotate={-30}
        shape="circle"
      />

      <div style={container}>
        <p
          style={{
            fontFamily: font.mono,
            fontSize: 14,
            color: palette.acidGreen,
            textTransform: "uppercase",
            letterSpacing: 4,
            marginBottom: 24,
          }}
        >
          {"// ship faster. break nothing."}
        </p>

        <h1
          style={{
            fontFamily: font.heading,
            fontSize: "clamp(52px, 10vw, 120px)",
            textTransform: "uppercase",
            lineHeight: 0.95,
            marginBottom: 24,
            background: `linear-gradient(90deg, ${palette.hotPink}, ${palette.sunYellow}, ${palette.acidGreen})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 4px 24px rgba(255,45,135,.35))",
          }}
        >
          Build at
          <br />
          Maximum
          <br />
          Velocity
        </h1>

        <p
          style={{
            fontFamily: font.body,
            fontSize: "clamp(16px, 2.5vw, 22px)",
            color: "rgba(255,255,255,.75)",
            maxWidth: 560,
            margin: "0 auto 40px",
            lineHeight: 1.5,
          }}
        >
          The all-in-one developer platform that turbo-charges your workflow —
          from first commit to global deploy.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              fontFamily: font.heading,
              fontSize: 16,
              textTransform: "uppercase",
              letterSpacing: 2,
              padding: "16px 48px",
              background: palette.hotPink,
              color: palette.white,
              border: "none",
              cursor: "pointer",
              boxShadow: `0 0 30px ${palette.hotPink}88`,
              transition: "transform .15s, box-shadow .15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.06)";
              e.currentTarget.style.boxShadow = `0 0 50px ${palette.hotPink}cc`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = `0 0 30px ${palette.hotPink}88`;
            }}
          >
            Get Started Free
          </button>
          <button
            style={{
              fontFamily: font.heading,
              fontSize: 16,
              textTransform: "uppercase",
              letterSpacing: 2,
              padding: "16px 48px",
              background: "transparent",
              color: palette.white,
              border: `3px solid ${palette.acidGreen}`,
              cursor: "pointer",
              transition: "background .15s, color .15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = palette.acidGreen;
              e.currentTarget.style.color = palette.black;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = palette.white;
            }}
          >
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   3. LOGOS BAR
   ═══════════════════════════════════════════════ */

function LogosBar() {
  const brands = ["Vercel", "Stripe", "Linear", "Figma", "Notion"];

  return (
    <section
      style={{
        background: palette.black,
        borderTop: `4px solid ${palette.sunYellow}`,
        borderBottom: `4px solid ${palette.electricBlue}`,
        padding: "36px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: font.mono,
          fontSize: 13,
          color: "rgba(255,255,255,.45)",
          textTransform: "uppercase",
          letterSpacing: 3,
          marginBottom: 20,
        }}
      >
        Trusted by 2,000+ makers at
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 48,
          flexWrap: "wrap",
        }}
      >
        {brands.map((b) => (
          <span
            key={b}
            style={{
              fontFamily: font.heading,
              fontSize: 24,
              color: "rgba(255,255,255,.3)",
              textTransform: "uppercase",
              letterSpacing: 4,
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   4. FEATURES
   ═══════════════════════════════════════════════ */

const features = [
  {
    icon: "⚡",
    title: "Instant Deploys",
    desc: "Push to main and watch your app go live in under 3 seconds. Zero-config, zero-downtime, every single time.",
    accent: palette.acidGreen,
    bg: `linear-gradient(145deg, ${palette.deepViolet}, #1a0033)`,
  },
  {
    icon: "🔒",
    title: "Edge Security",
    desc: "DDoS mitigation, WAF rules, and secret rotation baked into every layer. Sleep well at night.",
    accent: palette.hotPink,
    bg: `linear-gradient(145deg, #1a0011, ${palette.black})`,
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    desc: "Dashboards that update in milliseconds. Track errors, latency, and user flows — all from a single pane.",
    accent: palette.sunYellow,
    bg: `linear-gradient(145deg, #1a1500, ${palette.black})`,
  },
];

function Features() {
  return (
    <section
      id="features"
      style={{
        ...sectionBase,
        background: palette.black,
        color: palette.white,
        textAlign: "center",
      }}
    >
      <NoiseOverlay />
      <DecoShape
        color={palette.magenta}
        size={280}
        top="0"
        left="70%"
        rotate={20}
        shape="circle"
      />
      <DecoShape
        color={palette.electricBlue}
        size={180}
        top="60%"
        left="-5%"
        rotate={-10}
        shape="triangle"
      />

      <div style={container}>
        <p
          style={{
            fontFamily: font.mono,
            fontSize: 13,
            color: palette.acidGreen,
            textTransform: "uppercase",
            letterSpacing: 4,
            marginBottom: 8,
          }}
        >
          {"// what you get"}
        </p>
        <h2 style={{ ...sectionHeading, color: palette.white }}>
          Features that{" "}
          <span style={{ color: palette.hotPink }}>hit different</span>
        </h2>
        <p style={{ ...sectionSub, color: "rgba(255,255,255,.6)" }}>
          Every tool you need — nothing you don&apos;t.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                ...cardBase,
                background: f.bg,
                borderColor: f.accent,
                textAlign: "left",
                transition: "transform .2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div
                style={{
                  fontSize: 48,
                  marginBottom: 16,
                  filter: `drop-shadow(0 0 12px ${f.accent}88)`,
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontFamily: font.heading,
                  fontSize: 26,
                  textTransform: "uppercase",
                  color: f.accent,
                  marginBottom: 12,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: font.body,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,.7)",
                }}
              >
                {f.desc}
              </p>
              {/* Decorative corner stripe */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                  background: `linear-gradient(135deg, transparent 50%, ${f.accent}22 50%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   5. TESTIMONIALS
   ═══════════════════════════════════════════════ */

const testimonials = [
  {
    quote:
      "Stackpulse replaced four tools in our pipeline. Our deploy cadence tripled overnight — it's unreal.",
    name: "Maya Chen",
    role: "CTO, Launchpad",
    accent: palette.hotPink,
  },
  {
    quote:
      "The analytics alone are worth the price. We caught a critical regression in production within 40 seconds.",
    name: "Darius Okonkwo",
    role: "Lead Engineer, Bloom",
    accent: palette.acidGreen,
  },
  {
    quote:
      "I've never onboarded a tool this fast. My team was fully productive in under a day. Truly magical DX.",
    name: "Sasha Petrov",
    role: "Founder, Nebula",
    accent: palette.sunYellow,
  },
];

function Testimonials() {
  return (
    <section
      style={{
        ...sectionBase,
        background: `linear-gradient(180deg, ${palette.deepViolet} 0%, ${palette.black} 100%)`,
        color: palette.white,
        textAlign: "center",
      }}
    >
      <NoiseOverlay />
      <DecoShape
        color={palette.orange}
        size={200}
        top="10%"
        left="80%"
        rotate={40}
      />
      <DecoShape
        color={palette.acidGreen}
        size={140}
        top="70%"
        left="2%"
        rotate={-20}
        shape="circle"
      />

      <div style={container}>
        <p
          style={{
            fontFamily: font.mono,
            fontSize: 13,
            color: palette.sunYellow,
            textTransform: "uppercase",
            letterSpacing: 4,
            marginBottom: 8,
          }}
        >
          {"// wall of love"}
        </p>
        <h2 style={{ ...sectionHeading, color: palette.white }}>
          Don&apos;t take{" "}
          <span style={{ color: palette.sunYellow }}>our word</span>
        </h2>
        <p style={{ ...sectionSub, color: "rgba(255,255,255,.55)" }}>
          Hear from the teams shipping with Stackpulse every day.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                ...cardBase,
                background: "rgba(255,255,255,.04)",
                borderColor: t.accent,
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontFamily: font.body,
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,.8)",
                  marginBottom: 24,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontFamily: font.heading,
                    fontSize: 16,
                    color: t.accent,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: font.mono,
                    fontSize: 12,
                    color: "rgba(255,255,255,.4)",
                  }}
                >
                  {t.role}
                </p>
              </div>
              {/* Accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 4,
                  background: t.accent,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   6. PRICING
   ═══════════════════════════════════════════════ */

const pricingTiers = [
  {
    name: "Starter",
    price: "Free",
    sub: "Forever",
    features: [
      "1 project",
      "10 deploys / day",
      "Community support",
      "Basic analytics",
    ],
    accent: palette.electricBlue,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    sub: "/ month",
    features: [
      "Unlimited projects",
      "Unlimited deploys",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "Team roles",
    ],
    accent: palette.hotPink,
    highlighted: true,
  },
  {
    name: "Team",
    price: "$79",
    sub: "/ month",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Audit logs",
      "99.99% SLA",
      "Dedicated CSM",
      "Volume discounts",
    ],
    accent: palette.sunYellow,
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        ...sectionBase,
        background: palette.black,
        color: palette.white,
        textAlign: "center",
      }}
    >
      <NoiseOverlay />
      <DecoShape
        color={palette.hotPink}
        size={260}
        top="5%"
        left="-8%"
        rotate={15}
        shape="circle"
      />
      <DecoShape
        color={palette.sunYellow}
        size={180}
        top="60%"
        left="88%"
        rotate={-25}
        shape="triangle"
      />

      <div style={container}>
        <p
          style={{
            fontFamily: font.mono,
            fontSize: 13,
            color: palette.magenta,
            textTransform: "uppercase",
            letterSpacing: 4,
            marginBottom: 8,
          }}
        >
          {"// pricing"}
        </p>
        <h2 style={{ ...sectionHeading, color: palette.white }}>
          Simple, <span style={{ color: palette.hotPink }}>loud</span> pricing
        </h2>
        <p style={{ ...sectionSub, color: "rgba(255,255,255,.55)" }}>
          No hidden fees. Cancel anytime. Start free and scale wild.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {pricingTiers.map((t) => (
            <div
              key={t.name}
              style={{
                ...cardBase,
                background: t.highlighted
                  ? `linear-gradient(160deg, ${palette.deepViolet}, #1a0033 60%, ${palette.hotPink}22)`
                  : "rgba(255,255,255,.03)",
                borderColor: t.accent,
                borderWidth: t.highlighted ? 4 : 3,
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                transform: t.highlighted ? "scale(1.04)" : "none",
                boxShadow: t.highlighted
                  ? `0 0 60px ${palette.hotPink}33`
                  : "none",
                transition: "transform .2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = t.highlighted
                  ? "scale(1.07)"
                  : "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = t.highlighted
                  ? "scale(1.04)"
                  : "scale(1)")
              }
            >
              {t.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: -1,
                    left: -1,
                    right: -1,
                    background: palette.hotPink,
                    color: palette.white,
                    fontFamily: font.heading,
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: 3,
                    padding: "6px 0",
                    textAlign: "center",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div style={{ marginTop: t.highlighted ? 24 : 0 }}>
                <p
                  style={{
                    fontFamily: font.heading,
                    fontSize: 20,
                    textTransform: "uppercase",
                    letterSpacing: 3,
                    color: t.accent,
                    marginBottom: 8,
                  }}
                >
                  {t.name}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 4,
                    marginBottom: 24,
                  }}
                >
                  <span
                    style={{
                      fontFamily: font.heading,
                      fontSize: 52,
                      color: palette.white,
                    }}
                  >
                    {t.price}
                  </span>
                  <span
                    style={{
                      fontFamily: font.mono,
                      fontSize: 14,
                      color: "rgba(255,255,255,.4)",
                    }}
                  >
                    {t.sub}
                  </span>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 32px",
                  }}
                >
                  {t.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontFamily: font.body,
                        fontSize: 14,
                        color: "rgba(255,255,255,.7)",
                        padding: "6px 0",
                        borderBottom: "1px solid rgba(255,255,255,.06)",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span style={{ color: t.accent, fontSize: 16 }}>✦</span>{" "}
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: "auto" }}>
                <button
                  style={{
                    width: "100%",
                    fontFamily: font.heading,
                    fontSize: 14,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    padding: "14px 0",
                    background: t.highlighted ? t.accent : "transparent",
                    color: t.highlighted ? palette.white : t.accent,
                    border: t.highlighted ? "none" : `3px solid ${t.accent}`,
                    cursor: "pointer",
                    transition: "background .15s, color .15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = t.accent;
                    e.currentTarget.style.color = palette.white;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = t.highlighted
                      ? t.accent
                      : "transparent";
                    e.currentTarget.style.color = t.highlighted
                      ? palette.white
                      : t.accent;
                  }}
                >
                  {t.highlighted ? "Start Pro Trial" : `Choose ${t.name}`}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   7. CTA
   ═══════════════════════════════════════════════ */

function CtaBanner() {
  return (
    <section
      style={{
        ...sectionBase,
        padding: "100px 24px",
        background: `linear-gradient(135deg, ${palette.hotPink} 0%, ${palette.deepViolet} 50%, ${palette.electricBlue} 100%)`,
        textAlign: "center",
        color: palette.white,
      }}
    >
      <NoiseOverlay />
      <DecoShape
        color={palette.sunYellow}
        size={300}
        top="-10%"
        left="75%"
        rotate={30}
        shape="triangle"
      />
      <DecoShape
        color={palette.acidGreen}
        size={200}
        top="50%"
        left="-5%"
        rotate={-20}
        shape="circle"
      />

      <div style={container}>
        <h2
          style={{
            fontFamily: font.heading,
            fontSize: "clamp(36px, 7vw, 80px)",
            textTransform: "uppercase",
            lineHeight: 1,
            marginBottom: 32,
            textShadow: "0 4px 40px rgba(0,0,0,.4)",
          }}
        >
          Stop waiting.
          <br />
          Start shipping.
        </h2>
        <button
          style={{
            fontFamily: font.heading,
            fontSize: 18,
            textTransform: "uppercase",
            letterSpacing: 3,
            padding: "18px 56px",
            background: palette.black,
            color: palette.white,
            border: `3px solid ${palette.acidGreen}`,
            cursor: "pointer",
            boxShadow: `0 0 40px rgba(0,0,0,.5)`,
            transition: "transform .15s, background .15s, color .15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = palette.acidGreen;
            e.currentTarget.style.color = palette.black;
            e.currentTarget.style.transform = "scale(1.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = palette.black;
            e.currentTarget.style.color = palette.white;
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Get Started Free
        </button>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   8. FOOTER
   ═══════════════════════════════════════════════ */

const footerLinks: Record<string, string[]> = {
  Product: ["Features", "Pricing", "Changelog", "Integrations"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Security", "DPA"],
};

function Footer() {
  return (
    <footer
      style={{
        background: palette.black,
        borderTop: `4px solid ${palette.deepViolet}`,
        padding: "64px 24px 32px",
        color: palette.white,
      }}
    >
      <div
        style={{
          ...container,
          display: "grid",
          gridTemplateColumns: "1.5fr repeat(3, 1fr)",
          gap: 48,
        }}
      >
        {/* Brand col */}
        <div>
          <div
            style={{
              fontFamily: font.heading,
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ color: palette.acidGreen, fontSize: 24 }}>▲</span>{" "}
            Stackpulse
          </div>
          <p
            style={{
              fontFamily: font.body,
              fontSize: 14,
              lineHeight: 1.6,
              color: "rgba(255,255,255,.4)",
              maxWidth: 260,
            }}
          >
            The developer platform built for velocity. Ship fast, stay loud.
          </p>
        </div>

        {/* Link cols */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <p
              style={{
                fontFamily: font.heading,
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: 3,
                color: palette.acidGreen,
                marginBottom: 16,
              }}
            >
              {heading}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {links.map((l) => (
                <li key={l} style={{ marginBottom: 10 }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: font.body,
                      fontSize: 14,
                      color: "rgba(255,255,255,.5)",
                      textDecoration: "none",
                      transition: "color .15s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = palette.white)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,.5)")
                    }
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div
        style={{
          ...container,
          marginTop: 48,
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p
          style={{
            fontFamily: font.mono,
            fontSize: 12,
            color: "rgba(255,255,255,.3)",
          }}
        >
          &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: font.mono,
            fontSize: 12,
            color: "rgba(255,255,255,.2)",
          }}
        >
          Built with maximum effort.
        </p>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════
   PAGE EXPORT
   ═══════════════════════════════════════════════ */

export function MaximalismLanding() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: palette.black,
        fontFamily: font.body,
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      <Header />
      <Hero />
      <LogosBar />
      <Features />
      <Testimonials />
      <Pricing />
      <CtaBanner />
      <Footer />
    </div>
  );
}

export default MaximalismLanding;
