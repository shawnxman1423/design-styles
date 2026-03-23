"use client";

import React, { useState, CSSProperties } from "react";

/* ─── pixel-art palette ─── */
const P = {
  black: "#1a1a2e",
  darkPurple: "#16213e",
  midPurple: "#0f3460",
  accent: "#e94560",
  accentHover: "#ff6b81",
  yellow: "#f5c518",
  green: "#00e676",
  cyan: "#00e5ff",
  white: "#eaeaea",
  offWhite: "#d4d4d4",
  bg: "#0a0a1a",
  cardBg: "#12122a",
  borderColor: "#2a2a4a",
};

const PIXEL_FONT =
  '"Press Start 2P", "Courier New", Courier, monospace';
const BODY_FONT =
  '"Courier New", Courier, monospace';

/* ─── shared pixel border util ─── */
const pixelBorder = (color = P.accent): string =>
  `4px solid ${color}`;

const pixelShadow = (color = P.accent): string =>
  `4px 4px 0px ${color}`;

/* ─── shared styles ─── */
const sectionBase: CSSProperties = {
  padding: "80px 24px",
  maxWidth: 1120,
  margin: "0 auto",
};

const headingStyle: CSSProperties = {
  fontFamily: PIXEL_FONT,
  fontSize: 14,
  letterSpacing: 2,
  color: P.yellow,
  textTransform: "uppercase" as const,
  marginBottom: 12,
};

const subheadingStyle: CSSProperties = {
  fontFamily: BODY_FONT,
  fontSize: 16,
  color: P.offWhite,
  lineHeight: 1.6,
};

/* ─── tiny reusable button ─── */
function PixelButton({
  children,
  primary = false,
  highlight = false,
  style,
}: {
  children: React.ReactNode;
  primary?: boolean;
  highlight?: boolean;
  style?: CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  const bg = highlight
    ? P.yellow
    : primary
      ? P.accent
      : "transparent";
  const hoverBg = highlight
    ? "#ffe066"
    : primary
      ? P.accentHover
      : "rgba(233,69,96,0.15)";
  const textColor = highlight ? P.black : primary ? P.white : P.accent;

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: PIXEL_FONT,
        fontSize: 10,
        padding: "14px 28px",
        border: pixelBorder(highlight ? P.yellow : P.accent),
        background: hovered ? hoverBg : bg,
        color: textColor,
        cursor: "pointer",
        boxShadow: pixelShadow(highlight ? "#b8960f" : "#a3304a"),
        transition: "transform 0.1s, box-shadow 0.1s",
        transform: hovered ? "translate(2px,2px)" : "none",
        ...(hovered && { boxShadow: "none" }),
        textTransform: "uppercase" as const,
        letterSpacing: 1,
        imageRendering: "pixelated" as const,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

/* ═══════════════════════════════════════════
   1. HEADER
   ═══════════════════════════════════════════ */
function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = ["Features", "Pricing", "Docs", "Blog"];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: P.bg,
        borderBottom: `3px solid ${P.borderColor}`,
        padding: "0 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
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
            fontFamily: PIXEL_FONT,
            fontSize: 13,
            color: P.accent,
            letterSpacing: 2,
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: P.yellow }}>&#9650;</span> Stackpulse
        </div>

        {/* Nav links */}
        <nav
          style={{
            display: "flex",
            gap: 32,
          }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onMouseEnter={() => setHoveredLink(l)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontFamily: PIXEL_FONT,
                fontSize: 9,
                color: hoveredLink === l ? P.accent : P.offWhite,
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: 1,
                transition: "color 0.15s",
              }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Sign-up */}
        <PixelButton primary style={{ padding: "10px 20px", fontSize: 8 }}>
          Sign Up
        </PixelButton>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════
   2. HERO
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <section
      style={{
        ...sectionBase,
        textAlign: "center",
        paddingTop: 100,
        paddingBottom: 100,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* scanline overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          pointerEvents: "none",
        }}
      />

      {/* decorative pixel grid dots */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: PIXEL_FONT,
          fontSize: 8,
          color: P.borderColor,
          letterSpacing: 8,
          userSelect: "none",
        }}
      >
        {"+ + + + + + + + + + + + + + +"}
      </div>

      <h1
        style={{
          fontFamily: PIXEL_FONT,
          fontSize: 28,
          color: P.white,
          lineHeight: 1.5,
          marginBottom: 24,
          position: "relative",
        }}
      >
        Ship faster with
        <br />
        <span style={{ color: P.accent }}>pixel-perfect</span>{" "}
        <span style={{ color: P.yellow }}>tools</span>
      </h1>
      <p
        style={{
          ...subheadingStyle,
          maxWidth: 560,
          margin: "0 auto 40px",
          position: "relative",
        }}
      >
        The developer platform that turns ideas into production-grade
        apps — one commit at a time. No bloat, just power-ups.
      </p>

      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        <PixelButton primary>Start Building</PixelButton>
        <PixelButton>View Demo</PixelButton>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   3. LOGOS BAR
   ═══════════════════════════════════════════ */
