import { useState } from "react";

const NAV_LINKS = ["Home", "About us", "Blogs", "Contact Us", "FAQ"];

const STATS = [
  { value: "82%", label: "Brand Recall Rate", sub: "vs 23% digital ads" },
  { value: "4.8x", label: "ROI Multiplier", sub: "Avg. client results" },
  { value: "2M+", label: "Monthly Impressions", sub: "Across all channels" },
];

const BENEFITS = [
  {
    icon: "🛍️",
    title: "High-Visibility Reach",
    desc: "Your brand travels with shoppers across malls, streets, and homes — seen by hundreds per bag.",
  },
  {
    icon: "📊",
    title: "Real-Time ROI Tracking",
    desc: "Live dashboards show coupon redemptions, impressions, and conversion metrics.",
  },
  {
    icon: "🎯",
    title: "Precision Targeting",
    desc: "Reach hyper-relevant audiences in Fashion, Electronics, Home & Beauty segments.",
  },
];

const SUCCESS_STORIES = [
  {
    brand: "FashionForward",
    result: "3.2x sales uplift in 6 weeks",
    tag: "Fashion",
    color: "#1D9E75",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
  },
  {
    brand: "TechNova",
    result: "42% coupon redemption rate",
    tag: "Electronics",
    color: "#0F6E56",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
  {
    brand: "GlowBeauty",
    result: "5x return on ad spend",
    tag: "Beauty",
    color: "#D85A30",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "CMO, StyleHub",
    quote:
      "Bagvertising transformed how we reach customers. The in-store bag placements drove foot traffic we'd never seen before.",
    initials: "SM",
  },
  {
    name: "Raj Patel",
    role: "Founder, ElectroPlus",
    quote:
      "The targeting precision is unmatched. We reached exactly the shoppers who needed our products.",
    initials: "RP",
  },
  {
    name: "Priya K.",
    role: "Marketing Director, LuxeHome",
    quote:
      "Real-time analytics made all the difference. We optimised our campaign on the fly and doubled conversions.",
    initials: "PK",
  },
];

const FEATURES = [
  { icon: "📍", title: "Geo-targeted Campaigns", desc: "Pin campaigns to specific store zones or cities." },
  { icon: "🤖", title: "AI Creative Optimisation", desc: "Dynamic layouts auto-optimised for each bag format." },
  { icon: "📈", title: "Live Analytics Dashboard", desc: "Real-time redemption and impression data." },
  { icon: "🔗", title: "CRM Integration", desc: "Seamlessly sync data with your existing marketing stack." },
];

const FAQS = [
  {
    q: "How does Bagvertising work?",
    a: "We partner with top retailers to place your branded coupons and ads directly on shopping bags, reaching millions of engaged shoppers every month.",
  },
  {
    q: "What industries do you serve?",
    a: "We specialise in Fashion, Electronics, Home & Decor, and Beauty — but we work with brands across all retail-adjacent verticals.",
  },
  {
    q: "How do I track campaign performance?",
    a: "Our real-time dashboard shows impressions, coupon scans, redemptions, and ROI — updated live throughout your campaign.",
  },
  {
    q: "What is the minimum campaign budget?",
    a: "We offer flexible plans starting from small pilots. Contact us to get a custom quote based on your target reach and duration.",
  },
];



function Hero() {
  return (
    <section style={{
      minHeight: "92vh", display: "flex", alignItems: "center",
      padding: "60px 5% 80px", gap: 60,
      background: "linear-gradient(145deg, #f7fdfb 0%, #ffffff 50%, #f0faf5 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: -120, right: -120, width: 500, height: 500,
        borderRadius: "50%", background: "radial-gradient(circle, #d1f5e8 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ flex: 1, maxWidth: 560 }}>
        <div style={{
          display: "inline-block", background: "#e1f5ee", color: "#0F6E56",
          fontSize: 12, fontWeight: 700, letterSpacing: 1.5,
          padding: "7px 16px", borderRadius: 20, marginBottom: 32,
          border: "1px solid #9FE1CB",
        }}>
          MULTICHANNEL BRAND PARTNERSHIPS
        </div>

        <h1 style={{
          fontFamily: "'Georgia', serif", fontSize: "clamp(48px, 6vw, 76px)",
          lineHeight: 1.08, margin: "0 0 16px", color: "#111827",
        }}>
          Scale Your<br />Reach.
        </h1>
        <h1 style={{
          fontFamily: "'Georgia', serif", fontSize: "clamp(48px, 6vw, 76px)",
          lineHeight: 1.08, margin: "0 0 32px", color: "#1D9E75",
        }}>
          Ignite Your<br />Sales.
        </h1>

        <p style={{
          fontSize: 18, color: "#4B5563", lineHeight: 1.7, maxWidth: 460, marginBottom: 40,
        }}>
          Connect your brand to millions of engaged shoppers. We specialise in accelerating growth for Fashion, Electronics, Home, and Beauty through high-energy editorial content.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <button style={{
            background: "#0F6E56", color: "#fff", border: "none",
            borderRadius: 30, padding: "16px 36px", fontWeight: 700, fontSize: 16,
            cursor: "pointer", letterSpacing: 0.3,
          }}>Get Started Today</button>
          <button style={{
            background: "transparent", color: "#0F6E56",
            border: "2px solid #1D9E75",
            borderRadius: 30, padding: "16px 36px", fontWeight: 700, fontSize: 16,
            cursor: "pointer",
          }}>See Case Studies</button>
        </div>
      </div>

      <div style={{ flex: 1, position: "relative", maxWidth: 580 }}>
        <div style={{
          borderRadius: 24, overflow: "hidden",
          boxShadow: "0 40px 80px rgba(15,110,86,0.15)",
          height: 520,
        }}>
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=80"
            alt="Shopper with branded bags"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div style={{
          position: "absolute", top: 40, left: -60,
          background: "#fff", borderRadius: 16,
          padding: "16px 24px", boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
          display: "flex", alignItems: "center", gap: 16,
          animation: "float 3s ease-in-out infinite",
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: "50%",
            background: "#1D9E75",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20,
          }}>✅</div>
          <div>
            <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 600, letterSpacing: 1 }}>RECENTLY SAVED</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#1e3a5f" }}>$420.00</div>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: 40, right: -30,
          background: "#0F6E56", borderRadius: 16,
          padding: "14px 20px", color: "#fff",
          boxShadow: "0 16px 40px rgba(15,110,86,0.3)",
        }}>
          <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 4 }}>Monthly Impressions</div>
          <div style={{ fontSize: 24, fontWeight: 800 }}>2M+</div>
        </div>
      </div>

      <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }`}</style>
    </section>
  );
}

function ValueProposition() {
  return (
    <section style={{ padding: "100px 5%", background: "#fff" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 44, color: "#111827", margin: "0 0 16px" }}>
          The Value Proposition
        </h2>
        <p style={{ fontSize: 17, color: "#6B7280", maxWidth: 560, margin: "0 auto" }}>
          Why leading brands choose bag advertising over traditional digital channels.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
        {STATS.map((s) => (
          <div key={s.value} style={{
            background: "linear-gradient(135deg, #f7fdfb, #e1f5ee)",
            borderRadius: 20, padding: "40px 32px", textAlign: "center",
            border: "1px solid #9FE1CB",
          }}>
            <div style={{ fontSize: 56, fontWeight: 900, color: "#0F6E56", lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#111827", margin: "12px 0 8px" }}>{s.label}</div>
            <div style={{ fontSize: 14, color: "#6B7280" }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 80, display: "flex", gap: 48, alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: "'Georgia', serif", fontSize: 32, color: "#111827", marginBottom: 16 }}>Audience Demographics</h3>
          <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.8 }}>
            Our retail bag network reaches an affluent, purchase-ready demographic. 68% are between 25–45, with household incomes above $60k. They shop 3–5x per month across our partner stores.
          </p>
          <div style={{ display: "flex", gap: 32, marginTop: 24 }}>
            <div>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#1D9E75" }}>68%</div>
              <div style={{ fontSize: 13, color: "#6B7280" }}>Age 25–45</div>
            </div>
            <div>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#D85A30" }}>82%</div>
              <div style={{ fontSize: 13, color: "#6B7280" }}>Purchase intent</div>
            </div>
          </div>
        </div>
        <div style={{
          flex: 1, background: "#0F6E56", borderRadius: 24,
          padding: "48px 40px", color: "#fff", textAlign: "center",
        }}>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1 }}>4.8x</div>
          <div style={{ fontSize: 20, fontWeight: 600, marginTop: 12, opacity: 0.9 }}>Average ROI</div>
          <div style={{ fontSize: 14, opacity: 0.7, marginTop: 8 }}>Across all partner campaigns</div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section style={{ padding: "100px 5%", background: "#f7fdfb" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 44, color: "#111827", margin: "0 0 16px" }}>
          Benefits of Collaborating
        </h2>
        <p style={{ fontSize: 17, color: "#6B7280" }}>Everything you need to run a powerful, measurable campaign.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
        {BENEFITS.map((b) => (
          <div key={b.title} style={{
            background: "#fff", borderRadius: 20, padding: "40px 32px",
            border: "1px solid #e1f5ee",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(15,110,86,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div style={{ fontSize: 40, marginBottom: 20 }}>{b.icon}</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", marginBottom: 12 }}>{b.title}</h3>
            <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SuccessStories() {
  return (
    <section style={{ padding: "100px 5%", background: "#fff" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 44, color: "#111827", margin: "0 0 16px" }}>
          Success Stories
        </h2>
        <p style={{ fontSize: 17, color: "#6B7280" }}>Real results from brands that scaled with us.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
        {SUCCESS_STORIES.map((s) => (
          <div key={s.brand} style={{
            borderRadius: 20, overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            position: "relative",
          }}>
            <img src={s.img} alt={s.brand} style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }} />
            <div style={{
              position: "absolute", top: 16, left: 16,
              background: s.color, color: "#fff",
              borderRadius: 20, padding: "4px 14px", fontSize: 12, fontWeight: 700,
            }}>{s.tag}</div>
            <div style={{ padding: "24px 24px" }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", marginBottom: 8 }}>{s.brand}</h3>
              <p style={{ fontSize: 15, color: "#1D9E75", fontWeight: 600, margin: 0 }}>{s.result}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PartnerVoices() {
  return (
    <section style={{ padding: "100px 5%", background: "#f7fdfb" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 44, color: "#111827", margin: "0 0 16px" }}>
          Partner Voices
        </h2>
        <p style={{ fontSize: 17, color: "#6B7280" }}>What our brand partners say about us.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
        {TESTIMONIALS.map((t) => (
          <div key={t.name} style={{
            background: "#fff", borderRadius: 20, padding: "36px 28px",
            border: "1px solid #e1f5ee",
          }}>
            <div style={{ fontSize: 40, color: "#1D9E75", lineHeight: 1, marginBottom: 16 }}>"</div>
            <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.8, margin: "0 0 24px", fontStyle: "italic" }}>{t.quote}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "#0F6E56", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700,
              }}>{t.initials}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>{t.name}</div>
                <div style={{ fontSize: 13, color: "#6B7280" }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function IntelligenceIntegrated() {
  return (
    <section style={{ padding: "100px 5%", background: "#fff" }}>
      <div style={{ display: "flex", gap: 80, alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <div style={{
            display: "inline-block", background: "#e1f5ee", color: "#0F6E56",
            fontSize: 12, fontWeight: 700, letterSpacing: 1.2,
            padding: "6px 16px", borderRadius: 20, marginBottom: 24,
          }}>INTELLIGENCE INTEGRATED</div>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 42, color: "#111827", margin: "0 0 20px", lineHeight: 1.2 }}>
            Smart Tools for<br />Smarter Campaigns
          </h2>
          <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.8, marginBottom: 40 }}>
            Our AI-powered platform gives you the control, visibility, and intelligence to run campaigns that actually perform.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {FEATURES.map((f) => (
              <div key={f.title} style={{
                padding: "20px", borderRadius: 14,
                background: "#f7fdfb", border: "1px solid #e1f5ee",
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
                <div style={{ fontWeight: 700, color: "#111827", fontSize: 15, marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, position: "relative" }}>
          <div style={{
            background: "linear-gradient(135deg, #0F6E56 0%, #1D9E75 100%)",
            borderRadius: 24, padding: 40, color: "#fff",
          }}>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 24, opacity: 0.9 }}>📊 Live Campaign Dashboard</div>
            {[
              { label: "Fashion — Summer Drop", pct: 78 },
              { label: "Electronics — Launch", pct: 62 },
              { label: "Beauty — Q2 Push", pct: 91 },
            ].map((row) => (
              <div key={row.label} style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14 }}>
                  <span>{row.label}</span>
                  <span style={{ fontWeight: 700 }}>{row.pct}%</span>
                </div>
                <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 10, height: 8 }}>
                  <div style={{ width: `${row.pct}%`, background: "#fff", borderRadius: 10, height: 8 }} />
                </div>
              </div>
            ))}
            <div style={{ marginTop: 32, display: "flex", gap: 24 }}>
              {[["12.4M", "Impressions"], ["340K", "Redemptions"], ["4.2x", "Avg. ROAS"]].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 22, fontWeight: 800 }}>{v}</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileAppCTA() {
  return (
    <section style={{
      margin: "0 5% 80px",
      background: "linear-gradient(135deg, #0F6E56 0%, #1D9E75 60%, #085041 100%)",
      borderRadius: 28, padding: "72px 5%",
      display: "flex", alignItems: "center", gap: 60,
      overflow: "hidden", position: "relative",
    }}>
      <div style={{
        position: "absolute", right: -60, top: -80, width: 400, height: 400,
        borderRadius: "50%", background: "rgba(255,255,255,0.05)",
      }} />
      <div style={{ flex: 1, color: "#fff" }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, opacity: 0.75, marginBottom: 16 }}>
          MOBILE APP — COMING SOON
        </div>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 40, margin: "0 0 16px", lineHeight: 1.2 }}>
          Take Your Brand<br />Pulse on the Go.
        </h2>
        <p style={{ fontSize: 16, opacity: 0.85, lineHeight: 1.7, maxWidth: 400, marginBottom: 32 }}>
          Monitor campaigns, review analytics, and approve creatives from anywhere. Full control in your pocket.
        </p>
        <button style={{
          background: "#fff", color: "#0F6E56",
          border: "none", borderRadius: 30,
          padding: "14px 32px", fontWeight: 700, fontSize: 16,
          cursor: "pointer",
        }}>📲 Become an Early Partner</button>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div style={{
          width: 200, height: 360,
          background: "rgba(255,255,255,0.12)",
          borderRadius: 32, border: "2px solid rgba(255,255,255,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 60,
        }}>📱</div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section style={{ padding: "80px 5% 100px" }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 44, color: "#111827", margin: "0 0 16px" }}>
          Common Questions
        </h2>
        <p style={{ fontSize: 17, color: "#6B7280" }}>Everything you need to know before getting started.</p>
      </div>
      <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
        {FAQS.map((faq, i) => (
          <div key={i} style={{
            border: "1px solid #e1f5ee", borderRadius: 16,
            overflow: "hidden",
          }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{
              width: "100%", textAlign: "left",
              padding: "22px 28px", background: open === i ? "#f7fdfb" : "#fff",
              border: "none", cursor: "pointer",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              fontSize: 16, fontWeight: 600, color: "#111827",
            }}>
              {faq.q}
              <span style={{ color: "#1D9E75", fontSize: 22, transition: "transform 0.2s", transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
            </button>
            {open === i && (
              <div style={{ padding: "0 28px 22px", fontSize: 15, color: "#4B5563", lineHeight: 1.8 }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function GetInTouch() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email) setSent(true);
  };

  return (
    <section style={{ padding: "80px 5% 100px", background: "#f7fdfb" }}>
      <div style={{ display: "flex", gap: 80, alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 44, color: "#111827", margin: "0 0 16px" }}>
            Get in Touch
          </h2>
          <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.8, marginBottom: 40 }}>
            Ready to scale your brand? Our partnership team typically responds within 24 hours.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[["📧", "hello@bagvertising.com"], ["📞", "+1 (800) 224-9888"], ["📍", "New York, NY 10001"]].map(([icon, val]) => (
              <div key={val} style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <span style={{ fontSize: 20 }}>{icon}</span>
                <span style={{ fontSize: 15, color: "#4B5563" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1 }}>
          {sent ? (
            <div style={{
              background: "#fff", borderRadius: 20, padding: "48px 40px",
              border: "1px solid #e1f5ee", textAlign: "center",
            }}>
              <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
              <h3 style={{ fontSize: 24, color: "#0F6E56", marginBottom: 12 }}>Message Sent!</h3>
              <p style={{ color: "#6B7280" }}>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <div style={{
              background: "#fff", borderRadius: 20, padding: "40px",
              border: "1px solid #e1f5ee",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[["Name", "name", "Your full name"], ["Email", "email", "you@company.com"]].map(([label, key, placeholder]) => (
                  <div key={key}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>{label}</label>
                    <input
                      type={key === "email" ? "email" : "text"}
                      placeholder={placeholder}
                      value={form[key]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })}
                      style={{
                        width: "100%", padding: "12px 16px", borderRadius: 10,
                        border: "1px solid #d1fae5", fontSize: 14, boxSizing: "border-box",
                        outline: "none",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Company</label>
                <input
                  placeholder="Your company name"
                  value={form.company}
                  onChange={e => setForm({ ...form, company: e.target.value })}
                  style={{
                    width: "100%", padding: "12px 16px", borderRadius: 10,
                    border: "1px solid #d1fae5", fontSize: 14, boxSizing: "border-box",
                  }}
                />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Message</label>
                <textarea
                  rows={4} placeholder="Tell us about your campaign goals..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: "100%", padding: "12px 16px", borderRadius: 10,
                    border: "1px solid #d1fae5", fontSize: 14, resize: "vertical", boxSizing: "border-box",
                  }}
                />
              </div>
              <button onClick={handleSubmit} style={{
                width: "100%", background: "#0F6E56", color: "#fff",
                border: "none", borderRadius: 12, padding: "16px",
                fontSize: 16, fontWeight: 700, cursor: "pointer",
              }}>Send Message →</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



export default function Landing() {
  return (
    <div style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", background: "#fff" }}>
      <Hero />
      <ValueProposition />
      <Benefits />
      <SuccessStories />
      <PartnerVoices />
      <IntelligenceIntegrated />
      <MobileAppCTA />
      <FAQ />
      <GetInTouch />
    </div>
  );
}
