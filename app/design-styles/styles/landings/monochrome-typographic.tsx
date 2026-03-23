"use client";

import React, { useState, CSSProperties } from "react";

/* ─── helpers ─── */
const section = (extra: CSSProperties = {}): CSSProperties => ({
  width: "100%",
  maxWidth: 1120,
  margin: "0 auto",
  padding: "80px 24px",
  ...extra,
});

const btn = (
  variant: "primary" | "secondary" | "ghost" = "primary",
): CSSProperties => {
  const base: CSSProperties = {
    display: "inline-block",
    padding: "14px 32px",
    fontSize: 15,
    fontWeight: 600,
    letterSpacing: "0.02em",
    border: "2px solid #111",
    cursor: "pointer",
    transition: "background .15s, color .15s",
    textDecoration: "none",
    fontFamily: "inherit",
  };
  if (variant === "primary")
    return { ...base, background: "#111", color: "#fff" };
  if (variant === "secondary")
    return { ...base, background: "transparent", color: "#111" };
  return {
    ...base,
    border: "none",
    padding: "14px 16px",
    color: "#111",
    fontWeight: 500,
  };
};

/* ─── component ─── */
export function MonochromeTypographicLanding() {
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);

  /* ── 1. Header ── */
  const header = (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 1120,
        margin: "0 auto",
        padding: "20px 24px",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <div
        style={{
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "#111",
        }}
      >
        ▲ Stackpulse
      </div>

      <nav style={{ display: "flex", gap: 32 }}>
        {["Features", "Pricing", "Docs", "Blog"].map((t, i) => (
          <a
            key={t}
            href={`#${t.toLowerCase()}`}
            onMouseEnter={() => setHoveredNav(i)}
            onMouseLeave={() => setHoveredNav(null)}
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: hoveredNav === i ? "#111" : "#555",
              textDecoration: "none",
              transition: "color .15s",
              letterSpacing: "0.01em",
            }}
          >
            {t}
          </a>
        ))}
      </nav>

      <button style={btn("primary")}>Sign up</button>
    </header>
  );

  /* ── 2. Hero ── */
  const hero = (
    <section style={section({ textAlign: "center", paddingTop: 100, paddingBottom: 100 })}>
      <h1
        style={{
          fontSize: "clamp(40px, 6vw, 72px)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.035em",
          color: "#111",
          margin: 0,
          maxWidth: 800,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Ship faster with
        <br />
        less complexity
      </h1>
      <p
        style={{
          fontSize: 18,
          lineHeight: 1.6,
          color: "#555",
          marginTop: 24,
          maxWidth: 520,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        The modern developer platform that strips away the noise so you can
        focus on building what matters.
      </p>
      <div style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <button style={btn("primary")}>Get started free</button>
        <button style={btn("secondary")}>View documentation →</button>
      </div>
    </section>
  );

  /* ── 3. Logos bar ── */
  const logos = (
    <section
      style={{
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase" as const,
          color: "#999",
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
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        {["Vercel", "Linear", "Raycast", "Resend", "Clerk"].map((name) => (
          <span
            key={name}
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#bbb",
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );

  /* ── 4. Features ── */
  const featureData = [
    {
      title: "Instant deployments",
      desc: "Push to main and see changes live in seconds. Zero-config CI/CD built into your workflow.",
    },
    {
      title: "Edge-first runtime",
      desc: "Run your code at the edge by default. Sub-50ms response times for users everywhere.",
    },
    {
      title: "Observability built in",
      desc: "Real-time logs, traces, and metrics without bolting on third-party tooling.",
    },
  ];

  const features = (
    <section id="features" style={section()}>
      <h2
        style={{
          fontSize: 36,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#111",
          marginBottom: 12,
        }}
      >
        Everything you need
      </h2>
      <p style={{ fontSize: 16, color: "#666", marginBottom: 48, maxWidth: 480 }}>
        A focused set of primitives designed to keep your stack lean and your
        velocity high.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32,
        }}
      >
        {featureData.map((f) => (
          <div
            key={f.title}
            style={{
              border: "1px solid #e0e0e0",
              padding: 32,
            }}
          >
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#111",
                marginBottom: 12,
              }}
            >
              {f.title}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "#555", margin: 0 }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );

  /* ── 5. Testimonials ── */
  const testimonialData = [
    {
      quote:
        "Stackpulse removed an entire layer of infrastructure we no longer need to think about.",
      name: "Elena Voss",
      role: "CTO, Modeshift",
    },
    {
      quote:
        "We cut our deploy times by 80%. The simplicity is the feature.",
      name: "James Kato",
      role: "Lead Engineer, Arcline",
    },
    {
      quote:
        "Finally a platform that respects the developer's time. No bloat, no friction.",
      name: "Priya Nair",
      role: "Founder, Subtask",
    },
  ];

  const testimonials = (
    <section
      style={{
        ...section(),
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <h2
        style={{
          fontSize: 36,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#111",
          marginBottom: 48,
        }}
      >
        What people are saying
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32,
        }}
      >
        {testimonialData.map((t) => (
          <div
            key={t.name}
            style={{
              borderLeft: "3px solid #111",
              paddingLeft: 24,
            }}
          >
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "#333",
                fontStyle: "italic",
                marginBottom: 20,
              }}
            >
              "{t.quote}"
            </p>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#111", margin: 0 }}>
              {t.name}
            </p>
            <p style={{ fontSize: 13, color: "#888", margin: "4px 0 0" }}>
              {t.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );

  /* ── 6. Pricing ── */
  const pricingData = [
    {
      tier: "Starter",
      price: "Free",
      desc: "For personal projects and experiments.",
      features: ["1 project", "Edge deploys", "Community support", "1 GB bandwidth"],
      highlighted: false,
    },
    {
      tier: "Pro",
      price: "$29/mo",
      desc: "For professionals shipping real products.",
      features: [
        "Unlimited projects",
        "Custom domains",
        "Priority support",
        "100 GB bandwidth",
        "Team collaboration",
      ],
      highlighted: true,
    },
    {
      tier: "Team",
      price: "$79/mo",
      desc: "For teams that need scale and control.",
      features: [
        "Everything in Pro",
        "SSO & SAML",
        "Audit logs",
        "500 GB bandwidth",
        "SLA guarantee",
        "Dedicated support",
      ],
      highlighted: false,
    },
  ];

  const pricing = (
    <section
      id="pricing"
      style={{
        ...section(),
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <h2
        style={{
          fontSize: 36,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#111",
          marginBottom: 12,
          textAlign: "center",
        }}
      >
        Simple, transparent pricing
      </h2>
      <p
        style={{
          fontSize: 16,
          color: "#666",
          marginBottom: 56,
          textAlign: "center",
        }}
      >
        No surprises. Cancel anytime.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          alignItems: "start",
        }}
      >
        {pricingData.map((p) => (
          <div
            key={p.tier}
            style={{
              border: p.highlighted ? "2px solid #111" : "1px solid #e0e0e0",
              padding: 36,
              position: "relative",
            }}
          >
            {p.highlighted && (
              <span
                style={{
                  position: "absolute",
                  top: -13,
                  left: 24,
                  background: "#111",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                  padding: "4px 12px",
                }}
              >
                Most popular
              </span>
            )}
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#111",
                marginBottom: 4,
              }}
            >
              {p.tier}
            </h3>
            <p
              style={{
                fontSize: 32,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#111",
                margin: "12px 0 8px",
              }}
            >
              {p.price}
            </p>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 24 }}>
              {p.desc}
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
                    fontSize: 14,
                    color: "#444",
                    padding: "6px 0",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  ✓&ensp;{f}
                </li>
              ))}
            </ul>
            <button
              style={{
                ...btn(p.highlighted ? "primary" : "secondary"),
                width: "100%",
                textAlign: "center",
              }}
            >
              {p.price === "Free" ? "Start for free" : "Get started"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );

  /* ── 7. CTA ── */
  const cta = (
    <section
      style={{
        background: "#111",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#fff",
          marginBottom: 24,
          maxWidth: 600,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Start building today.
        <br />
        No credit card required.
      </h2>
      <button
        style={{
          ...btn("primary"),
          background: "#fff",
          color: "#111",
          border: "2px solid #fff",
        }}
      >
        Get started free →
      </button>
    </section>
  );

  /* ── 8. Footer ── */
  const footerLinks: Record<string, string[]> = {
    Product: ["Features", "Pricing", "Changelog", "Documentation"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "Security"],
  };

  const footer = (
    <footer
      style={{
        borderTop: "1px solid #e0e0e0",
        maxWidth: 1120,
        margin: "0 auto",
        padding: "60px 24px 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 48,
        }}
      >
        {/* left */}
        <div style={{ minWidth: 200 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#111",
              marginBottom: 8,
            }}
          >
            ▲ Stackpulse
          </div>
          <p style={{ fontSize: 14, color: "#888", margin: 0, maxWidth: 240 }}>
            The developer platform for teams that value simplicity.
          </p>
        </div>

        {/* link columns */}
        <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  color: "#999",
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
                        fontSize: 14,
                        color: "#555",
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
          borderTop: "1px solid #e0e0e0",
          marginTop: 48,
          paddingTop: 24,
          fontSize: 13,
          color: "#aaa",
        }}
      >
        © 2026 Stackpulse. All rights reserved.
      </div>
    </footer>
  );

  /* ── Render ── */
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        color: "#111",
        background: "#fff",
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased" as any,
        MozOsxFontSmoothing: "grayscale" as any,
      }}
    >
      {header}
      {hero}
      {logos}
      {features}
      {testimonials}
      {pricing}
      {cta}
      {footer}
    </div>
  );
}
