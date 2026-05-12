import { useState, useRef, useEffect } from "react";
import ContactForm from "../components/ContactForm";
import SectionTitle from "../components/SectionTitle";

/* ─────────────────────────────────────────────
   BACKGROUND INCENSE + DIYA SVG LAYER
───────────────────────────────────────────── */
const BG_ITEMS = [
  { t:"diya", x:60,   y:80,  s:0.65, d:0.0 },
  { t:"ag",   x:180,  y:280, s:0.55, d:1.2 },
  { t:"diya", x:340,  y:50,  s:0.80, d:0.5 },
  { t:"dh",   x:500,  y:210, s:0.70, d:2.0 },
  { t:"ag",   x:660,  y:340, s:0.58, d:0.8 },
  { t:"diya", x:820,  y:70,  s:0.72, d:1.5 },
  { t:"ag",   x:950,  y:260, s:0.78, d:0.3 },
  { t:"dh",   x:1070, y:45,  s:0.60, d:2.5 },
  { t:"diya", x:1210, y:300, s:0.65, d:1.0 },
  { t:"dh",   x:50,   y:460, s:0.50, d:3.0 },
  { t:"ag",   x:300,  y:490, s:0.56, d:1.8 },
  { t:"diya", x:590,  y:440, s:0.68, d:0.6 },
  { t:"dh",   x:870,  y:475, s:0.52, d:2.2 },
  { t:"ag",   x:1130, y:430, s:0.62, d:1.1 },
  { t:"diya", x:450,  y:170, s:0.75, d:0.9 },
  { t:"dh",   x:740,  y:160, s:0.65, d:1.7 },
];

