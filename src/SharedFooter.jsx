import React from 'react';

export default function SharedFooter() {
  return (
    <footer style={{ background: "#0a2e24", color: "#9FE1CB", padding: "60px 5% 32px" }}>
      <div style={{ display: "flex", gap: 60, marginBottom: 48 }}>
        <div style={{ flex: 1.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 28 }}>🛍️</span>
            <span style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: 20, color: "#fff" }}>Bagvertising</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 280, color: "#9FE1CB" }}>
            The world's most effective offline-to-online brand advertising network.
          </p>
        </div>
        {[
          { title: "Company", links: ["About us", "Careers", "Press", "Blog"] },
          { title: "Product", links: ["Features", "Pricing", "Case Studies", "API"] },
          { title: "Support", links: ["FAQ", "Contact", "Privacy Policy", "Terms"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: 15 }}>{col.title}</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map((l) => (
                <a key={l} href="#" style={{ color: "#9FE1CB", textDecoration: "none", fontSize: 14 }}>{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid #0F6E56", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 13, color: "#5DCAA5" }}>© 2026 Bagvertising. All rights reserved.</div>
        <div style={{ display: "flex", gap: 16 }}>
          {["Twitter", "LinkedIn", "Instagram"].map((s) => (
            <a key={s} href="#" style={{ color: "#5DCAA5", fontSize: 13, textDecoration: "none" }}>{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
