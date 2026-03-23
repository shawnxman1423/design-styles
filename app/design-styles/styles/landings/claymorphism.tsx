"use client";

import React, { useState, CSSProperties } from "react";

const colors = {
  bg: "#f0e6ff",
  surface: "#e8d5f5",
  surfaceAlt: "#d4bde8",
  primary: "#9b5de5",
  primaryDark: "#7b2cbf",
  primaryLight: "#c89efc",
  accent: "#f15bb5",
  text: "#2d1b4e",
  textSecondary: "#5c3d7a",
  white: "#ffffff",
  highlight: "#ffe066",
};

const clayBase: CSSProperties = {
  borderRadius: 24,
  background: colors.surface,
  boxShadow: `8px 8px 16px rgba(100, 50, 150, 0.15), inset -4px -4px 8px rgba(100, 50, 150, 0.08), inset 4px 4px 8px rgba(255, 255, 255, 0.6)`,
  border: "none",
};

const clayCard: CSSProperties = {
  ...clayBase,
  padding: 32,
  borderRadius: 28,
};

const clayButton = (
  variant: "primary" | "secondary" | "accent" = "primary"
): CSSProperties => {
  const bgMap = {
    primary: colors.primary,
    secondary: colors.surface,
    accent: colors.accent,
  };
  const colorMap = {
    primary: colors.white,
    secondary: colors.text,
    accent: colors.white,
  };
  return {
    padding: "14px 32px",
    borderRadius: 16,
    border: "none",
    background: bgMap[variant],
    color: colorMap[variant],
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: `6px 6px 12px rgba(100, 50, 150, 0.2), inset -2px -2px 6px rgba(0,0,0,0.08), inset 3px 3px 6px rgba(255,255,255,0.35)`,
    transition: "transform 0.2s, box-shadow 0.2s",
    display: "inline-block",
  };
};

const sectionStyle: CSSProperties = {
  padding: "80px 24px",
  maxWidth: 1200,
  margin: "0 auto",
};

const sectionHeading: CSSProperties = {
  fontSize: 36,
  fontWeight: 800,
  color: colors.text,
  textAlign: "center",
  marginBottom: 12,
};

const sectionSub: CSSProperties = {
  fontSize: 18,
  color: colors.textSecondary,
  textAlign: "center",
  marginBottom: 48,
  maxWidth: 600,
  marginLeft: "auto",
  marginRight: "auto",
};

