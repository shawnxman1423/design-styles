"use client";

import React, { useState, CSSProperties } from "react";

const bg = "#e0e5ec";
const textPrimary = "#2d3436";
const textSecondary = "#636e72";
const accent = "#6c5ce7";
const accentLight = "#a29bfe";
const white = "#ffffff";

const shadow = "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff";
const shadowInset = "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff";
const shadowSmall = "4px 4px 8px #b8bec7, -4px -4px 8px #ffffff";
const shadowPressed = "inset 2px 2px 5px #b8bec7, inset -2px -2px 5px #ffffff";

const baseButton = (highlighted = false): CSSProperties => ({
  padding: "14px 32px",
  borderRadius: 12,
  border: "none",
  fontSize: 16,
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s ease",
  background: highlighted ? accent : bg,
  color: highlighted ? white : textPrimary,
  boxShadow: highlighted
    ? `4px 4px 10px #b8bec7, -4px -4px 10px #ffffff, inset 0 0 0 transparent`
    : shadowSmall,
});

const card: CSSProperties = {
  background: bg,
  borderRadius: 20,
  padding: 32,
  boxShadow: shadow,
  transition: "all 0.3s ease",
};

const sectionStyle: CSSProperties = {
  padding: "80px 24px",
  maxWidth: 1200,
  margin: "0 auto",
};

const sectionHeading: CSSProperties = {
  fontSize: 36,
  fontWeight: 700,
  color: textPrimary,
  textAlign: "center",
  marginBottom: 12,
};

const sectionSub: CSSProperties = {
  fontSize: 18,
  color: textSecondary,
  textAlign: "center",
  marginBottom: 48,
  maxWidth: 560,
  marginLeft: "auto",
  marginRight: "auto",
};

export function NeumorphismLanding() {
  return (
    <div style={{ background: bg, minHeight: "100vh", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: textPrimary }}>
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

/* ─── Header ─── */
function Header() {
  const [hovered, setHovered] = useState<number | null>(null);

  const links = ["Features", "Pricing", "Testimonials", "Docs"];

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div style={{ fontSize: 20, fontWeight: 700, color: textPrimary, letterSpacing: -0.5 }}>
        ▲ Stackpulse
      </div>

      <nav style={{ display: "flex", gap: 32 }}>
        {links.map((link, i) => (
          <a
            key={link}
            href="#"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              textDecoration: "none",
              color: hovered === i ? accent : textSecondary,
              fontSize: 15,
              fontWeight: 500,
              transition: "color 0.2s",
            }}
          >
            {link}
          </a>
        ))}
      </nav>

      <NeuButton highlighted>Sign Up</NeuButton>
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section style={{ ...sectionStyle, textAlign: "center", paddingTop: 100, paddingBottom: 100 }}>
      <h1
        style={{
          fontSize: 56,
          fontWeight: 800,
          lineHeight: 1.15,
          color: textPrimary,
          marginBottom: 20,
          maxWidth: 720,
          marginLeft: "auto",
          marginRight: "auto",
          letterSpacing: -1.5,
        }}
      >
        Ship faster with
        <br />
        <span style={{ color: accent }}>soft precision</span>
      </h1>
      <p
        style={{
          fontSize: 20,
          color: textSecondary,
          maxWidth: 540,
          margin: "0 auto 40px",
          lineHeight: 1.6,
        }}
      >
        Stackpulse gives your team the tools to build, deploy, and iterate — all wrapped in an
        interface that feels as smooth as it looks.
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <NeuButton highlighted>Get Started Free</NeuButton>
        <NeuButton>Watch Demo</NeuButton>
      </div>
    </section>
  );
}

