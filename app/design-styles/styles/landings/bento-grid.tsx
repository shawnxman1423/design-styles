"use client";

import React, { useState, CSSProperties } from "react";

/* ------------------------------------------------------------------ */
/*  Bento Grid Landing – BentoGridLanding                              */
/* ------------------------------------------------------------------ */

const palette = {
  bg: "#0a0a0a",
  surface: "#141414",
  surfaceHover: "#1c1c1c",
  border: "#262626",
  borderLight: "#333",
  text: "#f5f5f5",
  textMuted: "#a3a3a3",
  accent: "#6366f1",
  accentHover: "#818cf8",
  accentSubtle: "rgba(99,102,241,0.12)",
  white: "#fff",
  highlight: "#22c55e",
};

const font =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

/* ---------- shared style helpers ---------- */

const bentoCard = (extra: CSSProperties = {}): CSSProperties => ({
  background: palette.surface,
  border: `1px solid ${palette.border}`,
  borderRadius: 16,
  padding: 32,
  transition: "border-color 0.2s, box-shadow 0.2s",
  ...extra,
});

const sectionWrapper: CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "80px 24px",
};

const sectionTag: CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: 1.5,
  textTransform: "uppercase",
  color: palette.accent,
  marginBottom: 12,
};

const sectionHeading: CSSProperties = {
  fontSize: 36,
  fontWeight: 700,
  color: palette.text,
  marginBottom: 16,
  lineHeight: 1.2,
};

const sectionSub: CSSProperties = {
  fontSize: 17,
  color: palette.textMuted,
  maxWidth: 560,
  margin: "0 auto 48px",
  lineHeight: 1.6,
};

const btnPrimary: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 28px",
  fontSize: 15,
  fontWeight: 600,
  fontFamily: font,
  color: palette.white,
  background: palette.accent,
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  transition: "background 0.2s",
};

const btnOutline: CSSProperties = {
  ...btnPrimary,
  background: "transparent",
  border: `1px solid ${palette.border}`,
  color: palette.text,
};

/* ---------- data ---------- */

const navLinks = ["Features", "Pricing", "Docs", "Blog"];

const brands = ["Vercel", "Stripe", "Linear", "Raycast", "Supabase"];

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Sub-millisecond response times powered by edge infrastructure that scales with your traffic.",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    desc: "End-to-end encryption, SOC 2 compliance, and granular access controls out of the box.",
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    desc: "Live dashboards, custom events, and funnel analysis to understand every user journey.",
  },
];

