import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About us", "Blogs", "Contact Us", "FAQ"];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}



function Hero() {
  const [ref, inView] = useInView(0.05);
  return (
    <section ref={ref} style={{
      minHeight:"90vh",display:"flex",alignItems:"center",
      padding:"72px 5% 80px",gap:56,
      background:"linear-gradient(150deg,#f7fdfb 0%,#fff 55%,#f0faf5 100%)",
      position:"relative",overflow:"hidden",
    }}>
      <div style={{position:"absolute",top:-120,right:-100,width:420,height:420,borderRadius:"50%",background:"radial-gradient(circle,#d1f5e8 0%,transparent 70%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:-80,left:-80,width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,#fde8d8 0%,transparent 70%)",pointerEvents:"none"}}/>

      <div style={{flex:1,maxWidth:520,opacity:inView?1:0,transform:inView?"none":"translateY(36px)",transition:"opacity 0.75s ease,transform 0.75s ease"}}>
        <div style={{display:"inline-block",background:"#D85A30",color:"#fff",fontSize:10,fontWeight:800,letterSpacing:2,padding:"5px 14px",borderRadius:20,marginBottom:28}}>OUR IDENTITY</div>

        <h1 style={{fontFamily:"'Georgia',serif",fontSize:"clamp(42px,5.5vw,68px)",lineHeight:1.06,margin:"0 0 28px",fontWeight:700}}>
          <span style={{color:"#111827"}}>The Pulse of<br />Modern{" "}</span>
          <span style={{color:"#1D9E75"}}>Value.</span>
        </h1>

        <p style={{fontSize:15,color:"#4B5563",lineHeight:1.85,maxWidth:400,marginBottom:44}}>
          BagVertising bridges the gap between premium brands and smart shoppers. We merge strategic coupons with immersive 3D collaboration environments to redefine the retail experience.
        </p>

        <button style={{display:"flex",alignItems:"center",gap:12,background:"transparent",border:"none",cursor:"pointer",color:"#0F6E56",fontWeight:700,fontSize:12,letterSpacing:1.4,padding:0}}>
          <div style={{width:38,height:38,borderRadius:"50%",background:"#1D9E75",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff"><polygon points="5,3 19,12 5,21"/></svg>
          </div>
          DISCOVER THE EXPERIENCE
        </button>
      </div>

      <div style={{flex:1,position:"relative",display:"flex",justifyContent:"flex-end",opacity:inView?1:0,transform:inView?"none":"translateX(36px)",transition:"opacity 0.85s ease 0.2s,transform 0.85s ease 0.2s"}}>
        <div style={{width:"100%",maxWidth:440,height:380,borderRadius:22,overflow:"hidden",boxShadow:"0 28px 70px rgba(0,0,0,0.15)",position:"relative"}}>
          <img src="https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=700&q=80" alt="Cosmic abstract" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(8,50,40,0.4),rgba(0,0,0,0.2))"}}/>
        </div>

        <div style={{
          position:"absolute",bottom:32,right:-20,
          background:"#fff",borderRadius:16,padding:"18px 22px",maxWidth:220,
          boxShadow:"0 20px 50px rgba(0,0,0,0.12)",
          animation:"floatCard 4s ease-in-out infinite",
        }}>
          <div style={{fontWeight:800,fontSize:13,color:"#111827",marginBottom:6}}>Exclusive Access</div>
          <div style={{fontSize:12,color:"#6B7280",lineHeight:1.6}}>Empowering 12M+ shoppers with high-value brand collaboration.</div>
        </div>
        <style>{`@keyframes floatCard{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}`}</style>
      </div>
    </section>
  );
}

function RedefiningSection() {
  const [ref, inView] = useInView(0.1);
  return (
    <section ref={ref} style={{padding:"96px 5% 100px",background:"#f4f6f8"}}>
      <div style={{display:"flex",gap:56,alignItems:"stretch"}}>
        <div style={{flex:1,maxWidth:380,opacity:inView?1:0,transform:inView?"none":"translateX(-28px)",transition:"opacity 0.7s ease,transform 0.7s ease",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <h2 style={{fontFamily:"'Georgia',serif",fontSize:"clamp(28px,4vw,42px)",color:"#111827",margin:"0 0 0",fontWeight:700,lineHeight:1.15}}>
            Redefining how you <span style={{color:"#1D9E75"}}>Save.</span>
          </h2>
          <div style={{width:48,height:3,background:"#1D9E75",borderRadius:2,margin:"18px 0 24px"}}/>
          <p style={{fontSize:14,color:"#4B5563",lineHeight:1.85,marginBottom:20}}>
            Founded with a vision to revolutionise the discount landscape, BagVertising is more than a coupon platform. We are an ecosystem where premium brands and consumers thrive together.
          </p>
          <p style={{fontSize:14,color:"#4B5563",lineHeight:1.85}}>
            By leveraging advanced 3D environments for brand showcases, we turn simple savings into an engaging journey of discovery and mutual growth.
          </p>
        </div>

        <div style={{flex:1.4,opacity:inView?1:0,transform:inView?"none":"translateX(28px)",transition:"opacity 0.7s ease 0.15s,transform 0.7s ease 0.15s"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"auto auto",gap:16}}>
            <div style={{gridRow:"1/3",borderRadius:18,overflow:"hidden",height:340}}>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80" alt="Team" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            </div>
            <div style={{borderRadius:18,background:"#e8ebe8",display:"flex",flexDirection:"column",justifyContent:"center",padding:"28px 24px"}}>
              <div style={{fontFamily:"'Georgia',serif",fontSize:48,fontWeight:800,color:"#111827",lineHeight:1}}>500+</div>
              <div style={{fontSize:12,color:"#6B7280",marginTop:8,fontWeight:600,letterSpacing:0.5}}>PARTNER BRANDS</div>
            </div>
            <div style={{borderRadius:18,background:"#0F6E56",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"28px 24px",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:0,right:0,width:100,height:100,borderRadius:"50%",background:"rgba(255,255,255,0.06)",transform:"translate(30px,-30px)"}}/>
              <div style={{fontFamily:"'Georgia',serif",fontSize:36,fontWeight:800,color:"#fff",lineHeight:1,position:"relative"}}>$45M+</div>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.7)",marginTop:8,fontWeight:600,letterSpacing:0.5,position:"relative"}}>CONSUMER SAVINGS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const [ref, inView] = useInView(0.1);
  return (
    <section ref={ref} style={{padding:"96px 5% 100px",background:"#fff"}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24}}>

        <div style={{borderRadius:22,padding:"48px 40px",background:"#f7fdfb",border:"1px solid #9FE1CB",opacity:inView?1:0,transform:inView?"none":"translateY(28px)",transition:"opacity 0.65s ease,transform 0.65s ease"}}>
          <div style={{width:44,height:44,borderRadius:12,background:"#e1f5ee",border:"1px solid #9FE1CB",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:24}}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:1.5,color:"#1D9E75",marginBottom:14}}>OUR MISSION</div>
          <h3 style={{fontFamily:"'Georgia',serif",fontSize:28,fontWeight:700,color:"#111827",margin:"0 0 20px",lineHeight:1.25}}>
            Digitising Trust<br />&amp; Savings.
          </h3>
          <p style={{fontSize:14,color:"#4B5563",lineHeight:1.85,marginBottom:32}}>
            To digitise trust and maximise savings for consumers while scaling brand reach through innovative, verifiable value-sharing protocols.
          </p>
          <button style={{background:"transparent",border:"none",cursor:"pointer",fontSize:12,fontWeight:700,letterSpacing:1.3,color:"#0F6E56",padding:0,textDecoration:"underline",textUnderlineOffset:4}}>OUR BRAND PROTOCOL →</button>
        </div>

        <div style={{borderRadius:22,padding:"48px 40px",background:"#C0392B",opacity:inView?1:0,transform:inView?"none":"translateY(28px)",transition:"opacity 0.65s ease 0.15s,transform 0.65s ease 0.15s",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:-40,right:-40,width:160,height:160,borderRadius:"50%",background:"rgba(255,255,255,0.06)"}}/>
          <div style={{position:"absolute",bottom:-30,left:-30,width:100,height:100,borderRadius:"50%",background:"rgba(255,255,255,0.04)"}}/>

          <div style={{width:44,height:44,borderRadius:12,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:24,position:"relative"}}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="2"/><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6a6 6 0 1 0 6 6"/>
            </svg>
          </div>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:1.5,color:"rgba(255,255,255,0.65)",marginBottom:14,position:"relative"}}>OUR VISION</div>
          <h3 style={{fontFamily:"'Georgia',serif",fontSize:28,fontWeight:700,color:"#fff",margin:"0 0 20px",lineHeight:1.25,position:"relative"}}>Our Vision</h3>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.8)",lineHeight:1.85,marginBottom:40,position:"relative"}}>
            To become the global nexus for value-driven brand partnerships, building a truly synchronised network connecting brands and shoppers across every touchpoint.
          </p>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:1.5,color:"rgba(255,255,255,0.55)",marginBottom:14,position:"relative"}}>GLOBAL PARTNERSHIP NETWORK</div>
          <div style={{display:"flex",alignItems:"center",position:"relative"}}>
            {["#1D9E75","#D85A30","#085041"].map((c,i)=>(
              <div key={i} style={{width:36,height:36,borderRadius:"50%",background:c,border:"2.5px solid #C0392B",marginLeft:i>0?-10:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"#fff",fontWeight:700}}>
                {["AM","SK","JL"][i]}
              </div>
            ))}
            <span style={{fontSize:12,color:"rgba(255,255,255,0.65)",marginLeft:12}}>+120 partners</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamStrip() {
  const [ref, inView] = useInView(0.1);
  const team = [
    {name:"Amara Singh",role:"CEO & Co-Founder",color:"#1D9E75",initials:"AS"},
    {name:"Raj Mehta",role:"CTO",color:"#0F6E56",initials:"RM"},
    {name:"Priya Nair",role:"Head of Partnerships",color:"#D85A30",initials:"PN"},
    {name:"Lucas Kim",role:"Lead Designer",color:"#085041",initials:"LK"},
  ];
  return (
    <section ref={ref} style={{padding:"0 5% 96px",background:"#fff"}}>
      <div style={{textAlign:"center",marginBottom:48}}>
        <h2 style={{fontFamily:"'Georgia',serif",fontSize:36,color:"#111827",margin:"0 0 12px",fontWeight:700}}>The People Behind the Pulse</h2>
        <p style={{fontSize:15,color:"#6B7280"}}>A team of brand-builders, technologists, and retail innovators.</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>
        {team.map((m,i)=>(
          <div key={m.name} style={{background:"#f7fdfb",borderRadius:18,padding:"36px 24px",border:"1px solid #e1f5ee",textAlign:"center",opacity:inView?1:0,transform:inView?"none":"translateY(24px)",transition:`opacity 0.6s ease ${i*0.1}s,transform 0.6s ease ${i*0.1}s`}}>
            <div style={{width:64,height:64,borderRadius:"50%",background:m.color,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px",fontSize:18,color:"#fff",fontWeight:700}}>{m.initials}</div>
            <div style={{fontWeight:700,fontSize:16,color:"#111827",marginBottom:6}}>{m.name}</div>
            <div style={{fontSize:13,color:"#6B7280"}}>{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTABanner() {
  const [ref, inView] = useInView(0.15);
  return (
    <section ref={ref} style={{padding:"0 5% 80px"}}>
      <div style={{background:"linear-gradient(135deg,#0a2e24 0%,#0F6E56 60%,#085041 100%)",borderRadius:28,padding:"80px 5%",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-80,right:-80,width:320,height:320,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.07)"}}/>
        <div style={{position:"absolute",bottom:-60,left:-60,width:220,height:220,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.05)"}}/>
        <div style={{position:"relative",opacity:inView?1:0,transform:inView?"none":"translateY(28px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
          <h2 style={{fontFamily:"'Georgia',serif",fontSize:"clamp(32px,5vw,52px)",color:"#fff",margin:"0 0 16px",fontWeight:700}}>Ready to sync?</h2>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.72)",maxWidth:440,margin:"0 auto 44px"}}>
            Join thousands of organisations moving with purpose. Experience the energy of a truly synchronised network.
          </p>
          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
            <button style={{background:"#fff",color:"#0F6E56",border:"none",borderRadius:30,padding:"15px 34px",fontWeight:700,fontSize:15,cursor:"pointer"}}>START SAVING</button>
            <button style={{background:"transparent",color:"#fff",border:"1.5px solid rgba(255,255,255,0.4)",borderRadius:30,padding:"15px 34px",fontWeight:600,fontSize:15,cursor:"pointer"}}>PARTNER DEMO</button>
          </div>
        </div>
      </div>
    </section>
  );
}



export default function AboutUsPage() {
  return (
    <div style={{fontFamily:"'Helvetica Neue','Segoe UI',sans-serif",background:"#fff",minHeight:"100vh"}}>
      <Hero/>
      <RedefiningSection/>
      <MissionVision/>
      <TeamStrip/>
      <CTABanner/>
    </div>
  );
}
