import React from 'react';
import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "How it works", path: "/how-it-works" },
  { name: "FAQ", path: "/faq" }
];

export default function SharedNavbar() {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(255,255,255,0.96)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid #e8f5ef",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 5%", height: 70,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <img src="/app_logo.png" alt="Bagvertising Logo" style={{ height: 44, objectFit: "contain" }} />
      </div>

      <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <NavLink key={link.name} to={link.path} style={({ isActive }) => ({
            textDecoration: "none", fontSize: 15, fontWeight: 500,
            color: isActive ? "#1D9E75" : "#374151",
            borderBottom: isActive ? "2px solid #1D9E75" : "none",
            paddingBottom: 2,
            transition: "color 0.2s"
          })}>{link.name}</NavLink>
        ))}
      </div>

      <button style={{
        background: "#0F6E56", color: "#fff", border: "none",
        borderRadius: 30, padding: "12px 28px", fontWeight: 600, fontSize: 15,
        cursor: "pointer", letterSpacing: 0.3,
      }}>Contact Us</button>
    </nav>
  );
}
