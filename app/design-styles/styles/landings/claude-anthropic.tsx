"use client";

import React, { useState, CSSProperties } from "react";

// ─── Palette ───────────────────────────────────────────────
const c = {
  bg: "#FAF9F7",
  surface: "#FFFFFF",
  surfaceAlt: "#F5F3EF",
  border: "#E8E4DE",
  text: "#1A1612",
  textSecondary: "#6B6560",
  textTertiary: "#9B9590",
  accent: "#C96442",
  accentHover: "#B5593A",
  accentLight: "#FDF0EB",
  dark: "#1A1612",
  darkHover: "#2E2924",
  white: "#FFFFFF",
};

// ─── Typography helpers ────────────────────────────────────
const font = {
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  serif: "'EB Garamond', 'Georgia', serif",
};

// ─── Shared style fragments ────────────────────────────────
const container: CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "0 24px",
  width: "100%",
  boxSizing: "border-box" as const,
};

const sectionPadding: CSSProperties = {
  padding: "96px 0",
};

// ─── Data ──────────────────────────────────────────────────
const navLinks = ["Product", "Solutions", "Research", "Pricing", "Docs"];

const brands = ["Vercel", "Linear", "Notion", "Stripe", "Supabase"];

const features = [
  {
    title: "Conversational AI",
    description:
      "Deploy intelligent assistants that understand context, nuance, and intent — with responses indistinguishable from a human expert.",
    icon: "💬",
  },
  {
    title: "Safety by design",
    description:
      "Built-in guardrails and alignment techniques ensure every interaction is helpful, harmless, and honest — without sacrificing capability.",
    icon: "🛡️",
  },
  {
    title: "Seamless integration",
    description:
      "Connect to your existing stack in minutes with our REST API, SDKs for every major language, and native integrations with popular platforms.",
    icon: "🔗",
  },
];