/* ─── Logos Bar ─── */
function LogosBar() {
  const brands = ["Vercel", "Linear", "Notion", "Raycast", "Supabase"];

  return (
    <section style={{ padding: "40px 24px 60px", textAlign: "center" }}>
      <p style={{ fontSize: 14, color: textSecondary, marginBottom: 28, fontWeight: 500, textTransform: "uppercase", letterSpacing: 2 }}>
        Trusted by 2,000+ makers at
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 48,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {brands.map((b) => (
          <div
            key={b}
            style={{
              background: bg,
              borderRadius: 12,
              padding: "12px 28px",
              boxShadow: shadowSmall,
              fontSize: 16,
              fontWeight: 600,
              color: textSecondary,
              letterSpacing: 0.5,
            }}
          >
            {b}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Features ─── */
function Features() {
  const items = [
    {
      icon: "⚡",
      title: "Instant Deploys",
      desc: "Push to main and watch your changes go live in seconds — zero-config CI/CD included.",
    },
    {
      icon: "🔒",
      title: "Built-in Security",
      desc: "SOC 2 compliant by default with encrypted secrets, audit logs, and role-based access.",
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      desc: "Monitor performance, track errors, and gain deep insights — all from one dashboard.",
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={sectionHeading}>Everything you need</h2>
      <p style={sectionSub}>
        A complete platform so your team can focus on building, not configuring.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 32,
        }}
      >
        {items.map((f) => (
          <div key={f.title} style={card}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: bg,
                boxShadow: shadowSmall,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                marginBottom: 20,
              }}
            >
              {f.icon}
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, color: textPrimary }}>
              {f.title}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: textSecondary, margin: 0 }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  const quotes = [
    {
      text: "Stackpulse cut our deploy time by 80%. The interface is a joy to use every day.",
      name: "Elena Moss",
      role: "CTO at Folio",
    },
    {
      text: "We migrated in a weekend. The DX is unmatched — everything just works out of the box.",
      name: "James Park",
      role: "Lead Engineer at Kova",
    },
    {
      text: "Our team shipped more in the first month on Stackpulse than the previous quarter.",
      name: "Sara Chen",
      role: "VP Product at Lumina",
    },
  ];

  return (
    <section style={{ ...sectionStyle, paddingTop: 60 }}>
      <h2 style={sectionHeading}>Loved by builders</h2>
      <p style={sectionSub}>Real feedback from teams who made the switch.</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 32,
        }}
      >
        {quotes.map((q) => (
          <div key={q.name} style={{ ...card, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: textPrimary,
                fontStyle: "italic",
                marginBottom: 24,
                marginTop: 0,
              }}
            >
              &ldquo;{q.text}&rdquo;
            </p>
            <div>
              <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 2, color: textPrimary, margin: 0 }}>
                {q.name}
              </p>
              <p style={{ fontSize: 13, color: textSecondary, margin: 0, marginTop: 4 }}>
                {q.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      sub: "For personal projects",
      features: ["1 project", "Basic analytics", "Community support", "500 MB storage"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "Per month, billed monthly",
      features: ["Unlimited projects", "Advanced analytics", "Priority support", "10 GB storage", "Custom domains"],
      cta: "Upgrade to Pro",
      highlighted: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "Per month, billed monthly",
      features: ["Everything in Pro", "Team management", "SSO & SAML", "50 GB storage", "Dedicated account manager"],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={sectionHeading}>Simple, transparent pricing</h2>
      <p style={sectionSub}>No hidden fees. Upgrade or downgrade at any time.</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 32,
          alignItems: "stretch",
        }}
      >
        {tiers.map((t) => (
          <div
            key={t.name}
            style={{
              ...card,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              border: t.highlighted ? `2px solid ${accent}` : "2px solid transparent",
              transform: t.highlighted ? "scale(1.03)" : "none",
            }}
          >
            {t.highlighted && (
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: accent,
                  color: white,
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "4px 16px",
                  borderRadius: 20,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Most Popular
              </div>
            )}
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4, color: textPrimary, marginTop: 0 }}>
              {t.name}
            </h3>
            <div style={{ fontSize: 40, fontWeight: 800, color: textPrimary, marginBottom: 4 }}>
              {t.price}
              {t.price !== "Free" && (
                <span style={{ fontSize: 16, fontWeight: 400, color: textSecondary }}>/mo</span>
              )}
            </div>
            <p style={{ fontSize: 14, color: textSecondary, marginBottom: 28 }}>{t.sub}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: 32, flex: 1 }}>
              {t.features.map((f) => (
                <li
                  key={f}
                  style={{
                    fontSize: 15,
                    color: textSecondary,
                    padding: "8px 0",
                    borderBottom: `1px solid #d0d5dc`,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ color: accent, fontWeight: 700 }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <NeuButton highlighted={t.highlighted} fullWidth>
              {t.cta}
            </NeuButton>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CtaSection() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          background: bg,
          borderRadius: 28,
          boxShadow: shadow,
          padding: "64px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: 38,
            fontWeight: 800,
            color: textPrimary,
            marginBottom: 16,
            marginTop: 0,
            letterSpacing: -0.8,
          }}
        >
          Ready to build something great?
        </h2>
        <p
          style={{
            fontSize: 18,
            color: textSecondary,
            marginBottom: 36,
            maxWidth: 480,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          Join thousands of teams already shipping faster with Stackpulse.
        </p>
        <NeuButton highlighted>Start Free Today</NeuButton>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const columns: { title: string; links: string[] }[] = [
    { title: "Product", links: ["Features", "Pricing", "Changelog", "Integrations"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
  ];

  return (
    <footer style={{ padding: "60px 24px 32px", maxWidth: 1200, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 48,
          marginBottom: 48,
        }}
      >
        <div style={{ maxWidth: 260 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: textPrimary, marginBottom: 12 }}>
            ▲ Stackpulse
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: textSecondary, margin: 0 }}>
            The developer platform that feels as good as it performs. Build, ship, and scale with
            confidence.
          </p>
        </div>

        <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
          {columns.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  color: textPrimary,
                  marginBottom: 16,
                  marginTop: 0,
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: textSecondary,
                        fontSize: 14,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = accent)}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = textSecondary)}
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
          borderTop: "1px solid #ccd1d9",
          paddingTop: 24,
          textAlign: "center",
          fontSize: 13,
          color: textSecondary,
        }}
      >
        &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
      </div>
    </footer>
  );
}

/* ─── Shared Button Component ─── */
function NeuButton({
  children,
  highlighted = false,
  fullWidth = false,
}: {
  children: React.ReactNode;
  highlighted?: boolean;
  fullWidth?: boolean;
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        ...baseButton(highlighted),
        boxShadow: pressed
          ? highlighted
            ? `inset 3px 3px 6px #5a4cc4, inset -3px -3px 6px #7e6efa`
            : shadowPressed
          : highlighted
          ? `4px 4px 10px #b8bec7, -4px -4px 10px #ffffff`
          : shadowSmall,
        width: fullWidth ? "100%" : undefined,
      }}
    >
      {children}
    </button>
  );
}
