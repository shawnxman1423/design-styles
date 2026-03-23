"use client";

import React, { useState, CSSProperties } from "react";

/* ─── palette & helpers ───────────────────────────────────────────── */

const C = {
  pink: "#FF6B9D",
  yellow: "#FFD93D",
  cyan: "#6EC6FF",
  mint: "#4ECDC4",
  coral: "#FF6F61",
  purple: "#A855F7",
  navy: "#1A1A2E",
  black: "#111111",
  white: "#FFFFFF",
  offWhite: "#FFF8F0",
  lightGray: "#F5F0EB",
};

const font =
  "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";

function merge(...objs: CSSProperties[]): CSSProperties {
  return Object.assign({}, ...objs);
}

/* ─── decorative SVG shapes ───────────────────────────────────────── */

function Squiggle({ color = C.pink, width = 120, style = {} as CSSProperties }) {
  return (
    <svg
      width={width}
      height={width * 0.25}
      viewBox="0 0 120 30"
      fill="none"
      style={{ display: "block", ...style }}
    >
      <path
        d="M0 15 Q10 0 20 15 Q30 30 40 15 Q50 0 60 15 Q70 30 80 15 Q90 0 100 15 Q110 30 120 15"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Dots({ color = C.cyan, style = {} as CSSProperties }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" style={{ display: "block", ...style }}>
      {[0, 20, 40].map((x) =>
        [0, 20, 40].map((y) => (
          <circle key={`${x}-${y}`} cx={x + 10} cy={y + 10} r="4" fill={color} />
        ))
      )}
    </svg>
  );
}

function Triangle({ color = C.yellow, size = 50, style = {} as CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" style={{ display: "block", ...style }}>
      <polygon points="25,5 45,45 5,45" fill={color} />
    </svg>
  );
}

function Circle({ color = C.pink, size = 40, style = {} as CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: "block", ...style }}>
      <circle cx="20" cy="20" r="18" fill="none" stroke={color} strokeWidth="4" />
    </svg>
  );
}

function Cross({ color = C.coral, size = 36, style = {} as CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" style={{ display: "block", ...style }}>
      <rect x="14" y="2" width="8" height="32" rx="2" fill={color} />
      <rect x="2" y="14" width="32" height="8" rx="2" fill={color} />
    </svg>
  );
}

