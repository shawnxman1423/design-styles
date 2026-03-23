"use client";

import React, { useState, CSSProperties } from "react";

/* ------------------------------------------------------------------ */
/*  iOS / Apple Modern Landing                                        */
/* ------------------------------------------------------------------ */

const SF_STACK =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif';

/* ---------- colour tokens ---------- */
const c = {
  bg: "#ffffff",
  bgAlt: "#f5f5f7",
  text: "#1d1d1f",
  textSecondary: "#6e6e73",
  accent: "#0071e3",
  accentHover: "#0077ed",
  border: "#d2d2d7",
  white: "#ffffff",
  cardBg: "#ffffff",
  highlight: "#0071e3",
  highlightText: "#ffffff",
};

/* ---------- reusable style helpers ---------- */
const section = (extra?: CSSProperties): CSSProperties => ({
  maxWidth: 1120,
  margin: "0 auto",
  padding: "96px 24px",
  ...extra,
});

const heading = (extra?: CSSProperties): CSSProperties => ({
  fontFamily: SF_STACK,
  fontSize: 48,
  fontWeight: 700,
  letterSpacing: "-0.025em",
  lineHeight: 1.08,
  color: c.text,
  margin: 0,
  ...extra,
});

const subheading = (extra?: CSSProperties): CSSProperties => ({
  fontFamily: SF_STACK,
  fontSize: 21,
  fontWeight: 400,
  lineHeight: 1.38,
  color: c.textSecondary,
  margin: 0,
  ...extra,
});

const btnBase: CSSProperties = {
  fontFamily: SF_STACK,
  fontSize: 17,
  fontWeight: 400,
  borderRadius: 980,
  border: "none",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  transition: "background 0.2s, opacity 0.2s",
};

const btnPrimary: CSSProperties = {
  ...btnBase,
  background: c.accent,
  color: c.white,
  padding: "12px 28px",
};

const btnSecondary: CSSProperties = {
  ...btnBase,
  background: "transparent",
  color: c.accent,
  padding: "12px 28px",
  border: `1px solid ${c.accent}`,
};

/* ================================================================== */
/*  Component                                                         */
/* ================================================================== */

