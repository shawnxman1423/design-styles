"use client";

import React, { useState, CSSProperties } from "react";

/* ------------------------------------------------------------------ */
/*  Aurora / Gradient Mesh Landing                                     */
/* ------------------------------------------------------------------ */

const palette = {
  bg: "#0a0a12",
  surface: "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(255,255,255,0.07)",
  border: "rgba(255,255,255,0.08)",
  text: "#e2e2f0",
  textMuted: "#9090b0",
  heading: "#ffffff",
  accent: "#7b5cff",
  accentAlt: "#00e4c8",
  accentPink: "#ff5caa",
};

/* Shared gradient mesh background blobs */
const meshBlob = (
  top: string,
  left: string,
  color1: string,
  color2: string,
  size: string,
): CSSProperties => ({
  position: "absolute" as const,
  top,
  left,
  width: size,
  height: size,
  background: `radial-gradient(circle at center, ${color1} 0%, ${color2} 40%, transparent 70%)`,
  filter: "blur(100px)",
  opacity: 0.45,
  pointerEvents: "none",
  borderRadius: "50%",
});

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const s: Record<string, CSSProperties> = {
  page: {
    position: "relative",
    minHeight: "100vh",
    background: palette.bg,
    color: palette.text,
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    overflow: "hidden",
    lineHeight: 1.6,
  },
  meshContainer: {
    position: "fixed",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
    overflow: "hidden",
  },
  content: {
    position: "relative",
    zIndex: 1,
  },

  /* Header */
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "20px 24px",
  },
  logo: {
    fontSize: 18,
    fontWeight: 700,
    color: palette.heading,
    letterSpacing: "-0.02em",
  },
  nav: {
    display: "flex",
    gap: 32,
  },
  navLink: {
    color: palette.textMuted,
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    transition: "color 0.2s",
    background: "none",
    border: "none",
    padding: 0,
  },
  signUpBtn: {
    padding: "8px 20px",
    borderRadius: 8,
    border: "none",
    background: palette.accent,
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "opacity 0.2s",
  },

  /* Hero */
  hero: {
    textAlign: "center" as const,
    maxWidth: 800,
    margin: "0 auto",
    padding: "100px 24px 60px",
  },
  heroHeadline: {
    fontSize: "clamp(36px, 6vw, 72px)",
    fontWeight: 800,
    color: palette.heading,
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
    margin: 0,
    background: `linear-gradient(135deg, ${palette.heading} 0%, ${palette.accent} 50%, ${palette.accentAlt} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroSub: {
    fontSize: "clamp(16px, 2vw, 20px)",
    color: palette.textMuted,
    marginTop: 20,
    maxWidth: 560,
    marginLeft: "auto",
    marginRight: "auto",
  },
  heroCtas: {
    display: "flex",
    justifyContent: "center",
    gap: 16,
    marginTop: 40,
    flexWrap: "wrap" as const,
  },
  primaryBtn: {
    padding: "14px 32px",
    borderRadius: 10,
    border: "none",
    background: `linear-gradient(135deg, ${palette.accent}, ${palette.accentPink})`,
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: `0 0 30px ${palette.accent}44`,
  },
  secondaryBtn: {
    padding: "14px 32px",
    borderRadius: 10,
    border: `1px solid ${palette.border}`,
    background: palette.surface,
    color: palette.text,
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    backdropFilter: "blur(12px)",
    transition: "background 0.2s",
  },

  /* Logos */
  logosSection: {
    textAlign: "center" as const,
    padding: "60px 24px",
    maxWidth: 1000,
    margin: "0 auto",
  },
  logosLabel: {
    fontSize: 13,
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    color: palette.textMuted,
    marginBottom: 28,
  },
  logosRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 48,
    flexWrap: "wrap" as const,
    opacity: 0.5,
  },
  brandName: {
    fontSize: 18,
    fontWeight: 700,
    color: palette.textMuted,
    letterSpacing: "0.04em",
  },

  /* Section heading */
  sectionHeading: {
    textAlign: "center" as const,
    marginBottom: 48,
  },
  sectionTitle: {
    fontSize: "clamp(28px, 4vw, 42px)",
    fontWeight: 700,
    color: palette.heading,
    letterSpacing: "-0.02em",
    margin: 0,
  },
  sectionSub: {
    fontSize: 16,
    color: palette.textMuted,
    marginTop: 12,
  },

  /* Features */
  features: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "80px 24px",
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
  },
  card: {
    background: palette.surface,
    border: `1px solid ${palette.border}`,
    borderRadius: 16,
    padding: 32,
    backdropFilter: "blur(20px)",
    transition: "border-color 0.3s, background 0.3s",
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: palette.heading,
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 14,
    color: palette.textMuted,
    lineHeight: 1.7,
  },

  /* Testimonials */
  testimonials: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "80px 24px",
  },
  quoteCard: {
    background: palette.surface,
    border: `1px solid ${palette.border}`,
    borderRadius: 16,
    padding: 32,
    backdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "column" as const,
    gap: 20,
  },
  quoteText: {
    fontSize: 15,
    color: palette.text,
    lineHeight: 1.7,
    fontStyle: "italic" as const,
  },
  quoteAuthor: {
    fontSize: 14,
    fontWeight: 600,
    color: palette.heading,
  },
  quoteRole: {
    fontSize: 13,
    color: palette.textMuted,
  },

  /* Pricing */
  pricing: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "80px 24px",
  },
  pricingCard: {
    background: palette.surface,
    border: `1px solid ${palette.border}`,
    borderRadius: 20,
    padding: 36,
    backdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "column" as const,
    transition: "transform 0.3s, border-color 0.3s",
  },
  pricingHighlight: {
    background: "rgba(123,92,255,0.08)",
    border: `1px solid ${palette.accent}55`,
    boxShadow: `0 0 60px ${palette.accent}22`,
    transform: "scale(1.03)",
  },
  tierName: {
    fontSize: 16,
    fontWeight: 600,
    color: palette.textMuted,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    marginBottom: 8,
  },
  tierPrice: {
    fontSize: 42,
    fontWeight: 800,
    color: palette.heading,
    lineHeight: 1.1,
  },
  tierPer: {
    fontSize: 14,
    fontWeight: 400,
    color: palette.textMuted,
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    margin: "28px 0",
    display: "flex",
    flexDirection: "column" as const,
    gap: 12,
    flex: 1,
  },
  featureItem: {
    fontSize: 14,
    color: palette.text,
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  checkMark: {
    color: palette.accentAlt,
    fontWeight: 700,
    fontSize: 15,
  },
  tierBtn: {
    padding: "12px 24px",
    borderRadius: 10,
    border: `1px solid ${palette.border}`,
    background: "transparent",
    color: palette.text,
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    textAlign: "center" as const,
    transition: "background 0.2s",
  },
  tierBtnHighlight: {
    background: `linear-gradient(135deg, ${palette.accent}, ${palette.accentPink})`,
    border: "none",
    color: "#fff",
    boxShadow: `0 0 30px ${palette.accent}33`,
  },
  popularBadge: {
    display: "inline-block",
    padding: "4px 14px",
    borderRadius: 20,
    background: `linear-gradient(135deg, ${palette.accent}, ${palette.accentPink})`,
    color: "#fff",
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    marginBottom: 16,
    alignSelf: "flex-start" as const,
  },

  /* CTA */
  ctaSection: {
    textAlign: "center" as const,
    padding: "100px 24px",
    maxWidth: 700,
    margin: "0 auto",
  },
  ctaHeadline: {
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: 700,
    color: palette.heading,
    letterSpacing: "-0.02em",
    margin: 0,
    lineHeight: 1.2,
  },

  /* Footer */
  footer: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "60px 24px 32px",
    borderTop: `1px solid ${palette.border}`,
  },
  footerTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: 48,
    flexWrap: "wrap" as const,
  },
  footerBrand: {
    maxWidth: 240,
  },
  footerTagline: {
    fontSize: 13,
    color: palette.textMuted,
    marginTop: 12,
    lineHeight: 1.6,
  },
  footerColumns: {
    display: "flex",
    gap: 64,
    flexWrap: "wrap" as const,
  },
  footerColTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: palette.heading,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    marginBottom: 16,
  },
  footerLink: {
    display: "block",
    fontSize: 14,
    color: palette.textMuted,
    textDecoration: "none",
    marginBottom: 10,
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
    textAlign: "left" as const,
  },
  copyright: {
    fontSize: 13,
    color: palette.textMuted,
    marginTop: 48,
    textAlign: "center" as const,
    opacity: 0.6,
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const features = [
  {
    icon: "⚡",
    bg: `linear-gradient(135deg, ${palette.accent}33, ${palette.accentPink}22)`,
    title: "Lightning-Fast Deploys",
    desc: "Push to production in under 10 seconds with zero-downtime rolling releases and automatic rollback.",
  },
  {
    icon: "🔒",
    bg: `linear-gradient(135deg, ${palette.accentAlt}33, ${palette.accent}22)`,
    title: "End-to-End Encryption",
    desc: "Every request is encrypted at rest and in transit. SOC 2 Type II certified with granular access controls.",
  },
  {
    icon: "📊",
    bg: `linear-gradient(135deg, ${palette.accentPink}33, ${palette.accentAlt}22)`,
    title: "Real-Time Analytics",
    desc: "Live dashboards with custom metrics, anomaly detection, and alerting — all without sampling.",
  },
];

const testimonials = [
  {
    quote:
      "Stackpulse cut our deployment time by 80%. The aurora-smooth experience makes infrastructure feel effortless.",
    name: "Mia Chen",
    role: "CTO, Luminary Labs",
  },
  {
    quote:
      "We migrated our entire stack in a weekend. The analytics alone paid for the subscription within the first month.",
    name: "Alex Rivera",
    role: "Lead Engineer, Baseform",
  },
  {
    quote:
      "The team tier transformed how we collaborate. Shared environments and instant previews changed everything.",
    name: "Priya Sharma",
    role: "VP Engineering, Crestline",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Free",
    per: "",
    highlight: false,
    features: [
      "1 project",
      "10 GB bandwidth",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$29",
    per: "/mo",
    highlight: true,
    features: [
      "Unlimited projects",
      "200 GB bandwidth",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Team",
    price: "$79",
    per: "/mo",
    highlight: false,
    features: [
      "Everything in Pro",
      "Unlimited bandwidth",
      "Dedicated support",
      "SSO & SAML",
      "Audit logs",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
  },
];

const brands = ["Vercel", "Linear", "Raycast", "Resend", "Loops"];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function AuroraGradientMeshLanding() {
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);

  return (
    <div style={s.page}>
      {/* Gradient mesh blobs */}
      <div style={s.meshContainer}>
        <div
          style={meshBlob("-10%", "-5%", palette.accent, palette.accentPink, "60vw")}
        />
        <div
          style={meshBlob("20%", "60%", palette.accentAlt, palette.accent, "50vw")}
        />
        <div
          style={meshBlob("55%", "10%", palette.accentPink, palette.accentAlt, "45vw")}
        />
        <div
          style={meshBlob("75%", "50%", palette.accent, palette.accentAlt, "55vw")}
        />
      </div>

      <div style={s.content}>
        {/* ---- Header ---- */}
        <header style={s.header}>
          <div style={s.logo}>▲ Stackpulse</div>
          <nav style={s.nav}>
            {["Features", "Pricing", "Docs", "Blog"].map((item, i) => (
              <button
                key={item}
                style={{
                  ...s.navLink,
                  color:
                    hoveredNav === i ? palette.heading : palette.textMuted,
                }}
                onMouseEnter={() => setHoveredNav(i)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {item}
              </button>
            ))}
          </nav>
          <button style={s.signUpBtn}>Sign Up</button>
        </header>

        {/* ---- Hero ---- */}
        <section style={s.hero}>
          <h1 style={s.heroHeadline}>
            Ship faster with
            <br />
            zero friction
          </h1>
          <p style={s.heroSub}>
            The modern deployment platform that scales with your ambition.
            Build, preview, and launch — all in one workflow.
          </p>
          <div style={s.heroCtas}>
            <button style={s.primaryBtn}>Start Building</button>
            <button style={s.secondaryBtn}>Watch Demo</button>
          </div>
        </section>

        {/* ---- Logos ---- */}
        <section style={s.logosSection}>
          <p style={s.logosLabel}>Trusted by 2,000+ makers at</p>
          <div style={s.logosRow}>
            {brands.map((b) => (
              <span key={b} style={s.brandName}>
                {b}
              </span>
            ))}
          </div>
        </section>

        {/* ---- Features ---- */}
        <section style={s.features}>
          <div style={s.sectionHeading}>
            <h2 style={s.sectionTitle}>Everything you need</h2>
            <p style={s.sectionSub}>
              Powerful primitives that let you focus on what matters.
            </p>
          </div>
          <div style={s.grid3}>
            {features.map((f) => (
              <div key={f.title} style={s.card}>
                <div style={{ ...s.cardIcon, background: f.bg }}>{f.icon}</div>
                <div style={s.cardTitle}>{f.title}</div>
                <div style={s.cardDesc}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ---- Testimonials ---- */}
        <section style={s.testimonials}>
          <div style={s.sectionHeading}>
            <h2 style={s.sectionTitle}>Loved by builders</h2>
            <p style={s.sectionSub}>
              Hear from the teams who ship with Stackpulse every day.
            </p>
          </div>
          <div style={s.grid3}>
            {testimonials.map((t) => (
              <div key={t.name} style={s.quoteCard}>
                <div style={s.quoteText}>&ldquo;{t.quote}&rdquo;</div>
                <div>
                  <div style={s.quoteAuthor}>{t.name}</div>
                  <div style={s.quoteRole}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---- Pricing ---- */}
        <section style={s.pricing}>
          <div style={s.sectionHeading}>
            <h2 style={s.sectionTitle}>Simple, transparent pricing</h2>
            <p style={s.sectionSub}>
              Start free. Scale when you&apos;re ready.
            </p>
          </div>
          <div style={s.grid3}>
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  ...s.pricingCard,
                  ...(tier.highlight ? s.pricingHighlight : {}),
                }}
              >
                {tier.highlight && (
                  <span style={s.popularBadge}>Most Popular</span>
                )}
                <div style={s.tierName}>{tier.name}</div>
                <div style={s.tierPrice}>
                  {tier.price}
                  {tier.per && <span style={s.tierPer}>{tier.per}</span>}
                </div>
                <ul style={s.featureList}>
                  {tier.features.map((feat) => (
                    <li key={feat} style={s.featureItem}>
                      <span style={s.checkMark}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    ...s.tierBtn,
                    ...(tier.highlight ? s.tierBtnHighlight : {}),
                  }}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ---- CTA ---- */}
        <section style={s.ctaSection}>
          <h2 style={s.ctaHeadline}>
            Ready to launch your next project?
          </h2>
          <p style={{ ...s.sectionSub, marginBottom: 36 }}>
            Join thousands of developers shipping faster with Stackpulse.
          </p>
          <button style={s.primaryBtn}>Get Started for Free</button>
        </section>

        {/* ---- Footer ---- */}
        <footer style={s.footer}>
          <div style={s.footerTop}>
            <div style={s.footerBrand}>
              <div style={s.logo}>▲ Stackpulse</div>
              <p style={s.footerTagline}>
                The modern deployment platform for ambitious teams and makers.
              </p>
            </div>
            <div style={s.footerColumns}>
              <div>
                <div style={s.footerColTitle}>Product</div>
                {["Features", "Pricing", "Changelog", "Docs"].map((l) => (
                  <button key={l} style={s.footerLink}>
                    {l}
                  </button>
                ))}
              </div>
              <div>
                <div style={s.footerColTitle}>Company</div>
                {["About", "Blog", "Careers", "Contact"].map((l) => (
                  <button key={l} style={s.footerLink}>
                    {l}
                  </button>
                ))}
              </div>
              <div>
                <div style={s.footerColTitle}>Legal</div>
                {["Privacy", "Terms", "Security", "GDPR"].map((l) => (
                  <button key={l} style={s.footerLink}>
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <p style={s.copyright}>
            &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
