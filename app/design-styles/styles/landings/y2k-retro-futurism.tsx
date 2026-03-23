"use client";

import React, { useState, CSSProperties } from "react";

// ── Y2K Retro-Futurism palette & tokens ──────────────────────────────
const palette = {
  bg: "#0a0a1a",
  bgAlt: "#101030",
  surface: "#161640",
  surfaceHover: "#1e1e55",
  accent: "#00e5ff",
  accentAlt: "#ff00e5",
  accentGold: "#ffe44d",
  text: "#e0e0ff",
  textMuted: "#8888bb",
  white: "#ffffff",
  black: "#000000",
  gradientPrimary: "linear-gradient(135deg, #00e5ff 0%, #ff00e5 100%)",
  gradientHero: "linear-gradient(180deg, #0a0a1a 0%, #101030 60%, #18184a 100%)",
  gradientCard: "linear-gradient(145deg, rgba(0,229,255,0.08) 0%, rgba(255,0,229,0.08) 100%)",
  gradientAccent: "linear-gradient(90deg, #00e5ff 0%, #ff00e5 100%)",
  border: "rgba(0,229,255,0.18)",
  borderBright: "rgba(0,229,255,0.4)",
  glow: "0 0 24px rgba(0,229,255,0.25), 0 0 48px rgba(255,0,229,0.12)",
  glowAccent: "0 0 16px rgba(0,229,255,0.5), 0 0 40px rgba(255,0,229,0.2)",
};

const font = {
  heading: "'Trebuchet MS', 'Segoe UI', system-ui, sans-serif",
  body: "'Segoe UI', system-ui, sans-serif",
  mono: "'Courier New', Courier, monospace",
};

const radius = {
  sm: 6,
  md: 12,
  lg: 20,
  pill: 999,
};

// ── Shared style helpers ─────────────────────────────────────────────
const sectionBase: CSSProperties = {
  width: "100%",
  maxWidth: 1200,
  marginLeft: "auto",
  marginRight: "auto",
  padding: "80px 24px",
};

const sectionHeadingStyle: CSSProperties = {
  fontFamily: font.heading,
  fontSize: 36,
  fontWeight: 800,
  color: palette.white,
  textAlign: "center",
  marginBottom: 12,
  letterSpacing: -0.5,
  textTransform: "uppercase",
};

const sectionSubStyle: CSSProperties = {
  fontFamily: font.body,
  fontSize: 17,
  color: palette.textMuted,
  textAlign: "center",
  marginBottom: 48,
  maxWidth: 560,
  marginLeft: "auto",
  marginRight: "auto",
  lineHeight: 1.6,
};

const cardBase: CSSProperties = {
  background: palette.gradientCard,
  backdropFilter: "blur(8px)",
  border: `1px solid ${palette.border}`,
  borderRadius: radius.lg,
  padding: 32,
  transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
};

// ── Sub-components ───────────────────────────────────────────────────

