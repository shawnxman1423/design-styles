"use client";

import React, { useState, CSSProperties } from "react";

/* ------------------------------------------------------------------ */
/*  StripeLanding                                                      */
/*  A Stripe-inspired landing page — clean type, vibrant gradients,    */
/*  generous whitespace, React + inline styles, zero dependencies.     */
/* ------------------------------------------------------------------ */

const palette = {
  bg: "#0a2540",
  bgLight: "#0d2d4f",
  surface: "#163456",
  surfaceLight: "#1b3f66",
  accent: "#635bff",
  accentHover: "#7a73ff",
  cyan: "#00d4ff",
  green: "#00d924",
  text: "#ffffff",
  textSecondary: "#adbdcc",
  border: "rgba(255,255,255,0.08)",
  white: "#ffffff",
};

const font =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

/* ---------- tiny helpers ---------- */

const sectionPadding: CSSProperties = {
  padding: "96px 24px",
  maxWidth: 1200,
  margin: "0 auto",
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      display: "inline-block",
      padding: "6px 14px",
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: 0.5,
      background: "rgba(99,91,255,0.15)",
      color: palette.accent,
      marginBottom: 16,
    }}
  >
    {children}
  </span>
);

/* ================================================================== */
/*  COMPONENT                                                          */
/* ================================================================== */