function Zigzag({ color = C.yellow, width = 100, style = {} as CSSProperties }) {
  return (
    <svg width={width} height={width * 0.2} viewBox="0 0 100 20" fill="none" style={{ display: "block", ...style }}>
      <polyline
        points="0,20 12.5,0 25,20 37.5,0 50,20 62.5,0 75,20 87.5,0 100,20"
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* ─── base styles ─────────────────────────────────────────────────── */

const baseBtn: CSSProperties = {
  fontFamily: font,
  fontWeight: 800,
  fontSize: 16,
  border: "3px solid " + C.black,
  borderRadius: 0,
  cursor: "pointer",
  padding: "14px 32px",
  textTransform: "uppercase",
  letterSpacing: 1.5,
  transition: "transform 0.15s, box-shadow 0.15s",
  boxShadow: `4px 4px 0 ${C.black}`,
  position: "relative",
};

const primaryBtn: CSSProperties = merge(baseBtn, {
  background: C.pink,
  color: C.black,
});

const secondaryBtn: CSSProperties = merge(baseBtn, {
  background: C.yellow,
  color: C.black,
});

const outlineBtn: CSSProperties = merge(baseBtn, {
  background: "transparent",
  color: C.black,
});

const sectionPad: CSSProperties = {
  padding: "100px 24px",
  position: "relative",
  overflow: "hidden",
};

const maxW: CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  position: "relative",
  zIndex: 2,
};

const heading: CSSProperties = {
  fontFamily: font,
  fontWeight: 900,
  fontSize: 42,
  color: C.black,
  margin: 0,
  textTransform: "uppercase",
  letterSpacing: -0.5,
};

const subheading: CSSProperties = {
  fontFamily: font,
  fontWeight: 400,
  fontSize: 18,
  lineHeight: 1.7,
  color: "#444",
  margin: 0,
};

/* memphis card style */
const memphisCard: CSSProperties = {
  background: C.white,
  border: "3px solid " + C.black,
  boxShadow: `6px 6px 0 ${C.black}`,
  padding: 32,
  position: "relative",
};

/* ─── COMPONENT ───────────────────────────────────────────────────── */

export function MemphisDesignLanding() {
  return (
    <div style={{ fontFamily: font, background: C.offWhite, color: C.black, overflowX: "hidden" }}>
      <Header />
      <Hero />
      <LogosBar />
      <Features />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ── 1. Header ────────────────────────────────────────────────────── */

function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = ["Features", "Pricing", "Testimonials", "Blog"];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: C.offWhite,
        borderBottom: "3px solid " + C.black,
      }}
    >
      <div
        style={merge(maxW, {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          flexWrap: "wrap" as const,
          gap: 16,
        })}
      >
        {/* logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: C.pink,
              lineHeight: 1,
            }}
          >
            ▲
          </span>
          <span style={{ fontWeight: 900, fontSize: 20, letterSpacing: -0.5 }}>Stackpulse</span>
        </div>

        {/* nav */}
        <nav style={{ display: "flex", gap: 32 }}>
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onMouseEnter={() => setHoveredLink(l)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                color: C.black,
                borderBottom: hoveredLink === l ? `3px solid ${C.pink}` : "3px solid transparent",
                paddingBottom: 2,
                transition: "border-color 0.15s",
              }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* sign-up */}
        <button
          style={merge(primaryBtn, {
            padding: "10px 24px",
            fontSize: 13,
            boxShadow: `3px 3px 0 ${C.black}`,
          })}
          onMouseEnter={(e) => {
            (e.currentTarget.style.transform = "translate(-2px,-2px)");
            e.currentTarget.style.boxShadow = `5px 5px 0 ${C.black}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0,0)";
            e.currentTarget.style.boxShadow = `3px 3px 0 ${C.black}`;
          }}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}

/* ── 2. Hero ──────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      style={merge(sectionPad, {
        background: C.offWhite,
        paddingTop: 80,
        paddingBottom: 80,
        minHeight: 520,
        display: "flex",
        alignItems: "center",
      })}
    >
      {/* floating decorations */}
      <Triangle color={C.yellow} size={80} style={{ position: "absolute", top: 60, left: "8%", opacity: 0.8 }} />
      <Circle color={C.pink} size={60} style={{ position: "absolute", top: 120, right: "10%" }} />
      <Dots color={C.cyan} style={{ position: "absolute", bottom: 60, left: "5%" }} />
      <Squiggle color={C.coral} width={140} style={{ position: "absolute", bottom: 80, right: "7%" }} />
      <Cross color={C.purple} size={44} style={{ position: "absolute", top: "35%", right: "22%" }} />
      <Zigzag color={C.mint} width={110} style={{ position: "absolute", top: 40, left: "40%" }} />

      <div style={merge(maxW, { textAlign: "center" as const })}>
        <h1
          style={{
            fontFamily: font,
            fontWeight: 900,
            fontSize: "clamp(48px, 7vw, 88px)",
            lineHeight: 1.05,
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: -2,
          }}
        >
          Build faster.
          <br />
          <span
            style={{
              color: C.white,
              background: C.pink,
              padding: "0 16px",
              border: "3px solid " + C.black,
              boxShadow: `4px 4px 0 ${C.black}`,
              display: "inline-block",
              marginTop: 8,
            }}
          >
            Ship bolder.
          </span>
        </h1>

        <p
          style={merge(subheading, {
            maxWidth: 560,
            margin: "28px auto 0",
            fontSize: 20,
          })}
        >
          The all-in-one toolkit that helps makers prototype, iterate, and launch
          products people love — with radical speed and style.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 40, flexWrap: "wrap" as const }}>
          <HoverButton style={primaryBtn}>Get Started Free</HoverButton>
          <HoverButton style={outlineBtn}>See How It Works</HoverButton>
        </div>
      </div>
    </section>
  );
}

/* ── 3. Logos Bar ─────────────────────────────────────────────────── */

function LogosBar() {
  const brands = ["Vercel", "Linear", "Raycast", "Resend", "Dub"];

  return (
    <section
      style={{
        borderTop: "3px solid " + C.black,
        borderBottom: "3px solid " + C.black,
        background: C.yellow,
        padding: "32px 24px",
      }}
    >
      <div style={merge(maxW, { textAlign: "center" as const })}>
        <p
          style={{
            fontWeight: 700,
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: 2,
            margin: "0 0 20px",
          }}
        >
          Trusted by 2,000+ makers at
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 48,
            flexWrap: "wrap" as const,
            alignItems: "center",
          }}
        >
          {brands.map((b) => (
            <span
              key={b}
              style={{
                fontWeight: 900,
                fontSize: 22,
                textTransform: "uppercase",
                letterSpacing: 2,
                opacity: 0.7,
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 4. Features ──────────────────────────────────────────────────── */

const features = [
  {
    icon: "⚡",
    color: C.pink,
    title: "Lightning Prototyping",
    desc: "Go from idea to clickable prototype in minutes, not days. Our drag-and-drop builder lets you move at the speed of thought.",
  },
  {
    icon: "🔗",
    color: C.cyan,
    title: "Seamless Integrations",
    desc: "Connect to your favorite tools out of the box — GitHub, Figma, Slack, Notion, and 200+ more via our open API.",
  },
  {
    icon: "📊",
    color: C.yellow,
    title: "Real-Time Analytics",
    desc: "Understand what users actually do. Heatmaps, funnels, and session replays — no extra SDK required.",
  },
];

function Features() {
  return (
    <section id="features" style={merge(sectionPad, { background: C.offWhite })}>
      <Triangle color={C.mint} size={60} style={{ position: "absolute", top: 40, right: "12%" }} />
      <Squiggle color={C.pink} width={100} style={{ position: "absolute", bottom: 50, left: "6%" }} />

      <div style={maxW}>
        <div style={{ textAlign: "center" as const, marginBottom: 60 }}>
          <Zigzag color={C.coral} width={80} style={{ margin: "0 auto 16px" }} />
          <h2 style={heading}>Everything you need to ship</h2>
          <p style={merge(subheading, { marginTop: 12, maxWidth: 500, marginLeft: "auto", marginRight: "auto" })}>
            Powerful features wrapped in a playful, intuitive interface.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={merge(memphisCard, {
                borderColor: C.black,
              })}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: f.color,
                  border: "3px solid " + C.black,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  marginBottom: 20,
                  boxShadow: `3px 3px 0 ${C.black}`,
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontWeight: 900,
                  fontSize: 20,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  margin: "0 0 12px",
                }}
              >
                {f.title}
              </h3>
              <p style={merge(subheading, { fontSize: 15 })}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 5. Testimonials ──────────────────────────────────────────────── */

const testimonials = [
  {
    quote: "Stackpulse cut our prototyping cycle from two weeks to two days. The team is obsessed with it.",
    name: "Mina Choi",
    role: "Head of Product, Cloverleaf",
    accent: C.pink,
  },
  {
    quote: "I've tried every tool out there. This is the first one that actually feels fun to use while being dead-serious about shipping.",
    name: "Jordan Ellis",
    role: "Indie Maker & Creator",
    accent: C.cyan,
  },
  {
    quote: "The analytics alone paid for the subscription in the first month. Absolute game-changer for our growth team.",
    name: "Priya Ramanathan",
    role: "Growth Lead, Fintonic",
    accent: C.yellow,
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      style={merge(sectionPad, {
        background: C.navy,
        color: C.white,
      })}
    >
      <Dots color={C.pink} style={{ position: "absolute", top: 40, left: "8%", opacity: 0.5 }} />
      <Cross color={C.yellow} size={40} style={{ position: "absolute", bottom: 50, right: "10%", opacity: 0.5 }} />

      <div style={maxW}>
        <div style={{ textAlign: "center" as const, marginBottom: 60 }}>
          <Squiggle color={C.yellow} width={80} style={{ margin: "0 auto 16px" }} />
          <h2 style={merge(heading, { color: C.white })}>Loved by makers</h2>
          <p style={merge(subheading, { color: "rgba(255,255,255,0.6)", marginTop: 12 })}>
            Don't take our word for it — hear from the people who build with Stackpulse every day.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "3px solid " + t.accent,
                padding: 32,
                position: "relative",
                boxShadow: `5px 5px 0 ${t.accent}`,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: t.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 20,
                  color: C.black,
                  marginBottom: 16,
                  border: "2px solid " + C.black,
                }}
              >
                "
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", margin: "0 0 24px" }}>
                {t.quote}
              </p>
              <div>
                <p style={{ fontWeight: 800, fontSize: 15, margin: 0, color: C.white }}>{t.name}</p>
                <p style={{ fontSize: 13, margin: "4px 0 0", color: "rgba(255,255,255,0.5)" }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 6. Pricing ───────────────────────────────────────────────────── */

const plans = [
  {
    name: "Starter",
    price: "Free",
    sub: "forever",
    features: ["1 project", "Basic analytics", "Community support", "1 GB storage"],
    accent: C.cyan,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    sub: "/mo",
    features: ["Unlimited projects", "Advanced analytics", "Priority support", "50 GB storage", "Custom domains"],
    accent: C.pink,
    highlighted: true,
  },
  {
    name: "Team",
    price: "$79",
    sub: "/mo",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "SSO & audit logs",
      "200 GB storage",
      "Dedicated account manager",
    ],
    accent: C.yellow,
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" style={merge(sectionPad, { background: C.lightGray })}>
      <Circle color={C.coral} size={50} style={{ position: "absolute", top: 50, left: "6%" }} />
      <Zigzag color={C.purple} width={100} style={{ position: "absolute", bottom: 60, right: "8%" }} />

      <div style={maxW}>
        <div style={{ textAlign: "center" as const, marginBottom: 60 }}>
          <Dots color={C.pink} style={{ margin: "0 auto 16px" }} />
          <h2 style={heading}>Simple, bold pricing</h2>
          <p style={merge(subheading, { marginTop: 12, maxWidth: 460, marginLeft: "auto", marginRight: "auto" })}>
            Start free, upgrade when you're ready. No surprises.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
            alignItems: "start",
          }}
        >
          {plans.map((p, i) => (
            <div
              key={i}
              style={{
                background: p.highlighted ? C.pink : C.white,
                border: "3px solid " + C.black,
                padding: 36,
                boxShadow: p.highlighted ? `8px 8px 0 ${C.black}` : `5px 5px 0 ${C.black}`,
                position: "relative",
                transform: p.highlighted ? "scale(1.04)" : "none",
              }}
            >
              {p.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: -16,
                    right: 20,
                    background: C.yellow,
                    border: "2px solid " + C.black,
                    padding: "4px 14px",
                    fontWeight: 900,
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                  }}
                >
                  Most Popular
                </div>
              )}
              <h3
                style={{
                  fontWeight: 900,
                  fontSize: 18,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  margin: "0 0 8px",
                  color: p.highlighted ? C.white : C.black,
                }}
              >
                {p.name}
              </h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, margin: "0 0 24px" }}>
                <span
                  style={{
                    fontWeight: 900,
                    fontSize: 44,
                    color: p.highlighted ? C.white : C.black,
                  }}
                >
                  {p.price}
                </span>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: p.highlighted ? "rgba(255,255,255,0.7)" : "#888",
                  }}
                >
                  {p.sub}
                </span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                {p.features.map((f, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 0",
                      fontSize: 15,
                      fontWeight: 500,
                      color: p.highlighted ? C.white : "#444",
                      borderBottom: `1px solid ${p.highlighted ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.08)"}`,
                    }}
                  >
                    <span
                      style={{
                        width: 20,
                        height: 20,
                        background: p.highlighted ? C.yellow : p.accent,
                        border: "2px solid " + C.black,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        fontWeight: 900,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <HoverButton
                style={merge(
                  p.highlighted ? secondaryBtn : outlineBtn,
                  { width: "100%", textAlign: "center" as const }
                )}
              >
                {p.price === "Free" ? "Get Started" : "Subscribe"}
              </HoverButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 7. CTA ───────────────────────────────────────────────────────── */

function CTASection() {
  return (
    <section
      style={merge(sectionPad, {
        background: C.cyan,
        borderTop: "3px solid " + C.black,
        borderBottom: "3px solid " + C.black,
        textAlign: "center" as const,
      })}
    >
      <Triangle color={C.yellow} size={70} style={{ position: "absolute", top: 30, left: "10%", opacity: 0.6 }} />
      <Cross color={C.white} size={40} style={{ position: "absolute", bottom: 30, right: "12%", opacity: 0.6 }} />
      <Squiggle color={C.navy} width={120} style={{ position: "absolute", top: 20, right: "30%", opacity: 0.3 }} />

      <div style={maxW}>
        <h2
          style={{
            fontFamily: font,
            fontWeight: 900,
            fontSize: "clamp(36px, 5vw, 56px)",
            textTransform: "uppercase",
            letterSpacing: -1,
            margin: 0,
            color: C.black,
          }}
        >
          Ready to build
          <br />
          something{" "}
          <span
            style={{
              background: C.pink,
              color: C.white,
              padding: "0 12px",
              border: "3px solid " + C.black,
              boxShadow: `4px 4px 0 ${C.black}`,
              display: "inline-block",
            }}
          >
            amazing
          </span>
          ?
        </h2>
        <p style={merge(subheading, { marginTop: 20, maxWidth: 480, marginLeft: "auto", marginRight: "auto" })}>
          Join thousands of makers who ship faster with Stackpulse. No credit card required.
        </p>
        <div style={{ marginTop: 36 }}>
          <HoverButton style={merge(primaryBtn, { background: C.navy, color: C.white, fontSize: 18, padding: "18px 44px" })}>
            Start Building — It's Free
          </HoverButton>
        </div>
      </div>
    </section>
  );
}

/* ── 8. Footer ────────────────────────────────────────────────────── */

const footerCols: { title: string; links: string[] }[] = [
  { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog", "Docs"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security"] },
];

function Footer() {
  return (
    <footer style={{ background: C.navy, color: C.white, padding: "64px 24px 32px", position: "relative", overflow: "hidden" }}>
      <Dots color={C.pink} style={{ position: "absolute", top: 30, right: 40, opacity: 0.15 }} />

      <div style={merge(maxW, {
        display: "grid",
        gridTemplateColumns: "1.5fr repeat(3, 1fr)",
        gap: 48,
      })}>
        {/* logo col */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 24, fontWeight: 900, color: C.pink }}>▲</span>
            <span style={{ fontWeight: 900, fontSize: 18 }}>Stackpulse</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", margin: 0, maxWidth: 260 }}>
            The boldest toolkit for makers who refuse to ship boring products.
          </p>
        </div>

        {/* link cols */}
        {footerCols.map((col) => (
          <div key={col.title}>
            <h4
              style={{
                fontWeight: 800,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: 2,
                margin: "0 0 16px",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {col.title}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {col.links.map((l) => (
                <li key={l} style={{ marginBottom: 10 }}>
                  <a
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: 14,
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

      {/* copyright */}
      <div
        style={merge(maxW, {
          borderTop: "1px solid rgba(255,255,255,0.1)",
          marginTop: 48,
          paddingTop: 24,
          textAlign: "center" as const,
        })}
      >
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0 }}>
          &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ── Shared hover button ──────────────────────────────────────────── */

function HoverButton({ style: s, children }: { style: CSSProperties; children: React.ReactNode }) {
  return (
    <button
      style={s}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(-2px,-2px)";
        const shadow = s.boxShadow?.toString() ?? `4px 4px 0 ${C.black}`;
        const bigger = shadow.replace(/(\d+)px (\d+)px/, (_, x: string, y: string) => `${+x + 2}px ${+y + 2}px`);
        e.currentTarget.style.boxShadow = bigger;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0,0)";
        e.currentTarget.style.boxShadow = s.boxShadow?.toString() ?? `4px 4px 0 ${C.black}`;
      }}
    >
      {children}
    </button>
  );
}
