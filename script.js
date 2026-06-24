"use strict";
const A = "assets/";

/* ---------- Responsive scaling ---------- */
const DESIGN_W = 1512;
const DESIGN_H = 1986;

function scaleFrame() {
  const frame = document.getElementById("frame");
  const wrap  = document.getElementById("wrap");
  const scale = window.innerWidth / DESIGN_W;
  frame.style.transform = `scale(${scale})`;
  wrap.style.height = Math.ceil(DESIGN_H * scale) + "px";
}
scaleFrame();
window.addEventListener("resize", scaleFrame);

/* ---------- Card data (coords are card-relative, in Figma px) ---------- */
/* img  el: i/h = [cx, cy, w, h, rot, opacity]
   text el: i/h = [left, top, opacity]
   pill/mini el: i/h = [cx, cy, rot, opacity]
   rows el: i/h = [left, top, opacity]
   cream el: i/h = [cx, cy] (+ scale)                                       */

const CARDS = [
  { id:"intro", x:49, y:120, w:601, h:243, bg:"#f7f7f7", bgH:"#f7f7f7", r:24, clip:false, els:[
    { k:"text", z:1, cls:"intro-p", block:true, width:560, gap:150,
      txt:"Merhaba, ben Aslıhan §Dijital ürünler ve kullanıcı arayüzleri tasarlıyorum 💻 Estetik bakış açımı kullanıcı içgörüsüyle birleştirerek ✨ sade, işlevsel ve etkili deneyimler üretiyorum.",
      i:[18,50,1], h:[18,50,1] },
    { k:"img", z:4, src:"intro_photo1.png", r:13, i:[375,54,60,56,5,1],  h:[408,18,82,77,16,1] },
    { k:"img", z:3, src:"intro_photo2.png", r:13, i:[337,59,60,56,2,1],  h:[337,6,82,77,0,1] },
    { k:"img", z:2, src:"intro_photo3.png", r:13, i:[299,54,60,56,-4,1], h:[266,18,82,77,-16,1] },
  ]},

  { id:"estram", href:"estram.html", x:663, y:120, w:800, h:361, bg:"#f7f7f7", bgH:"#ffe8e0", r:35, clip:false, els:[
    { k:"img", z:2, src:"regularkartestram.png", fit:"contain", i:[614.5,188,300,315,0,1], h:[628.2,180.9,339,356,0,0] },
    { k:"img", z:2, src:"hoverkartestram.png",   fit:"contain", i:[614.5,188,300,315,0,0], h:[628.2,180.9,339,356,0,1] },
    { k:"rows", z:3, i:[142,82,1], h:[142,82,0] },
    { k:"mini", z:4, icon:"estram_phone2.png", pt:"When?",  ps:"See next arrivals", i:[184.3,188.7,-15.1,0], h:[184.3,159,-15.1,1,1.25] },
    { k:"img", z:3, src:"wherekart.png", fit:"contain", i:[302.9,167.4,120,120,10.58,0], h:[302.9,139,155,155,10.58,1] },
    { k:"text", z:5, cls:"caption", block:true, width:409, txt:"Redesigning daily tram travel to be faster, clearer, and easier to navigate",
      style:"font-size:18px;line-height:24px;", i:[40,283,1], h:[40,283,1] },
    { k:"img", z:6, src:"estram_logo_trim.png", fit:"contain", i:[79.5,29,79,19,0,1], h:[79.5,29,79,19,0,1] },
    { k:"text", z:6, cls:"label", txt:"", txt2:"Mobile App", style:"font-size:15px;line-height:19px;", i:[127,19.5,1], h:[127,19.5,1] },
  ]},

  { id:"splty", href:"splty.html", x:49, y:376, w:601, h:497, bg:"#f7f7f7", bgH:"#d5f1ea", r:20, clip:false, els:[
    { k:"img", z:2, src:"splty_asskksl.png", i:[111.7,241,206.9,108.3,9.83,1], h:[110.7,258.7,207.8,110,0.48,1] },
    { k:"img", z:3, src:"splty_hjdshjsd.png", i:[340.2,158.5,230,76,-5.61,1], h:[225.5,144.05,231,79.36,-0.84,1] },
    { k:"img", z:5, src:"splty_phone.png", i:[435,276,332,442,0,1], h:[439,269,347,462,0,1] },
    { k:"img", z:6, src:"splty_logo.png", i:[47.5,39.5,41,41,0,1], h:[47.5,41.5,41,41,0,1] },
    { k:"text", z:7, cls:"label", txt:"Splty", txt2:"Mobile App", style:"font-size:15px;line-height:31px;", i:[76,24,1], h:[76,26,1] },
    { k:"text", z:7, cls:"caption", block:true, width:255, txt:"Making shared expenses easier to track, split, and settle",
      style:"font-size:18px;line-height:26px;", i:[27,390,1], h:[27,390,1] },
  ]},

  { id:"nora", href:"noraai.html", x:663, y:492, w:800, h:381, bg:"#f7f7f7", bgH:"#fffcde", r:35, clip:false, els:[
    { k:"img", z:2, src:"nora_browser.png", r:12, i:[400.3,204.5,490.69,299,0,1], h:[400,204.5,490,299,0,1] },
    { k:"img", z:3, src:"nora_stickies.png", fit:"contain", i:[86.6,173.3,114.4,121.3,9.6,1], h:[190,110,198,210,9.6,1] },
    { k:"img", z:4, src:"nora_icon.png", fit:"contain", i:[716,328.5,72,75,0,1], h:[644.5,308,117,122,0,1] },
    { k:"img", z:5, src:"nora_logo_trim.png", fit:"contain", i:[83,29,86,17,0,1], h:[83,29,86,17,0,1] },
    { k:"text", z:6, cls:"label", txt:"", txt2:"Landing Page", style:"font-size:15px;line-height:17px;", i:[134,20.5,1], h:[134,20.5,1] },
  ]},

  { id:"scrap", href:"https://scrapbook-one-dusky.vercel.app?guest=1", x:49, y:884, w:784, h:497, bg:"#f7f7f7", bgH:"#ffe8fb", r:16, clip:false, els:[
    { k:"img", z:1, src:"scrap_board.png", r:10, i:[392.5,248.5,587,357,0,1], h:[391.5,248.5,611,373,0,1] },
    { k:"text", z:2, cls:"label", txt:"Scrapbook", txt2:"Vibe-Coded Web App", style:"font-size:15px;line-height:26px;", i:[27,22,1], h:[27,22,1] },
    { k:"img", z:3, src:"scrap_disco.png", fit:"contain", i:[47,100,76,76,0,1], h:[98.5,123.5,167,167,0,1] },
    { k:"img", z:4, src:"scrap_star.png", fit:"contain", i:[692.5,61.5,97,97,0,1], h:[662,170,158,158,0,1] },
    { k:"img", z:5, src:"scrap_sticker.png", fit:"contain", i:[496,414,72,72,0,1], h:[491,414,122,122,0,1] },
  ]},

  { id:"safe", href:"safe.html", x:840, y:884, w:625, h:497, bg:"#f7f7f7", bgH:"#dbdcfc", r:25, clip:true, els:[
    { k:"img", z:6, src:"safe_phone.png", i:[495,360,400,756,-11.78,1], h:[495,360,400,756,0,1] },
    { k:"text", z:2, cls:"caption", block:true, width:293, txt:"Helping people find a safer way to get home",
      style:"font-size:18px;line-height:26px;", i:[38,401,1], h:[38,401,1] },
    { k:"img", z:4, src:"safe_pills_rest.png",  fit:"contain", i:[176,248,270,75,0,1], h:[176,248,270,75,0,0] },
    { k:"img", z:4, src:"safe_pills_hover.png", fit:"contain", i:[165,258,250,249,0,0], h:[165,258,250,249,0,1] },
    { k:"img", z:8, src:"safe_logo.png", fit:"contain", i:[61.5,46.5,41,41,0,1], h:[61.5,46.5,41,41,0,1] },
    { k:"text", z:8, cls:"label", txt:"Safe", txt2:"Mobile App", style:"font-size:15px;line-height:26px;", i:[90,33,1], h:[90,33,1] },
  ]},

  { id:"pomo", href:"https://pomodoro-timer-ochre-two.vercel.app", x:49, y:1392, w:853, h:487, bg:"#f7f7f7", bgH:"#e9ffb7", r:35, clip:false, els:[
    { k:"img", z:1, src:"pomo_app.png", r:16, i:[427,243.5,596,351,0,1], h:[427,243.5,596,351,0,1] },
    { k:"img", z:2, src:"pomo_s2.png", fit:"contain", i:[81,116,96,96,0,1], h:[161.6,224.7,168,168,-17.7,1] },
    { k:"img", z:3, src:"pomo_s1.png", fit:"contain", i:[724.5,267.5,119,119,0,1], h:[669,279,156,156,0,1] },
    { k:"img", z:4, src:"pomo_s3.png", fit:"contain", i:[128.5,391.5,129,129,0,1], h:[321.5,388,165,165,-15.7,1] },
    { k:"text", z:5, cls:"label", txt:"Pomodoro Timer", txt2:"Vibe-Coded Web App", style:"font-size:15px;line-height:26px;", i:[27,22,1], h:[27,22,1] },
  ]},

  { id:"social", href:"social.html", x:916, y:1392, w:549, h:487, bg:"#f7f7f7", bgH:"#ffffe9", r:25, clip:false, els:[
    { k:"img", z:1, src:"social_lettering.png", fit:"contain", i:[275,243.5,530,177,0,1], h:[275,243.5,530,177,0,0] },
    { k:"img", z:2, src:"social_post1.png", r:6, i:[145,295,204,291,14.31,0], h:[145,295,204,291,14.31,1] },
    { k:"img", z:3, src:"social_post2.png", r:6, i:[410,210,188,293,-11.04,0], h:[410,210,188,293,-11.04,1] },
  ]},
];

