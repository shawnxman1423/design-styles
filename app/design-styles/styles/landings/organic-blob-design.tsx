"use client";

import React, { useState, CSSProperties } from "react";

/* ───────────────────────── palette & tokens ───────────────────────── */
const C = {
  bg: "#fdf6f0",
  card: "#ffffff",
  primary: "#6c5ce7",
  primaryLight: "#a29bfe",
  accent: "#00cec9",
  accentLight: "#81ecec",
  pink: "#fd79a8",
  pinkLight: "#fab1a0",
  dark: "#2d3436",
  muted: "#636e72",
  light: "#dfe6e9",
  white: "#ffffff",
};

const radius = "24px";
const radiusLg = "32px";
const shadow = "0 8px 32px rgba(108,92,231,0.10)";

/* ───────────────────────── blob SVG backgrounds ───────────────────── */
const Blob = ({
  color,
  style,
}: {
  color: string;
  style?: CSSProperties;
}) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      width: "420px",
      height: "420px",
      opacity: 0.18,
      pointerEvents: "none",
      ...style,
    }}
  >
    <path
      fill={color}
      d="M44.7,-76.4C58.2,-69.3,69.5,-57.4,77.6,-43.5C85.7,-29.6,90.5,-14.8,89.8,-0.4C89,14,82.7,28,73.8,40.2C64.9,52.4,53.4,62.8,40.2,70.4C27,78,13.5,82.8,-1.4,85.2C-16.3,87.6,-32.6,87.6,-45.2,80.3C-57.8,73,-66.7,58.4,-74.1,43.6C-81.5,28.8,-87.3,14.4,-87.5,-0.1C-87.7,-14.7,-82.2,-29.3,-73.5,-41.5C-64.8,-53.7,-52.9,-63.4,-39.7,-70.7C-26.6,-78,-13.3,-82.9,1.3,-85.1C15.8,-87.4,31.2,-83.5,44.7,-76.4Z"
      transform="translate(100 100)"
    />
  </svg>
);

const BlobAlt = ({
  color,
  style,
}: {
  color: string;
  style?: CSSProperties;
}) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      width: "360px",
      height: "360px",
      opacity: 0.15,
      pointerEvents: "none",
      ...style,
    }}
  >
    <path
      fill={color}
      d="M39.5,-65.3C50.9,-59.5,59.7,-48.3,67,-35.8C74.3,-23.3,80,-9.5,79.2,3.8C78.4,17.2,71.2,30,61.5,40.4C51.9,50.8,39.8,58.9,26.6,64.5C13.4,70.2,-0.9,73.3,-15.4,72.1C-29.9,70.8,-44.5,65.1,-54.3,55C-64.1,44.9,-69,30.3,-72.6,15.1C-76.2,-0.2,-78.4,-16.2,-73.3,-29.3C-68.2,-42.4,-55.7,-52.6,-42.4,-57.7C-29.1,-62.8,-14.5,-62.8,0.2,-63.2C15,-63.5,28.1,-71.1,39.5,-65.3Z"
      transform="translate(100 100)"
    />
  </svg>
);

/* ───────────────────────── shared styles ───────────────────────────── */
const wrap: CSSProperties = {
  maxWidth: "1160px",
  margin: "0 auto",
  padding: "0 24px",
  width: "100%",
};

const sectionPad: CSSProperties = {
  padding: "96px 0",
  position: "relative",
  overflow: "hidden",
};

const heading2: CSSProperties = {
  fontSize: "clamp(28px, 4vw, 40px)",
  fontWeight: 800,
  color: C.dark,
  textAlign: "center",
  marginBottom: "12px",
  lineHeight: 1.25,
};

const sub: CSSProperties = {
  fontSize: "17px",
  color: C.muted,
  textAlign: "center",
  maxWidth: "560px",
  margin: "0 auto 48px",
  lineHeight: 1.6,
};

const btnPrimary: CSSProperties = {
  background: C.primary,
  color: C.white,
  border: "none",
  borderRadius: "60px",
  padding: "14px 32px",
  fontSize: "15px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "transform 0.2s, box-shadow 0.2s",
  boxShadow: "0 4px 18px rgba(108,92,231,0.25)",
};

const btnOutline: CSSProperties = {
  background: "transparent",
  color: C.primary,
  border: `2px solid ${C.primary}`,
  borderRadius: "60px",
  padding: "12px 30px",
  fontSize: "15px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "transform 0.2s",
};