export function ClaymorphismLanding() {
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);

  const navLinks = ["Features", "Pricing", "Testimonials", "Docs"];
  const logos = ["Vercel", "Stripe", "Notion", "Linear", "Figma"];

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Deploy in seconds with our optimized build pipeline. Zero config, maximum speed.",
    },
    {
      icon: "🔒",
      title: "Secure by Default",
      desc: "Enterprise-grade security baked in from day one. SOC2 compliant out of the box.",
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      desc: "Monitor everything with live dashboards. Track performance, errors, and usage instantly.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Stackpulse transformed our deployment workflow. What used to take hours now takes minutes.",
      name: "Sarah Chen",
      role: "CTO at Lumina",
    },
    {
      quote:
        "The analytics alone are worth the price. We caught a critical regression within seconds.",
      name: "Marcus Rivera",
      role: "Lead Engineer at Flowstate",
    },
    {
      quote:
        "Onboarding our whole team took one afternoon. The DX is genuinely best-in-class.",
      name: "Anika Patel",
      role: "VP Engineering at Novexa",
    },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "Free",
      sub: "forever",
      features: [
        "Up to 3 projects",
        "1 GB storage",
        "Community support",
        "Basic analytics",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "/month",
      features: [
        "Unlimited projects",
        "50 GB storage",
        "Priority support",
        "Advanced analytics",
        "Custom domains",
        "Team collaboration",
      ],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "/month",
      features: [
        "Everything in Pro",
        "500 GB storage",
        "Dedicated support",
        "SSO & SAML",
        "Audit logs",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  const footerCols = [
    { title: "Product", links: ["Features", "Pricing", "Changelog", "Docs", "Status"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Press", "Partners"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR", "Cookies"] },
  ];

  return (
    <div
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: `linear-gradient(145deg, ${colors.bg} 0%, #e0d0f0 50%, #f5ecff 100%)`,
        color: colors.text,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 32px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: colors.primary,
            letterSpacing: -0.5,
          }}
        >
          ▲ Stackpulse
        </div>
        <nav style={{ display: "flex", gap: 32 }}>
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onMouseEnter={() => setHoveredNav(i)}
              onMouseLeave={() => setHoveredNav(null)}
              style={{
                textDecoration: "none",
                color: hoveredNav === i ? colors.primary : colors.textSecondary,
                fontWeight: 600,
                fontSize: 15,
                transition: "color 0.2s",
              }}
            >
              {link}
            </a>
          ))}
        </nav>
        <button style={clayButton("primary")}>Sign Up</button>
      </header>

      {/* Hero */}
      <section style={{ ...sectionStyle, textAlign: "center", paddingTop: 100, paddingBottom: 60 }}>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 900,
            lineHeight: 1.1,
            color: colors.text,
            marginBottom: 20,
            letterSpacing: -2,
          }}
        >
          Ship faster with
          <br />
          <span style={{ color: colors.primary }}>confidence</span>
        </h1>
        <p
          style={{
            fontSize: 20,
            color: colors.textSecondary,
            maxWidth: 560,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          The modern deployment platform for teams that move fast. Monitor,
          deploy, and scale — all in one place.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={clayButton("primary")}>Start Building</button>
          <button style={clayButton("secondary")}>Watch Demo</button>
        </div>
      </section>

      {/* Logos Bar */}
      <section style={{ ...sectionStyle, paddingTop: 20, paddingBottom: 40 }}>
        <p
          style={{
            textAlign: "center",
            fontSize: 14,
            fontWeight: 600,
            color: colors.textSecondary,
            textTransform: "uppercase",
            letterSpacing: 2,
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
            flexWrap: "wrap",
          }}
        >
          {logos.map((logo) => (
            <span
              key={logo}
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: colors.surfaceAlt,
                letterSpacing: 1,
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={sectionStyle}>
        <h2 style={sectionHeading}>Everything you need to ship</h2>
        <p style={sectionSub}>
          Powerful tools that get out of your way so you can focus on building
          great products.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {features.map((f) => (
            <div key={f.title} style={clayCard}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 18,
                  background: colors.primaryLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  marginBottom: 20,
                  boxShadow:
                    "inset 3px 3px 6px rgba(255,255,255,0.5), inset -2px -2px 4px rgba(100,50,150,0.1)",
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  marginBottom: 10,
                  color: colors.text,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: colors.textSecondary,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={sectionStyle}>
        <h2 style={sectionHeading}>Loved by developers</h2>
        <p style={sectionSub}>
          Hear from the teams that rely on Stackpulse every day.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {testimonials.map((t) => (
            <div key={t.name} style={clayCard}>
              <p
                style={{
                  fontSize: 16,
                  color: colors.text,
                  lineHeight: 1.7,
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                    margin: 0,
                    color: colors.text,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: colors.textSecondary,
                    margin: "4px 0 0",
                  }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={sectionStyle}>
        <h2 style={sectionHeading}>Simple, transparent pricing</h2>
        <p style={sectionSub}>
          Start free, scale when you&apos;re ready. No hidden fees, no
          surprises.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
            alignItems: "start",
          }}
        >
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                ...clayCard,
                background: tier.highlight ? colors.primary : colors.surface,
                transform: tier.highlight ? "scale(1.04)" : "none",
                boxShadow: tier.highlight
                  ? `10px 10px 24px rgba(100, 50, 150, 0.25), inset -4px -4px 8px rgba(0,0,0,0.1), inset 4px 4px 10px rgba(255,255,255,0.25)`
                  : clayCard.boxShadow,
                position: "relative",
              }}
            >
              {tier.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    right: 24,
                    background: colors.highlight,
                    color: colors.text,
                    fontSize: 12,
                    fontWeight: 800,
                    padding: "6px 16px",
                    borderRadius: 12,
                    boxShadow:
                      "4px 4px 8px rgba(100,50,150,0.15), inset 2px 2px 4px rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Popular
                </div>
              )}
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: tier.highlight ? colors.white : colors.text,
                  marginBottom: 8,
                }}
              >
                {tier.name}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 4,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontSize: 44,
                    fontWeight: 900,
                    color: tier.highlight ? colors.white : colors.text,
                    letterSpacing: -1,
                  }}
                >
                  {tier.price}
                </span>
                <span
                  style={{
                    fontSize: 16,
                    color: tier.highlight
                      ? "rgba(255,255,255,0.7)"
                      : colors.textSecondary,
                  }}
                >
                  {tier.sub}
                </span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 28px",
                }}
              >
                {tier.features.map((feat) => (
                  <li
                    key={feat}
                    style={{
                      fontSize: 15,
                      color: tier.highlight
                        ? "rgba(255,255,255,0.9)"
                        : colors.textSecondary,
                      padding: "8px 0",
                      borderBottom: `1px solid ${
                        tier.highlight
                          ? "rgba(255,255,255,0.12)"
                          : "rgba(100,50,150,0.08)"
                      }`,
                    }}
                  >
                    ✓&ensp;{feat}
                  </li>
                ))}
              </ul>
              <button
                style={{
                  ...clayButton(tier.highlight ? "secondary" : "primary"),
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px" }}>
        <div
          style={{
            ...clayBase,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "64px 40px",
            textAlign: "center",
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
            boxShadow: `12px 12px 24px rgba(100, 50, 150, 0.25), inset -4px -4px 10px rgba(0,0,0,0.1), inset 4px 4px 10px rgba(255,255,255,0.2)`,
          }}
        >
          <h2
            style={{
              fontSize: 40,
              fontWeight: 900,
              color: colors.white,
              marginBottom: 16,
              letterSpacing: -1,
            }}
          >
            Ready to ship with confidence?
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.8)",
              marginBottom: 32,
              maxWidth: 500,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Join 2,000+ makers who deploy without stress.
          </p>
          <button
            style={{
              ...clayButton("secondary"),
              fontSize: 18,
              padding: "16px 40px",
              color: colors.primary,
              fontWeight: 800,
            }}
          >
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 32px 32px",
          borderTop: `1px solid rgba(100,50,150,0.1)`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 40,
            marginBottom: 48,
          }}
        >
          <div style={{ maxWidth: 260 }}>
            <div
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: colors.primary,
                marginBottom: 12,
              }}
            >
              ▲ Stackpulse
            </div>
            <p
              style={{
                fontSize: 14,
                color: colors.textSecondary,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              The modern deployment platform for teams that move fast. Ship with
              confidence, every time.
            </p>
          </div>
          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
            {footerCols.map((col) => (
              <div key={col.title}>
                <h4
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: colors.text,
                    marginBottom: 16,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {col.title}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.links.map((link) => (
                    <li key={link} style={{ marginBottom: 10 }}>
                      <a
                        href="#"
                        style={{
                          textDecoration: "none",
                          color: colors.textSecondary,
                          fontSize: 14,
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
            borderTop: `1px solid rgba(100,50,150,0.1)`,
            paddingTop: 24,
            textAlign: "center",
            fontSize: 13,
            color: colors.textSecondary,
          }}
        >
          &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
