"use client";

import React, { useState } from "react";

const colors = {
  bg: "#d8d0c8",
  surface: "#e8e0d8",
  surfaceLight: "#f0ebe5",
  surfaceDark: "#c8c0b8",
  border: "#b0a898",
  borderDark: "#988878",
  text: "#3a3028",
  textMuted: "#6a6058",
  accent: "#4a7c5e",
  accentDark: "#3a6248",
  accentLight: "#5a9470",
  highlight: "#c87830",
  highlightDark: "#a86020",
  white: "#faf8f5",
  shadow: "rgba(0,0,0,0.25)",
  innerLight: "rgba(255,255,255,0.5)",
  innerDark: "rgba(0,0,0,0.15)",
};

function skeuBtn(
  bgTop: string,
  bgBottom: string,
  borderColor: string,
  textColor: string,
  extra: React.CSSProperties = {}
): React.CSSProperties {
  return {
    display: "inline-block",
    padding: "10px 22px",
    fontSize: 14,
    fontWeight: 600,
    color: textColor,
    background: `linear-gradient(to bottom, ${bgTop}, ${bgBottom})`,
    border: `1px solid ${borderColor}`,
    borderRadius: 6,
    boxShadow: `0 2px 4px ${colors.shadow}, inset 0 1px 0 ${colors.innerLight}`,
    cursor: "pointer",
    textDecoration: "none",
    textShadow: bgTop === colors.white ? "none" : "0 1px 1px rgba(0,0,0,0.3)",
    letterSpacing: 0.3,
    transition: "all 0.15s ease",
    ...extra,
  };
}

function skeuCard(extra: React.CSSProperties = {}): React.CSSProperties {
  return {
    background: `linear-gradient(to bottom, ${colors.surfaceLight}, ${colors.surface})`,
    border: `1px solid ${colors.border}`,
    borderRadius: 10,
    boxShadow: `0 4px 12px ${colors.shadow}, inset 0 1px 0 ${colors.innerLight}, inset 0 -1px 0 ${colors.innerDark}`,
    padding: 28,
    ...extra,
  };
}

function sectionTitle(extra: React.CSSProperties = {}): React.CSSProperties {
  return {
    fontSize: 32,
    fontWeight: 700,
    color: colors.text,
    textAlign: "center" as const,
    marginBottom: 8,
    textShadow: "0 1px 0 rgba(255,255,255,0.6)",
    ...extra,
  };
}

function sectionSub(extra: React.CSSProperties = {}): React.CSSProperties {
  return {
    fontSize: 16,
    color: colors.textMuted,
    textAlign: "center" as const,
    marginBottom: 48,
    ...extra,
  };
}