/* ───────────────────────── data ─────────────────────────────────────── */
const NAV = ["Features", "Pricing", "Docs", "Blog"];
const BRANDS = ["Vercel", "Stripe", "Notion", "Linear", "Raycast"];

const FEATURES = [
  {
    icon: "⚡",
    title: "Instant Deploy",
    desc: "Push to main and your changes go live in under three seconds — zero config required.",
  },
  {
    icon: "🔒",
    title: "Built-in Auth",
    desc: "Passwordless login, OAuth, and role-based access out of the box.",
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    desc: "Live dashboards with custom events so you always know what matters.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Stackpulse cut our deploy time by 80%. The DX is unlike anything else I've used.",
    name: "Jamie Chen",
    role: "CTO, Loopcraft",
  },
  {
    quote: "We migrated our entire platform in a weekend. The blob-smooth workflow is addictive.",
    name: "Priya Desai",
    role: "Lead Engineer, Meadow",
  },
  {
    quote: "Finally a tool that doesn't get in the way. Simple, powerful, beautiful.",
    name: "Marcus Holm",
    role: "Founder, Tideline",
  },
];

const TIERS = [
  {
    name: "Starter",
    price: "Free",
    sub: "For side projects",
    features: ["1 project", "10k requests / mo", "Community support", "Basic analytics"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    sub: "Per month, billed yearly",
    features: ["Unlimited projects", "1M requests / mo", "Priority support", "Advanced analytics", "Custom domains"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$79",
    sub: "Per month, billed yearly",
    features: ["Everything in Pro", "5 team seats", "SSO & audit logs", "99.99% SLA", "Dedicated account manager"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const FOOTER_COLS: { heading: string; links: string[] }[] = [
  { heading: "Product", links: ["Features", "Pricing", "Changelog", "Integrations"] },
  { heading: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { heading: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
];

/* ═══════════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
export function OrganicBlobDesignLanding() {
  const [hovered, setHovered] = useState<string | null>(null);

  const hover = (key: string) => ({
    onMouseEnter: () => setHovered(key),
    onMouseLeave: () => setHovered(null),
  });

  /* ─── Header ─── */
  const header = (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(253,246,240,0.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          ...wrap,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        <div style={{ fontWeight: 800, fontSize: "18px", color: C.dark, letterSpacing: "-0.3px" }}>
          ▲ Stackpulse
        </div>
        <nav style={{ display: "flex", gap: "32px" }}>
          {NAV.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                color: hovered === `nav-${l}` ? C.primary : C.muted,
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              {...hover(`nav-${l}`)}
            >
              {l}
            </a>
          ))}
        </nav>
        <button
          style={{
            ...btnPrimary,
            padding: "10px 24px",
            fontSize: "14px",
            transform: hovered === "header-cta" ? "translateY(-1px)" : undefined,
          }}
          {...hover("header-cta")}
        >
          Sign Up
        </button>
      </div>
    </header>
  );

  /* ─── Hero ─── */
  const hero = (
    <section
      style={{
        ...sectionPad,
        padding: "120px 0 100px",
        textAlign: "center",
      }}
    >
      <Blob color={C.primaryLight} style={{ top: "-120px", left: "-140px" }} />
      <BlobAlt color={C.accentLight} style={{ bottom: "-80px", right: "-100px" }} />
      <BlobAlt color={C.pinkLight} style={{ top: "40px", right: "10%" }} />
      <div style={{ ...wrap, position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 900,
            color: C.dark,
            lineHeight: 1.12,
            marginBottom: "20px",
            letterSpacing: "-1px",
          }}
        >
          Ship faster with
          <br />
          <span style={{ color: C.primary }}>fluid simplicity</span>
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: C.muted,
            maxWidth: "520px",
            margin: "0 auto 36px",
            lineHeight: 1.65,
          }}
        >
          Stackpulse gives your team the softest, most intuitive developer
          experience — so you can focus on building, not configuring.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            style={{
              ...btnPrimary,
              transform: hovered === "hero-pri" ? "translateY(-2px)" : undefined,
              boxShadow:
                hovered === "hero-pri"
                  ? "0 8px 28px rgba(108,92,231,0.35)"
                  : btnPrimary.boxShadow,
            }}
            {...hover("hero-pri")}
          >
            Start Building — Free
          </button>
          <button
            style={{
              ...btnOutline,
              transform: hovered === "hero-sec" ? "translateY(-2px)" : undefined,
            }}
            {...hover("hero-sec")}
          >
            View Demo
          </button>
        </div>
      </div>
    </section>
  );

  /* ─── Logos ─── */
  const logos = (
    <section style={{ padding: "32px 0 64px", position: "relative" }}>
      <div style={wrap}>
        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            fontWeight: 600,
            color: C.muted,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            marginBottom: "28px",
          }}
        >
          Trusted by 2,000+ makers at
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "48px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {BRANDS.map((b) => (
            <span
              key={b}
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: C.light,
                letterSpacing: "-0.3px",
                userSelect: "none",
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );

  /* ─── Features ─── */
  const features = (
    <section id="features" style={{ ...sectionPad, background: C.white }}>
      <Blob color={C.accentLight} style={{ top: "-60px", right: "-160px" }} />
      <div style={{ ...wrap, position: "relative", zIndex: 1 }}>
        <h2 style={heading2}>Everything you need</h2>
        <p style={sub}>
          A thoughtfully crafted toolkit that bends around your workflow — not the
          other way around.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          {FEATURES.map((f, i) => (
            <div
              key={i}
              style={{
                background: C.bg,
                borderRadius: radiusLg,
                padding: "36px 32px",
                transition: "transform 0.25s, box-shadow 0.25s",
                transform: hovered === `feat-${i}` ? "translateY(-6px)" : undefined,
                boxShadow: hovered === `feat-${i}` ? shadow : "0 2px 12px rgba(0,0,0,0.04)",
              }}
              {...hover(`feat-${i}`)}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: C.white,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "20px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: C.dark, marginBottom: "10px" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "15px", color: C.muted, lineHeight: 1.6, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  /* ─── Testimonials ─── */
  const testimonials = (
    <section style={{ ...sectionPad, background: C.bg }}>
      <BlobAlt color={C.pinkLight} style={{ bottom: "-100px", left: "-120px" }} />
      <div style={{ ...wrap, position: "relative", zIndex: 1 }}>
        <h2 style={heading2}>Loved by builders</h2>
        <p style={sub}>Don't just take our word for it.</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{
                background: C.white,
                borderRadius: radiusLg,
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.25s, box-shadow 0.25s",
                transform: hovered === `test-${i}` ? "translateY(-6px)" : undefined,
                boxShadow: hovered === `test-${i}` ? shadow : "0 2px 12px rgba(0,0,0,0.04)",
              }}
              {...hover(`test-${i}`)}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: C.dark,
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: "24px",
                }}
              >
                "{t.quote}"
              </p>
              <div>
                <p style={{ fontWeight: 700, fontSize: "15px", color: C.dark, margin: 0 }}>
                  {t.name}
                </p>
                <p style={{ fontSize: "13px", color: C.muted, margin: "2px 0 0" }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  /* ─── Pricing ─── */
  const pricing = (
    <section id="pricing" style={{ ...sectionPad, background: C.white }}>
      <Blob color={C.primaryLight} style={{ top: "-100px", left: "-100px" }} />
      <BlobAlt color={C.accentLight} style={{ bottom: "-80px", right: "-80px" }} />
      <div style={{ ...wrap, position: "relative", zIndex: 1 }}>
        <h2 style={heading2}>Simple, transparent pricing</h2>
        <p style={sub}>Start free. Scale when you're ready.</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
            alignItems: "start",
          }}
        >
          {TIERS.map((t, i) => {
            const hl = t.highlighted;
            return (
              <div
                key={i}
                style={{
                  background: hl ? C.primary : C.bg,
                  borderRadius: radiusLg,
                  padding: hl ? "44px 32px" : "36px 32px",
                  color: hl ? C.white : C.dark,
                  position: "relative",
                  transition: "transform 0.25s, box-shadow 0.25s",
                  transform: hovered === `tier-${i}` ? "translateY(-6px)" : undefined,
                  boxShadow: hovered === `tier-${i}`
                    ? hl
                      ? "0 12px 40px rgba(108,92,231,0.35)"
                      : shadow
                    : hl
                    ? "0 8px 32px rgba(108,92,231,0.25)"
                    : "0 2px 12px rgba(0,0,0,0.04)",
                }}
                {...hover(`tier-${i}`)}
              >
                {hl && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: C.accent,
                      color: C.white,
                      fontSize: "12px",
                      fontWeight: 700,
                      padding: "4px 16px",
                      borderRadius: "40px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Most Popular
                  </span>
                )}
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    marginBottom: "4px",
                    color: hl ? C.white : C.dark,
                  }}
                >
                  {t.name}
                </h3>
                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontSize: "40px", fontWeight: 900, letterSpacing: "-1px" }}>
                    {t.price}
                  </span>
                  {t.price !== "Free" && (
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: 500,
                        opacity: 0.75,
                        marginLeft: "4px",
                      }}
                    >
                      /mo
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    opacity: 0.7,
                    marginBottom: "24px",
                  }}
                >
                  {t.sub}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                  {t.features.map((feat, fi) => (
                    <li
                      key={fi}
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.5,
                        padding: "6px 0",
                        borderTop: `1px solid ${hl ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.06)"}`,
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span style={{ color: hl ? C.accentLight : C.accent, fontWeight: 700 }}>
                        ✓
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    width: "100%",
                    padding: "14px 0",
                    borderRadius: "60px",
                    fontSize: "15px",
                    fontWeight: 700,
                    cursor: "pointer",
                    border: hl ? "none" : `2px solid ${C.primary}`,
                    background: hl ? C.white : "transparent",
                    color: C.primary,
                    transition: "transform 0.2s",
                    transform: hovered === `tier-btn-${i}` ? "translateY(-2px)" : undefined,
                  }}
                  {...hover(`tier-btn-${i}`)}
                >
                  {t.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  /* ─── CTA ─── */
  const cta = (
    <section
      style={{
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${C.primary} 0%, ${C.accent} 100%)`,
      }}
    >
      <BlobAlt color="rgba(255,255,255,0.15)" style={{ top: "-80px", left: "-60px" }} />
      <Blob color="rgba(255,255,255,0.1)" style={{ bottom: "-120px", right: "-80px" }} />
      <div style={{ ...wrap, textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2
          style={{
            ...heading2,
            color: C.white,
            fontSize: "clamp(28px, 4vw, 44px)",
            marginBottom: "20px",
          }}
        >
          Ready to build something great?
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.85)",
            maxWidth: "480px",
            margin: "0 auto 36px",
            lineHeight: 1.6,
          }}
        >
          Join thousands of developers who ship with confidence every single day.
        </p>
        <button
          style={{
            ...btnPrimary,
            background: C.white,
            color: C.primary,
            boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
            transform: hovered === "cta-btn" ? "translateY(-2px)" : undefined,
          }}
          {...hover("cta-btn")}
        >
          Get Started for Free
        </button>
      </div>
    </section>
  );

  /* ─── Footer ─── */
  const footer = (
    <footer style={{ background: C.dark, color: "rgba(255,255,255,0.65)", padding: "64px 0 0" }}>
      <div
        style={{
          ...wrap,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "48px",
          paddingBottom: "48px",
        }}
      >
        <div style={{ maxWidth: "260px" }}>
          <div
            style={{
              fontWeight: 800,
              fontSize: "18px",
              color: C.white,
              marginBottom: "12px",
              letterSpacing: "-0.3px",
            }}
          >
            ▲ Stackpulse
          </div>
          <p style={{ fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
            The smoothest way to build, deploy, and scale modern applications.
          </p>
        </div>
        <div style={{ display: "flex", gap: "64px", flexWrap: "wrap" }}>
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <h4
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: C.white,
                  textTransform: "uppercase",
                  letterSpacing: "1.2px",
                  marginBottom: "16px",
                }}
              >
                {col.heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map((link) => (
                  <li key={link} style={{ marginBottom: "10px" }}>
                    <a
                      href="#"
                      style={{
                        color:
                          hovered === `fl-${link}`
                            ? C.white
                            : "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.2s",
                      }}
                      {...hover(`fl-${link}`)}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "24px 0",
          textAlign: "center",
          fontSize: "13px",
          color: "rgba(255,255,255,0.35)",
        }}
      >
        © 2026 Stackpulse. All rights reserved.
      </div>
    </footer>
  );

  /* ─── Render ─── */
  return (
    <div
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        background: C.bg,
        color: C.dark,
        minHeight: "100vh",
        margin: 0,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {header}
      {hero}
      {logos}
      {features}
      {testimonials}
      {pricing}
      {cta}
      {footer}
    </div>
  );
}

export default OrganicBlobDesignLanding;