export function StripeLanding() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  /* ---------- 1. Header ---------- */
  const header = (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background: "rgba(10,37,64,0.85)",
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
          fontFamily: font,
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: palette.white,
            letterSpacing: -0.4,
          }}
        >
          <span style={{ marginRight: 6, fontSize: 20 }}>&#9650;</span>
          Stackpulse
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 32 }}>
          {["Products", "Developers", "Pricing", "Resources"].map((link) => (
            <a
              key={link}
              href="#"
              onMouseEnter={() => setHoveredNav(link)}
              onMouseLeave={() => setHoveredNav(null)}
              style={{
                color:
                  hoveredNav === link
                    ? palette.white
                    : palette.textSecondary,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Sign-up */}
        <a
          href="#"
          onMouseEnter={() => setHoveredBtn("header-cta")}
          onMouseLeave={() => setHoveredBtn(null)}
          style={{
            background:
              hoveredBtn === "header-cta"
                ? palette.accentHover
                : palette.accent,
            color: palette.white,
            padding: "8px 20px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
            transition: "background 0.2s",
          }}
        >
          Sign up
        </a>
      </div>
    </header>
  );

  /* ---------- 2. Hero ---------- */
  const hero = (
    <section
      style={{
        ...sectionPadding,
        paddingTop: 120,
        paddingBottom: 120,
        textAlign: "center",
        fontFamily: font,
      }}
    >
      <Badge>Now in public beta</Badge>
      <h1
        style={{
          fontSize: "clamp(40px, 6vw, 72px)",
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: -1.5,
          color: palette.white,
          margin: "0 auto 24px",
          maxWidth: 800,
        }}
      >
        Financial infrastructure for{" "}
        <span
          style={{
            background: `linear-gradient(135deg, ${palette.accent}, ${palette.cyan})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          the internet
        </span>
      </h1>
      <p
        style={{
          fontSize: 20,
          lineHeight: 1.6,
          color: palette.textSecondary,
          maxWidth: 580,
          margin: "0 auto 40px",
        }}
      >
        Stackpulse builds economic infrastructure for the internet. Businesses
        of every size use our software to accept payments and manage their
        operations online.
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <a
          href="#"
          onMouseEnter={() => setHoveredBtn("hero-primary")}
          onMouseLeave={() => setHoveredBtn(null)}
          style={{
            background:
              hoveredBtn === "hero-primary"
                ? palette.accentHover
                : palette.accent,
            color: palette.white,
            padding: "14px 32px",
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
            transition: "background 0.2s",
          }}
        >
          Start now &rarr;
        </a>
        <a
          href="#"
          onMouseEnter={() => setHoveredBtn("hero-secondary")}
          onMouseLeave={() => setHoveredBtn(null)}
          style={{
            background: hoveredBtn === "hero-secondary"
              ? "rgba(255,255,255,0.12)"
              : "rgba(255,255,255,0.06)",
            color: palette.white,
            padding: "14px 32px",
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
            border: `1px solid ${palette.border}`,
            transition: "background 0.2s",
          }}
        >
          Contact sales
        </a>
      </div>
    </section>
  );

  /* ---------- 3. Logos bar ---------- */
  const logos = (
    <section
      style={{
        ...sectionPadding,
        paddingTop: 0,
        paddingBottom: 80,
        textAlign: "center",
        fontFamily: font,
      }}
    >
      <p
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: palette.textSecondary,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          marginBottom: 32,
        }}
      >
        Trusted by 2,000+ makers at
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "32px 56px",
        }}
      >
        {["Vercel", "Linear", "Notion", "Figma", "Supabase"].map((name) => (
          <span
            key={name}
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: -0.3,
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );

  /* ---------- 4. Features ---------- */
  const featureCards = [
    {
      icon: "⚡",
      title: "Instant Payouts",
      desc: "Move money around the world in seconds, not days. Our global network supports 135+ currencies.",
    },
    {
      icon: "🔒",
      title: "Built-in Security",
      desc: "Enterprise-grade encryption and machine-learning fraud detection keep every transaction safe.",
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      desc: "Unified dashboards give you a live view of revenue, churn, and growth metrics at a glance.",
    },
  ];

  const features = (
    <section
      style={{
        background: palette.bgLight,
        fontFamily: font,
      }}
    >
      <div style={sectionPadding}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Badge>Features</Badge>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: palette.white,
              letterSpacing: -0.8,
              marginBottom: 16,
            }}
          >
            Everything you need to scale
          </h2>
          <p
            style={{
              fontSize: 18,
              color: palette.textSecondary,
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            A complete toolkit designed so you can focus on building great
            products instead of payment plumbing.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {featureCards.map((c) => (
            <div
              key={c.title}
              style={{
                background: palette.surface,
                border: `1px solid ${palette.border}`,
                borderRadius: 16,
                padding: 36,
                transition: "border-color 0.2s",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{c.icon}</div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: palette.white,
                  marginBottom: 12,
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: palette.textSecondary, margin: 0 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  /* ---------- 5. Testimonials ---------- */
  const testimonials = [
    {
      quote:
        "Stackpulse cut our payment integration time from months to days. The developer experience is unmatched.",
      name: "Sara Chen",
      role: "CTO, Lumos",
    },
    {
      quote:
        "We migrated 2M customers without a single failed transaction. Their uptime is legendary.",
      name: "Jake Morrison",
      role: "VP Eng, Tidepool",
    },
    {
      quote:
        "The analytics alone are worth it. We finally have real-time visibility into global revenue.",
      name: "Priya Kapoor",
      role: "Head of Growth, Arcwave",
    },
  ];

  const testimonialsSection = (
    <section style={{ fontFamily: font }}>
      <div style={sectionPadding}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Badge>Testimonials</Badge>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: palette.white,
              letterSpacing: -0.8,
            }}
          >
            Loved by builders worldwide
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: palette.surface,
                border: `1px solid ${palette.border}`,
                borderRadius: 16,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: palette.textSecondary,
                  margin: "0 0 28px",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: palette.white,
                    margin: 0,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: palette.textSecondary,
                    margin: "4px 0 0",
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

  /* ---------- 6. Pricing ---------- */
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      sub: "forever",
      features: ["1,000 transactions / mo", "Basic analytics", "Email support", "1 team member"],
      cta: "Get started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "/ month",
      features: ["Unlimited transactions", "Advanced analytics", "Priority support", "5 team members", "Custom branding"],
      cta: "Start free trial",
      highlighted: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "/ month",
      features: ["Everything in Pro", "Unlimited members", "SSO & audit logs", "Dedicated account manager", "99.99% SLA"],
      cta: "Contact sales",
      highlighted: false,
    },
  ];

  const pricing = (
    <section style={{ background: palette.bgLight, fontFamily: font }}>
      <div style={sectionPadding}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Badge>Pricing</Badge>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: palette.white,
              letterSpacing: -0.8,
              marginBottom: 16,
            }}
          >
            Simple, transparent pricing
          </h2>
          <p
            style={{
              fontSize: 18,
              color: palette.textSecondary,
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Start free, then grow with a plan that fits your needs.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {tiers.map((t) => {
            const isHl = t.highlighted;
            return (
              <div
                key={t.name}
                style={{
                  background: isHl
                    ? `linear-gradient(160deg, ${palette.accent}, #4338ca)`
                    : palette.surface,
                  border: isHl
                    ? "none"
                    : `1px solid ${palette.border}`,
                  borderRadius: 20,
                  padding: 40,
                  position: "relative",
                  boxShadow: isHl
                    ? "0 24px 60px rgba(99,91,255,0.35)"
                    : "none",
                }}
              >
                {isHl && (
                  <span
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: palette.cyan,
                      color: palette.bg,
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "4px 16px",
                      borderRadius: 999,
                      textTransform: "uppercase",
                      letterSpacing: 0.8,
                    }}
                  >
                    Most popular
                  </span>
                )}
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: palette.white,
                    marginBottom: 8,
                  }}
                >
                  {t.name}
                </h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                  <span
                    style={{
                      fontSize: 48,
                      fontWeight: 800,
                      color: palette.white,
                      letterSpacing: -1,
                    }}
                  >
                    {t.price}
                  </span>
                  <span style={{ fontSize: 16, color: isHl ? "rgba(255,255,255,0.7)" : palette.textSecondary }}>
                    {t.sub}
                  </span>
                </div>

                <hr
                  style={{
                    border: "none",
                    borderTop: `1px solid ${isHl ? "rgba(255,255,255,0.2)" : palette.border}`,
                    margin: "24px 0",
                  }}
                />

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                  {t.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: 15,
                        color: isHl ? "rgba(255,255,255,0.9)" : palette.textSecondary,
                        padding: "6px 0",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <span style={{ color: isHl ? palette.cyan : palette.green, fontSize: 16 }}>&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  onMouseEnter={() => setHoveredBtn(`pricing-${t.name}`)}
                  onMouseLeave={() => setHoveredBtn(null)}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "14px 0",
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "background 0.2s",
                    ...(isHl
                      ? {
                          background:
                            hoveredBtn === `pricing-${t.name}`
                              ? palette.white
                              : "rgba(255,255,255,0.92)",
                          color: palette.accent,
                        }
                      : {
                          background:
                            hoveredBtn === `pricing-${t.name}`
                              ? "rgba(255,255,255,0.12)"
                              : "rgba(255,255,255,0.06)",
                          color: palette.white,
                          border: `1px solid ${palette.border}`,
                        }),
                  }}
                >
                  {t.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  /* ---------- 7. CTA ---------- */
  const cta = (
    <section style={{ fontFamily: font }}>
      <div
        style={{
          ...sectionPadding,
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: `linear-gradient(135deg, ${palette.accent}, #4338ca)`,
            borderRadius: 24,
            padding: "80px 40px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: palette.white,
              letterSpacing: -0.8,
              marginBottom: 16,
            }}
          >
            Ready to get started?
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 480,
              margin: "0 auto 36px",
              lineHeight: 1.6,
            }}
          >
            Create an account in minutes and start accepting payments today.
            No setup fees, no contracts.
          </p>
          <a
            href="#"
            onMouseEnter={() => setHoveredBtn("bottom-cta")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              display: "inline-block",
              background:
                hoveredBtn === "bottom-cta"
                  ? palette.white
                  : "rgba(255,255,255,0.95)",
              color: palette.accent,
              padding: "16px 40px",
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            Create free account &rarr;
          </a>
        </div>
      </div>
    </section>
  );

  /* ---------- 8. Footer ---------- */
  const footerColumns: Record<string, string[]> = {
    Product: ["Features", "Pricing", "Integrations", "Changelog", "Docs"],
    Company: ["About", "Blog", "Careers", "Press", "Partners"],
    Legal: ["Privacy", "Terms", "Cookie policy", "Licenses"],
  };

  const footer = (
    <footer
      style={{
        borderTop: `1px solid ${palette.border}`,
        fontFamily: font,
      }}
    >
      <div
        style={{
          ...sectionPadding,
          paddingTop: 64,
          paddingBottom: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Left */}
          <div style={{ minWidth: 200 }}>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: palette.white,
                marginBottom: 12,
              }}
            >
              <span style={{ marginRight: 6, fontSize: 20 }}>&#9650;</span>
              Stackpulse
            </div>
            <p
              style={{
                fontSize: 14,
                color: palette.textSecondary,
                lineHeight: 1.6,
                maxWidth: 260,
                margin: 0,
              }}
            >
              Financial infrastructure for the internet. Accept payments, send
              payouts, and grow your business worldwide.
            </p>
          </div>

          {/* Right — columns */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 64px" }}>
            {Object.entries(footerColumns).map(([heading, links]) => (
              <div key={heading}>
                <h4
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: palette.white,
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                    marginBottom: 16,
                  }}
                >
                  {heading}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {links.map((l) => (
                    <li key={l} style={{ marginBottom: 10 }}>
                      <a
                        href="#"
                        style={{
                          color: palette.textSecondary,
                          textDecoration: "none",
                          fontSize: 14,
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
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: `1px solid ${palette.border}`,
            paddingTop: 24,
            fontSize: 13,
            color: palette.textSecondary,
          }}
        >
          &copy; {new Date().getFullYear()} Stackpulse, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );

  /* ---------- Render ---------- */
  return (
    <div style={{ background: palette.bg, minHeight: "100vh", color: palette.text }}>
      {header}
      {hero}
      {logos}
      {features}
      {testimonialsSection}
      {pricing}
      {cta}
      {footer}
    </div>
  );
}
