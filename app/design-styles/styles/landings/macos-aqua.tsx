"use client";

import React, { useState, CSSProperties } from "react";

/* ─── macOS Aqua palette & shared tokens ─── */
const aqua = {
  blue: "#2B6DE4",
  blueDark: "#1A4FAF",
  blueLight: "#6CA6FF",
  blueGlow: "rgba(109,175,255,0.55)",
  graphite: "#6D6D80",
  silver: "#E8E8ED",
  silverDark: "#C4C4CC",
  white: "#FFFFFF",
  offWhite: "#F5F5FA",
  pinstripe: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.02) 1px, rgba(0,0,0,0.02) 2px)",
  brushedMetal:
    "linear-gradient(180deg, #E8E8ED 0%, #D2D2DA 40%, #C6C6CF 60%, #D8D8E0 100%)",
  gelButton: (color: string, colorDark: string) =>
    `linear-gradient(180deg, ${color} 0%, ${colorDark} 100%)`,
  gelHighlight:
    "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 50%)",
  shadow: "0 2px 6px rgba(0,0,0,0.18)",
  shadowLg: "0 4px 16px rgba(0,0,0,0.14)",
  radius: 8,
  radiusSm: 6,
  font: '-apple-system, "Lucida Grande", "Helvetica Neue", Helvetica, Arial, sans-serif',
};

/* ─── Aqua gel button ─── */
function AquaButton({
  children,
  variant = "blue",
  style,
  small,
}: {
  children: React.ReactNode;
  variant?: "blue" | "graphite" | "white";
  style?: CSSProperties;
  small?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const colors: Record<string, { bg: string; bgDark: string; text: string }> = {
    blue: { bg: aqua.blue, bgDark: aqua.blueDark, text: aqua.white },
    graphite: { bg: "#7B7B8E", bgDark: "#55556A", text: aqua.white },
    white: { bg: "#F0F0F5", bgDark: "#D8D8E0", text: "#333" },
  };
  const c = colors[variant];

  const base: CSSProperties = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: small ? "7px 18px" : "10px 28px",
    fontSize: small ? 13 : 15,
    fontWeight: 600,
    fontFamily: aqua.font,
    color: c.text,
    background: aqua.gelButton(c.bg, c.bgDark),
    border: `1px solid ${c.bgDark}`,
    borderRadius: 20,
    cursor: "pointer",
    boxShadow: hovered
      ? `0 0 0 3px ${aqua.blueGlow}, ${aqua.shadow}`
      : aqua.shadow,
    overflow: "hidden",
    transition: "box-shadow 0.2s",
    textDecoration: "none",
    ...style,
  };

  return (
    <button
      style={base}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* gel highlight overlay */}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: "50%",
          borderRadius: "0 0 40% 40%",
          background: aqua.gelHighlight,
          pointerEvents: "none",
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </button>
  );
}

/* ─── Aqua window-chrome card ─── */
function AquaCard({
  children,
  style,
  highlighted,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
  highlighted?: boolean;
}) {
  return (
    <div
      style={{
        background: aqua.white,
        border: highlighted
          ? `2px solid ${aqua.blue}`
          : `1px solid ${aqua.silverDark}`,
        borderRadius: aqua.radius,
        boxShadow: highlighted
          ? `0 0 0 3px ${aqua.blueGlow}, ${aqua.shadowLg}`
          : aqua.shadow,
        overflow: "hidden",
        ...style,
      }}
    >
      {/* title-bar pinstripe */}
      <div
        style={{
          height: 28,
          background: aqua.brushedMetal,
          borderBottom: `1px solid ${aqua.silverDark}`,
          display: "flex",
          alignItems: "center",
          paddingLeft: 10,
          gap: 6,
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#FF5F57",
            border: "1px solid #E33E32",
          }}
        />
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#FEBC2E",
            border: "1px solid #E09E14",
          }}
        />
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#28C840",
            border: "1px solid #14A620",
          }}
        />
      </div>
      <div style={{ padding: 24 }}>{children}</div>
    </div>
  );
}

/* ─── Section wrapper ─── */
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
        padding: "72px 24px",
        maxWidth: 1120,
        margin: "0 auto",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

/* ─── Heading helpers ─── */
const sectionHeading: CSSProperties = {
  fontFamily: aqua.font,
  fontSize: 32,
  fontWeight: 700,
  color: "#1A1A2E",
  textAlign: "center",
  marginBottom: 8,
};

const sectionSub: CSSProperties = {
  fontFamily: aqua.font,
  fontSize: 16,
  color: aqua.graphite,
  textAlign: "center",
  marginBottom: 48,
  maxWidth: 560,
  marginLeft: "auto",
  marginRight: "auto",
};

/* ──────────────────────────────────────────────
   Main export
   ────────────────────────────────────────────── */
