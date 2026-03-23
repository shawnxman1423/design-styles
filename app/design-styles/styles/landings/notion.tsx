"use client";

import React, { useState, CSSProperties } from "react";

/* ------------------------------------------------------------------ */
/*  Notion-style landing page                                         */
/*  Lightweight: React + inline styles, zero external dependencies    */
/* ------------------------------------------------------------------ */

const palette = {
  bg: "#ffffff",
  bgSoft: "#f7f6f3",
  bgAccent: "#fbfbfa",
  text: "#37352f",
  textSecondary: "#6b6b6b",
  textMuted: "#9b9a97",
  border: "#e3e2de",
  accent: "#2eaadc",
  black: "#37352f",
  white: "#ffffff",
  highlight: "#000000",
  highlightText: "#ffffff",
  cardShadow: "0 1px 3px rgba(55,53,47,0.08)",
  cardShadowHover: "0 4px 12px rgba(55,53,47,0.12)",
  proBg: "#37352f",
  proText: "#ffffff",
};

const font =
  'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"';

const container: CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "0 24px",
  width: "100%",
};

/* ------------------------------------------------------------------ */
/*  Header                                                            */
/* ------------------------------------------------------------------ */
function Header() {
  const [hovered, setHovered] = useState<string | null>(null);

  const navLinks = ["Product", "Solutions", "Resources", "Pricing"];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${palette.border}`,
      }}
    >
      <div
        style={{
          ...container,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: font,
            fontWeight: 700,
            fontSize: 18,
            color: palette.text,
            letterSpacing: "-0.02em",
          }}
        >
          ▲ Stackpulse
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 32 }}>
          {navLinks.map((l) => (
            <a
              key={l}
              href="#"
              onMouseEnter={() => setHovered(l)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontFamily: font,
                fontSize: 14,
                fontWeight: 500,
                color: hovered === l ? palette.text : palette.textSecondary,
                textDecoration: "none",
                transition: "color 0.15s",
              }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Sign-up */}
        <a
          href="#"
          style={{
            fontFamily: font,
            fontSize: 14,
            fontWeight: 600,
            color: palette.highlightText,
            background: palette.highlight,
            padding: "6px 16px",
            borderRadius: 6,
            textDecoration: "none",
            transition: "opacity 0.15s",
          }}
        >
          Sign up
        </a>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                              */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section style={{ textAlign: "center", padding: "96px 24px 64px" }}>
      <div style={container}>
        <h1
          style={{
            fontFamily: font,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            color: palette.text,
            margin: "0 0 20px",
          }}
        >
          Write, plan, share.
          <br />
          With AI at your side.
        </h1>

        <p
          style={{
            fontFamily: font,
            fontSize: 20,
            lineHeight: 1.6,
            color: palette.textSecondary,
            maxWidth: 560,
            margin: "0 auto 40px",
          }}
        >
          Stackpulse is the connected workspace where better, faster work
          happens — now powered by AI.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#"
            style={{
              fontFamily: font,
              fontSize: 16,
              fontWeight: 600,
              color: palette.highlightText,
              background: palette.highlight,
              padding: "12px 28px",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Get Stackpulse free
          </a>
          <a
            href="#"
            style={{
              fontFamily: font,
              fontSize: 16,
              fontWeight: 600,
              color: palette.text,
              background: palette.white,
              border: `1px solid ${palette.border}`,
              padding: "12px 28px",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Request a demo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Logos Bar                                                          */
/* ------------------------------------------------------------------ */
function LogosBar() {
  const brands = ["Figma", "Stripe", "Linear", "Vercel", "Loom"];

  return (
    <section style={{ padding: "48px 24px", textAlign: "center" }}>
      <div style={container}>
        <p
          style={{
            fontFamily: font,
            fontSize: 14,
            fontWeight: 500,
            color: palette.textMuted,
            textTransform: "uppercase" as const,
            letterSpacing: "0.08em",
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
          {brands.map((b) => (
            <span
              key={b}
              style={{
                fontFamily: font,
                fontSize: 18,
                fontWeight: 600,
                color: palette.textMuted,
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
/*  Features                                                          */
/* ------------------------------------------------------------------ */
const features = [
  {
    icon: "📝",
    title: "Docs & Notes",
    desc: "Beautiful documents that live alongside your work. Collaborate in real time with your whole team.",
  },
  {
    icon: "🗂️",
    title: "Projects & Tasks",
    desc: "Manage any project from start to finish. Kanban boards, timelines, and calendars — all connected.",
  },
  {
    icon: "🤖",
    title: "AI Assistant",
    desc: "Ask questions, generate summaries, draft content, and automate the busy-work so you can focus.",
  },
];

function Features() {
  return (
    <section
      style={{ padding: "80px 24px", background: palette.bgSoft }}
    >
      <div style={container}>
        <h2
          style={{
            fontFamily: font,
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: palette.text,
            textAlign: "center",
            margin: "0 0 48px",
          }}
        >
          Everything you need, nothing you don&rsquo;t
        </h2>

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
                background: palette.white,
                borderRadius: 10,
                padding: 32,
                border: `1px solid ${palette.border}`,
                boxShadow: palette.cardShadow,
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
              <h3
                style={{
                  fontFamily: font,
                  fontSize: 18,
                  fontWeight: 600,
                  color: palette.text,
                  margin: "0 0 8px",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: font,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: palette.textSecondary,
                  margin: 0,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonials                                                      */
/* ------------------------------------------------------------------ */
const testimonials = [
  {
    quote:
      "Stackpulse replaced five tools for us. Our team ships faster and communicates better than ever.",
    name: "Ava Chen",
    role: "Head of Product, Arcline",
  },
  {
    quote:
      "The AI features save me at least an hour every day — writing drafts, summarising meetings, you name it.",
    name: "Marcus Rivera",
    role: "Engineering Lead, Flowbase",
  },
  {
    quote:
      "Onboarding new hires went from weeks to days. Everything they need lives in one place.",
    name: "Priya Sharma",
    role: "People Ops, Canopy",
  },
];

function Testimonials() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={container}>
        <h2
          style={{
            fontFamily: font,
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: palette.text,
            textAlign: "center",
            margin: "0 0 48px",
          }}
        >
          Loved by teams everywhere
        </h2>

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
                background: palette.bgSoft,
                borderRadius: 10,
                padding: 32,
                border: `1px solid ${palette.border}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontFamily: font,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: palette.text,
                  margin: "0 0 24px",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontFamily: font,
                    fontSize: 14,
                    fontWeight: 600,
                    color: palette.text,
                    margin: 0,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: font,
                    fontSize: 13,
                    color: palette.textMuted,
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
  );
}