/* ---------- Render ---------- */
const frame = document.getElementById("frame");

function vars(node, map){ for(const k in map) node.style.setProperty(k, map[k]); }

for (const card of CARDS) {
  const c = document.createElement(card.href ? "a" : "div");
  c.className = "card" + (card.clip ? " clip" : "") + (card.href ? " link" : "");
  if (card.href) { c.href = card.href; if (card.href.startsWith("http")) c.target = "_blank"; }
  c.style.cssText = `left:${card.x}px;top:${card.y}px;width:${card.w}px;height:${card.h}px;`;
  c.style.setProperty("--bg-init", card.bg);
  c.style.setProperty("--bg-hover", card.bgH);
  c.style.setProperty("--radius", card.r + "px");

  for (const e of card.els) {
    const el = document.createElement("div");
    el.className = "el";
    el.style.zIndex = e.z;

    if (e.k === "img") {
      const [cx,cy,w,hh,rot,op] = e.i;
      const [Hcx,Hcy,Hw,Hh,Hrot,Hop] = e.h;
      el.style.cssText += `left:${cx-w/2}px;top:${cy-hh/2}px;width:${w}px;height:${hh}px;z-index:${e.z};`;
      vars(el, {
        "--ir":rot+"deg", "--io":op,
        "--dx":(Hcx-cx)+"px", "--dy":(Hcy-cy)+"px",
        "--sx":(Hw/w), "--sy":(Hh/hh), "--hr":Hrot+"deg", "--ho":Hop
      });
      const img = document.createElement("img");
      img.src = A + e.src;
      img.loading = "eager";
      if (e.fit === "contain") el.classList.add("contain");
      if (e.r) img.style.borderRadius = e.r + "px";
      el.appendChild(img);

    } else if (e.k === "text") {
      const [l,t,op] = e.i, [Hl,Ht,Hop] = e.h;
      el.classList.add("txt"); if (e.block) el.classList.add("block");
      if (e.cls) el.classList.add(e.cls);
      el.style.cssText += `left:${l}px;top:${t}px;z-index:${e.z};` + (e.width?`width:${e.width}px;`:"") + (e.style||"");
      vars(el, { "--ir":"0deg","--io":op,"--dx":(Hl-l)+"px","--dy":(Ht-t)+"px","--sx":1,"--sy":1,"--hr":"0deg","--ho":Hop });
      const w1 = document.createElement("span"); w1.className="w1";
      const _t = e.txt || "";
      if (e.gap && _t.includes("§")) {
        const parts = _t.split("§");
        w1.appendChild(document.createTextNode(parts[0]));
        const sp = document.createElement("span");
        sp.style.cssText = `display:inline-block;width:${e.gap}px;`;
        w1.appendChild(sp);
        w1.appendChild(document.createTextNode(parts[1] || ""));
      } else { w1.textContent = _t; }
      el.appendChild(w1);
      if (e.txt2 !== undefined) { el.classList.add("swap"); const w2=document.createElement("span"); w2.className="w2"; w2.textContent=e.txt2; el.appendChild(w2); }

    } else if (e.k === "pill" || e.k === "mini") {
      const W = e.k==="pill"?234:127, H = e.k==="pill"?58:96;
      const [cx,cy,rot,op] = e.i, [Hcx,Hcy,Hrot,Hop] = e.h;
      const hsc = (e.h[4] !== undefined) ? e.h[4] : 1;
      el.style.cssText += `left:${cx-W/2}px;top:${cy-H/2}px;z-index:${e.z};`;
      vars(el, { "--ir":rot+"deg","--io":op,"--dx":(Hcx-cx)+"px","--dy":(Hcy-cy)+"px","--sx":hsc,"--sy":hsc,"--hr":Hrot+"deg","--ho":Hop });
      const box = document.createElement("div"); box.className = e.k;
      box.innerHTML = `<img src="${A+e.icon}"><div><div class="pt">${e.pt}</div><div class="ps">${e.ps}</div></div>`;
      if (e.k==="mini") box.innerHTML = `<img src="${A+e.icon}"><div class="pt">${e.pt}</div><div class="ps">${e.ps}</div>`;
      el.appendChild(box);

    } else if (e.k === "rows") {
      const [l,t,op] = e.i, [Hl,Ht,Hop] = e.h;
      el.style.cssText += `left:${l}px;top:${t}px;z-index:${e.z};`;
      vars(el, { "--ir":"0deg","--io":op,"--dx":(Hl-l)+"px","--dy":(Ht-t)+"px","--sx":1,"--sy":1,"--hr":"0deg","--ho":Hop });
      const rows = document.createElement("div"); rows.className = "rows";
      rows.innerHTML = `
        <div class="row"><img src="${A}estram_phone3.png"><div><div class="pt">Nearby stops</div><div class="ps">Find the closest station</div></div></div>
        <div class="row"><img src="${A}estram_phone2.png"><div><div class="pt">Track arrivals</div><div class="ps">See next arrivals</div></div></div>
        <div class="row"><img src="${A}estram_phone1.png"><div><div class="pt">Top up balance</div><div class="ps">Add credit in seconds</div></div></div>`;
      el.appendChild(rows);

    } else if (e.k === "cream") {
      const [cx,cy] = e.i, [Hcx,Hcy] = e.h, s = e.scale;
      el.style.cssText += `left:${cx-132.5}px;top:${cy-140}px;width:265px;z-index:${e.z};`;
      vars(el, { "--ir":"0deg","--io":1,"--dx":(Hcx-cx)+"px","--dy":(Hcy-cy)+"px","--sx":s,"--sy":s,"--hr":"0deg","--ho":1 });
      const cream = document.createElement("div"); cream.className = "cream";
      cream.innerHTML = `
        <div class="cream-phones">
          <img class="cp1" src="${A}estram_phone1.png">
          <img class="cp2" src="${A}estram_phone2.png">
          <img class="cp3" src="${A}estram_phone3.png">
        </div>
        <div class="cream-title">Balance. Routes. Stops.<br>All in one place.</div>
        <div class="cream-btn">Explore redesign →</div>`;
      el.appendChild(cream);
    }

    c.appendChild(el);
  }
  frame.appendChild(c);
}

/* ---------- Responsive scaling ---------- */
function fit() {
  const s = Math.min(1, window.innerWidth / 1512);
  frame.style.transform = `scale(${s})`;
  document.getElementById("wrap").style.height = (DESIGN_H * s) + "px";
}
window.addEventListener("resize", fit);
fit();