export function MacOSAquaLanding() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: aqua.font,
        color: "#1A1A2E",
        background: `${aqua.pinstripe}, ${aqua.offWhite}`,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* ── 1. Header ─────────────────────────── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: aqua.brushedMetal,
          borderBottom: `1px solid ${aqua.silverDark}`,
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 24px",
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ fontWeight: 700, fontSize: 18, letterSpacing: -0.3 }}
          >
            ▲ Stackpulse
          </div>

          <nav style={{ display: "flex", gap: 28 }}>
            {["Features", "Testimonials", "Pricing"].map((t) => (
              <a
                key={t}
                href={`#${t.toLowerCase()}`}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#333",
                  textDecoration: "none",
                }}
              >
                {t}
              </a>
            ))}
          </nav>

          <AquaButton small>Sign Up</AquaButton>
        </div>
      </header>

      {/* ── 2. Hero ────────────────────────────── */}
      <Section style={{ textAlign: "center", paddingTop: 88, paddingBottom: 64 }}>
        <h1
          style={{
            fontSize: 52,
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: -1,
            marginBottom: 20,
            background: `linear-gradient(135deg, ${aqua.blueDark}, ${aqua.blueLight})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Ship faster with
          <br />
          crystal-clear insight
        </h1>
        <p
          style={{
            fontSize: 18,
            color: aqua.graphite,
            maxWidth: 520,
            margin: "0 auto 36px",
            lineHeight: 1.6,
          }}
        >
          Stackpulse surfaces the metrics that matter, so your team can iterate
          with confidence and launch without guesswork.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <AquaButton>Get Started Free</AquaButton>
          <AquaButton variant="white">Watch Demo</AquaButton>
        </div>
      </Section>

      {/* ── 3. Logos bar ───────────────────────── */}
      <div
        style={{
          background: aqua.brushedMetal,
          borderTop: `1px solid ${aqua.silverDark}`,
          borderBottom: `1px solid ${aqua.silverDark}`,
          padding: "28px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: aqua.graphite,
            textTransform: "uppercase",
            letterSpacing: 1.2,
            marginBottom: 18,
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
          {["Vercel", "Linear", "Supabase", "Raycast", "Resend"].map((b) => (
            <span
              key={b}
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#999",
                letterSpacing: -0.3,
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* ── 4. Features ────────────────────────── */}
      <Section id="features">
        <h2 style={sectionHeading}>Everything you need to ship</h2>
        <p style={sectionSub}>
          Powerful primitives designed to give your team full visibility from
          first commit to production.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              icon: "📊",
              title: "Real-time dashboards",
              desc: "See live metrics from every deploy with sub-second latency and zero configuration overhead.",
            },
            {
              icon: "🔔",
              title: "Smart alerting",
              desc: "Get notified before incidents impact users with anomaly detection tuned to your baseline.",
            },
            {
              icon: "🔗",
              title: "Seamless integrations",
              desc: "Connect your stack in minutes. Works with GitHub, Slack, PagerDuty, and 40+ other tools.",
            },
          ].map((f) => (
            <AquaCard key={f.title}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: aqua.graphite,
                  margin: 0,
                }}
              >
                {f.desc}
              </p>
            </AquaCard>
          ))}
        </div>
      </Section>

      {/* ── 5. Testimonials ────────────────────── */}
      <div style={{ background: aqua.brushedMetal, borderTop: `1px solid ${aqua.silverDark}`, borderBottom: `1px solid ${aqua.silverDark}` }}>
        <Section id="testimonials">
          <h2 style={sectionHeading}>Loved by engineering teams</h2>
          <p style={sectionSub}>
            Hear from the developers and leaders who rely on Stackpulse every day.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                quote:
                  "Stackpulse cut our mean-time-to-detect by 60%. We catch regressions before they reach users now.",
                name: "Amara Chen",
                role: "VP Engineering, Luminary",
              },
              {
                quote:
                  "The dashboard is gorgeous and fast. It feels like a native app. Best observability tool we have used.",
                name: "Jonas Eriksson",
                role: "Staff SRE, Norde",
              },
              {
                quote:
                  "Setting up integrations took five minutes. We went from zero visibility to full coverage in an afternoon.",
                name: "Priya Kapoor",
                role: "CTO, Trellis Health",
              },
            ].map((t) => (
              <AquaCard key={t.name}>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "#444",
                    fontStyle: "italic",
                    marginBottom: 16,
                    marginTop: 0,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: aqua.graphite,
                    margin: 0,
                  }}
                >
                  {t.role}
                </p>
              </AquaCard>
            ))}
          </div>
        </Section>
      </div>

      {/* ── 6. Pricing ─────────────────────────── */}
      <Section id="pricing">
        <h2 style={sectionHeading}>Simple, transparent pricing</h2>
        <p style={sectionSub}>
          Start free and scale as you grow. No surprises, cancel any time.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {[
            {
              name: "Starter",
              price: "Free",
              sub: "forever",
              features: [
                "Up to 3 projects",
                "7-day data retention",
                "Community support",
                "Basic dashboards",
              ],
              highlighted: false,
            },
            {
              name: "Pro",
              price: "$29",
              sub: "/ month",
              features: [
                "Unlimited projects",
                "90-day data retention",
                "Priority support",
                "Advanced dashboards",
                "Smart alerting",
                "Custom integrations",
              ],
              highlighted: true,
            },
            {
              name: "Team",
              price: "$79",
              sub: "/ month",
              features: [
                "Everything in Pro",
                "Unlimited retention",
                "Dedicated CSM",
                "SSO & SAML",
                "Audit logs",
                "SLA guarantee",
              ],
              highlighted: false,
            },
          ].map((tier) => (
            <AquaCard
              key={tier.name}
              highlighted={tier.highlighted}
              style={tier.highlighted ? { transform: "scale(1.03)" } : {}}
            >
              {tier.highlighted && (
                <div
                  style={{
                    background: aqua.gelButton(aqua.blue, aqua.blueDark),
                    color: aqua.white,
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "4px 0",
                    letterSpacing: 0.8,
                    textTransform: "uppercase",
                    marginTop: -24,
                    marginLeft: -24,
                    marginRight: -24,
                    marginBottom: 16,
                  }}
                >
                  Most Popular
                </div>
              )}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 4,
                  marginTop: tier.highlighted ? 0 : undefined,
                }}
              >
                {tier.name}
              </h3>
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontSize: 36, fontWeight: 800 }}>
                  {tier.price}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: aqua.graphite,
                    marginLeft: 4,
                  }}
                >
                  {tier.sub}
                </span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 24px",
                }}
              >
                {tier.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: 14,
                      lineHeight: 1.5,
                      padding: "5px 0",
                      borderBottom: `1px solid ${aqua.silver}`,
                      color: "#444",
                    }}
                  >
                    <span style={{ color: aqua.blue, marginRight: 8 }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <AquaButton
                variant={tier.highlighted ? "blue" : "white"}
                style={{ width: "100%" }}
              >
                {tier.price === "Free" ? "Get Started" : "Subscribe"}
              </AquaButton>
            </AquaCard>
          ))}
        </div>
      </Section>

      {/* ── 7. CTA ─────────────────────────────── */}
      <div
        style={{
          background: `linear-gradient(135deg, ${aqua.blueDark} 0%, ${aqua.blue} 50%, ${aqua.blueLight} 100%)`,
          borderTop: `1px solid ${aqua.blueDark}`,
          borderBottom: `1px solid ${aqua.blueDark}`,
        }}
      >
        <Section style={{ textAlign: "center", padding: "64px 24px" }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: aqua.white,
              marginBottom: 16,
            }}
          >
            Ready to see what you&apos;ve been missing?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.8)",
              marginBottom: 32,
              maxWidth: 480,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.6,
            }}
          >
            Join thousands of teams shipping with confidence. Get started in
            under two minutes.
          </p>
          <AquaButton
            variant="white"
            style={{ fontSize: 16, padding: "12px 36px" }}
          >
            Start Free Trial
          </AquaButton>
        </Section>
      </div>

      {/* ── 8. Footer ──────────────────────────── */}
      <footer
        style={{
          background: aqua.brushedMetal,
          borderTop: `1px solid ${aqua.silverDark}`,
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "48px 24px 24px",
            display: "flex",
            flexWrap: "wrap",
            gap: 48,
            justifyContent: "space-between",
          }}
        >
          {/* Left: logo + tagline */}
          <div style={{ minWidth: 200, maxWidth: 260 }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 18,
                marginBottom: 8,
              }}
            >
              ▲ Stackpulse
            </div>
            <p
              style={{
                fontSize: 13,
                color: aqua.graphite,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Ship faster with crystal-clear insight into every deploy.
            </p>
          </div>

          {/* Right: link columns */}
          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
            {[
              {
                heading: "Product",
                links: ["Features", "Pricing", "Changelog", "Docs"],
              },
              {
                heading: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
              {
                heading: "Legal",
                links: ["Privacy", "Terms", "Security", "GDPR"],
              },
            ].map((col) => (
              <div key={col.heading}>
                <h4
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 0.8,
                    marginBottom: 12,
                    color: "#555",
                  }}
                >
                  {col.heading}
                </h4>
                <ul
                  style={{ listStyle: "none", padding: 0, margin: 0 }}
                >
                  {col.links.map((l) => (
                    <li key={l} style={{ marginBottom: 8 }}>
                      <a
                        href="#"
                        style={{
                          fontSize: 13,
                          color: aqua.graphite,
                          textDecoration: "none",
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

        {/* Copyright */}
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "16px 24px",
            borderTop: `1px solid ${aqua.silverDark}`,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: aqua.graphite,
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} Stackpulse, Inc. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
