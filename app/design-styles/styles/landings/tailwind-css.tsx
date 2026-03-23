"use client";

import React, { useState } from "react";

// ── Tailwind CSS Style Landing ──────────────────────────────────────
// Recreates the clean, utility-first aesthetic Tailwind is known for:
// tight spacing, system font stack, subtle gray palette, crisp borders,
// small-radius corners, and a confident indigo accent.

const font =
  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

const colors = {
  white: "#ffffff",
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  gray500: "#6b7280",
  gray600: "#4b5563",
  gray700: "#374151",
  gray800: "#1f2937",
  gray900: "#111827",
  indigo500: "#6366f1",
  indigo600: "#4f46e5",
  indigo700: "#4338ca",
  indigo50: "#eef2ff",
};

/* ── tiny helpers ─────────────────────────────────────────────────── */

const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 24px",
  width: "100%",
  boxSizing: "border-box",
};

const badge = (text: string) => (
  <span
    style={{
      display: "inline-block",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: colors.indigo600,
      background: colors.indigo50,
      padding: "4px 12px",
      borderRadius: 9999,
    }}
  >
    {text}
  </span>
);

const sectionHeading = (
  label: string,
  title: string,
  subtitle: string
) => (
  <div style={{ textAlign: "center", marginBottom: 48 }}>
    {badge(label)}
    <h2
      style={{
        fontSize: 36,
        fontWeight: 800,
        color: colors.gray900,
        marginTop: 12,
        marginBottom: 12,
        lineHeight: 1.2,
        letterSpacing: "-0.025em",
      }}
    >
      {title}
    </h2>
    <p
      style={{
        fontSize: 18,
        color: colors.gray500,
        maxWidth: 560,
        margin: "0 auto",
        lineHeight: 1.6,
      }}
    >
      {subtitle}
    </p>
  </div>
);

/* ── 1. Header ───────────────────────────────────────────────────── */

