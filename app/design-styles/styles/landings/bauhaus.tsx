"use client";

import React, { useState, CSSProperties } from "react";

/* ─── palette & constants ─── */
const C = {
  black: "#1a1a1a",
  white: "#f5f0e8",
  red: "#d92b2b",
  blue: "#1b4d9e",
  yellow: "#f2b705",
  grey: "#e0dcd4",
  darkGrey: "#3a3a3a",
  lightGrey: "#c8c3b8",
};

const FONT =
  "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif";
const MONO =
  "'SF Mono', 'Fira Code', 'Courier New', monospace";

/* ─── helpers ─── */
const section = (extra: CSSProperties = {}): CSSProperties => ({
  maxWidth: 1120,
  margin: "0 auto",
  padding: "80px 24px",
  ...extra,
});

const btn = (
  bg: string,
  fg: string,
  extra: CSSProperties = {}
): CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 32px",
  fontFamily: FONT,
  fontWeight: 700,
  fontSize: 15,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  border: `3px solid ${C.black}`,
  background: bg,
  color: fg,
  cursor: "pointer",
  transition: "transform .15s, box-shadow .15s",
  boxShadow: `4px 4px 0 ${C.black}`,
  ...extra,
});

/* ─── geometric decorations ─── */
function Circle({
  size,
  color,
  style,
}: {
  size: number;
  color: string;
  style?: CSSProperties;
}) {
  return (
    <div
      aria-hidden
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        position: "absolute",
        ...style,
      }}
    />
  );
}

