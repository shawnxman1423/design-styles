"use client";

import React, { useState, type CSSProperties } from "react";

/* ------------------------------------------------------------------ */
/*  Windows 95 Classic Landing Page                                    */
/* ------------------------------------------------------------------ */

const COLORS = {
  bg: "#c0c0c0",
  darkBorder: "#808080",
  darkerBorder: "#404040",
  lightBorder: "#dfdfdf",
  whiteBorder: "#ffffff",
  activeTitle: "#000080",
  activeTitleText: "#ffffff",
  buttonFace: "#c0c0c0",
  windowBg: "#ffffff",
  text: "#000000",
  link: "#0000ff",
  highlight: "#000080",
  highlightText: "#ffffff",
};

/* ---- helpers ---------------------------------------------------- */

function raised(extra: CSSProperties = {}): CSSProperties {
  return {
    borderTop: `2px solid ${COLORS.whiteBorder}`,
    borderLeft: `2px solid ${COLORS.whiteBorder}`,
    borderBottom: `2px solid ${COLORS.darkerBorder}`,
    borderRight: `2px solid ${COLORS.darkerBorder}`,
    ...extra,
  };
}

function sunken(extra: CSSProperties = {}): CSSProperties {
  return {
    borderTop: `2px solid ${COLORS.darkerBorder}`,
    borderLeft: `2px solid ${COLORS.darkerBorder}`,
    borderBottom: `2px solid ${COLORS.whiteBorder}`,
    borderRight: `2px solid ${COLORS.whiteBorder}`,
    ...extra,
  };
}

