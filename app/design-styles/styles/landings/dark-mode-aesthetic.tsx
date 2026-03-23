"use client";

import React, { useState, CSSProperties } from "react";

/* ─── palette ─── */
const c = {
  bg: "#0a0a0f",
  surface: "#12121a",
  surfaceHover: "#1a1a26",
  border: "#1e1e2e",
  borderLight: "#2a2a3d",
  text: "#e4e4ed",
  textMuted: "#8888a4",
  accent: "#7c5cfc",
  accentHover: "#9178ff",
  accentGlow: "rgba(124,92,252,0.25)",
  white: "#ffffff",
  green: "#34d399",
};

/* ─── reusable style factories ─── */
const card = (extra: CSSProperties = {}): CSSProperties => ({
  background: c.surface,
  border: `1px solid ${c.border}`,
  borderRadius: 16,
  padding: "32px 28px",
  ...extra,
});

const btn = (
  primary = true,
  extra: CSSProperties = {}
): CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 28px",
  borderRadius: 10,
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  border: primary ? "none" : `1px solid ${c.borderLight}`,
  background: primary ? c.accent : "transparent",
  color: primary ? c.white : c.text,
  transition: "all .2s",
  ...extra,
});

const sectionPad: CSSProperties = {
  padding: "96px 24px",
  maxWidth: 1160,
  margin: "0 auto",
};

const sectionHeading: CSSProperties = {
  fontSize: 36,
  fontWeight: 700,
  color: c.white,
  textAlign: "center",
  marginBottom: 12,
};

const sectionSub: CSSProperties = {
  fontSize: 16,
  color: c.textMuted,
  textAlign: "center",
  marginBottom: 56,
  maxWidth: 540,
  marginLeft: "auto",
  marginRight: "auto",
  lineHeight: 1.6,
};

/* ─── data ─── */
const navLinks = ["Features", "Pricing", "Docs", "Blog"];
const brands = ["Linear", "Vercel", "Resend", "Raycast", "Supabase"];

const features = [
  {
    icon: "⚡",
    title: "Blazing Fast Deploys",
    desc: "Push to production in under 3 seconds with edge-first infrastructure and zero-config pipelines.",
  },
  {
    icon: "🔒",
    title: "End-to-End Encryption",
    desc: "Every payload is encrypted at rest and in transit with AES-256. No compromises on security.",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    desc: "Track every request, error, and latency spike with built-in observability dashboards.",
  },
];

const testimonials = [
  {
    quote: "Stackpulse cut our deploy time by 80%. The DX is unmatched — our team ships twice as fast now.",
    name: "Lena Park",
    role: "CTO, Arcwave",
  },
  {
    quote: "We migrated from three different tools to Stackpulse. One platform, zero headaches.",
    name: "Marcus Chen",
    role: "Lead Engineer, Novalink",
  },
  {
    quote: "The analytics alone are worth it. We caught a critical regression within minutes of deploying.",
    name: "Sofia Andersen",
    role: "VP Engineering, Blueshift",
  },
];

