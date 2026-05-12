import { motion, useInView } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import aboutimage from "../assets/rajpalabout.png";
import aboutimage2 from "../assets/rajpalabout2.png";

/* ═══════════════════════════════════════════
  BACKGROUND — diya + agarbatti + dhoop SVG
═══════════════════════════════════════════ */
const BG_ITEMS = [
  { t:"diya", x:50,   y:60,  s:0.75, d:0.0 },
  { t:"ag",   x:160,  y:260, s:0.58, d:1.1 },
  { t:"dh",   x:310,  y:45,  s:0.72, d:0.5 },
  { t:"diya", x:480,  y:210, s:0.65, d:2.0 },
  { t:"ag",   x:640,  y:330, s:0.60, d:0.7 },
  { t:"diya", x:800,  y:55,  s:0.78, d:1.4 },
  { t:"dh",   x:930,  y:270, s:0.55, d:0.3 },
  { t:"ag",   x:1060, y:40,  s:0.65, d:2.3 },
  { t:"diya", x:1200, y:290, s:0.70, d:0.9 },
  { t:"dh",   x:45,   y:450, s:0.52, d:2.8 },
  { t:"ag",   x:290,  y:480, s:0.60, d:1.7 },
  { t:"diya", x:570,  y:430, s:0.68, d:0.6 },
  { t:"dh",   x:850,  y:460, s:0.55, d:2.1 },
  { t:"ag",   x:1110, y:420, s:0.62, d:1.0 },
  { t:"diya", x:440,  y:160, s:0.72, d:0.8 },
  { t:"dh",   x:720,  y:150, s:0.66, d:1.6 },
  { t:"ag",   x:1270, y:140, s:0.58, d:2.4 },
  { t:"diya", x:140,  y:390, s:0.63, d:3.1 },
];