function Win95Button({
  children,
  primary = false,
  style = {},
  onClick,
}: {
  children: React.ReactNode;
  primary?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
}) {
  const [pressed, setPressed] = useState(false);

  const base: CSSProperties = {
    fontFamily: '"MS Sans Serif", "Microsoft Sans Serif", Tahoma, Geneva, sans-serif',
    fontSize: 14,
    padding: "6px 20px",
    background: primary ? COLORS.buttonFace : COLORS.buttonFace,
    color: COLORS.text,
    cursor: "pointer",
    outline: primary ? `2px dotted ${COLORS.text}` : "none",
    outlineOffset: primary ? -5 : 0,
    minWidth: 90,
    textAlign: "center" as const,
    ...(pressed ? sunken() : raised()),
    ...style,
  };

  return (
    <button
      style={base}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function WindowPanel({
  title,
  children,
  style = {},
}: {
  title?: string;
  children: React.ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div style={{ ...raised({ background: COLORS.bg, padding: 3 }), ...style }}>
      {title && (
        <div
          style={{
            background: `linear-gradient(90deg, ${COLORS.activeTitle}, #1084d0)`,
            color: COLORS.activeTitleText,
            fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
            fontWeight: "bold",
            fontSize: 13,
            padding: "3px 6px",
            marginBottom: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>{title}</span>
          <span style={{ display: "flex", gap: 2 }}>
            {["_", "[]", "x"].map((btn) => (
              <span
                key={btn}
                style={{
                  ...raised({
                    width: 18,
                    height: 18,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    background: COLORS.buttonFace,
                    color: COLORS.text,
                    cursor: "default",
                  }),
                }}
              >
                {btn === "[]" ? "\u25a1" : btn === "x" ? "\u2715" : btn}
              </span>
            ))}
          </span>
        </div>
      )}
      <div style={{ padding: title ? 8 : 0 }}>{children}</div>
    </div>
  );
}

function Divider() {
  return (
    <div style={{ margin: "0 0", height: 4 }}>
      <div style={{ borderTop: `1px solid ${COLORS.darkBorder}`, borderBottom: `1px solid ${COLORS.whiteBorder}`, height: 0 }} />
    </div>
  );
}

/* ---- sections --------------------------------------------------- */

function Header() {
  const links = ["Features", "Pricing", "Testimonials", "Docs"];
  return (
    <div
      style={{
        ...raised({
          background: COLORS.bg,
          padding: "8px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }),
      }}
    >
      <div
        style={{
          fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
          fontWeight: "bold",
          fontSize: 16,
          color: COLORS.text,
          whiteSpace: "nowrap",
        }}
      >
        &#9650; Stackpulse
      </div>
      <nav style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {links.map((l) => (
          <Win95Button key={l} style={{ fontSize: 12, padding: "4px 14px", minWidth: 0 }}>
            {l}
          </Win95Button>
        ))}
      </nav>
      <Win95Button primary style={{ fontSize: 13 }}>
        Sign Up
      </Win95Button>
    </div>
  );
}

function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "48px 24px",
        background: COLORS.bg,
      }}
    >
      <WindowPanel title="Welcome to Stackpulse" style={{ maxWidth: 680, margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
            fontSize: 32,
            fontWeight: "bold",
            margin: "16px 0 8px",
            color: COLORS.text,
          }}
        >
          Ship faster. Break nothing.
        </h1>
        <p
          style={{
            fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
            fontSize: 14,
            color: COLORS.darkBorder,
            maxWidth: 460,
            margin: "0 auto 24px",
            lineHeight: 1.6,
          }}
        >
          The developer platform that brings observability, deployment, and
          incident management into one classic interface.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Win95Button primary style={{ fontSize: 15, padding: "8px 28px" }}>
            Get Started Free
          </Win95Button>
          <Win95Button style={{ fontSize: 15, padding: "8px 28px" }}>
            Live Demo
          </Win95Button>
        </div>
      </WindowPanel>
    </section>
  );
}

function LogosBar() {
  const brands = ["Initech", "Globex", "Umbrella Corp", "Cyberdyne", "Soylent"];
  return (
    <section
      style={{
        ...sunken({
          background: COLORS.windowBg,
          padding: "20px 24px",
          textAlign: "center",
          margin: "0 3px",
        }),
      }}
    >
      <p
        style={{
          fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
          fontSize: 12,
          color: COLORS.darkBorder,
          marginBottom: 12,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        Trusted by 2,000+ makers at
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 32,
        }}
      >
        {brands.map((b) => (
          <span
            key={b}
            style={{
              fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
              fontSize: 15,
              fontWeight: "bold",
              color: COLORS.darkBorder,
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const cards = [
    {
      icon: "\ud83d\udcca",
      title: "Real-time Monitoring",
      desc: "Track every deploy, error rate, and latency metric from a single dashboard. No alt-tab required.",
    },
    {
      icon: "\ud83d\udd14",
      title: "Smart Alerts",
      desc: "Get notified before your users do. ML-driven anomaly detection routes alerts to the right on-call engineer.",
    },
    {
      icon: "\ud83d\udee1\ufe0f",
      title: "Instant Rollback",
      desc: "One-click rollback to any previous deploy. Restore service in seconds, not minutes.",
    },
  ];

  return (
    <section style={{ padding: "40px 24px", background: COLORS.bg }}>
      <h2
        style={{
          fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
          fontSize: 22,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 24,
          color: COLORS.text,
        }}
      >
        Features
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        {cards.map((c) => (
          <WindowPanel key={c.title} title={c.title}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
            <p
              style={{
                fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
                fontSize: 13,
                lineHeight: 1.6,
                color: COLORS.text,
              }}
            >
              {c.desc}
            </p>
          </WindowPanel>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      text: "Stackpulse cut our incident response time by 70%. It feels like going from dial-up to broadband.",
      name: "Dana Scully",
      role: "SRE Lead, Globex",
    },
    {
      text: "Finally, observability that doesn't require a PhD to set up. Our whole team was onboarded in a day.",
      name: "Peter Gibbons",
      role: "Staff Engineer, Initech",
    },
    {
      text: "The rollback feature alone has saved us countless weekend pages. Worth every penny.",
      name: "Sarah Connor",
      role: "VP Engineering, Cyberdyne",
    },
  ];

  return (
    <section style={{ padding: "40px 24px", background: COLORS.bg }}>
      <h2
        style={{
          fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
          fontSize: 22,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 24,
          color: COLORS.text,
        }}
      >
        What people are saying
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        {quotes.map((q) => (
          <div
            key={q.name}
            style={{
              ...raised({
                background: COLORS.bg,
                padding: 3,
              }),
            }}
          >
            <div
              style={{
                ...sunken({
                  background: COLORS.windowBg,
                  padding: 16,
                }),
              }}
            >
              <p
                style={{
                  fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: COLORS.text,
                  marginBottom: 12,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{q.text}&rdquo;
              </p>
              <Divider />
              <p
                style={{
                  fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
                  fontSize: 13,
                  fontWeight: "bold",
                  marginTop: 8,
                  color: COLORS.text,
                }}
              >
                {q.name}
              </p>
              <p
                style={{
                  fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
                  fontSize: 12,
                  color: COLORS.darkBorder,
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

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      sub: "forever",
      features: ["Up to 3 services", "Community support", "7-day data retention", "Basic dashboards"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "/month",
      features: ["Unlimited services", "Priority support", "90-day data retention", "Advanced alerting", "Custom dashboards"],
      cta: "Upgrade to Pro",
      highlighted: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "/month",
      features: ["Everything in Pro", "Team management", "SSO / SAML", "365-day retention", "Dedicated CSM", "SLA guarantee"],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section style={{ padding: "40px 24px", background: COLORS.bg }}>
      <h2
        style={{
          fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
          fontSize: 22,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 24,
          color: COLORS.text,
        }}
      >
        Pricing
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        {tiers.map((t) => (
          <WindowPanel
            key={t.name}
            title={t.highlighted ? `\u2605 ${t.name} \u2014 Most Popular` : t.name}
            style={
              t.highlighted
                ? { boxShadow: `0 0 0 3px ${COLORS.activeTitle}` }
                : {}
            }
          >
            <div style={{ textAlign: "center", marginBottom: 12 }}>
              <span
                style={{
                  fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
                  fontSize: 32,
                  fontWeight: "bold",
                  color: COLORS.text,
                }}
              >
                {t.price}
              </span>
              <span
                style={{
                  fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
                  fontSize: 13,
                  color: COLORS.darkBorder,
                }}
              >
                {" "}
                {t.sub}
              </span>
            </div>
            <Divider />
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "12px 0",
                fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
                fontSize: 13,
                lineHeight: 2,
                color: COLORS.text,
              }}
            >
              {t.features.map((f) => (
                <li key={f}>&#9745; {f}</li>
              ))}
            </ul>
            <div style={{ textAlign: "center" }}>
              <Win95Button
                primary={t.highlighted}
                style={{
                  width: "100%",
                  fontSize: 14,
                  padding: "8px 0",
                  ...(t.highlighted
                    ? {
                        background: COLORS.activeTitle,
                        color: COLORS.highlightText,
                      }
                    : {}),
                }}
              >
                {t.cta}
              </Win95Button>
            </div>
          </WindowPanel>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ padding: "48px 24px", background: COLORS.bg, textAlign: "center" }}>
      <WindowPanel
        title="Ready to get started?"
        style={{ maxWidth: 600, margin: "0 auto" }}
      >
        <h2
          style={{
            fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
            fontSize: 24,
            fontWeight: "bold",
            margin: "16px 0 8px",
            color: COLORS.text,
          }}
        >
          Start monitoring in 5 minutes
        </h2>
        <p
          style={{
            fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
            fontSize: 14,
            color: COLORS.darkBorder,
            marginBottom: 20,
            lineHeight: 1.6,
          }}
        >
          No credit card required. Free forever on the Starter plan.
        </p>
        <Win95Button primary style={{ fontSize: 16, padding: "10px 36px" }}>
          Create Free Account
        </Win95Button>
      </WindowPanel>
    </section>
  );
}

function Footer() {
  const columns: { heading: string; links: string[] }[] = [
    { heading: "Product", links: ["Features", "Pricing", "Changelog", "Docs", "Status"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Press"] },
    { heading: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
  ];

  return (
    <footer
      style={{
        ...raised({
          background: COLORS.bg,
          padding: "24px 24px 16px",
        }),
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 32,
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        <div style={{ minWidth: 180 }}>
          <div
            style={{
              fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
              fontWeight: "bold",
              fontSize: 16,
              color: COLORS.text,
              marginBottom: 6,
            }}
          >
            &#9650; Stackpulse
          </div>
          <p
            style={{
              fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
              fontSize: 12,
              color: COLORS.darkBorder,
              lineHeight: 1.5,
              maxWidth: 200,
            }}
          >
            Ship faster. Break nothing. The classic way to run modern
            infrastructure.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.heading}>
            <p
              style={{
                fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
                fontSize: 13,
                fontWeight: "bold",
                marginBottom: 8,
                color: COLORS.text,
              }}
            >
              {col.heading}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {col.links.map((l) => (
                <li key={l} style={{ marginBottom: 4 }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
                      fontSize: 12,
                      color: COLORS.link,
                      textDecoration: "underline",
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
      <Divider />
      <p
        style={{
          fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
          fontSize: 11,
          color: COLORS.darkBorder,
          textAlign: "center",
          marginTop: 12,
        }}
      >
        &copy; {new Date().getFullYear()} Stackpulse, Inc. All rights reserved.
      </p>
    </footer>
  );
}

/* ---- main export ------------------------------------------------ */

export function Windows95ClassicLanding() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#008080",
        fontFamily: '"MS Sans Serif", "Microsoft Sans Serif", Tahoma, Geneva, sans-serif',
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "16px 8px" }}>
        <div style={{ ...raised({ background: COLORS.bg, overflow: "hidden" }) }}>
          <Header />
          <Hero />
          <LogosBar />
          <Features />
          <Testimonials />
          <Pricing />
          <CTASection />
          <Footer />
        </div>
      </div>
      {/* Taskbar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 32,
          ...raised({
            background: COLORS.bg,
            display: "flex",
            alignItems: "center",
            padding: "0 4px",
            gap: 4,
          }),
        }}
      >
        <Win95Button style={{ fontSize: 12, padding: "2px 10px", fontWeight: "bold", minWidth: 0 }}>
          Start
        </Win95Button>
        <div style={{ flex: 1 }} />
        <div
          style={{
            ...sunken({
              padding: "2px 12px",
              fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
              fontSize: 12,
              color: COLORS.text,
            }),
          }}
        >
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </div>
  );
}

export default Windows95ClassicLanding;
