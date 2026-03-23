"use client";

import React, { CSSProperties } from "react";

const colors = {
  bg: "#0f0c29",
  bgGradient: "linear-gradient(135deg, #0f0c29 0%, #1a1a4e 40%, #24243e 100%)",
  glass: "rgba(255, 255, 255, 0.06)",
  glassBorder: "rgba(255, 255, 255, 0.12)",
  glassHover: "rgba(255, 255, 255, 0.1)",
  text: "#ffffff",
  textMuted: "rgba(255, 255, 255, 0.6)",
  textSoft: "rgba(255, 255, 255, 0.8)",
  accent: "#7c5cfc",
  accentGlow: "rgba(124, 92, 252, 0.4)",
  accentLight: "#a78bfa",
  highlight: "rgba(124, 92, 252, 0.15)",
};

const blur = "blur(16px)";

const glassCard: CSSProperties = {
  background: colors.glass,
  backdropFilter: blur,
  WebkitBackdropFilter: blur,
  border: `1px solid ${colors.glassBorder}`,
  borderRadius: 16,
};

const container: CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 24px",
  width: "100%",
  boxSizing: "border-box" as const,
};

const sectionStyle: CSSProperties = {
  padding: "80px 0",
};

const sectionHeading: CSSProperties = {
  fontSize: 36,
  fontWeight: 700,
  color: colors.text,
  textAlign: "center" as const,
  marginBottom: 12,
};

const sectionSub: CSSProperties = {
  fontSize: 16,
  color: colors.textMuted,
  textAlign: "center" as const,
  marginBottom: 48,
  maxWidth: 560,
  margin: "0 auto 48px",
  lineHeight: 1.6,
};

const btnPrimary: CSSProperties = {
  background: colors.accent,
  color: "#fff",
  border: "none",
  borderRadius: 10,
  padding: "12px 28px",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  boxShadow: `0 0 24px ${colors.accentGlow}`,
  transition: "transform 0.2s, box-shadow 0.2s",
};

const btnSecondary: CSSProperties = {
  ...glassCard,
  color: "#fff",
  padding: "12px 28px",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  transition: "background 0.2s",
};

/* ─── Orb decorations ─── */
function Orb({ top, left, size, color }: { top: string; left: string; size: number; color: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        filter: "blur(100px)",
        opacity: 0.35,
        pointerEvents: "none",
      }}
    />
  );
}

/* ─── Header ─── */
function Header() {
  const links = ["Features", "Pricing", "Testimonials", "Docs"];
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(15, 12, 41, 0.7)",
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
        borderBottom: `1px solid ${colors.glassBorder}`,
      }}
    >
      <div
        style={{
          ...container,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 700, color: colors.text, letterSpacing: -0.5 }}>
          ▲ Stackpulse
        </div>
        <nav style={{ display: "flex", gap: 32 }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ color: colors.textMuted, textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}
            >
              {l}
            </a>
          ))}
        </nav>
        <button style={{ ...btnPrimary, padding: "8px 20px", fontSize: 14 }}>Sign Up</button>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section style={{ ...sectionStyle, padding: "120px 0 80px", textAlign: "center", position: "relative" }}>
      <Orb top="-100px" left="-10%" size={500} color="#7c5cfc" />
      <Orb top="0" left="60%" size={400} color="#38bdf8" />
      <div style={{ ...container, position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: colors.text,
            lineHeight: 1.1,
            letterSpacing: -2,
            marginBottom: 20,
          }}
        >
          Ship faster with
          <br />
          <span style={{ color: colors.accentLight }}>clarity and confidence</span>
        </h1>
        <p style={{ fontSize: 18, color: colors.textMuted, maxWidth: 540, margin: "0 auto 40px", lineHeight: 1.7 }}>
          Stackpulse gives your team real-time observability, intelligent alerts, and seamless workflows — all in one beautiful dashboard.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button style={btnPrimary}>Get Started Free</button>
          <button style={btnSecondary}>See a Demo</button>
        </div>
      </div>
    </section>
  );
}

