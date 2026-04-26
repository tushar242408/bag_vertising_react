import { useState } from "react";

const NAV_LINKS = ["Home", "About us", "Blogs", "Contact Us", "FAQ"];

const FAQS = [
  {
    q: "How do I redeem my first coupon?",
    a: "Once you've explored our marketplace and selected a coupon, simply click \"Redeem\". You'll receive a unique pulse-code that can be used directly at the partner's checkout or through our integrated mobile wallet.",
  },
  {
    q: "Can I partner as a luxury brand?",
    a: "Absolutely. We work with premium and luxury brands across Fashion, Beauty, and Lifestyle. Our editorial-grade bag placements are curated to match the aesthetic and audience expectations of high-end labels. Reach out to our partnerships team for a custom proposal.",
  },
  {
    q: "How often are new deals added?",
    a: "New brand deals and coupon drops are added weekly. Our editorial team curates each batch to ensure relevance and quality. Premium partners get early access and priority placement in featured slots.",
  },
  {
    q: "What is the ROI for brand partners?",
    a: "Our brand partners see an average of 4.8x return on ad spend within the first campaign cycle. Results vary by category — Fashion and Beauty consistently outperform, with some campaigns hitting 7x ROAS. We provide full attribution reporting so you can track every redemption.",
  },
  {
    q: "Is there a minimum campaign duration?",
    a: "We recommend a minimum of 4 weeks to allow the campaign to reach full distribution across our retail bag network. Shorter pilots are available for first-time partners to test the channel before scaling.",
  },
  {
    q: "How does audience targeting work?",
    a: "Bags are distributed through our partner retail stores, segmented by category (Fashion, Electronics, Home, Beauty). You choose which store categories and geographies to target, and we match your brand to the most relevant shopper audience.",
  },
];



function Hero() {
  const [query, setQuery] = useState("");

  return (
    <section style={{
      padding: "72px 5% 80px",
      background: "#fff",
      display: "flex", alignItems: "center", gap: 60,
      minHeight: 340,
    }}>
      {/* Left content */}
      <div style={{ flex: 1, maxWidth: 520 }}>
        <div style={{
          display: "inline-block",
          background: "#e1f5ee", color: "#0F6E56",
          fontSize: 11, fontWeight: 700, letterSpacing: 1.4,
          padding: "5px 14px", borderRadius: 20, marginBottom: 28,
          border: "1px solid #9FE1CB",
        }}>GUIDE</div>

        <h1 style={{
          fontFamily: "'Georgia', serif",
          fontSize: "clamp(38px, 5vw, 56px)",
          lineHeight: 1.1, margin: "0 0 6px", color: "#111827",
          fontWeight: 700,
        }}>How can we</h1>
        <h1 style={{
          fontFamily: "'Georgia', serif",
          fontSize: "clamp(38px, 5vw, 56px)",
          lineHeight: 1.1, margin: "0 0 24px", color: "#1D9E75",
          fontWeight: 700,
        }}>help?</h1>

        <p style={{
          fontSize: 15, color: "#6B7280", lineHeight: 1.75,
          maxWidth: 400, marginBottom: 32,
        }}>
          Find answers to technical questions, security protocols, and account management for the Kinetix Pulse ecosystem.
        </p>

        {/* Search bar */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          background: "#f9fafb", border: "1.5px solid #d1fae5",
          borderRadius: 12, padding: "12px 18px", maxWidth: 420,
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search for documentation, guides, and more..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              border: "none", background: "transparent", outline: "none",
              fontSize: 14, color: "#374151", flex: 1,
            }}
          />
        </div>
      </div>

      {/* Right image */}
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <div style={{
          width: "100%", maxWidth: 460, height: 300,
          borderRadius: 22, overflow: "hidden",
          boxShadow: "0 24px 60px rgba(15,110,86,0.15)",
          position: "relative",
        }}>
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
            alt="Technology corridor"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={e => {
              e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80";
            }}
          />
          {/* Teal overlay for brand match */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(15,110,86,0.25) 0%, rgba(8,80,65,0.1) 100%)",
          }} />
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  const links = [
    { icon: "📘", label: "Getting Started", count: "12 articles" },
    { icon: "🔐", label: "Security & Privacy", count: "8 articles" },
    { icon: "💳", label: "Billing & Plans", count: "10 articles" },
    { icon: "📊", label: "Analytics & Reports", count: "15 articles" },
  ];
  return (
    <section style={{ padding: "0 5% 60px", background: "#fff" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16,
      }}>
        {links.map((l) => (
          <div key={l.label} style={{
            background: "#f7fdfb", border: "1px solid #e1f5ee",
            borderRadius: 14, padding: "22px 20px",
            cursor: "pointer", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#e1f5ee"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#f7fdfb"; e.currentTarget.style.transform = "none"; }}
          >
            <div style={{ fontSize: 28, marginBottom: 10 }}>{l.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#111827", marginBottom: 4 }}>{l.label}</div>
            <div style={{ fontSize: 12, color: "#6B7280" }}>{l.count}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section style={{
      padding: "80px 5% 100px",
      background: "#f4f6f8",
    }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <h2 style={{
          fontFamily: "'Georgia', serif",
          fontSize: "clamp(30px, 4vw, 42px)",
          color: "#111827", margin: "0 0 12px", fontWeight: 700,
        }}>Common Questions</h2>
        <p style={{ fontSize: 15, color: "#6B7280" }}>
          Everything you need to know about the Kinetix ecosystem.
        </p>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", gap: 0 }}>
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{
              background: "#fff",
              borderBottom: "1px solid #e5e7eb",
              borderTop: i === 0 ? "1px solid #e5e7eb" : "none",
              overflow: "hidden",
            }}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                style={{
                  width: "100%", textAlign: "left",
                  padding: "22px 24px", background: "transparent",
                  border: "none", cursor: "pointer",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  fontSize: 15, fontWeight: 600, color: "#111827",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => { if (!isOpen) e.currentTarget.style.background = "#f9fafb"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              >
                <span>{faq.q}</span>
                <span style={{
                  width: 24, height: 24,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: isOpen ? "#0F6E56" : "#9CA3AF",
                  fontSize: 18,
                  transition: "transform 0.25s, color 0.2s",
                  transform: isOpen ? "rotate(180deg)" : "none",
                  flexShrink: 0, marginLeft: 16,
                }}>
                  {isOpen ? "−" : "∨"}
                </span>
              </button>

              <div style={{
                maxHeight: isOpen ? 200 : 0,
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}>
                <div style={{
                  padding: "0 24px 24px",
                  fontSize: 14, color: "#4B5563", lineHeight: 1.8,
                }}>
                  {faq.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: 56 }}>
        <p style={{ fontSize: 15, color: "#6B7280", marginBottom: 20 }}>
          Still have questions? Our support team is here to help.
        </p>
        <button style={{
          background: "#0F6E56", color: "#fff", border: "none",
          borderRadius: 30, padding: "14px 32px",
          fontWeight: 700, fontSize: 15, cursor: "pointer",
          letterSpacing: 0.3,
        }}>Contact Support →</button>
      </div>
    </section>
  );
}



export default function FAQPage() {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', 'Segoe UI', sans-serif", background: "#fff", minHeight: "100vh" }}>
      <Hero />
      <QuickLinks />
      <FAQSection />
    </div>
  );
}
