"use client";

import React, { CSSProperties } from "react";

export function NeobrutalismLanding() {
  const section = (extra: CSSProperties): CSSProperties => ({
    width: "100%",
    padding: "64px 24px",
    boxSizing: "border-box" as const,
    borderRadius: 0,
    ...extra,
  });

  const heading = (extra: CSSProperties = {}): CSSProperties => ({
    fontSize: 36,
    fontWeight: 900,
    textAlign: "center" as const,
    margin: "0 0 12px",
    borderRadius: 0,
    ...extra,
  });

  const card = (bg: string, shadow = "4px 4px 0 #000"): CSSProperties => ({
    background: bg,
    border: "3px solid #000",
    boxShadow: shadow,
    borderRadius: 0,
    padding: 28,
    boxSizing: "border-box" as const,
  });

  const grid3: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
    maxWidth: 1060,
    margin: "0 auto",
    width: "100%",
  };

  const btnBase: CSSProperties = {
    border: "3px solid #000",
    borderRadius: 0,
    fontWeight: 800,
    fontSize: 16,
    cursor: "pointer",
    padding: "14px 28px",
    boxSizing: "border-box" as const,
  };

  return (
    <div style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", color: "#000", borderRadius: 0, margin: 0, padding: 0, minHeight: "100vh" }}>

      {/* 1. HEADER */}
      <header
        style={{
          background: "#fff",
          borderBottom: "3px solid #000",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          height: 64,
          borderRadius: 0,
        }}
      >
        <span style={{ fontWeight: 900, fontSize: 20, whiteSpace: "nowrap" }}>&#9650; Stackpulse</span>
        <nav style={{ display: "flex", gap: 28 }}>
          {["Features", "Pricing", "Testimonials"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ textDecoration: "none", color: "#000", fontWeight: 700, fontSize: 15 }}>{l}</a>
          ))}
        </nav>
        <button
          style={{
            ...btnBase,
            background: "#000",
            color: "#fff",
            padding: "8px 20px",
            boxShadow: "none",
          }}
        >
          Sign Up
        </button>
      </header>

      {/* 2. HERO */}
      <section
        style={section({
          background: "#ffe156",
          textAlign: "center",
          padding: "80px 24px",
        })}
      >
        <h1 style={{ fontSize: 56, fontWeight: 900, margin: "0 0 16px", lineHeight: 1.1, borderRadius: 0 }}>
          Ship faster.<br />Break nothing.
        </h1>
        <p style={{ fontSize: 18, margin: "0 0 36px", maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
          Stackpulse gives your team real-time observability, instant deploys, and zero-config CI — so you can move fast without the mess.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            style={{
              ...btnBase,
              background: "#ff6b6b",
              color: "#000",
              boxShadow: "6px 6px 0 #000",
            }}
          >
            Get Started Free
          </button>
          <button
            style={{
              ...btnBase,
              background: "#fff",
              color: "#000",
              boxShadow: "6px 6px 0 #000",
            }}
          >
            See a Demo
          </button>
        </div>
      </section>

      {/* 3. LOGOS BAR */}
      <section
        style={section({
          background: "#fff",
          borderTop: "3px solid #000",
          borderBottom: "3px solid #000",
          textAlign: "center",
          padding: "36px 24px",
        })}
      >
        <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: 2, margin: "0 0 20px", color: "#000" }}>
          Trusted by 2,000+ makers at
        </p>
        <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
          {["Vercel", "Stripe", "Supabase", "Railway", "Resend"].map((b) => (
            <span key={b} style={{ fontWeight: 900, fontSize: 20, opacity: 0.45 }}>{b}</span>
          ))}
        </div>
      </section>

      {/* 4. FEATURES */}
      <section id="features" style={section({ background: "#ffe156" })}>
        <h2 style={heading()}>Everything you need to ship</h2>
        <p style={{ textAlign: "center" as const, margin: "0 auto 40px", maxWidth: 480, fontSize: 16 }}>
          Powerful primitives, zero configuration headaches.
        </p>
        <div style={grid3}>
          {[
            { title: "Instant Deploys", desc: "Push to main and your changes are live in under 8 seconds. No build queues, no waiting." },
            { title: "Real-time Logs", desc: "Stream structured logs from every service in one unified dashboard. Filter, search, alert." },
            { title: "Zero-config CI", desc: "Tests run automatically on every PR. Parallel execution, smart caching, fast feedback loops." },
          ].map((f) => (
            <div key={f.title} style={card("#fff")}>
              <h3 style={{ fontWeight: 900, fontSize: 20, margin: "0 0 10px", borderRadius: 0 }}>{f.title}</h3>
              <p style={{ fontSize: 14, margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section
        id="testimonials"
        style={section({
          background: "#fff",
          borderTop: "3px solid #000",
          borderBottom: "3px solid #000",
        })}
      >
        <h2 style={heading()}>What people are saying</h2>
        <p style={{ textAlign: "center" as const, margin: "0 auto 40px", maxWidth: 480, fontSize: 16 }}>
          Don&apos;t take our word for it — hear from the builders.
        </p>
        <div style={grid3}>
          {[
            { quote: "Stackpulse replaced three tools in our stack overnight. Deploys went from 4 minutes to 8 seconds.", name: "Ava Chen", role: "CTO, Luminary" },
            { quote: "The logging alone is worth it. We caught a critical bug within minutes of going live. Absolute game-changer.", name: "Marcus Webb", role: "Lead Engineer, Cobalt" },
            { quote: "Our team shipped 40% more features last quarter after switching. The CI just works — no babysitting.", name: "Priya Desai", role: "VP Eng, Orbit" },
          ].map((t) => (
            <div key={t.name} style={card("#ffe156")}>
              <p style={{ fontStyle: "italic", fontSize: 15, lineHeight: 1.6, margin: "0 0 16px" }}>&ldquo;{t.quote}&rdquo;</p>
              <p style={{ fontWeight: 800, fontSize: 14, margin: 0 }}>{t.name}</p>
              <p style={{ fontSize: 13, margin: "2px 0 0", fontWeight: 600 }}>{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PRICING */}
      <section id="pricing" style={section({ background: "#ffe156" })}>
        <h2 style={heading()}>Simple, honest pricing</h2>
        <p style={{ textAlign: "center" as const, margin: "0 auto 40px", maxWidth: 480, fontSize: 16 }}>
          No hidden fees. No per-seat surprises. Cancel anytime.
        </p>
        <div style={grid3}>
          {[
            {
              plan: "Starter",
              price: "Free",
              features: ["1 project", "500 deploys/mo", "Community support", "Basic logs"],
              highlight: false,
              cta: "Get Started",
            },
            {
              plan: "Pro",
              price: "$29/mo",
              features: ["Unlimited projects", "Unlimited deploys", "Priority support", "Advanced logs", "Custom domains"],
              highlight: true,
              cta: "Start Pro Trial",
            },
            {
              plan: "Team",
              price: "$79/mo",
              features: ["Everything in Pro", "Team roles & permissions", "SSO / SAML", "Audit logs", "SLA guarantee"],
              highlight: false,
              cta: "Contact Sales",
            },
          ].map((p) => (
            <div
              key={p.plan}
              style={{
                ...card(p.highlight ? "#ff6b6b" : "#fff", "6px 6px 0 #000"),
                display: "flex",
                flexDirection: "column" as const,
              }}
            >
              <p style={{ fontWeight: 900, fontSize: 18, margin: "0 0 4px", textTransform: "uppercase" as const, letterSpacing: 1 }}>{p.plan}</p>
              <p style={{ fontWeight: 900, fontSize: 40, margin: "0 0 20px" }}>{p.price}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", flex: 1 }}>
                {p.features.map((f) => (
                  <li key={f} style={{ fontSize: 14, padding: "6px 0", fontWeight: 600 }}>&#10003; {f}</li>
                ))}
              </ul>
              <button
                style={{
                  ...btnBase,
                  width: "100%",
                  background: p.highlight ? "#000" : "#ffe156",
                  color: p.highlight ? "#fff" : "#000",
                  boxShadow: "4px 4px 0 #000",
                }}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA */}
      <section
        style={section({
          background: "#000",
          textAlign: "center",
          padding: "80px 24px",
        })}
      >
        <h2 style={{ fontSize: 40, fontWeight: 900, color: "#ffe156", margin: "0 0 14px", borderRadius: 0 }}>
          Ready to ship?
        </h2>
        <p style={{ color: "#fff", opacity: 0.65, fontSize: 17, margin: "0 0 36px", maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>
          Join thousands of developers who deploy with confidence every single day.
        </p>
        <button
          style={{
            ...btnBase,
            background: "#ffe156",
            color: "#000",
            boxShadow: "6px 6px 0 #ffe156",
            border: "3px solid #ffe156",
          }}
        >
          Start Building Now
        </button>
      </section>

      {/* 8. FOOTER */}
      <footer
        style={section({
          background: "#fff",
          borderTop: "3px solid #000",
          padding: "48px 32px 24px",
        })}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap" as const,
            gap: 40,
            maxWidth: 1060,
            margin: "0 auto",
          }}
        >
          <div style={{ minWidth: 200 }}>
            <p style={{ fontWeight: 900, fontSize: 20, margin: "0 0 8px" }}>&#9650; Stackpulse</p>
            <p style={{ fontSize: 14, margin: 0, lineHeight: 1.6 }}>Ship faster. Break nothing.<br />Observability for modern teams.</p>
          </div>

          {[
            { title: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
          ].map((col) => (
            <div key={col.title} style={{ minWidth: 120 }}>
              <p style={{ fontWeight: 900, fontSize: 14, margin: "0 0 12px", textTransform: "uppercase" as const, letterSpacing: 1 }}>{col.title}</p>
              {col.links.map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "#000",
                    fontSize: 14,
                    padding: "4px 0",
                    fontWeight: 600,
                  }}
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "2px solid #000",
            marginTop: 40,
            paddingTop: 20,
            maxWidth: 1060,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p style={{ fontSize: 13, margin: 0, fontWeight: 600 }}>&copy; 2026 Stackpulse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
