"use client";

import React, { useState, type CSSProperties } from "react";

/* ─── palette & tokens ─── */
const C = {
  sky: "#d4ecf7",
  skyDeep: "#a8d8ea",
  meadow: "#8fc08b",
  meadowDark: "#5a9a56",
  earth: "#c9a96e",
  earthDark: "#a07d3f",
  warmWhite: "#fdf8ef",
  cream: "#faf3e0",
  parchment: "#f5ead0",
  ink: "#3b322c",
  inkSoft: "#6b5e52",
  blush: "#e8a0a0",
  cloud: "#ffffff",
  accent: "#e07b5d",
  accentHover: "#c7623f",
  shadow: "rgba(59,50,44,0.12)",
  shadowDeep: "rgba(59,50,44,0.22)",
};

const font = {
  heading: "'Georgia', 'Times New Roman', serif",
  body: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
};

const radius = {
  soft: 18,
  card: 22,
  pill: 999,
};

/* ─── reusable small helpers ─── */
const sectionStyle = (extra: CSSProperties = {}): CSSProperties => ({
  padding: "80px 24px",
  maxWidth: 1120,
  margin: "0 auto",
  ...extra,
});

const headingStyle = (size = 38): CSSProperties => ({
  fontFamily: font.heading,
  fontSize: size,
  fontWeight: 700,
  color: C.ink,
  margin: 0,
  lineHeight: 1.25,
});

const subStyle: CSSProperties = {
  fontFamily: font.body,
  fontSize: 16,
  color: C.inkSoft,
  lineHeight: 1.6,
};

const btnBase: CSSProperties = {
  fontFamily: font.body,
  fontSize: 15,
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
  borderRadius: radius.pill,
  padding: "12px 28px",
  transition: "all .25s ease",
};

/* ─── tiny cloud SVG drawn inline ─── */
function Cloud({ top, left, size = 90, opacity = 0.45 }: { top: string; left: string; size?: number; opacity?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 90 45"
      style={{ position: "absolute", top, left, opacity, pointerEvents: "none" }}
      fill={C.cloud}
    >
      <ellipse cx="30" cy="30" rx="28" ry="14" />
      <ellipse cx="55" cy="25" rx="22" ry="16" />
      <ellipse cx="42" cy="20" rx="20" ry="18" />
    </svg>
  );
}

/* ─── grass / hill decoration ─── */
function HillDecoration({ color = C.meadow, flip = false }: { color?: string; flip?: boolean }) {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg viewBox="0 0 1440 80" style={{ width: "100%", height: 60, display: "block" }} preserveAspectRatio="none">
        <path
          d="M0,80 C240,10 480,50 720,25 C960,0 1200,40 1440,15 L1440,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════ */
export function GhibliStorybookLanding() {
  return (
    <div style={{ background: C.warmWhite, color: C.ink, fontFamily: font.body, overflowX: "hidden" as const }}>
      <Header />
      <Hero />
      <HillDecoration color={C.cream} />
      <LogosBar />
      <HillDecoration color={C.warmWhite} />
      <Features />
      <HillDecoration color={C.parchment} />
      <Testimonials />
      <HillDecoration color={C.warmWhite} />
      <Pricing />
      <HillDecoration color={C.meadow} />
      <CtaBanner />
      <Footer />
    </div>
  );
}

/* ─── 1. HEADER ─── */
function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const links = ["Features", "Pricing", "Docs", "Blog"];

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 32px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* logo */}
      <div style={{ fontFamily: font.heading, fontSize: 20, fontWeight: 700, color: C.ink, display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 22 }}>&#9650;</span> Stackpulse
      </div>

      {/* nav */}
      <nav style={{ display: "flex", gap: 28 }}>
        {links.map((l) => (
          <a
            key={l}
            href="#"
            onMouseEnter={() => setHovered(l)}
            onMouseLeave={() => setHovered(null)}
            style={{
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              color: hovered === l ? C.accent : C.inkSoft,
              transition: "color .2s",
            }}
          >
            {l}
          </a>
        ))}
      </nav>

      {/* sign-up */}
      <button
        style={{
          ...btnBase,
          background: C.accent,
          color: C.cloud,
          padding: "10px 22px",
          fontSize: 14,
        }}
      >
        Sign up
      </button>
    </header>
  );
}

