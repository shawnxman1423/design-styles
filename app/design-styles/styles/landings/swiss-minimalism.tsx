"use client";

import React, { useState } from "react";

/* ─────────────────────────── palette & tokens ─────────────────────────── */
const c = {
  black: "#0a0a0a",
  white: "#ffffff",
  gray50: "#fafafa",
  gray100: "#f5f5f5",
  gray200: "#e5e5e5",
  gray400: "#a3a3a3",
  gray500: "#737373",
  gray600: "#525252",
  gray800: "#262626",
  accent: "#e11d48",
  accentHover: "#be123c",
};

const font =
  '-apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif';

/* ─────────────────────────── shared primitives ────────────────────────── */
const sectionPadding: React.CSSProperties = {
  padding: "96px 24px",
  maxWidth: 1120,
  margin: "0 auto",
};

const heading2: React.CSSProperties = {
  fontSize: "clamp(28px, 4vw, 40px)",
  fontWeight: 700,
  letterSpacing: "-0.03em",
  lineHeight: 1.15,
  color: c.black,
  margin: 0,
};

const body: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.6,
  color: c.gray600,
  margin: 0,
};

const pill = (
  primary: boolean,
  full = false,
): React.CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 44,
  padding: "0 28px",
  fontSize: 14,
  fontWeight: 600,
  fontFamily: font,
  letterSpacing: "0.01em",
  borderRadius: 6,
  border: primary ? "none" : `1.5px solid ${c.gray200}`,
  background: primary ? c.black : "transparent",
  color: primary ? c.white : c.black,
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s, border-color 0.2s",
  width: full ? "100%" : undefined,
});

const divider: React.CSSProperties = {
  width: "100%",
  height: 1,
  background: c.gray200,
  border: "none",
  margin: 0,
};

/* ═══════════════════════════ COMPONENT ═══════════════════════════════════ */

export function SwissMinimalismLanding() {
  return (
    <div
      style={{
        fontFamily: font,
        color: c.black,
        background: c.white,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <Header />
      <Hero />
      <hr style={divider} />
      <LogosBar />
      <hr style={divider} />
      <Features />
      <Testimonials />
      <Pricing />
      <CtaBanner />
      <Footer />
    </div>
  );
}

/* ─────────────────────────── 1. Header ────────────────────────────────── */

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Features", "Pricing", "Docs", "Blog"];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${c.gray200}`,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* logo */}
        <a
          href="#"
          style={{
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: c.black,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ fontSize: 20 }}>&#9650;</span> Stackpulse
        </a>

        {/* center nav — desktop */}
        <nav
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
          }}
          className="swiss-nav-desktop"
        >
          {links.map((l) => (
            <a
              key={l}
              href="#"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: c.gray600,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = c.black)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = c.gray600)
              }
            >
              {l}
            </a>
          ))}
        </nav>

        {/* right */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            style={{
              ...pill(true),
              height: 38,
              padding: "0 20px",
              fontSize: 13,
            }}
          >
            Sign up
          </button>

          {/* hamburger — mobile */}
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
            }}
            className="swiss-hamburger"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke={c.black}
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" />
                  <line x1="18" y1="4" x2="4" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" />
                  <line x1="3" y1="11" x2="19" y2="11" />
                  <line x1="3" y1="16" x2="19" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            padding: "12px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            borderTop: `1px solid ${c.gray200}`,
          }}
        >
          {links.map((l) => (
            <a
              key={l}
              href="#"
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: c.gray600,
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}

      {/* responsive css */}
      <style>{`
        @media(max-width:768px){
          .swiss-nav-desktop{display:none!important}
          .swiss-hamburger{display:block!important}
        }
      `}</style>
    </header>
  );
}

/* ─────────────────────────── 2. Hero ──────────────────────────────────── */