function IncenseBg() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1300 560"
      preserveAspectRatio="xMidYMid slice"
      style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }}
    >
      <defs>
        <linearGradient id="sg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#c8960c" />
          <stop offset="100%" stopColor="#5a2800" />
        </linearGradient>
        <linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#d4a017" />
          <stop offset="100%" stopColor="#7a3400" />
        </linearGradient>
        <radialGradient id="flameGrad" cx="50%" cy="60%" r="50%">
          <stop offset="0%"   stopColor="#fff7a0" />
          <stop offset="40%"  stopColor="#ffcc00" />
          <stop offset="100%" stopColor="#ff6600" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glowR" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#ffd700" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
        </radialGradient>
      </defs>

      {BG_ITEMS.map((it, i) => {
        if (it.t === "ag") return (
          <g key={i} transform={`translate(${it.x},${it.y}) scale(${it.s})`}
            style={{ opacity:0.13, animation:`agFloat 8s ease-in-out ${it.d}s infinite` }}>
            <rect x="-1.5" y="0" width="3" height="58" rx="1.5" fill="url(#sg2)" />
            <circle cx="0" cy="61" r="4" fill="#8b5e00" opacity="0.6" />
            <circle cx="0" cy="0" r="3.5" fill="#ffdd00"
              style={{ animation:`tipGlow2 2s ease-in-out ${it.d}s infinite` }} />
            <circle cx="0" cy="0" r="7" fill="#ffaa00" opacity="0.28"
              style={{ animation:`tipGlow2 2s ease-in-out ${it.d+0.3}s infinite` }} />
            <path d="M0,-4 C-8,-18 6,-32 -4,-46" fill="none" stroke="#ffe066" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"
              style={{ animation:`smokeW 3s ease-in-out ${it.d}s infinite` }} />
            <path d="M0,-4 C6,-20 -5,-34 3,-50" fill="none" stroke="#ffd700" strokeWidth="0.9" strokeLinecap="round" opacity="0.25"
              style={{ animation:`smokeW 3.6s ease-in-out ${it.d+0.4}s infinite` }} />
          </g>
        );
        if (it.t === "dh") return (
          <g key={i} transform={`translate(${it.x},${it.y}) scale(${it.s})`}
            style={{ opacity:0.11, animation:`agFloat 9s ease-in-out ${it.d}s infinite` }}>
            <polygon points="0,-30 -17,0 17,0" fill="url(#cg2)" opacity="0.85" />
            <ellipse cx="0" cy="0" rx="19" ry="3.5" fill="#8b5500" opacity="0.6" />
            <circle cx="0" cy="-30" r="3" fill="#ffcc00"
              style={{ animation:`tipGlow2 2.5s ease-in-out ${it.d}s infinite` }} />
            <path d="M0,-33 C-10,-50 8,-66 -5,-82" fill="none" stroke="#ffe566" strokeWidth="1.4" strokeLinecap="round" opacity="0.38"
              style={{ animation:`smokeW 3.5s ease-in-out ${it.d}s infinite` }} />
            <path d="M0,-33 C8,-52 -6,-68 4,-86" fill="none" stroke="#ffd700" strokeWidth="0.9" strokeLinecap="round" opacity="0.22"
              style={{ animation:`smokeW 4s ease-in-out ${it.d+0.5}s infinite` }} />
          </g>
        );
        /* DIYA */
        return (
          <g key={i} transform={`translate(${it.x},${it.y}) scale(${it.s})`}
            style={{ opacity:0.14, animation:`agFloat 7s ease-in-out ${it.d}s infinite` }}>
            {/* glow halo */}
            <ellipse cx="0" cy="-8" rx="22" ry="22" fill="url(#glowR)"
              style={{ animation:`diyaGlow 2s ease-in-out ${it.d}s infinite` }} />
            {/* bowl */}
            <path d="M-18,0 Q-16,12 0,14 Q16,12 18,0 Q8,4 0,4 Q-8,4 -18,0 Z" fill="#c8730a" opacity="0.9" />
            <path d="M-18,0 Q0,-6 18,0" fill="none" stroke="#e8961a" strokeWidth="1.5" />
            {/* wick */}
            <line x1="0" y1="4" x2="0" y2="-4" stroke="#8b5e00" strokeWidth="1.2" />
            {/* flame */}
            <ellipse cx="0" cy="-14" rx="5" ry="9" fill="url(#flameGrad)"
              style={{ animation:`flameDance 1.5s ease-in-out ${it.d}s infinite` }} />
            <ellipse cx="0" cy="-10" rx="3" ry="5" fill="#fff7a0" opacity="0.9"
              style={{ animation:`flameDance 1.2s ease-in-out ${it.d+0.2}s infinite` }} />
            {/* smoke */}
            <path d="M0,-23 C-5,-35 4,-46 -2,-58" fill="none" stroke="#ffeea0" strokeWidth="0.8" strokeLinecap="round" opacity="0.35"
              style={{ animation:`smokeW 3s ease-in-out ${it.d}s infinite` }} />
          </g>
        );
      })}
    </svg>
  );
}