function IncenseBg() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1300 560"
      preserveAspectRatio="xMidYMid slice"
      style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:0 }}
    >
      <defs>
        <linearGradient id="abSG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8960c"/><stop offset="100%" stopColor="#5a2800"/>
        </linearGradient>
        <linearGradient id="abCG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4a017"/><stop offset="100%" stopColor="#7a3400"/>
        </linearGradient>
        <radialGradient id="abFG" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#fff7a0"/>
          <stop offset="40%" stopColor="#ffcc00"/>
          <stop offset="100%" stopColor="#ff6600" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="abGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd700" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#ffd700" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {BG_ITEMS.map((it, i) => {
        if (it.t === "ag") return (
          <g key={i} transform={`translate(${it.x},${it.y}) scale(${it.s})`}
            style={{ opacity:0.14, animation:`abFloat 8s ease-in-out ${it.d}s infinite` }}>
            <rect x="-1.5" y="0" width="3" height="58" rx="1.5" fill="url(#abSG)"/>
            <circle cx="0" cy="61" r="4" fill="#8b5e00" opacity="0.6"/>
            <circle cx="0" cy="0" r="3.5" fill="#ffdd00" style={{ animation:`abTip 2s ease-in-out ${it.d}s infinite` }}/>
            <circle cx="0" cy="0" r="7" fill="#ffaa00" opacity="0.28" style={{ animation:`abTip 2s ease-in-out ${it.d+0.3}s infinite` }}/>
            <path d="M0,-4 C-9,-20 7,-34 -5,-50" fill="none" stroke="#ffe066" strokeWidth="1.3" strokeLinecap="round" opacity="0.42" style={{ animation:`abSmoke 3s ease-in-out ${it.d}s infinite` }}/>
            <path d="M0,-4 C7,-22 -6,-36 4,-52" fill="none" stroke="#ffd700" strokeWidth="1" strokeLinecap="round" opacity="0.28" style={{ animation:`abSmoke 3.8s ease-in-out ${it.d+0.4}s infinite` }}/>
            <path d="M0,-4 C-4,-16 5,-30 -2,-44" fill="none" stroke="#ffee88" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" style={{ animation:`abSmoke 4.5s ease-in-out ${it.d+0.8}s infinite` }}/>
          </g>
        );
        if (it.t === "dh") return (
          <g key={i} transform={`translate(${it.x},${it.y}) scale(${it.s})`}
            style={{ opacity:0.12, animation:`abFloat 9.5s ease-in-out ${it.d}s infinite` }}>
            <polygon points="0,-30 -17,0 17,0" fill="url(#abCG)" opacity="0.85"/>
            <ellipse cx="0" cy="0" rx="19" ry="3.5" fill="#8b5500" opacity="0.6"/>
            <circle cx="0" cy="-30" r="3" fill="#ffcc00" style={{ animation:`abTip 2.5s ease-in-out ${it.d}s infinite` }}/>
            <path d="M0,-33 C-11,-52 9,-68 -6,-86" fill="none" stroke="#ffe566" strokeWidth="1.5" strokeLinecap="round" opacity="0.38" style={{ animation:`abSmoke 3.5s ease-in-out ${it.d}s infinite` }}/>
            <path d="M0,-33 C9,-54 -7,-70 5,-88" fill="none" stroke="#ffd700" strokeWidth="1" strokeLinecap="round" opacity="0.22" style={{ animation:`abSmoke 4.2s ease-in-out ${it.d+0.5}s infinite` }}/>
            <path d="M0,-33 C-4,-48 3,-62 -1,-78" fill="none" stroke="#fff0a0" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" style={{ animation:`abSmoke 5s ease-in-out ${it.d+1}s infinite` }}/>
          </g>
        );
        /* DIYA */
        return (
          <g key={i} transform={`translate(${it.x},${it.y}) scale(${it.s})`}
            style={{ opacity:0.15, animation:`abFloat 7s ease-in-out ${it.d}s infinite` }}>
            <ellipse cx="0" cy="-8" rx="24" ry="24" fill="url(#abGlow)" style={{ animation:`abDiyaGlow 2s ease-in-out ${it.d}s infinite` }}/>
            <path d="M-18,0 Q-16,12 0,14 Q16,12 18,0 Q8,4 0,4 Q-8,4 -18,0 Z" fill="#c8730a" opacity="0.88"/>
            <path d="M-18,0 Q0,-6 18,0" fill="none" stroke="#e8961a" strokeWidth="1.5"/>
            <line x1="0" y1="4" x2="0" y2="-4" stroke="#8b5e00" strokeWidth="1.2"/>
            <ellipse cx="0" cy="-14" rx="5" ry="9" fill="url(#abFG)" style={{ animation:`abFlame 1.4s ease-in-out ${it.d}s infinite` }}/>
            <ellipse cx="0" cy="-10" rx="3" ry="5" fill="#fff7a0" opacity="0.88" style={{ animation:`abFlame 1.1s ease-in-out ${it.d+0.2}s infinite` }}/>
            {/* 3 smoke wisps from diya */}
            <path d="M0,-23 C-6,-36 5,-50 -3,-64" fill="none" stroke="#ffeea0" strokeWidth="0.9" strokeLinecap="round" opacity="0.32" style={{ animation:`abSmoke 3.2s ease-in-out ${it.d}s infinite` }}/>
            <path d="M0,-23 C5,-38 -4,-52 3,-68" fill="none" stroke="#ffe580" strokeWidth="0.7" strokeLinecap="round" opacity="0.20" style={{ animation:`abSmoke 4s ease-in-out ${it.d+0.6}s infinite` }}/>
          </g>
        );
      })}
    </svg>
  );
}

/* ═══════════════════════════════════════════
   DOUBLE IMAGE LAYOUT
═══════════════════════════════════════════ */
function DoubleImageLayout() {
  return (
    <div style={{ position:"relative", height:"420px" }}>

      {/* ── IMAGE 1 — large, left-bottom ── */}
      <motion.div
        initial={{ opacity:0, x:-30, rotate:-3 }}
        whileInView={{ opacity:1, x:0, rotate:-3 }}
        transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
        style={{
          position:"absolute",
          left:0, bottom:0,
          width:"68%", height:"340px",
          borderRadius:"20px",
          overflow:"hidden",
          border:"3px solid #c8960c",
          boxShadow:"0 12px 48px rgba(160,100,0,0.22), 0 0 0 6px rgba(255,215,0,0.10)",
          zIndex:1,
        }}
      >
       <img
  src={aboutimage}
  alt="Rajpal Products Diwali"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  }}