function GlowButton({
  children,
  variant = "primary",
  style,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  style?: CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);

  const base: CSSProperties = {
    fontFamily: font.heading,
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: 0.5,
    border: "none",
    cursor: "pointer",
    borderRadius: radius.pill,
    padding: "13px 30px",
    transition: "all 0.25s",
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  };

  const variants: Record<string, CSSProperties> = {
    primary: {
      background: palette.gradientAccent,
      color: palette.black,
      boxShadow: hovered ? palette.glowAccent : palette.glow,
      transform: hovered ? "translateY(-2px) scale(1.03)" : "none",
    },
    secondary: {
      background: palette.surface,
      color: palette.accent,
      border: `1.5px solid ${palette.borderBright}`,
      boxShadow: hovered ? palette.glow : "none",
      transform: hovered ? "translateY(-2px)" : "none",
    },
    outline: {
      background: "transparent",
      color: palette.accent,
      border: `1.5px solid ${palette.border}`,
      boxShadow: hovered ? `0 0 12px rgba(0,229,255,0.2)` : "none",
      transform: hovered ? "translateY(-1px)" : "none",
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

function NavLink({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      style={{
        fontFamily: font.body,
        fontSize: 14,
        fontWeight: 600,
        color: hovered ? palette.accent : palette.textMuted,
        textDecoration: "none",
        transition: "color 0.2s",
        letterSpacing: 0.3,
        textTransform: "uppercase",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

function StarDecor({ size = 18, color = palette.accent }: { size?: number; color?: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size,
        height: size,
        fontSize: size,
        lineHeight: 1,
        color,
        filter: `drop-shadow(0 0 4px ${color})`,
      }}
    >
      ✦
    </span>
  );
}

// ── Header ───────────────────────────────────────────────────────────
function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        background: "rgba(10,10,26,0.85)",
        backdropFilter: "blur(16px)",
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
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: font.heading,
            fontSize: 20,
            fontWeight: 800,
            color: palette.white,
            display: "flex",
            alignItems: "center",
            gap: 8,
            letterSpacing: -0.3,
          }}
        >
          <span
            style={{
              background: palette.gradientPrimary,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: 24,
            }}
          >
            ▲
          </span>{" "}
          Stackpulse
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 32 }}>
          <NavLink>Features</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Docs</NavLink>
          <NavLink>Blog</NavLink>
        </nav>

        {/* CTA */}
        <GlowButton variant="primary" style={{ padding: "9px 22px", fontSize: 13 }}>
          Sign Up
        </GlowButton>
      </div>
    </header>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        background: palette.gradientHero,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid overlay for Y2K feel */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,0,229,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          ...sectionBase,
          padding: "120px 24px 100px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(0,229,255,0.07)",
            border: `1px solid ${palette.border}`,
            borderRadius: radius.pill,
            padding: "6px 18px",
            marginBottom: 32,
            fontSize: 13,
            fontFamily: font.mono,
            color: palette.accent,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          <StarDecor size={12} /> Now in public beta <StarDecor size={12} />
        </div>

        <h1
          style={{
            fontFamily: font.heading,
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 1.05,
            color: palette.white,
            marginBottom: 24,
            letterSpacing: -2,
            textTransform: "uppercase",
          }}
        >
          Ship at the
          <br />
          <span
            style={{
              background: palette.gradientPrimary,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Speed of Light
          </span>
        </h1>

        <p
          style={{
            fontFamily: font.body,
            fontSize: 19,
            color: palette.textMuted,
            maxWidth: 540,
            margin: "0 auto 44px",
            lineHeight: 1.7,
          }}
        >
          The future-proof platform for teams that move fast. Automate deploys,
          monitor uptime, and scale without limits.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <GlowButton variant="primary">Get Started Free →</GlowButton>
          <GlowButton variant="secondary">Watch Demo ▶</GlowButton>
        </div>
      </div>
    </section>
  );
}

// ── Logos Bar ─────────────────────────────────────────────────────────
function LogosBar() {
  const brands = ["Vercel", "Stripe", "Linear", "Figma", "Notion"];
  return (
    <section style={{ background: palette.bgAlt, borderTop: `1px solid ${palette.border}`, borderBottom: `1px solid ${palette.border}` }}>
      <div style={{ ...sectionBase, padding: "40px 24px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: font.body,
            fontSize: 13,
            color: palette.textMuted,
            textTransform: "uppercase",
            letterSpacing: 2,
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
                fontFamily: font.heading,
                fontSize: 20,
                fontWeight: 700,
                color: palette.textMuted,
                opacity: 0.5,
                letterSpacing: 1,
                textTransform: "uppercase",
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

// ── Features ─────────────────────────────────────────────────────────
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...cardBase,
        borderColor: hovered ? palette.borderBright : palette.border,
        boxShadow: hovered ? palette.glow : "none",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: radius.md,
          background: "rgba(0,229,255,0.08)",
          border: `1px solid ${palette.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          marginBottom: 20,
          boxShadow: "0 0 20px rgba(0,229,255,0.1)",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: font.heading,
          fontSize: 19,
          fontWeight: 700,
          color: palette.white,
          marginBottom: 10,
          textTransform: "uppercase",
          letterSpacing: 0.3,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: font.body,
          fontSize: 15,
          color: palette.textMuted,
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Instant Deploys",
      description:
        "Push to main and watch your site go live in under three seconds. Zero-downtime rollbacks included.",
    },
    {
      icon: "🛡️",
      title: "Edge Security",
      description:
        "Built-in DDoS protection, rate limiting, and bot detection—running at every edge node worldwide.",
    },
    {
      icon: "📊",
      title: "Live Analytics",
      description:
        "Real-time dashboards for uptime, latency, and throughput. Set alerts and never miss a blip.",
    },
  ];

  return (
    <section style={{ background: palette.bg }}>
      <div style={sectionBase}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <StarDecor size={16} color={palette.accentAlt} />
        </div>
        <h2 style={sectionHeadingStyle}>Built for Warp Speed</h2>
        <p style={sectionSubStyle}>
          Everything you need to launch, monitor, and scale—wrapped in one
          futuristic toolkit.
        </p>
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
      </div>
    </section>
  );
}

// ── Testimonials ─────────────────────────────────────────────────────
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
      style={{
        ...cardBase,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderColor: hovered ? palette.borderBright : palette.border,
        boxShadow: hovered ? palette.glow : "none",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ color: palette.accentGold, fontSize: 16 }}>
              ★
            </span>
          ))}
        </div>
        <p
          style={{
            fontFamily: font.body,
            fontSize: 15,
            color: palette.text,
            lineHeight: 1.7,
            margin: 0,
            fontStyle: "italic",
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: palette.gradientAccent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: font.heading,
            fontWeight: 800,
            fontSize: 16,
            color: palette.black,
          }}
        >
          {name[0]}
        </div>
        <div>
          <p
            style={{
              fontFamily: font.heading,
              fontSize: 14,
              fontWeight: 700,
              color: palette.white,
              margin: 0,
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontFamily: font.body,
              fontSize: 13,
              color: palette.textMuted,
              margin: 0,
            }}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Stackpulse cut our deploy time from twenty minutes to under five seconds. It feels like time travel.",
      name: "Aiko Tanaka",
      role: "CTO, Hyperlane",
    },
    {
      quote:
        "The edge analytics alone saved us thousands in debugging hours. The UI is pure retro bliss.",
      name: "Marcus Rivera",
      role: "Lead Engineer, NeonGrid",
    },
    {
      quote:
        "We migrated our entire infra in a weekend. The docs are incredible and the DX is unmatched.",
      name: "Priya Sharma",
      role: "Founder, Pixelshift",
    },
  ];

  return (
    <section style={{ background: palette.bgAlt }}>
      <div style={sectionBase}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <StarDecor size={16} color={palette.accentGold} />
        </div>
        <h2 style={sectionHeadingStyle}>Voices from the Future</h2>
        <p style={sectionSubStyle}>
          Join thousands of builders who already shipped with Stackpulse.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Pricing ──────────────────────────────────────────────────────────
function PricingTier({
  name,
  price,
  period,
  features,
  highlighted,
  cta,
}: {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...cardBase,
        position: "relative",
        borderColor: highlighted ? palette.borderBright : hovered ? palette.borderBright : palette.border,
        boxShadow: highlighted
          ? palette.glow
          : hovered
          ? "0 0 16px rgba(0,229,255,0.15)"
          : "none",
        transform: highlighted
          ? hovered
            ? "scale(1.04)"
            : "scale(1.02)"
          : hovered
          ? "translateY(-4px)"
          : "none",
        background: highlighted
          ? "linear-gradient(145deg, rgba(0,229,255,0.12) 0%, rgba(255,0,229,0.12) 100%)"
          : palette.gradientCard,
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {highlighted && (
        <div
          style={{
            position: "absolute",
            top: -1,
            left: -1,
            right: -1,
            height: 3,
            background: palette.gradientAccent,
            borderRadius: `${radius.lg}px ${radius.lg}px 0 0`,
          }}
        />
      )}

      {highlighted && (
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 11,
            fontWeight: 700,
            color: palette.black,
            background: palette.gradientAccent,
            borderRadius: radius.pill,
            padding: "4px 14px",
            alignSelf: "flex-start",
            marginBottom: 16,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Most Popular
        </span>
      )}

      <h3
        style={{
          fontFamily: font.heading,
          fontSize: 18,
          fontWeight: 700,
          color: palette.white,
          margin: 0,
          marginBottom: 8,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {name}
      </h3>

      <div style={{ marginBottom: 24 }}>
        <span
          style={{
            fontFamily: font.heading,
            fontSize: 48,
            fontWeight: 900,
            color: highlighted ? palette.accent : palette.white,
            letterSpacing: -2,
          }}
        >
          {price}
        </span>
        {period && (
          <span
            style={{
              fontFamily: font.body,
              fontSize: 15,
              color: palette.textMuted,
              marginLeft: 4,
            }}
          >
            {period}
          </span>
        )}
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 32px",
          flex: 1,
        }}
      >
        {features.map((f) => (
          <li
            key={f}
            style={{
              fontFamily: font.body,
              fontSize: 14,
              color: palette.text,
              padding: "8px 0",
              borderBottom: `1px solid rgba(0,229,255,0.06)`,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ color: palette.accent, fontSize: 14 }}>✦</span>
            {f}
          </li>
        ))}
      </ul>

      <GlowButton
        variant={highlighted ? "primary" : "outline"}
        style={{ width: "100%", justifyContent: "center" }}
      >
        {cta}
      </GlowButton>
    </div>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      features: ["1 project", "100 deploys/month", "Community support", "Basic analytics", "Shared edge nodes"],
      cta: "Start Free",
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
        "Dedicated edge nodes",
        "Custom domains",
      ],
      highlighted: true,
      cta: "Go Pro →",
    },
    {
      name: "Team",
      price: "$79",
      period: "/mo",
      features: [
        "Everything in Pro",
        "10 team members",
        "SSO & SAML",
        "Audit logs",
        "SLA guarantee",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <section style={{ background: palette.bg }}>
      <div style={sectionBase}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <StarDecor size={16} />
        </div>
        <h2 style={sectionHeadingStyle}>Choose Your Orbit</h2>
        <p style={sectionSubStyle}>
          Start free, scale infinitely. No credit card required for Starter.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {tiers.map((t) => (
            <PricingTier key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ──────────────────────────────────────────────────────────────
function CtaSection() {
  return (
    <section
      style={{
        background: palette.bgAlt,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,0,229,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,229,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          ...sectionBase,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          padding: "100px 24px",
        }}
      >
        <h2
          style={{
            fontFamily: font.heading,
            fontSize: 48,
            fontWeight: 900,
            color: palette.white,
            marginBottom: 20,
            letterSpacing: -1.5,
            textTransform: "uppercase",
            lineHeight: 1.1,
          }}
        >
          Ready to Enter
          <br />
          <span
            style={{
              background: palette.gradientPrimary,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            the Future?
          </span>
        </h2>
        <p
          style={{
            fontFamily: font.body,
            fontSize: 18,
            color: palette.textMuted,
            maxWidth: 480,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          Join 2,000+ teams shipping faster than ever. Free to start, no credit
          card required.
        </p>
        <GlowButton variant="primary" style={{ fontSize: 16, padding: "16px 40px" }}>
          Launch Your Stack →
        </GlowButton>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────
function Footer() {
  const columns = [
    { heading: "Product", links: ["Features", "Pricing", "Changelog", "Docs", "Status"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Contact", "Partners"] },
    { heading: "Legal", links: ["Privacy", "Terms", "Security", "GDPR", "Cookies"] },
  ];

  return (
    <footer
      style={{
        background: palette.bg,
        borderTop: `1px solid ${palette.border}`,
      }}
    >
      <div
        style={{
          ...sectionBase,
          padding: "60px 24px 32px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(3, 1fr)",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Logo + tagline */}
          <div>
            <div
              style={{
                fontFamily: font.heading,
                fontSize: 20,
                fontWeight: 800,
                color: palette.white,
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  background: palette.gradientPrimary,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: 24,
                }}
              >
                ▲
              </span>{" "}
              Stackpulse
            </div>
            <p
              style={{
                fontFamily: font.body,
                fontSize: 14,
                color: palette.textMuted,
                lineHeight: 1.6,
                maxWidth: 260,
                margin: 0,
              }}
            >
              The future-proof platform for teams that ship at the speed of
              light.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4
                style={{
                  fontFamily: font.heading,
                  fontSize: 12,
                  fontWeight: 700,
                  color: palette.accent,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  marginBottom: 16,
                  margin: "0 0 16px",
                }}
              >
                {col.heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map((link) => (
                  <li key={link} style={{ marginBottom: 10 }}>
                    <a
                      href="#"
                      style={{
                        fontFamily: font.body,
                        fontSize: 14,
                        color: palette.textMuted,
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = palette.white)
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = palette.textMuted)
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

        {/* Copyright */}
        <div
          style={{
            borderTop: `1px solid ${palette.border}`,
            paddingTop: 24,
            textAlign: "center",
            fontFamily: font.body,
            fontSize: 13,
            color: palette.textMuted,
          }}
        >
          © 2026 Stackpulse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ── Main Export ───────────────────────────────────────────────────────
export function Y2KRetroFuturismLanding() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: palette.bg,
        color: palette.text,
        fontFamily: font.body,
        margin: 0,
        padding: 0,
        overflowX: "hidden",
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

export default Y2KRetroFuturismLanding;
