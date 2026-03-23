"use client";

import React, { useState } from "react";

// Discord-style color palette
const colors = {
  bg: "#313338",
  bgDark: "#1e1f22",
  bgDarker: "#111214",
  bgCard: "#2b2d31",
  bgCardHover: "#35373c",
  bgElevated: "#232428",
  blurple: "#5865f2",
  blurpleHover: "#4752c4",
  blurpleDark: "#3c45a5",
  green: "#57f287",
  greenDark: "#248046",
  white: "#ffffff",
  textPrimary: "#f2f3f5",
  textSecondary: "#b5bac1",
  textMuted: "#949ba4",
  textLink: "#00a8fc",
  border: "#3f4147",
  yellow: "#fee75c",
  fuchsia: "#eb459e",
  red: "#ed4245",
};

const fonts = {
  display: "'GG Sans', 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  body: "'GG Sans', 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

export function DiscordLanding() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredPricing, setHoveredPricing] = useState<number | null>(null);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: colors.bgDark,
        color: colors.textPrimary,
        fontFamily: fonts.body,
        overflowX: "hidden",
      }}
    >
      {/* ========== HEADER ========== */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: colors.bgDarker,
          borderBottom: `1px solid ${colors.border}`,
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 800,
              fontSize: 20,
              color: colors.white,
              letterSpacing: -0.5,
            }}
          >
            <span style={{ fontSize: 24 }}>&#9650;</span>
            <span>Stackpulse</span>
          </div>

          {/* Nav Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
            }}
          >
            {["Features", "Pricing", "Developers", "Safety", "Blog"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  onMouseEnter={() => setHoveredNav(link)}
                  onMouseLeave={() => setHoveredNav(null)}
                  style={{
                    color:
                      hoveredNav === link
                        ? colors.white
                        : colors.textSecondary,
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 600,
                    transition: "color 0.15s ease",
                    position: "relative",
                  }}
                >
                  {link}
                  {hoveredNav === link && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        right: 0,
                        height: 2,
                        backgroundColor: colors.blurple,
                        borderRadius: 1,
                      }}
                    />
                  )}
                </a>
              )
            )}
          </nav>

          {/* Sign Up Button */}
          <button
            onMouseEnter={() => setHoveredBtn("signup-header")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              backgroundColor:
                hoveredBtn === "signup-header"
                  ? colors.blurpleHover
                  : colors.blurple,
              color: colors.white,
              border: "none",
              borderRadius: 28,
              padding: "8px 20px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s ease",
              transform:
                hoveredBtn === "signup-header" ? "scale(1.02)" : "scale(1)",
            }}
          >
            Sign up free
          </button>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section
        style={{
          position: "relative",
          padding: "100px 24px 80px",
          textAlign: "center",
          overflow: "hidden",
          background: `radial-gradient(ellipse 80% 60% at 50% 20%, ${colors.blurple}22, transparent)`,
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -200,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${colors.blurple}15, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -150,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${colors.fuchsia}10, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <h1
            style={{
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1.5,
              color: colors.white,
              margin: "0 0 20px",
            }}
          >
            Imagine a place where
            <br />
            <span style={{ color: colors.blurple }}>teams ship faster</span>
          </h1>
          <p
            style={{
              fontSize: 20,
              color: colors.textSecondary,
              maxWidth: 560,
              margin: "0 auto 40px",
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Stackpulse brings your dev workflow together. Ship features, squash
            bugs, and collaborate in real-time &mdash; all in one place.
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
              onMouseEnter={() => setHoveredBtn("hero-primary")}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                backgroundColor:
                  hoveredBtn === "hero-primary"
                    ? colors.blurpleHover
                    : colors.blurple,
                color: colors.white,
                border: "none",
                borderRadius: 28,
                padding: "16px 36px",
                fontSize: 18,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
                transform:
                  hoveredBtn === "hero-primary"
                    ? "translateY(-2px)"
                    : "translateY(0)",
                boxShadow:
                  hoveredBtn === "hero-primary"
                    ? `0 8px 24px ${colors.blurple}40`
                    : "none",
              }}
            >
              Get started for free
            </button>
            <button
              onMouseEnter={() => setHoveredBtn("hero-secondary")}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                backgroundColor:
                  hoveredBtn === "hero-secondary"
                    ? colors.bgCardHover
                    : colors.bgCard,
                color: colors.textPrimary,
                border: `1px solid ${colors.border}`,
                borderRadius: 28,
                padding: "16px 36px",
                fontSize: 18,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
                transform:
                  hoveredBtn === "hero-secondary"
                    ? "translateY(-2px)"
                    : "translateY(0)",
              }}
            >
              See how it works
            </button>
          </div>
        </div>
      </section>

      {/* ========== LOGOS BAR ========== */}
      <section
        style={{
          padding: "48px 24px",
          borderTop: `1px solid ${colors.border}`,
          borderBottom: `1px solid ${colors.border}`,
          backgroundColor: colors.bgDarker,
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: colors.textMuted,
              marginBottom: 28,
            }}
          >
            Trusted by 2,000+ makers at
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 48,
              flexWrap: "wrap",
            }}
          >
            {["Vercel", "Stripe", "Linear", "Notion", "Figma"].map(
              (brand) => (
                <span
                  key={brand}
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: colors.textMuted,
                    letterSpacing: -0.5,
                    opacity: 0.6,
                  }}
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========== FEATURES ========== */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              style={{
                fontSize: 40,
                fontWeight: 800,
                color: colors.white,
                letterSpacing: -1,
                margin: "0 0 12px",
              }}
            >
              Built for shipping, not meetings
            </h2>
            <p
              style={{
                fontSize: 18,
                color: colors.textSecondary,
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.5,
              }}
            >
              Everything you need to go from idea to production, together.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                icon: "&#128172;",
                title: "Real-time Channels",
                desc: "Organize conversations by project, team, or topic. Threads keep discussions focused without the noise.",
                accent: colors.blurple,
              },
              {
                icon: "&#9889;",
                title: "Instant Deploys",
                desc: "Push to main and watch it go live. Integrated CI/CD pipelines with zero-config setup for any framework.",
                accent: colors.green,
              },
              {
                icon: "&#128274;",
                title: "Roles & Permissions",
                desc: "Granular access controls for every channel and resource. Keep your codebase secure as you scale.",
                accent: colors.fuchsia,
              },
            ].map((feature, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: colors.bgCard,
                  borderRadius: 8,
                  padding: 32,
                  border: `1px solid ${
                    hoveredCard === i ? feature.accent + "44" : colors.border
                  }`,
                  transition: "all 0.2s ease",
                  transform:
                    hoveredCard === i ? "translateY(-4px)" : "translateY(0)",
                  boxShadow:
                    hoveredCard === i
                      ? `0 8px 30px ${colors.bgDarker}`
                      : "none",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: feature.accent + "18",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    marginBottom: 20,
                  }}
                  dangerouslySetInnerHTML={{ __html: feature.icon }}
                />
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: colors.white,
                    margin: "0 0 10px",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: colors.textSecondary,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section
        style={{
          padding: "96px 24px",
          backgroundColor: colors.bgDarker,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              style={{
                fontSize: 40,
                fontWeight: 800,
                color: colors.white,
                letterSpacing: -1,
                margin: "0 0 12px",
              }}
            >
              Loved by developers
            </h2>
            <p
              style={{
                fontSize: 18,
                color: colors.textSecondary,
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.5,
              }}
            >
              Hear from teams that switched to Stackpulse.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                quote:
                  "Stackpulse replaced three tools in our stack. Our team ships 2x faster now and actually enjoys the process.",
                name: "Sara Chen",
                role: "CTO, LaunchKit",
                color: colors.blurple,
              },
              {
                quote:
                  "The channel-based workflow is genius. It feels like Discord but purpose-built for engineering teams.",
                name: "Marcus Rivera",
                role: "Lead Engineer, Pixelform",
                color: colors.green,
              },
              {
                quote:
                  "We onboarded our entire 40-person team in under an hour. The permissions system is incredibly well thought out.",
                name: "Aisha Patel",
                role: "VP Engineering, Tidepool",
                color: colors.fuchsia,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: colors.bgCard,
                  borderRadius: 8,
                  padding: 28,
                  border: `1px solid ${colors.border}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 32,
                    borderRadius: 2,
                    backgroundColor: testimonial.color,
                  }}
                />
                <p
                  style={{
                    fontSize: 15,
                    color: colors.textSecondary,
                    lineHeight: 1.7,
                    margin: 0,
                    flex: 1,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: colors.white,
                      margin: "0 0 2px",
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: colors.textMuted,
                      margin: 0,
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICING ========== */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              style={{
                fontSize: 40,
                fontWeight: 800,
                color: colors.white,
                letterSpacing: -1,
                margin: "0 0 12px",
              }}
            >
              Simple, transparent pricing
            </h2>
            <p
              style={{
                fontSize: 18,
                color: colors.textSecondary,
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.5,
              }}
            >
              Start free, upgrade when you&apos;re ready.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
              alignItems: "start",
            }}
          >
            {[
              {
                name: "Starter",
                price: "Free",
                period: "",
                desc: "For solo devs and side projects",
                features: [
                  "Up to 3 channels",
                  "Basic integrations",
                  "1 GB storage",
                  "Community support",
                ],
                highlight: false,
                btnLabel: "Get started",
              },
              {
                name: "Pro",
                price: "$29",
                period: "/mo",
                desc: "For growing teams that ship daily",
                features: [
                  "Unlimited channels",
                  "Advanced integrations",
                  "50 GB storage",
                  "Priority support",
                  "Custom roles",
                  "Analytics dashboard",
                ],
                highlight: true,
                btnLabel: "Start free trial",
              },
              {
                name: "Team",
                price: "$79",
                period: "/mo",
                desc: "For orgs that need full control",
                features: [
                  "Everything in Pro",
                  "SSO & SAML",
                  "Unlimited storage",
                  "Dedicated support",
                  "Audit logs",
                  "Custom SLA",
                ],
                highlight: false,
                btnLabel: "Contact sales",
              },
            ].map((tier, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredPricing(i)}
                onMouseLeave={() => setHoveredPricing(null)}
                style={{
                  backgroundColor: tier.highlight
                    ? colors.bgElevated
                    : colors.bgCard,
                  borderRadius: 8,
                  padding: 32,
                  border: tier.highlight
                    ? `2px solid ${colors.blurple}`
                    : `1px solid ${colors.border}`,
                  position: "relative",
                  transition: "all 0.2s ease",
                  transform:
                    tier.highlight
                      ? "scale(1.02)"
                      : hoveredPricing === i
                        ? "translateY(-4px)"
                        : "translateY(0)",
                  boxShadow: tier.highlight
                    ? `0 0 40px ${colors.blurple}20`
                    : "none",
                }}
              >
                {tier.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: -13,
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: colors.blurple,
                      color: colors.white,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      padding: "4px 16px",
                      borderRadius: 12,
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: colors.textMuted,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    margin: "0 0 8px",
                  }}
                >
                  {tier.name}
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 2,
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      fontSize: 48,
                      fontWeight: 800,
                      color: colors.white,
                      letterSpacing: -2,
                    }}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      style={{
                        fontSize: 16,
                        color: colors.textMuted,
                        fontWeight: 500,
                      }}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>

                <p
                  style={{
                    fontSize: 14,
                    color: colors.textSecondary,
                    margin: "0 0 24px",
                  }}
                >
                  {tier.desc}
                </p>

                <div
                  style={{
                    height: 1,
                    backgroundColor: colors.border,
                    margin: "0 0 24px",
                  }}
                />

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {tier.features.map((feat, fi) => (
                    <li
                      key={fi}
                      style={{
                        fontSize: 14,
                        color: colors.textSecondary,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <span
                        style={{
                          color: tier.highlight
                            ? colors.blurple
                            : colors.green,
                          fontSize: 16,
                          fontWeight: 700,
                        }}
                      >
                        &#10003;
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  onMouseEnter={() => setHoveredBtn(`pricing-${i}`)}
                  onMouseLeave={() => setHoveredBtn(null)}
                  style={{
                    width: "100%",
                    padding: "12px 0",
                    borderRadius: 28,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    border: tier.highlight
                      ? "none"
                      : `1px solid ${colors.border}`,
                    backgroundColor: tier.highlight
                      ? hoveredBtn === `pricing-${i}`
                        ? colors.blurpleHover
                        : colors.blurple
                      : hoveredBtn === `pricing-${i}`
                        ? colors.bgCardHover
                        : "transparent",
                    color: colors.white,
                  }}
                >
                  {tier.btnLabel}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section
        style={{
          padding: "96px 24px",
          textAlign: "center",
          background: `linear-gradient(180deg, ${colors.bgDark} 0%, ${colors.blurple}18 50%, ${colors.bgDark} 100%)`,
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: colors.white,
              letterSpacing: -1.5,
              margin: "0 0 16px",
              lineHeight: 1.15,
            }}
          >
            Ready to build something
            <br />
            <span style={{ color: colors.blurple }}>extraordinary?</span>
          </h2>
          <p
            style={{
              fontSize: 18,
              color: colors.textSecondary,
              margin: "0 0 36px",
              lineHeight: 1.5,
            }}
          >
            Join thousands of developers already shipping with Stackpulse.
          </p>
          <button
            onMouseEnter={() => setHoveredBtn("cta-final")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              backgroundColor:
                hoveredBtn === "cta-final"
                  ? colors.blurpleHover
                  : colors.blurple,
              color: colors.white,
              border: "none",
              borderRadius: 28,
              padding: "16px 48px",
              fontSize: 18,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              transform:
                hoveredBtn === "cta-final"
                  ? "translateY(-2px)"
                  : "translateY(0)",
              boxShadow:
                hoveredBtn === "cta-final"
                  ? `0 8px 24px ${colors.blurple}40`
                  : "none",
            }}
          >
            Get started for free
          </button>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer
        style={{
          padding: "64px 24px 32px",
          backgroundColor: colors.bgDarker,
          borderTop: `1px solid ${colors.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: 48,
          }}
        >
          {/* Logo + Tagline */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 800,
                fontSize: 20,
                color: colors.white,
                letterSpacing: -0.5,
                marginBottom: 12,
              }}
            >
              <span style={{ fontSize: 24 }}>&#9650;</span>
              <span>Stackpulse</span>
            </div>
            <p
              style={{
                fontSize: 14,
                color: colors.textMuted,
                lineHeight: 1.6,
                margin: 0,
                maxWidth: 240,
              }}
            >
              The developer platform for teams that ship. Build, deploy, and
              iterate &mdash; together.
            </p>
          </div>

          {/* Link Columns */}
          {[
            {
              title: "Product",
              links: ["Features", "Integrations", "Pricing", "Changelog"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Contact"],
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "Cookie Policy", "Licenses"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  color: colors.textMuted,
                  margin: "0 0 16px",
                }}
              >
                {col.title}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredNav(`footer-${link}`)}
                      onMouseLeave={() => setHoveredNav(null)}
                      style={{
                        fontSize: 14,
                        color:
                          hoveredNav === `footer-${link}`
                            ? colors.textPrimary
                            : colors.textSecondary,
                        textDecoration: "none",
                        transition: "color 0.15s ease",
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

        {/* Copyright */}
        <div
          style={{
            maxWidth: 1100,
            margin: "48px auto 0",
            paddingTop: 24,
            borderTop: `1px solid ${colors.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: colors.textMuted,
              margin: 0,
            }}
          >
            &copy; 2026 Stackpulse, Inc. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Twitter", "GitHub", "Discord"].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  fontSize: 13,
                  color: colors.textMuted,
                  textDecoration: "none",
                }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
