"use client";

import React, { useState, useEffect, CSSProperties } from "react";

/* ------------------------------------------------------------------ */
/*  Keyframe injection (once)                                         */
/* ------------------------------------------------------------------ */
const KEYFRAMES = `
@keyframes km-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-18px) rotate(2deg); }
}
@keyframes km-pulse {
  0%, 100% { opacity: .45; transform: scale(1); }
  50% { opacity: .8; transform: scale(1.08); }
}
@keyframes km-slide-up {
  from { opacity: 0; transform: translateY(48px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes km-slide-left {
  from { opacity: 0; transform: translateX(60px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes km-gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes km-spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes km-dash {
  to { stroke-dashoffset: 0; }
}
@keyframes km-wiggle {
  0%, 100% { transform: rotate(-1deg); }
  50% { transform: rotate(1deg); }
}
`;

let injected = false;
function injectKeyframes() {
  if (injected || typeof document === "undefined") return;
  const style = document.createElement("style");
  style.textContent = KEYFRAMES;
  document.head.appendChild(style);
  injected = true;
}

/* ------------------------------------------------------------------ */
/*  Palette & tokens                                                  */
/* ------------------------------------------------------------------ */
const C = {
  bg: "#0a0a0f",
  surface: "#131320",
  surfaceHover: "#1a1a2e",
  border: "rgba(255,255,255,.06)",
  text: "#f0f0f5",
  muted: "#9090a8",
  accent: "#6c5ce7",
  accentAlt: "#00cec9",
  gradient: "linear-gradient(135deg, #6c5ce7, #00cec9)",
  gradientWide: "linear-gradient(270deg, #6c5ce7, #00cec9, #fd79a8, #6c5ce7)",
  white: "#ffffff",
};

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                    */
/* ------------------------------------------------------------------ */
function Section({
  children,
  style,
  id,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
  id?: string;
}) {
  return (
    <section
      id={id}
      style={{
        padding: "100px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: C.accentAlt,
        marginBottom: 12,
      }}
    >
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: "clamp(28px, 4vw, 44px)",
        fontWeight: 800,
        color: C.text,
        lineHeight: 1.2,
        marginBottom: 16,
      }}
    >
      {children}
    </h2>
  );
}

function SectionSub({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 17,
        color: C.muted,
        maxWidth: 560,
        lineHeight: 1.6,
        marginBottom: 48,
      }}
    >
      {children}
    </p>
  );
}

