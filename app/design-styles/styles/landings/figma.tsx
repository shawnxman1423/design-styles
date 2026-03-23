"use client";

import React, { useState } from "react";

// ── Figma-style palette & tokens ──────────────────────────────────────
const c = {
  bg: "#FFFFFF",
  surface: "#F5F5F5",
  surfaceHover: "#EBEBEB",
  border: "#E5E5E5",
  text: "#1E1E1E",
  textSecondary: "#6B6B6B",
  accent: "#0D99FF",
  accentHover: "#0B85DE",
  accentLight: "#E8F4FD",
  purple: "#9747FF",
  green: "#14AE5C",
  orange: "#F24822",
  pink: "#FF7262",
  highlight: "#0D99FF",
  white: "#FFFFFF",
};

const font =
  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

const radius = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 20,
  pill: 999,
};

// ── Shared inline-style helpers ───────────────────────────────────────
const sectionPadding: React.CSSProperties = {
  padding: "80px 24px",
  maxWidth: 1200,
  margin: "0 auto",
};

const heading2: React.CSSProperties = {
  fontSize: 36,
  fontWeight: 700,
  color: c.text,
  letterSpacing: "-0.02em",
  lineHeight: 1.2,
  margin: 0,
};

const body: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.6,
  color: c.textSecondary,
  margin: 0,
};

