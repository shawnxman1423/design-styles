"use client";

import React, { useState, CSSProperties } from "react";

/* ------------------------------------------------------------------ */
/*  LinearLanding – a landing page in the Linear app style            */
/*  Dark theme · clean sans-serif · subtle purple accent gradients     */
/* ------------------------------------------------------------------ */

const COLORS = {
  bg: "#0A0A0F",
  surface: "#12121A",
  surfaceHover: "#1A1A26",
  border: "rgba(255,255,255,0.06)",
  text: "#E8E8ED",
  textMuted: "#8A8A9A",
  accent: "#7C5CFC",
  accentHover: "#6B4AEB",
  accentGlow: "rgba(124,92,252,0.25)",
  white: "#FFFFFF",
};

const FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

/* ---- shared helpers ---- */
const sectionPadding: CSSProperties = {
  padding: "96px 24px",
  maxWidth: 1120,
  margin: "0 auto",
};

const sectionHeading: CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: COLORS.accent,
  marginBottom: 12,
};

const sectionTitle: CSSProperties = {
  fontSize: 36,
  fontWeight: 600,
  color: COLORS.text,
  marginBottom: 48,
  lineHeight: 1.2,
};

/* ================================================================== */

export function LinearLanding() {
  return (
    <div
      style={{
        background: COLORS.bg,
        color: COLORS.text,
        fontFamily: FONT,
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
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

/* ------------------------------------------------------------------ */
/*  1. Header                                                         */
/* ------------------------------------------------------------------ */

function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = ["Features", "Pricing", "Docs", "Blog", "Changelog"];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background: "rgba(10,10,15,0.8)",
        borderBottom: `1px solid ${COLORS.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: COLORS.white,
            letterSpacing: "-0.01em",
          }}
        >
          ▲ Stackpulse
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 32 }}>
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontSize: 14,
                color: hoveredLink === link ? COLORS.text : COLORS.textMuted,
                textDecoration: "none",
                transition: "color 0.15s",
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Sign-up */}
        <HoverButton
          style={{
            fontSize: 13,
            fontWeight: 500,
            padding: "7px 16px",
            borderRadius: 6,
            background: COLORS.accent,
            color: COLORS.white,
            border: "none",
            cursor: "pointer",
            transition: "background 0.15s",
          }}
          hoverStyle={{ background: COLORS.accentHover }}
        >
          Sign up
        </HoverButton>
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
        ...sectionPadding,
        paddingTop: 120,
        paddingBottom: 80,
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Glow effect */}
      <div
        style={{
          position: "absolute",
          top: -80,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(124,92,252,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <h1
        style={{
          fontSize: 64,
          fontWeight: 600,
          lineHeight: 1.08,
          letterSpacing: "-0.04em",
          color: COLORS.white,
          maxWidth: 720,
          margin: "0 auto 24px",
        }}
      >
        Build products at
        <br />
        the speed of thought
      </h1>

      <p
        style={{
          fontSize: 18,
          lineHeight: 1.6,
          color: COLORS.textMuted,
          maxWidth: 520,
          margin: "0 auto 40px",
        }}
      >
        Stackpulse streamlines your workflow so your team can focus on what
        matters — shipping great software, faster.
      </p>

      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <HoverButton
          style={{
            fontSize: 15,
            fontWeight: 500,
            padding: "12px 28px",
            borderRadius: 8,
            background: COLORS.accent,
            color: COLORS.white,
            border: "none",
            cursor: "pointer",
            transition: "background 0.15s, box-shadow 0.15s",
            boxShadow: `0 0 24px ${COLORS.accentGlow}`,
          }}
          hoverStyle={{
            background: COLORS.accentHover,
            boxShadow: `0 0 32px rgba(124,92,252,0.35)`,
          }}
        >
          Get started free
        </HoverButton>

        <HoverButton
          style={{
            fontSize: 15,
            fontWeight: 500,
            padding: "12px 28px",
            borderRadius: 8,
            background: "transparent",
            color: COLORS.text,
            border: `1px solid ${COLORS.border}`,
            cursor: "pointer",
            transition: "border-color 0.15s, background 0.15s",
          }}
          hoverStyle={{
            borderColor: "rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          See how it works
        </HoverButton>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. Logos bar                                                      */
/* ------------------------------------------------------------------ */

function LogosBar() {
  const brands = ["Vercel", "Raycast", "Loom", "Retool", "Resend"];

  return (
    <section
      style={{
        ...sectionPadding,
        paddingTop: 40,
        paddingBottom: 40,
        textAlign: "center",
        borderTop: `1px solid ${COLORS.border}`,
        borderBottom: `1px solid ${COLORS.border}`,
      }}
    >
      <p
        style={{
          fontSize: 13,
          color: COLORS.textMuted,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
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
          gap: 56,
          flexWrap: "wrap",
        }}
      >
        {brands.map((brand) => (
          <span
            key={brand}
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "-0.01em",
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
/*  4. Features                                                       */
/* ------------------------------------------------------------------ */

function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Blazing fast by design",
      desc: "Every interaction is optimized to feel instant. Real-time sync keeps your whole team on the same page without the lag.",
    },
    {
      icon: "🔄",
      title: "Automated workflows",
      desc: "Automate repetitive tasks with powerful rules. From triage to deployment, keep your pipeline flowing effortlessly.",
    },
    {
      icon: "📊",
      title: "Actionable insights",
      desc: "Track velocity, identify bottlenecks, and forecast delivery with dashboards built for engineering leaders.",
    },
  ];

  return (
    <section style={sectionPadding}>
      <div style={{ textAlign: "center" }}>
        <p style={sectionHeading}>Features</p>
        <h2 style={sectionTitle}>Everything your team needs</h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? COLORS.surfaceHover : COLORS.surface,
        border: `1px solid ${hovered ? "rgba(255,255,255,0.1)" : COLORS.border}`,
        borderRadius: 12,
        padding: 32,
        transition: "background 0.2s, border-color 0.2s",
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 16 }}>{icon}</div>
      <h3
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: COLORS.white,
          marginBottom: 10,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: COLORS.textMuted }}>
        {desc}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  5. Testimonials                                                   */
/* ------------------------------------------------------------------ */

function Testimonials() {
  const quotes = [
    {
      text: "Stackpulse replaced three tools for us overnight. Our sprint velocity went up 40 percent in the first month.",
      name: "Elena Voss",
      role: "Head of Engineering, Kova",
    },
    {
      text: "The keyboard-first experience is unmatched. It genuinely feels like the tool was built by engineers for engineers.",
      name: "Marcus Chen",
      role: "Staff Engineer, Arcline",
    },
    {
      text: "We on-boarded 60 people in a week with zero friction. The API and integrations just work out of the box.",
      name: "Sofia Ramirez",
      role: "VP of Product, Novabase",
    },
  ];

  return (
    <section
      style={{
        ...sectionPadding,
        background: COLORS.surface,
        maxWidth: "100%",
        borderTop: `1px solid ${COLORS.border}`,
        borderBottom: `1px solid ${COLORS.border}`,
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
        <p style={sectionHeading}>Testimonials</p>
        <h2 style={sectionTitle}>Loved by high-performing teams</h2>
      </div>

      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {quotes.map((q) => (
          <div
            key={q.name}
            style={{
              background: COLORS.bg,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 12,
              padding: 32,
            }}
          >
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: COLORS.text,
                marginBottom: 24,
                fontStyle: "italic",
              }}
            >
              &ldquo;{q.text}&rdquo;
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: COLORS.white,
                marginBottom: 2,
              }}
            >
              {q.name}
            </p>
            <p style={{ fontSize: 13, color: COLORS.textMuted }}>{q.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  6. Pricing                                                        */
/* ------------------------------------------------------------------ */

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      desc: "For individuals and small experiments.",
      features: [
        "Up to 5 members",
        "Basic analytics",
        "Community support",
        "1 GB storage",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      desc: "For growing teams that need more power.",
      features: [
        "Up to 25 members",
        "Advanced analytics",
        "Priority support",
        "25 GB storage",
        "Custom workflows",
      ],
      highlighted: true,
    },
    {
      name: "Team",
      price: "$79",
      period: "/mo",
      desc: "For organizations that need scale and control.",
      features: [
        "Unlimited members",
        "Enterprise analytics",
        "Dedicated support",
        "Unlimited storage",
        "SSO & SAML",
        "Audit logs",
      ],
      highlighted: false,
    },
  ];

  return (
    <section style={sectionPadding}>
      <div style={{ textAlign: "center" }}>
        <p style={sectionHeading}>Pricing</p>
        <h2 style={sectionTitle}>Simple, transparent pricing</h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          alignItems: "start",
        }}
      >
        {tiers.map((tier) => (
          <PricingCard key={tier.name} {...tier} />
        ))}
      </div>
    </section>
  );
}

function PricingCard({
  name,
  price,
  period,
  desc,
  features,
  highlighted,
}: {
  name: string;
  price: string;
  period?: string;
  desc: string;
  features: string[];
  highlighted: boolean;
}) {
  return (
    <div
      style={{
        background: highlighted ? COLORS.surface : COLORS.surface,
        border: highlighted
          ? `1px solid rgba(124,92,252,0.4)`
          : `1px solid ${COLORS.border}`,
        borderRadius: 12,
        padding: 36,
        position: "relative",
        boxShadow: highlighted ? `0 0 40px ${COLORS.accentGlow}` : "none",
      }}
    >
      {highlighted && (
        <span
          style={{
            position: "absolute",
            top: -11,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            background: COLORS.accent,
            color: COLORS.white,
            padding: "4px 14px",
            borderRadius: 20,
          }}
        >
          Most popular
        </span>
      )}

      <h3
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: COLORS.white,
          marginBottom: 8,
        }}
      >
        {name}
      </h3>

      <div style={{ marginBottom: 8 }}>
        <span
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: COLORS.white,
            letterSpacing: "-0.03em",
          }}
        >
          {price}
        </span>
        {period && (
          <span style={{ fontSize: 16, color: COLORS.textMuted }}>{period}</span>
        )}
      </div>

      <p
        style={{
          fontSize: 14,
          color: COLORS.textMuted,
          marginBottom: 28,
          lineHeight: 1.5,
        }}
      >
        {desc}
      </p>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginBottom: 32,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {features.map((f) => (
          <li
            key={f}
            style={{
              fontSize: 14,
              color: COLORS.text,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ color: COLORS.accent, fontSize: 15 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <HoverButton
        style={{
          width: "100%",
          fontSize: 14,
          fontWeight: 500,
          padding: "11px 0",
          borderRadius: 8,
          border: highlighted ? "none" : `1px solid ${COLORS.border}`,
          background: highlighted ? COLORS.accent : "transparent",
          color: COLORS.white,
          cursor: "pointer",
          transition: "background 0.15s, border-color 0.15s",
        }}
        hoverStyle={
          highlighted
            ? { background: COLORS.accentHover }
            : {
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.15)",
              }
        }
      >
        {highlighted ? "Get started" : "Choose plan"}
      </HoverButton>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  7. CTA                                                            */
/* ------------------------------------------------------------------ */

function CtaSection() {
  return (
    <section
      style={{
        padding: "96px 24px",
        textAlign: "center",
        background: COLORS.surface,
        borderTop: `1px solid ${COLORS.border}`,
        borderBottom: `1px solid ${COLORS.border}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(124,92,252,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <h2
        style={{
          fontSize: 40,
          fontWeight: 600,
          letterSpacing: "-0.03em",
          color: COLORS.white,
          marginBottom: 20,
          position: "relative",
        }}
      >
        Start building today
      </h2>
      <p
        style={{
          fontSize: 17,
          color: COLORS.textMuted,
          maxWidth: 460,
          margin: "0 auto 36px",
          lineHeight: 1.6,
          position: "relative",
        }}
      >
        Join thousands of teams already shipping faster with Stackpulse.
      </p>

      <HoverButton
        style={{
          fontSize: 15,
          fontWeight: 500,
          padding: "13px 32px",
          borderRadius: 8,
          background: COLORS.accent,
          color: COLORS.white,
          border: "none",
          cursor: "pointer",
          transition: "background 0.15s, box-shadow 0.15s",
          boxShadow: `0 0 24px ${COLORS.accentGlow}`,
          position: "relative",
        }}
        hoverStyle={{
          background: COLORS.accentHover,
          boxShadow: `0 0 32px rgba(124,92,252,0.35)`,
        }}
      >
        Get started for free
      </HoverButton>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  8. Footer                                                         */
/* ------------------------------------------------------------------ */

function Footer() {
  const columns = [
    { heading: "Product", links: ["Features", "Pricing", "Integrations", "Changelog", "Docs"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Customers", "Contact"] },
    { heading: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
  ];

  return (
    <footer style={{ borderTop: `1px solid ${COLORS.border}` }}>
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "64px 24px 40px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 48,
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: COLORS.white,
              marginBottom: 12,
            }}
          >
            ▲ Stackpulse
          </div>
          <p style={{ fontSize: 14, color: COLORS.textMuted, lineHeight: 1.6 }}>
            The tool for teams who
            <br />
            ship fast and think clearly.
          </p>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.heading}>
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: COLORS.text,
                marginBottom: 16,
                letterSpacing: "0.02em",
              }}
            >
              {col.heading}
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
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
                      fontSize: 14,
                      color: COLORS.textMuted,
                      textDecoration: "none",
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

      {/* Copyright */}
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "24px 24px",
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        <p style={{ fontSize: 13, color: COLORS.textMuted }}>
          &copy; 2026 Stackpulse, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Utility: HoverButton                                              */
/* ------------------------------------------------------------------ */

function HoverButton({
  style: baseStyle,
  hoverStyle,
  children,
}: {
  style: CSSProperties;
  hoverStyle: CSSProperties;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ ...baseStyle, ...(hovered ? hoverStyle : {}) }}
    >
      {children}
    </button>
  );
}