function Triangle({
  size,
  color,
  style,
  rotate = 0,
}: {
  size: number;
  color: string;
  style?: CSSProperties;
  rotate?: number;
}) {
  return (
    <div
      aria-hidden
      style={{
        width: 0,
        height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
        position: "absolute",
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    />
  );
}

/* ═══════════════════════════════════════════════
   1. HEADER
   ═══════════════════════════════════════════════ */
function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const links = ["Features", "Pricing", "Testimonials", "Docs"];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: C.white,
        borderBottom: `3px solid ${C.black}`,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* logo */}
        <div
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: "-0.02em",
            color: C.black,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ color: C.red, fontSize: 26 }}>▲</span> Stackpulse
        </div>

        {/* nav */}
        <nav
          style={{
            display: "flex",
            gap: 36,
          }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onMouseEnter={() => setHovered(l)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontFamily: FONT,
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: hovered === l ? C.red : C.black,
                textDecoration: "none",
                transition: "color .15s",
              }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* sign-up */}
        <button
          style={btn(C.yellow, C.black, {
            padding: "10px 24px",
            fontSize: 13,
            boxShadow: `3px 3px 0 ${C.black}`,
          })}
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
    <div
      style={{
        background: C.white,
        position: "relative",
        overflow: "hidden",
        borderBottom: `3px solid ${C.black}`,
      }}
    >
      {/* geometric accents */}
      <Circle
        size={340}
        color={C.yellow}
        style={{ top: -80, right: -60, opacity: 0.5 }}
      />
      <Triangle
        size={200}
        color={C.red}
        style={{ bottom: 40, left: -40, opacity: 0.35 }}
        rotate={15}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: 180,
          height: 180,
          border: `6px solid ${C.blue}`,
          top: 80,
          right: 180,
          opacity: 0.3,
          transform: "rotate(15deg)",
        }}
      />

      <div
        style={{
          ...section(),
          paddingTop: 100,
          paddingBottom: 100,
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "clamp(48px, 7vw, 88px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: C.black,
            margin: 0,
            maxWidth: 800,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Build with{" "}
          <span style={{ color: C.red }}>form.</span>{" "}
          Ship with{" "}
          <span style={{ color: C.blue }}>function.</span>
        </h1>

        <p
          style={{
            fontFamily: FONT,
            fontSize: 20,
            lineHeight: 1.6,
            color: C.darkGrey,
            maxWidth: 560,
            margin: "28px auto 0",
          }}
        >
          The developer platform where geometry meets purpose.
          Compose, deploy, and scale — without the noise.
        </p>

        <div
          style={{
            marginTop: 44,
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button style={btn(C.red, C.white)}>
            Get Started Free
          </button>
          <button style={btn(C.white, C.black)}>
            View Demo
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   3. LOGOS BAR
   ═══════════════════════════════════════════════ */
function LogosBar() {
  const brands = ["Vercel", "Linear", "Resend", "Raycast", "Supabase"];

  return (
    <div
      style={{
        background: C.black,
        borderBottom: `3px solid ${C.black}`,
      }}
    >
      <div style={section({ paddingTop: 40, paddingBottom: 40, textAlign: "center" })}>
        <p
          style={{
            fontFamily: MONO,
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: C.lightGrey,
            margin: 0,
          }}
        >
          Trusted by 2,000+ makers at
        </p>
        <div
          style={{
            marginTop: 24,
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
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: 20,
                letterSpacing: "0.04em",
                color: C.grey,
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   4. FEATURES
   ═══════════════════════════════════════════════ */
const FEATURES = [
  {
    shape: "circle" as const,
    color: C.red,
    title: "Instant Deployments",
    desc: "Push code and watch it go live in seconds. Zero-config CI/CD built right in.",
  },
  {
    shape: "square" as const,
    color: C.blue,
    title: "Composable Modules",
    desc: "Snap together pre-built modules like geometric primitives — APIs, auth, storage.",
  },
  {
    shape: "triangle" as const,
    color: C.yellow,
    title: "Edge-First Runtime",
    desc: "Every function runs at the edge by default. Low latency, global reach, no cold starts.",
  },
];

function Features() {
  return (
    <div
      id="features"
      style={{ background: C.white, borderBottom: `3px solid ${C.black}` }}
    >
      <div style={section()}>
        <p
          style={{
            fontFamily: MONO,
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: C.red,
            margin: 0,
          }}
        >
          Features
        </p>
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "clamp(32px, 4vw, 48px)",
            letterSpacing: "-0.02em",
            color: C.black,
            margin: "12px 0 0",
          }}
        >
          Everything you need, nothing you don&rsquo;t
        </h2>

        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                background: C.white,
                border: `3px solid ${C.black}`,
                padding: 36,
                position: "relative",
                boxShadow: `6px 6px 0 ${C.black}`,
              }}
            >
              {/* shape icon */}
              <div style={{ marginBottom: 24 }}>
                {f.shape === "circle" && (
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: f.color,
                    }}
                  />
                )}
                {f.shape === "square" && (
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      background: f.color,
                    }}
                  />
                )}
                {f.shape === "triangle" && (
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "24px solid transparent",
                      borderRight: "24px solid transparent",
                      borderBottom: `48px solid ${f.color}`,
                    }}
                  />
                )}
              </div>
              <h3
                style={{
                  fontFamily: FONT,
                  fontWeight: 800,
                  fontSize: 22,
                  color: C.black,
                  margin: 0,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: FONT,
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: C.darkGrey,
                  margin: "14px 0 0",
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   5. TESTIMONIALS
   ═══════════════════════════════════════════════ */
const TESTIMONIALS = [
  {
    quote:
      "Stackpulse cut our deploy time from 12 minutes to 8 seconds. It's not even a comparison.",
    name: "Lena Mohr",
    role: "CTO, Formwerk",
    accent: C.red,
  },
  {
    quote:
      "The composable modules feel like building with Lego. Our team shipped a full auth system in one afternoon.",
    name: "Ayo Adebayo",
    role: "Lead Engineer, Gridhaus",
    accent: C.blue,
  },
  {
    quote:
      "Finally a platform that respects developers. No fluff, no bloat — just clean infrastructure.",
    name: "Sara Lindqvist",
    role: "Founder, Punkt Studio",
    accent: C.yellow,
  },
];

function Testimonials() {
  return (
    <div
      id="testimonials"
      style={{ background: C.grey, borderBottom: `3px solid ${C.black}` }}
    >
      <div style={section()}>
        <p
          style={{
            fontFamily: MONO,
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: C.blue,
            margin: 0,
          }}
        >
          Testimonials
        </p>
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "clamp(32px, 4vw, 48px)",
            letterSpacing: "-0.02em",
            color: C.black,
            margin: "12px 0 0",
          }}
        >
          Makers speak
        </h2>

        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                background: C.white,
                border: `3px solid ${C.black}`,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: `6px 6px 0 ${C.black}`,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 6,
                  background: t.accent,
                  marginBottom: 20,
                }}
              />
              <p
                style={{
                  fontFamily: FONT,
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: C.black,
                  margin: 0,
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ marginTop: 28 }}>
                <p
                  style={{
                    fontFamily: FONT,
                    fontWeight: 800,
                    fontSize: 15,
                    color: C.black,
                    margin: 0,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: 12,
                    color: C.darkGrey,
                    margin: "4px 0 0",
                    letterSpacing: "0.04em",
                  }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   6. PRICING
   ═══════════════════════════════════════════════ */
const TIERS = [
  {
    name: "Starter",
    price: "Free",
    sub: "forever",
    features: [
      "3 projects",
      "Edge deploys",
      "Community support",
      "1 GB storage",
    ],
    accent: C.blue,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    sub: "/month",
    features: [
      "Unlimited projects",
      "Custom domains",
      "Priority support",
      "50 GB storage",
      "Team collaboration",
    ],
    accent: C.red,
    highlighted: true,
  },
  {
    name: "Team",
    price: "$79",
    sub: "/month",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Audit logs",
      "100 GB storage",
      "Dedicated account manager",
    ],
    accent: C.yellow,
    highlighted: false,
  },
];

