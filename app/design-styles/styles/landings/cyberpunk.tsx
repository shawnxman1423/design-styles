"use client";

import React, { useState, CSSProperties } from "react";

/* ─── palette ─── */
const C = {
  bg: "#0a0a0f",
  bgCard: "#12121a",
  bgCardAlt: "#1a1a2e",
  neonCyan: "#00f0ff",
  neonMagenta: "#ff00aa",
  neonYellow: "#ffe600",
  neonPurple: "#b400ff",
  text: "#e0e0f0",
  textMuted: "#8888aa",
  border: "#2a2a3e",
  borderGlow: "rgba(0,240,255,0.25)",
  white: "#ffffff",
};

/* ─── shared helpers ─── */
const glowText = (color: string): CSSProperties => ({
  textShadow: `0 0 8px ${color}, 0 0 24px ${color}`,
});

const glowBox = (color: string): CSSProperties => ({
  boxShadow: `0 0 12px ${color}, inset 0 0 12px rgba(0,0,0,0.4)`,
});

const sectionPadding: CSSProperties = {
  padding: "96px 24px",
  maxWidth: 1200,
  margin: "0 auto",
};

const sectionHeading: CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: 4,
  textTransform: "uppercase" as const,
  color: C.neonCyan,
  marginBottom: 8,
  ...glowText(C.neonCyan),
};

const sectionTitle: CSSProperties = {
  fontSize: "clamp(28px, 4vw, 42px)",
  fontWeight: 800,
  color: C.white,
  marginBottom: 48,
};

/* ─── scanline overlay keyframes injected once ─── */
const scanlineCSS = `
@keyframes cpScanline {
  0% { background-position: 0 0; }
  100% { background-position: 0 100%; }
}
@keyframes cpFlicker {
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.7; }
  94% { opacity: 1; }
  96% { opacity: 0.8; }
  97% { opacity: 1; }
}
@keyframes cpGlitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 1px); }
  40% { transform: translate(2px, -1px); }
  60% { transform: translate(-1px, 2px); }
  80% { transform: translate(1px, -2px); }
}
@keyframes cpPulse {
  0%, 100% { box-shadow: 0 0 8px rgba(0,240,255,0.4); }
  50% { box-shadow: 0 0 20px rgba(0,240,255,0.8), 0 0 40px rgba(0,240,255,0.3); }
}
`;

/* ═══════════════════════════════════════════
   Component
   ═══════════════════════════════════════════ */