/* ─── 2. HERO ─── */
function Hero() {
  const [hoveredBtn, setHoveredBtn] = useState<number | null>(null);

  return (
    <section
      style={{
        position: "relative",
        background: `linear-gradient(180deg, ${C.sky} 0%, ${C.skyDeep} 60%, ${C.meadow} 100%)`,
        textAlign: "center",
        padding: "100px 24px 120px",
        overflow: "hidden",
      }}
    >
      {/* decorative clouds */}
      <Cloud top="8%" left="5%" size={120} opacity={0.55} />
      <Cloud top="15%" left="75%" size={100} opacity={0.4} />
      <Cloud top="30%" left="60%" size={70} opacity={0.3} />
      <Cloud top="5%" left="40%" size={80} opacity={0.35} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
        <h1 style={{ ...headingStyle(52), marginBottom: 18, letterSpacing: -0.5 }}>
          Ship delightful products,<br />one story at a time
        </h1>
        <p style={{ ...subStyle, fontSize: 18, maxWidth: 520, margin: "0 auto 36px", color: C.inkSoft }}>
          Stackpulse gives your team the observability and workflow tools to build with confidence and creativity.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: "Get started free", primary: true },
            { label: "Watch demo", primary: false },
          ].map((b, i) => (
            <button
              key={i}
              onMouseEnter={() => setHoveredBtn(i)}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                ...btnBase,
                background: b.primary
                  ? hoveredBtn === i ? C.accentHover : C.accent
                  : hoveredBtn === i ? C.parchment : C.cloud,
                color: b.primary ? C.cloud : C.ink,
                boxShadow: `0 4px 14px ${C.shadow}`,
                padding: "14px 32px",
                fontSize: 16,
              }}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      {/* little ground hill at bottom */}
      <svg
        viewBox="0 0 1440 100"
        style={{ position: "absolute", bottom: -1, left: 0, width: "100%", height: 60 }}
        preserveAspectRatio="none"
      >
        <path d="M0,100 C360,40 720,80 1080,30 C1260,10 1380,50 1440,40 L1440,100 Z" fill={C.warmWhite} />
      </svg>
    </section>
  );
}

