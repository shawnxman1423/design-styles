"use client";

import React, { useState, CSSProperties } from "react";

/* ─── palette & shared tokens ─── */
const color = {
  sky: "#3ba5f7",
  skyLight: "#7ec8ff",
  skyPale: "#d4eeff",
  aeroWhite: "rgba(255,255,255,0.82)",
  aeroWhiteHard: "rgba(255,255,255,0.95)",
  glass: "rgba(255,255,255,0.45)",
  glassBorder: "rgba(255,255,255,0.6)",
  green: "#43c96a",
  greenDark: "#2fa855",
  dark: "#1a2b3c",
  muted: "#5a7a96",
  faint: "#e8f4fd",
  gradientHero: "linear-gradient(170deg, #b6e0fe 0%, #d4f5d4 40%, #fffde4 100%)",
  gradientSky: "linear-gradient(180deg, #56b4f9 0%, #93d5ff 50%, #c8ecff 100%)",
  gradientButton: "linear-gradient(180deg, #4db8ff 0%, #2196f3 100%)",
  gradientButtonGreen: "linear-gradient(180deg, #5fd97e 0%, #36b85c 100%)",
  gradientCard: "linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(230,247,255,0.75) 100%)",
  gradientProCard: "linear-gradient(160deg, #e0f4ff 0%, #c8ecff 100%)",
  shadow: "0 4px 24px rgba(59,165,247,0.13), 0 1.5px 6px rgba(0,0,0,0.06)",
  shadowHeavy: "0 8px 40px rgba(59,165,247,0.18), 0 2px 10px rgba(0,0,0,0.08)",
};

const font = {
  base: '-apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const radius = {
  sm: 10,
  md: 16,
  lg: 24,
  pill: 999,
};

/* ─── tiny helpers ─── */
function GlossOverlay({ borderRadius = radius.md }: { borderRadius?: number }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "50%",
        borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 100%)",
        pointerEvents: "none",
      }}
    />
  );
}