export function CyberpunkLanding() {
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [hoveredPricing, setHoveredPricing] = useState<number | null>(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);

  /* ─── 1  HEADER ─── */
  const header = (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        height: 64,
        background: "rgba(10,10,15,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          fontWeight: 800,
          fontSize: 18,
          color: C.neonCyan,
          letterSpacing: 1,
          ...glowText(C.neonCyan),
        }}
      >
        ▲ Stackpulse
      </div>

      <nav style={{ display: "flex", gap: 32 }}>
        {["Features", "Pricing", "Docs", "Blog"].map((label, i) => (
          <a
            key={label}
            href="#"
            onMouseEnter={() => setHoveredNav(i)}
            onMouseLeave={() => setHoveredNav(null)}
            style={{
              color: hoveredNav === i ? C.neonCyan : C.textMuted,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              transition: "color 0.2s",
              ...(hoveredNav === i ? glowText(C.neonCyan) : {}),
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      <button
        style={{
          padding: "8px 20px",
          fontSize: 14,
          fontWeight: 700,
          color: C.bg,
          background: C.neonCyan,
          border: "none",
          cursor: "pointer",
          textTransform: "uppercase",
          letterSpacing: 1,
          clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
          ...glowBox(C.neonCyan),
        }}
      >
        Sign Up
      </button>
    </header>
  );

  /* ─── 2  HERO ─── */
  const hero = (
    <section
      style={{
        position: "relative",
        padding: "128px 24px 96px",
        textAlign: "center",
        overflow: "hidden",
        background: `radial-gradient(ellipse 80% 60% at 50% 20%, rgba(0,240,255,0.08) 0%, transparent 70%),
                     radial-gradient(ellipse 60% 50% at 80% 80%, rgba(255,0,170,0.06) 0%, transparent 70%),
                     ${C.bg}`,
      }}
    >
      {/* grid decoration */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            padding: "4px 16px",
            marginBottom: 24,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: C.neonMagenta,
            border: `1px solid ${C.neonMagenta}`,
            ...glowText(C.neonMagenta),
          }}
        >
          // System Online
        </div>
        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 900,
            lineHeight: 1.05,
            color: C.white,
            marginBottom: 24,
            letterSpacing: -1,
          }}
        >
          Build the future.
          <br />
          <span style={{ color: C.neonCyan, ...glowText(C.neonCyan) }}>
            Ship tonight.
          </span>
        </h1>
        <p
          style={{
            fontSize: 18,
            color: C.textMuted,
            maxWidth: 560,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          The hyper-accelerated dev platform that turns your ideas into
          production-grade products before the neon signs flicker off.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "14px 32px",
              fontSize: 15,
              fontWeight: 700,
              color: C.bg,
              background: C.neonCyan,
              border: "none",
              cursor: "pointer",
              letterSpacing: 1,
              textTransform: "uppercase",
              clipPath:
                "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
              ...glowBox(C.neonCyan),
            }}
          >
            Get Started Free
          </button>
          <button
            style={{
              padding: "14px 32px",
              fontSize: 15,
              fontWeight: 700,
              color: C.neonCyan,
              background: "transparent",
              border: `1px solid ${C.neonCyan}`,
              cursor: "pointer",
              letterSpacing: 1,
              textTransform: "uppercase",
              clipPath:
                "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
            }}
          >
            Live Demo
          </button>
        </div>
      </div>
    </section>
  );

  /* ─── 3  LOGOS BAR ─── */
  const logos = (
    <section
      style={{
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: "40px 24px",
        textAlign: "center",
        background: C.bgCard,
      }}
    >
      <p
        style={{
          fontSize: 13,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: C.textMuted,
          marginBottom: 24,
        }}
      >
        Trusted by 2,000+ makers at
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "32px 56px",
          alignItems: "center",
        }}
      >
        {["Nexon", "Voidlabs", "Syntek", "Aetheria", "Kairo"].map((name) => (
          <span
            key={name}
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: C.textMuted,
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.5,
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );

  /* ─── 4  FEATURES ─── */
  const features = [
    {
      icon: "⚡",
      title: "Neural Deploy",
      description:
        "Zero-config deployments that adapt to your stack. Push code, we handle the rest in under 8 seconds.",
    },
    {
      icon: "🔒",
      title: "Quantum Shield",
      description:
        "Military-grade encryption layered with real-time threat detection. Your data stays in the vault.",
    },
    {
      icon: "📡",
      title: "Edge Sync",
      description:
        "Global edge network that puts your app within 50ms of every user on the planet. Always fast.",
    },
  ];

  const featuresSection = (
    <section style={{ ...sectionPadding, textAlign: "center" }}>
      <p style={sectionHeading}>// Features</p>
      <h2 style={sectionTitle}>Engineered for the bleeding edge</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {features.map((f, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredFeature(i)}
            onMouseLeave={() => setHoveredFeature(null)}
            style={{
              position: "relative",
              padding: 32,
              background: C.bgCard,
              border: `1px solid ${hoveredFeature === i ? C.neonCyan : C.border}`,
              textAlign: "left",
              transition: "border-color 0.3s, box-shadow 0.3s",
              clipPath:
                "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
              ...(hoveredFeature === i ? glowBox(C.neonCyan) : {}),
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: C.white,
                marginBottom: 12,
              }}
            >
              {f.title}
            </h3>
            <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.7 }}>
              {f.description}
            </p>
            {/* corner accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 16,
                height: 16,
                borderBottom: `1px solid ${hoveredFeature === i ? C.neonCyan : C.border}`,
                borderLeft: `1px solid ${hoveredFeature === i ? C.neonCyan : C.border}`,
                transition: "border-color 0.3s",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );

  /* ─── 5  TESTIMONIALS ─── */
  const testimonials = [
    {
      quote:
        "Stackpulse cut our deploy pipeline from 12 minutes to 8 seconds. Our team literally cheered.",
      name: "Kai Tanaka",
      role: "CTO, Nexon",
    },
    {
      quote:
        "The edge sync alone justified the switch. Our global latency dropped 74% on day one.",
      name: "Zara Osei",
      role: "Lead Engineer, Voidlabs",
    },
    {
      quote:
        "I've shipped three side projects in a single weekend using Stackpulse. It's addictive.",
      name: "Misha Voronov",
      role: "Indie Maker",
    },
  ];

  const testimonialsSection = (
    <section
      style={{
        ...sectionPadding,
        textAlign: "center",
        background: C.bgCard,
      }}
    >
      <p style={sectionHeading}>// Testimonials</p>
      <h2 style={sectionTitle}>Words from the grid</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredTestimonial(i)}
            onMouseLeave={() => setHoveredTestimonial(null)}
            style={{
              padding: 32,
              background: C.bgCardAlt,
              border: `1px solid ${hoveredTestimonial === i ? C.neonMagenta : C.border}`,
              textAlign: "left",
              transition: "border-color 0.3s, box-shadow 0.3s",
              ...(hoveredTestimonial === i ? glowBox(C.neonMagenta) : {}),
            }}
          >
            <div
              style={{
                fontSize: 28,
                color: C.neonMagenta,
                marginBottom: 16,
                ...glowText(C.neonMagenta),
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontSize: 15,
                color: C.text,
                lineHeight: 1.7,
                marginBottom: 24,
                fontStyle: "italic",
              }}
            >
              {t.quote}
            </p>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: C.white,
                  marginBottom: 2,
                }}
              >
                {t.name}
              </p>
              <p style={{ fontSize: 13, color: C.textMuted }}>{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  /* ─── 6  PRICING ─── */
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      sub: "forever",
      features: [
        "1 project",
        "10k requests / mo",
        "Community support",
        "Basic analytics",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "/ month",
      features: [
        "Unlimited projects",
        "1M requests / mo",
        "Priority support",
        "Advanced analytics",
        "Custom domains",
        "Team collaboration",
      ],
      cta: "Upgrade to Pro",
      highlight: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "/ month",
      features: [
        "Everything in Pro",
        "10M requests / mo",
        "Dedicated support",
        "SSO & SAML",
        "SLA guarantee",
        "Audit logs",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  const pricingSection = (
    <section style={{ ...sectionPadding, textAlign: "center" }}>
      <p style={sectionHeading}>// Pricing</p>
      <h2 style={sectionTitle}>Choose your tier</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          alignItems: "start",
        }}
      >
        {tiers.map((t, i) => {
          const isHl = t.highlight;
          const accentColor = isHl ? C.neonCyan : C.border;
          const isHovered = hoveredPricing === i;
          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredPricing(i)}
              onMouseLeave={() => setHoveredPricing(null)}
              style={{
                position: "relative",
                padding: 36,
                background: isHl ? C.bgCardAlt : C.bgCard,
                border: `1px solid ${isHovered ? C.neonCyan : accentColor}`,
                textAlign: "left",
                transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                transform: isHl ? "scale(1.04)" : "none",
                ...(isHl || isHovered ? glowBox(C.neonCyan) : {}),
              }}
            >
              {isHl && (
                <div
                  style={{
                    position: "absolute",
                    top: -1,
                    left: -1,
                    right: -1,
                    height: 3,
                    background: `linear-gradient(90deg, ${C.neonCyan}, ${C.neonMagenta})`,
                  }}
                />
              )}
              {isHl && (
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: C.bg,
                    background: C.neonCyan,
                    padding: "3px 10px",
                    marginBottom: 16,
                  }}
                >
                  Most Popular
                </span>
              )}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: C.white,
                  marginBottom: 8,
                }}
              >
                {t.name}
              </h3>
              <div style={{ marginBottom: 24 }}>
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: 900,
                    color: isHl ? C.neonCyan : C.white,
                    ...(isHl ? glowText(C.neonCyan) : {}),
                  }}
                >
                  {t.price}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: C.textMuted,
                    marginLeft: 4,
                  }}
                >
                  {t.sub}
                </span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px",
                }}
              >
                {t.features.map((feat) => (
                  <li
                    key={feat}
                    style={{
                      fontSize: 14,
                      color: C.text,
                      padding: "6px 0",
                      borderBottom: `1px solid ${C.border}`,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: C.neonCyan, fontSize: 12 }}>▸</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                style={{
                  width: "100%",
                  padding: "12px 0",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  cursor: "pointer",
                  border: isHl ? "none" : `1px solid ${C.neonCyan}`,
                  color: isHl ? C.bg : C.neonCyan,
                  background: isHl ? C.neonCyan : "transparent",
                  clipPath:
                    "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
                  ...(isHl ? glowBox(C.neonCyan) : {}),
                }}
              >
                {t.cta}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );

  /* ─── 7  CTA ─── */
  const cta = (
    <section
      style={{
        position: "relative",
        padding: "96px 24px",
        textAlign: "center",
        background: `linear-gradient(180deg, ${C.bgCard} 0%, ${C.bg} 100%)`,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        overflow: "hidden",
      }}
    >
      {/* horizontal scanline accent */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${C.neonCyan}, transparent)`,
        }}
      />
      <h2
        style={{
          fontSize: "clamp(28px, 5vw, 48px)",
          fontWeight: 900,
          color: C.white,
          marginBottom: 16,
        }}
      >
        Ready to jack in?
      </h2>
      <p
        style={{
          fontSize: 16,
          color: C.textMuted,
          maxWidth: 480,
          margin: "0 auto 40px",
          lineHeight: 1.6,
        }}
      >
        Join thousands of developers already building on Stackpulse. Free
        forever on the Starter plan.
      </p>
      <button
        style={{
          padding: "16px 40px",
          fontSize: 16,
          fontWeight: 700,
          color: C.bg,
          background: C.neonCyan,
          border: "none",
          cursor: "pointer",
          letterSpacing: 1,
          textTransform: "uppercase",
          clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
          ...glowBox(C.neonCyan),
        }}
      >
        Get Started Free
      </button>
    </section>
  );

  /* ─── 8  FOOTER ─── */
  const footerCols: { heading: string; links: string[] }[] = [
    { heading: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { heading: "Legal", links: ["Privacy", "Terms", "Security"] },
  ];

  const footer = (
    <footer
      style={{
        padding: "64px 24px 32px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 48,
          marginBottom: 48,
        }}
      >
        <div style={{ maxWidth: 260 }}>
          <div
            style={{
              fontWeight: 800,
              fontSize: 18,
              color: C.neonCyan,
              marginBottom: 12,
              letterSpacing: 1,
              ...glowText(C.neonCyan),
            }}
          >
            ▲ Stackpulse
          </div>
          <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.6 }}>
            The hyper-accelerated dev platform for builders who refuse to sleep.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 56 }}>
          {footerCols.map((col) => (
            <div key={col.heading}>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: C.white,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 16,
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
                        color: C.textMuted,
                        textDecoration: "none",
                        fontSize: 14,
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
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          paddingTop: 24,
          textAlign: "center",
          fontSize: 13,
          color: C.textMuted,
        }}
      >
        &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
      </div>
    </footer>
  );

  /* ─── RENDER ─── */
  return (
    <div
      style={{
        background: C.bg,
        color: C.text,
        fontFamily:
          "'Inter', 'SF Mono', 'Fira Code', -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{scanlineCSS}</style>
      {header}
      {hero}
      {logos}
      {featuresSection}
      {testimonialsSection}
      {pricingSection}
      {cta}
      {footer}
    </div>
  );
}

export default CyberpunkLanding;
