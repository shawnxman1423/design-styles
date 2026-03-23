"use client";

import React, { useState } from "react";

export function FlatDesignLanding() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  const colors = {
    primary: "#2563EB",
    primaryHover: "#1D4ED8",
    secondary: "#F59E0B",
    secondaryHover: "#D97706",
    dark: "#1E293B",
    text: "#334155",
    textLight: "#64748B",
    bg: "#FFFFFF",
    bgLight: "#F8FAFC",
    bgAlt: "#F1F5F9",
    border: "#E2E8F0",
    white: "#FFFFFF",
  };

  const navLinks = ["Features", "Testimonials", "Pricing", "Blog"];
  const brands = ["Vercel", "Stripe", "Notion", "Linear", "Figma"];

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Deploy in seconds with zero-config builds. Our infrastructure handles the complexity so you can focus on shipping.",
    },
    {
      icon: "🔒",
      title: "Secure by Default",
      description:
        "Enterprise-grade security baked in from day one. SSL, DDoS protection, and automated backups included.",
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description:
        "Track every metric that matters with beautiful dashboards. Gain insights to make data-driven decisions.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Stackpulse transformed our workflow. We shipped 3x faster in the first month alone.",
      name: "Sarah Chen",
      role: "CTO at Flowbase",
    },
    {
      quote:
        "The simplicity is unmatched. Our team onboarded in minutes, not days.",
      name: "Marcus Rivera",
      role: "Lead Engineer at Pixelcraft",
    },
    {
      quote:
        "Finally a tool that gets out of your way and lets you build. Absolutely love it.",
      name: "Aisha Patel",
      role: "Founder at Launchpad",
    },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for side projects and experimentation.",
      features: [
        "1 project",
        "1 GB storage",
        "Community support",
        "Basic analytics",
        "Custom domain",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      description: "Everything you need to build and scale.",
      features: [
        "Unlimited projects",
        "50 GB storage",
        "Priority support",
        "Advanced analytics",
        "Custom domains",
        "Team collaboration",
        "API access",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Team",
      price: "$79",
      period: "/mo",
      description: "For growing teams that need more power.",
      features: [
        "Unlimited everything",
        "500 GB storage",
        "Dedicated support",
        "Custom analytics",
        "SSO & SAML",
        "Audit logs",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const footerColumns = [
    { title: "Product", links: ["Features", "Pricing", "Changelog", "Docs", "Status"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Press", "Partners"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
  ];

  const sectionStyle: React.CSSProperties = {
    padding: "80px 24px",
    maxWidth: 1200,
    margin: "0 auto",
  };

  const sectionHeadingStyle: React.CSSProperties = {
    fontSize: 36,
    fontWeight: 700,
    color: colors.dark,
    textAlign: "center",
    marginBottom: 12,
  };

  const sectionSubheadingStyle: React.CSSProperties = {
    fontSize: 18,
    color: colors.textLight,
    textAlign: "center",
    marginBottom: 48,
    maxWidth: 560,
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: 1.6,
  };

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: colors.text, background: colors.bg, margin: 0, padding: 0 }}>
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          maxWidth: 1200,
          margin: "0 auto",
          position: "sticky",
          top: 0,
          background: colors.bg,
          zIndex: 100,
        }}
      >
        <div style={{ fontSize: 20, fontWeight: 700, color: colors.dark, letterSpacing: -0.5 }}>
          ▲ Stackpulse
        </div>
        <nav style={{ display: "flex", gap: 32 }}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onMouseEnter={() => setHoveredNav(link)}
              onMouseLeave={() => setHoveredNav(null)}
              style={{
                textDecoration: "none",
                color: hoveredNav === link ? colors.primary : colors.text,
                fontSize: 15,
                fontWeight: 500,
                transition: "color 0.15s",
              }}
            >
              {link}
            </a>
          ))}
        </nav>
        <button
          onMouseEnter={() => setHoveredBtn("header-signup")}
          onMouseLeave={() => setHoveredBtn(null)}
          style={{
            background: hoveredBtn === "header-signup" ? colors.primaryHover : colors.primary,
            color: colors.white,
            border: "none",
            padding: "10px 20px",
            borderRadius: 6,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.15s",
          }}
        >
          Sign Up
        </button>
      </header>

      {/* Hero */}
      <section style={{ ...sectionStyle, textAlign: "center", paddingTop: 100, paddingBottom: 100 }}>
        <h1
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: colors.dark,
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: -1.5,
            maxWidth: 720,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Ship faster with less complexity
        </h1>
        <p
          style={{
            fontSize: 20,
            color: colors.textLight,
            lineHeight: 1.6,
            maxWidth: 540,
            margin: "0 auto 40px",
          }}
        >
          The modern deployment platform for teams who value simplicity. Build, deploy, and scale without the overhead.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button
            onMouseEnter={() => setHoveredBtn("hero-primary")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              background: hoveredBtn === "hero-primary" ? colors.primaryHover : colors.primary,
              color: colors.white,
              border: "none",
              padding: "14px 32px",
              borderRadius: 6,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.15s",
            }}
          >
            Start Building Free
          </button>
          <button
            onMouseEnter={() => setHoveredBtn("hero-secondary")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              background: hoveredBtn === "hero-secondary" ? colors.bgAlt : colors.bgLight,
              color: colors.dark,
              border: `1px solid ${colors.border}`,
              padding: "14px 32px",
              borderRadius: 6,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.15s",
            }}
          >
            Watch Demo
          </button>
        </div>
      </section>

      {/* Logos Bar */}
      <section style={{ background: colors.bgLight, padding: "40px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 14, color: colors.textLight, marginBottom: 24, fontWeight: 500, textTransform: "uppercase", letterSpacing: 1 }}>
            Trusted by 2,000+ makers at
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 56, flexWrap: "wrap" }}>
            {brands.map((brand) => (
              <span
                key={brand}
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: colors.textLight,
                  opacity: 0.6,
                  letterSpacing: 0.5,
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ ...sectionStyle }}>
        <h2 style={sectionHeadingStyle}>Everything you need to ship</h2>
        <p style={sectionSubheadingStyle}>
          Powerful features designed to remove friction from your workflow.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                background: colors.bgLight,
                borderRadius: 10,
                padding: 32,
                border: `1px solid ${colors.border}`,
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{feature.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: colors.dark, marginBottom: 10 }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.7, margin: 0 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ background: colors.bgLight, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={sectionHeadingStyle}>Loved by builders everywhere</h2>
          <p style={sectionSubheadingStyle}>
            Hear from the teams using Stackpulse to move faster every day.
          </p>
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
                  background: colors.white,
                  borderRadius: 10,
                  padding: 32,
                  border: `1px solid ${colors.border}`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: 16, color: colors.text, lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: colors.dark, margin: 0 }}>{t.name}</p>
                  <p style={{ fontSize: 14, color: colors.textLight, margin: "4px 0 0" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ ...sectionStyle }}>
        <h2 style={sectionHeadingStyle}>Simple, transparent pricing</h2>
        <p style={sectionSubheadingStyle}>
          No surprises. Pick a plan that fits your needs and start building today.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                background: tier.highlighted ? colors.primary : colors.white,
                borderRadius: 10,
                padding: 36,
                border: tier.highlighted ? "none" : `1px solid ${colors.border}`,
                position: "relative",
              }}
            >
              {tier.highlighted && (
                <span
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: colors.secondary,
                    color: colors.white,
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "4px 14px",
                    borderRadius: 20,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  Most Popular
                </span>
              )}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: tier.highlighted ? "rgba(255,255,255,0.85)" : colors.textLight,
                  marginBottom: 8,
                }}
              >
                {tier.name}
              </h3>
              <div style={{ marginBottom: 8 }}>
                <span
                  style={{
                    fontSize: 44,
                    fontWeight: 800,
                    color: tier.highlighted ? colors.white : colors.dark,
                    letterSpacing: -1,
                  }}
                >
                  {tier.price}
                </span>
                {tier.period && (
                  <span
                    style={{
                      fontSize: 16,
                      color: tier.highlighted ? "rgba(255,255,255,0.7)" : colors.textLight,
                    }}
                  >
                    {tier.period}
                  </span>
                )}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: tier.highlighted ? "rgba(255,255,255,0.75)" : colors.textLight,
                  marginBottom: 24,
                  lineHeight: 1.5,
                }}
              >
                {tier.description}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                {tier.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: 14,
                      color: tier.highlighted ? "rgba(255,255,255,0.9)" : colors.text,
                      padding: "6px 0",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: tier.highlighted ? colors.secondary : colors.primary, fontWeight: 700 }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onMouseEnter={() => setHoveredBtn(`pricing-${tier.name}`)}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                  width: "100%",
                  padding: "12px 0",
                  borderRadius: 6,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background 0.15s, transform 0.1s",
                  border: tier.highlighted ? "none" : `1px solid ${colors.border}`,
                  background: tier.highlighted
                    ? hoveredBtn === `pricing-${tier.name}`
                      ? colors.secondaryHover
                      : colors.secondary
                    : hoveredBtn === `pricing-${tier.name}`
                    ? colors.bgAlt
                    : colors.white,
                  color: tier.highlighted ? colors.white : colors.dark,
                }}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: colors.primary,
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: colors.white,
              marginBottom: 16,
              letterSpacing: -0.5,
            }}
          >
            Ready to build something great?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", marginBottom: 32, lineHeight: 1.6 }}>
            Join thousands of makers who ship faster with Stackpulse.
          </p>
          <button
            onMouseEnter={() => setHoveredBtn("cta")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              background: hoveredBtn === "cta" ? colors.secondaryHover : colors.secondary,
              color: colors.white,
              border: "none",
              padding: "16px 40px",
              borderRadius: 6,
              fontSize: 17,
              fontWeight: 700,
              cursor: "pointer",
              transition: "background 0.15s",
            }}
          >
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: colors.dark, padding: "60px 24px 32px", color: "rgba(255,255,255,0.7)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 48,
          }}
        >
          <div style={{ maxWidth: 260 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: colors.white, marginBottom: 12 }}>
              ▲ Stackpulse
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              The modern deployment platform for teams who value simplicity and speed.
            </p>
          </div>
          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: colors.white,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 16,
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
                          color: "rgba(255,255,255,0.6)",
                          textDecoration: "none",
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
            maxWidth: 1200,
            margin: "40px auto 0",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            textAlign: "center",
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