function Hero() {
  return (
    <section style={{ ...sectionPadding, padding: "112px 24px 96px" }}>
      <div style={{ maxWidth: 720 }}>
        {/* overline */}
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: c.accent,
            margin: "0 0 20px",
          }}
        >
          Now in public beta
        </p>

        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: c.black,
            margin: "0 0 24px",
          }}
        >
          Ship faster.
          <br />
          Measure everything.
        </h1>

        <p
          style={{
            ...body,
            fontSize: "clamp(17px, 2vw, 20px)",
            maxWidth: 540,
            marginBottom: 40,
          }}
        >
          Stackpulse gives your team real-time analytics, feature
          flags, and deployment confidence — in one lightweight SDK.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button style={pill(true)}>Get started free</button>
          <button style={pill(false)}>View documentation</button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 3. Logos bar ──────────────────────────────── */

function LogosBar() {
  const brands = ["Vercel", "Linear", "Raycast", "Resend", "Dub"];

  return (
    <section
      style={{
        ...sectionPadding,
        padding: "48px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: c.gray400,
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
          gap: "clamp(28px, 5vw, 56px)",
          flexWrap: "wrap",
        }}
      >
        {brands.map((b) => (
          <span
            key={b}
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: c.gray400,
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── 4. Features ──────────────────────────────── */

const featureData = [
  {
    icon: "⬡",
    title: "Real-time analytics",
    desc: "Track every event the moment it happens. No batching, no delays — just instant, actionable data across all your products.",
  },
  {
    icon: "◈",
    title: "Feature flags",
    desc: "Roll out to 1 % or 100 %. Target by segment, schedule releases, and kill-switch instantly without redeploying.",
  },
  {
    icon: "◻",
    title: "Deploy confidence",
    desc: "Automated canary analysis scores every deploy. Get notified before regressions reach your users.",
  },
];

function Features() {
  return (
    <section style={{ ...sectionPadding, background: c.gray50 }}>
      <p
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: c.accent,
          margin: "0 0 12px",
        }}
      >
        Capabilities
      </p>
      <h2 style={{ ...heading2, marginBottom: 56 }}>
        Everything you need,
        <br />
        nothing you don&rsquo;t.
      </h2>

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
              background: c.white,
              border: `1px solid ${c.gray200}`,
              borderRadius: 10,
              padding: 32,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: 8,
                background: c.gray100,
                fontSize: 20,
                marginBottom: 20,
              }}
            >
              {f.icon}
            </span>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                margin: "0 0 8px",
                color: c.black,
              }}
            >
              {f.title}
            </h3>
            <p style={{ ...body, fontSize: 15 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── 5. Testimonials ──────────────────────────── */

const testimonialData = [
  {
    quote:
      "Stackpulse replaced three separate tools for us. The team shipped it in a day and never looked back.",
    name: "Elena Voss",
    role: "CTO, Arcline",
  },
  {
    quote:
      "The feature-flag targeting is incredibly precise. We can canary to exactly the cohort we need.",
    name: "James Okafor",
    role: "Staff Engineer, Planeshift",
  },
  {
    quote:
      "We cut our mean-time-to-detect by 80 %. Real-time really means real-time here.",
    name: "Sara Lindgren",
    role: "VP Engineering, Northbeam",
  },
];

function Testimonials() {
  return (
    <section style={sectionPadding}>
      <p
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: c.accent,
          margin: "0 0 12px",
        }}
      >
        Testimonials
      </p>
      <h2 style={{ ...heading2, marginBottom: 56 }}>
        Loved by engineering teams.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {testimonialData.map((t) => (
          <figure
            key={t.name}
            style={{
              margin: 0,
              padding: 32,
              border: `1px solid ${c.gray200}`,
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <blockquote
              style={{
                ...body,
                fontSize: 15,
                fontStyle: "normal",
                margin: "0 0 24px",
                padding: 0,
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption>
              <span
                style={{
                  display: "block",
                  fontSize: 14,
                  fontWeight: 700,
                  color: c.black,
                }}
              >
                {t.name}
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: 13,
                  color: c.gray500,
                  marginTop: 2,
                }}
              >
                {t.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── 6. Pricing ───────────────────────────────── */

const pricingData = [
  {
    name: "Starter",
    price: "Free",
    sub: "forever",
    features: [
      "10 k events / mo",
      "1 project",
      "Community support",
      "7-day data retention",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    sub: "/ month",
    features: [
      "1 M events / mo",
      "Unlimited projects",
      "Priority support",
      "90-day data retention",
      "Feature flags",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$79",
    sub: "/ month",
    features: [
      "10 M events / mo",
      "SSO & RBAC",
      "Dedicated CSM",
      "Unlimited retention",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section style={{ ...sectionPadding, background: c.gray50 }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: c.accent,
            margin: "0 0 12px",
          }}
        >
          Pricing
        </p>
        <h2 style={{ ...heading2, margin: "0 auto" }}>
          Simple, transparent pricing.
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          alignItems: "start",
        }}
      >
        {pricingData.map((p) => {
          const hi = p.highlighted;
          return (
            <div
              key={p.name}
              style={{
                background: hi ? c.black : c.white,
                color: hi ? c.white : c.black,
                border: hi ? "none" : `1px solid ${c.gray200}`,
                borderRadius: 12,
                padding: 36,
                position: "relative",
              }}
            >
              {hi && (
                <span
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    background: c.accent,
                    color: c.white,
                    padding: "4px 10px",
                    borderRadius: 4,
                  }}
                >
                  Popular
                </span>
              )}

              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  margin: "0 0 16px",
                  color: hi ? c.gray400 : c.gray500,
                }}
              >
                {p.name}
              </p>

              <p style={{ margin: "0 0 4px" }}>
                <span
                  style={{
                    fontSize: 44,
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  {p.price}
                </span>
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: hi ? c.gray400 : c.gray500,
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
                      color: hi ? "rgba(255,255,255,0.75)" : c.gray600,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 4,
                        background: hi
                          ? "rgba(255,255,255,0.12)"
                          : c.gray100,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        flexShrink: 0,
                      }}
                    >
                      &#10003;
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  ...pill(hi, true),
                  background: hi ? c.white : undefined,
                  color: hi ? c.black : undefined,
                  border: hi ? "none" : undefined,
                }}
              >
                {p.cta}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────────────────────── 7. CTA banner ────────────────────────────── */

function CtaBanner() {
  return (
    <section
      style={{
        background: c.black,
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2
          style={{
            ...heading2,
            color: c.white,
            marginBottom: 16,
          }}
        >
          Ready to ship with confidence?
        </h2>
        <p
          style={{
            ...body,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 36,
          }}
        >
          Start free today — no credit card required.
        </p>
        <button
          style={{
            ...pill(false),
            background: c.white,
            color: c.black,
            border: "none",
            fontWeight: 700,
          }}
        >
          Get started free
        </button>
      </div>
    </section>
  );
}

/* ─────────────────────────── 8. Footer ────────────────────────────────── */

const footerColumns: { heading: string; links: string[] }[] = [
  { heading: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
  { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { heading: "Legal", links: ["Privacy", "Terms", "DPA"] },
];

function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${c.gray200}`,
        padding: "56px 24px 40px",
        maxWidth: 1120,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 48,
        }}
      >
        {/* left */}
        <div style={{ maxWidth: 260 }}>
          <a
            href="#"
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: c.black,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 20 }}>&#9650;</span> Stackpulse
          </a>
          <p
            style={{
              ...body,
              fontSize: 14,
              marginTop: 12,
              color: c.gray500,
            }}
          >
            Real-time analytics, feature flags, and deploy confidence
            for modern engineering teams.
          </p>
        </div>

        {/* link columns */}
        <div style={{ display: "flex", gap: "clamp(40px, 6vw, 80px)", flexWrap: "wrap" }}>
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: c.black,
                  margin: "0 0 16px",
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
                        color: c.gray500,
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = c.black)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = c.gray500)
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
          marginTop: 56,
          paddingTop: 24,
          borderTop: `1px solid ${c.gray200}`,
        }}
      >
        <p style={{ fontSize: 13, color: c.gray400, margin: 0 }}>
          &copy; {new Date().getFullYear()} Stackpulse, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
