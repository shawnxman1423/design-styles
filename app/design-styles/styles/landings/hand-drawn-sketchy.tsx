"use client";

import React, { useState, useEffect, useMemo } from "react";

/* ------------------------------------------------------------------ */
/*  Hand-Drawn / Sketchy Landing Page                                  */
/*  Pure React + inline styles — zero external dependencies            */
/* ------------------------------------------------------------------ */

/* ---------- tiny seeded PRNG so wobble is deterministic per-key ---- */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function wobble(key: string, range = 2) {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) | 0;
  const r = seeded(Math.abs(h));
  return {
    rotate: `${(r() - 0.5) * range}deg`,
    translateX: `${(r() - 0.5) * range}px`,
    translateY: `${(r() - 0.5) * range}px`,
  };
}

/* ---------- SVG filter for a rough / sketchy edge feel ------------- */
function SketchFilter() {
  return (
    <svg style={{ position: "absolute", width: 0, height: 0 }}>
      <defs>
        <filter id="sketchy">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.03"
            numOctaves="4"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="3"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="sketchyLight">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.04"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="1.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

/* ---------- reusable "sketchy border" box via inset box-shadow ------ */
function sketchyBorder(color = "#2d2d2d", width = 2): React.CSSProperties {
  return {
    border: "none",
    boxShadow: `
      inset ${width}px ${width}px 0 0 ${color},
      inset -${width}px -${width}px 0 0 ${color},
      inset ${width}px -${width}px 0 0 ${color},
      inset -${width}px ${width}px 0 0 ${color},
      ${width + 1}px ${width + 1}px 0 0 ${color}22
    `,
  };
}

/* ---------- hand-drawn underline SVG ----- */
function HandUnderline({ color = "#f97316", width = 200 }: { color?: string; width?: number }) {
  return (
    <svg
      width={width}
      height="12"
      viewBox={`0 0 ${width} 12`}
      fill="none"
      style={{ display: "block", margin: "0 auto" }}
    >
      <path
        d={`M2 8 Q${width * 0.25} 2, ${width * 0.5} 7 T${width - 2} 5`}
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        style={{ filter: "url(#sketchyLight)" }}
      />
    </svg>
  );
}

/* ---------- hand-drawn circle highlight ----- */
function CircleHighlight({
  children,
  color = "#f97316",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <svg
        viewBox="0 0 200 80"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: "-12%",
          left: "-6%",
          width: "112%",
          height: "124%",
          pointerEvents: "none",
        }}
      >
        <ellipse
          cx="100"
          cy="40"
          rx="94"
          ry="34"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeDasharray="6 4"
          style={{ filter: "url(#sketchyLight)" }}
        />
      </svg>
      {children}
    </span>
  );
}

