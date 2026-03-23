"use client";

import React, { useState } from "react";

/* ─── colour tokens (GitHub-esque dark palette) ─── */
const c = {
  bg: "#0d1117",
  surface: "#161b22",
  surfaceHover: "#1c2128",
  border: "#30363d",
  borderHighlight: "#58a6ff",
  text: "#c9d1d9",
  textMuted: "#8b949e",
  textHeading: "#f0f6fc",
  accent: "#58a6ff",
  accentGreen: "#3fb950",
  accentPurple: "#bc8cff",
  btnPrimary: "#238636",
  btnPrimaryHover: "#2ea043",
  btnSecondary: "#21262d",
  btnSecondaryHover: "#30363d",
  white: "#ffffff",
};

/* ─── shared inline-style helpers ─── */
const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 24px",
  width: "100%",
};

const sectionPadding: React.CSSProperties = {
  padding: "80px 0",
};

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: 32,
  fontWeight: 700,
  color: c.textHeading,
  textAlign: "center",
  marginBottom: 48,
};

const btnBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 24px",
  borderRadius: 6,
  fontSize: 16,
  fontWeight: 600,
  cursor: "pointer",
  border: "1px solid transparent",
  transition: "background .15s, border-color .15s",
};

/* ─── sub-components ─── */

function Header() {
  const links = ["Features", "Pricing", "Docs", "Blog"];
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(13,17,23,.85)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${c.border}`,
      }}
    >
      <div
        style={{
          ...container,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* logo */}
        <span style={{ fontSize: 18, fontWeight: 700, color: c.textHeading, letterSpacing: -0.4 }}>
          ▲ Stackpulse
        </span>

        {/* nav */}
        <nav style={{ display: "flex", gap: 28 }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ color: c.textMuted, fontSize: 14, fontWeight: 500, textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = c.textHeading)}
              onMouseLeave={(e) => (e.currentTarget.style.color = c.textMuted)}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* sign-up */}
        <button
          style={{
            ...btnBase,
            background: c.btnPrimary,
            color: c.white,
            fontSize: 14,
            padding: "8px 16px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = c.btnPrimaryHover)}
          onMouseLeave={(e) => (e.currentTarget.style.background = c.btnPrimary)}
        >
          Sign up
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      style={{
        ...sectionPadding,
        paddingTop: 100,
        paddingBottom: 100,
        textAlign: "center",
        background: `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(88,166,255,.12), transparent)`,
      }}
    >
      <div style={container}>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            color: c.textHeading,
            maxWidth: 800,
            margin: "0 auto 24px",
            letterSpacing: -1.5,
          }}
        >
          Ship faster.{" "}
          <span style={{ color: c.accent }}>Build&nbsp;better.</span>
        </h1>

        <p
          style={{
            fontSize: 20,
            lineHeight: 1.6,
            color: c.textMuted,
            maxWidth: 580,
            margin: "0 auto 40px",
          }}
        >
          Stackpulse gives your team the observability and deployment
          pipeline to move at startup speed — without the chaos.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            style={{ ...btnBase, background: c.btnPrimary, color: c.white }}
            onMouseEnter={(e) => (e.currentTarget.style.background = c.btnPrimaryHover)}
            onMouseLeave={(e) => (e.currentTarget.style.background = c.btnPrimary)}
          >
            Get started free
          </button>
          <button
            style={{
              ...btnBase,
              background: c.btnSecondary,
              color: c.text,
              border: `1px solid ${c.border}`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = c.btnSecondaryHover)}
            onMouseLeave={(e) => (e.currentTarget.style.background = c.btnSecondary)}
          >
            View demo
          </button>
        </div>
      </div>
    </section>
  );
}

function LogosBar() {
  const brands = ["Vercel", "Stripe", "Linear", "Resend", "Supabase"];
  return (
    <section style={{ padding: "48px 0", borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}` }}>
      <div style={{ ...container, textAlign: "center" }}>
        <p style={{ fontSize: 14, color: c.textMuted, marginBottom: 24, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 500 }}>
          Trusted by 2,000+ makers at
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", alignItems: "center" }}>
          {brands.map((b) => (
            <span key={b} style={{ fontSize: 20, fontWeight: 700, color: c.textMuted, opacity: 0.55 }}>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const cards = [
    {
      icon: "⚡",
      title: "Instant Deploys",
      desc: "Push to main and your changes go live in seconds with zero-downtime rollouts baked in.",
    },
    {
      icon: "📊",
      title: "Live Observability",
      desc: "Real-time logs, traces, and metrics unified in a single dashboard — no context-switching.",
    },
    {
      icon: "🔒",
      title: "Secure by Default",
      desc: "SOC 2 compliant infrastructure with secrets management and role-based access out of the box.",
    },
  ];

  return (
    <section id="features" style={sectionPadding}>
      <div style={container}>
        <h2 style={sectionHeadingStyle}>Everything you need to ship</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              style={{
                background: c.surface,
                border: `1px solid ${c.border}`,
                borderRadius: 12,
                padding: 32,
                transition: "border-color .2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = c.borderHighlight)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = c.border)}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{card.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: c.textHeading, marginBottom: 12 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: c.textMuted }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      text: "Stackpulse cut our deploy time from 20 minutes to under 30 seconds. It feels like cheating.",
      name: "Sarah Chen",
      role: "CTO, NovaBuild",
    },
    {
      text: "The observability tooling alone is worth it. We caught a production regression before any customer noticed.",
      name: "Marcus Rivera",
      role: "Staff Engineer, Optic",
    },
    {
      text: "We migrated our entire CI/CD in a weekend. The DX is unmatched.",
      name: "Priya Kapoor",
      role: "Founding Engineer, ArcLabs",
    },
  ];

  return (
    <section style={{ ...sectionPadding, background: c.surface }}>
      <div style={container}>
        <h2 style={sectionHeadingStyle}>Loved by developers</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {quotes.map((q) => (
            <div
              key={q.name}
              style={{
                background: c.bg,
                border: `1px solid ${c.border}`,
                borderRadius: 12,
                padding: 32,
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: c.text,
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{q.text}&rdquo;
              </p>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: c.textHeading }}>{q.name}</p>
                <p style={{ fontSize: 13, color: c.textMuted }}>{q.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      sub: "For side projects",
      features: ["1 team member", "3 projects", "Community support", "500 build minutes/mo"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "For growing teams",
      features: ["5 team members", "Unlimited projects", "Priority support", "5,000 build minutes/mo", "Custom domains"],
      highlight: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "For scaling orgs",
      features: ["Unlimited members", "Unlimited projects", "Dedicated support", "Unlimited build minutes", "SSO & audit logs", "SLA guarantee"],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" style={sectionPadding}>
      <div style={container}>
        <h2 style={sectionHeadingStyle}>Simple, transparent pricing</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {tiers.map((t) => (
            <div
              key={t.name}
              style={{
                background: t.highlight ? c.surface : c.bg,
                border: `1px solid ${t.highlight ? c.borderHighlight : c.border}`,
                borderRadius: 12,
                padding: 32,
                position: "relative",
                boxShadow: t.highlight ? `0 0 40px rgba(88,166,255,.1)` : "none",
              }}
            >
              {t.highlight && (
                <span
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: c.accent,
                    color: c.bg,
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "4px 14px",
                    borderRadius: 999,
                    textTransform: "uppercase",
                    letterSpacing: 0.8,
                  }}
                >
                  Most popular
                </span>
              )}

              <h3 style={{ fontSize: 20, fontWeight: 600, color: c.textHeading, marginBottom: 4 }}>
                {t.name}
              </h3>
              <p style={{ fontSize: 13, color: c.textMuted, marginBottom: 16 }}>{t.sub}</p>

              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 48, fontWeight: 800, color: c.textHeading }}>
                  {t.price}
                </span>
                {t.price !== "Free" && (
                  <span style={{ fontSize: 16, color: c.textMuted }}>/mo</span>
                )}
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                {t.features.map((f) => (
                  <li key={f} style={{ fontSize: 14, color: c.text, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: c.accentGreen, fontSize: 16 }}>&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  ...btnBase,
                  width: "100%",
                  background: t.highlight ? c.btnPrimary : c.btnSecondary,
                  color: t.highlight ? c.white : c.text,
                  border: t.highlight ? "none" : `1px solid ${c.border}`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = t.highlight ? c.btnPrimaryHover : c.btnSecondaryHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = t.highlight ? c.btnPrimary : c.btnSecondary)
                }
              >
                {t.price === "Free" ? "Get started" : "Subscribe"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section
      style={{
        ...sectionPadding,
        background: `linear-gradient(170deg, rgba(88,166,255,.08) 0%, rgba(188,140,255,.08) 100%)`,
        borderTop: `1px solid ${c.border}`,
        borderBottom: `1px solid ${c.border}`,
        textAlign: "center",
      }}
    >
      <div style={container}>
        <h2
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: c.textHeading,
            marginBottom: 24,
            letterSpacing: -0.8,
          }}
        >
          Ready to ship with confidence?
        </h2>
        <button
          style={{ ...btnBase, background: c.btnPrimary, color: c.white, padding: "14px 32px", fontSize: 18 }}
          onMouseEnter={(e) => (e.currentTarget.style.background = c.btnPrimaryHover)}
          onMouseLeave={(e) => (e.currentTarget.style.background = c.btnPrimary)}
        >
          Start building for free
        </button>
      </div>
    </section>
  );
}

function Footer() {
  const columns: { heading: string; links: string[] }[] = [
    { heading: "Product", links: ["Features", "Pricing", "Changelog", "Integrations"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { heading: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
  ];

  return (
    <footer style={{ padding: "64px 0 32px", background: c.bg }}>
      <div style={container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* left: logo + tagline */}
          <div style={{ maxWidth: 260 }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: c.textHeading }}>▲ Stackpulse</span>
            <p style={{ fontSize: 14, color: c.textMuted, marginTop: 12, lineHeight: 1.6 }}>
              The modern deployment platform for teams that move fast and ship often.
            </p>
          </div>

          {/* right: link columns */}
          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
            {columns.map((col) => (
              <div key={col.heading}>
                <p style={{ fontSize: 13, fontWeight: 600, color: c.textHeading, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>
                  {col.heading}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        style={{ color: c.textMuted, fontSize: 14, textDecoration: "none" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = c.textHeading)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = c.textMuted)}
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

        {/* copyright */}
        <div
          style={{
            borderTop: `1px solid ${c.border}`,
            paddingTop: 24,
            textAlign: "center",
            fontSize: 13,
            color: c.textMuted,
          }}
        >
          &copy; {new Date().getFullYear()} Stackpulse, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─── main export ─── */

export function GitHubLanding() {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        background: c.bg,
        color: c.text,
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
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

export default GitHubLanding;
