"use client";

import React, { CSSProperties } from "react";

const border = "3px solid #000";
const shadow = "4px 4px 0px #000";
const shadowLg = "6px 6px 0px #000";
const fontMono = "'Courier New', Courier, monospace";
const fontSans = "'Arial Black', 'Helvetica Neue', Arial, sans-serif";

const colors = {
  bg: "#FFFDF5",
  yellow: "#FFE156",
  pink: "#FF6B9D",
  blue: "#4ECDC4",
  purple: "#C3A6FF",
  orange: "#FF8A5C",
  green: "#A8E6CF",
  dark: "#1A1A2E",
  white: "#FFFFFF",
};

const baseButton = (
  bg: string,
  large?: boolean
): CSSProperties => ({
  display: "inline-block",
  padding: large ? "16px 36px" : "12px 24px",
  fontSize: large ? "18px" : "16px",
  fontWeight: 900,
  fontFamily: fontSans,
  color: "#000",
  backgroundColor: bg,
  border,
  borderRadius: 0,
  boxShadow: shadow,
  cursor: "pointer",
  textDecoration: "none",
  transition: "transform 0.1s, box-shadow 0.1s",
  boxSizing: "border-box" as const,
});

const cardStyle = (bg: string): CSSProperties => ({
  backgroundColor: bg,
  border,
  borderRadius: 0,
  boxShadow: shadowLg,
  padding: 32,
  boxSizing: "border-box" as const,
});

const sectionPadding: CSSProperties = {
  padding: "80px 24px",
  maxWidth: 1200,
  margin: "0 auto",
  boxSizing: "border-box" as const,
  width: "100%",
};

const sectionHeading: CSSProperties = {
  fontSize: "clamp(28px, 4vw, 42px)",
  fontWeight: 900,
  fontFamily: fontSans,
  color: "#000",
  textAlign: "center",
  marginBottom: 16,
  textTransform: "uppercase",
  letterSpacing: "-1px",
};

const sectionSub: CSSProperties = {
  fontSize: 18,
  fontFamily: fontMono,
  color: "#333",
  textAlign: "center",
  marginBottom: 48,
  maxWidth: 600,
  marginLeft: "auto",
  marginRight: "auto",
};