const testimonials = [
  {
    quote:
      "Stackpulse transformed how our team works. We shipped our last three features in half the time — and with fewer bugs.",
    name: "Elena Marchetti",
    role: "VP of Engineering, Arclight",
  },
  {
    quote:
      "The quality of the output is genuinely remarkable. It feels like having a brilliant colleague available around the clock.",
    name: "David Park",
    role: "CTO, Meridian Labs",
  },
  {
    quote:
      "We evaluated every major provider. Stackpulse was the only one that met our safety, reliability, and performance bar — simultaneously.",
    name: "Sarah Okonkwo",
    role: "Head of AI, Prism Health",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For individuals exploring what's possible.",
    features: [
      "5,000 messages / month",
      "Standard models",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For professionals who need more power.",
    features: [
      "Unlimited messages",
      "Advanced models",
      "Priority support",
      "Full analytics suite",
      "Custom instructions",
      "API access",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$79",
    period: "/mo per seat",
    description: "For teams building at scale.",
    features: [
      "Everything in Pro",
      "Admin dashboard",
      "SSO & SAML",
      "Dedicated account manager",
      "Custom SLA",
      "Audit logs",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

const footerColumns = [
  { heading: "Product", links: ["Features", "Pricing", "API", "Docs", "Changelog"] },
  { heading: "Company", links: ["About", "Blog", "Careers", "Press", "Contact"] },
  { heading: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
];

// ─── Sub-components ────────────────────────────────────────

function Button({
  children,
  variant = "primary",
  style,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  style?: CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);

  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 24px",
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 500,
    fontFamily: font.sans,
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: "none",
    lineHeight: 1.4,
  };

  const variants: Record<string, CSSProperties> = {
    primary: {
      backgroundColor: hovered ? c.accentHover : c.accent,
      color: c.white,
    },
    secondary: {
      backgroundColor: hovered ? c.darkHover : c.dark,
      color: c.white,
    },
    outline: {
      backgroundColor: hovered ? c.surfaceAlt : "transparent",
      color: c.text,
      border: `1px solid ${c.border}`,
    },
  };

  return (
    <button
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}

function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }}>
      {label && (
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: c.accent,
            marginBottom: 12,
            fontFamily: font.sans,
          }}
        >
          {label}
        </p>
      )}
      <h2
        style={{
          fontSize: 40,
          fontWeight: 400,
          fontFamily: font.serif,
          color: c.text,
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 17,
            color: c.textSecondary,
            lineHeight: 1.6,
            marginTop: 16,
            fontFamily: font.sans,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Main component ────────────────────────────────────────

export function ClaudeAnthropicLanding() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  return (
    <div
      style={{
        backgroundColor: c.bg,
        color: c.text,
        fontFamily: font.sans,
        WebkitFontSmoothing: "antialiased",
        minHeight: "100vh",
      }}
    >
      {/* ── Header ──────────────────────────────────────── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "rgba(250,249,247,0.85)",
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
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 600,
              fontSize: 17,
              color: c.text,
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ fontSize: 20 }}>▲</span> Stackpulse
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", gap: 32 }}>
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onMouseEnter={() => setHoveredNav(link)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{
                  fontSize: 14,
                  fontWeight: 450,
                  color: hoveredNav === link ? c.text : c.textSecondary,
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Sign up */}
          <Button variant="primary" style={{ padding: "8px 20px", fontSize: 14 }}>
            Sign up
          </Button>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────── */}
      <section style={{ ...sectionPadding, paddingTop: 120, paddingBottom: 80 }}>
        <div style={{ ...container, textAlign: "center", maxWidth: 800 }}>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 400,
              fontFamily: font.serif,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: c.text,
              margin: 0,
            }}
          >
            Intelligence that works
            <br />
            <span style={{ color: c.accent }}>alongside you</span>
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.6,
              color: c.textSecondary,
              marginTop: 24,
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Stackpulse brings safe, capable AI to your workflow — so you can focus on the
            work that matters most.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <Button variant="primary" style={{ padding: "14px 32px", fontSize: 16 }}>
              Get started free
            </Button>
            <Button variant="outline" style={{ padding: "14px 32px", fontSize: 16 }}>
              View documentation
            </Button>
          </div>
        </div>
      </section>

      {/* ── Logos bar ───────────────────────────────────── */}
      <section style={{ padding: "48px 0 64px" }}>
        <div style={{ ...container, textAlign: "center" }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: c.textTertiary,
              marginBottom: 32,
            }}
          >
            Trusted by 2,000+ makers at
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 56,
              flexWrap: "wrap",
            }}
          >
            {brands.map((brand) => (
              <span
                key={brand}
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: c.textTertiary,
                  letterSpacing: "-0.01em",
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────── */}
      <section style={{ ...sectionPadding, backgroundColor: c.surface }}>
        <div style={container}>
          <SectionHeading
            label="Features"
            title="Built for the way you work"
            subtitle="Everything you need to integrate intelligent AI into your products and workflows — without compromise."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  padding: 32,
                  borderRadius: 12,
                  border: `1px solid ${c.border}`,
                  backgroundColor: c.bg,
                  transition: "box-shadow 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    backgroundColor: c.accentLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    marginBottom: 20,
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: c.text,
                    margin: "0 0 8px",
                    fontFamily: font.sans,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: c.textSecondary,
                    margin: 0,
                  }}
                >
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────── */}
      <section style={sectionPadding}>
        <div style={container}>
          <SectionHeading
            label="Testimonials"
            title="Loved by builders everywhere"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  padding: 32,
                  borderRadius: 12,
                  backgroundColor: c.surface,
                  border: `1px solid ${c.border}`,
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.65,
                    color: c.text,
                    margin: 0,
                    fontFamily: font.serif,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ marginTop: 24 }}>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: c.text,
                      margin: 0,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: c.textTertiary,
                      margin: "2px 0 0",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────── */}
      <section style={{ ...sectionPadding, backgroundColor: c.surface }}>
        <div style={container}>
          <SectionHeading
            label="Pricing"
            title="Simple, transparent pricing"
            subtitle="Start free and scale as you grow. No hidden fees, no surprises."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              alignItems: "start",
            }}
          >
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  padding: 36,
                  borderRadius: 14,
                  backgroundColor: tier.highlighted ? c.dark : c.bg,
                  border: tier.highlighted ? "none" : `1px solid ${c.border}`,
                  color: tier.highlighted ? c.white : c.text,
                  position: "relative",
                }}
              >
                {tier.highlighted && (
                  <span
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      backgroundColor: c.accent,
                      color: c.white,
                      padding: "4px 10px",
                      borderRadius: 100,
                    }}
                  >
                    Popular
                  </span>
                )}
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    margin: "0 0 4px",
                    color: tier.highlighted ? "rgba(255,255,255,0.7)" : c.textSecondary,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {tier.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 2,
                    margin: "12px 0 8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: 44,
                      fontWeight: 400,
                      fontFamily: font.serif,
                      lineHeight: 1,
                    }}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      style={{
                        fontSize: 14,
                        color: tier.highlighted
                          ? "rgba(255,255,255,0.5)"
                          : c.textTertiary,
                      }}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: tier.highlighted ? "rgba(255,255,255,0.6)" : c.textSecondary,
                    margin: "0 0 28px",
                    lineHeight: 1.5,
                  }}
                >
                  {tier.description}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        fontSize: 14,
                        lineHeight: 1.5,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        color: tier.highlighted
                          ? "rgba(255,255,255,0.85)"
                          : c.textSecondary,
                      }}
                    >
                      <span
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          backgroundColor: tier.highlighted
                            ? "rgba(255,255,255,0.15)"
                            : c.accentLight,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          color: tier.highlighted ? c.white : c.accent,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.highlighted ? "primary" : "outline"}
                  style={{
                    width: "100%",
                    padding: "12px 0",
                    ...(tier.highlighted
                      ? {}
                      : {
                          borderColor: c.border,
                        }),
                  }}
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section style={{ padding: "96px 0" }}>
        <div
          style={{
            ...container,
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: c.dark,
              borderRadius: 20,
              padding: "72px 48px",
              color: c.white,
            }}
          >
            <h2
              style={{
                fontSize: 40,
                fontWeight: 400,
                fontFamily: font.serif,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Ready to build something
              <br />
              remarkable?
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.6)",
                marginTop: 16,
                lineHeight: 1.6,
              }}
            >
              Join thousands of teams using Stackpulse to ship faster and smarter.
            </p>
            <div style={{ marginTop: 36 }}>
              <Button
                variant="primary"
                style={{ padding: "14px 36px", fontSize: 16 }}
              >
                Get started for free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${c.border}`,
          padding: "64px 0 40px",
        }}
      >
        <div style={container}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 48,
            }}
          >
            {/* Left: logo + tagline */}
            <div style={{ maxWidth: 240 }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 17,
                  color: c.text,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <span style={{ fontSize: 20 }}>▲</span> Stackpulse
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: c.textTertiary,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Safe, capable AI for every team. Built with care in San Francisco.
              </p>
            </div>

            {/* Right: link columns */}
            <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
              {footerColumns.map((col) => (
                <div key={col.heading}>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: c.text,
                      marginBottom: 16,
                      marginTop: 0,
                    }}
                  >
                    {col.heading}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          style={{
                            fontSize: 14,
                            color: c.textSecondary,
                            textDecoration: "none",
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

          {/* Copyright */}
          <div
            style={{
              marginTop: 56,
              paddingTop: 24,
              borderTop: `1px solid ${c.border}`,
              fontSize: 13,
              color: c.textTertiary,
            }}
          >
            &copy; {new Date().getFullYear()} Stackpulse, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