function Pricing() {
  return (
    <div
      id="pricing"
      style={{ background: C.white, borderBottom: `3px solid ${C.black}` }}
    >
      <div style={section()}>
        <p
          style={{
            fontFamily: MONO,
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: C.red,
            margin: 0,
            textAlign: "center",
          }}
        >
          Pricing
        </p>
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "clamp(32px, 4vw, 48px)",
            letterSpacing: "-0.02em",
            color: C.black,
            margin: "12px 0 0",
            textAlign: "center",
          }}
        >
          Simple, honest plans
        </h2>

        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {TIERS.map((t) => (
            <div
              key={t.name}
              style={{
                background: t.highlighted ? C.black : C.white,
                border: `3px solid ${C.black}`,
                padding: 40,
                position: "relative",
                boxShadow: t.highlighted
                  ? `8px 8px 0 ${C.red}`
                  : `6px 6px 0 ${C.black}`,
                transform: t.highlighted ? "scale(1.04)" : "none",
              }}
            >
              {t.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: -16,
                    right: 24,
                    background: C.red,
                    color: C.white,
                    fontFamily: MONO,
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "6px 14px",
                    border: `2px solid ${C.black}`,
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* accent bar */}
              <div
                style={{
                  width: 48,
                  height: 6,
                  background: t.accent,
                  marginBottom: 24,
                }}
              />

              <p
                style={{
                  fontFamily: FONT,
                  fontWeight: 800,
                  fontSize: 18,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: t.highlighted ? C.white : C.black,
                  margin: 0,
                }}
              >
                {t.name}
              </p>

              <p
                style={{
                  fontFamily: FONT,
                  fontWeight: 900,
                  fontSize: 48,
                  color: t.highlighted ? C.white : C.black,
                  margin: "16px 0 0",
                  lineHeight: 1,
                }}
              >
                {t.price}
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: t.highlighted ? C.lightGrey : C.darkGrey,
                  }}
                >
                  {" "}
                  {t.sub}
                </span>
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "28px 0 0",
                }}
              >
                {t.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontFamily: FONT,
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: t.highlighted ? C.grey : C.darkGrey,
                      padding: "8px 0",
                      borderBottom: `1px solid ${t.highlighted ? C.darkGrey : C.lightGrey}`,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        background: t.accent,
                        borderRadius: t.accent === C.red ? "50%" : 0,
                        flexShrink: 0,
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                style={btn(
                  t.highlighted ? C.red : C.white,
                  t.highlighted ? C.white : C.black,
                  {
                    width: "100%",
                    marginTop: 32,
                    boxShadow: t.highlighted
                      ? `4px 4px 0 ${C.white}`
                      : `4px 4px 0 ${C.black}`,
                  }
                )}
              >
                {t.price === "Free" ? "Start Free" : "Subscribe"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   7. CTA
   ═══════════════════════════════════════════════ */
function CtaBanner() {
  return (
    <div
      style={{
        background: C.red,
        borderBottom: `3px solid ${C.black}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Circle
        size={260}
        color={C.yellow}
        style={{ top: -100, left: -80, opacity: 0.2 }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: 160,
          height: 160,
          border: `5px solid ${C.white}`,
          bottom: -40,
          right: 60,
          opacity: 0.15,
          transform: "rotate(20deg)",
        }}
      />

      <div
        style={{
          ...section({ paddingTop: 72, paddingBottom: 72 }),
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 56px)",
            color: C.white,
            letterSpacing: "-0.02em",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Ready to build something essential?
        </h2>
        <button
          style={btn(C.yellow, C.black, {
            marginTop: 40,
            fontSize: 16,
            padding: "16px 40px",
          })}
        >
          Get Started Now
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   8. FOOTER
   ═══════════════════════════════════════════════ */
const FOOTER_COLS: { heading: string; links: string[] }[] = [
  { heading: "Product", links: ["Features", "Pricing", "Changelog", "Docs", "Status"] },
  { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { heading: "Legal", links: ["Privacy", "Terms", "Security"] },
];

function Footer() {
  return (
    <footer style={{ background: C.black }}>
      <div
        style={{
          ...section({ paddingTop: 64, paddingBottom: 40 }),
          display: "grid",
          gridTemplateColumns: "1.4fr repeat(3, 1fr)",
          gap: 48,
        }}
      >
        {/* brand */}
        <div>
          <div
            style={{
              fontFamily: FONT,
              fontWeight: 900,
              fontSize: 20,
              color: C.white,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ color: C.red, fontSize: 24 }}>▲</span> Stackpulse
          </div>
          <p
            style={{
              fontFamily: FONT,
              fontSize: 14,
              lineHeight: 1.65,
              color: C.lightGrey,
              margin: "16px 0 0",
              maxWidth: 260,
            }}
          >
            Form follows function. Build what matters, ship what works.
          </p>
        </div>

        {/* link columns */}
        {FOOTER_COLS.map((col) => (
          <div key={col.heading}>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: C.white,
                margin: 0,
              }}
            >
              {col.heading}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0" }}>
              {col.links.map((l) => (
                <li key={l} style={{ margin: "10px 0" }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: FONT,
                      fontSize: 14,
                      color: C.lightGrey,
                      textDecoration: "none",
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
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "20px 24px",
          borderTop: `1px solid ${C.darkGrey}`,
        }}
      >
        <p
          style={{
            fontFamily: MONO,
            fontSize: 12,
            color: C.darkGrey,
            margin: 0,
            letterSpacing: "0.04em",
          }}
        >
          &copy; 2026 Stackpulse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════ */
export function BauhausLanding() {
  return (
    <div style={{ background: C.white, fontFamily: FONT, minHeight: "100vh" }}>
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
