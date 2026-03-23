"use client";

import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Supabase-style landing page                                        */
/*  Dark background (#1C1C1C), emerald-green accents (#3ECF8E),        */
/*  clean type, generous whitespace.                                   */
/* ------------------------------------------------------------------ */

const c = {
  bg: "#1C1C1C",
  bgCard: "#242424",
  bgCardHover: "#2A2A2A",
  border: "#333",
  green: "#3ECF8E",
  greenDark: "#2EA872",
  greenFaint: "rgba(62,207,142,0.08)",
  text: "#EDEDED",
  textMuted: "#8F8F8F",
  white: "#fff",
};

const font =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

/* ---------- tiny helpers ---------- */

const sectionPad: React.CSSProperties = {
  padding: "96px 24px",
  maxWidth: 1200,
  margin: "0 auto",
};

const badge = (highlight: boolean): React.CSSProperties => ({
  display: "inline-block",
  padding: "4px 12px",
  borderRadius: 9999,
  fontSize: 12,
  fontWeight: 600,
  marginBottom: 12,
  background: highlight ? c.green : c.greenFaint,
  color: highlight ? c.bg : c.green,
});

/* ================================================================== */
/*  COMPONENT                                                          */
/* ================================================================== */

export function SupabaseLanding() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div style={{ background: c.bg, color: c.text, fontFamily: font, minHeight: "100vh" }}>
      {/* ---------------------------------------------------------- */}
      {/* 1. HEADER                                                   */}
      {/* ---------------------------------------------------------- */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(28,28,28,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${c.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* logo */}
          <a href="#" style={{ color: c.white, fontWeight: 700, fontSize: 18, textDecoration: "none", letterSpacing: "-0.02em" }}>
            ▲ Stackpulse
          </a>

          {/* nav — center */}
          <nav
            style={{
              display: "flex",
              gap: 32,
              alignItems: "center",
            }}
            className="supabase-desktop-nav"
          >
            {["Product", "Developers", "Pricing", "Blog", "Docs"].map((l) => (
              <a
                key={l}
                href="#"
                style={{ color: c.textMuted, textDecoration: "none", fontSize: 14, transition: "color .15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = c.white)}
                onMouseLeave={(e) => (e.currentTarget.style.color = c.textMuted)}
              >
                {l}
              </a>
            ))}
          </nav>

          {/* sign-up */}
          <a
            href="#"
            style={{
              background: c.green,
              color: c.bg,
              fontWeight: 600,
              fontSize: 14,
              padding: "8px 20px",
              borderRadius: 6,
              textDecoration: "none",
              transition: "background .15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = c.greenDark)}
            onMouseLeave={(e) => (e.currentTarget.style.background = c.green)}
          >
            Start your project
          </a>
        </div>
      </header>

      {/* ---------------------------------------------------------- */}
      {/* 2. HERO                                                     */}
      {/* ---------------------------------------------------------- */}
      <section style={{ ...sectionPad, textAlign: "center", paddingTop: 120, paddingBottom: 80 }}>
        <div style={badge(false)}>Now in General Availability</div>
        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.04em",
            margin: "16px auto 24px",
            maxWidth: 800,
          }}
        >
          Build in a weekend.{" "}
          <span style={{ color: c.green }}>Scale to millions.</span>
        </h1>
        <p style={{ fontSize: 18, color: c.textMuted, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.6 }}>
          Stackpulse is an open-source backend platform. Start your project with a
          Postgres database, Authentication, instant APIs, Edge Functions, and
          Realtime subscriptions.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#"
            style={{
              background: c.green,
              color: c.bg,
              fontWeight: 600,
              fontSize: 15,
              padding: "12px 28px",
              borderRadius: 6,
              textDecoration: "none",
              transition: "background .15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = c.greenDark)}
            onMouseLeave={(e) => (e.currentTarget.style.background = c.green)}
          >
            Start your project
          </a>
          <a
            href="#"
            style={{
              background: "transparent",
              color: c.text,
              fontWeight: 600,
              fontSize: 15,
              padding: "12px 28px",
              borderRadius: 6,
              textDecoration: "none",
              border: `1px solid ${c.border}`,
              transition: "border-color .15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = c.textMuted)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = c.border)}
          >
            Request a demo
          </a>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 3. LOGOS BAR                                                */}
      {/* ---------------------------------------------------------- */}
      <section style={{ borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, padding: "40px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          <span style={{ color: c.textMuted, fontSize: 14, whiteSpace: "nowrap" }}>
            Trusted by 2,000+ makers at
          </span>
          {["Vercel", "Mozilla", "1Password", "Peerlist", "Humata"].map((b) => (
            <span key={b} style={{ color: c.textMuted, fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em", opacity: 0.6 }}>
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 4. FEATURES                                                 */}
      {/* ---------------------------------------------------------- */}
      <section style={sectionPad}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={badge(false)}>Features</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", margin: "12px 0 16px" }}>
            Everything you need to ship fast
          </h2>
          <p style={{ color: c.textMuted, fontSize: 16, maxWidth: 540, margin: "0 auto", lineHeight: 1.6 }}>
            From auth to storage, every backend feature your app needs — all
            integrated and ready to go.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              icon: "🗄",
              title: "Postgres Database",
              desc: "Every project is a full Postgres database with realtime functionality, database backups, and extensions.",
            },
            {
              icon: "🔑",
              title: "Authentication",
              desc: "Add user sign-ups and logins with email, social providers, or phone. Policies keep data secure.",
            },
            {
              icon: "⚡",
              title: "Edge Functions",
              desc: "Deploy custom server-side logic globally at the edge. Write in TypeScript and deploy in seconds.",
            },
          ].map((f) => (
            <div
              key={f.title}
              style={{
                background: c.bgCard,
                border: `1px solid ${c.border}`,
                borderRadius: 12,
                padding: 32,
                transition: "border-color .2s, background .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = c.green;
                e.currentTarget.style.background = c.bgCardHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = c.border;
                e.currentTarget.style.background = c.bgCard;
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, letterSpacing: "-0.01em" }}>
                {f.title}
              </h3>
              <p style={{ color: c.textMuted, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 5. TESTIMONIALS                                             */}
      {/* ---------------------------------------------------------- */}
      <section style={{ ...sectionPad, background: c.bgCard }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={badge(false)}>Testimonials</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", margin: "12px 0 0" }}>
            Loved by developers
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {[
            {
              quote:
                "Stackpulse replaced three services in our stack. We shipped our MVP in a weekend and haven't looked back.",
              name: "Priya Sharma",
              role: "CTO, NovaBuild",
            },
            {
              quote:
                "The developer experience is unreal. Row-level security plus edge functions let us move incredibly fast.",
              name: "Marcus Lee",
              role: "Lead Engineer, Tidepool",
            },
            {
              quote:
                "We migrated from Firebase in two days. The Postgres foundation gives us flexibility we never had before.",
              name: "Elena Voss",
              role: "Founder, Kitestring",
            },
          ].map((t) => (
            <div
              key={t.name}
              style={{
                background: c.bg,
                border: `1px solid ${c.border}`,
                borderRadius: 12,
                padding: 32,
              }}
            >
              <p style={{ fontSize: 15, lineHeight: 1.7, color: c.text, margin: "0 0 24px", fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                <div style={{ color: c.textMuted, fontSize: 13, marginTop: 2 }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 6. PRICING                                                  */}
      {/* ---------------------------------------------------------- */}
      <section style={sectionPad}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={badge(false)}>Pricing</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", margin: "12px 0 16px" }}>
            Predictable pricing, no surprises
          </h2>
          <p style={{ color: c.textMuted, fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            Start free, scale as you grow. Every plan includes core platform
            features.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          {([
            {
              name: "Starter",
              price: "Free",
              sub: "forever",
              features: [
                "Unlimited API requests",
                "50,000 monthly active users",
                "500 MB database space",
                "1 GB file storage",
                "Community support",
              ],
              cta: "Get Started",
              highlight: false,
            },
            {
              name: "Pro",
              price: "$29",
              sub: "/month",
              features: [
                "Everything in Starter, plus:",
                "100,000 monthly active users",
                "8 GB database space",
                "100 GB file storage",
                "Email support",
                "Daily backups",
              ],
              cta: "Get Started",
              highlight: true,
            },
            {
              name: "Team",
              price: "$79",
              sub: "/month",
              features: [
                "Everything in Pro, plus:",
                "Unlimited active users",
                "50 GB database space",
                "Unlimited file storage",
                "Priority support",
                "SOC 2 compliance",
                "SSO / SAML",
              ],
              cta: "Contact Us",
              highlight: false,
            },
          ] as const).map((tier) => (
            <div
              key={tier.name}
              style={{
                background: tier.highlight ? c.greenFaint : c.bgCard,
                border: `1px solid ${tier.highlight ? c.green : c.border}`,
                borderRadius: 12,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {tier.highlight && (
                <span style={badge(true)}>Most Popular</span>
              )}
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{tier.name}</h3>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em" }}>{tier.price}</span>
                <span style={{ color: c.textMuted, fontSize: 14, marginLeft: 4 }}>{tier.sub}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", flex: 1 }}>
                {tier.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: 14,
                      color: c.textMuted,
                      padding: "6px 0",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: c.green, fontSize: 14 }}>&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "12px 0",
                  borderRadius: 6,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                  transition: "background .15s",
                  background: tier.highlight ? c.green : "transparent",
                  color: tier.highlight ? c.bg : c.text,
                  border: tier.highlight ? "none" : `1px solid ${c.border}`,
                }}
                onMouseEnter={(e) => {
                  if (tier.highlight) {
                    e.currentTarget.style.background = c.greenDark;
                  } else {
                    e.currentTarget.style.borderColor = c.textMuted;
                  }
                }}
                onMouseLeave={(e) => {
                  if (tier.highlight) {
                    e.currentTarget.style.background = c.green;
                  } else {
                    e.currentTarget.style.borderColor = c.border;
                  }
                }}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 7. CTA                                                      */}
      {/* ---------------------------------------------------------- */}
      <section
        style={{
          background: `linear-gradient(135deg, ${c.greenFaint}, transparent 60%)`,
          borderTop: `1px solid ${c.border}`,
          borderBottom: `1px solid ${c.border}`,
        }}
      >
        <div style={{ ...sectionPad, textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
            Ready to build the next big thing?
          </h2>
          <p style={{ color: c.textMuted, fontSize: 16, maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Join thousands of developers shipping faster with Stackpulse.
          </p>
          <a
            href="#"
            style={{
              display: "inline-block",
              background: c.green,
              color: c.bg,
              fontWeight: 600,
              fontSize: 15,
              padding: "14px 36px",
              borderRadius: 6,
              textDecoration: "none",
              transition: "background .15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = c.greenDark)}
            onMouseLeave={(e) => (e.currentTarget.style.background = c.green)}
          >
            Start your project — it&rsquo;s free
          </a>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 8. FOOTER                                                   */}
      {/* ---------------------------------------------------------- */}
      <footer style={{ borderTop: `1px solid ${c.border}` }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "64px 24px 40px",
            display: "grid",
            gridTemplateColumns: "1.4fr repeat(3, 1fr)",
            gap: 48,
          }}
        >
          {/* brand */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>▲ Stackpulse</div>
            <p style={{ color: c.textMuted, fontSize: 14, lineHeight: 1.6, maxWidth: 240, margin: 0 }}>
              The open-source backend platform. Build, deploy, and scale modern
              applications without breaking a sweat.
            </p>
          </div>

          {/* link columns */}
          {([
            {
              heading: "Product",
              links: ["Database", "Auth", "Storage", "Edge Functions", "Realtime"],
            },
            {
              heading: "Company",
              links: ["About", "Blog", "Careers", "Customers", "Brand"],
            },
            {
              heading: "Legal",
              links: ["Privacy Policy", "Terms of Service", "DPA", "SLA"],
            },
          ] as const).map((col) => (
            <div key={col.heading}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 16 }}>{col.heading}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{ color: c.textMuted, textDecoration: "none", fontSize: 14, transition: "color .15s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = c.white)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = c.textMuted)}
                    >
                      {link}
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
            maxWidth: 1200,
            margin: "0 auto",
            padding: "24px 24px 32px",
            borderTop: `1px solid ${c.border}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ color: c.textMuted, fontSize: 13 }}>
            &copy; {new Date().getFullYear()} Stackpulse Inc. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Twitter", "GitHub", "Discord"].map((s) => (
              <a
                key={s}
                href="#"
                style={{ color: c.textMuted, textDecoration: "none", fontSize: 13, transition: "color .15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = c.white)}
                onMouseLeave={(e) => (e.currentTarget.style.color = c.textMuted)}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SupabaseLanding;
