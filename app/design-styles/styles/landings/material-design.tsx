"use client";

import React, { useState } from "react";

// ── Material Design Palette & Tokens ──────────────────────────────────
const md = {
  primary: "#6750A4",
  primaryContainer: "#EADDFF",
  onPrimary: "#FFFFFF",
  onPrimaryContainer: "#21005D",
  secondary: "#625B71",
  secondaryContainer: "#E8DEF8",
  onSecondary: "#FFFFFF",
  onSecondaryContainer: "#1D192B",
  surface: "#FFFBFE",
  surfaceVariant: "#E7E0EC",
  onSurface: "#1C1B1F",
  onSurfaceVariant: "#49454F",
  outline: "#79747E",
  outlineVariant: "#CAC4D0",
  error: "#B3261E",
  elevation1: "0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)",
  elevation2: "0 1px 2px rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)",
  elevation3: "0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.3)",
  radius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 28,
    full: 9999,
  },
  font: "'Roboto', 'Segoe UI', system-ui, -apple-system, sans-serif",
};

// ── Reusable style builders ───────────────────────────────────────────
const filledButton = (
  bg = md.primary,
  color = md.onPrimary
): React.CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 40,
  paddingLeft: 24,
  paddingRight: 24,
  borderRadius: md.radius.xl,
  backgroundColor: bg,
  color,
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: 0.1,
  border: "none",
  cursor: "pointer",
  fontFamily: md.font,
  transition: "box-shadow 0.2s, background-color 0.2s",
});

const outlinedButton = (
  color = md.primary,
  borderColor = md.outline
): React.CSSProperties => ({
  ...filledButton("transparent", color),
  border: `1px solid ${borderColor}`,
  backgroundColor: "transparent",
});

const tonalButton = (
  bg = md.secondaryContainer,
  color = md.onSecondaryContainer
): React.CSSProperties => ({
  ...filledButton(bg, color),
});

const sectionPadding: React.CSSProperties = {
  padding: "80px 24px",
  maxWidth: 1200,
  margin: "0 auto",
};

const sectionHeading: React.CSSProperties = {
  fontSize: 32,
  fontWeight: 400,
  color: md.onSurface,
  textAlign: "center",
  marginBottom: 8,
  letterSpacing: 0,
  lineHeight: 1.25,
};

const sectionSubtitle: React.CSSProperties = {
  fontSize: 16,
  color: md.onSurfaceVariant,
  textAlign: "center",
  marginBottom: 48,
  lineHeight: 1.5,
  maxWidth: 600,
  marginLeft: "auto",
  marginRight: "auto",
};

