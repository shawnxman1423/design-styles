"use client";

import React, { useState } from "react";

/* ──────────────────────────────────────────────
   Vercel / Next.js–style Landing Page
   ────────────────────────────────────────────── */

const FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

const colors = {
  bg: "#000000",
  surface: "#0a0a0a",
  card: "#111111",
  cardHover: "#1a1a1a",
  border: "#222222",
  borderLight: "#333333",
  text: "#ededed",
  textSecondary: "#888888",
  textTertiary: "#666666",
  accent: "#ffffff",
  accentBg: "#ffffff",
  accentText: "#000000",
  gradient1: "#ff4088",
  gradient2: "#6366f1",
  gradient3: "#06b6d4",
  proHighlight: "#6366f1",
};

/* ── Shared style helpers ── */

const sectionPadding: React.CSSProperties = {
  padding: "96px 24px",
  maxWidth: 1200,
  margin: "0 auto",
};

const sectionHeading: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  color: colors.textSecondary,
  marginBottom: 12,
  textAlign: "center",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "clamp(28px, 4vw, 40px)",
  fontWeight: 700,
  color: colors.text,
  textAlign: "center",
  marginBottom: 56,
  letterSpacing: "-0.02em",
  lineHeight: 1.2,
};

/* ──────────── HEADER ──────────── */

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Features", "Pricing", "Docs", "Blog"];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        backgroundColor: "rgba(0,0,0,0.72)",
        borderBottom: `1px solid ${colors.border}`,
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
            fontWeight: 700,
            fontSize: 18,
            color: colors.text,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ fontSize: 22 }}>▲</span> Stackpulse
        </div>

        {/* Center nav — desktop */}
        <nav
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
          }}
          className="vercel-desktop-nav"
        >
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                color: colors.textSecondary,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 400,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = colors.text)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = colors.textSecondary)
              }
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Sign-up button */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            style={{
              background: colors.accentBg,
              color: colors.accentText,
              border: "none",
              borderRadius: 6,
              padding: "8px 16px",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: FONT,
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Sign Up
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: colors.text,
              fontSize: 24,
              cursor: "pointer",
              padding: 4,
            }}
            className="vercel-hamburger"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            padding: "16px 24px",
            borderTop: `1px solid ${colors.border}`,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                color: colors.textSecondary,
                textDecoration: "none",
                fontSize: 15,
              }}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}

      {/* Responsive styles injected once */}
      <style>{`
        @media (max-width: 768px) {
          .vercel-desktop-nav { display: none !important; }
          .vercel-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}

/* ──────────── HERO ──────────── */

function Hero() {
  return (
    <section
      style={{
        padding: "120px 24px 96px",
        textAlign: "center",
        maxWidth: 900,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Subtle top glow */}
      <div
        style={{
          position: "absolute",
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 500,
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "inline-block",
          padding: "6px 16px",
          borderRadius: 999,
          border: `1px solid ${colors.border}`,
          fontSize: 13,
          color: colors.textSecondary,
          marginBottom: 32,
          background: colors.card,
        }}
      >
        Introducing Stackpulse 2.0 →
      </div>

      <h1
        style={{
          fontSize: "clamp(40px, 7vw, 72px)",
          fontWeight: 800,
          color: colors.text,
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          marginBottom: 24,
        }}
      >
        Ship faster.
        <br />
        <span
          style={{
            background: `linear-gradient(135deg, ${colors.gradient1}, ${colors.gradient2}, ${colors.gradient3})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Break nothing.
        </span>
      </h1>

      <p
        style={{
          fontSize: "clamp(16px, 2.5vw, 20px)",
          color: colors.textSecondary,
          maxWidth: 600,
          margin: "0 auto 48px",
          lineHeight: 1.6,
        }}
      >
        The modern deployment platform that gives developers the tools, workflows,
        and infrastructure to build and deploy at the edge.
      </p>

      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          style={{
            background: colors.accentBg,
            color: colors.accentText,
            border: "none",
            borderRadius: 8,
            padding: "14px 32px",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: FONT,
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Start Deploying
        </button>
        <button
          style={{
            background: "transparent",
            color: colors.text,
            border: `1px solid ${colors.borderLight}`,
            borderRadius: 8,
            padding: "14px 32px",
            fontSize: 16,
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: FONT,
            transition: "border-color 0.15s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = colors.textSecondary)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = colors.borderLight)
          }
        >
          Read the Docs
        </button>
      </div>
    </section>
  );
}

/* ──────────── LOGOS BAR ──────────── */

function LogosBar() {
  const brands = ["Acme Corp", "Globex", "Initech", "Massive Dynamic", "Hooli"];

  return (
    <section
      style={{
        padding: "48px 24px",
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`,
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: 13,
          color: colors.textTertiary,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: 28,
          fontWeight: 500,
        }}
      >
        Trusted by 2,000+ makers at
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "clamp(24px, 5vw, 56px)",
          flexWrap: "wrap",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {brands.map((b) => (
          <span
            key={b}
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              fontWeight: 600,
              color: colors.textTertiary,
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ──────────── FEATURES ──────────── */

function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Edge Functions",
      description:
        "Execute server-side logic at the edge for instant responses, anywhere in the world. Zero cold starts.",
    },
    {
      icon: "🔄",
      title: "Instant Rollbacks",
      description:
        "Every deployment is immutable. Roll back to any previous version with a single click — no downtime.",
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description:
        "Monitor performance, errors, and user engagement in real time with built-in observability tools.",
    },
  ];

  return (
    <section id="features" style={sectionPadding}>
      <p style={sectionHeading}>Features</p>
      <h2 style={sectionTitle}>Everything you need to deploy</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {features.map((f) => (
          <div
            key={f.title}
            style={{
              background: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: 12,
              padding: 32,
              transition: "border-color 0.2s, background 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = colors.borderLight;
              e.currentTarget.style.background = colors.cardHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = colors.border;
              e.currentTarget.style.background = colors.card;
            }}
          >
            <div
              style={{
                fontSize: 28,
                marginBottom: 16,
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${colors.border}`,
              }}
            >
              {f.icon}
            </div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: colors.text,
                marginBottom: 8,
                letterSpacing: "-0.01em",
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                color: colors.textSecondary,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────── TESTIMONIALS ──────────── */

function Testimonials() {
  const quotes = [
    {
      text: "Stackpulse cut our deploy times by 80%. We went from hour-long releases to pushing in seconds.",
      name: "Sarah Chen",
      role: "CTO, Luminary",
    },
    {
      text: "The DX is unmatched. Preview deployments and instant rollbacks changed how our entire team ships.",
      name: "Marcus Webb",
      role: "Lead Engineer, Riftlabs",
    },
    {
      text: "We migrated 40 microservices in a weekend. The platform just handles the complexity for you.",
      name: "Priya Sharma",
      role: "VP Eng, Codewell",
    },
  ];

  return (
    <section style={{ ...sectionPadding, paddingTop: 48 }}>
      <p style={sectionHeading}>Testimonials</p>
      <h2 style={sectionTitle}>Loved by developers worldwide</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {quotes.map((q) => (
          <div
            key={q.name}
            style={{
              background: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: 12,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: colors.textSecondary,
                lineHeight: 1.7,
                margin: 0,
                marginBottom: 24,
                fontStyle: "italic",
              }}
            >
              &ldquo;{q.text}&rdquo;
            </p>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: colors.text,
                  margin: 0,
                }}
              >
                {q.name}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: colors.textTertiary,
                  margin: "4px 0 0",
                }}
              >
                {q.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────── PRICING ──────────── */

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "For hobby projects and experiments.",
      features: [
        "1 team member",
        "10 deploys / day",
        "100 GB bandwidth",
        "Community support",
        "Automatic HTTPS",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      description: "For professional developers and startups.",
      features: [
        "Up to 10 members",
        "Unlimited deploys",
        "1 TB bandwidth",
        "Priority support",
        "Advanced analytics",
        "Custom domains",
        "Edge functions",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Team",
      price: "$79",
      period: "/mo",
      description: "For growing teams with advanced needs.",
      features: [
        "Unlimited members",
        "Unlimited deploys",
        "5 TB bandwidth",
        "Dedicated support",
        "SSO & audit logs",
        "SLA guarantee",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      style={{
        ...sectionPadding,
        paddingTop: 48,
      }}
    >
      <p style={sectionHeading}>Pricing</p>
      <h2 style={sectionTitle}>Start free, scale as you grow</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          alignItems: "start",
        }}
      >
        {tiers.map((t) => (
          <div
            key={t.name}
            style={{
              background: t.highlighted ? colors.card : colors.surface,
              border: `1px solid ${t.highlighted ? colors.proHighlight : colors.border}`,
              borderRadius: 12,
              padding: 32,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {t.highlighted && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${colors.gradient1}, ${colors.gradient2}, ${colors.gradient3})`,
                }}
              />
            )}

            {t.highlighted && (
              <span
                style={{
                  display: "inline-block",
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: colors.proHighlight,
                  marginBottom: 12,
                }}
              >
                Most Popular
              </span>
            )}

            <h3
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: colors.text,
                margin: 0,
                marginBottom: 8,
                letterSpacing: "-0.01em",
              }}
            >
              {t.name}
            </h3>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 4,
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontSize: 40,
                  fontWeight: 800,
                  color: colors.text,
                  letterSpacing: "-0.03em",
                }}
              >
                {t.price}
              </span>
              {t.period && (
                <span
                  style={{
                    fontSize: 14,
                    color: colors.textTertiary,
                  }}
                >
                  {t.period}
                </span>
              )}
            </div>

            <p
              style={{
                fontSize: 14,
                color: colors.textSecondary,
                margin: "0 0 24px",
                lineHeight: 1.5,
              }}
            >
              {t.description}
            </p>

            <button
              style={{
                width: "100%",
                padding: "12px 0",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: FONT,
                transition: "opacity 0.15s",
                border: t.highlighted
                  ? "none"
                  : `1px solid ${colors.borderLight}`,
                background: t.highlighted ? colors.accentBg : "transparent",
                color: t.highlighted ? colors.accentText : colors.text,
                marginBottom: 28,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {t.cta}
            </button>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {t.features.map((feat) => (
                <li
                  key={feat}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                    color: colors.textSecondary,
                  }}
                >
                  <span style={{ color: colors.textTertiary, fontSize: 14 }}>
                    ✓
                  </span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────── CTA ──────────── */

function CtaSection() {
  return (
    <section
      style={{
        margin: "48px 24px",
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto",
        background: colors.card,
        border: `1px solid ${colors.border}`,
        borderRadius: 16,
        padding: "80px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <h2
        style={{
          fontSize: "clamp(28px, 5vw, 44px)",
          fontWeight: 800,
          color: colors.text,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: 16,
          position: "relative",
        }}
      >
        Ready to deploy?
      </h2>
      <p
        style={{
          fontSize: 16,
          color: colors.textSecondary,
          marginBottom: 36,
          position: "relative",
        }}
      >
        Start shipping in under two minutes. No credit card required.
      </p>
      <button
        style={{
          background: colors.accentBg,
          color: colors.accentText,
          border: "none",
          borderRadius: 8,
          padding: "14px 40px",
          fontSize: 16,
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: FONT,
          transition: "opacity 0.15s",
          position: "relative",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Get Started for Free
      </button>
    </section>
  );
}

/* ──────────── FOOTER ──────────── */

function Footer() {
  const columns = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Changelog", "Integrations"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];

  return (
    <footer
      style={{
        borderTop: `1px solid ${colors.border}`,
        padding: "64px 24px 32px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 48,
          marginBottom: 48,
        }}
      >
        {/* Left — logo + tagline */}
        <div style={{ minWidth: 200, maxWidth: 280 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 700,
              fontSize: 18,
              color: colors.text,
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}
          >
            <span style={{ fontSize: 22 }}>▲</span> Stackpulse
          </div>
          <p
            style={{
              fontSize: 14,
              color: colors.textTertiary,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Ship faster, break nothing. The modern deployment platform for
            developers.
          </p>
        </div>

        {/* Right — link columns */}
        <div
          style={{
            display: "flex",
            gap: "clamp(32px, 6vw, 80px)",
            flexWrap: "wrap",
          }}
        >
          {columns.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: colors.textSecondary,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 16,
                  margin: "0 0 16px",
                }}
              >
                {col.title}
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
                        color: colors.textTertiary,
                        textDecoration: "none",
                        fontSize: 14,
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = colors.text)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = colors.textTertiary)
                      }
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
          borderTop: `1px solid ${colors.border}`,
          paddingTop: 24,
          fontSize: 13,
          color: colors.textTertiary,
        }}
      >
        © {new Date().getFullYear()} Stackpulse, Inc. All rights reserved.
      </div>
    </footer>
  );
}

/* ──────────── PAGE EXPORT ──────────── */

export function VercelNextJSLanding() {
  return (
    <div
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        fontFamily: FONT,
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <Header />
      <Hero />
      <LogosBar />
      <Features />
      <Testimonials />
      <Pricing />
      <CtaSection />
      <Footer />
    </div>
  );
}
