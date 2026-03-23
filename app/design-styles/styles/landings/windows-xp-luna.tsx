"use client";

import React, { useState, type CSSProperties } from "react";

/* ───────────────────────────── palette & helpers ───────────────────────────── */

const luna = {
  blueDark: "#003399",
  blue: "#0055E5",
  blueLight: "#3A7BFF",
  bluePale: "#B9D4FF",
  blueBar: "#0A246A",
  green: "#21A121",
  greenDark: "#1C8E1C",
  greenLight: "#6AD76A",
  silver: "#ECE9D8",
  silverDark: "#D6D2C2",
  silverBorder: "#ACA899",
  white: "#FFFFFF",
  black: "#000000",
  textDark: "#1A1A1A",
  textMid: "#444444",
  taskbar: "#235CD6",
  startGreen: "#3C9E3C",
  highlight: "#316AC5",
  windowBg: "#F1EFE2",
  titleBarStart: "#0058E6",
  titleBarEnd: "#3A8AFF",
  orange: "#FF8C00",
  red: "#CC0000",
};

const xpGradient = (from: string, to: string) =>
  `linear-gradient(180deg, ${to} 0%, ${from} 100%)`;

const xpHGradient = (from: string, to: string) =>
  `linear-gradient(90deg, ${from} 0%, ${to} 100%)`;

const bevel = (light: string, dark: string, width = 2) =>
  `inset ${width}px ${width}px 0 0 ${light}, inset -${width}px -${width}px 0 0 ${dark}`;

/* ─────────────────────────── reusable sub-components ──────────────────────── */

