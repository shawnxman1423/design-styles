"use client";

import React, { useState, type CSSProperties } from "react";

/* ───────────────────────── palette & tokens ───────────────────────── */
const c = {
  bg: "#0a0020",
  bgAlt: "#120035",
  surface: "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(255,255,255,0.08)",
  pink: "#ff6ec7",
  cyan: "#00fff7",
  purple: "#b967ff",
  magenta: "#ff00ff",
  lavender: "#c4a1ff",
  text: "#e0d6ff",
  textMuted: "#9b8fc2",
  white: "#ffffff",
  gradientPink: "linear-gradient(135deg, #ff6ec7 0%, #ff00ff 100%)",
  gradientCyan: "linear-gradient(135deg, #00fff7 0%, #b967ff 100%)",
  gradientHero:
    "linear-gradient(180deg, #0a0020 0%, #1a0040 40%, #0a0020 100%)",
  gridLine: "rgba(0,255,247,0.08)",
};

const font = {
  heading: "'Segoe UI', system-ui, -apple-system, sans-serif",
  body: "'Segoe UI', system-ui, -apple-system, sans-serif",
};

const glow = (color: string, size = 20) =>
  `0 0 ${size}px ${color}, 0 0 ${size * 2}px ${color}40`;

/* ─── reusable small components ─── */