export function SkeuomorphismLanding() {
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);

  return (
    <div
      style={{
        fontFamily:
          "'Lucida Grande', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: colors.text,
        background: `linear-gradient(180deg, ${colors.bg} 0%, #cec6be 100%)`,
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* ====== HEADER ====== */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          height: 64,
          background: `linear-gradient(to bottom, ${colors.surfaceLight}, ${colors.surface})`,
          borderBottom: `1px solid ${colors.border}`,
          boxShadow: `0 2px 6px ${colors.shadow}, inset 0 1px 0 rgba(255,255,255,0.7)`,
          position: "sticky" as const,
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: colors.text,
            textShadow: "0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          ▲ Stackpulse
        </div>
        <nav style={{ display: "flex", gap: 32 }}>
          {["Features", "Testimonials", "Pricing", "Docs"].map((l, i) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onMouseEnter={() => setHoveredNav(i)}
              onMouseLeave={() => setHoveredNav(null)}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: hoveredNav === i ? colors.accent : colors.textMuted,
                textDecoration: "none",
                textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                transition: "color 0.2s",
              }}
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#signup"
          style={skeuBtn(
            colors.accentLight,
            colors.accentDark,
            colors.accentDark,
            colors.white,
            { fontSize: 13, padding: "8px 18px" }
          )}
        >
          Sign Up
        </a>
      </header>

      {/* ====== HERO ====== */}
      <section
        style={{
          textAlign: "center",
          padding: "96px 24px 72px",
          maxWidth: 760,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: 50,
            fontWeight: 800,
            lineHeight: 1.15,
            color: colors.text,
            marginBottom: 20,
            textShadow: "0 2px 0 rgba(255,255,255,0.5)",
          }}
        >
          Ship faster with
          <br />
          real-time analytics
        </h1>
        <p
          style={{
            fontSize: 18,
            color: colors.textMuted,
            maxWidth: 520,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          Stackpulse gives your team instant visibility into every deploy,
          metric, and incident — so you can focus on building, not guessing.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <a
            href="#get-started"
            style={skeuBtn(
              colors.accentLight,
              colors.accentDark,
              colors.accentDark,
              colors.white,
              { padding: "14px 32px", fontSize: 16, borderRadius: 8 }
            )}
          >
            Get Started Free
          </a>
          <a
            href="#demo"
            style={skeuBtn(
              colors.white,
              colors.surfaceDark,
              colors.border,
              colors.text,
              { padding: "14px 32px", fontSize: 16, borderRadius: 8, textShadow: "none" }
            )}
          >
            Book a Demo
          </a>
        </div>
      </section>

      {/* ====== LOGOS BAR ====== */}
      <section style={{ padding: "40px 24px 56px", textAlign: "center" }}>
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: "uppercase" as const,
            letterSpacing: 1.5,
            marginBottom: 28,
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
            flexWrap: "wrap" as const,
          }}
        >
          {["Vercel", "Stripe", "Linear", "Raycast", "Supabase"].map((b) => (
            <span
              key={b}
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: colors.borderDark,
                letterSpacing: 0.5,
                textShadow: "0 1px 0 rgba(255,255,255,0.4)",
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ====== FEATURES ====== */}
      <section
        id="features"
        style={{ padding: "72px 24px", maxWidth: 1040, margin: "0 auto" }}
      >
        <h2 style={sectionTitle()}>Everything you need to ship with confidence</h2>
        <p style={sectionSub()}>
          Powerful tools designed around the way modern teams actually work.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              icon: "⚡",
              title: "Real-time Dashboards",
              desc: "See every metric as it happens. Build custom dashboards with drag-and-drop widgets and live data streams.",
            },
            {
              icon: "🔔",
              title: "Smart Alerts",
              desc: "Get notified before users do. Anomaly detection routes the right alert to the right person every time.",
            },
            {
              icon: "🔗",
              title: "Deep Integrations",
              desc: "Connect your entire stack in minutes. Native integrations with GitHub, Slack, PagerDuty, and 50+ more.",
            },
          ].map((f) => (
            <div key={f.title} style={skeuCard()}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  background: `linear-gradient(to bottom, ${colors.white}, ${colors.surfaceDark})`,
                  border: `1px solid ${colors.border}`,
                  boxShadow: `inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px ${colors.shadow}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  marginBottom: 18,
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 8,
                  textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: colors.textMuted, lineHeight: 1.65 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section
        id="testimonials"
        style={{ padding: "72px 24px", maxWidth: 1040, margin: "0 auto" }}
      >
        <h2 style={sectionTitle()}>Loved by teams everywhere</h2>
        <p style={sectionSub()}>
          Hear what our customers have to say about Stackpulse.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              quote:
                "Stackpulse cut our incident response time in half. The dashboards are intuitive and the alerts actually matter.",
              name: "Sarah Chen",
              role: "VP of Engineering, Driftly",
            },
            {
              quote:
                "We tried four observability tools before landing on Stackpulse. Nothing else comes close for developer experience.",
              name: "Marcus Rivera",
              role: "CTO, Layerform",
            },
            {
              quote:
                "The integrations alone saved us 10 hours a week. Our on-call engineers finally sleep through the night.",
              name: "Aisha Patel",
              role: "Lead SRE, Copperhq",
            },
          ].map((t) => (
            <div
              key={t.name}
              style={skeuCard({
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              })}
            >
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: colors.text,
                  fontStyle: "italic",
                  marginBottom: 24,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                  }}
                >
                  {t.name}
                </div>
                <div style={{ fontSize: 13, color: colors.textMuted }}>
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== PRICING ====== */}
      <section
        id="pricing"
        style={{ padding: "72px 24px", maxWidth: 1040, margin: "0 auto" }}
      >
        <h2 style={sectionTitle()}>Simple, transparent pricing</h2>
        <p style={sectionSub()}>
          Start free. Upgrade when you&rsquo;re ready. No surprises.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {[
            {
              tier: "Starter",
              price: "Free",
              sub: "For individuals and small projects",
              features: [
                "Up to 3 dashboards",
                "1,000 events / day",
                "Email alerts",
                "Community support",
                "7-day data retention",
              ],
              highlight: false,
            },
            {
              tier: "Pro",
              price: "$29",
              sub: "For growing teams who need more",
              features: [
                "Unlimited dashboards",
                "100,000 events / day",
                "Slack & PagerDuty alerts",
                "Priority support",
                "90-day data retention",
                "Custom integrations",
              ],
              highlight: true,
            },
            {
              tier: "Team",
              price: "$79",
              sub: "For organizations at scale",
              features: [
                "Everything in Pro",
                "Unlimited events",
                "SSO & SAML",
                "Dedicated account manager",
                "1-year data retention",
                "SLA guarantee",
                "Audit logs",
              ],
              highlight: false,
            },
          ].map((p) => (
            <div
              key={p.tier}
              style={skeuCard({
                border: p.highlight
                  ? `2px solid ${colors.highlight}`
                  : `1px solid ${colors.border}`,
                position: "relative",
                transform: p.highlight ? "scale(1.03)" : "none",
                boxShadow: p.highlight
                  ? `0 8px 24px ${colors.shadow}, inset 0 1px 0 ${colors.innerLight}, inset 0 -1px 0 ${colors.innerDark}`
                  : `0 4px 12px ${colors.shadow}, inset 0 1px 0 ${colors.innerLight}, inset 0 -1px 0 ${colors.innerDark}`,
              })}
            >
              {p.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -13,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: `linear-gradient(to bottom, ${colors.highlight}, ${colors.highlightDark})`,
                    color: colors.white,
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 14px",
                    borderRadius: 10,
                    textTransform: "uppercase" as const,
                    letterSpacing: 1,
                    boxShadow: `0 2px 4px ${colors.shadow}`,
                    textShadow: "0 1px 1px rgba(0,0,0,0.3)",
                  }}
                >
                  Most Popular
                </div>
              )}
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 4,
                  textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                {p.tier}
              </div>
              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 36, fontWeight: 800 }}>{p.price}</span>
                {p.price !== "Free" && (
                  <span style={{ fontSize: 14, color: colors.textMuted }}>
                    {" "}
                    / mo
                  </span>
                )}
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: colors.textMuted,
                  marginBottom: 24,
                }}
              >
                {p.sub}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 28px",
                }}
              >
                {p.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: 14,
                      color: colors.text,
                      padding: "6px 0",
                      borderBottom: `1px solid ${colors.border}`,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: colors.accent, fontWeight: 700 }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#signup"
                style={skeuBtn(
                  p.highlight ? colors.highlight : colors.white,
                  p.highlight ? colors.highlightDark : colors.surfaceDark,
                  p.highlight ? colors.highlightDark : colors.border,
                  p.highlight ? colors.white : colors.text,
                  {
                    display: "block",
                    textAlign: "center",
                    padding: "12px 0",
                    fontSize: 15,
                    textShadow: p.highlight
                      ? "0 1px 1px rgba(0,0,0,0.3)"
                      : "none",
                  }
                )}
              >
                {p.price === "Free" ? "Get Started" : "Subscribe"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section
        style={{
          margin: "48px 24px",
          maxWidth: 1040,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 14,
          padding: "64px 24px",
          textAlign: "center",
          background: `linear-gradient(to bottom, ${colors.surfaceLight}, ${colors.surface})`,
          border: `1px solid ${colors.border}`,
          boxShadow: `0 6px 20px ${colors.shadow}, inset 0 1px 0 ${colors.innerLight}, inset 0 -1px 0 ${colors.innerDark}`,
        }}
      >
        <h2
          style={{
            fontSize: 34,
            fontWeight: 800,
            marginBottom: 16,
            textShadow: "0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          Ready to see the difference?
        </h2>
        <p
          style={{
            fontSize: 16,
            color: colors.textMuted,
            marginBottom: 32,
            maxWidth: 480,
            margin: "0 auto 32px",
          }}
        >
          Join thousands of teams already shipping with confidence.
        </p>
        <a
          href="#get-started"
          style={skeuBtn(
            colors.accentLight,
            colors.accentDark,
            colors.accentDark,
            colors.white,
            { padding: "16px 40px", fontSize: 16, borderRadius: 8 }
          )}
        >
          Start for Free
        </a>
      </section>

      {/* ====== FOOTER ====== */}
      <footer
        style={{
          marginTop: 48,
          padding: "48px 48px 24px",
          background: `linear-gradient(to bottom, ${colors.surfaceDark}, ${colors.bg})`,
          borderTop: `1px solid ${colors.border}`,
          boxShadow: `inset 0 1px 0 ${colors.innerDark}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap" as const,
            gap: 40,
            maxWidth: 1040,
            margin: "0 auto",
          }}
        >
          <div style={{ maxWidth: 240 }}>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 8,
                textShadow: "0 1px 0 rgba(255,255,255,0.4)",
              }}
            >
              ▲ Stackpulse
            </div>
            <p style={{ fontSize: 13, color: colors.textMuted, lineHeight: 1.6 }}>
              Real-time analytics and incident management for modern engineering
              teams.
            </p>
          </div>
          {[
            {
              heading: "Product",
              links: ["Features", "Pricing", "Changelog", "Docs"],
            },
            {
              heading: "Company",
              links: ["About", "Blog", "Careers", "Contact"],
            },
            {
              heading: "Legal",
              links: ["Privacy", "Terms", "Security", "DPA"],
            },
          ].map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: 1.2,
                  color: colors.textMuted,
                  marginBottom: 14,
                }}
              >
                {col.heading}
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    style={{
                      fontSize: 13,
                      color: colors.textMuted,
                      textDecoration: "none",
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            maxWidth: 1040,
            margin: "40px auto 0",
            paddingTop: 20,
            borderTop: `1px solid ${colors.border}`,
            fontSize: 12,
            color: colors.textMuted,
            textAlign: "center",
          }}
        >
          &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