export function IOSAppleModernLanding() {
  return (
    <div
      style={{
        fontFamily: SF_STACK,
        color: c.text,
        background: c.bg,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Hero />
      <LogosBar />
      <Features />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  1. Header                                                         */
/* ------------------------------------------------------------------ */

function Header() {
  const [hovered, setHovered] = useState<string | null>(null);

  const linkStyle = (id: string): CSSProperties => ({
    fontFamily: SF_STACK,
    fontSize: 14,
    fontWeight: 400,
    color: hovered === id ? c.text : c.textSecondary,
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.2s",
    letterSpacing: "-0.01em",
  });

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: `0.5px solid ${c.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 24px",
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: SF_STACK,
            fontWeight: 600,
            fontSize: 18,
            letterSpacing: "-0.02em",
            color: c.text,
            whiteSpace: "nowrap",
          }}
        >
          ▲ Stackpulse
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 32 }}>
          {["Features", "Testimonials", "Pricing", "Docs"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={linkStyle(l)}
              onMouseEnter={() => setHovered(l)}
              onMouseLeave={() => setHovered(null)}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Sign-up */}
        <a
          href="#signup"
          style={{
            ...btnBase,
            background: c.accent,
            color: c.white,
            padding: "7px 18px",
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          Sign up
        </a>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  2. Hero                                                           */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section
      style={{
        ...section(),
        paddingTop: 120,
        paddingBottom: 80,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={heading({
          fontSize: 64,
          letterSpacing: "-0.04em",
          maxWidth: 780,
        })}
      >
        Ship faster.{" "}
        <span style={{ color: c.accent }}>Scale effortlessly.</span>
      </h1>
      <p
        style={subheading({
          marginTop: 20,
          maxWidth: 560,
          fontSize: 21,
        })}
      >
        Stackpulse gives your team the infrastructure toolkit to build, deploy,
        and monitor modern applications — without the overhead.
      </p>
      <div style={{ display: "flex", gap: 16, marginTop: 40 }}>
        <a href="#signup" style={btnPrimary}>
          Get started free
        </a>
        <a href="#demo" style={btnSecondary}>
          Watch demo
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. Logos Bar                                                      */
/* ------------------------------------------------------------------ */

function LogosBar() {
  const brands = ["Linear", "Vercel", "Notion", "Raycast", "Loom"];

  return (
    <section style={{ background: c.bgAlt }}>
      <div
        style={{
          ...section({ paddingTop: 48, paddingBottom: 48 }),
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: SF_STACK,
            fontSize: 14,
            fontWeight: 400,
            color: c.textSecondary,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            margin: "0 0 28px",
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
          {brands.map((b) => (
            <span
              key={b}
              style={{
                fontFamily: SF_STACK,
                fontSize: 20,
                fontWeight: 600,
                color: c.border,
                letterSpacing: "-0.01em",
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. Features                                                       */
/* ------------------------------------------------------------------ */

const featureData = [
  {
    title: "Instant Deploys",
    desc: "Push to main and your changes are live in seconds. Zero-config CI/CD baked right in.",
    icon: "⚡",
  },
  {
    title: "Edge Observability",
    desc: "Real-time metrics, logs, and traces across every region — all from a single dashboard.",
    icon: "📊",
  },
  {
    title: "Team Collaboration",
    desc: "Branch previews, inline comments, and role-based access keep everyone aligned.",
    icon: "👥",
  },
];

function Features() {
  return (
    <section id="features" style={section()}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <h2 style={heading({ fontSize: 48 })}>
          Everything you need to ship
        </h2>
        <p style={subheading({ marginTop: 16 })}>
          A complete platform so your team can focus on building, not plumbing.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {featureData.map((f) => (
          <div
            key={f.title}
            style={{
              background: c.bgAlt,
              borderRadius: 20,
              padding: 36,
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
            <h3
              style={{
                fontFamily: SF_STACK,
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                margin: "0 0 10px",
                color: c.text,
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                fontFamily: SF_STACK,
                fontSize: 16,
                lineHeight: 1.5,
                color: c.textSecondary,
                margin: 0,
              }}
            >
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  5. Testimonials                                                   */
/* ------------------------------------------------------------------ */

const testimonialData = [
  {
    quote:
      "Stackpulse cut our deploy times by 80%. The developer experience is unmatched.",
    name: "Elena Voss",
    role: "CTO, Arcline",
  },
  {
    quote:
      "We migrated our entire stack in a weekend. The observability tools alone are worth it.",
    name: "Marcus Chen",
    role: "Lead Engineer, Luminary",
  },
  {
    quote:
      "Finally, infrastructure that gets out of the way. Our team ships twice as fast now.",
    name: "Priya Sharma",
    role: "VP Engineering, Tidepool",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ background: c.bgAlt, ...section() } as CSSProperties}
    >
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <h2 style={heading({ fontSize: 48 })}>Loved by builders</h2>
        <p style={subheading({ marginTop: 16 })}>
          See why teams choose Stackpulse to power their products.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {testimonialData.map((t) => (
          <div
            key={t.name}
            style={{
              background: c.cardBg,
              borderRadius: 20,
              padding: 36,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <p
              style={{
                fontFamily: SF_STACK,
                fontSize: 18,
                fontWeight: 400,
                lineHeight: 1.5,
                color: c.text,
                margin: "0 0 28px",
                fontStyle: "normal",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p
                style={{
                  fontFamily: SF_STACK,
                  fontSize: 16,
                  fontWeight: 600,
                  color: c.text,
                  margin: 0,
                }}
              >
                {t.name}
              </p>
              <p
                style={{
                  fontFamily: SF_STACK,
                  fontSize: 14,
                  color: c.textSecondary,
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
  );
}

/* ------------------------------------------------------------------ */
/*  6. Pricing                                                        */
/* ------------------------------------------------------------------ */

const pricingData = [
  {
    tier: "Starter",
    price: "Free",
    sub: "For individuals getting started",
    features: [
      "1 project",
      "10 GB bandwidth",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    tier: "Pro",
    price: "$29",
    sub: "For professionals and small teams",
    features: [
      "Unlimited projects",
      "100 GB bandwidth",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    tier: "Team",
    price: "$79",
    sub: "For growing organisations",
    features: [
      "Everything in Pro",
      "1 TB bandwidth",
      "Dedicated support",
      "SSO & SAML",
      "Audit logs",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

function Pricing() {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  return (
    <section id="pricing" style={section()}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <h2 style={heading({ fontSize: 48 })}>Simple, transparent pricing</h2>
        <p style={subheading({ marginTop: 16 })}>
          Start free. Upgrade when you&apos;re ready.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          alignItems: "start",
        }}
      >
        {pricingData.map((p) => {
          const hl = p.highlighted;
          const isHovered = hoveredTier === p.tier;

          return (
            <div
              key={p.tier}
              onMouseEnter={() => setHoveredTier(p.tier)}
              onMouseLeave={() => setHoveredTier(null)}
              style={{
                background: hl ? c.text : c.cardBg,
                borderRadius: 20,
                padding: 40,
                border: hl ? "none" : `1px solid ${c.border}`,
                transform: isHovered ? "translateY(-4px)" : "none",
                transition: "transform 0.25s, box-shadow 0.25s",
                boxShadow: isHovered
                  ? "0 12px 40px rgba(0,0,0,0.1)"
                  : "0 1px 3px rgba(0,0,0,0.04)",
                position: "relative",
              }}
            >
              {hl && (
                <span
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: c.accent,
                    color: c.white,
                    fontSize: 12,
                    fontWeight: 600,
                    fontFamily: SF_STACK,
                    padding: "4px 12px",
                    borderRadius: 980,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                  }}
                >
                  Popular
                </span>
              )}

              <p
                style={{
                  fontFamily: SF_STACK,
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: hl ? "rgba(255,255,255,0.6)" : c.textSecondary,
                  margin: "0 0 12px",
                }}
              >
                {p.tier}
              </p>

              <p
                style={{
                  fontFamily: SF_STACK,
                  fontSize: 48,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: hl ? c.white : c.text,
                  margin: "0 0 4px",
                }}
              >
                {p.price}
                {p.price !== "Free" && (
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      color: hl ? "rgba(255,255,255,0.5)" : c.textSecondary,
                    }}
                  >
                    /mo
                  </span>
                )}
              </p>

              <p
                style={{
                  fontFamily: SF_STACK,
                  fontSize: 15,
                  color: hl ? "rgba(255,255,255,0.6)" : c.textSecondary,
                  margin: "0 0 28px",
                }}
              >
                {p.sub}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px",
                }}
              >
                {p.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontFamily: SF_STACK,
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: hl ? "rgba(255,255,255,0.85)" : c.text,
                      padding: "6px 0",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        color: hl ? c.accent : c.accent,
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#signup"
                style={{
                  ...btnBase,
                  width: "100%",
                  padding: "14px 0",
                  fontSize: 16,
                  fontWeight: 500,
                  background: hl ? c.accent : "transparent",
                  color: hl ? c.white : c.accent,
                  border: hl ? "none" : `1px solid ${c.accent}`,
                }}
              >
                {p.cta}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  7. CTA                                                            */
/* ------------------------------------------------------------------ */

function CTASection() {
  return (
    <section style={{ background: c.bgAlt }}>
      <div
        style={{
          ...section({ paddingTop: 96, paddingBottom: 96 }),
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={heading({ fontSize: 48, maxWidth: 640 })}>
          Ready to build the future?
        </h2>
        <p style={subheading({ marginTop: 16, maxWidth: 480 })}>
          Join thousands of developers shipping faster with Stackpulse.
        </p>
        <a href="#signup" style={{ ...btnPrimary, marginTop: 36, padding: "16px 36px", fontSize: 18 }}>
          Get started for free
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  8. Footer                                                         */
/* ------------------------------------------------------------------ */

const footerLinks: Record<string, string[]> = {
  Product: ["Features", "Pricing", "Changelog", "Docs", "Status"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Security"],
};

function Footer() {
  return (
    <footer
      style={{
        borderTop: `0.5px solid ${c.border}`,
        background: c.bg,
      }}
    >
      <div
        style={{
          ...section({ paddingTop: 64, paddingBottom: 32 }),
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 48,
        }}
      >
        {/* Brand */}
        <div>
          <p
            style={{
              fontFamily: SF_STACK,
              fontWeight: 600,
              fontSize: 18,
              letterSpacing: "-0.02em",
              color: c.text,
              margin: "0 0 10px",
            }}
          >
            ▲ Stackpulse
          </p>
          <p
            style={{
              fontFamily: SF_STACK,
              fontSize: 14,
              lineHeight: 1.5,
              color: c.textSecondary,
              margin: 0,
            }}
          >
            Ship faster. Scale effortlessly. The modern infrastructure platform
            for builders.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <p
              style={{
                fontFamily: SF_STACK,
                fontSize: 13,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: c.textSecondary,
                margin: "0 0 16px",
              }}
            >
              {heading}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {links.map((l) => (
                <li key={l} style={{ marginBottom: 10 }}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    style={{
                      fontFamily: SF_STACK,
                      fontSize: 14,
                      color: c.textSecondary,
                      textDecoration: "none",
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

      {/* Copyright */}
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "24px 24px",
          borderTop: `0.5px solid ${c.border}`,
        }}
      >
        <p
          style={{
            fontFamily: SF_STACK,
            fontSize: 13,
            color: c.textSecondary,
            margin: 0,
          }}
        >
          &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