function MotionOrb({
  size,
  color,
  top,
  left,
  delay,
}: {
  size: number;
  color: string;
  top: string;
  left: string;
  delay: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        filter: `blur(${size * 0.6}px)`,
        top,
        left,
        animation: `km-pulse 6s ease-in-out ${delay}s infinite`,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Button                                                            */
/* ------------------------------------------------------------------ */
function Btn({
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
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 30px",
    fontSize: 15,
    fontWeight: 700,
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    transition: "all .3s cubic-bezier(.4,0,.2,1)",
    transform: hovered ? "translateY(-2px) scale(1.03)" : "translateY(0) scale(1)",
    position: "relative",
    overflow: "hidden",
    ...style,
  };

  const variants: Record<string, CSSProperties> = {
    primary: {
      background: C.gradient,
      color: C.white,
      boxShadow: hovered
        ? "0 8px 32px rgba(108,92,231,.45)"
        : "0 4px 16px rgba(108,92,231,.25)",
    },
    secondary: {
      background: C.surface,
      color: C.text,
      border: `1px solid ${C.border}`,
      boxShadow: hovered ? "0 4px 20px rgba(0,0,0,.3)" : "none",
    },
    outline: {
      background: "transparent",
      color: C.text,
      border: `2px solid ${C.accent}`,
      boxShadow: hovered ? `0 0 20px rgba(108,92,231,.3)` : "none",
    },
  };

  return (
    <button
      style={{ ...base, ...variants[variant] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  1. Header                                                         */
/* ------------------------------------------------------------------ */
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Features", "Testimonials", "Pricing"];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        background: scrolled ? "rgba(10,10,15,.8)" : "transparent",
        borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all .4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: C.text,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              display: "inline-block",
              animation: "km-wiggle 3s ease-in-out infinite",
            }}
          >
            ▲
          </span>
          Stackpulse
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 32 }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                color: C.muted,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                transition: "color .25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Sign-up */}
        <Btn variant="primary" style={{ padding: "10px 22px", fontSize: 13 }}>
          Sign Up
        </Btn>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  2. Hero                                                           */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <Section style={{ paddingTop: 160, textAlign: "center" }}>
      <MotionOrb size={340} color="rgba(108,92,231,.18)" top="-80px" left="-10%" delay={0} />
      <MotionOrb size={260} color="rgba(0,206,201,.12)" top="30%" left="75%" delay={2} />

      {/* Spinning ring decoration */}
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <svg
          width="520"
          height="520"
          viewBox="0 0 520 520"
          style={{ animation: "km-spin-slow 30s linear infinite", opacity: 0.08 }}
        >
          <circle
            cx="260"
            cy="260"
            r="250"
            fill="none"
            stroke={C.accent}
            strokeWidth="1"
            strokeDasharray="12 8"
          />
        </svg>
      </div>

      <div style={{ position: "relative", zIndex: 1, animation: "km-slide-up .8s ease-out both" }}>
        <span
          style={{
            display: "inline-block",
            padding: "6px 16px",
            borderRadius: 100,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: C.accentAlt,
            border: `1px solid rgba(0,206,201,.25)`,
            marginBottom: 28,
            animation: "km-float 5s ease-in-out infinite",
          }}
        >
          Now in public beta
        </span>

        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 76px)",
            fontWeight: 900,
            lineHeight: 1.05,
            color: C.text,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}
        >
          Ship faster with{" "}
          <span
            style={{
              backgroundImage: C.gradientWide,
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "km-gradient 6s ease infinite",
            }}
          >
            relentless momentum
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: C.muted,
            maxWidth: 580,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          Stackpulse orchestrates your entire deployment pipeline so your team
          spends less time waiting and more time building.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn variant="primary">Get Started Free</Btn>
          <Btn variant="secondary">Watch Demo &rarr;</Btn>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. Logos bar                                                      */
/* ------------------------------------------------------------------ */
function LogosBar() {
  const brands = ["Vercel", "Linear", "Raycast", "Resend", "Planetscale"];
  return (
    <div
      style={{
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: 13, color: C.muted, marginBottom: 24, letterSpacing: 1 }}>
        TRUSTED BY 2,000+ MAKERS AT
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 48,
          flexWrap: "wrap",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {brands.map((b, i) => (
          <span
            key={b}
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "rgba(255,255,255,.2)",
              letterSpacing: 1,
              animation: `km-slide-left .6s ease-out ${i * 0.1}s both`,
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  4. Features                                                       */
/* ------------------------------------------------------------------ */
function Features() {
  const cards = [
    {
      icon: "⚡",
      title: "Instant Deploys",
      desc: "Push to main and watch your changes go live in under 8 seconds with zero-downtime rollouts.",
    },
    {
      icon: "🔄",
      title: "Continuous Pipelines",
      desc: "Automated build, test, and release pipelines that adapt to your branching strategy.",
    },
    {
      icon: "📊",
      title: "Live Observability",
      desc: "Real-time metrics, logs, and traces in a single dashboard so you catch issues before users do.",
    },
  ];

  return (
    <Section id="features">
      <div style={{ textAlign: "center" }}>
        <SectionTag>Features</SectionTag>
        <SectionHeading>Everything you need to move fast</SectionHeading>
        <SectionSub>
          A complete toolkit designed for velocity, wrapped in an interface your team will actually enjoy.
        </SectionSub>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {cards.map((c, i) => (
          <FeatureCard key={c.title} {...c} delay={i * 0.15} />
        ))}
      </div>
    </Section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: string;
  title: string;
  desc: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.surface,
        border: `1px solid ${hovered ? "rgba(108,92,231,.35)" : C.border}`,
        borderRadius: 16,
        padding: 36,
        transition: "all .4s cubic-bezier(.4,0,.2,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 48px rgba(108,92,231,.12)" : "none",
        animation: `km-slide-up .7s ease-out ${delay}s both`,
      }}
    >
      {/* Icon container with motion ring */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          background: "rgba(108,92,231,.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 20,
          position: "relative",
          transition: "transform .4s ease",
          transform: hovered ? "rotate(4deg) scale(1.08)" : "rotate(0deg) scale(1)",
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontSize: 19, fontWeight: 700, color: C.text, marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.65 }}>{desc}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  5. Testimonials                                                   */
/* ------------------------------------------------------------------ */
function Testimonials() {
  const quotes = [
    {
      text: "Stackpulse cut our deploy times by 80%. Our engineers are shipping features instead of fighting infrastructure.",
      name: "Alex Chen",
      role: "CTO at Gridwork",
    },
    {
      text: "The observability layer alone is worth it. We caught a memory leak in staging before it ever reached production.",
      name: "Priya Sharma",
      role: "Lead SRE at Nomad",
    },
    {
      text: "We evaluated five platforms. Stackpulse was the only one the entire team actually wanted to use every day.",
      name: "Marcus Johnson",
      role: "VP Eng at Folio",
    },
  ];

  return (
    <Section id="testimonials">
      <div style={{ textAlign: "center" }}>
        <SectionTag>Testimonials</SectionTag>
        <SectionHeading>Loved by fast-moving teams</SectionHeading>
        <SectionSub>
          Hear from engineers who are shipping with confidence and speed.
        </SectionSub>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {quotes.map((q, i) => (
          <TestimonialCard key={q.name} {...q} delay={i * 0.15} />
        ))}
      </div>
    </Section>
  );
}

function TestimonialCard({
  text,
  name,
  role,
  delay,
}: {
  text: string;
  name: string;
  role: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.surface,
        border: `1px solid ${hovered ? "rgba(0,206,201,.3)" : C.border}`,
        borderRadius: 16,
        padding: 36,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all .4s cubic-bezier(.4,0,.2,1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(0,206,201,.08)" : "none",
        animation: `km-slide-up .7s ease-out ${delay}s both`,
      }}
    >
      {/* Quotation mark */}
      <span
        style={{
          fontSize: 40,
          lineHeight: 1,
          backgroundImage: C.gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: 16,
          display: "block",
        }}
      >
        &ldquo;
      </span>
      <p style={{ fontSize: 15, color: C.text, lineHeight: 1.7, flex: 1, marginBottom: 24 }}>
        {text}
      </p>
      <div>
        <p style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{name}</p>
        <p style={{ fontSize: 13, color: C.muted }}>{role}</p>
      </div>
    </div>
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
      sub: "For solo builders",
      features: ["1 project", "500 builds / mo", "Community support", "Basic analytics"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "For growing teams",
      features: [
        "Unlimited projects",
        "5,000 builds / mo",
        "Priority support",
        "Advanced observability",
        "Custom domains",
      ],
      highlighted: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "For scaling orgs",
      features: [
        "Everything in Pro",
        "Unlimited builds",
        "SSO & RBAC",
        "SLA guarantee",
        "Dedicated account manager",
      ],
      highlighted: false,
    },
  ];

  return (
    <Section id="pricing">
      <div style={{ textAlign: "center" }}>
        <SectionTag>Pricing</SectionTag>
        <SectionHeading>Simple, transparent pricing</SectionHeading>
        <SectionSub>
          Start free. Upgrade when you need more power. No surprises.
        </SectionSub>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          alignItems: "start",
        }}
      >
        {tiers.map((t, i) => (
          <PricingCard key={t.name} {...t} delay={i * 0.15} />
        ))}
      </div>
    </Section>
  );
}

function PricingCard({
  name,
  price,
  sub,
  features,
  highlighted,
  delay,
}: {
  name: string;
  price: string;
  sub: string;
  features: string[];
  highlighted: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: highlighted
          ? "linear-gradient(180deg, rgba(108,92,231,.12), rgba(10,10,15,.95))"
          : C.surface,
        border: `1px solid ${highlighted ? "rgba(108,92,231,.4)" : C.border}`,
        borderRadius: 20,
        padding: 40,
        transition: "all .4s cubic-bezier(.4,0,.2,1)",
        transform: hovered
          ? `translateY(-6px) scale(${highlighted ? 1.02 : 1.01})`
          : `translateY(0) scale(1)`,
        boxShadow: highlighted
          ? "0 20px 60px rgba(108,92,231,.18)"
          : hovered
          ? "0 10px 30px rgba(0,0,0,.25)"
          : "none",
        animation: `km-slide-up .7s ease-out ${delay}s both`,
      }}
    >
      {highlighted && (
        <span
          style={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            background: C.gradient,
            color: C.white,
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            padding: "5px 18px",
            borderRadius: 100,
            animation: "km-float 4s ease-in-out infinite",
          }}
        >
          Most Popular
        </span>
      )}

      <p style={{ fontSize: 15, fontWeight: 700, color: C.muted, marginBottom: 8 }}>{name}</p>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
        <span style={{ fontSize: 44, fontWeight: 900, color: C.text }}>{price}</span>
        {price !== "Free" && (
          <span style={{ fontSize: 15, color: C.muted, fontWeight: 600 }}>/mo</span>
        )}
      </div>
      <p style={{ fontSize: 14, color: C.muted, marginBottom: 28 }}>{sub}</p>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
        {features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 14,
              color: C.text,
              padding: "8px 0",
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: 6,
                background: highlighted ? "rgba(108,92,231,.15)" : "rgba(0,206,201,.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                color: highlighted ? C.accent : C.accentAlt,
                flexShrink: 0,
              }}
            >
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Btn
        variant={highlighted ? "primary" : "outline"}
        style={{ width: "100%", borderRadius: 12 }}
      >
        {price === "Free" ? "Start Free" : "Get Started"}
      </Btn>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  7. CTA                                                            */