/* ─── Logos ─── */
function LogosBar() {
  const brands = ["Vercel", "Linear", "Raycast", "Supabase", "Resend"];
  return (
    <section style={{ ...sectionStyle, padding: "40px 0 60px" }}>
      <div style={container}>
        <p style={{ textAlign: "center", color: colors.textMuted, fontSize: 13, textTransform: "uppercase", letterSpacing: 2, marginBottom: 28 }}>
          Trusted by 2,000+ makers at
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {brands.map((b) => (
            <span key={b} style={{ fontSize: 18, fontWeight: 600, color: "rgba(255,255,255,0.25)", letterSpacing: 1 }}>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Features ─── */
function Features() {
  const items = [
    { icon: "⚡", title: "Real-time Monitoring", desc: "Instant visibility into every service, endpoint, and deployment — no config required." },
    { icon: "🔔", title: "Smart Alerts", desc: "AI-powered anomaly detection delivers alerts that matter, cutting noise by 90%." },
    { icon: "🔗", title: "Seamless Integrations", desc: "Connect your stack in minutes with 50+ native integrations for CI/CD, cloud, and more." },
  ];
  return (
    <section id="features" style={{ ...sectionStyle, position: "relative" }}>
      <Orb top="50%" left="80%" size={350} color="#7c5cfc" />
      <div style={{ ...container, position: "relative", zIndex: 1 }}>
        <h2 style={sectionHeading}>Everything you need to observe</h2>
        <p style={sectionSub}>A powerful toolkit designed for modern engineering teams who value speed and reliability.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {items.map((f) => (
            <div key={f.title} style={{ ...glassCard, padding: 32 }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: colors.text, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 15, color: colors.textMuted, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  const quotes = [
    { text: "Stackpulse cut our incident response time in half. The dashboard is genuinely a joy to use.", name: "Mia Chen", role: "CTO at Luminary" },
    { text: "We replaced three monitoring tools with Stackpulse. It does more and costs less — a rare combo.", name: "James Okafor", role: "Lead SRE at Driftless" },
    { text: "The alerting is the best I've seen. No more false alarms at 3 AM. My team finally trusts our monitoring.", name: "Sara Lindqvist", role: "VP Eng at Tidepool" },
  ];
  return (
    <section id="testimonials" style={{ ...sectionStyle, position: "relative" }}>
      <Orb top="20%" left="-5%" size={300} color="#38bdf8" />
      <div style={{ ...container, position: "relative", zIndex: 1 }}>
        <h2 style={sectionHeading}>Loved by engineering teams</h2>
        <p style={sectionSub}>Don't take our word for it — hear from the teams shipping with Stackpulse every day.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {quotes.map((q) => (
            <div key={q.name} style={{ ...glassCard, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <p style={{ fontSize: 15, color: colors.textSoft, lineHeight: 1.7, margin: "0 0 24px", fontStyle: "italic" }}>
                "{q.text}"
              </p>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: colors.text }}>{q.name}</div>
                <div style={{ fontSize: 13, color: colors.textMuted, marginTop: 2 }}>{q.role}</div>
              </div>
            </div>
          ))}
        </div>
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
      features: ["Up to 3 services", "1,000 events/day", "Community support", "7-day retention"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "Per month, billed annually",
      features: ["Unlimited services", "100k events/day", "Priority support", "90-day retention", "Smart alerts", "Custom dashboards"],
      highlighted: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "Per month, billed annually",
      features: ["Everything in Pro", "Unlimited events", "SSO & RBAC", "365-day retention", "Dedicated CSM", "SLA guarantee"],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" style={{ ...sectionStyle, position: "relative" }}>
      <Orb top="30%" left="50%" size={450} color="#7c5cfc" />
      <div style={{ ...container, position: "relative", zIndex: 1 }}>
        <h2 style={sectionHeading}>Simple, transparent pricing</h2>
        <p style={sectionSub}>Start free and scale as you grow. No hidden fees, cancel anytime.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start" }}>
          {tiers.map((t) => (
            <div
              key={t.name}
              style={{
                ...glassCard,
                padding: 36,
                border: t.highlighted ? `1.5px solid ${colors.accent}` : `1px solid ${colors.glassBorder}`,
                boxShadow: t.highlighted ? `0 0 40px ${colors.accentGlow}` : "none",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {t.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    right: -30,
                    background: colors.accent,
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 36px",
                    transform: "rotate(45deg)",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Popular
                </div>
              )}
              <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.text, marginBottom: 4 }}>{t.name}</h3>
              <div style={{ fontSize: 40, fontWeight: 800, color: colors.text, marginBottom: 4, letterSpacing: -1 }}>
                {t.price}
                {t.price !== "Free" && <span style={{ fontSize: 16, fontWeight: 500, color: colors.textMuted }}>/mo</span>}
              </div>
              <p style={{ fontSize: 13, color: colors.textMuted, marginBottom: 28 }}>{t.sub}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                {t.features.map((f) => (
                  <li key={f} style={{ fontSize: 14, color: colors.textSoft, padding: "6px 0", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: colors.accentLight, fontSize: 14 }}>&#10003;</span> {f}
                  </li>
                ))}
              </ul>
              <button
                style={{
                  ...(t.highlighted ? btnPrimary : btnSecondary),
                  width: "100%",
                  textAlign: "center" as const,
                }}
              >
                {t.price === "Free" ? "Get Started" : "Start Free Trial"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─── */
function CtaBanner() {
  return (
    <section style={{ ...sectionStyle, position: "relative" }}>
      <div style={container}>
        <div
          style={{
            ...glassCard,
            padding: "64px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Orb top="-60px" left="10%" size={250} color="#7c5cfc" />
          <Orb top="-40px" left="70%" size={200} color="#38bdf8" />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: colors.text, marginBottom: 16, letterSpacing: -1 }}>
              Ready to ship with confidence?
            </h2>
            <p style={{ fontSize: 16, color: colors.textMuted, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>
              Join thousands of teams who trust Stackpulse to keep their systems healthy and their developers happy.
            </p>
            <button style={btnPrimary}>Get Started Free</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const columns: { heading: string; links: string[] }[] = [
    { heading: "Product", links: ["Features", "Pricing", "Integrations", "Changelog", "Docs"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Press"] },
    { heading: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
  ];

  return (
    <footer style={{ borderTop: `1px solid ${colors.glassBorder}`, padding: "60px 0 32px" }}>
      <div style={{ ...container, display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, color: colors.text, marginBottom: 12 }}>▲ Stackpulse</div>
          <p style={{ fontSize: 14, color: colors.textMuted, lineHeight: 1.7, maxWidth: 260, margin: 0 }}>
            Real-time observability for modern engineering teams. Ship faster, sleep better.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.heading}>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: colors.textSoft, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>
              {col.heading}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {col.links.map((l) => (
                <li key={l} style={{ marginBottom: 10 }}>
                  <a href="#" style={{ color: colors.textMuted, textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ ...container, borderTop: `1px solid ${colors.glassBorder}`, paddingTop: 24 }}>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", textAlign: "center", margin: 0 }}>
          &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─── Main Landing ─── */
export function GlassmorphismLanding() {
  return (
    <div
      style={{
        background: colors.bgGradient,
        color: colors.text,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        minHeight: "100vh",
        overflowX: "hidden",
        position: "relative",
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