/* ─── 3. LOGOS BAR ─── */
function LogosBar() {
  const brands = ["Vercel", "Supabase", "Raycast", "Linear", "Resend"];

  return (
    <section style={{ ...sectionStyle({ padding: "48px 24px", textAlign: "center" as const }), background: C.cream }}>
      <p style={{ ...subStyle, fontSize: 13, textTransform: "uppercase" as const, letterSpacing: 1.5, marginBottom: 24 }}>
        Trusted by 2,000+ makers at
      </p>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 40, alignItems: "center" }}>
        {brands.map((b) => (
          <span
            key={b}
            style={{
              fontFamily: font.heading,
              fontSize: 18,
              fontWeight: 700,
              color: C.inkSoft,
              opacity: 0.55,
              letterSpacing: 0.5,
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─── 4. FEATURES ─── */
function Features() {
  const cards = [
    {
      icon: "\uD83C\uDF3F",
      title: "Living Dashboards",
      desc: "Real-time views that grow with your data\u2014beautifully animated and always up to date.",
    },
    {
      icon: "\uD83D\uDCDC",
      title: "Story-driven Alerts",
      desc: "Context-rich notifications that tell you what happened, why, and what to do next.",
    },
    {
      icon: "\uD83C\uDF0D",
      title: "World-wide Edge",
      desc: "Deploy monitors to 40+ regions so latency never hides from you again.",
    },
  ];

  return (
    <section style={sectionStyle({ textAlign: "center" as const })}>
      <h2 style={{ ...headingStyle(34), marginBottom: 12 }}>Craft with clarity</h2>
      <p style={{ ...subStyle, maxWidth: 480, margin: "0 auto 48px" }}>
        Every tool you need to observe, understand, and improve your stack.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 28,
        }}
      >
        {cards.map((c) => (
          <div
            key={c.title}
            style={{
              background: C.cloud,
              borderRadius: radius.card,
              padding: "36px 28px",
              boxShadow: `0 6px 24px ${C.shadow}`,
              textAlign: "left" as const,
              border: `1.5px solid ${C.parchment}`,
              transition: "transform .25s ease, box-shadow .25s ease",
            }}
          >
            <div style={{ fontSize: 34, marginBottom: 14 }}>{c.icon}</div>
            <h3 style={{ fontFamily: font.heading, fontSize: 20, fontWeight: 700, color: C.ink, margin: "0 0 8px" }}>
              {c.title}
            </h3>
            <p style={{ ...subStyle, margin: 0 }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── 5. TESTIMONIALS ─── */
function Testimonials() {
  const quotes = [
    {
      text: "Stackpulse feels like a warm breeze through our engineering org\u2014calm, clear, refreshing.",
      name: "Hana Mori",
      role: "CTO, Bloomcraft",
    },
    {
      text: "We cut our MTTR in half and actually enjoy our on-call rotations now. Seriously.",
      name: "Leo Nguyen",
      role: "SRE Lead, Mapleleaf",
    },
    {
      text: "The storybook-style dashboards make even non-technical stakeholders fall in love with our metrics.",
      name: "Sofia Keller",
      role: "VP Product, Terravault",
    },
  ];

  return (
    <section style={{ ...sectionStyle({ textAlign: "center" as const }), background: C.parchment }}>
      <h2 style={{ ...headingStyle(34), marginBottom: 12 }}>Loved by builders</h2>
      <p style={{ ...subStyle, maxWidth: 460, margin: "0 auto 48px" }}>
        Hear from the teams that ship with Stackpulse every day.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 28,
        }}
      >
        {quotes.map((q) => (
          <div
            key={q.name}
            style={{
              background: C.cloud,
              borderRadius: radius.card,
              padding: "32px 26px",
              boxShadow: `0 4px 16px ${C.shadow}`,
              textAlign: "left" as const,
              display: "flex",
              flexDirection: "column",
              gap: 18,
              border: `1.5px solid ${C.cream}`,
            }}
          >
            <p style={{ ...subStyle, fontStyle: "italic", flex: 1, margin: 0 }}>
              &ldquo;{q.text}&rdquo;
            </p>
            <div>
              <p style={{ fontWeight: 700, fontSize: 14, margin: "0 0 2px", color: C.ink }}>{q.name}</p>
              <p style={{ fontSize: 13, margin: 0, color: C.inkSoft }}>{q.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── 6. PRICING ─── */
function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      sub: "For solo makers",
      features: ["3 monitors", "1-day retention", "Email alerts", "Community support"],
      cta: "Start free",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "Per month, billed yearly",
      features: ["Unlimited monitors", "30-day retention", "Slack & webhook alerts", "Priority support", "Custom dashboards"],
      cta: "Go Pro",
      highlight: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "Per month, billed yearly",
      features: ["Everything in Pro", "90-day retention", "SSO & RBAC", "Dedicated CSM", "SLA guarantee"],
      cta: "Contact sales",
      highlight: false,
    },
  ];

  return (
    <section style={sectionStyle({ textAlign: "center" as const })}>
      <h2 style={{ ...headingStyle(34), marginBottom: 12 }}>Simple, honest pricing</h2>
      <p style={{ ...subStyle, maxWidth: 440, margin: "0 auto 48px" }}>
        No hidden fees. Upgrade or cancel whenever you like.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 28,
          alignItems: "start",
        }}
      >
        {tiers.map((t) => (
          <div
            key={t.name}
            style={{
              background: t.highlight ? C.ink : C.cloud,
              color: t.highlight ? C.cream : C.ink,
              borderRadius: radius.card,
              padding: "40px 28px 36px",
              boxShadow: t.highlight
                ? `0 10px 40px ${C.shadowDeep}`
                : `0 4px 16px ${C.shadow}`,
              textAlign: "left" as const,
              border: t.highlight ? "none" : `1.5px solid ${C.parchment}`,
              position: "relative" as const,
              transform: t.highlight ? "scale(1.04)" : undefined,
            }}
          >
            {t.highlight && (
              <span
                style={{
                  position: "absolute",
                  top: -12,
                  right: 20,
                  background: C.accent,
                  color: C.cloud,
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "4px 14px",
                  borderRadius: radius.pill,
                  textTransform: "uppercase" as const,
                  letterSpacing: 1,
                }}
              >
                Popular
              </span>
            )}
            <h3
              style={{
                fontFamily: font.heading,
                fontSize: 20,
                fontWeight: 700,
                margin: "0 0 6px",
              }}
            >
              {t.name}
            </h3>
            <div style={{ fontSize: 36, fontWeight: 800, fontFamily: font.heading, margin: "0 0 4px" }}>
              {t.price}
              {t.price !== "Free" && <span style={{ fontSize: 15, fontWeight: 400 }}>/mo</span>}
            </div>
            <p style={{ fontSize: 13, opacity: 0.7, margin: "0 0 24px" }}>{t.sub}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
              {t.features.map((f) => (
                <li key={f} style={{ fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: t.highlight ? C.meadow : C.meadowDark, fontWeight: 700 }}>&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              style={{
                ...btnBase,
                width: "100%",
                background: t.highlight ? C.accent : C.parchment,
                color: t.highlight ? C.cloud : C.ink,
                padding: "13px 0",
              }}
            >
              {t.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── 7. CTA BANNER ─── */
function CtaBanner() {
  return (
    <section
      style={{
        background: C.meadow,
        padding: "72px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2 style={{ ...headingStyle(34), color: C.cloud, marginBottom: 14 }}>
          Begin your story today
        </h2>
        <p style={{ ...subStyle, color: "rgba(255,255,255,0.85)", fontSize: 17, marginBottom: 32 }}>
          Join thousands of teams shipping calmer, more creative software with Stackpulse.
        </p>
        <button
          style={{
            ...btnBase,
            background: C.cloud,
            color: C.meadowDark,
            padding: "15px 36px",
            fontSize: 16,
            boxShadow: `0 4px 18px rgba(0,0,0,0.12)`,
          }}
        >
          Get started free
        </button>
      </div>
    </section>
  );
}

/* ─── 8. FOOTER ─── */
function Footer() {
  const columns: { title: string; links: string[] }[] = [
    { title: "Product", links: ["Features", "Pricing", "Changelog", "Integrations"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security"] },
  ];

  return (
    <footer
      style={{
        background: C.ink,
        color: C.cream,
        padding: "56px 32px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 48,
          justifyContent: "space-between",
        }}
      >
        {/* left: logo + tagline */}
        <div style={{ minWidth: 200 }}>
          <div style={{ fontFamily: font.heading, fontSize: 18, fontWeight: 700, marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
            <span>&#9650;</span> Stackpulse
          </div>
          <p style={{ fontSize: 13, opacity: 0.6, margin: 0, maxWidth: 220, lineHeight: 1.55 }}>
            Observability that feels like magic, built for teams that care about craft.
          </p>
        </div>

        {/* right: link columns */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 56 }}>
          {columns.map((col) => (
            <div key={col.title}>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: 1.2, marginBottom: 14, opacity: 0.5 }}>
                {col.title}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" style={{ textDecoration: "none", color: C.cream, fontSize: 14, opacity: 0.75 }}>
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
          maxWidth: 1120,
          margin: "40px auto 0",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: 20,
          fontSize: 12,
          opacity: 0.4,
          textAlign: "center",
        }}
      >
        &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
      </div>
    </footer>
  );
}