export function NeobrutalismLanding() {
  return (
    <div
      style={{
        backgroundColor: colors.bg,
        color: "#000",
        fontFamily: fontSans,
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        borderRadius: 0,
      }}
    >
      {/* ============ HEADER ============ */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          height: 64,
          borderBottom: border,
          backgroundColor: colors.white,
          position: "sticky",
          top: 0,
          zIndex: 100,
          flexWrap: "wrap",
          gap: 12,
          boxSizing: "border-box" as const,
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 900,
            fontFamily: fontSans,
            letterSpacing: "-1px",
            whiteSpace: "nowrap",
          }}
        >
          &#9650; Stackpulse
        </span>

        <nav style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          {["Features", "Pricing", "Docs", "Blog"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: 700,
                fontSize: 15,
                fontFamily: fontMono,
                paddingBottom: 2,
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        <button style={{ ...baseButton(colors.yellow), padding: "8px 20px" }}>
          Sign Up
        </button>
      </header>

      {/* ============ HERO ============ */}
      <section
        style={{
          ...sectionPadding,
          padding: "100px 24px 80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            backgroundColor: colors.pink,
            border,
            padding: "6px 18px",
            fontFamily: fontMono,
            fontSize: 14,
            fontWeight: 700,
            marginBottom: 28,
            boxShadow: "3px 3px 0px #000",
            borderRadius: 0,
          }}
        >
          NOW IN PUBLIC BETA
        </div>

        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-3px",
            margin: "0 auto 24px",
            maxWidth: 900,
            textTransform: "uppercase",
            borderRadius: 0,
          }}
        >
          Ship products
          <br />
          <span
            style={{
              backgroundColor: colors.yellow,
              border,
              padding: "0 12px",
              display: "inline-block",
              transform: "rotate(-1deg)",
              boxShadow: shadow,
              borderRadius: 0,
            }}
          >
            that slap.
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 22px)",
            fontFamily: fontMono,
            color: "#444",
            maxWidth: 600,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          The developer platform that turns your wildest ideas into
          production-ready apps. No fluff, just build.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button style={baseButton(colors.yellow, true)}>
            Get Started Free &rarr;
          </button>
          <button style={baseButton(colors.white, true)}>
            Watch Demo &#9654;
          </button>
        </div>
      </section>

      {/* ============ LOGOS BAR ============ */}
      <section
        style={{
          borderTop: border,
          borderBottom: border,
          backgroundColor: colors.white,
          padding: "40px 24px",
          textAlign: "center",
          width: "100%",
          boxSizing: "border-box" as const,
        }}
      >
        <p
          style={{
            fontFamily: fontMono,
            fontSize: 13,
            color: "#666",
            marginBottom: 24,
            textTransform: "uppercase",
            letterSpacing: 2,
            fontWeight: 700,
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
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {["Vercel", "Stripe", "Linear", "Figma", "Notion"].map((brand) => (
            <span
              key={brand}
              style={{
                fontSize: 22,
                fontWeight: 900,
                fontFamily: fontSans,
                color: "#999",
                letterSpacing: "-1px",
                textTransform: "uppercase",
              }}
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section id="features" style={sectionPadding}>
        <h2 style={sectionHeading}>Built Different</h2>
        <p style={sectionSub}>
          Everything you need to go from zero to launch at warp speed.
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
              bg: colors.yellow,
              icon: "\u26A1",
              title: "Blazing Fast Deploys",
              desc: "Push to main and watch your app go live in under 8 seconds. No config needed.",
            },
            {
              bg: colors.blue,
              icon: "\uD83D\uDD12",
              title: "Auth Out of the Box",
              desc: "Social logins, magic links, and API keys \u2014 all wired up from day one.",
            },
            {
              bg: colors.pink,
              icon: "\uD83D\uDCCA",
              title: "Real-Time Analytics",
              desc: "Know exactly what your users are doing with dashboards that update in milliseconds.",
            },
          ].map((feature) => (
            <div key={feature.title} style={cardStyle(feature.bg)}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  marginBottom: 12,
                  textTransform: "uppercase",
                  letterSpacing: "-0.5px",
                  margin: "0 0 12px",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: fontMono,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#222",
                  margin: 0,
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section
        style={{
          backgroundColor: colors.white,
          borderTop: border,
          borderBottom: border,
          width: "100%",
          boxSizing: "border-box" as const,
        }}
      >
        <div style={sectionPadding}>
          <h2 style={sectionHeading}>People Are Talking</h2>
          <p style={sectionSub}>
            Don&apos;t take our word for it &mdash; hear from the builders.
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
                bg: colors.purple,
                quote:
                  "Stackpulse replaced 4 tools in our stack. Our deploy time went from 12 minutes to 8 seconds. Absolutely unreal.",
                name: "Mika Chen",
                role: "CTO at Launchpad",
              },
              {
                bg: colors.green,
                quote:
                  "I shipped my SaaS MVP in a weekend. The DX is so good it feels like cheating.",
                name: "Jordan Lee",
                role: "Indie Hacker",
              },
              {
                bg: colors.orange,
                quote:
                  "We migrated our entire platform in 3 days. The team couldn\u2019t believe how smooth it was.",
                name: "Ava Torres",
                role: "Eng Lead at Neonwave",
              },
            ].map((t) => (
              <div key={t.name} style={cardStyle(t.bg)}>
                <div
                  style={{
                    fontSize: 64,
                    fontWeight: 900,
                    lineHeight: 0.8,
                    marginBottom: 12,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    fontFamily: fontMono,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#111",
                    marginBottom: 24,
                    marginTop: 0,
                  }}
                >
                  {t.quote}
                </p>
                <div>
                  <div style={{ fontWeight: 900, fontSize: 16 }}>{t.name}</div>
                  <div
                    style={{
                      fontFamily: fontMono,
                      fontSize: 13,
                      color: "#333",
                      marginTop: 4,
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section id="pricing" style={sectionPadding}>
        <h2 style={sectionHeading}>Simple Pricing</h2>
        <p style={sectionSub}>
          No surprises. No hidden fees. Cancel anytime.
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
              sub: "forever",
              bg: colors.white,
              highlight: false,
              features: [
                "1 project",
                "1 GB storage",
                "Community support",
                "Basic analytics",
                "Deploy previews",
              ],
            },
            {
              tier: "Pro",
              price: "$29",
              sub: "/month",
              bg: colors.yellow,
              highlight: true,
              features: [
                "Unlimited projects",
                "50 GB storage",
                "Priority support",
                "Advanced analytics",
                "Custom domains",
                "Team collaboration",
              ],
            },
            {
              tier: "Team",
              price: "$79",
              sub: "/month",
              bg: colors.white,
              highlight: false,
              features: [
                "Everything in Pro",
                "500 GB storage",
                "Dedicated support",
                "SSO & SAML",
                "Audit logs",
                "SLA guarantee",
              ],
            },
          ].map((plan) => (
            <div
              key={plan.tier}
              style={{
                ...cardStyle(plan.bg),
                transform: plan.highlight ? "scale(1.04)" : "none",
                position: "relative",
                display: "flex",
                flexDirection: "column" as const,
              }}
            >
              {plan.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    right: 20,
                    backgroundColor: colors.pink,
                    border,
                    padding: "4px 16px",
                    fontSize: 12,
                    fontWeight: 900,
                    fontFamily: fontMono,
                    textTransform: "uppercase",
                    boxShadow: "3px 3px 0px #000",
                    borderRadius: 0,
                  }}
                >
                  Most Popular
                </div>
              )}

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  marginBottom: 8,
                  marginTop: 0,
                  fontFamily: fontMono,
                  letterSpacing: 1,
                }}
              >
                {plan.tier}
              </h3>

              <div style={{ marginBottom: 24 }}>
                <span
                  style={{
                    fontSize: 48,
                    fontWeight: 900,
                    letterSpacing: "-2px",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontFamily: fontMono,
                    fontSize: 16,
                    color: "#555",
                    marginLeft: 4,
                  }}
                >
                  {plan.sub}
                </span>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 28px 0",
                  flex: 1,
                }}
              >
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontFamily: fontMono,
                      fontSize: 14,
                      padding: "8px 0",
                      borderBottom: "1px dashed #999",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ fontWeight: 900, fontSize: 16 }}>
                      &#10003;
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  ...baseButton(
                    plan.highlight ? colors.dark : colors.yellow,
                    true
                  ),
                  width: "100%",
                  textAlign: "center",
                  color: plan.highlight ? colors.white : "#000",
                }}
              >
                {plan.price === "Free" ? "Start Free" : "Get Started"} &rarr;
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section
        style={{
          backgroundColor: colors.dark,
          borderTop: border,
          borderBottom: border,
          padding: "80px 24px",
          textAlign: "center",
          width: "100%",
          boxSizing: "border-box" as const,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 900,
            color: colors.white,
            textTransform: "uppercase",
            letterSpacing: "-2px",
            marginBottom: 12,
            marginTop: 0,
            lineHeight: 1.1,
            borderRadius: 0,
          }}
        >
          Ready to build
          <br />
          <span
            style={{
              backgroundColor: colors.yellow,
              color: "#000",
              padding: "0 12px",
              display: "inline-block",
              border,
              boxShadow: shadow,
              transform: "rotate(-1deg)",
              borderRadius: 0,
            }}
          >
            something epic?
          </span>
        </h2>

        <p
          style={{
            fontFamily: fontMono,
            color: "#aaa",
            fontSize: 18,
            marginBottom: 36,
            marginTop: 24,
          }}
        >
          Join 2,000+ developers shipping faster.
        </p>

        <button style={baseButton(colors.yellow, true)}>
          Get Started Free &rarr;
        </button>
      </section>

      {/* ============ FOOTER ============ */}
      <footer
        style={{
          borderTop: border,
          backgroundColor: colors.white,
          padding: "60px 24px 32px",
          width: "100%",
          boxSizing: "border-box" as const,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 40,
          }}
        >
          <div style={{ maxWidth: 280, minWidth: 200 }}>
            <div
              style={{
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "-1px",
                marginBottom: 12,
              }}
            >
              &#9650; Stackpulse
            </div>
            <p
              style={{
                fontFamily: fontMono,
                fontSize: 14,
                color: "#666",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              The developer platform for builders who ship fast and break
              conventions.
            </p>
          </div>

          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
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
                links: ["Privacy", "Terms", "Cookies", "Licenses"],
              },
            ].map((col) => (
              <div key={col.heading} style={{ minWidth: 120 }}>
                <h4
                  style={{
                    fontSize: 14,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: 2,
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
                        style={{
                          textDecoration: "none",
                          color: "#555",
                          fontFamily: fontMono,
                          fontSize: 14,
                          fontWeight: 600,
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
            maxWidth: 1200,
            margin: "48px auto 0",
            borderTop: "2px dashed #ccc",
            paddingTop: 24,
            textAlign: "center",
            fontFamily: fontMono,
            fontSize: 13,
            color: "#999",
          }}
        >
          &copy; 2026 Stackpulse. All rights reserved. Built with grit.
        </div>
      </footer>
    </div>
  );
}
