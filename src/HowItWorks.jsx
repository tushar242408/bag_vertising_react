import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About us", "Blogs", "Contact Us", "FAQ"];

const STEPS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
    num: "01",
    title: "Join the Pulse",
    desc: "Onboard your brand and set up your synergy profile to begin the partnership.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    num: "02",
    title: "Integrate Your Coupons",
    desc: "Sync your existing offers into our 3D marketplace for seamless customer discovery.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    num: "03",
    title: "Launch Campaigns",
    desc: "Deploy high-impact rewards across our global network to drive massive engagement.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    num: "04",
    title: "Scale with Precision",
    desc: "Leverage real-time analytics to optimise your conversion and maximise ROI.",
  },
];

const STATS = [
  {
    value: "94%",
    label: "Brand Recall",
    desc: "Increase in brand recognition within immersive 3D environments compared to standard display ads.",
    accent: false,
  },
  {
    value: "3.2×",
    label: "Conversion Lift",
    desc: "Higher conversion rates for kinetic reward campaigns compared to fractional coupon distributions.",
    accent: true,
  },
  {
    value: "12ms",
    label: "Sync Speed",
    desc: "Real-time inventory updates across our global marketplace for instantaneous offer redemption.",
    accent: false,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}



function Hero() {
  const [heroRef, heroInView] = useInView(0.1);
  return (
    <section ref={heroRef} style={{
      minHeight: "88vh", display: "flex", alignItems: "center",
      padding: "72px 5% 80px", gap: 60,
      background: "linear-gradient(150deg,#f7fdfb 0%,#ffffff 55%,#f0faf5 100%)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Subtle bg circles */}
      <div style={{ position:"absolute", top:-140, right:-100, width:460, height:460, borderRadius:"50%", background:"radial-gradient(circle,#d1f5e8 0%,transparent 70%)", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", bottom:-80, left:-60, width:280, height:280, borderRadius:"50%", background:"radial-gradient(circle,#e1f5ee 0%,transparent 70%)", pointerEvents:"none" }}/>

      {/* Left */}
      <div style={{
        flex:1, maxWidth:520,
        opacity: heroInView ? 1 : 0, transform: heroInView ? "none" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <div style={{
          display:"inline-block", background:"transparent",
          color:"#D85A30", fontSize:11, fontWeight:700, letterSpacing:2,
          marginBottom:22,
        }}>THE PARTNERSHIP BLUEPRINT</div>

        <h1 style={{
          fontFamily:"'Georgia',serif", fontSize:"clamp(40px,5.5vw,64px)",
          lineHeight:1.06, margin:"0 0 28px", color:"#111827", fontWeight:700,
        }}>
          Brand Synergy<br />
          <span style={{ color:"#1D9E75" }}>Evolved.</span>
        </h1>

        <p style={{ fontSize:16, color:"#4B5563", lineHeight:1.75, maxWidth:400, marginBottom:40 }}>
          BagVertising connects your brand to a global audience through an immersive 3D rewards ecosystem. Accelerate your reach and redefine engagement.
        </p>

        <div style={{ display:"flex", alignItems:"center", gap:20 }}>
          <button style={{
            background:"#0F6E56", color:"#fff", border:"none",
            borderRadius:30, padding:"14px 30px", fontWeight:700, fontSize:15, cursor:"pointer",
          }}>Start Your Journey</button>
          {/* Avatar stack */}
          <div style={{ display:"flex", alignItems:"center" }}>
            {["#1D9E75","#D85A30","#0F6E56"].map((c,i) => (
              <div key={i} style={{
                width:34, height:34, borderRadius:"50%", background:c,
                border:"2.5px solid #fff", marginLeft: i > 0 ? -10 : 0,
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:12, color:"#fff", fontWeight:700,
              }}>{["JM","RP","+"][i]}</div>
            ))}
            <span style={{ fontSize:12, color:"#6B7280", marginLeft:10 }}>500+ brands joined</span>
          </div>
        </div>
      </div>

      {/* Right — 3D-style organic shape placeholder */}
      <div style={{
        flex:1, display:"flex", justifyContent:"flex-end",
        opacity: heroInView ? 1 : 0, transform: heroInView ? "none" : "translateX(32px)",
        transition: "opacity 0.85s ease 0.2s, transform 0.85s ease 0.2s",
      }}>
        <div style={{
          width:"100%", maxWidth:420, height:340,
          background:"#f8f9fa", borderRadius:24,
          boxShadow:"0 24px 70px rgba(15,110,86,0.12)",
          display:"flex", alignItems:"center", justifyContent:"center",
          overflow:"hidden", position:"relative",
        }}>
          {/* SVG organic 3D-style shape */}
          <svg viewBox="0 0 360 280" width="360" height="280" xmlns="http://www.w3.org/2000/svg" style={{ overflow:"visible" }}>
            <defs>
              <radialGradient id="g1" cx="40%" cy="45%" r="55%">
                <stop offset="0%" stopColor="#5DCAA5"/>
                <stop offset="100%" stopColor="#085041"/>
              </radialGradient>
              <radialGradient id="g2" cx="70%" cy="35%" r="50%">
                <stop offset="0%" stopColor="#F0997B"/>
                <stop offset="100%" stopColor="#993C1D"/>
              </radialGradient>
              <radialGradient id="g3" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#9FE1CB"/>
                <stop offset="100%" stopColor="#1D9E75" stopOpacity="0.6"/>
              </radialGradient>
            </defs>
            {/* Layered organic blobs */}
            <ellipse cx="180" cy="145" rx="140" ry="100" fill="url(#g3)" opacity="0.35" transform="rotate(-20 180 145)"/>
            <path d="M100 190 Q60 100 140 70 Q220 40 270 100 Q310 155 260 200 Q200 250 150 230 Q100 210 100 190Z" fill="url(#g1)" opacity="0.9"/>
            <path d="M160 80 Q220 50 270 90 Q310 130 280 170 Q250 200 210 185 Q175 170 165 140 Q155 110 160 80Z" fill="url(#g2)" opacity="0.82"/>
            <path d="M130 160 Q110 120 145 95 Q185 70 220 100 Q255 130 235 165 Q215 195 180 190 Q145 185 130 160Z" fill="#9FE1CB" opacity="0.45"/>
            {/* Floating ring strokes */}
            <ellipse cx="200" cy="135" rx="115" ry="75" fill="none" stroke="#1D9E75" strokeWidth="1.2" opacity="0.25" transform="rotate(-15 200 135)"/>
            <ellipse cx="195" cy="140" rx="90" ry="55" fill="none" stroke="#5DCAA5" strokeWidth="0.8" opacity="0.2" transform="rotate(-15 195 140)"/>
          </svg>
          <style>{`
            @keyframes floatShape { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
          `}</style>
          <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", animation:"floatShape 5s ease-in-out infinite" }}>
            <svg viewBox="0 0 360 280" width="360" height="280" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="ga" cx="40%" cy="45%" r="55%">
                  <stop offset="0%" stopColor="#5DCAA5"/>
                  <stop offset="100%" stopColor="#085041"/>
                </radialGradient>
                <radialGradient id="gb" cx="70%" cy="35%" r="50%">
                  <stop offset="0%" stopColor="#F0997B"/>
                  <stop offset="100%" stopColor="#993C1D"/>
                </radialGradient>
              </defs>
              <path d="M100 190 Q60 100 140 70 Q220 40 270 100 Q310 155 260 200 Q200 250 150 230 Q100 210 100 190Z" fill="url(#ga)" opacity="0.88"/>
              <path d="M160 80 Q220 50 270 90 Q310 130 280 170 Q250 200 210 185 Q175 170 165 140 Q155 110 160 80Z" fill="url(#gb)" opacity="0.78"/>
              <path d="M130 160 Q110 120 145 95 Q185 70 220 100 Q255 130 235 165 Q215 195 180 190 Q145 185 130 160Z" fill="#9FE1CB" opacity="0.38"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccelerationCycle() {
  const [ref, inView] = useInView(0.1);
  return (
    <section ref={ref} style={{ padding:"96px 5% 100px", background:"#fff" }}>
      <div style={{ textAlign:"center", marginBottom:60 }}>
        <h2 style={{
          fontFamily:"'Georgia',serif", fontSize:"clamp(28px,4vw,40px)",
          color:"#111827", margin:"0 0 14px", fontWeight:700,
        }}>The Acceleration Cycle</h2>
        <p style={{ fontSize:15, color:"#6B7280" }}>A streamlined journey to integrate and scale your brand presence.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20, position:"relative" }}>
        {/* Connector line */}
        <div style={{
          position:"absolute", top:52, left:"12.5%", right:"12.5%", height:2,
          background:"linear-gradient(90deg,#9FE1CB,#1D9E75,#9FE1CB)",
          zIndex:0, opacity:0.35,
        }}/>

        {STEPS.map((step, i) => (
          <div key={i} style={{
            background:"#fff", borderRadius:20, padding:"32px 24px",
            border:"1px solid #e8f5ef",
            boxShadow:"0 4px 24px rgba(15,110,86,0.06)",
            position:"relative", zIndex:1,
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(28px)",
            transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
            cursor:"default",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = "0 16px 48px rgba(15,110,86,0.14)";
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.borderColor = "#9FE1CB";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(15,110,86,0.06)";
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.borderColor = "#e8f5ef";
            }}
          >
            {/* Icon circle */}
            <div style={{
              width:52, height:52, borderRadius:"50%",
              background:"#e1f5ee", border:"1px solid #9FE1CB",
              display:"flex", alignItems:"center", justifyContent:"center",
              marginBottom:20,
            }}>{step.icon}</div>

            <h3 style={{ fontSize:17, fontWeight:700, color:"#111827", marginBottom:10, lineHeight:1.3 }}>
              {step.title}
            </h3>
            <p style={{ fontSize:13, color:"#6B7280", lineHeight:1.75, margin:0 }}>{step.desc}</p>

            {/* Step number */}
            <div style={{
              position:"absolute", bottom:20, right:22,
              fontFamily:"'Georgia',serif", fontSize:32, fontWeight:700,
              color:"#e8f5ef", lineHeight:1, userSelect:"none",
            }}>{step.num}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyItMatters() {
  const [ref, inView] = useInView(0.1);
  return (
    <section ref={ref} style={{
      margin:"0 5% 80px",
      background:"#f4f6f8",
      borderRadius:28, padding:"72px 5%",
      overflow:"hidden", position:"relative",
    }}>
      {/* Top section */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:56, gap:40, flexWrap:"wrap" }}>
        <div>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:1.6, color:"#1D9E75", marginBottom:12 }}>THE IMPACT</div>
          <h2 style={{
            fontFamily:"'Georgia',serif", fontSize:"clamp(26px,4vw,38px)",
            color:"#111827", margin:0, fontWeight:700, lineHeight:1.2,
          }}>Why BagVertising<br />Matters</h2>
        </div>
        <p style={{ fontSize:14, color:"#6B7280", maxWidth:280, lineHeight:1.8, marginTop:8 }}>
          Data-driven evidence of how BagVertising transforms brand partnerships.
        </p>
      </div>

      {/* Stats cards */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            background: s.accent ? "#0F6E56" : "#fff",
            borderRadius:20, padding:"36px 28px",
            border: s.accent ? "none" : "1px solid #e1f5ee",
            boxShadow: s.accent ? "0 20px 50px rgba(15,110,86,0.25)" : "0 4px 20px rgba(0,0,0,0.04)",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
            transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
          }}>
            <div style={{
              fontFamily:"'Georgia',serif",
              fontSize:"clamp(42px,5vw,58px)", fontWeight:700, lineHeight:1,
              color: s.accent ? "#fff" : (i === 2 ? "#1D9E75" : "#111827"),
              marginBottom:10,
            }}>{s.value}</div>
            <div style={{
              fontSize:15, fontWeight:700,
              color: s.accent ? "rgba(255,255,255,0.9)" : "#111827",
              marginBottom:14,
            }}>{s.label}</div>
            <p style={{
              fontSize:13, lineHeight:1.75, margin:0,
              color: s.accent ? "rgba(255,255,255,0.72)" : "#6B7280",
            }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  const [ref, inView] = useInView(0.2);
  return (
    <section ref={ref} style={{
      padding:"100px 5% 110px",
      background:"#fff",
      textAlign:"center",
    }}>
      {/* Decorative blurred blob */}
      <div style={{
        width:280, height:280, borderRadius:"50%",
        background:"radial-gradient(circle,#fde8d8 0%,transparent 70%)",
        margin:"-60px auto -220px", pointerEvents:"none",
      }}/>
      <div style={{
        position:"relative", zIndex:1,
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(28px)",
        transition:"opacity 0.7s ease, transform 0.7s ease",
      }}>
        <h2 style={{
          fontFamily:"'Georgia',serif", fontSize:"clamp(30px,4.5vw,48px)",
          color:"#111827", margin:"0 0 16px", fontWeight:700,
        }}>Ready to sync your brand pulse?</h2>
        <p style={{ fontSize:16, color:"#6B7280", marginBottom:44 }}>
          Join 500+ global brands redefining customer loyalty with Kinetix Pulse.
        </p>
        <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
          <button style={{
            background:"#111827", color:"#fff", border:"none",
            borderRadius:30, padding:"16px 36px",
            fontWeight:700, fontSize:16, cursor:"pointer",
          }}>Get Started Free</button>
          <button style={{
            background:"transparent", color:"#374151",
            border:"1.5px solid #d1d5db",
            borderRadius:30, padding:"16px 36px",
            fontWeight:600, fontSize:16, cursor:"pointer",
          }}>Book a Demo</button>
        </div>
      </div>
    </section>
  );
}



export default function HowItWorksPage() {
  return (
    <div style={{ fontFamily:"'Helvetica Neue','Segoe UI',sans-serif", background:"#fff", minHeight:"100vh" }}>
      <Hero />
      <AccelerationCycle />
      <WhyItMatters />
      <CTA />
    </div>
  );
}