/>
        {/* gold shimmer overlay */}
        <div style={{
          position:"absolute", inset:0,
          background:"linear-gradient(135deg,transparent 55%,rgba(255,215,0,0.15) 100%)",
          pointerEvents:"none",
        }}/>
        {/* corner brackets */}
        {[{top:8,left:8},{top:8,right:8},{bottom:8,left:8},{bottom:8,right:8}].map((pos,j)=>(
          <div key={j} aria-hidden="true" style={{
            position:"absolute", width:"16px", height:"16px",
            borderTop:    (pos.top    !== undefined) ? "2.5px solid #ffd700" : "none",
            borderBottom: (pos.bottom !== undefined) ? "2.5px solid #ffd700" : "none",
            borderLeft:   (pos.left   !== undefined) ? "2.5px solid #ffd700" : "none",
            borderRight:  (pos.right  !== undefined) ? "2.5px solid #ffd700" : "none",
            ...pos,
          }}/>
        ))}
      </motion.div>

      {/* ── IMAGE 2 — small, right-top ── */}
      <motion.div
        initial={{ opacity:0, x:30, rotate:4 }}
        whileInView={{ opacity:1, x:0, rotate:4 }}
        transition={{ duration:0.7, delay:0.18, ease:[0.22,1,0.36,1] }}
        style={{
          position:"absolute",
          right:0, top:0,
          width:"56%", height:"280px",
          borderRadius:"20px",
          overflow:"hidden",
          border:"3px solid #e6b800",
          boxShadow:"0 12px 48px rgba(160,100,0,0.20), 0 0 0 6px rgba(255,215,0,0.10)",
          zIndex:2,
        }}
      >
        <img
          src="aboutimage2"
          alt="Rajpal Products Agarbatti"
          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
        />
        <div style={{
          position:"absolute", inset:0,
          background:"linear-gradient(135deg,rgba(255,215,0,0.12) 0%,transparent 55%)",
          pointerEvents:"none",
        }}/>
        {[{top:8,left:8},{top:8,right:8},{bottom:8,left:8},{bottom:8,right:8}].map((pos,j)=>(
          <div key={j} aria-hidden="true" style={{
            position:"absolute", width:"16px", height:"16px",
            borderTop:    (pos.top    !== undefined) ? "2.5px solid #ffd700" : "none",
            borderBottom: (pos.bottom !== undefined) ? "2.5px solid #ffd700" : "none",
            borderLeft:   (pos.left   !== undefined) ? "2.5px solid #ffd700" : "none",
            borderRight:  (pos.right  !== undefined) ? "2.5px solid #ffd700" : "none",
            ...pos,
          }}/>
        ))}
      </motion.div>

      {/* ── floating year badge ── */}
      <motion.div
        initial={{ opacity:0, scale:0.7 }}
        whileInView={{ opacity:1, scale:1 }}
        transition={{ duration:0.5, delay:0.4 }}
        style={{
          position:"absolute", bottom:24, right:16,
          zIndex:3,
          width:"86px", height:"86px",
          borderRadius:"50%",
          background:"linear-gradient(135deg,#ffd700 0%,#c8960c 60%,#e6b800 100%)",
          border:"3px solid rgba(255,255,255,0.7)",
          boxShadow:"0 8px 32px rgba(180,120,0,0.35)",
          display:"flex", flexDirection:"column",
          alignItems:"center", justifyContent:"center",
          textAlign:"center",
        }}
      >
        <span style={{ fontFamily:"'Cinzel',serif", fontSize:"9px", letterSpacing:"1.5px", color:"#3a1a00", lineHeight:1 }}>SINCE</span>
        <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"22px", fontWeight:700, color:"#3a1a00", lineHeight:1.1 }}>1981</span>
        <span style={{ fontFamily:"'Cinzel',serif", fontSize:"7px", letterSpacing:"1px", color:"rgba(60,20,0,0.7)" }}>LEGACY</span>
      </motion.div>

      {/* ── floating diya emoji badge ── */}
      <motion.div
        initial={{ opacity:0, y:-10 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.5, delay:0.5 }}
        style={{
          position:"absolute", top:16, left:16, zIndex:3,
          background:"rgba(255,255,255,0.92)",
          borderRadius:"50%", width:"52px", height:"52px",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:"26px",
          boxShadow:"0 4px 18px rgba(180,120,0,0.22)",
          border:"1.5px solid rgba(200,150,12,0.3)",
        }}
      >🪔</motion.div>

      {/* ── overlap connector line ── */}
      <div aria-hidden="true" style={{
        position:"absolute", bottom:80, left:"30%",
        width:"45%", height:"2px",
        background:"linear-gradient(90deg,transparent,#c8960c,#ffd700,transparent)",
        zIndex:3, opacity:0.5,
      }}/>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN ABOUT SECTION
