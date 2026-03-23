"use client";

import React, { useState } from "react";

const colors = {
  black: "#121212",
  darkGray: "#181818",
  cardGray: "#282828",
  hoverGray: "#333333",
  textPrimary: "#FFFFFF",
  textSecondary: "#B3B3B3",
  textMuted: "#727272",
  green: "#1DB954",
  greenHover: "#1ED760",
  border: "#333333",
};

const fonts = {
  heading: "'Circular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif'",
  body: "'Circular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif'",
};

/* ------------------------------------------------------------------ */
/*  Header                                                            */
/* ------------------------------------------------------------------ */
function Header() {
  const [hovered, setHovered] = useState<string | null>(null);

  const navLinks = ["Features", "Pricing", "Testimonials", "Docs"];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 48px",
        backgroundColor: "rgba(18,18,18,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: colors.textPrimary,
          fontFamily: fonts.heading,
          letterSpacing: "-0.02em",
        }}
      >
        ▲ Stackpulse
      </div>

      <nav style={{ display: "flex", gap: 32 }}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onMouseEnter={() => setHovered(link)}
            onMouseLeave={() => setHovered(null)}
            style={{
              color: hovered === link ? colors.textPrimary : colors.textSecondary,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: fonts.body,
              transition: "color 0.2s",
            }}
          >
            {link}
          </a>
        ))}
      </nav>

      <button
        style={{
          padding: "10px 28px",
          borderRadius: 500,
          border: "none",
          backgroundColor: colors.green,
          color: colors.black,
          fontSize: 14,
          fontWeight: 700,
          fontFamily: fonts.body,
          cursor: "pointer",
          letterSpacing: "0.02em",
          transition: "background-color 0.2s, transform 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLButtonElement).style.backgroundColor = colors.greenHover;
          (e.target as HTMLButtonElement).style.transform = "scale(1.04)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLButtonElement).style.backgroundColor = colors.green;
          (e.target as HTMLButtonElement).style.transform = "scale(1)";
        }}
      >
        Sign up free
      </button>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                              */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 100px",
        background: `linear-gradient(180deg, ${colors.black} 0%, #1a1a2e 50%, ${colors.black} 100%)`,
      }}
    >
      <h1
        style={{
          fontSize: "clamp(40px, 6vw, 72px)",
          fontWeight: 800,
          color: colors.textPrimary,
          fontFamily: fonts.heading,
          lineHeight: 1.08,
          letterSpacing: "-0.04em",
          maxWidth: 800,
          margin: "0 0 24px",
        }}
      >
        Ship faster.{" "}
        <span style={{ color: colors.green }}>Break less.</span>
      </h1>

      <p
        style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          color: colors.textSecondary,
          fontFamily: fonts.body,
          maxWidth: 560,
          margin: "0 0 48px",
          lineHeight: 1.6,
        }}
      >
        The developer platform that turns observability into action. Monitor,
        debug, and deploy — all from one dashboard.
      </p>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        <button
          style={{
            padding: "14px 40px",
            borderRadius: 500,
            border: "none",
            backgroundColor: colors.green,
            color: colors.black,
            fontSize: 16,
            fontWeight: 700,
            fontFamily: fonts.body,
            cursor: "pointer",
            letterSpacing: "0.02em",
            transition: "background-color 0.2s, transform 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = colors.greenHover;
            (e.target as HTMLButtonElement).style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = colors.green;
            (e.target as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          Get started free
        </button>
        <button
          style={{
            padding: "14px 40px",
            borderRadius: 500,
            border: `1px solid ${colors.textSecondary}`,
            backgroundColor: "transparent",
            color: colors.textPrimary,
            fontSize: 16,
            fontWeight: 700,
            fontFamily: fonts.body,
            cursor: "pointer",
            letterSpacing: "0.02em",
            transition: "border-color 0.2s, transform 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.borderColor = colors.textPrimary;
            (e.target as HTMLButtonElement).style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.borderColor = colors.textSecondary;
            (e.target as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          See a demo
        </button>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Logos Bar                                                          */
/* ------------------------------------------------------------------ */
function LogosBar() {
  const brands = ["Vercel", "Stripe", "Linear", "Notion", "Raycast"];

  return (
    <section
      style={{
        padding: "48px 24px",
        textAlign: "center",
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`,
        backgroundColor: colors.darkGray,
      }}
    >
      <p
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: colors.textMuted,
          fontFamily: fonts.body,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          margin: "0 0 28px",
        }}
      >
        Trusted by 2,000+ makers at
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "32px 56px",
        }}
      >
        {brands.map((brand) => (
          <span
            key={brand}
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: colors.textMuted,
              fontFamily: fonts.heading,
              letterSpacing: "-0.01em",
              opacity: 0.7,
            }}
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Features                                                          */
/* ------------------------------------------------------------------ */
function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Real-time Monitoring",
      description:
        "Track every metric, log, and trace in real time. Get instant alerts when something breaks before your users notice.",
    },
    {
      icon: "🔍",
      title: "Smart Debugging",
      description:
        "AI-powered root cause analysis pinpoints the exact line of code causing issues. Fix bugs in minutes, not hours.",
    },
    {
      icon: "🚀",
      title: "One-click Deploy",
      description:
        "Push to production with confidence. Automatic rollbacks, canary deployments, and zero-downtime releases built in.",
    },
  ];

  return (
    <section
      id="features"
      style={{
        padding: "100px 48px",
        backgroundColor: colors.black,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
            color: colors.textPrimary,
            fontFamily: fonts.heading,
            letterSpacing: "-0.03em",
            margin: "0 0 16px",
          }}
        >
          Everything you need to ship
        </h2>
        <p
          style={{
            fontSize: 16,
            color: colors.textSecondary,
            fontFamily: fonts.body,
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          A complete toolkit designed for teams that move fast and build
          thoughtfully.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {features.map((f) => (
          <div
            key={f.title}
            style={{
              backgroundColor: colors.cardGray,
              borderRadius: 12,
              padding: 36,
              transition: "background-color 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = colors.hoverGray;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = colors.cardGray;
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: colors.textPrimary,
                fontFamily: fonts.heading,
                margin: "0 0 12px",
                letterSpacing: "-0.01em",
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                color: colors.textSecondary,
                fontFamily: fonts.body,
                lineHeight: 1.65,
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

/* ------------------------------------------------------------------ */
/*  Testimonials                                                      */
/* ------------------------------------------------------------------ */
function Testimonials() {
  const quotes = [
    {
      text: "Stackpulse cut our incident response time by 80%. We went from scrambling in Slack to resolving issues before the CEO even notices.",
      name: "Sarah Chen",
      role: "CTO, Driftbase",
    },
    {
      text: "The deploy pipeline alone is worth the price. We ship 3x more per sprint now, and our error rate actually went down.",
      name: "Marcus Webb",
      role: "Lead Engineer, Polyform",
    },
    {
      text: "I've tried every monitoring tool out there. Stackpulse is the first one my whole team actually wants to use every day.",
      name: "Anya Petrov",
      role: "VP Engineering, Layerkit",
    },
  ];

  return (
    <section
      id="testimonials"
      style={{
        padding: "100px 48px",
        backgroundColor: colors.darkGray,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
            color: colors.textPrimary,
            fontFamily: fonts.heading,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          Loved by builders
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {quotes.map((q) => (
          <div
            key={q.name}
            style={{
              backgroundColor: colors.cardGray,
              borderRadius: 12,
              padding: 36,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: colors.textSecondary,
                fontFamily: fonts.body,
                lineHeight: 1.7,
                margin: "0 0 28px",
                fontStyle: "italic",
              }}
            >
              &ldquo;{q.text}&rdquo;
            </p>
            <div>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: colors.textPrimary,
                  fontFamily: fonts.heading,
                  margin: "0 0 2px",
                }}
              >
                {q.name}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: colors.textMuted,
                  fontFamily: fonts.body,
                  margin: 0,
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

/* ------------------------------------------------------------------ */
/*  Pricing                                                           */
/* ------------------------------------------------------------------ */
function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      subtitle: "For side projects",
      features: [
        "Up to 3 projects",
        "Basic monitoring",
        "Community support",
        "7-day log retention",
        "1 team member",
      ],
      cta: "Get started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      subtitle: "For growing teams",
      features: [
        "Unlimited projects",
        "Advanced monitoring & alerts",
        "Priority support",
        "90-day log retention",
        "Up to 10 team members",
        "Custom dashboards",
        "AI-powered debugging",
      ],
      cta: "Start free trial",
      highlighted: true,
    },
    {
      name: "Team",
      price: "$79",
      period: "/mo",
      subtitle: "For scaling orgs",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "SSO & SAML",
        "1-year log retention",
        "Dedicated account manager",
        "Custom integrations",
        "99.99% SLA",
      ],
      cta: "Contact sales",
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      style={{
        padding: "100px 48px",
        backgroundColor: colors.black,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
            color: colors.textPrimary,
            fontFamily: fonts.heading,
            letterSpacing: "-0.03em",
            margin: "0 0 16px",
          }}
        >
          Simple, transparent pricing
        </h2>
        <p
          style={{
            fontSize: 16,
            color: colors.textSecondary,
            fontFamily: fonts.body,
            margin: 0,
          }}
        >
          Start free. Upgrade when you&apos;re ready.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          maxWidth: 1000,
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {tiers.map((tier) => (
          <div
            key={tier.name}
            style={{
              backgroundColor: tier.highlighted ? colors.cardGray : colors.darkGray,
              borderRadius: 12,
              padding: 40,
              border: tier.highlighted
                ? `2px solid ${colors.green}`
                : `1px solid ${colors.border}`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {tier.highlighted && (
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  backgroundColor: colors.green,
                  color: colors.black,
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: fonts.body,
                  padding: "4px 12px",
                  borderRadius: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Popular
              </div>
            )}

            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: colors.textMuted,
                fontFamily: fonts.body,
                margin: "0 0 8px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {tier.name}
            </p>

            <div style={{ display: "flex", alignItems: "baseline", margin: "0 0 4px" }}>
              <span
                style={{
                  fontSize: 44,
                  fontWeight: 800,
                  color: colors.textPrimary,
                  fontFamily: fonts.heading,
                  letterSpacing: "-0.03em",
                }}
              >
                {tier.price}
              </span>
              {tier.period && (
                <span
                  style={{
                    fontSize: 16,
                    color: colors.textMuted,
                    fontFamily: fonts.body,
                    marginLeft: 2,
                  }}
                >
                  {tier.period}
                </span>
              )}
            </div>

            <p
              style={{
                fontSize: 14,
                color: colors.textSecondary,
                fontFamily: fonts.body,
                margin: "0 0 28px",
              }}
            >
              {tier.subtitle}
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
              {tier.features.map((feat) => (
                <li
                  key={feat}
                  style={{
                    fontSize: 14,
                    color: colors.textSecondary,
                    fontFamily: fonts.body,
                    padding: "6px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ color: colors.green, fontSize: 14, fontWeight: 700 }}>
                    &#10003;
                  </span>
                  {feat}
                </li>
              ))}
            </ul>

            <button
              style={{
                width: "100%",
                padding: "12px 0",
                borderRadius: 500,
                border: tier.highlighted ? "none" : `1px solid ${colors.textSecondary}`,
                backgroundColor: tier.highlighted ? colors.green : "transparent",
                color: tier.highlighted ? colors.black : colors.textPrimary,
                fontSize: 14,
                fontWeight: 700,
                fontFamily: fonts.body,
                cursor: "pointer",
                letterSpacing: "0.02em",
                transition: "background-color 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                const btn = e.target as HTMLButtonElement;
                if (tier.highlighted) {
                  btn.style.backgroundColor = colors.greenHover;
                } else {
                  btn.style.backgroundColor = colors.hoverGray;
                }
                btn.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                const btn = e.target as HTMLButtonElement;
                btn.style.backgroundColor = tier.highlighted ? colors.green : "transparent";
                btn.style.transform = "scale(1)";
              }}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA                                                               */
/* ------------------------------------------------------------------ */
function CtaBanner() {
  return (
    <section
      style={{
        padding: "100px 24px",
        textAlign: "center",
        background: `linear-gradient(135deg, #1a1a2e 0%, ${colors.black} 50%, #0d2818 100%)`,
      }}
    >
      <h2
        style={{
          fontSize: "clamp(28px, 5vw, 48px)",
          fontWeight: 800,
          color: colors.textPrimary,
          fontFamily: fonts.heading,
          letterSpacing: "-0.03em",
          margin: "0 0 16px",
        }}
      >
        Ready to ship with confidence?
      </h2>
      <p
        style={{
          fontSize: 18,
          color: colors.textSecondary,
          fontFamily: fonts.body,
          margin: "0 0 40px",
        }}
      >
        Join 2,000+ developers already building with Stackpulse.
      </p>
      <button
        style={{
          padding: "16px 48px",
          borderRadius: 500,
          border: "none",
          backgroundColor: colors.green,
          color: colors.black,
          fontSize: 16,
          fontWeight: 700,
          fontFamily: fonts.body,
          cursor: "pointer",
          letterSpacing: "0.02em",
          transition: "background-color 0.2s, transform 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLButtonElement).style.backgroundColor = colors.greenHover;
          (e.target as HTMLButtonElement).style.transform = "scale(1.04)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLButtonElement).style.backgroundColor = colors.green;
          (e.target as HTMLButtonElement).style.transform = "scale(1)";
        }}
      >
        Get started free
      </button>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                            */
/* ------------------------------------------------------------------ */
function Footer() {
  const columns: { heading: string; links: string[] }[] = [
    { heading: "Product", links: ["Features", "Pricing", "Changelog", "Integrations", "API Docs"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Press"] },
    { heading: "Legal", links: ["Privacy", "Terms", "Cookie Policy"] },
  ];

  return (
    <footer
      style={{
        padding: "64px 48px 32px",
        backgroundColor: colors.darkGray,
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 48,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* Left: logo + tagline */}
        <div style={{ minWidth: 200, maxWidth: 260 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: colors.textPrimary,
              fontFamily: fonts.heading,
              marginBottom: 8,
            }}
          >
            ▲ Stackpulse
          </div>
          <p
            style={{
              fontSize: 13,
              color: colors.textMuted,
              fontFamily: fonts.body,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Ship faster. Break less. The developer platform for modern teams.
          </p>
        </div>

        {/* Right: link columns */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 56 }}>
          {columns.map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: colors.textMuted,
                  fontFamily: fonts.body,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: "0 0 16px",
                }}
              >
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map((link) => (
                  <li key={link} style={{ marginBottom: 10 }}>
                    <a
                      href="#"
                      style={{
                        fontSize: 14,
                        color: colors.textSecondary,
                        fontFamily: fonts.body,
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLAnchorElement).style.color = colors.textPrimary;
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLAnchorElement).style.color = colors.textSecondary;
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
          maxWidth: 1100,
          margin: "48px auto 0",
          paddingTop: 24,
          borderTop: `1px solid ${colors.border}`,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 13,
            color: colors.textMuted,
            fontFamily: fonts.body,
            margin: 0,
          }}
        >
          &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export function SpotifyLanding() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: colors.black,
        color: colors.textPrimary,
        fontFamily: fonts.body,
        overflowX: "hidden",
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