// ── Component ─────────────────────────────────────────────────────────
export function FigmaLanding() {
  return (
    <div style={{ fontFamily: font, color: c.text, background: c.bg, overflowX: "hidden" as const }}>
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

// ── 1. Header ─────────────────────────────────────────────────────────
function Header() {
  const [hovered, setHovered] = useState<string | null>(null);

  const navLinks = ["Features", "Pricing", "Docs", "Blog"];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${c.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 18, color: c.text }}>
          <span style={{ fontSize: 20 }}>{"\u25B2"}</span> Stackpulse
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 32 }}>
          {navLinks.map((l) => (
            <a
              key={l}
              href="#"
              onMouseEnter={() => setHovered(l)}
              onMouseLeave={() => setHovered(null)}
              style={{
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                color: hovered === l ? c.text : c.textSecondary,
                transition: "color 0.15s",
              }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Sign-up */}
        <button
          style={{
            background: c.text,
            color: c.white,
            border: "none",
            borderRadius: radius.pill,
            padding: "8px 20px",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Sign up free
        </button>
      </div>
    </header>
  );
}

// ── 2. Hero ───────────────────────────────────────────────────────────
function Hero() {
  const [btnHover, setBtnHover] = useState<number | null>(null);

  return (
    <section
      style={{
        ...sectionPadding,
        paddingTop: 100,
        paddingBottom: 100,
        textAlign: "center",
      }}
    >
      {/* Pill badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: c.accentLight,
          color: c.accent,
          fontSize: 13,
          fontWeight: 600,
          borderRadius: radius.pill,
          padding: "6px 16px",
          marginBottom: 28,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: c.green,
            display: "inline-block",
          }}
        />
        Now in public beta
      </div>

      <h1
        style={{
          fontSize: "clamp(40px, 6vw, 72px)",
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: "-0.035em",
          margin: "0 auto 20px",
          maxWidth: 800,
          color: c.text,
        }}
      >
        Design, prototype, ship{" "}
        <span style={{ color: c.accent }}>faster</span>
      </h1>

      <p
        style={{
          ...body,
          fontSize: 18,
          maxWidth: 540,
          margin: "0 auto 40px",
        }}
      >
        Stackpulse brings your design workflow together in one place &mdash;
        from first sketch to final hand-off.
      </p>

      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        <button
          onMouseEnter={() => setBtnHover(0)}
          onMouseLeave={() => setBtnHover(null)}
          style={{
            background: btnHover === 0 ? c.accentHover : c.accent,
            color: c.white,
            border: "none",
            borderRadius: radius.pill,
            padding: "14px 32px",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.15s",
          }}
        >
          Get started free
        </button>
        <button
          onMouseEnter={() => setBtnHover(1)}
          onMouseLeave={() => setBtnHover(null)}
          style={{
            background: btnHover === 1 ? c.surfaceHover : c.surface,
            color: c.text,
            border: `1px solid ${c.border}`,
            borderRadius: radius.pill,
            padding: "14px 32px",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.15s",
          }}
        >
          Watch demo
        </button>
      </div>
    </section>
  );
}

// ── 3. Logos bar ──────────────────────────────────────────────────────
function LogosBar() {
  const brands = ["Vercel", "Linear", "Raycast", "Resend", "Supabase"];

  return (
    <section style={{ borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, background: c.surface }}>
      <div
        style={{
          ...sectionPadding,
          paddingTop: 40,
          paddingBottom: 40,
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 13, fontWeight: 600, color: c.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 24px" }}>
          Trusted by 2,000+ makers at
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
          {brands.map((b) => (
            <span key={b} style={{ fontSize: 18, fontWeight: 700, color: "#B0B0B0", letterSpacing: "-0.01em" }}>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 4. Features ───────────────────────────────────────────────────────
function Features() {
  const cards: { icon: string; title: string; desc: string; color: string }[] = [
    {
      icon: "\u2B50",
      title: "Real-time collaboration",
      desc: "Work alongside your team with live cursors, comments, and multiplayer editing built right in.",
      color: c.purple,
    },
    {
      icon: "\u26A1",
      title: "Lightning-fast prototyping",
      desc: "Turn static screens into interactive flows in seconds. Smart animate transitions with zero effort.",
      color: c.accent,
    },
    {
      icon: "\uD83D\uDD12",
      title: "Design-to-code handoff",
      desc: "Auto-generate production-ready CSS, Swift, or Compose code from any component in your file.",
      color: c.green,
    },
  ];

  return (
    <section style={sectionPadding}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <h2 style={heading2}>Everything you need, nothing you don&apos;t</h2>
        <p style={{ ...body, marginTop: 12, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
          Powerful tools that stay out of your way so you can focus on what matters.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {cards.map((c2) => (
          <div
            key={c2.title}
            style={{
              background: c.surface,
              borderRadius: radius.lg,
              padding: 32,
              border: `1px solid ${c.border}`,
              transition: "box-shadow 0.2s",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: radius.md,
                background: c2.color + "18",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                marginBottom: 20,
              }}
            >
              {c2.icon}
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 650, margin: "0 0 10px", color: c.text }}>{c2.title}</h3>
            <p style={{ ...body, fontSize: 15 }}>{c2.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── 5. Testimonials ───────────────────────────────────────────────────
function Testimonials() {
  const quotes = [
    {
      text: "Stackpulse replaced three tools in our pipeline. It\u2019s the only design platform our team opens every day.",
      name: "Sarah Chen",
      role: "Head of Design, Vercel",
    },
    {
      text: "The prototyping speed is unreal. We cut our iteration cycles in half within the first sprint.",
      name: "Marcus Rivera",
      role: "Product Lead, Linear",
    },
    {
      text: "Hand-off used to be painful. Now our engineers just inspect the file and grab the exact code they need.",
      name: "Anya Koval",
      role: "Staff Engineer, Raycast",
    },
  ];

  return (
    <section style={{ background: c.surface, borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}` }}>
      <div style={sectionPadding}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={heading2}>Loved by teams everywhere</h2>
          <p style={{ ...body, marginTop: 12 }}>Don&apos;t just take our word for it.</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {quotes.map((q) => (
            <div
              key={q.name}
              style={{
                background: c.white,
                borderRadius: radius.lg,
                padding: 32,
                border: `1px solid ${c.border}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p style={{ ...body, fontSize: 15, fontStyle: "italic", marginBottom: 24 }}>
                &ldquo;{q.text}&rdquo;
              </p>
              <div>
                <p style={{ fontSize: 15, fontWeight: 650, color: c.text, margin: 0 }}>{q.name}</p>
                <p style={{ fontSize: 13, color: c.textSecondary, margin: "2px 0 0" }}>{q.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 6. Pricing ────────────────────────────────────────────────────────
function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      sub: "For individuals getting started",
      features: ["3 projects", "Unlimited viewers", "Basic prototyping", "Community support"],
      cta: "Get started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "For professionals who need more",
      features: ["Unlimited projects", "Advanced prototyping", "Version history", "Priority support", "Custom fonts"],
      cta: "Start free trial",
      highlighted: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "For teams scaling their workflow",
      features: ["Everything in Pro", "Team libraries", "Branching & merging", "SSO & admin controls", "Dedicated account manager"],
      cta: "Contact sales",
      highlighted: false,
    },
  ];

  return (
    <section style={sectionPadding}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <h2 style={heading2}>Simple, transparent pricing</h2>
        <p style={{ ...body, marginTop: 12 }}>No hidden fees. Cancel anytime.</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          alignItems: "start",
        }}
      >
        {tiers.map((t) => (
          <div
            key={t.name}
            style={{
              background: t.highlighted ? c.text : c.white,
              color: t.highlighted ? c.white : c.text,
              borderRadius: radius.lg,
              padding: 36,
              border: t.highlighted ? "none" : `1px solid ${c.border}`,
              position: "relative",
            }}
          >
            {t.highlighted && (
              <span
                style={{
                  position: "absolute",
                  top: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: c.accent,
                  color: c.white,
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "4px 14px",
                  borderRadius: radius.pill,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Most popular
              </span>
            )}

            <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>{t.name}</h3>
            <p style={{ fontSize: 13, color: t.highlighted ? "rgba(255,255,255,0.6)" : c.textSecondary, margin: "0 0 20px" }}>
              {t.sub}
            </p>

            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 28 }}>
              <span style={{ fontSize: 44, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>{t.price}</span>
              {t.price !== "Free" && (
                <span style={{ fontSize: 15, color: t.highlighted ? "rgba(255,255,255,0.5)" : c.textSecondary }}>/mo</span>
              )}
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
              {t.features.map((f) => (
                <li
                  key={f}
                  style={{
                    fontSize: 14,
                    lineHeight: 1.5,
                    padding: "6px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: t.highlighted ? "rgba(255,255,255,0.85)" : c.textSecondary,
                  }}
                >
                  <span style={{ color: t.highlighted ? c.accent : c.green, fontWeight: 700, fontSize: 14 }}>{"\u2713"}</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              style={{
                width: "100%",
                padding: "12px 0",
                borderRadius: radius.pill,
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                border: t.highlighted ? "none" : `1px solid ${c.border}`,
                background: t.highlighted ? c.accent : c.white,
                color: t.highlighted ? c.white : c.text,
                transition: "background 0.15s",
              }}
            >
              {t.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── 7. CTA Banner ─────────────────────────────────────────────────────
function CtaBanner() {
  return (
    <section
      style={{
        background: c.text,
        color: c.white,
      }}
    >
      <div
        style={{
          ...sectionPadding,
          paddingTop: 80,
          paddingBottom: 80,
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            margin: "0 0 16px",
          }}
        >
          Ready to build something great?
        </h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", margin: "0 0 36px" }}>
          Join thousands of designers and developers shipping faster with Stackpulse.
        </p>
        <button
          style={{
            background: c.accent,
            color: c.white,
            border: "none",
            borderRadius: radius.pill,
            padding: "14px 36px",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Get started for free
        </button>
      </div>
    </section>
  );
}

// ── 8. Footer ─────────────────────────────────────────────────────────
function Footer() {
  const columns: { heading: string; links: string[] }[] = [
    { heading: "Product", links: ["Features", "Pricing", "Changelog", "Integrations"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { heading: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
  ];

  return (
    <footer style={{ borderTop: `1px solid ${c.border}` }}>
      <div
        style={{
          ...sectionPadding,
          paddingTop: 56,
          paddingBottom: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Logo + tagline */}
          <div style={{ maxWidth: 260 }}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10, color: c.text, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 20 }}>{"\u25B2"}</span> Stackpulse
            </div>
            <p style={{ ...body, fontSize: 14 }}>
              Design, prototype, and ship &mdash; all from one beautifully simple platform.
            </p>
          </div>

          {/* Link columns */}
          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
            {columns.map((col) => (
              <div key={col.heading}>
                <p style={{ fontSize: 13, fontWeight: 700, color: c.text, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 14px" }}>
                  {col.heading}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.links.map((l) => (
                    <li key={l} style={{ marginBottom: 10 }}>
                      <a href="#" style={{ textDecoration: "none", fontSize: 14, color: c.textSecondary }}>
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: `1px solid ${c.border}`,
            paddingTop: 24,
            fontSize: 13,
            color: c.textSecondary,
          }}
        >
          &copy; 2026 Stackpulse, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