/* ─────────────────────────────────────────────
   CONTACT INFO PANEL
───────────────────────────────────────────── */
function ContactInfo() {
  const [hovRow, setHovRow] = useState(null);

  const rows = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width:20, height:20 }}>
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: "Address",
      value: "Rajpal Products, India",
      sub: "Wholesale & Export Hub",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width:20, height:20 }}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: "Email",
      value: "info@rajpalproducts.in",
      sub: "Reply within 24 hours",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width:20, height:20 }}>
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15z"/>
        </svg>
      ),
      label: "Phone",
      value: "+91-99999-99999",
      sub: "Mon–Sat, 9am–7pm IST",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width:20, height:20 }}>
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      label: "Business Hours",
      value: "Mon – Sat: 9:00 AM – 7:00 PM",
      sub: "Sunday: Closed",
    },
  ];

  return (
    <div style={{
      position:"relative", overflow:"hidden",
      borderRadius:"20px",
      background:"linear-gradient(145deg,#fffff2 0%,#fffde6 55%,#fef5c0 100%)",
      border:"1.5px solid rgba(200,150,12,0.3)",
      boxShadow:"0 8px 40px rgba(180,120,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
      padding:"0",
    }}>

      {/* gold header band */}
      <div style={{
        padding:"22px 26px 18px",
        background:"linear-gradient(135deg,#c8960c 0%,#e6b800 45%,#c8960c 100%)",
        borderRadius:"18px 18px 0 0",
        position:"relative", overflow:"hidden",
      }}>
        {/* shimmer on header */}
        <div aria-hidden="true" style={{
          position:"absolute", inset:0,
          background:"linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.18) 50%,transparent 70%)",
          animation:"headerShimmer 3s ease-in-out infinite",
        }}/>
        <p style={{
          fontFamily:"'Cinzel',serif", fontSize:"10px",
          letterSpacing:"4px", textTransform:"uppercase",
          color:"rgba(60,20,0,0.7)", marginBottom:"6px",
        }}>Get in Touch</p>
        <h3 style={{
          fontFamily:"'Cormorant Garamond',serif",
          fontSize:"24px", fontWeight:700,
          color:"#3a1a00", lineHeight:1.2,
        }}>Business Contact</h3>
        {/* decorative dots */}
        <div style={{ display:"flex", gap:"5px", marginTop:"10px" }}>
          {[1,2,3].map(n => (
            <div key={n} style={{
              width:"5px", height:"5px", borderRadius:"50%",
              background:"rgba(60,20,0,0.4)",
            }}/>
          ))}
        </div>
      </div>

      {/* contact rows */}
      <div style={{ padding:"6px 0 16px" }}>
        {rows.map((row, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovRow(i)}
            onMouseLeave={() => setHovRow(null)}
            style={{
              display:"flex", alignItems:"flex-start", gap:"14px",
              padding:"14px 24px",
              background: hovRow === i ? "rgba(255,215,0,0.10)" : "transparent",
              transition:"background 0.25s",
              cursor:"default",
              position:"relative",
            }}
          >
            {/* left accent on hover */}
            <div style={{
              position:"absolute", left:0, top:0, bottom:0,
              width:"3px",
              background:"linear-gradient(180deg,transparent,#c8960c,transparent)",
              opacity: hovRow === i ? 1 : 0,
              transition:"opacity 0.25s",
            }}/>

            {/* icon box */}
            <div style={{
              flexShrink:0,
              width:"40px", height:"40px",
              borderRadius:"10px",
              background: hovRow === i
                ? "linear-gradient(135deg,#ffd700,#c8960c)"
                : "linear-gradient(135deg,#fff8d6,#ffe896)",
              border:"1px solid rgba(200,150,12,0.35)",
              display:"flex", alignItems:"center", justifyContent:"center",
              color: hovRow === i ? "#3a1a00" : "#9a6800",
              transition:"all 0.3s",
              boxShadow: hovRow === i ? "0 4px 14px rgba(200,150,12,0.35)" : "none",
            }}>
              {row.icon}
            </div>

            {/* text */}
            <div>
              <p style={{
                fontFamily:"'Cinzel',serif",
                fontSize:"9px", letterSpacing:"2.5px",
                textTransform:"uppercase", color:"#9a6800",
                marginBottom:"3px",
              }}>{row.label}</p>
              <p style={{
                fontFamily:"'Cormorant Garamond',serif",
                fontSize:"15.5px", fontWeight:600,
                color: hovRow === i ? "#5a2e00" : "#7a4400",
                transition:"color 0.25s",
                lineHeight:1.3,
              }}>{row.value}</p>
              <p style={{
                fontFamily:"'EB Garamond',serif",
                fontStyle:"italic", fontSize:"13px",
                color:"#a07828", marginTop:"2px",
              }}>{row.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MAP */}
      <div style={{ padding:"0 16px 16px" }}>
        <div style={{
          position:"relative",
          borderRadius:"14px", overflow:"hidden",
          border:"1.5px solid rgba(200,150,12,0.3)",
          boxShadow:"0 4px 20px rgba(160,100,0,0.14)",
        }}>
          {/* gold overlay frame corners */}
          {["top-0 left-0","top-0 right-0","bottom-0 left-0","bottom-0 right-0"].map((pos, i) => (
            <div key={i} aria-hidden="true" style={{
              position:"absolute", zIndex:2,
              width:"14px", height:"14px",
              borderTop: pos.includes("top") ? "2px solid #c8960c" : "none",
              borderBottom: pos.includes("bottom") ? "2px solid #c8960c" : "none",
              borderLeft:  pos.includes("left")  ? "2px solid #c8960c" : "none",
              borderRight: pos.includes("right") ? "2px solid #c8960c" : "none",
              top:    pos.includes("top")    ? 6 : "auto",
              bottom: pos.includes("bottom") ? 6 : "auto",
              left:   pos.includes("left")   ? 6 : "auto",
              right:  pos.includes("right")  ? 6 : "auto",
            }}/>
          ))}
          <iframe
            title="Google map"
            src="https://www.google.com/maps?q=India&output=embed"
            style={{
              width:"100%", height:"200px",
              border:"none", display:"block",
              filter:"sepia(30%) saturate(1.2) hue-rotate(5deg)",
            }}
          />
        </div>
      </div>

      {/* bottom ornament */}
      <div style={{
        display:"flex", alignItems:"center", justifyContent:"center",
        gap:"10px", padding:"10px 0 18px",
      }}>
        <div style={{ height:"1px", width:"50px", background:"linear-gradient(90deg,transparent,rgba(200,150,12,0.4))" }}/>
        <svg viewBox="0 0 32 12" width="32" height="12">
          <polygon points="16,1 19,6 16,11 13,6" fill="#c8960c" opacity="0.8"/>
          <circle cx="5"  cy="6" r="2" fill="#c8960c" opacity="0.4"/>
          <circle cx="27" cy="6" r="2" fill="#c8960c" opacity="0.4"/>
          <line x1="8" y1="6" x2="12" y2="6" stroke="#c8960c" strokeWidth="0.8" opacity="0.4"/>
          <line x1="20" y1="6" x2="24" y2="6" stroke="#c8960c" strokeWidth="0.8" opacity="0.4"/>
        </svg>
        <div style={{ height:"1px", width:"50px", background:"linear-gradient(90deg,rgba(200,150,12,0.4),transparent)" }}/>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   WRAPPED CONTACT FORM (styled shell)
───────────────────────────────────────────── */
function FormShell() {
  return (
    <div style={{
      position:"relative", overflow:"hidden",
      borderRadius:"20px",
      background:"linear-gradient(145deg,#fffff2 0%,#fffde6 55%,#fef5c0 100%)",
      border:"1.5px solid rgba(200,150,12,0.3)",
      boxShadow:"0 8px 40px rgba(180,120,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
    }}>
      {/* gold header band */}
      <div style={{
        padding:"22px 26px 18px",
        background:"linear-gradient(135deg,#c8960c 0%,#e6b800 45%,#c8960c 100%)",
        borderRadius:"18px 18px 0 0",
        position:"relative", overflow:"hidden",
      }}>
        <div aria-hidden="true" style={{
          position:"absolute", inset:0,
          background:"linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.18) 50%,transparent 70%)",
          animation:"headerShimmer 3.5s ease-in-out 0.5s infinite",
        }}/>
        <p style={{
          fontFamily:"'Cinzel',serif", fontSize:"10px",
          letterSpacing:"4px", textTransform:"uppercase",
          color:"rgba(60,20,0,0.7)", marginBottom:"6px",
        }}>Send a Message</p>
        <h3 style={{
          fontFamily:"'Cormorant Garamond',serif",
          fontSize:"24px", fontWeight:700,
          color:"#3a1a00", lineHeight:1.2,
        }}>Premium Inquiry Form</h3>
        <div style={{ display:"flex", gap:"5px", marginTop:"10px" }}>
          {[1,2,3].map(n => (
            <div key={n} style={{ width:"5px", height:"5px", borderRadius:"50%", background:"rgba(60,20,0,0.4)" }}/>
          ))}
        </div>
      </div>

      {/* form content */}
      <div style={{ padding:"24px 26px 26px" }}>
        <ContactForm />
      </div>

      {/* bottom ornament */}
      <div style={{
        display:"flex", alignItems:"center", justifyContent:"center",
        gap:"10px", padding:"4px 0 18px",
      }}>
        <div style={{ height:"1px", width:"50px", background:"linear-gradient(90deg,transparent,rgba(200,150,12,0.4))" }}/>
        <svg viewBox="0 0 32 12" width="32" height="12">
          <polygon points="16,1 19,6 16,11 13,6" fill="#c8960c" opacity="0.8"/>
          <circle cx="5"  cy="6" r="2" fill="#c8960c" opacity="0.4"/>
          <circle cx="27" cy="6" r="2" fill="#c8960c" opacity="0.4"/>
          <line x1="8" y1="6" x2="12" y2="6" stroke="#c8960c" strokeWidth="0.8" opacity="0.4"/>
          <line x1="20" y1="6" x2="24" y2="6" stroke="#c8960c" strokeWidth="0.8" opacity="0.4"/>
        </svg>
        <div style={{ height:"1px", width:"50px", background:"linear-gradient(90deg,rgba(200,150,12,0.4),transparent)" }}/>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════ */
const Contact = () => (
  <>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=EB+Garamond:ital,wght@0,400;1,400&display=swap"
    />
    <style>{`
      @keyframes agFloat {
        0%,100% { transform:translateY(0px) rotate(0deg); }
        33%      { transform:translateY(-14px) rotate(2deg); }
        66%      { transform:translateY(-6px) rotate(-2deg); }
      }
      @keyframes tipGlow2 {
        0%,100% { opacity:.9; }
        50%      { opacity:.3; }
      }
      @keyframes smokeW {
        0%,100% { opacity:.4; transform:translateX(0); }
        50%      { opacity:.1; transform:translateX(-5px); }
      }
      @keyframes flameDance {
        0%,100% { transform:scaleX(1) translateY(0); opacity:1; }
        33%      { transform:scaleX(0.85) translateY(-2px) rotate(3deg); opacity:0.85; }
        66%      { transform:scaleX(1.1) translateY(1px) rotate(-2deg); opacity:0.9; }
      }
      @keyframes diyaGlow {
        0%,100% { opacity:0.6; rx:22; ry:22; }
        50%      { opacity:0.25; rx:28; ry:28; }
      }
      @keyframes headerShimmer {
        0%   { transform:translateX(-100%); }
        60%  { transform:translateX(200%); }
        100% { transform:translateX(200%); }
      }
      @keyframes sectionReveal {
        from { opacity:0; transform:translateY(32px); }
        to   { opacity:1; transform:translateY(0); }
      }
      @keyframes titleShine {
        0%,100% { background-position:0% 50%; }
        50%      { background-position:100% 50%; }
      }
      @keyframes rotateMandala {
        from { transform:translate(-50%,-50%) rotate(0deg); }
        to   { transform:translate(-50%,-50%) rotate(360deg); }
      }
      @keyframes divaReveal {
        from { opacity:0; letter-spacing:10px; }
        to   { opacity:1; letter-spacing:5px; }
      }
      @keyframes panelReveal {
        from { opacity:0; transform:translateY(24px) scale(0.97); }
        to   { opacity:1; transform:translateY(0) scale(1); }
      }
      @keyframes lightBeam {
        0%,100% { opacity:0.06; transform:rotate(-30deg) translateX(-10px); }
        50%      { opacity:0.13; transform:rotate(-30deg) translateX(10px); }
      }
      @keyframes lightBeam2 {
        0%,100% { opacity:0.08; transform:rotate(25deg) translateX(10px); }
        50%      { opacity:0.16; transform:rotate(25deg) translateX(-10px); }
      }
    `}</style>

    <section
      className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16"
      style={{
        background:"linear-gradient(160deg,#fffff0 0%,#fffde0 20%,#fff8a8 50%,#fffbe5 80%,#fffde0 100%)",
        borderRadius:"28px",
        animation:"sectionReveal 0.8s cubic-bezier(0.22,1,0.36,1) both",
      }}
    >
      {/* ── stripe texture ── */}
      <div aria-hidden="true" style={{
        position:"absolute", inset:0, pointerEvents:"none",
        background:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(200,150,12,0.022) 3px,rgba(200,150,12,0.022) 6px)",
      }}/>

      {/* ── cinematic light beams ── */}
      <div aria-hidden="true" style={{
        position:"absolute", top:"-20%", left:"15%",
        width:"320px", height:"200%",
        background:"linear-gradient(180deg,rgba(255,230,80,0.09) 0%,transparent 100%)",
        transform:"rotate(-30deg)", transformOrigin:"top center",
        animation:"lightBeam 7s ease-in-out infinite",
        pointerEvents:"none",
      }}/>
      <div aria-hidden="true" style={{
        position:"absolute", top:"-20%", right:"20%",
        width:"240px", height:"180%",
        background:"linear-gradient(180deg,rgba(255,200,50,0.10) 0%,transparent 100%)",
        transform:"rotate(25deg)", transformOrigin:"top center",
        animation:"lightBeam2 9s ease-in-out 1s infinite",
        pointerEvents:"none",
      }}/>
      <div aria-hidden="true" style={{
        position:"absolute", top:"-10%", left:"50%",
        transform:"translateX(-50%)",
        width:"600px", height:"350px", borderRadius:"50%",
        background:"radial-gradient(ellipse,rgba(255,220,0,0.20) 0%,transparent 70%)",
        pointerEvents:"none",
      }}/>
      <div aria-hidden="true" style={{
        position:"absolute", bottom:"-8%", right:"-5%",
        width:"450px", height:"360px", borderRadius:"50%",
        background:"radial-gradient(ellipse,rgba(255,180,0,0.15) 0%,transparent 70%)",
        pointerEvents:"none",
      }}/>

      {/* ── animated diya / agarbatti / dhoop background ── */}
      <IncenseBg />

      {/* ── rotating mandala watermark ── */}
      <svg
        aria-hidden="true"
        viewBox="0 0 500 500"
        style={{
          position:"absolute", top:"50%", left:"50%",
          animation:"rotateMandala 100s linear infinite",
          width:"760px", height:"760px",
          opacity:0.04, pointerEvents:"none",
        }}
      >
        {[55,90,130,170,205,238].map((r,i) => (
          <circle key={i} cx="250" cy="250" r={r} fill="none"
            stroke="#c8960c"
            strokeWidth={i%2===0?"1":"0.5"}
            strokeDasharray={i%2===0?"6 4":"2 6"}/>
        ))}
        {Array.from({length:18}).map((_,i) => {
          const a=(i*20*Math.PI)/180;
          return <line key={i}
            x1={250+88*Math.cos(a)}  y1={250+88*Math.sin(a)}
            x2={250+238*Math.cos(a)} y2={250+238*Math.sin(a)}
            stroke="#c8960c" strokeWidth="0.5"/>;
        })}
      </svg>

      {/* ── SECTION TITLE (original component) ── */}
      <div className="relative z-10">
        <SectionTitle
          eyebrow="Contact"
          title="Connect With RAJPAL PRODUCTS"
          subtitle="Reach out for wholesale inquiries, export partnerships, and premium fragrance solutions."
        />
      </div>

      {/* ── TWO-COLUMN GRID (original structure) ── */}
      <div
        className="relative z-10 grid gap-8 md:grid-cols-2"
        style={{ animation:"panelReveal 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both" }}
      >
        {/* LEFT — ContactForm wrapped in gold shell */}
        <FormShell />

        {/* RIGHT — Contact info + map (original right panel) */}
        <ContactInfo />
      </div>

      {/* ── bottom gold line ── */}
      <div
        aria-hidden="true"
        style={{
          position:"absolute", bottom:0, left:0, right:0, height:"3px",
          background:"linear-gradient(90deg,transparent,#ffd700,#c8960c,#ffd700,transparent)",
          opacity:0.5,
        }}
      />
    </section>
  </>
);

export default Contact;