function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const links = ["Features", "Pricing", "Docs", "Blog"];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${colors.gray200}`,
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
        {/* logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontWeight: 700,
            fontSize: 18,
            color: colors.gray900,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ fontSize: 20 }}>&#9650;</span> Stackpulse
        </div>

        {/* nav */}
        <nav style={{ display: "flex", gap: 32 }}>
          {links.map((l) => (
            <a
              key={l}
              href="#"
              onMouseEnter={() => setHovered(l)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: hovered === l ? colors.gray900 : colors.gray500,
                textDecoration: "none",
                transition: "color 150ms",
              }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* cta */}
        <a
          href="#"
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: colors.white,
            background: colors.indigo600,
            padding: "8px 18px",
            borderRadius: 8,
            textDecoration: "none",
            transition: "background 150ms",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget.style.background = colors.indigo700))
          }
          onMouseLeave={(e) =>
            ((e.currentTarget.style.background = colors.indigo600))
          }
        >
          Sign up
        </a>
      </div>
    </header>
  );
}

/* ── 2. Hero ─────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      style={{
        ...container,
        textAlign: "center",
        paddingTop: 96,
        paddingBottom: 80,
      }}
    >
      {badge("Now in public beta")}
      <h1
        style={{
          fontSize: 60,
          fontWeight: 800,
          color: colors.gray900,
          lineHeight: 1.1,
          letterSpacing: "-0.035em",
          marginTop: 20,
          marginBottom: 20,
          maxWidth: 720,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Ship faster with modern developer tools
      </h1>
      <p
        style={{
          fontSize: 20,
          color: colors.gray500,
          maxWidth: 540,
          margin: "0 auto 36px",
          lineHeight: 1.6,
        }}
      >
        Stackpulse gives your team the observability, automation, and
        deployment pipeline you need — all in one place.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            fontSize: 15,
            fontWeight: 600,
            color: colors.white,
            background: colors.indigo600,
            padding: "12px 28px",
            borderRadius: 8,
            textDecoration: "none",
            transition: "background 150ms",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget.style.background = colors.indigo700))
          }
          onMouseLeave={(e) =>
            ((e.currentTarget.style.background = colors.indigo600))
          }
        >
          Get started free &rarr;
        </a>
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            fontSize: 15,
            fontWeight: 600,
            color: colors.gray700,
            background: colors.white,
            border: `1px solid ${colors.gray300}`,
            padding: "12px 28px",
            borderRadius: 8,
            textDecoration: "none",
            transition: "border-color 150ms",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget.style.borderColor = colors.gray400))
          }
          onMouseLeave={(e) =>
            ((e.currentTarget.style.borderColor = colors.gray300))
          }
        >
          View demo
        </a>
      </div>
    </section>
  );
}

/* ── 3. Logos bar ─────────────────────────────────────────────────── */

function LogosBar() {
  const brands = ["Vercel", "Stripe", "Linear", "Supabase", "Resend"];
  return (
    <section
      style={{
        borderTop: `1px solid ${colors.gray200}`,
        borderBottom: `1px solid ${colors.gray200}`,
        background: colors.gray50,
        padding: "40px 0",
      }}
    >
      <div style={{ ...container, textAlign: "center" }}>
        <p
          style={{
            fontSize: 13,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: colors.gray400,
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
                fontSize: 18,
                fontWeight: 700,
                color: colors.gray300,
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

/* ── 4. Features ─────────────────────────────────────────────────── */

const featureData = [
  {
    icon: "\u26A1",
    title: "Instant deploys",
    desc: "Push to main and your changes go live in seconds with zero-downtime deployments.",
  },
  {
    icon: "\uD83D\uDD12",
    title: "Edge-first security",
    desc: "Built-in WAF, DDoS protection, and automatic TLS certificates at every edge node.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Real-time analytics",
    desc: "Track latency, throughput, and errors with dashboards that update in real time.",
  },
];

function Features() {
  return (
    <section style={{ ...container, padding: "96px 24px" }}>
      {sectionHeading(
        "Features",
        "Everything you need to ship",
        "A modern stack built for speed, reliability, and developer experience."
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {featureData.map((f) => (
          <div
            key={f.title}
            style={{
              background: colors.white,
              border: `1px solid ${colors.gray200}`,
              borderRadius: 12,
              padding: 32,
              transition: "box-shadow 200ms, border-color 200ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 4px 24px rgba(0,0,0,0.06)";
              e.currentTarget.style.borderColor = colors.gray300;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = colors.gray200;
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: colors.indigo50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                marginBottom: 20,
              }}
            >
              {f.icon}
            </div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: colors.gray900,
                marginBottom: 8,
              }}
            >
              {f.title}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: colors.gray500 }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── 5. Testimonials ─────────────────────────────────────────────── */

const testimonials = [
  {
    quote:
      "Stackpulse cut our deploy time from 12 minutes to under 30 seconds. The team hasn\u2019t looked back.",
    name: "Mia Chen",
    role: "CTO, Driftlabs",
  },
  {
    quote:
      "We migrated our entire infra in a weekend. The DX is unmatched \u2014 it just works.",
    name: "Luka Petrovi\u0107",
    role: "Staff Engineer, Kova",
  },
  {
    quote:
      "The analytics alone are worth the subscription. Real-time visibility into every request.",
    name: "Anya Rao",
    role: "VP Engineering, Crestline",
  },
];

function Testimonials() {
  return (
    <section style={{ background: colors.gray50, padding: "96px 0" }}>
      <div style={container}>
        {sectionHeading(
          "Testimonials",
          "Loved by engineering teams",
          "See what developers and leaders are saying about Stackpulse."
        )}
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
                background: colors.white,
                border: `1px solid ${colors.gray200}`,
                borderRadius: 12,
                padding: 32,
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: colors.gray700,
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: colors.gray900,
                    marginBottom: 2,
                  }}
                >
                  {t.name}
                </p>
                <p style={{ fontSize: 13, color: colors.gray400 }}>
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 6. Pricing ──────────────────────────────────────────────────── */

const plans = [
  {
    name: "Starter",
    price: "Free",
    sub: "forever",
    features: [
      "1 project",
      "100 deploys / month",
      "Community support",
      "Basic analytics",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    sub: "/ month",
    features: [
      "Unlimited projects",
      "Unlimited deploys",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$79",
    sub: "/ month",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Audit logs",
      "Role-based access",
      "99.99% SLA",
    ],
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section style={{ ...container, padding: "96px 24px" }}>
      {sectionHeading(
        "Pricing",
        "Simple, transparent pricing",
        "Start for free, upgrade when you need more power."
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          alignItems: "start",
        }}
      >
        {plans.map((p) => {
          const hl = p.highlighted;
          return (
            <div
              key={p.name}
              style={{
                background: hl ? colors.gray900 : colors.white,
                border: hl ? "none" : `1px solid ${colors.gray200}`,
                borderRadius: 16,
                padding: 36,
                position: "relative",
                boxShadow: hl
                  ? "0 8px 40px rgba(99,102,241,0.25)"
                  : "none",
              }}
            >
              {hl && (
                <span
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: colors.white,
                    background: colors.indigo600,
                    padding: "4px 14px",
                    borderRadius: 9999,
                  }}
                >
                  Most popular
                </span>
              )}
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: hl ? colors.gray400 : colors.gray500,
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {p.name}
              </p>
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
                    fontWeight: 800,
                    color: hl ? colors.white : colors.gray900,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {p.price}
                </span>
                <span
                  style={{
                    fontSize: 15,
                    color: hl ? colors.gray400 : colors.gray400,
                  }}
                >
                  {p.sub}
                </span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {p.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: 14,
                      color: hl ? colors.gray300 : colors.gray600,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        color: hl ? colors.indigo500 : colors.indigo600,
                        fontWeight: 700,
                        fontSize: 15,
                      }}
                    >
                      &#10003;
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "12px 0",
                  borderRadius: 8,
                  textDecoration: "none",
                  transition: "background 150ms, border-color 150ms",
                  ...(hl
                    ? {
                        background: colors.indigo600,
                        color: colors.white,
                      }
                    : {
                        background: colors.white,
                        color: colors.gray700,
                        border: `1px solid ${colors.gray300}`,
                      }),
                }}
                onMouseEnter={(e) => {
                  if (hl) {
                    e.currentTarget.style.background = colors.indigo700;
                  } else {
                    e.currentTarget.style.borderColor = colors.gray400;
                  }
                }}
                onMouseLeave={(e) => {
                  if (hl) {
                    e.currentTarget.style.background = colors.indigo600;
                  } else {
                    e.currentTarget.style.borderColor = colors.gray300;
                  }
                }}
              >
                {hl ? "Get started" : "Start free"}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── 7. CTA ──────────────────────────────────────────────────────── */

function CtaBanner() {
  return (
    <section style={{ background: colors.gray900, padding: "80px 0" }}>
      <div style={{ ...container, textAlign: "center" }}>
        <h2
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: colors.white,
            letterSpacing: "-0.025em",
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Ready to ship faster?
        </h2>
        <p
          style={{
            fontSize: 18,
            color: colors.gray400,
            maxWidth: 480,
            margin: "0 auto 32px",
            lineHeight: 1.6,
          }}
        >
          Join thousands of teams already building with Stackpulse.
        </p>
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            fontSize: 15,
            fontWeight: 600,
            color: colors.white,
            background: colors.indigo600,
            padding: "14px 32px",
            borderRadius: 8,
            textDecoration: "none",
            transition: "background 150ms",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget.style.background = colors.indigo700))
          }
          onMouseLeave={(e) =>
            ((e.currentTarget.style.background = colors.indigo600))
          }
        >
          Start building for free &rarr;
        </a>
      </div>
    </section>
  );
}

/* ── 8. Footer ───────────────────────────────────────────────────── */

const footerCols: { heading: string; links: string[] }[] = [
  { heading: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
  { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { heading: "Legal", links: ["Privacy", "Terms", "DPA"] },
];

function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${colors.gray200}`,
        padding: "64px 0 40px",
      }}
    >
      <div
        style={{
          ...container,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 48,
        }}
      >
        {/* left */}
        <div style={{ maxWidth: 240 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: colors.gray900,
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 20 }}>&#9650;</span> Stackpulse
          </div>
          <p style={{ fontSize: 14, color: colors.gray400, lineHeight: 1.6 }}>
            The modern platform for shipping software, fast.
          </p>
        </div>

        {/* columns */}
        <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
          {footerCols.map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: colors.gray900,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 16,
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
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{
                        fontSize: 14,
                        color: colors.gray500,
                        textDecoration: "none",
                        transition: "color 150ms",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget.style.color = colors.gray900))
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget.style.color = colors.gray500))
                      }
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

      {/* copyright */}
      <div
        style={{
          ...container,
          borderTop: `1px solid ${colors.gray200}`,
          marginTop: 48,
          paddingTop: 24,
        }}
      >
        <p style={{ fontSize: 13, color: colors.gray400 }}>
          &copy; {new Date().getFullYear()} Stackpulse, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */

export function TailwindCSSLanding() {
  return (
    <div
      style={{
        fontFamily: font,
        color: colors.gray900,
        background: colors.white,
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
      <CtaBanner />
      <Footer />
    </div>
  );
}

export default TailwindCSSLanding;