function LogosBar() {
  const brands = ["Bytecraft", "PixelForge", "Synthwave", "NeonGrid", "BitVault"];

  return (
    <section
      style={{
        borderTop: `3px solid ${P.borderColor}`,
        borderBottom: `3px solid ${P.borderColor}`,
        padding: "40px 24px",
        textAlign: "center",
        background: P.cardBg,
      }}
    >
      <p
        style={{
          fontFamily: PIXEL_FONT,
          fontSize: 8,
          color: P.offWhite,
          textTransform: "uppercase",
          letterSpacing: 2,
          marginBottom: 28,
        }}
      >
        Trusted by 2,000+ makers at
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 48,
          flexWrap: "wrap",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {brands.map((b) => (
          <span
            key={b}
            style={{
              fontFamily: PIXEL_FONT,
              fontSize: 11,
              color: P.midPurple,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   4. FEATURES
   ═══════════════════════════════════════════ */
function Features() {
  const cards = [
    {
      icon: "[ ^ ]",
      title: "Instant Deploy",
      desc: "Push to main and watch your app go live in under 8 seconds. Zero-config, zero drama.",
    },
    {
      icon: "[ # ]",
      title: "Real-time Logs",
      desc: "Stream every request, error, and metric to a single dashboard — no third-party glue needed.",
    },
    {
      icon: "[ * ]",
      title: "Edge Functions",
      desc: "Run server-side logic at 300+ edge locations worldwide. Low latency by default.",
    },
  ];

  return (
    <section id="features" style={{ ...sectionBase }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <p style={headingStyle}>&#9632; Features</p>
        <h2
          style={{
            fontFamily: PIXEL_FONT,
            fontSize: 18,
            color: P.white,
            lineHeight: 1.6,
          }}
        >
          Power-ups for your stack
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {cards.map((c) => (
          <FeatureCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: P.cardBg,
        border: pixelBorder(hovered ? P.accent : P.borderColor),
        boxShadow: hovered ? pixelShadow() : pixelShadow(P.borderColor),
        padding: 32,
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
    >
      <div
        style={{
          fontFamily: PIXEL_FONT,
          fontSize: 16,
          color: P.cyan,
          marginBottom: 20,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: PIXEL_FONT,
          fontSize: 11,
          color: P.white,
          marginBottom: 12,
        }}
      >
        {title}
      </h3>
      <p style={{ ...subheadingStyle, fontSize: 14 }}>{desc}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════
   5. TESTIMONIALS
   ═══════════════════════════════════════════ */
function Testimonials() {
  const quotes = [
    {
      text: "Stackpulse cut our deploy time from 12 minutes to 8 seconds. Not even exaggerating.",
      name: "Ada Lovelace",
      role: "CTO, Bytecraft",
    },
    {
      text: "The edge functions alone saved us $4k/mo in infra. The DX is unmatched.",
      name: "Koji Tanaka",
      role: "Lead Dev, NeonGrid",
    },
    {
      text: "I shipped my SaaS MVP in a weekend. Stackpulse made me feel like I had cheat codes on.",
      name: "Priya Sharma",
      role: "Founder, PixelForge",
    },
  ];

  return (
    <section
      style={{
        ...sectionBase,
        background: P.cardBg,
        maxWidth: "100%",
        borderTop: `3px solid ${P.borderColor}`,
        borderBottom: `3px solid ${P.borderColor}`,
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={headingStyle}>&#9632; Testimonials</p>
          <h2
            style={{
              fontFamily: PIXEL_FONT,
              fontSize: 18,
              color: P.white,
              lineHeight: 1.6,
            }}
          >
            What makers are saying
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {quotes.map((q) => (
            <QuoteCard key={q.name} {...q} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteCard({
  text,
  name,
  role,
}: {
  text: string;
  name: string;
  role: string;
}) {
  return (
    <div
      style={{
        background: P.bg,
        border: pixelBorder(P.borderColor),
        boxShadow: pixelShadow(P.borderColor),
        padding: 32,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          fontFamily: BODY_FONT,
          fontSize: 15,
          color: P.offWhite,
          lineHeight: 1.7,
          marginBottom: 24,
        }}
      >
        <span style={{ color: P.accent, fontFamily: PIXEL_FONT, fontSize: 18 }}>
          &quot;
        </span>{" "}
        {text}
      </p>
      <div>
        <p
          style={{
            fontFamily: PIXEL_FONT,
            fontSize: 9,
            color: P.yellow,
            marginBottom: 4,
          }}
        >
          {name}
        </p>
        <p style={{ fontFamily: BODY_FONT, fontSize: 13, color: P.offWhite }}>
          {role}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   6. PRICING
   ═══════════════════════════════════════════ */
function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      sub: "forever",
      features: ["1 project", "100 deploys/mo", "Community support", "Basic analytics"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "/mo",
      features: [
        "Unlimited projects",
        "Unlimited deploys",
        "Priority support",
        "Advanced analytics",
        "Custom domains",
      ],
      highlighted: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "/mo",
      features: [
        "Everything in Pro",
        "5 team members",
        "Role-based access",
        "Audit logs",
        "SSO & SAML",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" style={{ ...sectionBase }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <p style={headingStyle}>&#9632; Pricing</p>
        <h2
          style={{
            fontFamily: PIXEL_FONT,
            fontSize: 18,
            color: P.white,
            lineHeight: 1.6,
          }}
        >
          Choose your level
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          alignItems: "start",
        }}
      >
        {tiers.map((t) => (
          <PricingCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}

function PricingCard({
  name,
  price,
  sub,
  features,
  highlighted,
}: {
  name: string;
  price: string;
  sub: string;
  features: string[];
  highlighted: boolean;
}) {
  const borderCol = highlighted ? P.yellow : P.borderColor;

  return (
    <div
      style={{
        background: highlighted ? "#1a1a3a" : P.cardBg,
        border: pixelBorder(borderCol),
        boxShadow: highlighted
          ? `6px 6px 0px ${P.yellow}`
          : pixelShadow(P.borderColor),
        padding: 36,
        position: "relative",
      }}
    >
      {highlighted && (
        <div
          style={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: PIXEL_FONT,
            fontSize: 7,
            background: P.yellow,
            color: P.black,
            padding: "4px 14px",
            textTransform: "uppercase",
            letterSpacing: 1,
            border: `2px solid ${P.yellow}`,
          }}
        >
          Most Popular
        </div>
      )}

      <p
        style={{
          fontFamily: PIXEL_FONT,
          fontSize: 10,
          color: highlighted ? P.yellow : P.accent,
          textTransform: "uppercase",
          letterSpacing: 2,
          marginBottom: 16,
        }}
      >
        {name}
      </p>

      <div style={{ marginBottom: 24 }}>
        <span
          style={{
            fontFamily: PIXEL_FONT,
            fontSize: 28,
            color: P.white,
          }}
        >
          {price}
        </span>
        <span
          style={{
            fontFamily: BODY_FONT,
            fontSize: 14,
            color: P.offWhite,
            marginLeft: 4,
          }}
        >
          {sub}
        </span>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
        {features.map((f) => (
          <li
            key={f}
            style={{
              fontFamily: BODY_FONT,
              fontSize: 14,
              color: P.offWhite,
              padding: "8px 0",
              borderBottom: `1px dashed ${P.borderColor}`,
            }}
          >
            <span style={{ color: P.green, marginRight: 8, fontFamily: PIXEL_FONT, fontSize: 8 }}>
              +
            </span>
            {f}
          </li>
        ))}
      </ul>

      <PixelButton
        primary={!highlighted}
        highlight={highlighted}
        style={{ width: "100%", textAlign: "center" }}
      >
        {highlighted ? "Get Pro" : `Get ${name}`}
      </PixelButton>
    </div>
  );
}

/* ═══════════════════════════════════════════
   7. CTA
   ═══════════════════════════════════════════ */
function CtaSection() {
  return (
    <section
      style={{
        borderTop: `3px solid ${P.borderColor}`,
        borderBottom: `3px solid ${P.borderColor}`,
        background: `linear-gradient(135deg, ${P.darkPurple}, ${P.bg})`,
        padding: "80px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* scanline overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
          pointerEvents: "none",
        }}
      />

      <h2
        style={{
          fontFamily: PIXEL_FONT,
          fontSize: 20,
          color: P.white,
          lineHeight: 1.6,
          marginBottom: 16,
          position: "relative",
        }}
      >
        Ready to <span style={{ color: P.accent }}>level up</span>?
      </h2>
      <p
        style={{
          ...subheadingStyle,
          maxWidth: 480,
          margin: "0 auto 36px",
          position: "relative",
        }}
      >
        Join thousands of developers shipping faster with Stackpulse.
      </p>
      <div style={{ position: "relative" }}>
        <PixelButton highlight>Start Free &rarr;</PixelButton>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   8. FOOTER
   ═══════════════════════════════════════════ */
function Footer() {
  const columns: { heading: string; links: string[] }[] = [
    { heading: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { heading: "Legal", links: ["Privacy", "Terms", "Security"] },
  ];

  return (
    <footer
      style={{
        background: P.bg,
        borderTop: `3px solid ${P.borderColor}`,
        padding: "64px 24px 32px",
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
        {/* Logo + tagline */}
        <div style={{ minWidth: 200, maxWidth: 280 }}>
          <div
            style={{
              fontFamily: PIXEL_FONT,
              fontSize: 12,
              color: P.accent,
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            <span style={{ color: P.yellow }}>&#9650;</span> Stackpulse
          </div>
          <p
            style={{
              fontFamily: BODY_FONT,
              fontSize: 13,
              color: P.offWhite,
              lineHeight: 1.6,
            }}
          >
            Ship fast. Stay pixel-perfect.
          </p>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.heading}>
            <p
              style={{
                fontFamily: PIXEL_FONT,
                fontSize: 8,
                color: P.yellow,
                textTransform: "uppercase",
                letterSpacing: 2,
                marginBottom: 16,
              }}
            >
              {col.heading}
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {col.links.map((link) => (
                <li key={link} style={{ marginBottom: 10 }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: BODY_FONT,
                      fontSize: 13,
                      color: P.offWhite,
                      textDecoration: "none",
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
          maxWidth: 1120,
          margin: "48px auto 0",
          borderTop: `2px dashed ${P.borderColor}`,
          paddingTop: 24,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: PIXEL_FONT,
            fontSize: 7,
            color: P.borderColor,
            letterSpacing: 1,
          }}
        >
          &copy; 2026 Stackpulse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════ */
export function RetroPixelArtLanding() {
  return (
    <div
      style={{
        background: P.bg,
        color: P.white,
        minHeight: "100vh",
        imageRendering: "auto",
      }}
    >
      {/* Google Fonts fallback hint — loads pixel font if available */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');`}</style>

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