// ── Component ─────────────────────────────────────────────────────────
export function MaterialDesignLanding() {
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);
  const [hoveredPricing, setHoveredPricing] = useState<number | null>(null);

  // ── 1. Header ─────────────────────────────────────────────────────
  const header = (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: md.surface,
        boxShadow: md.elevation1,
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
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: md.font,
            fontSize: 20,
            fontWeight: 500,
            color: md.onSurface,
            letterSpacing: 0.15,
          }}
        >
          <span style={{ color: md.primary, fontSize: 22 }}>&#9650;</span>
          Stackpulse
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 4 }}>
          {["Features", "Testimonials", "Pricing", "Docs"].map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onMouseEnter={() => setHoveredNav(i)}
              onMouseLeave={() => setHoveredNav(null)}
              style={{
                fontFamily: md.font,
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: 0.1,
                color: md.onSurfaceVariant,
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: md.radius.xl,
                backgroundColor:
                  hoveredNav === i ? md.surfaceVariant : "transparent",
                transition: "background-color 0.2s",
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Sign-up */}
        <button style={filledButton()}>Sign up</button>
      </div>
    </header>
  );

  // ── 2. Hero ───────────────────────────────────────────────────────
  const hero = (
    <section
      style={{
        background: `linear-gradient(180deg, ${md.primaryContainer} 0%, ${md.surface} 100%)`,
        padding: "96px 24px 80px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: md.font,
            fontSize: 57,
            fontWeight: 400,
            lineHeight: 1.12,
            letterSpacing: -0.25,
            color: md.onSurface,
            margin: "0 0 16px",
          }}
        >
          Ship faster with less friction
        </h1>
        <p
          style={{
            fontFamily: md.font,
            fontSize: 18,
            lineHeight: 1.55,
            color: md.onSurfaceVariant,
            maxWidth: 560,
            margin: "0 auto 40px",
          }}
        >
          Stackpulse streamlines your entire development pipeline so your team
          can focus on building, not configuring.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button style={filledButton()}>Get started free</button>
          <button style={tonalButton()}>Watch demo</button>
        </div>
      </div>
    </section>
  );

  // ── 3. Logos Bar ──────────────────────────────────────────────────
  const brands = ["Vercel", "Linear", "Raycast", "Supabase", "Resend"];
  const logosBar = (
    <section
      style={{
        backgroundColor: md.surface,
        borderTop: `1px solid ${md.outlineVariant}`,
        borderBottom: `1px solid ${md.outlineVariant}`,
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: md.font,
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: 0.1,
          color: md.onSurfaceVariant,
          marginBottom: 24,
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
        {brands.map((b) => (
          <span
            key={b}
            style={{
              fontFamily: md.font,
              fontSize: 18,
              fontWeight: 500,
              color: md.outline,
              letterSpacing: 0.5,
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );

  // ── 4. Features ───────────────────────────────────────────────────
  const features = [
    {
      icon: "&#9889;",
      title: "Instant Deployments",
      body: "Push to production in seconds with zero-config pipelines that handle building, testing, and rollback automatically.",
    },
    {
      icon: "&#128274;",
      title: "Built-in Security",
      body: "Every layer is hardened by default — secrets management, RBAC, and audit logging come out of the box.",
    },
    {
      icon: "&#128200;",
      title: "Real-time Analytics",
      body: "Monitor performance, errors, and usage with dashboards that update the moment your users interact.",
    },
  ];

  const featuresSection = (
    <section id="features" style={{ backgroundColor: md.surface }}>
      <div style={sectionPadding}>
        <h2 style={sectionHeading}>Everything you need to scale</h2>
        <p style={sectionSubtitle}>
          A complete toolkit designed for modern teams that move fast.
        </p>
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
                backgroundColor: md.surface,
                border: `1px solid ${md.outlineVariant}`,
                borderRadius: md.radius.md,
                padding: 24,
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = md.elevation2)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "none")
              }
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: md.radius.md,
                  backgroundColor: md.primaryContainer,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  marginBottom: 16,
                }}
                dangerouslySetInnerHTML={{ __html: f.icon }}
              />
              <h3
                style={{
                  fontFamily: md.font,
                  fontSize: 16,
                  fontWeight: 500,
                  color: md.onSurface,
                  marginBottom: 8,
                  letterSpacing: 0.15,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: md.font,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: md.onSurfaceVariant,
                  margin: 0,
                  letterSpacing: 0.25,
                }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ── 5. Testimonials ───────────────────────────────────────────────
  const testimonials = [
    {
      quote:
        "Stackpulse cut our deploy time by 80%. We went from dreading releases to shipping multiple times a day.",
      name: "Priya Sharma",
      role: "CTO, Flowstate",
    },
    {
      quote:
        "The analytics alone are worth it. We spotted a critical bottleneck within hours of going live.",
      name: "Marcus Chen",
      role: "Lead Engineer, Tideline",
    },
    {
      quote:
        "Security reviews used to take weeks. Now we pass them before lunch. This tool is a game-changer.",
      name: "Elena Voss",
      role: "VP Engineering, Arcbound",
    },
  ];

  const testimonialsSection = (
    <section
      id="testimonials"
      style={{ backgroundColor: md.surfaceVariant }}
    >
      <div style={sectionPadding}>
        <h2 style={sectionHeading}>Loved by engineering teams</h2>
        <p style={sectionSubtitle}>
          Hear from the people who build with Stackpulse every day.
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
                backgroundColor: md.surface,
                borderRadius: md.radius.md,
                padding: 24,
                boxShadow: md.elevation1,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <p
                style={{
                  fontFamily: md.font,
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: md.onSurface,
                  margin: 0,
                  flex: 1,
                  letterSpacing: 0.25,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontFamily: md.font,
                    fontSize: 14,
                    fontWeight: 500,
                    color: md.onSurface,
                    margin: 0,
                    letterSpacing: 0.1,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: md.font,
                    fontSize: 12,
                    color: md.onSurfaceVariant,
                    margin: "2px 0 0",
                    letterSpacing: 0.4,
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
  );

  // ── 6. Pricing ────────────────────────────────────────────────────
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      sub: "forever",
      features: [
        "Up to 3 projects",
        "1 team member",
        "Community support",
        "Basic analytics",
      ],
      cta: "Get started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "/month",
      features: [
        "Unlimited projects",
        "Up to 10 members",
        "Priority support",
        "Advanced analytics",
        "Custom domains",
      ],
      cta: "Start free trial",
      highlighted: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "/month",
      features: [
        "Everything in Pro",
        "Unlimited members",
        "SSO & SAML",
        "Dedicated support",
        "SLA guarantee",
        "Audit logs",
      ],
      cta: "Contact sales",
      highlighted: false,
    },
  ];

  const pricingSection = (
    <section id="pricing" style={{ backgroundColor: md.surface }}>
      <div style={sectionPadding}>
        <h2 style={sectionHeading}>Simple, transparent pricing</h2>
        <p style={sectionSubtitle}>
          Start free and scale as you grow. No hidden fees.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              onMouseEnter={() => setHoveredPricing(i)}
              onMouseLeave={() => setHoveredPricing(null)}
              style={{
                backgroundColor: tier.highlighted
                  ? md.primaryContainer
                  : md.surface,
                border: tier.highlighted
                  ? `2px solid ${md.primary}`
                  : `1px solid ${md.outlineVariant}`,
                borderRadius: md.radius.lg,
                padding: 32,
                position: "relative",
                boxShadow:
                  hoveredPricing === i ? md.elevation3 : tier.highlighted ? md.elevation2 : "none",
                transition: "box-shadow 0.2s",
              }}
            >
              {tier.highlighted && (
                <span
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: md.primary,
                    color: md.onPrimary,
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    padding: "4px 16px",
                    borderRadius: md.radius.full,
                    fontFamily: md.font,
                    textTransform: "uppercase",
                  }}
                >
                  Most popular
                </span>
              )}
              <h3
                style={{
                  fontFamily: md.font,
                  fontSize: 16,
                  fontWeight: 500,
                  color: tier.highlighted
                    ? md.onPrimaryContainer
                    : md.onSurface,
                  margin: "0 0 8px",
                  letterSpacing: 0.15,
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
                    fontFamily: md.font,
                    fontSize: 36,
                    fontWeight: 400,
                    color: tier.highlighted
                      ? md.onPrimaryContainer
                      : md.onSurface,
                    lineHeight: 1.1,
                  }}
                >
                  {tier.price}
                </span>
                <span
                  style={{
                    fontFamily: md.font,
                    fontSize: 14,
                    color: tier.highlighted
                      ? md.onPrimaryContainer
                      : md.onSurfaceVariant,
                  }}
                >
                  {tier.sub}
                </span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {tier.features.map((feat) => (
                  <li
                    key={feat}
                    style={{
                      fontFamily: md.font,
                      fontSize: 14,
                      color: tier.highlighted
                        ? md.onPrimaryContainer
                        : md.onSurfaceVariant,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      letterSpacing: 0.25,
                    }}
                  >
                    <span
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: md.radius.full,
                        backgroundColor: tier.highlighted
                          ? md.primary
                          : md.surfaceVariant,
                        color: tier.highlighted
                          ? md.onPrimary
                          : md.onSurfaceVariant,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        flexShrink: 0,
                      }}
                    >
                      &#10003;
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                style={
                  tier.highlighted
                    ? filledButton()
                    : outlinedButton(md.primary, md.outline)
                }
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ── 7. CTA ────────────────────────────────────────────────────────
  const ctaSection = (
    <section
      style={{
        backgroundColor: md.primary,
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: md.font,
            fontSize: 36,
            fontWeight: 400,
            color: md.onPrimary,
            margin: "0 0 16px",
            lineHeight: 1.22,
          }}
        >
          Ready to accelerate your workflow?
        </h2>
        <p
          style={{
            fontFamily: md.font,
            fontSize: 16,
            color: "rgba(255,255,255,0.8)",
            margin: "0 0 32px",
            lineHeight: 1.5,
          }}
        >
          Join thousands of developers who ship with confidence.
        </p>
        <button
          style={filledButton(md.onPrimary, md.primary)}
        >
          Get started for free
        </button>
      </div>
    </section>
  );

  // ── 8. Footer ─────────────────────────────────────────────────────
  const footerColumns: { heading: string; links: string[] }[] = [
    {
      heading: "Product",
      links: ["Features", "Pricing", "Changelog", "Docs", "Integrations"],
    },
    {
      heading: "Company",
      links: ["About", "Blog", "Careers", "Contact"],
    },
    {
      heading: "Legal",
      links: ["Privacy", "Terms", "Cookie Policy"],
    },
  ];

  const footer = (
    <footer
      style={{
        backgroundColor: md.surface,
        borderTop: `1px solid ${md.outlineVariant}`,
        padding: "56px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 48,
        }}
      >
        {/* Logo + tagline */}
        <div style={{ minWidth: 200 }}>
          <div
            style={{
              fontFamily: md.font,
              fontSize: 20,
              fontWeight: 500,
              color: md.onSurface,
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8,
              letterSpacing: 0.15,
            }}
          >
            <span style={{ color: md.primary, fontSize: 22 }}>&#9650;</span>
            Stackpulse
          </div>
          <p
            style={{
              fontFamily: md.font,
              fontSize: 14,
              color: md.onSurfaceVariant,
              margin: 0,
              maxWidth: 240,
              lineHeight: 1.5,
              letterSpacing: 0.25,
            }}
          >
            Modern deployment infrastructure for teams that ship.
          </p>
        </div>

        {/* Link columns */}
        <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4
                style={{
                  fontFamily: md.font,
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                  color: md.onSurface,
                  margin: "0 0 16px",
                }}
              >
                {col.heading}
              </h4>
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
                        fontFamily: md.font,
                        fontSize: 14,
                        color: md.onSurfaceVariant,
                        textDecoration: "none",
                        letterSpacing: 0.25,
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
          maxWidth: 1200,
          margin: "0 auto",
          borderTop: `1px solid ${md.outlineVariant}`,
          marginTop: 48,
          paddingTop: 24,
        }}
      >
        <p
          style={{
            fontFamily: md.font,
            fontSize: 12,
            color: md.outline,
            margin: 0,
            letterSpacing: 0.4,
          }}
        >
          &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
        </p>
      </div>
    </footer>
  );

  // ── Assemble ──────────────────────────────────────────────────────
  return (
    <div style={{ fontFamily: md.font, backgroundColor: md.surface, color: md.onSurface }}>
      {header}
      {hero}
      {logosBar}
      {featuresSection}
      {testimonialsSection}
      {pricingSection}
      {ctaSection}
      {footer}
    </div>
  );
}
