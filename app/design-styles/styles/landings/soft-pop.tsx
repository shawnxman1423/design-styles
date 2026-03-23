"use client";

import React, { useState, type CSSProperties } from "react";

/* ─── palette ─── */
const P = {
  bg: "#FFF5F9",
  card: "#FFFFFF",
  accent: "#F472B6",
  accentHover: "#EC4899",
  accentLight: "#FDE8F0",
  accentSoft: "#FBBFE0",
  text: "#4A3347",
  textMuted: "#8B7088",
  textLight: "#B8A0B5",
  border: "#F5E0ED",
  highlight: "#F9A8D4",
  shadow: "rgba(244, 114, 182, 0.12)",
  shadowDeep: "rgba(244, 114, 182, 0.2)",
  white: "#FFFFFF",
  gradient: "linear-gradient(135deg, #FBBFE0 0%, #F9A8D4 50%, #F472B6 100%)",
  gradientSoft: "linear-gradient(135deg, #FFF5F9 0%, #FDE8F0 100%)",
};

const R = {
  sm: 14,
  md: 20,
  lg: 28,
  xl: 36,
  pill: 999,
};

/* ─── shared style fragments ─── */
const cardBase: CSSProperties = {
  background: P.card,
  borderRadius: R.lg,
  border: `1.5px solid ${P.border}`,
  boxShadow: `0 4px 24px ${P.shadow}`,
  padding: "36px 28px",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
};

const pillButton = (
  filled: boolean,
  small = false,
): CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: small ? "10px 22px" : "14px 32px",
  fontSize: small ? 14 : 16,
  fontWeight: 600,
  borderRadius: R.pill,
  border: filled ? "none" : `2px solid ${P.accent}`,
  background: filled ? P.gradient : "transparent",
  color: filled ? P.white : P.accent,
  cursor: "pointer",
  transition: "transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease",
  boxShadow: filled ? `0 4px 18px ${P.shadowDeep}` : "none",
});

const sectionPadding: CSSProperties = {
  padding: "96px 24px",
  maxWidth: 1160,
  margin: "0 auto",
};

const sectionHeading: CSSProperties = {
  fontSize: 38,
  fontWeight: 800,
  color: P.text,
  textAlign: "center",
  marginBottom: 12,
  letterSpacing: "-0.02em",
};

const sectionSub: CSSProperties = {
  fontSize: 17,
  color: P.textMuted,
  textAlign: "center",
  maxWidth: 540,
  margin: "0 auto 56px",
  lineHeight: 1.6,
};