function GlowButton({
  children,
  variant = "pink",
  style,
}: {
  children: React.ReactNode;
  variant?: "pink" | "cyan" | "outline";
  style?: CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  const base: CSSProperties = {
    padding: "14px 32px",
    borderRadius: 6,
    fontWeight: 700,
    fontSize: 15,
    fontFamily: font.body,
    cursor: "pointer",
    transition: "all 0.25s ease",
    border: "none",
    letterSpacing: 0.5,
    textTransform: "uppercase" as const,
  };
  const variants: Record<string, CSSProperties> = {
    pink: {
      background: c.gradientPink,
      color: c.white,
      boxShadow: hovered ? glow(c.pink, 14) : glow(c.pink, 6),
      transform: hovered ? "translateY(-2px)" : "none",
    },
    cyan: {
      background: c.gradientCyan,
      color: c.bg,
      boxShadow: hovered ? glow(c.cyan, 14) : glow(c.cyan, 6),
      transform: hovered ? "translateY(-2px)" : "none",
    },
    outline: {
      background: "transparent",
      color: c.cyan,
      border: `2px solid ${c.cyan}`,
      boxShadow: hovered ? glow(c.cyan, 10) : "none",
      transform: hovered ? "translateY(-2px)" : "none",
    },
  };
  return (
    <button
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div style={{ textAlign: "center", marginBottom: 56 }}>
      <h2
        style={{
          fontFamily: font.heading,
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 800,
          color: c.white,
          margin: 0,
          textShadow: glow(c.purple, 10),
          letterSpacing: 1,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: font.body,
            fontSize: 17,
            color: c.textMuted,
            marginTop: 14,
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ──────────────── perspective grid background ──────────────── */
function RetroGrid() {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "50%",
        overflow: "hidden",
        perspective: 400,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: "center top",
          transform: "rotateX(55deg)",
          backgroundImage: `
            linear-gradient(to right, ${c.gridLine} 1px, transparent 1px),
            linear-gradient(to bottom, ${c.gridLine} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* horizon glow */}
      <div
        style={{
          position: "absolute",
          left: "10%",
          right: "10%",
          top: 0,
          height: 4,
          background: c.cyan,
          filter: "blur(6px)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}

/* ═══════════════════════════ MAIN COMPONENT ═══════════════════════════ */

export function VaporwaveLanding() {
  const section: CSSProperties = {
    padding: "96px 24px",
    maxWidth: 1160,
    marginLeft: "auto",
    marginRight: "auto",
  };

  /* ─── 1. Header ─── */
  const header = (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 32px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative" as const,
        zIndex: 10,
      }}
    >
      <div
        style={{
          fontFamily: font.heading,
          fontWeight: 800,
          fontSize: 20,
          color: c.cyan,
          textShadow: glow(c.cyan, 8),
          letterSpacing: 1,
        }}
      >
        ▲ Stackpulse
      </div>
      <nav
        style={{
          display: "flex",
          gap: 32,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {["Features", "Pricing", "Docs", "Blog"].map((l) => (
          <a
            key={l}
            href="#"
            style={{
              color: c.textMuted,
              textDecoration: "none",
              fontSize: 14,
              fontFamily: font.body,
              fontWeight: 500,
              letterSpacing: 0.5,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = c.cyan)}
            onMouseLeave={(e) => (e.currentTarget.style.color = c.textMuted)}
          >
            {l}
          </a>
        ))}
      </nav>
      <GlowButton variant="pink" style={{ padding: "10px 24px", fontSize: 13 }}>
        Sign Up
      </GlowButton>
    </header>
  );

  /* ─── 2. Hero ─── */
  const hero = (
    <section
      style={{
        position: "relative",
        background: c.gradientHero,
        overflow: "hidden",
        paddingBottom: 120,
      }}
    >
      <RetroGrid />
      <div
        style={{
          ...section,
          paddingTop: 80,
          paddingBottom: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontFamily: font.heading,
            fontSize: "clamp(38px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.1,
            margin: 0,
            background: `linear-gradient(135deg, ${c.cyan}, ${c.pink}, ${c.purple})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: -1,
          }}
        >
          Ship faster.
          <br />
          Dream in neon.
        </h1>
        <p
          style={{
            fontFamily: font.body,
            fontSize: "clamp(16px, 2vw, 20px)",
            color: c.textMuted,
            maxWidth: 560,
            margin: "28px auto 0",
            lineHeight: 1.7,
          }}
        >
          The developer platform that turns ideas into production-ready
          applications at the speed of thought.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginTop: 40,
            flexWrap: "wrap",
          }}
        >
          <GlowButton variant="pink">Get Started Free</GlowButton>
          <GlowButton variant="outline">Watch Demo</GlowButton>
        </div>
      </div>
    </section>
  );

  /* ─── 3. Logos bar ─── */
  const brands = ["Vercel", "Supabase", "Linear", "Raycast", "Resend"];
  const logosBar = (
    <section
      style={{
        padding: "48px 24px",
        borderTop: `1px solid ${c.gridLine}`,
        borderBottom: `1px solid ${c.gridLine}`,
        background: c.bgAlt,
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontFamily: font.body,
          fontSize: 13,
          color: c.textMuted,
          textTransform: "uppercase",
          letterSpacing: 2,
          marginBottom: 28,
          marginTop: 0,
        }}
      >
        Trusted by 2,000+ makers at
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(24px, 5vw, 64px)",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {brands.map((b) => (
          <span
            key={b}
            style={{
              fontFamily: font.heading,
              fontSize: 18,
              fontWeight: 700,
              color: c.textMuted,
              opacity: 0.5,
              letterSpacing: 1,
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );

  /* ─── 4. Features ─── */
  const features = [
    {
      icon: "⚡",
      title: "Instant Deploy",
      desc: "Push to production in seconds with zero-config deployments and automatic rollbacks.",
    },
    {
      icon: "🔮",
      title: "AI Copilot",
      desc: "An embedded assistant that writes, reviews, and optimizes your code in real time.",
    },
    {
      icon: "🌐",
      title: "Edge Runtime",
      desc: "Run serverless functions at the edge across 200+ locations worldwide.",
    },
  ];
  const featuresSection = (
    <section style={{ ...section, background: c.bg }}>
      <SectionHeading
        title="Everything you need"
        subtitle="Powerful primitives that let you focus on building, not configuring."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 28,
        }}
      >
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );

  /* ─── 5. Testimonials ─── */
  const testimonials = [
    {
      quote:
        "Stackpulse cut our deploy times by 80%. The neon glow is just a bonus.",
      name: "Mika Tanaka",
      role: "CTO, NeonLabs",
    },
    {
      quote:
        "Finally a platform that feels as futuristic as the software we build.",
      name: "Jordan Ellis",
      role: "Lead Engineer, Synthwave.io",
    },
    {
      quote:
        "We migrated 40 microservices in a weekend. Honestly unreal.",
      name: "Priya Sharma",
      role: "VP Engineering, GridPulse",
    },
  ];
  const testimonialsSection = (
    <section style={{ ...section, background: c.bgAlt, maxWidth: "100%", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <SectionHeading
          title="Loved by builders"
          subtitle="Hear from the teams shipping with Stackpulse every day."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
          }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );

  /* ─── 6. Pricing ─── */
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      features: [
        "1 project",
        "10 deploys / day",
        "Community support",
        "Basic analytics",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      features: [
        "Unlimited projects",
        "Unlimited deploys",
        "Priority support",
        "Advanced analytics",
        "Custom domains",
      ],
      highlight: true,
    },
    {
      name: "Team",
      price: "$79",
      period: "/mo",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "SSO & SAML",
        "Audit logs",
        "SLA guarantee",
        "Dedicated account manager",
      ],
      highlight: false,
    },
  ];
  const pricingSection = (
    <section style={section}>
      <SectionHeading
        title="Simple, transparent pricing"
        subtitle="Start free. Scale when you're ready."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 28,
          alignItems: "start",
        }}
      >
        {tiers.map((t) => (
          <PricingCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );

  /* ─── 7. CTA ─── */
  const ctaSection = (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${c.bgAlt} 0%, #1a0040 50%, ${c.bgAlt} 100%)`,
        padding: "96px 24px",
        textAlign: "center",
      }}
    >
      {/* decorative ring */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: `2px solid ${c.purple}40`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          boxShadow: glow(c.purple, 30),
          opacity: 0.25,
        }}
      />
      <h2
        style={{
          fontFamily: font.heading,
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 900,
          color: c.white,
          margin: 0,
          position: "relative",
          textShadow: glow(c.pink, 10),
        }}
      >
        Ready to enter the grid?
      </h2>
      <p
        style={{
          fontFamily: font.body,
          fontSize: 18,
          color: c.textMuted,
          marginTop: 16,
          marginBottom: 36,
          position: "relative",
        }}
      >
        Join thousands of developers building the future.
      </p>
      <div style={{ position: "relative" }}>
        <GlowButton variant="cyan">Get Started Free</GlowButton>
      </div>
    </section>
  );

  /* ─── 8. Footer ─── */
  const footerColumns: { heading: string; links: string[] }[] = [
    { heading: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { heading: "Legal", links: ["Privacy", "Terms", "Security"] },
  ];
  const footer = (
    <footer
      style={{
        borderTop: `1px solid ${c.gridLine}`,
        padding: "64px 32px 32px",
        maxWidth: 1160,
        margin: "0 auto",
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
              fontFamily: font.heading,
              fontWeight: 800,
              fontSize: 18,
              color: c.cyan,
              textShadow: glow(c.cyan, 6),
              marginBottom: 10,
            }}
          >
            ▲ Stackpulse
          </div>
          <p
            style={{
              fontFamily: font.body,
              fontSize: 14,
              color: c.textMuted,
              margin: 0,
              maxWidth: 220,
              lineHeight: 1.6,
            }}
          >
            Ship faster. Dream in neon. Build the future on the grid.
          </p>
        </div>
        {/* columns */}
        <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontFamily: font.body,
                  fontSize: 13,
                  fontWeight: 700,
                  color: c.lavender,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  marginBottom: 16,
                  marginTop: 0,
                }}
              >
                {col.heading}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
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
                        color: c.textMuted,
                        textDecoration: "none",
                        fontSize: 14,
                        fontFamily: font.body,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = c.cyan)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = c.textMuted)
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
      <p
        style={{
          fontFamily: font.body,
          fontSize: 13,
          color: c.textMuted,
          opacity: 0.5,
          marginTop: 56,
          textAlign: "center",
        }}
      >
        &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
      </p>
    </footer>
  );

  /* ─── compose ─── */
  return (
    <div
      style={{
        minHeight: "100vh",
        background: c.bg,
        color: c.text,
        fontFamily: font.body,
        overflowX: "hidden",
      }}
    >
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

/* ═══════════════════ card sub-components ═══════════════════ */

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
        background: hovered ? c.surfaceHover : c.surface,
        border: `1px solid ${hovered ? c.purple + "60" : c.purple + "20"}`,
        borderRadius: 14,
        padding: 36,
        transition: "all 0.3s ease",
        boxShadow: hovered ? glow(c.purple, 10) : "none",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 18 }}>{icon}</div>
      <h3
        style={{
          fontFamily: font.heading,
          fontSize: 20,
          fontWeight: 700,
          color: c.white,
          margin: "0 0 10px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: font.body,
          fontSize: 15,
          color: c.textMuted,
          margin: 0,
          lineHeight: 1.65,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: c.surface,
        border: `1px solid ${hovered ? c.cyan + "40" : c.cyan + "15"}`,
        borderRadius: 14,
        padding: 36,
        transition: "all 0.3s ease",
        boxShadow: hovered ? glow(c.cyan, 8) : "none",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <p
        style={{
          fontFamily: font.body,
          fontSize: 15,
          color: c.text,
          margin: 0,
          lineHeight: 1.7,
          fontStyle: "italic",
          flex: 1,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p
          style={{
            fontFamily: font.heading,
            fontSize: 15,
            fontWeight: 700,
            color: c.white,
            margin: 0,
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: font.body,
            fontSize: 13,
            color: c.textMuted,
            margin: "4px 0 0",
          }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  features,
  highlight,
}: {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlight: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const accentColor = highlight ? c.pink : c.purple;
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: highlight
          ? "linear-gradient(180deg, rgba(255,110,199,0.08) 0%, rgba(185,103,255,0.04) 100%)"
          : c.surface,
        border: `${highlight ? 2 : 1}px solid ${
          highlight
            ? c.pink + "60"
            : hovered
            ? c.purple + "40"
            : c.purple + "20"
        }`,
        borderRadius: 14,
        padding: 40,
        transition: "all 0.3s ease",
        boxShadow: highlight
          ? glow(c.pink, hovered ? 16 : 8)
          : hovered
          ? glow(c.purple, 8)
          : "none",
        transform: hovered ? "translateY(-4px)" : "none",
        position: "relative" as const,
      }}
    >
      {highlight && (
        <span
          style={{
            position: "absolute",
            top: -13,
            left: "50%",
            transform: "translateX(-50%)",
            background: c.gradientPink,
            color: c.white,
            fontSize: 11,
            fontWeight: 700,
            padding: "5px 16px",
            borderRadius: 20,
            letterSpacing: 1,
            textTransform: "uppercase",
            fontFamily: font.body,
          }}
        >
          Most Popular
        </span>
      )}
      <p
        style={{
          fontFamily: font.heading,
          fontSize: 15,
          fontWeight: 700,
          color: c.lavender,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          marginTop: 0,
          marginBottom: 8,
        }}
      >
        {name}
      </p>
      <p style={{ margin: "0 0 24px", display: "flex", alignItems: "baseline" }}>
        <span
          style={{
            fontFamily: font.heading,
            fontSize: 44,
            fontWeight: 900,
            color: c.white,
            textShadow: highlight ? glow(c.pink, 6) : "none",
          }}
        >
          {price}
        </span>
        {period && (
          <span
            style={{
              fontFamily: font.body,
              fontSize: 16,
              color: c.textMuted,
              marginLeft: 4,
            }}
          >
            {period}
          </span>
        )}
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
        {features.map((f) => (
          <li
            key={f}
            style={{
              fontFamily: font.body,
              fontSize: 14,
              color: c.text,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ color: accentColor, fontSize: 14 }}>✦</span>
            {f}
          </li>
        ))}
      </ul>
      <GlowButton
        variant={highlight ? "pink" : "outline"}
        style={{ width: "100%", textAlign: "center" }}
      >
        {price === "Free" ? "Start Free" : "Subscribe"}
      </GlowButton>
    </div>
  );
}

export default VaporwaveLanding;