function XPButton({
  children,
  primary = false,
  green = false,
  style,
  onClick,
}: {
  children: React.ReactNode;
  primary?: boolean;
  green?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 22px",
    fontSize: 14,
    fontFamily: "Tahoma, Verdana, sans-serif",
    fontWeight: 700,
    border: `1px solid ${luna.blueDark}`,
    borderRadius: 4,
    cursor: "pointer",
    outline: hovered ? `2px solid ${luna.blueLight}` : "none",
    outlineOffset: 1,
    transition: "background 0.15s, box-shadow 0.15s",
    whiteSpace: "nowrap",
  };

  const variant: CSSProperties = green
    ? {
        background: hovered
          ? xpGradient(luna.greenDark, luna.greenLight)
          : xpGradient(luna.green, luna.greenLight),
        color: luna.white,
        boxShadow: bevel("rgba(255,255,255,0.45)", "rgba(0,0,0,0.25)"),
        borderColor: luna.greenDark,
        textShadow: "0 1px 1px rgba(0,0,0,0.35)",
      }
    : primary
      ? {
          background: hovered
            ? xpGradient(luna.blue, luna.blueLight)
            : xpGradient(luna.blueDark, luna.blueLight),
          color: luna.white,
          boxShadow: bevel("rgba(255,255,255,0.45)", "rgba(0,0,0,0.25)"),
          textShadow: "0 1px 1px rgba(0,0,0,0.35)",
        }
      : {
          background: hovered
            ? xpGradient("#F8F8F0", luna.white)
            : xpGradient(luna.silver, luna.white),
          color: luna.textDark,
          boxShadow: bevel("rgba(255,255,255,0.9)", "rgba(0,0,0,0.15)"),
          borderColor: luna.silverBorder,
        };

  return (
    <button
      style={{ ...base, ...variant, ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function WindowPanel({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        background: luna.white,
        border: `1px solid ${luna.silverBorder}`,
        borderRadius: 6,
        boxShadow: `${bevel("rgba(255,255,255,0.8)", "rgba(0,0,0,0.12)")}, 0 2px 8px rgba(0,0,0,0.10)`,
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function TitleBar({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: xpHGradient(luna.titleBarStart, luna.titleBarEnd),
        padding: "6px 12px",
        color: luna.white,
        fontFamily: "Trebuchet MS, Tahoma, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        borderRadius: "6px 6px 0 0",
        display: "flex",
        alignItems: "center",
        gap: 6,
        textShadow: "0 1px 2px rgba(0,0,0,0.4)",
      }}
    >
      {/* fake traffic-light buttons */}
      <span style={{ display: "inline-flex", gap: 3, marginRight: 4 }}>
        {["#FF6B6B", "#FFD93D", "#6BCB77"].map((c, i) => (
          <span
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: c,
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow: "inset 0 1px 2px rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </span>
      {children}
    </div>
  );
}

function SectionTitle({
  children,
  sub,
}: {
  children: React.ReactNode;
  sub?: string;
}) {
  return (
    <div style={{ textAlign: "center", marginBottom: 40 }}>
      <h2
        style={{
          fontFamily: "Trebuchet MS, Tahoma, sans-serif",
          fontSize: 32,
          fontWeight: 700,
          color: luna.blueDark,
          margin: 0,
          textShadow: "0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        {children}
      </h2>
      {sub && (
        <p
          style={{
            fontFamily: "Tahoma, Verdana, sans-serif",
            fontSize: 15,
            color: luna.textMid,
            marginTop: 8,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ───────────────────────────── main component ─────────────────────────────── */

export function WindowsXPLunaLanding() {
  const container: CSSProperties = {
    minHeight: "100vh",
    background: xpGradient(luna.bluePale, luna.white),
    fontFamily: "Tahoma, Verdana, sans-serif",
    color: luna.textDark,
    lineHeight: 1.5,
    overflowX: "hidden",
  };

  /* 1 ── Header ─────────────────────────────────────────────────────────── */
  const header = (
    <header
      style={{
        background: xpHGradient(luna.titleBarStart, luna.titleBarEnd),
        padding: "0 32px",
        height: 52,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
        position: "sticky" as const,
        top: 0,
        zIndex: 100,
      }}
    >
      <span
        style={{
          fontFamily: "Trebuchet MS, Tahoma, sans-serif",
          fontWeight: 700,
          fontSize: 18,
          color: luna.white,
          textShadow: "0 1px 2px rgba(0,0,0,0.4)",
          letterSpacing: -0.5,
        }}
      >
        ▲ Stackpulse
      </span>

      <nav style={{ display: "flex", gap: 28 }}>
        {["Features", "Pricing", "Docs", "Blog"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              color: luna.white,
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
              textShadow: "0 1px 1px rgba(0,0,0,0.3)",
              opacity: 0.92,
            }}
          >
            {l}
          </a>
        ))}
      </nav>

      <XPButton
        green
        style={{ padding: "5px 16px", fontSize: 12, borderRadius: 3 }}
      >
        Sign Up Free
      </XPButton>
    </header>
  );

  /* 2 ── Hero ────────────────────────────────────────────────────────────── */
  const hero = (
    <section
      style={{
        background: `linear-gradient(180deg, #D6EAFF 0%, ${luna.bluePale} 40%, ${luna.silver} 100%)`,
        textAlign: "center",
        padding: "80px 24px 64px",
        borderBottom: `3px solid ${luna.blue}`,
        position: "relative",
      }}
    >
      {/* faux rolling-hills silhouette nod */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          background:
            "radial-gradient(ellipse 120% 100% at 50% 100%, #7EC87E 0%, transparent 70%)",
          opacity: 0.25,
          pointerEvents: "none",
        }}
      />

      <h1
        style={{
          fontFamily: "Trebuchet MS, Tahoma, sans-serif",
          fontSize: 48,
          fontWeight: 700,
          color: luna.blueDark,
          margin: "0 0 12px",
          textShadow: "0 2px 0 rgba(255,255,255,0.7)",
          lineHeight: 1.15,
        }}
      >
        Ship faster with
        <br />
        <span style={{ color: luna.blue }}>Stackpulse</span>
      </h1>
      <p
        style={{
          fontSize: 17,
          color: luna.textMid,
          maxWidth: 540,
          margin: "0 auto 32px",
        }}
      >
        The all-in-one developer platform that turns complex workflows into
        one-click deploys. Built for speed, designed for humans.
      </p>

      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        <XPButton primary style={{ fontSize: 15, padding: "10px 28px" }}>
          Get Started Free
        </XPButton>
        <XPButton style={{ fontSize: 15, padding: "10px 28px" }}>
          View Demo
        </XPButton>
      </div>
    </section>
  );

  /* 3 ── Logos bar ───────────────────────────────────────────────────────── */
  const logosBar = (
    <section
      style={{
        background: luna.silver,
        borderBottom: `1px solid ${luna.silverBorder}`,
        padding: "28px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: 12,
          fontWeight: 700,
          textTransform: "uppercase" as const,
          letterSpacing: 1.5,
          color: luna.textMid,
          marginBottom: 16,
        }}
      >
        Trusted by 2,000+ makers at
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 36,
          alignItems: "center",
        }}
      >
        {["Vercel", "Stripe", "Linear", "Notion", "Figma"].map((b) => (
          <span
            key={b}
            style={{
              fontFamily: "Trebuchet MS, Tahoma, sans-serif",
              fontSize: 20,
              fontWeight: 700,
              color: luna.blueDark,
              opacity: 0.55,
              textShadow: "0 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );

  /* 4 ── Features ────────────────────────────────────────────────────────── */
  const features = [
    {
      icon: "🚀",
      title: "Instant Deploys",
      body: "Push code and see it live in seconds. Zero-downtime rollouts with automatic rollback on failure.",
    },
    {
      icon: "🔒",
      title: "Secure by Default",
      body: "End-to-end encryption, SOC 2 compliance, and granular role-based access controls out of the box.",
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      body: "Live dashboards, custom alerts, and deep tracing so you always know exactly what's happening.",
    },
  ];

  const featuresSection = (
    <section
      id="features"
      style={{
        background: luna.windowBg,
        padding: "64px 24px",
        borderBottom: `1px solid ${luna.silverBorder}`,
      }}
    >
      <SectionTitle sub="Everything you need, nothing you don't.">
        Features
      </SectionTitle>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        {features.map((f) => (
          <WindowPanel key={f.title} style={{ padding: 0 }}>
            <TitleBar>{f.title}</TitleBar>
            <div style={{ padding: "20px 18px" }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>{f.icon}</div>
              <p style={{ fontSize: 14, color: luna.textMid, margin: 0 }}>
                {f.body}
              </p>
            </div>
          </WindowPanel>
        ))}
      </div>
    </section>
  );

  /* 5 ── Testimonials ────────────────────────────────────────────────────── */
  const testimonials = [
    {
      quote:
        "Stackpulse cut our deploy time from 20 minutes to under 30 seconds. It feels like magic.",
      name: "Jamie Torres",
      role: "CTO, LaunchDay",
    },
    {
      quote:
        "Finally a platform that doesn't make me read 50 pages of docs before I can ship something.",
      name: "Priya Sharma",
      role: "Lead Engineer, Modestack",
    },
    {
      quote:
        "The analytics alone are worth the price. We caught a regression in minutes instead of days.",
      name: "Marcus Cole",
      role: "VP Engineering, Gridline",
    },
  ];

  const testimonialsSection = (
    <section
      style={{
        background: `linear-gradient(180deg, ${luna.silver} 0%, #DAE8FC 100%)`,
        padding: "64px 24px",
        borderBottom: `1px solid ${luna.silverBorder}`,
      }}
    >
      <SectionTitle sub="Don't just take our word for it.">
        What People Are Saying
      </SectionTitle>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        {testimonials.map((t) => (
          <WindowPanel key={t.name} style={{ padding: 0 }}>
            <TitleBar>{t.name}</TitleBar>
            <div style={{ padding: "20px 18px" }}>
              <p
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: luna.textMid,
                  margin: "0 0 14px",
                  lineHeight: 1.6,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: luna.blueDark,
                  margin: 0,
                }}
              >
                {t.name}{" "}
                <span style={{ fontWeight: 400, color: luna.textMid }}>
                  &mdash; {t.role}
                </span>
              </p>
            </div>
          </WindowPanel>
        ))}
      </div>
    </section>
  );

  /* 6 ── Pricing ─────────────────────────────────────────────────────────── */
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      sub: "forever",
      features: [
        "1 project",
        "500 builds / mo",
        "Community support",
        "Basic analytics",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "/ month",
      features: [
        "Unlimited projects",
        "10,000 builds / mo",
        "Priority support",
        "Advanced analytics",
        "Custom domains",
      ],
      highlight: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "/ month",
      features: [
        "Everything in Pro",
        "Unlimited builds",
        "SSO & SAML",
        "Audit logs",
        "Dedicated account manager",
      ],
      highlight: false,
    },
  ];

  const pricingSection = (
    <section
      id="pricing"
      style={{
        background: luna.windowBg,
        padding: "64px 24px",
        borderBottom: `1px solid ${luna.silverBorder}`,
      }}
    >
      <SectionTitle sub="Simple, transparent pricing for every team size.">
        Pricing
      </SectionTitle>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
          maxWidth: 900,
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {tiers.map((t) => (
          <WindowPanel
            key={t.name}
            style={{
              padding: 0,
              border: t.highlight
                ? `3px solid ${luna.blue}`
                : `1px solid ${luna.silverBorder}`,
              transform: t.highlight ? "scale(1.04)" : "none",
              boxShadow: t.highlight
                ? `0 4px 20px rgba(0,85,229,0.25), ${bevel("rgba(255,255,255,0.8)", "rgba(0,0,0,0.12)")}`
                : undefined,
              position: "relative" as const,
            }}
          >
            {t.highlight && (
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: luna.orange,
                  color: luna.white,
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "3px 14px",
                  borderRadius: 3,
                  textTransform: "uppercase" as const,
                  letterSpacing: 1,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                Most Popular
              </div>
            )}
            <TitleBar>{t.name}</TitleBar>
            <div
              style={{
                padding: "24px 20px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Trebuchet MS, Tahoma, sans-serif",
                  fontSize: 40,
                  fontWeight: 700,
                  color: luna.blueDark,
                  lineHeight: 1,
                }}
              >
                {t.price}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: luna.textMid,
                  marginBottom: 20,
                }}
              >
                {t.sub}
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 24px",
                  textAlign: "left",
                }}
              >
                {t.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: 13,
                      padding: "5px 0",
                      borderBottom: `1px solid ${luna.silverDark}`,
                      color: luna.textMid,
                    }}
                  >
                    <span style={{ color: luna.green, marginRight: 6 }}>
                      ✔
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <XPButton
                primary={t.highlight}
                green={!t.highlight}
                style={{ width: "100%" }}
              >
                {t.price === "Free" ? "Get Started" : "Subscribe"}
              </XPButton>
            </div>
          </WindowPanel>
        ))}
      </div>
    </section>
  );

  /* 7 ── CTA ─────────────────────────────────────────────────────────────── */
  const ctaSection = (
    <section
      style={{
        background: xpHGradient(luna.titleBarStart, luna.titleBarEnd),
        padding: "64px 24px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "Trebuchet MS, Tahoma, sans-serif",
          fontSize: 34,
          fontWeight: 700,
          color: luna.white,
          margin: "0 0 12px",
          textShadow: "0 2px 4px rgba(0,0,0,0.35)",
        }}
      >
        Ready to ship faster?
      </h2>
      <p
        style={{
          fontSize: 16,
          color: "rgba(255,255,255,0.85)",
          marginBottom: 28,
        }}
      >
        Join 2,000+ developers who already made the switch.
      </p>
      <XPButton
        green
        style={{ fontSize: 16, padding: "12px 36px" }}
      >
        Start Building for Free
      </XPButton>
    </section>
  );

  /* 8 ── Footer ──────────────────────────────────────────────────────────── */
  const footerCols: Record<string, string[]> = {
    Product: ["Features", "Pricing", "Changelog", "Docs"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "DPA"],
  };

  const footer = (
    <footer
      style={{
        background: luna.blueBar,
        color: "rgba(255,255,255,0.75)",
        padding: "48px 32px 24px",
        fontSize: 13,
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        {/* left */}
        <div style={{ minWidth: 180 }}>
          <div
            style={{
              fontFamily: "Trebuchet MS, Tahoma, sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: luna.white,
              marginBottom: 6,
            }}
          >
            ▲ Stackpulse
          </div>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, maxWidth: 220 }}>
            Ship faster. Break less. Sleep better.
          </p>
        </div>

        {/* columns */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
          {Object.entries(footerCols).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  margin: "0 0 10px",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: 1,
                  color: luna.white,
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map((l) => (
                  <li key={l} style={{ marginBottom: 6 }}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        fontSize: 13,
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

      {/* copyright */}
      <div
        style={{
          maxWidth: 960,
          margin: "32px auto 0",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          paddingTop: 16,
          textAlign: "center",
          fontSize: 12,
          color: "rgba(255,255,255,0.45)",
        }}
      >
        &copy; {new Date().getFullYear()} Stackpulse, Inc. All rights reserved.
      </div>
    </footer>
  );

  /* ─────────────────────────── render ─────────────────────────────────── */
  return (
    <div style={container}>
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