/* ─── tiny hover wrapper ─── */
function Hover({
  children,
  style,
  hoverStyle,
}: {
  children: React.ReactNode;
  style: CSSProperties;
  hoverStyle: CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...style, ...(hovered ? hoverStyle : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

function BtnHover({
  children,
  style,
  hoverStyle,
  tag = "button",
}: {
  children: React.ReactNode;
  style: CSSProperties;
  hoverStyle?: CSSProperties;
  tag?: "button" | "a";
}) {
  const [h, setH] = useState(false);
  const Tag = tag as any;
  return (
    <Tag
      style={{ ...style, ...(h ? hoverStyle : {}) }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {children}
    </Tag>
  );
}

/* ================================================================
   COMPONENT
   ================================================================ */
export function SoftPopLanding() {
  return (
    <div
      style={{
        fontFamily:
          "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
        background: P.bg,
        color: P.text,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* ── Header ── */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1160,
          margin: "0 auto",
          padding: "20px 24px",
        }}
      >
        <div style={{ fontSize: 20, fontWeight: 800, color: P.text, letterSpacing: "-0.01em" }}>
          ▲ Stackpulse
        </div>
        <nav
          style={{
            display: "flex",
            gap: 32,
            fontSize: 15,
            fontWeight: 500,
            color: P.textMuted,
          }}
        >
          {["Features", "Pricing", "Docs", "Blog"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
            >
              {l}
            </a>
          ))}
        </nav>
        <BtnHover
          style={pillButton(true, true)}
          hoverStyle={{ transform: "translateY(-1px)", boxShadow: `0 6px 24px ${P.shadowDeep}` }}
        >
          Sign Up
        </BtnHover>
      </header>

      {/* ── Hero ── */}
      <section style={{ ...sectionPadding, textAlign: "center", paddingTop: 72, paddingBottom: 72 }}>
        <h1
          style={{
            fontSize: 62,
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
            color: P.text,
            maxWidth: 720,
            margin: "0 auto 20px",
          }}
        >
          Ship delightful products,{" "}
          <span
            style={{
              background: P.gradient,
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
            color: P.textMuted,
            maxWidth: 520,
            margin: "0 auto 40px",
            lineHeight: 1.65,
          }}
        >
          The modern toolkit that helps your team prototype, build, and launch
          faster — without the overhead.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <BtnHover
            style={pillButton(true)}
            hoverStyle={{ transform: "translateY(-2px)", boxShadow: `0 8px 28px ${P.shadowDeep}` }}
          >
            Get Started Free →
          </BtnHover>
          <BtnHover
            style={pillButton(false)}
            hoverStyle={{ transform: "translateY(-2px)", background: P.accentLight }}
          >
            See a Demo
          </BtnHover>
        </div>
      </section>

      {/* ── Logos bar ── */}
      <section
        style={{
          textAlign: "center",
          padding: "48px 24px",
          borderTop: `1px solid ${P.border}`,
          borderBottom: `1px solid ${P.border}`,
          background: P.gradientSoft,
        }}
      >
        <p style={{ fontSize: 13, fontWeight: 600, color: P.textLight, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          Trusted by 2,000+ makers at
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 48,
            flexWrap: "wrap",
            fontSize: 20,
            fontWeight: 700,
            color: P.textLight,
          }}
        >
          {["Vercel", "Linear", "Raycast", "Resend", "Dub"].map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section style={sectionPadding} id="features">
        <h2 style={sectionHeading}>Everything you need to move fast</h2>
        <p style={sectionSub}>
          A curated set of tools designed with care — so you can focus on what
          matters most.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              icon: "✦",
              title: "Instant Prototyping",
              desc: "Go from idea to interactive prototype in minutes with our drag-and-drop canvas.",
            },
            {
              icon: "◎",
              title: "Real-time Collaboration",
              desc: "Work together seamlessly — cursors, comments, and changes sync in real time.",
            },
            {
              icon: "⬡",
              title: "One-click Deploy",
              desc: "Push to production with a single click. We handle infra, SSL, and CDN for you.",
            },
          ].map((f) => (
            <Hover
              key={f.title}
              style={cardBase}
              hoverStyle={{ transform: "translateY(-4px)", boxShadow: `0 8px 32px ${P.shadowDeep}` }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: R.md,
                  background: P.accentLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  marginBottom: 20,
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 15, color: P.textMuted, lineHeight: 1.65, margin: 0 }}>
                {f.desc}
              </p>
            </Hover>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        style={{
          ...sectionPadding,
          background: P.gradientSoft,
          maxWidth: "100%",
          borderTop: `1px solid ${P.border}`,
          borderBottom: `1px solid ${P.border}`,
        }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <h2 style={sectionHeading}>Loved by builders everywhere</h2>
          <p style={sectionSub}>
            Hear from the people who ship with Stackpulse every day.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                quote:
                  "Stackpulse cut our launch timeline in half. The prototyping tools are unmatched.",
                name: "Amara Chen",
                role: "CTO, Luminary",
              },
              {
                quote:
                  "Finally a tool that feels as polished as the products we build. Absolute game-changer.",
                name: "Jonas Ekberg",
                role: "Lead Designer, Folio",
              },
              {
                quote:
                  "Our team adopted it in a day. Collaboration features make Figma feel clunky.",
                name: "Priya Sharma",
                role: "PM, Arclight",
              },
            ].map((t) => (
              <Hover
                key={t.name}
                style={{ ...cardBase, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                hoverStyle={{ transform: "translateY(-4px)", boxShadow: `0 8px 32px ${P.shadowDeep}` }}
              >
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: P.text,
                    margin: "0 0 28px",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 15, margin: "0 0 2px" }}>{t.name}</p>
                  <p style={{ fontSize: 13, color: P.textMuted, margin: 0 }}>{t.role}</p>
                </div>
              </Hover>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section style={sectionPadding} id="pricing">
        <h2 style={sectionHeading}>Simple, transparent pricing</h2>
        <p style={sectionSub}>
          Start free. Upgrade when you need more power or team seats.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {[
            {
              name: "Starter",
              price: "Free",
              sub: "forever",
              features: [
                "1 project",
                "Basic prototyping",
                "Community support",
                "1 GB storage",
              ],
              highlighted: false,
            },
            {
              name: "Pro",
              price: "$29",
              sub: "/month",
              features: [
                "Unlimited projects",
                "Advanced prototyping",
                "Priority support",
                "50 GB storage",
                "Custom domains",
              ],
              highlighted: true,
            },
            {
              name: "Team",
              price: "$79",
              sub: "/month",
              features: [
                "Everything in Pro",
                "Unlimited seats",
                "SSO & audit logs",
                "200 GB storage",
                "Dedicated account manager",
              ],
              highlighted: false,
            },
          ].map((tier) => (
            <Hover
              key={tier.name}
              style={{
                ...cardBase,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                ...(tier.highlighted
                  ? {
                      border: `2px solid ${P.accent}`,
                      boxShadow: `0 8px 40px ${P.shadowDeep}`,
                      transform: "scale(1.03)",
                    }
                  : {}),
              }}
              hoverStyle={{
                transform: tier.highlighted ? "scale(1.05)" : "translateY(-4px)",
                boxShadow: `0 12px 40px ${P.shadowDeep}`,
              }}
            >
              {tier.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: -13,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: P.gradient,
                    color: P.white,
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "4px 18px",
                    borderRadius: R.pill,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Most Popular
                </div>
              )}
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{tier.name}</h3>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 42, fontWeight: 900, letterSpacing: "-0.03em" }}>
                  {tier.price}
                </span>
                <span style={{ fontSize: 15, color: P.textMuted, marginLeft: 4 }}>{tier.sub}</span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px",
                  flex: 1,
                }}
              >
                {tier.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: 15,
                      color: P.textMuted,
                      padding: "8px 0",
                      borderBottom: `1px solid ${P.border}`,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span style={{ color: P.accent, fontWeight: 700, fontSize: 14 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <BtnHover
                style={{
                  ...pillButton(tier.highlighted),
                  width: "100%",
                  textAlign: "center",
                }}
                hoverStyle={{
                  transform: "translateY(-1px)",
                  boxShadow: tier.highlighted ? `0 6px 24px ${P.shadowDeep}` : "none",
                  background: tier.highlighted ? P.gradient : P.accentLight,
                }}
              >
                {tier.price === "Free" ? "Get Started" : "Start Free Trial"}
              </BtnHover>
            </Hover>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: P.gradient,
          padding: "80px 24px",
          textAlign: "center",
          borderRadius: `${R.xl}px ${R.xl}px 0 0`,
        }}
      >
        <h2
          style={{
            fontSize: 40,
            fontWeight: 900,
            color: P.white,
            maxWidth: 560,
            margin: "0 auto 20px",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          Ready to build something beautiful?
        </h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", marginBottom: 36, lineHeight: 1.6 }}>
          Join thousands of makers who ship faster with Stackpulse.
        </p>
        <BtnHover
          style={{
            ...pillButton(false),
            borderColor: P.white,
            color: P.white,
            fontSize: 17,
            padding: "16px 40px",
          }}
          hoverStyle={{
            background: P.white,
            color: P.accent,
            transform: "translateY(-2px)",
          }}
        >
          Get Started for Free →
        </BtnHover>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          background: P.text,
          color: "rgba(255,255,255,0.6)",
          padding: "64px 24px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 48,
          }}
        >
          {/* brand */}
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: P.white, marginBottom: 12 }}>
              ▲ Stackpulse
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.65, maxWidth: 240, margin: 0 }}>
              The modern toolkit for teams that ship fast and care about craft.
            </p>
          </div>

          {/* link columns */}
          {([
            { title: "Product", links: ["Features", "Pricing", "Changelog", "Integrations"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
          ] as const).map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: P.white,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 16,
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
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 14,
                        transition: "color 0.2s",
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

        <div
          style={{
            maxWidth: 1160,
            margin: "48px auto 0",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            fontSize: 13,
            textAlign: "center",
          }}
        >
          &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