═══════════════════════════════════════════ */
const About = () => {
  const [count, setCount] = useState(0);
  const ref  = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = 21000, duration = 2000;
    const inc = Math.ceil(end / (duration / 20));
    const timer = setInterval(() => {
      start += inc;
      if (start >= end) { start = end; clearInterval(timer); }
      setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=EB+Garamond:ital,wght@0,400;1,400&display=swap"/>
      <style>{`
        @keyframes abFloat {
          0%,100% { transform:translateY(0px) rotate(0deg); }
          33%      { transform:translateY(-14px) rotate(2deg); }
          66%      { transform:translateY(-5px) rotate(-2deg); }
        }
        @keyframes abTip {
          0%,100% { opacity:.9; } 50% { opacity:.3; }
        }
        @keyframes abSmoke {
          0%,100% { opacity:.4; transform:translateX(0) scaleY(1); }
          50%      { opacity:.08; transform:translateX(-5px) scaleY(1.15); }
        }
        @keyframes abFlame {
          0%,100% { transform:scaleX(1) translateY(0); opacity:1; }
          33%      { transform:scaleX(0.82) translateY(-2px) rotate(3deg); opacity:.85; }
          66%      { transform:scaleX(1.12) translateY(1px) rotate(-2deg); opacity:.9; }
        }
        @keyframes abDiyaGlow {
          0%,100% { opacity:.6; } 50% { opacity:.22; }
        }
        @keyframes abBeam {
          0%,100% { opacity:.07; transform:rotate(-28deg) translateX(-12px); }
          50%      { opacity:.15; transform:rotate(-28deg) translateX(12px); }
        }
        @keyframes abBeam2 {
          0%,100% { opacity:.09; transform:rotate(22deg) translateX(12px); }
          50%      { opacity:.17; transform:rotate(22deg) translateX(-12px); }
        }
        @keyframes abMandala {
          from { transform:translate(-50%,-50%) rotate(0deg); }
          to   { transform:translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes abCounter {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes abShine {
          0%,100% { background-position:0% 50%; }
          50%      { background-position:100% 50%; }
        }
        @keyframes abHeaderShimmer {
          0%   { transform:translateX(-100%); }
          60%  { transform:translateX(220%); }
          100% { transform:translateX(220%); }
        }
        @keyframes abFeatureIn {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden py-20"
        style={{
          background:"linear-gradient(160deg,#fffff0 0%,#fffde0 22%,#fff8a8 52%,#fffbe5 80%,#fffde0 100%)",
        }}
      >
        {/* ── stripe texture ── */}
        <div aria-hidden="true" style={{
          position:"absolute", inset:0, pointerEvents:"none",
          background:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(200,150,12,0.022) 3px,rgba(200,150,12,0.022) 6px)",
        }}/>

        {/* ── cinematic light beams ── */}
        <div aria-hidden="true" style={{
          position:"absolute", top:"-20%", left:"12%",
          width:"300px", height:"200%",
          background:"linear-gradient(180deg,rgba(255,220,80,0.10) 0%,transparent 100%)",
          transform:"rotate(-28deg)", transformOrigin:"top center",
          animation:"abBeam 8s ease-in-out infinite", pointerEvents:"none",
        }}/>
        <div aria-hidden="true" style={{
          position:"absolute", top:"-20%", right:"18%",
          width:"220px", height:"180%",
          background:"linear-gradient(180deg,rgba(255,195,50,0.11) 0%,transparent 100%)",
          transform:"rotate(22deg)", transformOrigin:"top center",
          animation:"abBeam2 10s ease-in-out 1.5s infinite", pointerEvents:"none",
        }}/>

        {/* ── golden halos ── */}
        <div aria-hidden="true" style={{
          position:"absolute", top:"-10%", left:"50%", transform:"translateX(-50%)",
          width:"860px", height:"440px", borderRadius:"50%",
          background:"radial-gradient(ellipse,rgba(255,220,0,0.20) 0%,transparent 70%)",
          pointerEvents:"none",
        }}/>
        <div aria-hidden="true" style={{
          position:"absolute", bottom:"-8%", right:"-5%",
          width:"420px", height:"340px", borderRadius:"50%",
          background:"radial-gradient(ellipse,rgba(255,175,0,0.16) 0%,transparent 70%)",
          pointerEvents:"none",
        }}/>

        {/* ── animated incense background ── */}
        <IncenseBg />

        {/* ── rotating mandala watermark ── */}
        <svg aria-hidden="true" viewBox="0 0 500 500" style={{
          position:"absolute", top:"50%", left:"50%",
          animation:"abMandala 100s linear infinite",
          width:"720px", height:"720px",
          opacity:0.042, pointerEvents:"none",
        }}>
          {[55,90,130,170,205,238].map((r,i)=>(
            <circle key={i} cx="250" cy="250" r={r} fill="none" stroke="#c8960c"
              strokeWidth={i%2===0?"1":"0.5"} strokeDasharray={i%2===0?"6 4":"2 6"}/>
          ))}
          {Array.from({length:18}).map((_,i)=>{
            const a=(i*20*Math.PI)/180;
            return <line key={i} x1={250+88*Math.cos(a)} y1={250+88*Math.sin(a)}
              x2={250+238*Math.cos(a)} y2={250+238*Math.sin(a)} stroke="#c8960c" strokeWidth="0.5"/>;
          })}
        </svg>

        <div className="relative mx-auto max-w-7xl px-4" style={{ zIndex:1 }}>

          {/* ── SECTION TITLE ── */}
          <SectionTitle
            eyebrow="About Us"
            title="RAJPAL PRODUCTS — PURELY DIVINE"
            subtitle="Spreading fragrance, tradition and spirituality since 1981"
          />

          {/* ── COUNTER ── */}
          <motion.div
            initial={{ opacity:0, y:16 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.5 }}
            className="mt-6 flex items-center gap-4"
          >
            <div style={{
              fontFamily:"'Cormorant Garamond',serif",
              fontSize:"44px", fontWeight:700, lineHeight:1,
              background:"linear-gradient(135deg,#7a4400 0%,#c8960c 30%,#ffd700 55%,#c8960c 80%,#7a4400 100%)",
              backgroundSize:"220% 220%",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
              animation:"abShine 4s ease infinite",
            }}>
              {count.toLocaleString()}+
            </div>
            <p style={{
              fontFamily:"'EB Garamond',serif",
              fontSize:"16px", fontStyle:"italic",
              color:"#7a5000", lineHeight:1.4,
            }}>
              Happy Customers<br/>
              <span style={{ fontSize:"13px", color:"#a07828" }}>Across India & Global Markets</span>
            </p>
          </motion.div>

          {/* ── MAIN CARD ── */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
            className="mt-10 grid items-center gap-10 md:grid-cols-2"
            style={{
              borderRadius:"24px",
              background:"linear-gradient(145deg,rgba(255,255,240,0.92) 0%,rgba(255,253,220,0.88) 100%)",
              border:"1.5px solid rgba(200,150,12,0.32)",
              boxShadow:"0 12px 60px rgba(160,100,0,0.14), inset 0 1px 0 rgba(255,255,255,0.85)",
              padding:"36px 36px",
              backdropFilter:"blur(8px)",
              position:"relative", overflow:"hidden",
            }}
          >
            {/* card shimmer line */}
            <div aria-hidden="true" style={{
              position:"absolute", top:0, left:0, right:0, height:"2.5px",
              background:"linear-gradient(90deg,transparent,#ffd700,#c8960c,#ffd700,transparent)",
              opacity:0.7,
            }}/>

            {/* ── LEFT TEXT ── */}
            <div>
              {/* eyebrow */}
              <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"12px" }}>
                <div style={{ height:"1px", width:"36px", background:"linear-gradient(90deg,transparent,#c8960c)" }}/>
                <p style={{
                  fontFamily:"'Cinzel',serif", fontSize:"9px",
                  letterSpacing:"4px", textTransform:"uppercase", color:"#9a6800",
                }}>Our Story</p>
              </div>

              <h2 style={{
                fontFamily:"'Cormorant Garamond',serif",
                fontSize:"clamp(26px,3vw,36px)", fontWeight:700,
                color:"#6b3600", lineHeight:1.2, marginBottom:"16px",
              }}>
                About Our Company
              </h2>

              <p style={{
                fontFamily:"'EB Garamond',serif",
                fontSize:"16px", lineHeight:1.8, color:"#7a4a00",
                marginBottom:"14px",
              }}>
                RAJPAL PRODUCTS blends traditional incense craftsmanship
                with modern fragrance innovation. We focus on purity,
                devotion, and premium quality products that enhance
                spiritual experiences.
              </p>

              <p style={{
                fontFamily:"'EB Garamond',serif", fontStyle:"italic",
                fontSize:"14.5px", lineHeight:1.75, color:"#9a6a00",
                marginBottom:"24px",
              }}>
                Our mission is to deliver divine fragrance solutions
                across India and global markets with trust and excellence.
              </p>

              {/* stats row */}
              <div style={{ display:"flex", gap:"24px", marginBottom:"26px" }}>
                {[["43+","Years Legacy"],["200+","Products"],["50+","Countries"]].map(([num,lbl],i)=>(
                  <div key={i} style={{ textAlign:"center" }}>
                    <div style={{
                      fontFamily:"'Cormorant Garamond',serif",
                      fontSize:"26px", fontWeight:700, color:"#c8960c", lineHeight:1,
                    }}>{num}</div>
                    <div style={{
                      fontFamily:"'Cinzel',serif",
                      fontSize:"8px", letterSpacing:"2px",
                      textTransform:"uppercase", color:"#9a6800", marginTop:"3px",
                    }}>{lbl}</div>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <button
                onClick={() => navigate("/contact")}
                onMouseEnter={e=>{
                  e.currentTarget.style.transform="translateY(-2px)";
                  e.currentTarget.style.boxShadow="0 12px 36px rgba(200,150,12,0.45)";
                }}
                onMouseLeave={e=>{
                  e.currentTarget.style.transform="translateY(0)";
                  e.currentTarget.style.boxShadow="0 6px 24px rgba(200,150,12,0.28)";
                }}
                style={{
                  fontFamily:"'Cinzel',serif",
                  fontSize:"11px", letterSpacing:"3px", textTransform:"uppercase",
                  color:"#3a1a00",
                  background:"linear-gradient(135deg,#ffd700 0%,#c8960c 50%,#e6b800 100%)",
                  border:"none", borderRadius:"40px",
                  padding:"14px 36px", cursor:"pointer",
                  boxShadow:"0 6px 24px rgba(200,150,12,0.28)",
                  transition:"transform 0.25s, box-shadow 0.25s",
                }}
              >
                Learn More
              </button>
            </div>

            {/* ── RIGHT — DOUBLE IMAGE ── */}
            <DoubleImageLayout />
          </motion.div>

          {/* ── FEATURES ── */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon:"👤", title:"Trusted Brand",     desc:"Serving since 1981 with purity and devotion.",  accent:"#ffd700" },
              { icon:"✉️", title:"Customer Support",  desc:"Fast response & reliable service, always.",      accent:"#c8960c" },
              { icon:"✔️", title:"Quality Assured",   desc:"Premium fragrance production, certified.",       accent:"#e6b800" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, y:24 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.5, delay:i*0.12 }}
                whileHover={{ y:-6, boxShadow:"0 16px 48px rgba(160,100,0,0.18)" }}
                style={{
                  borderRadius:"20px",
                  background:"linear-gradient(145deg,#fffff2 0%,#fffde6 60%,#fef5c0 100%)",
                  border:"1.5px solid rgba(200,150,12,0.28)",
                  boxShadow:"0 4px 18px rgba(160,100,0,0.09), inset 0 1px 0 rgba(255,255,255,0.8)",
                  padding:"28px 24px",
                  textAlign:"center",
                  position:"relative", overflow:"hidden",
                  cursor:"default",
                }}
              >
                {/* top accent line */}
                <div style={{
                  position:"absolute", top:0, left:0, right:0, height:"2.5px",
                  background:`linear-gradient(90deg,transparent,${item.accent},transparent)`,
                }}/>
                {/* corner mandala */}
                <svg viewBox="0 0 50 50" style={{
                  position:"absolute", top:-4, right:-4, width:46, height:46, opacity:0.12,
                }}>
                  <circle cx="25" cy="25" r="20" fill="none" stroke="#c8960c" strokeWidth="0.8" strokeDasharray="3 3"/>
                  <circle cx="25" cy="25" r="12" fill="none" stroke="#c8960c" strokeWidth="0.5" strokeDasharray="2 4"/>
                </svg>

                <div style={{
                  fontSize:"32px", marginBottom:"12px",
                  filter:"drop-shadow(0 2px 8px rgba(200,150,12,0.4))",
                }}>{item.icon}</div>

                <h3 style={{
                  fontFamily:"'Cormorant Garamond',serif",
                  fontSize:"19px", fontWeight:700, color:"#6b3600",
                  marginBottom:"8px",
                }}>{item.title}</h3>

                <p style={{
                  fontFamily:"'EB Garamond',serif",
                  fontSize:"14.5px", lineHeight:1.7, color:"#8a5a00",
                }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* bottom gold line */}
        <div aria-hidden="true" style={{
          position:"absolute", bottom:0, left:0, right:0, height:"3px",
          background:"linear-gradient(90deg,transparent,#ffd700,#c8960c,#ffd700,transparent)",
          opacity:0.5,
        }}/>
      </section>
    </>
  );
};

export default About;