const testimonials = [
  {
    quote:
      "Stackpulse cut our deploy time from 12 minutes to under 40 seconds. The bento-style dashboard is a joy to use.",
    name: "Ariel Chen",
    role: "CTO, Motionwork",
  },
  {
    quote:
      "We evaluated six platforms. Stackpulse was the only one that felt truly developer-first without sacrificing design.",
    name: "Marcus Webb",
    role: "Lead Engineer, Layerform",
  },
  {
    quote:
      "The analytics alone paid for our subscription in the first week. Visibility we never had before.",
    name: "Priya Sharma",
    role: "Product Lead, Coralbase",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    features: [
      "Up to 3 projects",
      "1 GB storage",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    features: [
      "Unlimited projects",
      "50 GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$79",
    period: "/mo",
    features: [
      "Everything in Pro",
      "500 GB storage",
      "Dedicated support",
      "SSO & SAML",
      "Audit logs",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const footerCols = [
  { title: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Legal", links: ["Privacy", "Terms", "Cookie Policy", "GDPR"] },
];

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */

export function BentoGridLanding() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const hoverProps = (id: string) => ({
    onMouseEnter: () => setHoveredCard(id),
    onMouseLeave: () => setHoveredCard(null),
    style: {
      ...bentoCard(),
      ...(hoveredCard === id
        ? { borderColor: palette.borderLight, boxShadow: `0 0 24px ${palette.accentSubtle}` }
        : {}),
    } as CSSProperties,
  });

  return (
    <div style={{ background: palette.bg, color: palette.text, fontFamily: font, minHeight: "100vh" }}>
      {/* ===== 1. Header ===== */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background: "rgba(10,10,10,0.8)",
          borderBottom: `1px solid ${palette.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: -0.5 }}>
            ▲ Stackpulse
          </span>

          <nav style={{ display: "flex", gap: 32 }}>
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  color: palette.textMuted,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = palette.text)}
                onMouseLeave={(e) => (e.currentTarget.style.color = palette.textMuted)}
              >
                {l}
              </a>
            ))}
          </nav>

          <button style={{ ...btnPrimary, padding: "8px 20px", fontSize: 14 }}>
            Sign Up
          </button>
        </div>
      </header>

      {/* ===== 2. Hero ===== */}
      <section style={{ ...sectionWrapper, textAlign: "center", paddingTop: 100, paddingBottom: 60 }}>
        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -1.5,
            marginBottom: 24,
            background: `linear-gradient(135deg, ${palette.text} 40%, ${palette.accent})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Ship faster with
          <br />
          modular building blocks
        </h1>
        <p style={{ fontSize: 19, color: palette.textMuted, maxWidth: 540, margin: "0 auto 40px", lineHeight: 1.6 }}>
          Stackpulse gives your team composable infrastructure primitives so you can move from idea to production in minutes, not months.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={btnPrimary}>Start Building — Free</button>
          <button style={btnOutline}>View Documentation</button>
        </div>
      </section>

      {/* ===== 3. Logos Bar ===== */}
      <section style={{ ...sectionWrapper, paddingTop: 0, paddingBottom: 40, textAlign: "center" }}>
        <p style={{ fontSize: 13, fontWeight: 500, color: palette.textMuted, letterSpacing: 1, textTransform: "uppercase", marginBottom: 28 }}>
          Trusted by 2,000+ makers at
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
          {brands.map((b) => (
            <span key={b} style={{ fontSize: 18, fontWeight: 700, color: palette.textMuted, opacity: 0.5 }}>
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ===== 4. Features (Bento Grid) ===== */}
      <section id="features" style={{ ...sectionWrapper, textAlign: "center" }}>
        <p style={sectionTag}>Features</p>
        <h2 style={sectionHeading}>Everything you need to scale</h2>
        <p style={sectionSub}>
          Powerful primitives that snap together like building blocks. Mix, match, and compose your perfect stack.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((f) => (
            <div key={f.title} {...hoverProps(`feat-${f.title}`)} style={{ ...hoverProps(`feat-${f.title}`).style, textAlign: "left" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: palette.accentSubtle,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  marginBottom: 20,
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 15, color: palette.textMuted, lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 5. Testimonials ===== */}
      <section style={{ ...sectionWrapper, textAlign: "center" }}>
        <p style={sectionTag}>Testimonials</p>
        <h2 style={sectionHeading}>Loved by builders everywhere</h2>
        <p style={sectionSub}>
          Hear from the teams who trust Stackpulse to power their products every day.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {testimonials.map((t) => (
            <div key={t.name} {...hoverProps(`test-${t.name}`)} style={{ ...hoverProps(`test-${t.name}`).style, textAlign: "left" }}>
              <p style={{ fontSize: 15, color: palette.textMuted, lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600 }}>{t.name}</p>
                <p style={{ fontSize: 13, color: palette.textMuted }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 6. Pricing ===== */}
      <section id="pricing" style={{ ...sectionWrapper, textAlign: "center" }}>
        <p style={sectionTag}>Pricing</p>
        <h2 style={sectionHeading}>Simple, transparent pricing</h2>
        <p style={sectionSub}>
          Start for free, upgrade when you are ready. No hidden fees, no surprises.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {pricingTiers.map((tier) => {
            const isHl = tier.highlighted;
            return (
              <div
                key={tier.name}
                {...hoverProps(`price-${tier.name}`)}
                style={{
                  ...hoverProps(`price-${tier.name}`).style,
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  ...(isHl
                    ? {
                        border: `2px solid ${palette.accent}`,
                        boxShadow: `0 0 40px ${palette.accentSubtle}`,
                        position: "relative" as const,
                      }
                    : {}),
                }}
              >
                {isHl && (
                  <span
                    style={{
                      position: "absolute",
                      top: -13,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: palette.accent,
                      color: palette.white,
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "4px 14px",
                      borderRadius: 20,
                      letterSpacing: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    Most Popular
                  </span>
                )}
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{tier.name}</h3>
                <div style={{ marginBottom: 24 }}>
                  <span style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>{tier.price}</span>
                  {tier.period && (
                    <span style={{ fontSize: 15, color: palette.textMuted }}>{tier.period}</span>
                  )}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", flex: 1 }}>
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        fontSize: 14,
                        color: palette.textMuted,
                        padding: "8px 0",
                        borderBottom: `1px solid ${palette.border}`,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <span style={{ color: palette.highlight, fontSize: 15 }}>&#10003;</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    ...(isHl ? btnPrimary : btnOutline),
                    width: "100%",
                  }}
                >
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== 7. CTA ===== */}
      <section style={sectionWrapper}>
        <div
          style={{
            ...bentoCard({
              textAlign: "center" as const,
              padding: "64px 32px",
              background: `linear-gradient(135deg, ${palette.surface} 0%, rgba(99,102,241,0.08) 100%)`,
              border: `1px solid ${palette.accent}40`,
            }),
          }}
        >
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: -0.5, marginBottom: 16 }}>
            Ready to build something great?
          </h2>
          <p style={{ fontSize: 17, color: palette.textMuted, maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Join thousands of developers shipping faster with Stackpulse. Free to start, no credit card required.
          </p>
          <button style={{ ...btnPrimary, padding: "14px 36px", fontSize: 16 }}>
            Get Started for Free
          </button>
        </div>
      </section>

      {/* ===== 8. Footer ===== */}
      <footer style={{ borderTop: `1px solid ${palette.border}` }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "60px 24px 40px",
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(3, 1fr)",
            gap: 48,
          }}
        >
          {/* brand col */}
          <div>
            <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>▲ Stackpulse</p>
            <p style={{ fontSize: 14, color: palette.textMuted, lineHeight: 1.6, maxWidth: 240 }}>
              Composable infrastructure for modern teams. Build, ship, and scale without limits.
            </p>
          </div>

          {/* link cols */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <p style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16, color: palette.text }}>
                {col.title}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{ color: palette.textMuted, textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = palette.text)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = palette.textMuted)}
                    >
                      {link}
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
            maxWidth: 1200,
            margin: "0 auto",
            padding: "20px 24px",
            borderTop: `1px solid ${palette.border}`,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: 13, color: palette.textMuted }}>
            &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