const pricing = [
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
    cta: "Upgrade to Pro",
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

const footerCols: { heading: string; links: string[] }[] = [
  { heading: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
  { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { heading: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
];

/* ─── component ─── */
export function DarkModeAestheticLanding() {
  const [hovered, setHovered] = useState<string | null>(null);

  const h = (id: string) => ({
    onMouseEnter: () => setHovered(id),
    onMouseLeave: () => setHovered(null),
  });

  return (
    <div
      style={{
        background: c.bg,
        color: c.text,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        minHeight: "100vh",
        lineHeight: 1.6,
      }}
    >
      {/* ─── HEADER ─── */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1160,
          margin: "0 auto",
          padding: "20px 24px",
          borderBottom: `1px solid ${c.border}`,
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 700, color: c.white, letterSpacing: -0.5 }}>
          ▲ Stackpulse
        </div>

        <nav style={{ display: "flex", gap: 32 }}>
          {navLinks.map((l) => (
            <a
              key={l}
              href="#"
              {...h(`nav-${l}`)}
              style={{
                color: hovered === `nav-${l}` ? c.white : c.textMuted,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                transition: "color .2s",
              }}
            >
              {l}
            </a>
          ))}
        </nav>

        <button
          {...h("header-cta")}
          style={btn(true, {
            padding: "9px 22px",
            fontSize: 14,
            background: hovered === "header-cta" ? c.accentHover : c.accent,
          })}
        >
          Sign Up
        </button>
      </header>

      {/* ─── HERO ─── */}
      <section style={{ ...sectionPad, textAlign: "center", paddingTop: 120, paddingBottom: 80 }}>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: c.white,
            lineHeight: 1.1,
            letterSpacing: -2,
            margin: "0 0 20px",
            maxWidth: 720,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Ship faster.{" "}
          <span style={{ color: c.accent }}>Break nothing.</span>
        </h1>
        <p
          style={{
            fontSize: 18,
            color: c.textMuted,
            maxWidth: 520,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Stackpulse is the deployment platform built for speed-obsessed teams.
          Push code, not buttons.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            {...h("hero-primary")}
            style={btn(true, {
              padding: "14px 36px",
              fontSize: 16,
              boxShadow: hovered === "hero-primary" ? `0 0 24px ${c.accentGlow}` : "none",
              background: hovered === "hero-primary" ? c.accentHover : c.accent,
            })}
          >
            Start for Free
          </button>
          <button
            {...h("hero-secondary")}
            style={btn(false, {
              padding: "14px 36px",
              fontSize: 16,
              background: hovered === "hero-secondary" ? c.surfaceHover : "transparent",
            })}
          >
            View Demo
          </button>
        </div>
      </section>

      {/* ─── LOGOS BAR ─── */}
      <section
        style={{
          ...sectionPad,
          paddingTop: 48,
          paddingBottom: 48,
          textAlign: "center",
          borderTop: `1px solid ${c.border}`,
          borderBottom: `1px solid ${c.border}`,
        }}
      >
        <p style={{ fontSize: 13, color: c.textMuted, textTransform: "uppercase", letterSpacing: 2, marginBottom: 28 }}>
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
                fontSize: 18,
                fontWeight: 600,
                color: c.textMuted,
                opacity: 0.6,
                letterSpacing: -0.3,
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section style={sectionPad}>
        <h2 style={sectionHeading}>Everything you need to ship</h2>
        <p style={sectionSub}>
          A single platform for deploys, monitoring, and collaboration — no duct tape required.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              {...h(`feat-${i}`)}
              style={card({
                transition: "border-color .2s, box-shadow .2s",
                borderColor: hovered === `feat-${i}` ? c.borderLight : c.border,
                boxShadow: hovered === `feat-${i}` ? `0 0 32px ${c.accentGlow}` : "none",
              })}
            >
              <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: c.white, marginBottom: 8, marginTop: 0 }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: c.textMuted, lineHeight: 1.7, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ ...sectionPad, background: c.surface }}>
        <h2 style={sectionHeading}>Loved by engineers</h2>
        <p style={sectionSub}>
          Hear from teams who switched to Stackpulse and never looked back.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t, i) => (
            <div key={i} style={card({ background: c.bg })}>
              <p
                style={{
                  fontSize: 15,
                  color: c.text,
                  lineHeight: 1.75,
                  marginTop: 0,
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: c.white }}>{t.name}</div>
                <div style={{ fontSize: 13, color: c.textMuted }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section style={sectionPad}>
        <h2 style={sectionHeading}>Simple, transparent pricing</h2>
        <p style={sectionSub}>Start free. Upgrade when you need more power.</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {pricing.map((tier, i) => (
            <div
              key={i}
              {...h(`price-${i}`)}
              style={card({
                background: tier.highlighted ? c.surface : c.surface,
                border: tier.highlighted ? `2px solid ${c.accent}` : `1px solid ${c.border}`,
                boxShadow: tier.highlighted ? `0 0 48px ${c.accentGlow}` : "none",
                position: "relative",
                overflow: "hidden",
                transition: "border-color .2s",
                borderColor:
                  tier.highlighted
                    ? c.accent
                    : hovered === `price-${i}`
                    ? c.borderLight
                    : c.border,
              })}
            >
              {tier.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    right: -30,
                    background: c.accent,
                    color: c.white,
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 36px",
                    transform: "rotate(45deg)",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Popular
                </div>
              )}
              <h3 style={{ fontSize: 18, fontWeight: 700, color: c.white, margin: "0 0 4px" }}>
                {tier.name}
              </h3>
              <div style={{ fontSize: 40, fontWeight: 800, color: c.white, margin: "12px 0 4px", letterSpacing: -1 }}>
                {tier.price}
                {tier.price !== "Free" && (
                  <span style={{ fontSize: 16, fontWeight: 400, color: c.textMuted }}>/mo</span>
                )}
              </div>
              <p style={{ fontSize: 13, color: c.textMuted, margin: "0 0 28px" }}>{tier.sub}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {tier.features.map((f, fi) => (
                  <li
                    key={fi}
                    style={{
                      fontSize: 14,
                      color: c.text,
                      padding: "7px 0",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span style={{ color: c.green, fontSize: 14 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                {...h(`price-btn-${i}`)}
                style={btn(tier.highlighted, {
                  width: "100%",
                  padding: "13px 0",
                  background: tier.highlighted
                    ? hovered === `price-btn-${i}`
                      ? c.accentHover
                      : c.accent
                    : hovered === `price-btn-${i}`
                    ? c.surfaceHover
                    : "transparent",
                })}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        style={{
          ...sectionPad,
          textAlign: "center",
          background: `linear-gradient(180deg, ${c.bg} 0%, ${c.surface} 100%)`,
          borderTop: `1px solid ${c.border}`,
          borderBottom: `1px solid ${c.border}`,
        }}
      >
        <h2
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: c.white,
            letterSpacing: -1.5,
            marginBottom: 16,
            marginTop: 0,
          }}
        >
          Ready to ship faster?
        </h2>
        <p style={{ fontSize: 17, color: c.textMuted, marginBottom: 36, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
          Join thousands of developers deploying with confidence on Stackpulse.
        </p>
        <button
          {...h("bottom-cta")}
          style={btn(true, {
            padding: "16px 44px",
            fontSize: 16,
            boxShadow: hovered === "bottom-cta" ? `0 0 32px ${c.accentGlow}` : "none",
            background: hovered === "bottom-cta" ? c.accentHover : c.accent,
          })}
        >
          Get Started — It&apos;s Free
        </button>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ ...sectionPad, paddingTop: 64, paddingBottom: 32 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 48,
            marginBottom: 48,
          }}
        >
          <div style={{ maxWidth: 260 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: c.white, marginBottom: 12, letterSpacing: -0.5 }}>
              ▲ Stackpulse
            </div>
            <p style={{ fontSize: 14, color: c.textMuted, lineHeight: 1.7, margin: 0 }}>
              The deployment platform for speed-obsessed teams. Ship fast, stay calm.
            </p>
          </div>

          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
            {footerCols.map((col) => (
              <div key={col.heading}>
                <h4
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: c.white,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    marginBottom: 16,
                    marginTop: 0,
                  }}
                >
                  {col.heading}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.links.map((link) => (
                    <li key={link} style={{ marginBottom: 10 }}>
                      <a
                        href="#"
                        {...h(`footer-${link}`)}
                        style={{
                          color: hovered === `footer-${link}` ? c.white : c.textMuted,
                          textDecoration: "none",
                          fontSize: 14,
                          transition: "color .2s",
                        }}
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
            borderTop: `1px solid ${c.border}`,
            paddingTop: 24,
            textAlign: "center",
            fontSize: 13,
            color: c.textMuted,
          }}
        >
          &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default DarkModeAestheticLanding;