/* ------------------------------------------------------------------ */
/*  Pricing                                                           */
/* ------------------------------------------------------------------ */
const tiers = [
  {
    name: "Starter",
    price: "Free",
    sub: "For individuals getting started",
    features: [
      "Unlimited pages",
      "Up to 5 guests",
      "Basic AI — 20 requests / day",
      "7-day page history",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    sub: "Per member / month, billed yearly",
    features: [
      "Everything in Starter",
      "Unlimited guests",
      "Full AI — unlimited requests",
      "30-day page history",
      "Custom automations",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$79",
    sub: "Per member / month, billed yearly",
    features: [
      "Everything in Pro",
      "Advanced permissions",
      "Admin tools & audit log",
      "90-day page history",
      "Priority support",
      "SAML SSO",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section
      style={{ padding: "80px 24px", background: palette.bgSoft }}
    >
      <div style={container}>
        <h2
          style={{
            fontFamily: font,
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: palette.text,
            textAlign: "center",
            margin: "0 0 12px",
          }}
        >
          Simple, transparent pricing
        </h2>
        <p
          style={{
            fontFamily: font,
            fontSize: 16,
            color: palette.textSecondary,
            textAlign: "center",
            margin: "0 0 48px",
          }}
        >
          Start free. Upgrade when you&rsquo;re ready.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {tiers.map((t) => {
            const isPro = t.highlighted;
            return (
              <div
                key={t.name}
                style={{
                  background: isPro ? palette.proBg : palette.white,
                  borderRadius: 12,
                  padding: 36,
                  border: isPro ? "none" : `1px solid ${palette.border}`,
                  boxShadow: isPro
                    ? "0 8px 30px rgba(55,53,47,0.18)"
                    : palette.cardShadow,
                  position: "relative",
                }}
              >
                {isPro && (
                  <span
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      fontFamily: font,
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.06em",
                      color: palette.proBg,
                      background: palette.accent,
                      padding: "3px 10px",
                      borderRadius: 4,
                    }}
                  >
                    Popular
                  </span>
                )}

                <h3
                  style={{
                    fontFamily: font,
                    fontSize: 20,
                    fontWeight: 600,
                    color: isPro ? palette.proText : palette.text,
                    margin: "0 0 4px",
                  }}
                >
                  {t.name}
                </h3>

                <div
                  style={{
                    fontFamily: font,
                    fontSize: 40,
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: isPro ? palette.proText : palette.text,
                    margin: "12px 0 4px",
                  }}
                >
                  {t.price}
                  {t.price !== "Free" && (
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: isPro
                          ? "rgba(255,255,255,0.6)"
                          : palette.textMuted,
                      }}
                    >
                      /mo
                    </span>
                  )}
                </div>

                <p
                  style={{
                    fontFamily: font,
                    fontSize: 13,
                    color: isPro
                      ? "rgba(255,255,255,0.6)"
                      : palette.textMuted,
                    margin: "0 0 24px",
                  }}
                >
                  {t.sub}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {t.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontFamily: font,
                        fontSize: 14,
                        color: isPro
                          ? "rgba(255,255,255,0.85)"
                          : palette.textSecondary,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          color: isPro ? palette.accent : palette.textMuted,
                          fontSize: 16,
                          lineHeight: 1,
                        }}
                      >
                        ✓
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
                    fontFamily: font,
                    fontSize: 15,
                    fontWeight: 600,
                    padding: "10px 0",
                    borderRadius: 8,
                    textDecoration: "none",
                    color: isPro ? palette.proBg : palette.highlightText,
                    background: isPro ? palette.white : palette.highlight,
                    border: "none",
                    transition: "opacity 0.15s",
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
}

/* ------------------------------------------------------------------ */
/*  CTA                                                               */
/* ------------------------------------------------------------------ */
function CtaSection() {
  return (
    <section style={{ padding: "96px 24px", textAlign: "center" }}>
      <div style={container}>
        <h2
          style={{
            fontFamily: font,
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: palette.text,
            margin: "0 0 20px",
          }}
        >
          Get started for free
        </h2>
        <p
          style={{
            fontFamily: font,
            fontSize: 18,
            color: palette.textSecondary,
            maxWidth: 460,
            margin: "0 auto 32px",
            lineHeight: 1.6,
          }}
        >
          Join thousands of teams already using Stackpulse to think, write, and
          build together.
        </p>
        <a
          href="#"
          style={{
            display: "inline-block",
            fontFamily: font,
            fontSize: 16,
            fontWeight: 600,
            color: palette.highlightText,
            background: palette.highlight,
            padding: "14px 36px",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          Try Stackpulse free
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                            */
/* ------------------------------------------------------------------ */
const footerColumns: { title: string; links: string[] }[] = [
  { title: "Product", links: ["Overview", "Integrations", "Templates", "AI", "What's New"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
  { title: "Legal", links: ["Privacy", "Terms", "Cookie Settings"] },
];

function Footer() {
  return (
    <footer
      style={{
        padding: "64px 24px 32px",
        borderTop: `1px solid ${palette.border}`,
        background: palette.bgAccent,
      }}
    >
      <div style={container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Logo + tagline */}
          <div style={{ minWidth: 200 }}>
            <div
              style={{
                fontFamily: font,
                fontWeight: 700,
                fontSize: 18,
                color: palette.text,
                marginBottom: 8,
              }}
            >
              ▲ Stackpulse
            </div>
            <p
              style={{
                fontFamily: font,
                fontSize: 14,
                color: palette.textMuted,
                margin: 0,
                lineHeight: 1.5,
                maxWidth: 220,
              }}
            >
              The connected workspace for modern teams.
            </p>
          </div>

          {/* Link columns */}
          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4
                  style={{
                    fontFamily: font,
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.08em",
                    color: palette.textMuted,
                    margin: "0 0 16px",
                  }}
                >
                  {col.title}
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
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        style={{
                          fontFamily: font,
                          fontSize: 14,
                          color: palette.textSecondary,
                          textDecoration: "none",
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

        <div
          style={{
            borderTop: `1px solid ${palette.border}`,
            paddingTop: 24,
          }}
        >
          <p
            style={{
              fontFamily: font,
              fontSize: 13,
              color: palette.textMuted,
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Stackpulse, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export function NotionLanding() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: palette.bg,
        color: palette.text,
        fontFamily: font,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      } as CSSProperties}
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