function AeroButton({
  children,
  variant = "primary",
  style,
  ...rest
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "green" | "outline";
  style?: CSSProperties;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base: CSSProperties = {
    fontFamily: font.base,
    fontWeight: 600,
    fontSize: 15,
    border: "none",
    borderRadius: radius.pill,
    cursor: "pointer",
    padding: "12px 28px",
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.15s, box-shadow 0.15s",
    boxShadow: "0 2px 8px rgba(59,165,247,0.18), inset 0 1px 0 rgba(255,255,255,0.35)",
  };

  const variants: Record<string, CSSProperties> = {
    primary: {
      background: color.gradientButton,
      color: "#fff",
    },
    green: {
      background: color.gradientButtonGreen,
      color: "#fff",
    },
    secondary: {
      background: color.aeroWhite,
      color: color.sky,
      boxShadow: `0 2px 8px rgba(59,165,247,0.10), inset 0 1px 0 rgba(255,255,255,0.5)`,
      border: `1.5px solid ${color.glassBorder}`,
    },
    outline: {
      background: "transparent",
      color: color.sky,
      border: `1.5px solid ${color.sky}`,
      boxShadow: "none",
    },
  };

  return (
    <button style={{ ...base, ...variants[variant], ...style }} {...rest}>
      {children}
    </button>
  );
}

/* ─── section wrapper ─── */
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
        padding: "80px 24px",
        maxWidth: 1140,
        margin: "0 auto",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <h2
        style={{
          fontFamily: font.base,
          fontSize: 36,
          fontWeight: 700,
          color: color.dark,
          margin: 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: font.base,
            fontSize: 17,
            color: color.muted,
            marginTop: 12,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── glass card ─── */
function GlassCard({
  children,
  style,
  highlight,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: radius.md,
        background: highlight ? color.gradientProCard : color.gradientCard,
        border: highlight
          ? `2px solid ${color.skyLight}`
          : `1.5px solid ${color.glassBorder}`,
        boxShadow: highlight ? color.shadowHeavy : color.shadow,
        padding: 32,
        overflow: "hidden",
        ...style,
      }}
    >
      <GlossOverlay />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

/* ================================================================
   MAIN COMPONENT
   ================================================================ */
export function FrutigerAeroLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* ─── 1. Header ─── */
  const header = (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: color.aeroWhiteHard,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${color.glassBorder}`,
        boxShadow: "0 1px 12px rgba(59,165,247,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: 64,
          fontFamily: font.base,
        }}
      >
        {/* logo */}
        <div
          style={{
            fontWeight: 700,
            fontSize: 19,
            color: color.dark,
            letterSpacing: -0.5,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              background: color.gradientButton,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: 22,
            }}
          >
            ▲
          </span>{" "}
          Stackpulse
        </div>

        {/* nav links */}
        <nav
          style={{
            display: "flex",
            gap: 32,
            fontSize: 14,
            fontWeight: 500,
            color: color.muted,
          }}
        >
          {["Features", "Testimonials", "Pricing"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                color: color.muted,
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = color.sky)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = color.muted)
              }
            >
              {l}
            </a>
          ))}
        </nav>

        {/* sign-up */}
        <AeroButton style={{ padding: "8px 22px", fontSize: 14 }}>
          Sign Up
        </AeroButton>
      </div>
    </header>
  );

  /* ─── 2. Hero ─── */
  const hero = (
    <div
      style={{
        background: color.gradientHero,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* decorative blurred orbs — classic Frutiger Aero */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(59,165,247,0.18)",
          filter: "blur(100px)",
          top: -120,
          right: -100,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(67,201,106,0.14)",
          filter: "blur(90px)",
          bottom: -80,
          left: -60,
          pointerEvents: "none",
        }}
      />

      <Section style={{ textAlign: "center", padding: "100px 24px 80px" }}>
        <h1
          style={{
            fontFamily: font.base,
            fontSize: 54,
            fontWeight: 800,
            lineHeight: 1.12,
            color: color.dark,
            margin: 0,
            letterSpacing: -1,
          }}
        >
          Ship faster.{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #2196f3, #43c96a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Scale smarter.
          </span>
        </h1>
        <p
          style={{
            fontFamily: font.base,
            fontSize: 19,
            color: color.muted,
            maxWidth: 560,
            margin: "20px auto 0",
            lineHeight: 1.6,
          }}
        >
          Stackpulse gives your team the modern toolkit to build, deploy, and
          iterate on products your customers love — all in one place.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            marginTop: 36,
            flexWrap: "wrap",
          }}
        >
          <AeroButton variant="green" style={{ padding: "14px 34px", fontSize: 16 }}>
            Get Started Free
          </AeroButton>
          <AeroButton variant="secondary" style={{ padding: "14px 34px", fontSize: 16 }}>
            Book a Demo
          </AeroButton>
        </div>
      </Section>
    </div>
  );

  /* ─── 3. Logos bar ─── */
  const logos = (
    <div
      style={{
        background: color.faint,
        borderTop: `1px solid ${color.glassBorder}`,
        borderBottom: `1px solid ${color.glassBorder}`,
      }}
    >
      <Section style={{ padding: "36px 24px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: font.base,
            fontSize: 13,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            color: color.muted,
            margin: 0,
          }}
        >
          Trusted by 2,000+ makers at
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 48,
            marginTop: 20,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {["Vercel", "Stripe", "Linear", "Notion", "Figma"].map((name) => (
            <span
              key={name}
              style={{
                fontFamily: font.base,
                fontSize: 18,
                fontWeight: 700,
                color: "rgba(26,43,60,0.32)",
                letterSpacing: -0.3,
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </Section>
    </div>
  );

  /* ─── 4. Features ─── */
  const featuresData = [
    {
      icon: "⚡",
      title: "Instant Deployments",
      body: "Push to main, and your changes are live in seconds. Zero-config CI/CD baked right in.",
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      body: "SOC 2 Type II, end-to-end encryption, and role-based access — security you can trust.",
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      body: "Actionable dashboards that surface the metrics that matter, updated every second.",
    },
  ];

  const features = (
    <div style={{ background: "#fff" }}>
      <Section id="features">
        <SectionHeading
          title="Everything you need to launch"
          subtitle="Powerful primitives, delightful defaults."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {featuresData.map((f) => (
            <GlassCard key={f.title}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
              <h3
                style={{
                  fontFamily: font.base,
                  fontSize: 19,
                  fontWeight: 700,
                  color: color.dark,
                  margin: "0 0 8px",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: font.base,
                  fontSize: 15,
                  color: color.muted,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {f.body}
              </p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );

  /* ─── 5. Testimonials ─── */
  const testimonialsData = [
    {
      quote:
        "Stackpulse cut our deploy time from 20 minutes to under 30 seconds. It feels like magic.",
      name: "Ava Chen",
      role: "CTO, Luminary",
    },
    {
      quote:
        "The analytics alone are worth the price. We finally understand what our users actually do.",
      name: "Marcus Rivera",
      role: "Head of Product, Onward",
    },
    {
      quote:
        "We migrated our entire infra in a weekend. The DX is genuinely best-in-class.",
      name: "Priya Sharma",
      role: "Staff Engineer, Kova",
    },
  ];

  const testimonials = (
    <div style={{ background: color.faint }}>
      <Section id="testimonials">
        <SectionHeading
          title="Loved by builders"
          subtitle="Hear from teams who switched to Stackpulse."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {testimonialsData.map((t) => (
            <GlassCard key={t.name}>
              <p
                style={{
                  fontFamily: font.base,
                  fontSize: 15,
                  color: color.dark,
                  lineHeight: 1.7,
                  margin: "0 0 20px",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div
                  style={{
                    fontFamily: font.base,
                    fontWeight: 700,
                    fontSize: 14,
                    color: color.dark,
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: font.base,
                    fontSize: 13,
                    color: color.muted,
                    marginTop: 2,
                  }}
                >
                  {t.role}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );

  /* ─── 6. Pricing ─── */
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      sub: "forever",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "Community support",
        "1 GB storage",
      ],
      cta: "Get Started",
      variant: "outline" as const,
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "/ month",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "50 GB storage",
        "Custom domains",
      ],
      cta: "Start Free Trial",
      variant: "primary" as const,
      highlight: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "/ month",
      features: [
        "Everything in Pro",
        "Team workspaces",
        "SSO & SAML",
        "200 GB storage",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      variant: "outline" as const,
      highlight: false,
    },
  ];

  const pricing = (
    <div style={{ background: "#fff" }}>
      <Section id="pricing">
        <SectionHeading
          title="Simple, transparent pricing"
          subtitle="No hidden fees. Cancel anytime."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {tiers.map((t) => (
            <GlassCard
              key={t.name}
              highlight={t.highlight}
              style={t.highlight ? { transform: "scale(1.03)" } : {}}
            >
              {t.highlight && (
                <div
                  style={{
                    fontFamily: font.base,
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                    color: "#fff",
                    background: color.gradientButton,
                    display: "inline-block",
                    padding: "4px 14px",
                    borderRadius: radius.pill,
                    marginBottom: 14,
                  }}
                >
                  Most Popular
                </div>
              )}
              <h3
                style={{
                  fontFamily: font.base,
                  fontSize: 18,
                  fontWeight: 700,
                  color: color.dark,
                  margin: "0 0 4px",
                }}
              >
                {t.name}
              </h3>
              <div
                style={{
                  fontFamily: font.base,
                  fontSize: 40,
                  fontWeight: 800,
                  color: color.dark,
                  lineHeight: 1.2,
                }}
              >
                {t.price}
                <span
                  style={{ fontSize: 15, fontWeight: 500, color: color.muted }}
                >
                  {" "}
                  {t.sub}
                </span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "20px 0 24px",
                }}
              >
                {t.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontFamily: font.base,
                      fontSize: 14,
                      color: color.dark,
                      padding: "6px 0",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: color.green, fontWeight: 700 }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <AeroButton
                variant={t.variant}
                style={{ width: "100%", textAlign: "center" }}
              >
                {t.cta}
              </AeroButton>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );

  /* ─── 7. CTA ─── */
  const cta = (
    <div
      style={{
        background: color.gradientSky,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* gloss sweep */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "50%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
        }}
      />
      <Section
        style={{
          textAlign: "center",
          padding: "80px 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontFamily: font.base,
            fontSize: 38,
            fontWeight: 800,
            color: "#fff",
            margin: 0,
            letterSpacing: -0.5,
          }}
        >
          Ready to build the future?
        </h2>
        <p
          style={{
            fontFamily: font.base,
            fontSize: 17,
            color: "rgba(255,255,255,0.85)",
            marginTop: 12,
          }}
        >
          Join thousands of teams already shipping with Stackpulse.
        </p>
        <AeroButton
          variant="green"
          style={{ marginTop: 28, padding: "14px 40px", fontSize: 16 }}
        >
          Get Started Free
        </AeroButton>
      </Section>
    </div>
  );

  /* ─── 8. Footer ─── */
  const footerCols: { heading: string; links: string[] }[] = [
    { heading: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { heading: "Legal", links: ["Privacy", "Terms", "Security"] },
  ];

  const footer = (
    <footer
      style={{
        background: color.dark,
        color: "rgba(255,255,255,0.65)",
        fontFamily: font.base,
        fontSize: 14,
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "56px 24px 32px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        {/* left */}
        <div style={{ maxWidth: 260 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: "#fff",
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ color: color.skyLight }}>▲</span> Stackpulse
          </div>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            The modern platform for teams who ship.
          </p>
        </div>

        {/* columns */}
        <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
          {footerCols.map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 14,
                }}
              >
                {col.heading}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map((l) => (
                  <li key={l} style={{ marginBottom: 10 }}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "rgba(255,255,255,0.65)")
                      }
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
          maxWidth: 1140,
          margin: "0 auto",
          padding: "20px 24px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          fontSize: 13,
          color: "rgba(255,255,255,0.35)",
        }}
      >
        &copy; {new Date().getFullYear()} Stackpulse. All rights reserved.
      </div>
    </footer>
  );

  /* ─── render ─── */
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        fontFamily: font.base,
        color: color.dark,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      } as CSSProperties}
    >
      {header}
      {hero}
      {logos}
      {features}
      {testimonials}
      {pricing}
      {cta}
      {footer}
    </div>
  );
}