/* ---------- Sketchy Button ----- */
function SketchyButton({
  children,
  primary = false,
  style = {},
  ...rest
}: {
  children: React.ReactNode;
  primary?: boolean;
  style?: React.CSSProperties;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [hovered, setHovered] = useState(false);
  const w = wobble(typeof children === "string" ? children : "btn", 1.5);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Caveat', 'Patrick Hand', 'Comic Neue', cursive",
        fontSize: "1.1rem",
        fontWeight: 700,
        padding: "12px 28px",
        cursor: "pointer",
        background: primary ? "#2d2d2d" : "transparent",
        color: primary ? "#fffaf3" : "#2d2d2d",
        borderRadius: "4px",
        transform: `rotate(${w.rotate}) translate(${w.translateX}, ${w.translateY}) ${hovered ? "scale(1.06)" : "scale(1)"}`,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        ...sketchyBorder(primary ? "#2d2d2d" : "#2d2d2d", 2),
        ...(hovered
          ? {
              boxShadow: `3px 3px 0 0 ${primary ? "#f97316" : "#2d2d2d"}`,
            }
          : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

/* ---------- Sketchy Card ----- */
function SketchyCard({
  children,
  style = {},
  highlighted = false,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  highlighted?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: highlighted ? "#2d2d2d" : "#fffaf3",
        color: highlighted ? "#fffaf3" : "#2d2d2d",
        borderRadius: "6px",
        padding: "32px 28px",
        position: "relative",
        transform: hovered ? "rotate(-0.5deg) translateY(-4px)" : "rotate(0deg)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        ...sketchyBorder(highlighted ? "#fffaf3" : "#2d2d2d", 2),
        ...(hovered
          ? {
              boxShadow: `5px 5px 0 0 ${highlighted ? "#f97316" : "#2d2d2d44"}`,
            }
          : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ================================================================== */
/*  Main Component                                                     */
/* ================================================================== */

export function HandDrawnSketchyLanding() {
  const [mobileNav, setMobileNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* ---------- palette & fonts ---------- */
  const bg = "#fffaf3";
  const ink = "#2d2d2d";
  const accent = "#f97316";
  const muted = "#8a8070";
  const fontSketch: React.CSSProperties = {
    fontFamily: "'Caveat', 'Patrick Hand', 'Comic Neue', cursive",
  };
  const fontBody: React.CSSProperties = {
    fontFamily: "'Comic Neue', 'Patrick Hand', cursive",
  };

  const container: React.CSSProperties = {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 24px",
    width: "100%",
    boxSizing: "border-box" as const,
  };

  const sectionPad: React.CSSProperties = {
    padding: isMobile ? "56px 0" : "80px 0",
  };

  /* ---------- doodle decorations ---------- */
  const Squiggle = ({ style = {} }: { style?: React.CSSProperties }) => (
    <svg width="120" height="20" viewBox="0 0 120 20" fill="none" style={style}>
      <path
        d="M2 10 Q15 2 30 10 T60 10 T90 10 T118 10"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );

  const StarDoodle = ({ style = {} }: { style?: React.CSSProperties }) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ ...style }}>
      <path d="M14 2 L16 11 L26 14 L16 17 L14 26 L12 17 L2 14 L12 11 Z" stroke={accent} strokeWidth="2" fill="none" />
    </svg>
  );

  /* ================================================================ */
  /*  HEADER                                                           */
  /* ================================================================ */
  const header = (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: bg,
        borderBottom: `2px dashed ${ink}44`,
        ...fontSketch,
      }}
    >
      <div
        style={{
          ...container,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* logo */}
        <div style={{ fontSize: "1.4rem", fontWeight: 700, color: ink, letterSpacing: "-0.5px" }}>
          ▲ Stackpulse
        </div>

        {/* nav — desktop */}
        {!isMobile && (
          <nav style={{ display: "flex", gap: 32 }}>
            {["Features", "Testimonials", "Pricing"].map((l) => {
              const w = wobble(l, 1);
              return (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  style={{
                    color: ink,
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    transform: `rotate(${w.rotate})`,
                    display: "inline-block",
                    borderBottom: `2px dashed transparent`,
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.borderBottomColor = accent)
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.borderBottomColor = "transparent")
                  }
                >
                  {l}
                </a>
              );
            })}
          </nav>
        )}

        {/* sign-up / hamburger */}
        {isMobile ? (
          <button
            onClick={() => setMobileNav(!mobileNav)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.6rem",
              cursor: "pointer",
              color: ink,
              ...fontSketch,
            }}
          >
            {mobileNav ? "✕" : "☰"}
          </button>
        ) : (
          <SketchyButton primary>Sign up</SketchyButton>
        )}
      </div>

      {/* mobile drawer */}
      {isMobile && mobileNav && (
        <div
          style={{
            ...container,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            paddingBottom: 20,
          }}
        >
          {["Features", "Testimonials", "Pricing"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMobileNav(false)}
              style={{ color: ink, textDecoration: "none", fontSize: "1.15rem" }}
            >
              {l}
            </a>
          ))}
          <SketchyButton primary style={{ alignSelf: "flex-start" }}>
            Sign up
          </SketchyButton>
        </div>
      )}
    </header>
  );

  /* ================================================================ */
  /*  HERO                                                             */
  /* ================================================================ */
  const hero = (
    <section style={{ ...sectionPad, textAlign: "center", position: "relative", overflow: "hidden" }}>
      <StarDoodle style={{ position: "absolute", top: 40, left: "8%", opacity: 0.5 }} />
      <StarDoodle style={{ position: "absolute", top: 80, right: "10%", opacity: 0.4 }} />
      <Squiggle style={{ position: "absolute", bottom: 30, left: "15%", opacity: 0.3 }} />

      <div style={container}>
        <h1
          style={{
            ...fontSketch,
            fontSize: isMobile ? "2.6rem" : "4rem",
            lineHeight: 1.15,
            color: ink,
            margin: "0 0 8px",
            fontWeight: 700,
          }}
        >
          Ship products that{" "}
          <CircleHighlight>feel alive</CircleHighlight>
        </h1>
        <HandUnderline width={isMobile ? 200 : 340} />

        <p
          style={{
            ...fontBody,
            fontSize: isMobile ? "1.1rem" : "1.3rem",
            color: muted,
            maxWidth: 560,
            margin: "24px auto 36px",
            lineHeight: 1.6,
          }}
        >
          The developer toolkit that keeps your workflow playful, fast, and
          remarkably productive. Built for makers who sketch before they ship.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <SketchyButton primary>Get started free →</SketchyButton>
          <SketchyButton>See how it works</SketchyButton>
        </div>
      </div>
    </section>
  );

  /* ================================================================ */
  /*  LOGOS BAR                                                        */
  /* ================================================================ */
  const logos = (
    <section style={{ padding: "40px 0", borderTop: `2px dashed ${ink}22`, borderBottom: `2px dashed ${ink}22` }}>
      <div style={{ ...container, textAlign: "center" }}>
        <p style={{ ...fontBody, color: muted, fontSize: "0.95rem", marginBottom: 20 }}>
          Trusted by 2,000+ makers at
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: isMobile ? 24 : 48,
            flexWrap: "wrap",
            ...fontSketch,
            fontSize: isMobile ? "1.2rem" : "1.4rem",
            color: `${ink}88`,
          }}
        >
          {["Vercel", "Linear", "Raycast", "Framer", "Resend"].map((b) => {
            const w = wobble(b, 2);
            return (
              <span
                key={b}
                style={{
                  display: "inline-block",
                  transform: `rotate(${w.rotate})`,
                  transition: "color 0.2s",
                }}
              >
                {b}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );

  /* ================================================================ */
  /*  FEATURES                                                         */
  /* ================================================================ */
  const features = [
    {
      icon: "✏️",
      title: "Sketch-first workflow",
      desc: "Rough out ideas with freeform drawing tools that integrate directly into your component tree.",
    },
    {
      icon: "⚡",
      title: "Lightning prototypes",
      desc: "Go from napkin doodle to interactive prototype in minutes, not hours. No boilerplate needed.",
    },
    {
      icon: "🤝",
      title: "Real-time collab",
      desc: "Invite your team to the same canvas. See cursors, comments, and edits as they happen — live.",
    },
  ];

  const featuresSection = (
    <section id="features" style={{ ...sectionPad, position: "relative" }}>
      <StarDoodle style={{ position: "absolute", top: 20, right: "6%", opacity: 0.35 }} />
      <div style={container}>
        <h2
          style={{
            ...fontSketch,
            textAlign: "center",
            fontSize: isMobile ? "2rem" : "2.6rem",
            color: ink,
            marginBottom: 12,
          }}
        >
          Everything you need to create
        </h2>
        <div style={{ width: 120, margin: "0 auto 48px" }}>
          <HandUnderline width={120} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 28,
          }}
        >
          {features.map((f, i) => {
            const w = wobble(f.title, 1.2);
            return (
              <SketchyCard
                key={i}
                style={{ transform: `rotate(${w.rotate})` }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{f.icon}</div>
                <h3
                  style={{
                    ...fontSketch,
                    fontSize: "1.5rem",
                    margin: "0 0 10px",
                    color: ink,
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ ...fontBody, color: muted, lineHeight: 1.6, margin: 0, fontSize: "1rem" }}>
                  {f.desc}
                </p>
              </SketchyCard>
            );
          })}
        </div>
      </div>
    </section>
  );

  /* ================================================================ */
  /*  TESTIMONIALS                                                     */
  /* ================================================================ */
  const testimonials = [
    {
      quote: "Stackpulse changed how our team thinks about prototyping. It's like thinking out loud, but in code.",
      name: "Maya Chen",
      role: "Design Lead, Pixelform",
    },
    {
      quote: "I've never shipped this fast. The sketchy-to-production pipeline is almost magical.",
      name: "Jake Morales",
      role: "Indie Hacker",
    },
    {
      quote: "Our design reviews went from painful slide decks to live, collaborative doodling sessions.",
      name: "Priya Sharma",
      role: "VP Engineering, Loopkit",
    },
  ];

  const testimonialsSection = (
    <section
      id="testimonials"
      style={{
        ...sectionPad,
        background: `${ink}08`,
        borderTop: `2px dashed ${ink}22`,
        borderBottom: `2px dashed ${ink}22`,
      }}
    >
      <div style={container}>
        <h2
          style={{
            ...fontSketch,
            textAlign: "center",
            fontSize: isMobile ? "2rem" : "2.6rem",
            color: ink,
            marginBottom: 12,
          }}
        >
          Loved by makers
        </h2>
        <div style={{ width: 100, margin: "0 auto 48px" }}>
          <HandUnderline width={100} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 28,
          }}
        >
          {testimonials.map((t, i) => {
            const w = wobble(t.name, 1.5);
            return (
              <SketchyCard key={i} style={{ transform: `rotate(${w.rotate})` }}>
                <p
                  style={{
                    ...fontBody,
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: ink,
                    margin: "0 0 20px",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ borderTop: `2px dashed ${ink}22`, paddingTop: 14 }}>
                  <div style={{ ...fontSketch, fontWeight: 700, fontSize: "1.15rem", color: ink }}>
                    {t.name}
                  </div>
                  <div style={{ ...fontBody, color: muted, fontSize: "0.9rem", marginTop: 2 }}>
                    {t.role}
                  </div>
                </div>
              </SketchyCard>
            );
          })}
        </div>
      </div>
    </section>
  );

  /* ================================================================ */
  /*  PRICING                                                          */
  /* ================================================================ */
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      sub: "forever",
      features: ["1 project", "Basic drawing tools", "Community support", "Export to PNG"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      sub: "/month",
      features: [
        "Unlimited projects",
        "Advanced components",
        "Priority support",
        "Export to SVG & code",
        "Version history",
      ],
      highlighted: true,
    },
    {
      name: "Team",
      price: "$79",
      sub: "/month",
      features: [
        "Everything in Pro",
        "5 team members",
        "Real-time collab",
        "Admin dashboard",
        "SSO & audit logs",
      ],
      highlighted: false,
    },
  ];

  const pricingSection = (
    <section id="pricing" style={{ ...sectionPad, position: "relative" }}>
      <Squiggle style={{ position: "absolute", top: 30, left: "5%", opacity: 0.25 }} />
      <div style={container}>
        <h2
          style={{
            ...fontSketch,
            textAlign: "center",
            fontSize: isMobile ? "2rem" : "2.6rem",
            color: ink,
            marginBottom: 12,
          }}
        >
          Simple, honest pricing
        </h2>
        <div style={{ width: 160, margin: "0 auto 48px" }}>
          <HandUnderline width={160} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 28,
            alignItems: "start",
          }}
        >
          {tiers.map((t, i) => {
            const w = wobble(t.name, 1.2);
            return (
              <SketchyCard
                key={i}
                highlighted={t.highlighted}
                style={{
                  transform: `rotate(${w.rotate})`,
                  ...(t.highlighted ? { padding: "40px 28px" } : {}),
                }}
              >
                {t.highlighted && (
                  <div
                    style={{
                      ...fontSketch,
                      background: accent,
                      color: "#fff",
                      display: "inline-block",
                      padding: "4px 14px",
                      borderRadius: 4,
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      marginBottom: 14,
                      transform: "rotate(-2deg)",
                    }}
                  >
                    Most popular
                  </div>
                )}
                <h3
                  style={{
                    ...fontSketch,
                    fontSize: "1.5rem",
                    margin: "0 0 6px",
                  }}
                >
                  {t.name}
                </h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 20 }}>
                  <span style={{ ...fontSketch, fontSize: "2.4rem", fontWeight: 700 }}>
                    {t.price}
                  </span>
                  <span style={{ ...fontBody, fontSize: "1rem", color: t.highlighted ? "#fffaf3aa" : muted }}>
                    {t.sub}
                  </span>
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 28px",
                    ...fontBody,
                    fontSize: "0.95rem",
                    lineHeight: 2,
                  }}
                >
                  {t.features.map((f) => (
                    <li key={f}>
                      <span style={{ marginRight: 8, color: t.highlighted ? accent : accent }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <SketchyButton
                  primary={t.highlighted}
                  style={{
                    width: "100%",
                    ...(t.highlighted
                      ? {
                          background: accent,
                          color: "#fff",
                          ...sketchyBorder("#fff", 2),
                        }
                      : {}),
                  }}
                >
                  {t.price === "Free" ? "Start free" : "Get started"}
                </SketchyButton>
              </SketchyCard>
            );
          })}
        </div>
      </div>
    </section>
  );

  /* ================================================================ */
  /*  CTA                                                              */
  /* ================================================================ */
  const ctaSection = (
    <section
      style={{
        ...sectionPad,
        background: ink,
        color: bg,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        borderTop: `3px dashed ${accent}44`,
        borderBottom: `3px dashed ${accent}44`,
      }}
    >
      <StarDoodle style={{ position: "absolute", top: 28, left: "12%", opacity: 0.25 }} />
      <StarDoodle style={{ position: "absolute", bottom: 28, right: "10%", opacity: 0.2 }} />
      <div style={container}>
        <h2
          style={{
            ...fontSketch,
            fontSize: isMobile ? "2rem" : "2.8rem",
            margin: "0 0 12px",
            color: bg,
          }}
        >
          Ready to sketch your next big idea?
        </h2>
        <Squiggle style={{ margin: "0 auto 28px", opacity: 0.6 }} />
        <p
          style={{
            ...fontBody,
            color: "#fffaf3aa",
            maxWidth: 480,
            margin: "0 auto 36px",
            fontSize: "1.1rem",
            lineHeight: 1.6,
          }}
        >
          Join thousands of makers who build with personality. Free to start, no credit card required.
        </p>
        <SketchyButton
          primary
          style={{
            background: accent,
            color: "#fff",
            fontSize: "1.2rem",
            padding: "14px 36px",
            ...sketchyBorder("#fff", 2),
          }}
        >
          Start creating for free →
        </SketchyButton>
      </div>
    </section>
  );

  /* ================================================================ */
  /*  FOOTER                                                           */
  /* ================================================================ */
  const footerCols: Record<string, string[]> = {
    Product: ["Features", "Pricing", "Changelog", "Integrations"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "Cookies"],
  };

  const footer = (
    <footer style={{ padding: "56px 0 32px", borderTop: `2px dashed ${ink}22` }}>
      <div
        style={{
          ...container,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.4fr repeat(3, 1fr)",
          gap: isMobile ? 36 : 48,
        }}
      >
        {/* logo + tagline */}
        <div>
          <div style={{ ...fontSketch, fontSize: "1.3rem", fontWeight: 700, color: ink, marginBottom: 10 }}>
            ▲ Stackpulse
          </div>
          <p style={{ ...fontBody, color: muted, fontSize: "0.95rem", lineHeight: 1.5, margin: 0 }}>
            The playful developer toolkit<br />
            for makers who think in sketches.
          </p>
        </div>

        {/* link columns */}
        {Object.entries(footerCols).map(([title, links]) => (
          <div key={title}>
            <h4
              style={{
                ...fontSketch,
                fontSize: "1.15rem",
                color: ink,
                margin: "0 0 14px",
                fontWeight: 700,
              }}
            >
              {title}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {links.map((l) => (
                <li key={l} style={{ marginBottom: 8 }}>
                  <a
                    href="#"
                    style={{
                      ...fontBody,
                      color: muted,
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      borderBottom: "1px dashed transparent",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.borderBottomColor = accent;
                      (e.target as HTMLElement).style.color = ink;
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.borderBottomColor = "transparent";
                      (e.target as HTMLElement).style.color = muted;
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

      {/* copyright */}
      <div
        style={{
          ...container,
          marginTop: 40,
          paddingTop: 20,
          borderTop: `2px dashed ${ink}15`,
          textAlign: "center",
          ...fontBody,
          color: muted,
          fontSize: "0.85rem",
        }}
      >
        © {new Date().getFullYear()} Stackpulse. Doodled with care.
      </div>
    </footer>
  );

  /* ================================================================ */
  /*  RENDER                                                           */
  /* ================================================================ */
  return (
    <div
      style={{
        background: bg,
        color: ink,
        minHeight: "100vh",
        position: "relative",
        ...fontBody,
        // Cross-hatch paper background
        backgroundImage: `
          linear-gradient(${ink}08 1px, transparent 1px),
          linear-gradient(90deg, ${ink}08 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
      }}
    >
      {/* Google Fonts for sketch typefaces */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Comic+Neue:wght@400;700&family=Patrick+Hand&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
      `}</style>

      <SketchFilter />
      {header}
      {hero}
      {logos}
      {featuresSection}
      {testimonialsSection}
      {pricingSection}
      {ctaSection}
      {footer}
    </div>
  );
}