/* ------------------------------------------------------------------ */
function CtaBanner() {
  return (
    <div
      style={{
        margin: "0 24px",
        borderRadius: 24,
        padding: "80px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, rgba(108,92,231,.15), rgba(0,206,201,.1))",
        border: `1px solid ${C.border}`,
      }}
    >
      <MotionOrb size={200} color="rgba(108,92,231,.2)" top="-60px" left="10%" delay={0} />
      <MotionOrb size={160} color="rgba(0,206,201,.15)" top="40%" left="80%" delay={1.5} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 900,
            color: C.text,
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          Ready to build with{" "}
          <span
            style={{
              backgroundImage: C.gradientWide,
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "km-gradient 6s ease infinite",
            }}
          >
            momentum
          </span>
          ?
        </h2>
        <p style={{ fontSize: 17, color: C.muted, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.6 }}>
          Join thousands of developers shipping faster every day.
        </p>
        <Btn variant="primary" style={{ padding: "16px 40px", fontSize: 16 }}>
          Start Building Free
        </Btn>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  8. Footer                                                         */
/* ------------------------------------------------------------------ */
function Footer() {
  const columns: { heading: string; links: string[] }[] = [
    { heading: "Product", links: ["Features", "Pricing", "Integrations", "Changelog", "Docs"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { heading: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
  ];

  return (
    <footer
      style={{
        borderTop: `1px solid ${C.border}`,
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
        {/* Logo + tagline */}
        <div style={{ maxWidth: 260 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: C.text,
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ animation: "km-wiggle 3s ease-in-out infinite" }}>▲</span>
            Stackpulse
          </div>
          <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.6 }}>
            The deployment platform built for teams that refuse to slow down.
          </p>
        </div>

        {/* Link columns */}
        <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
          {columns.map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: C.text,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  marginBottom: 16,
                }}
              >
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map((l) => (
                  <li key={l} style={{ marginBottom: 10 }}>
                    <a
                      href="#"
                      style={{
                        color: C.muted,
                        textDecoration: "none",
                        fontSize: 14,
                        transition: "color .25s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = C.text)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
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

      {/* Copyright */}
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          paddingTop: 24,
          fontSize: 13,
          color: C.muted,
        }}
      >
        &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Root export                                                       */
/* ------------------------------------------------------------------ */
export function KineticMotionLanding() {
  useEffect(() => {
    injectKeyframes();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        color: C.text,
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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
