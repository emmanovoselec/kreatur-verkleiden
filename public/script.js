// === SVG ANIMAL DEFINITIONS ===

function darken(hex, amt) {
  let r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  r = Math.max(0, r - amt); g = Math.max(0, g - amt); b = Math.max(0, b - amt);
  return `rgb(${r},${g},${b})`;
}

function lighten(hex, amt) {
  let r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  r = Math.min(255, r + amt); g = Math.min(255, g + amt); b = Math.min(255, b + amt);
  return `rgb(${r},${g},${b})`;
}

const animals = {
  cat: {
    name: 'Katze',
    body: '#f5cdb0',
    belly: '#fce4d0',
    nose: '#e8998a',
    buildHead(g, c) {
      // Head
      g.innerHTML = `
        <ellipse cx="150" cy="115" rx="58" ry="52" fill="${c.body}" filter="url(#shadow)"/>
        <ellipse cx="150" cy="122" rx="40" ry="30" fill="${c.belly}" opacity="0.5"/>
        <!-- Ears -->
        <path d="M105 85 L95 40 L130 72 Z" fill="${c.body}" stroke="${darken(c.body,20)}" stroke-width="1"/>
        <path d="M110 78 L102 48 L126 72 Z" fill="${c.belly}" opacity="0.6"/>
        <path d="M195 85 L205 40 L170 72 Z" fill="${c.body}" stroke="${darken(c.body,20)}" stroke-width="1"/>
        <path d="M190 78 L198 48 L174 72 Z" fill="${c.belly}" opacity="0.6"/>
      `;
    },
    buildFace(g, c) {
      g.innerHTML = `
        <!-- Eyes -->
        <ellipse cx="130" cy="108" rx="10" ry="11" fill="white" stroke="${darken(c.body,40)}" stroke-width="1"/>
        <ellipse cx="170" cy="108" rx="10" ry="11" fill="white" stroke="${darken(c.body,40)}" stroke-width="1"/>
        <ellipse cx="132" cy="108" rx="6" ry="7" fill="#4a7a4a"/>
        <ellipse cx="172" cy="108" rx="6" ry="7" fill="#4a7a4a"/>
        <circle cx="132" cy="108" r="3.5" fill="#1a2a1a"/>
        <circle cx="172" cy="108" r="3.5" fill="#1a2a1a"/>
        <circle cx="134" cy="105" r="2" fill="white" opacity="0.9"/>
        <circle cx="174" cy="105" r="2" fill="white" opacity="0.9"/>
        <!-- Nose -->
        <path d="M147 122 L150 118 L153 122 Z" fill="${c.nose}"/>
        <!-- Mouth -->
        <path d="M150 122 Q150 128 144 130" fill="none" stroke="#8a6a5a" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M150 122 Q150 128 156 130" fill="none" stroke="#8a6a5a" stroke-width="1.5" stroke-linecap="round"/>
        <!-- Whiskers -->
        <line x1="100" y1="118" x2="128" y2="122" stroke="#c0a090" stroke-width="1" opacity="0.6"/>
        <line x1="100" y1="126" x2="128" y2="125" stroke="#c0a090" stroke-width="1" opacity="0.6"/>
        <line x1="200" y1="118" x2="172" y2="122" stroke="#c0a090" stroke-width="1" opacity="0.6"/>
        <line x1="200" y1="126" x2="172" y2="125" stroke="#c0a090" stroke-width="1" opacity="0.6"/>
        <!-- Cheeks -->
        <circle cx="118" cy="125" r="10" fill="url(#cheekGrad)"/>
        <circle cx="182" cy="125" r="10" fill="url(#cheekGrad)"/>
      `;
    },
    buildBody(g, c) {
      g.innerHTML = `
        <ellipse cx="150" cy="230" rx="62" ry="75" fill="${c.body}" filter="url(#shadow)"/>
        <ellipse cx="150" cy="240" rx="42" ry="55" fill="${c.belly}" opacity="0.5"/>
        <ellipse cx="150" cy="230" rx="62" ry="75" fill="url(#bodyGrad)"/>
      `;
    },
    buildLegs(g, c) {
      g.innerHTML = `
        <ellipse cx="120" cy="310" rx="18" ry="28" fill="${c.body}"/>
        <ellipse cx="120" cy="325" rx="16" ry="10" fill="${darken(c.body,15)}"/>
        <ellipse cx="180" cy="310" rx="18" ry="28" fill="${c.body}"/>
        <ellipse cx="180" cy="325" rx="16" ry="10" fill="${darken(c.body,15)}"/>
      `;
    },
    buildArms(g, c) {
      g.innerHTML = `
        <ellipse cx="95" cy="220" rx="16" ry="35" fill="${c.body}" transform="rotate(10,95,220)"/>
        <ellipse cx="92" cy="248" rx="10" ry="8" fill="${darken(c.body,15)}"/>
        <ellipse cx="205" cy="220" rx="16" ry="35" fill="${c.body}" transform="rotate(-10,205,220)"/>
        <ellipse cx="208" cy="248" rx="10" ry="8" fill="${darken(c.body,15)}"/>
      `;
    },
    buildTail(g, c) {
      g.innerHTML = `<path d="M210 280 Q240 260 250 220 Q255 200 245 190" fill="none" stroke="${c.body}" stroke-width="14" stroke-linecap="round"/>
        <path d="M210 280 Q240 260 250 220 Q255 200 245 190" fill="none" stroke="${darken(c.body,15)}" stroke-width="6" stroke-linecap="round" opacity="0.3"/>`;
    }
  },

  dog: {
    name: 'Hund',
    body: '#d4a96a',
    belly: '#f0dcc0',
    nose: '#3a2a1a',
    buildHead(g, c) {
      g.innerHTML = `
        <ellipse cx="150" cy="118" rx="56" ry="50" fill="${c.body}" filter="url(#shadow)"/>
        <ellipse cx="150" cy="128" rx="35" ry="26" fill="${c.belly}" opacity="0.6"/>
        <!-- Floppy ears -->
        <ellipse cx="98" cy="105" rx="22" ry="42" fill="${darken(c.body,20)}" transform="rotate(15,98,105)"/>
        <ellipse cx="98" cy="105" rx="16" ry="34" fill="${c.body}" transform="rotate(15,98,105)"/>
        <ellipse cx="202" cy="105" rx="22" ry="42" fill="${darken(c.body,20)}" transform="rotate(-15,202,105)"/>
        <ellipse cx="202" cy="105" rx="16" ry="34" fill="${c.body}" transform="rotate(-15,202,105)"/>
      `;
    },
    buildFace(g, c) {
      g.innerHTML = `
        <ellipse cx="132" cy="108" rx="10" ry="11" fill="white" stroke="${darken(c.body,40)}" stroke-width="1"/>
        <ellipse cx="168" cy="108" rx="10" ry="11" fill="white" stroke="${darken(c.body,40)}" stroke-width="1"/>
        <ellipse cx="133" cy="109" rx="6" ry="7" fill="#4a3020"/>
        <ellipse cx="169" cy="109" rx="6" ry="7" fill="#4a3020"/>
        <circle cx="133" cy="109" r="3.5" fill="#1a1008"/>
        <circle cx="169" cy="109" r="3.5" fill="#1a1008"/>
        <circle cx="135" cy="106" r="2" fill="white" opacity="0.9"/>
        <circle cx="171" cy="106" r="2" fill="white" opacity="0.9"/>
        <!-- Snout -->
        <ellipse cx="150" cy="128" rx="18" ry="12" fill="${c.belly}"/>
        <ellipse cx="150" cy="124" rx="10" ry="7" fill="${c.nose}" rx="10"/>
        <!-- Mouth -->
        <path d="M150 131 Q150 138 143 140" fill="none" stroke="#6a4a3a" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M150 131 Q150 138 157 140" fill="none" stroke="#6a4a3a" stroke-width="1.5" stroke-linecap="round"/>
        <!-- Tongue -->
        <ellipse cx="150" cy="141" rx="6" ry="8" fill="#e87080" opacity="0.7"/>
        <circle cx="118" cy="125" r="10" fill="url(#cheekGrad)"/>
        <circle cx="182" cy="125" r="10" fill="url(#cheekGrad)"/>
      `;
    },
    buildBody(g, c) {
      g.innerHTML = `
        <ellipse cx="150" cy="232" rx="60" ry="72" fill="${c.body}" filter="url(#shadow)"/>
        <ellipse cx="150" cy="245" rx="38" ry="50" fill="${c.belly}" opacity="0.5"/>
        <ellipse cx="150" cy="232" rx="60" ry="72" fill="url(#bodyGrad)"/>
      `;
    },
    buildLegs(g, c) {
      g.innerHTML = `
        <ellipse cx="122" cy="312" rx="18" ry="26" fill="${c.body}"/>
        <ellipse cx="122" cy="326" rx="16" ry="10" fill="${darken(c.body,20)}"/>
        <ellipse cx="178" cy="312" rx="18" ry="26" fill="${c.body}"/>
        <ellipse cx="178" cy="326" rx="16" ry="10" fill="${darken(c.body,20)}"/>
      `;
    },
    buildArms(g, c) {
      g.innerHTML = `
        <ellipse cx="96" cy="222" rx="16" ry="34" fill="${c.body}" transform="rotate(8,96,222)"/>
        <ellipse cx="93" cy="250" rx="11" ry="8" fill="${darken(c.body,15)}"/>
        <ellipse cx="204" cy="222" rx="16" ry="34" fill="${c.body}" transform="rotate(-8,204,222)"/>
        <ellipse cx="207" cy="250" rx="11" ry="8" fill="${darken(c.body,15)}"/>
      `;
    },
    buildTail(g, c) {
      g.innerHTML = `<path d="M208 270 Q235 245 230 210 Q228 195 235 185" fill="none" stroke="${c.body}" stroke-width="12" stroke-linecap="round"/>`;
    }
  },

  bunny: {
    name: 'Hase',
    body: '#e8d8e8',
    belly: '#f8f0f8',
    nose: '#dda0a0',
    buildHead(g, c) {
      g.innerHTML = `
        <ellipse cx="150" cy="120" rx="52" ry="48" fill="${c.body}" filter="url(#shadow)"/>
        <ellipse cx="150" cy="128" rx="34" ry="28" fill="${c.belly}" opacity="0.5"/>
        <!-- Long ears -->
        <ellipse cx="122" cy="45" rx="16" ry="55" fill="${c.body}" transform="rotate(-8,122,45)"/>
        <ellipse cx="122" cy="42" rx="10" ry="42" fill="${lighten(c.body,20)}" transform="rotate(-8,122,42)" opacity="0.7"/>
        <ellipse cx="178" cy="45" rx="16" ry="55" fill="${c.body}" transform="rotate(8,178,45)"/>
        <ellipse cx="178" cy="42" rx="10" ry="42" fill="${lighten(c.body,20)}" transform="rotate(8,178,42)" opacity="0.7"/>
      `;
    },
    buildFace(g, c) {
      g.innerHTML = `
        <ellipse cx="132" cy="110" rx="11" ry="13" fill="white" stroke="${darken(c.body,30)}" stroke-width="1"/>
        <ellipse cx="168" cy="110" rx="11" ry="13" fill="white" stroke="${darken(c.body,30)}" stroke-width="1"/>
        <ellipse cx="133" cy="111" rx="6" ry="8" fill="#cc4466"/>
        <ellipse cx="169" cy="111" rx="6" ry="8" fill="#cc4466"/>
        <circle cx="133" cy="111" r="4" fill="#6a1a2a"/>
        <circle cx="169" cy="111" r="4" fill="#6a1a2a"/>
        <circle cx="135" cy="108" r="2" fill="white" opacity="0.9"/>
        <circle cx="171" cy="108" r="2" fill="white" opacity="0.9"/>
        <!-- Nose -->
        <ellipse cx="150" cy="128" rx="6" ry="4" fill="${c.nose}"/>
        <!-- Mouth -->
        <path d="M150 132 Q150 138 144 139" fill="none" stroke="#9a7a7a" stroke-width="1.3" stroke-linecap="round"/>
        <path d="M150 132 Q150 138 156 139" fill="none" stroke="#9a7a7a" stroke-width="1.3" stroke-linecap="round"/>
        <!-- Buck teeth -->
        <rect x="146" y="132" width="4" height="5" rx="1" fill="white" stroke="#ccc" stroke-width="0.5"/>
        <rect x="150" y="132" width="4" height="5" rx="1" fill="white" stroke="#ccc" stroke-width="0.5"/>
        <circle cx="120" cy="126" r="11" fill="url(#cheekGrad)"/>
        <circle cx="180" cy="126" r="11" fill="url(#cheekGrad)"/>
      `;
    },
    buildBody(g, c) {
      g.innerHTML = `
        <ellipse cx="150" cy="235" rx="55" ry="70" fill="${c.body}" filter="url(#shadow)"/>
        <ellipse cx="150" cy="248" rx="36" ry="48" fill="${c.belly}" opacity="0.5"/>
        <ellipse cx="150" cy="235" rx="55" ry="70" fill="url(#bodyGrad)"/>
      `;
    },
    buildLegs(g, c) {
      g.innerHTML = `
        <ellipse cx="125" cy="308" rx="20" ry="14" fill="${c.body}" transform="rotate(-5,125,308)"/>
        <ellipse cx="118" cy="312" rx="16" ry="10" fill="${darken(c.body,15)}"/>
        <ellipse cx="175" cy="308" rx="20" ry="14" fill="${c.body}" transform="rotate(5,175,308)"/>
        <ellipse cx="182" cy="312" rx="16" ry="10" fill="${darken(c.body,15)}"/>
        <!-- Big feet -->
        <ellipse cx="112" cy="322" rx="22" ry="10" fill="${c.body}"/>
        <ellipse cx="188" cy="322" rx="22" ry="10" fill="${c.body}"/>
      `;
    },
    buildArms(g, c) {
      g.innerHTML = `
        <ellipse cx="100" cy="225" rx="14" ry="30" fill="${c.body}" transform="rotate(12,100,225)"/>
        <ellipse cx="96" cy="250" rx="9" ry="7" fill="${darken(c.body,10)}"/>
        <ellipse cx="200" cy="225" rx="14" ry="30" fill="${c.body}" transform="rotate(-12,200,225)"/>
        <ellipse cx="204" cy="250" rx="9" ry="7" fill="${darken(c.body,10)}"/>
      `;
    },
    buildTail(g, c) {
      g.innerHTML = `<circle cx="195" cy="290" r="14" fill="${c.belly}" filter="url(#shadow)"/>
        <circle cx="195" cy="290" r="14" fill="url(#bodyGrad)"/>`;
    }
  },

  bear: {
    name: 'Bär',
    body: '#a07050',
    belly: '#d4a880',
    nose: '#3a2010',
    buildHead(g, c) {
      g.innerHTML = `
        <ellipse cx="150" cy="118" rx="60" ry="54" fill="${c.body}" filter="url(#shadow)"/>
        <ellipse cx="150" cy="128" rx="35" ry="26" fill="${c.belly}" opacity="0.6"/>
        <!-- Round ears -->
        <circle cx="102" cy="80" r="22" fill="${c.body}" stroke="${darken(c.body,20)}" stroke-width="1"/>
        <circle cx="102" cy="80" r="14" fill="${darken(c.body,15)}"/>
        <circle cx="198" cy="80" r="22" fill="${c.body}" stroke="${darken(c.body,20)}" stroke-width="1"/>
        <circle cx="198" cy="80" r="14" fill="${darken(c.body,15)}"/>
      `;
    },
    buildFace(g, c) {
      g.innerHTML = `
        <ellipse cx="130" cy="108" rx="9" ry="10" fill="white" stroke="${darken(c.body,40)}" stroke-width="1"/>
        <ellipse cx="170" cy="108" rx="9" ry="10" fill="white" stroke="${darken(c.body,40)}" stroke-width="1"/>
        <circle cx="131" cy="109" r="5" fill="#2a1a0a"/>
        <circle cx="171" cy="109" r="5" fill="#2a1a0a"/>
        <circle cx="133" cy="106" r="2" fill="white" opacity="0.8"/>
        <circle cx="173" cy="106" r="2" fill="white" opacity="0.8"/>
        <!-- Snout -->
        <ellipse cx="150" cy="128" rx="20" ry="14" fill="${c.belly}"/>
        <ellipse cx="150" cy="123" rx="9" ry="6" fill="${c.nose}"/>
        <path d="M150 129 Q150 136 143 138" fill="none" stroke="#5a3a2a" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M150 129 Q150 136 157 138" fill="none" stroke="#5a3a2a" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="118" cy="125" r="10" fill="url(#cheekGrad)"/>
        <circle cx="182" cy="125" r="10" fill="url(#cheekGrad)"/>
      `;
    },
    buildBody(g, c) {
      g.innerHTML = `
        <ellipse cx="150" cy="235" rx="66" ry="78" fill="${c.body}" filter="url(#shadow)"/>
        <ellipse cx="150" cy="248" rx="44" ry="55" fill="${c.belly}" opacity="0.45"/>
        <ellipse cx="150" cy="235" rx="66" ry="78" fill="url(#bodyGrad)"/>
      `;
    },
    buildLegs(g, c) {
      g.innerHTML = `
        <ellipse cx="120" cy="315" rx="22" ry="28" fill="${c.body}"/>
        <ellipse cx="120" cy="330" rx="20" ry="10" fill="${darken(c.body,20)}"/>
        <ellipse cx="180" cy="315" rx="22" ry="28" fill="${c.body}"/>
        <ellipse cx="180" cy="330" rx="20" ry="10" fill="${darken(c.body,20)}"/>
      `;
    },
    buildArms(g, c) {
      g.innerHTML = `
        <ellipse cx="90" cy="225" rx="20" ry="38" fill="${c.body}" transform="rotate(10,90,225)"/>
        <ellipse cx="86" cy="256" rx="14" ry="10" fill="${darken(c.body,15)}"/>
        <ellipse cx="210" cy="225" rx="20" ry="38" fill="${c.body}" transform="rotate(-10,210,225)"/>
        <ellipse cx="214" cy="256" rx="14" ry="10" fill="${darken(c.body,15)}"/>
      `;
    },
    buildTail(g, c) {
      g.innerHTML = `<circle cx="205" cy="290" r="10" fill="${darken(c.body,10)}"/>`;
    }
  },

  frog: {
    name: 'Frosch',
    body: '#5aaa5a',
    belly: '#a8dda8',
    nose: '#4a8a4a',
    buildHead(g, c) {
      g.innerHTML = `
        <ellipse cx="150" cy="120" rx="60" ry="46" fill="${c.body}" filter="url(#shadow)"/>
        <ellipse cx="150" cy="130" rx="40" ry="26" fill="${c.belly}" opacity="0.5"/>
        <!-- Bulging eyes base -->
        <circle cx="120" cy="88" r="22" fill="${c.body}"/>
        <circle cx="180" cy="88" r="22" fill="${c.body}"/>
      `;
    },
    buildFace(g, c) {
      g.innerHTML = `
        <!-- Big eyes -->
        <circle cx="120" cy="88" r="16" fill="white" stroke="${darken(c.body,30)}" stroke-width="1.5"/>
        <circle cx="180" cy="88" r="16" fill="white" stroke="${darken(c.body,30)}" stroke-width="1.5"/>
        <circle cx="122" cy="88" r="9" fill="#2a5a2a"/>
        <circle cx="182" cy="88" r="9" fill="#2a5a2a"/>
        <circle cx="122" cy="88" r="5" fill="#0a2a0a"/>
        <circle cx="182" cy="88" r="5" fill="#0a2a0a"/>
        <circle cx="125" cy="84" r="3" fill="white" opacity="0.8"/>
        <circle cx="185" cy="84" r="3" fill="white" opacity="0.8"/>
        <!-- Nostrils -->
        <circle cx="142" cy="120" r="3" fill="${darken(c.body,30)}"/>
        <circle cx="158" cy="120" r="3" fill="${darken(c.body,30)}"/>
        <!-- Wide smile -->
        <path d="M120 132 Q150 150 180 132" fill="none" stroke="#3a6a3a" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="112" cy="120" r="10" fill="url(#cheekGrad)"/>
        <circle cx="188" cy="120" r="10" fill="url(#cheekGrad)"/>
      `;
    },
    buildBody(g, c) {
      g.innerHTML = `
        <ellipse cx="150" cy="232" rx="58" ry="72" fill="${c.body}" filter="url(#shadow)"/>
        <ellipse cx="150" cy="248" rx="40" ry="50" fill="${c.belly}" opacity="0.5"/>
        <ellipse cx="150" cy="232" rx="58" ry="72" fill="url(#bodyGrad)"/>
        <!-- Spots -->
        <circle cx="125" cy="210" r="8" fill="${darken(c.body,15)}" opacity="0.3"/>
        <circle cx="170" cy="225" r="6" fill="${darken(c.body,15)}" opacity="0.3"/>
        <circle cx="140" cy="250" r="7" fill="${darken(c.body,15)}" opacity="0.3"/>
      `;
    },
    buildLegs(g, c) {
      g.innerHTML = `
        <ellipse cx="118" cy="310" rx="20" ry="20" fill="${c.body}"/>
        <!-- Webbed feet -->
        <ellipse cx="105" cy="325" rx="25" ry="10" fill="${darken(c.body,10)}"/>
        <ellipse cx="182" cy="310" rx="20" ry="20" fill="${c.body}"/>
        <ellipse cx="195" cy="325" rx="25" ry="10" fill="${darken(c.body,10)}"/>
      `;
    },
    buildArms(g, c) {
      g.innerHTML = `
        <ellipse cx="96" cy="220" rx="14" ry="32" fill="${c.body}" transform="rotate(12,96,220)"/>
        <ellipse cx="92" cy="247" rx="12" ry="7" fill="${darken(c.body,10)}"/>
        <ellipse cx="204" cy="220" rx="14" ry="32" fill="${c.body}" transform="rotate(-12,204,220)"/>
        <ellipse cx="208" cy="247" rx="12" ry="7" fill="${darken(c.body,10)}"/>
      `;
    },
    buildTail(g, c) {
      g.innerHTML = '';
    }
  }
};

// === ACCESSORY SVG DRAWINGS ===

const itemSVGs = {
  hat: {
    'pizza-hat': { name: 'Pizzahut', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><path d="M10 42 L30 8 L50 42 Z" fill="#f0c050" stroke="#c09030" stroke-width="1.5"/><circle cx="25" cy="30" r="4" fill="#cc3333"/><circle cx="35" cy="25" r="3" fill="#cc3333"/><circle cx="30" cy="36" r="3.5" fill="#339933"/><path d="M10 42 L50 42" stroke="#c09030" stroke-width="2"/></svg>`,
      render: () => `<g transform="translate(110,28) scale(1.1)"><path d="M0 50 L40 0 L80 50 Z" fill="#f0c050" stroke="#c09030" stroke-width="2"/><circle cx="30" cy="32" r="6" fill="#cc3333"/><circle cx="50" cy="28" r="5" fill="#cc3333"/><circle cx="40" cy="40" r="5" fill="#339933"/></g>` },
    'crown': { name: 'Krone', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><path d="M10 40 L10 22 L20 32 L30 15 L40 32 L50 22 L50 40 Z" fill="#ffd700" stroke="#cc9900" stroke-width="1.5"/><rect x="10" y="38" width="40" height="6" rx="2" fill="#ffd700" stroke="#cc9900" stroke-width="1"/><circle cx="20" cy="20" r="2.5" fill="#ff4444"/><circle cx="30" cy="13" r="2.5" fill="#4488ff"/><circle cx="40" cy="20" r="2.5" fill="#44cc44"/></svg>`,
      render: () => `<g transform="translate(108,40)"><path d="M0 50 L0 20 L18 35 L42 5 L66 35 L84 20 L84 50 Z" fill="#ffd700" stroke="#cc9900" stroke-width="2"/><rect x="0" y="46" width="84" height="8" rx="3" fill="#ffd700" stroke="#cc9900" stroke-width="1.5"/><circle cx="18" cy="18" r="4" fill="#ff4444"/><circle cx="42" cy="3" r="4" fill="#4488ff"/><circle cx="66" cy="18" r="4" fill="#44cc44"/></g>` },
    'top-hat': { name: 'Zylinder', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><rect x="17" y="10" width="26" height="32" rx="3" fill="#222"/><ellipse cx="30" cy="42" rx="22" ry="6" fill="#333"/><ellipse cx="30" cy="12" rx="13" ry="4" fill="#444"/><rect x="17" y="36" width="26" height="4" fill="#884422"/></svg>`,
      render: () => `<g transform="translate(108,25)"><rect x="12" y="0" width="60" height="55" rx="5" fill="#222"/><ellipse cx="42" cy="55" rx="48" ry="10" fill="#333"/><ellipse cx="42" cy="3" rx="30" ry="7" fill="#444"/><rect x="12" y="45" width="60" height="6" fill="#884422"/></g>` },
    'party-hat': { name: 'Partyhut', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><path d="M15 45 L30 8 L45 45 Z" fill="#ff66aa" stroke="#cc4488" stroke-width="1"/><circle cx="30" cy="8" r="4" fill="#ffdd00"/><circle cx="22" cy="30" r="2" fill="#44ddff"/><circle cx="35" cy="22" r="2" fill="#ffdd00"/><circle cx="28" cy="38" r="2" fill="#66ff66"/></svg>`,
      render: () => `<g transform="translate(112,18)"><path d="M0 72 L38 0 L76 72 Z" fill="#ff66aa" stroke="#cc4488" stroke-width="2"/><circle cx="38" cy="0" r="7" fill="#ffdd00"/><circle cx="22" cy="45" r="4" fill="#44ddff"/><circle cx="50" cy="35" r="4" fill="#ffdd00"/><circle cx="35" cy="58" r="4" fill="#66ff66"/></g>` },
    'flower-crown': { name: 'Blumenkranz', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><path d="M8 35 Q30 22 52 35" fill="none" stroke="#66aa44" stroke-width="3"/><circle cx="12" cy="32" r="5" fill="#ff88aa"/><circle cx="24" cy="27" r="5" fill="#ffdd44"/><circle cx="36" cy="27" r="5" fill="#ff88aa"/><circle cx="48" cy="32" r="5" fill="#88ccff"/><circle cx="12" cy="32" r="2" fill="#ffdd44"/><circle cx="24" cy="27" r="2" fill="white"/><circle cx="36" cy="27" r="2" fill="#ffdd44"/><circle cx="48" cy="32" r="2" fill="white"/></svg>`,
      render: () => `<g transform="translate(100,62)"><path d="M0 18 Q50 -5 100 18" fill="none" stroke="#66aa44" stroke-width="4"/><circle cx="8" cy="14" r="9" fill="#ff88aa"/><circle cx="30" cy="5" r="9" fill="#ffdd44"/><circle cx="52" cy="2" r="9" fill="#ff88aa"/><circle cx="74" cy="5" r="9" fill="#88ccff"/><circle cx="96" cy="14" r="9" fill="#ff88aa"/><circle cx="8" cy="14" r="3.5" fill="#ffdd44"/><circle cx="30" cy="5" r="3.5" fill="white"/><circle cx="52" cy="2" r="3.5" fill="#ffdd44"/><circle cx="74" cy="5" r="3.5" fill="white"/><circle cx="96" cy="14" r="3.5" fill="#ffdd44"/></g>` },
    'pirate': { name: 'Piratenhut', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><ellipse cx="30" cy="40" rx="24" ry="6" fill="#222"/><path d="M8 40 Q30 10 52 40" fill="#333"/><circle cx="30" cy="28" r="7" fill="none" stroke="white" stroke-width="1.5"/><path d="M27 25 L33 25 L30 31 Z" fill="white"/></svg>`,
      render: () => `<g transform="translate(100,30)"><ellipse cx="50" cy="60" rx="52" ry="10" fill="#222"/><path d="M0 60 Q50 10 100 60" fill="#333"/><circle cx="50" cy="42" r="12" fill="none" stroke="white" stroke-width="2.5"/><path d="M45 37 L55 37 L50 47 Z" fill="white"/></g>` },
    'chef': { name: 'Kochmütze', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><rect x="16" y="30" width="28" height="14" fill="white" stroke="#ddd" stroke-width="1"/><circle cx="22" cy="22" r="10" fill="white" stroke="#ddd" stroke-width="1"/><circle cx="30" cy="18" r="11" fill="white" stroke="#ddd" stroke-width="1"/><circle cx="38" cy="22" r="10" fill="white" stroke="#ddd" stroke-width="1"/></svg>`,
      render: () => `<g transform="translate(106,15)"><rect x="8" y="42" width="72" height="22" fill="white" stroke="#ddd" stroke-width="1.5"/><circle cx="20" cy="28" r="22" fill="white" stroke="#ddd" stroke-width="1.5"/><circle cx="44" cy="20" r="24" fill="white" stroke="#ddd" stroke-width="1.5"/><circle cx="66" cy="28" r="22" fill="white" stroke="#ddd" stroke-width="1.5"/></g>` },
    'wizard': { name: 'Zauberhut', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><path d="M12 48 L30 5 L48 48 Z" fill="#3344aa" stroke="#2233888" stroke-width="1"/><ellipse cx="30" cy="48" rx="22" ry="5" fill="#4455cc"/><circle cx="25" cy="25" r="2.5" fill="#ffdd44"/><circle cx="34" cy="35" r="2" fill="#ffdd44"/><circle cx="28" cy="17" r="1.5" fill="#ffdd44"/></svg>`,
      render: () => `<g transform="translate(108,5)"><path d="M0 82 L42 0 L84 82 Z" fill="#3344aa" stroke="#223388" stroke-width="2"/><ellipse cx="42" cy="82" rx="48" ry="9" fill="#4455cc"/><circle cx="30" cy="40" r="5" fill="#ffdd44"/><circle cx="52" cy="55" r="4" fill="#ffdd44"/><circle cx="38" cy="22" r="3" fill="#ffdd44"/></g>` },
  },
  eyes: {
    'sunglasses': { name: 'Sonnenbrille', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><rect x="6" y="12" width="18" height="14" rx="4" fill="#222" opacity="0.85"/><rect x="36" y="12" width="18" height="14" rx="4" fill="#222" opacity="0.85"/><path d="M24 18 L36 18" stroke="#555" stroke-width="2"/><line x1="6" y1="16" x2="2" y2="14" stroke="#555" stroke-width="2"/><line x1="54" y1="16" x2="58" y2="14" stroke="#555" stroke-width="2"/></svg>`,
      render: () => `<g transform="translate(100,94)"><rect x="4" y="4" width="36" height="22" rx="6" fill="#222" opacity="0.85"/><rect x="56" y="4" width="36" height="22" rx="6" fill="#222" opacity="0.85"/><path d="M40 14 L56 14" stroke="#555" stroke-width="3"/><line x1="4" y1="10" x2="-6" y2="8" stroke="#555" stroke-width="2.5"/><line x1="92" y1="10" x2="102" y2="8" stroke="#555" stroke-width="2.5"/></g>` },
    'round-glasses': { name: 'Rundbrille', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><circle cx="18" cy="20" r="10" fill="none" stroke="#886644" stroke-width="2"/><circle cx="42" cy="20" r="10" fill="none" stroke="#886644" stroke-width="2"/><path d="M28 20 L32 20" stroke="#886644" stroke-width="2"/><line x1="8" y1="18" x2="2" y2="16" stroke="#886644" stroke-width="1.5"/><line x1="52" y1="18" x2="58" y2="16" stroke="#886644" stroke-width="1.5"/></svg>`,
      render: () => `<g transform="translate(102,94)"><circle cx="22" cy="14" r="18" fill="rgba(200,220,255,0.15)" stroke="#886644" stroke-width="2.5"/><circle cx="72" cy="14" r="18" fill="rgba(200,220,255,0.15)" stroke="#886644" stroke-width="2.5"/><path d="M40 14 L54 14" stroke="#886644" stroke-width="2.5"/><line x1="4" y1="10" x2="-6" y2="6" stroke="#886644" stroke-width="2"/><line x1="90" y1="10" x2="100" y2="6" stroke="#886644" stroke-width="2"/></g>` },
    'star-glasses': { name: 'Sternbrille', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><polygon points="18,10 20,16 26,17 22,21 23,27 18,24 13,27 14,21 10,17 16,16" fill="#ff44aa" stroke="#cc2288" stroke-width="0.8"/><polygon points="42,10 44,16 50,17 46,21 47,27 42,24 37,27 38,21 34,17 40,16" fill="#ff44aa" stroke="#cc2288" stroke-width="0.8"/><path d="M26 19 L34 19" stroke="#cc2288" stroke-width="1.5"/></svg>`,
      render: () => `<g transform="translate(98,88)"><polygon points="28,2 33,16 48,18 37,27 39,42 28,35 17,42 19,27 8,18 23,16" fill="#ff44aa" stroke="#cc2288" stroke-width="1.5"/><polygon points="72,2 77,16 92,18 81,27 83,42 72,35 61,42 63,27 52,18 67,16" fill="#ff44aa" stroke="#cc2288" stroke-width="1.5"/><path d="M48 22 L52 22" stroke="#cc2288" stroke-width="2.5"/></g>` },
    'heart-glasses': { name: 'Herzbrille', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><path d="M18 16 C10 8 2 16 10 24 L18 30 L26 24 C34 16 26 8 18 16Z" fill="#ff4466" opacity="0.7"/><path d="M42 16 C34 8 26 16 34 24 L42 30 L50 24 C58 16 50 8 42 16Z" fill="#ff4466" opacity="0.7"/><path d="M26 22 L34 22" stroke="#ff2244" stroke-width="1.5"/></svg>`,
      render: () => `<g transform="translate(98,88)"><path d="M28 16 C16 2 -2 16 14 34 L28 46 L42 34 C58 16 40 2 28 16Z" fill="#ff4466" opacity="0.7"/><path d="M72 16 C60 2 42 16 58 34 L72 46 L86 34 C102 16 84 2 72 16Z" fill="#ff4466" opacity="0.7"/><path d="M42 26 L58 26" stroke="#ff2244" stroke-width="2.5"/></g>` },
    'monocle': { name: 'Monokel', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><circle cx="40" cy="18" r="10" fill="rgba(200,230,255,0.2)" stroke="#ccaa44" stroke-width="2"/><line x1="40" y1="28" x2="38" y2="45" stroke="#ccaa44" stroke-width="1.5"/></svg>`,
      render: () => `<g transform="translate(140,90)"><circle cx="18" cy="18" r="20" fill="rgba(200,230,255,0.15)" stroke="#ccaa44" stroke-width="2.5"/><line x1="18" y1="38" x2="14" y2="70" stroke="#ccaa44" stroke-width="2"/></g>` },
    'eye-patch': { name: 'Augenklappe', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><ellipse cx="18" cy="20" rx="10" ry="8" fill="#222"/><line x1="8" y1="14" x2="52" y2="14" stroke="#222" stroke-width="2"/></svg>`,
      render: () => `<g transform="translate(104,94)"><ellipse cx="22" cy="14" rx="20" ry="16" fill="#222"/><line x1="2" y1="6" x2="94" y2="6" stroke="#222" stroke-width="3"/></g>` },
  },
  mouth: {
    'mustache': { name: 'Schnurrbart', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><path d="M8 22 Q14 14 22 18 Q28 22 30 20 Q32 22 38 18 Q46 14 52 22 Q46 26 38 22 Q32 18 30 20 Q28 18 22 22 Q14 26 8 22Z" fill="#4a3020"/></svg>`,
      render: () => `<g transform="translate(112,125)"><path d="M0 10 Q12 -4 28 4 Q36 10 38 6 Q40 10 48 4 Q64 -4 76 10 Q64 18 48 8 Q40 0 38 6 Q36 0 28 8 Q12 18 0 10Z" fill="#4a3020"/></g>` },
    'tongue-out': { name: 'Zunge', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><path d="M20 18 Q30 14 40 18" fill="none" stroke="#5a3a2a" stroke-width="2" stroke-linecap="round"/><ellipse cx="30" cy="26" rx="6" ry="9" fill="#e87080"/><path d="M30 22 L30 30" stroke="#cc5060" stroke-width="1"/></svg>`,
      render: () => `<g transform="translate(120,124)"><path d="M0 4 Q30 -4 60 4" fill="none" stroke="#5a3a2a" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="30" cy="18" rx="10" ry="16" fill="#e87080"/><path d="M30 10 L30 28" stroke="#cc5060" stroke-width="1.5"/></g>` },
    'vampire': { name: 'Vampir', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><path d="M18 18 Q30 14 42 18" fill="none" stroke="#5a3a2a" stroke-width="2" stroke-linecap="round"/><path d="M22 18 L24 28" stroke="white" stroke-width="2.5" stroke-linecap="round"/><path d="M38 18 L36 28" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg>`,
      render: () => `<g transform="translate(118,124)"><path d="M0 4 Q32 -6 64 4" fill="none" stroke="#5a3a2a" stroke-width="2.5" stroke-linecap="round"/><path d="M14 4 L18 22" stroke="white" stroke-width="4" stroke-linecap="round"/><path d="M50 4 L46 22" stroke="white" stroke-width="4" stroke-linecap="round"/><ellipse cx="32" cy="20" rx="8" ry="4" fill="#cc2020" opacity="0.4"/></g>` },
    'big-grin': { name: 'Breites Grinsen', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><path d="M12 18 Q30 36 48 18" fill="white" stroke="#5a3a2a" stroke-width="2"/><path d="M12 18 Q30 24 48 18" fill="none" stroke="#5a3a2a" stroke-width="1"/></svg>`,
      render: () => `<g transform="translate(112,122)"><path d="M0 4 Q38 40 76 4" fill="white" stroke="#5a3a2a" stroke-width="2.5"/><path d="M0 4 Q38 14 76 4" fill="none" stroke="#5a3a2a" stroke-width="1.5"/></g>` },
    'clown-nose': { name: 'Clownnase', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><circle cx="30" cy="20" r="10" fill="#ff2222"/><ellipse cx="26" cy="16" rx="3" ry="2" fill="white" opacity="0.5"/></svg>`,
      render: () => `<g transform="translate(132,108)"><circle cx="18" cy="18" r="16" fill="#ff2222"/><ellipse cx="12" cy="10" rx="5" ry="3.5" fill="white" opacity="0.5"/></g>` },
  },
  body: {
    'cape': { name: 'Superhelden-Cape', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><path d="M14 12 L14 50 Q30 44 46 50 L46 12" fill="#cc2222" stroke="#991111" stroke-width="1.5"/><rect x="14" y="10" width="32" height="6" rx="2" fill="#ffcc00"/></svg>`,
      render: () => `<g transform="translate(88,148)"><path d="M0 10 L-10 170 Q62 150 134 170 L124 10" fill="#cc2222" stroke="#991111" stroke-width="2"/><path d="M0 10 L-10 170 Q62 150 134 170 L124 10" fill="url(#bodyGrad)"/><rect x="0" y="6" width="124" height="10" rx="3" fill="#ffcc00" stroke="#cc9900" stroke-width="1"/></g>` },
    'tshirt': { name: 'T-Shirt', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><path d="M16 18 L8 28 L16 32 L16 48 L44 48 L44 32 L52 28 L44 18 L38 22 Q30 26 22 22 L16 18Z" fill="#4488ff" stroke="#2266cc" stroke-width="1.2"/><path d="M22 22 Q30 26 38 22" fill="none" stroke="#2266cc" stroke-width="1"/></svg>`,
      render: () => `<g transform="translate(92,158)"><path d="M10 10 L-8 36 L14 44 L14 100 L102 100 L102 44 L124 36 L106 10 L88 22 Q58 36 28 22 Z" fill="#4488ff" stroke="#2266cc" stroke-width="2"/><path d="M28 22 Q58 36 88 22" fill="none" stroke="#2266cc" stroke-width="1.5"/></g>` },
    'dress': { name: 'Kleid', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><path d="M22 16 Q30 20 38 16 L46 50 L14 50 Z" fill="#ee66aa" stroke="#cc4488" stroke-width="1.2"/><path d="M14 50 Q30 46 46 50" fill="none" stroke="#cc4488" stroke-width="1"/><circle cx="30" cy="28" r="2" fill="#ffcc00"/></svg>`,
      render: () => `<g transform="translate(92,158)"><path d="M28 8 Q58 22 88 8 L120 120 L-4 120 Z" fill="#ee66aa" stroke="#cc4488" stroke-width="2"/><path d="M-4 120 Q58 112 120 120" fill="none" stroke="#cc4488" stroke-width="2"/><path d="M-4 120 L20 120 Q58 100 96 120 L120 120" fill="#dd5599" opacity="0.3"/><circle cx="58" cy="36" r="4" fill="#ffcc00"/></g>` },
    'overalls': { name: 'Latzhose', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><rect x="14" y="26" width="32" height="24" rx="2" fill="#4466aa" stroke="#334488" stroke-width="1"/><path d="M18 26 L18 16 L22 16 L22 26" fill="none" stroke="#334488" stroke-width="1.5"/><path d="M38 26 L38 16 L42 16 L42 26" fill="none" stroke="#334488" stroke-width="1.5"/><rect x="14" y="36" width="14" height="14" fill="#3355aa"/><rect x="32" y="36" width="14" height="14" fill="#3355aa"/><rect x="24" y="28" width="12" height="10" rx="2" fill="#5577bb"/></svg>`,
      render: () => `<g transform="translate(94,180)"><rect x="0" y="20" width="116" height="80" rx="4" fill="#4466aa" stroke="#334488" stroke-width="2"/><path d="M16 20 L16 0 L30 0 L30 20" fill="none" stroke="#334488" stroke-width="3"/><path d="M86 20 L86 0 L100 0 L100 20" fill="none" stroke="#334488" stroke-width="3"/><rect x="0" y="58" width="52" height="42" fill="#3355aa"/><rect x="64" y="58" width="52" height="42" fill="#3355aa"/><rect x="36" y="24" width="44" height="30" rx="4" fill="#5577bb"/><circle cx="20" cy="22" r="4" fill="#ccaa44"/><circle cx="96" cy="22" r="4" fill="#ccaa44"/></g>` },
    'spacesuit': { name: 'Raumanzug', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><rect x="14" y="14" width="32" height="36" rx="8" fill="#ddd" stroke="#aaa" stroke-width="1.5"/><circle cx="30" cy="26" r="4" fill="#44aaff"/><rect x="20" y="32" width="20" height="4" rx="2" fill="#aaa"/></svg>`,
      render: () => `<g transform="translate(92,158)"><rect x="4" y="8" width="108" height="105" rx="16" fill="#ddd" stroke="#aaa" stroke-width="2"/><rect x="4" y="8" width="108" height="105" rx="16" fill="url(#bodyGrad)"/><circle cx="58" cy="40" r="8" fill="#44aaff"/><rect x="30" y="56" width="56" height="8" rx="3" fill="#aaa"/><rect x="30" y="72" width="56" height="8" rx="3" fill="#aaa"/></g>` },
    'hawaiian': { name: 'Hawaii-Hemd', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><path d="M16 18 L8 28 L16 32 L16 48 L44 48 L44 32 L52 28 L44 18 L38 22 Q30 26 22 22 L16 18Z" fill="#22aa88" stroke="#118866" stroke-width="1"/><circle cx="24" cy="32" r="3" fill="#ff6688"/><circle cx="36" cy="38" r="3" fill="#ffaa44"/><circle cx="28" cy="42" r="2.5" fill="#ff6688"/></svg>`,
      render: () => `<g transform="translate(92,158)"><path d="M10 10 L-8 36 L14 44 L14 100 L102 100 L102 44 L124 36 L106 10 L88 22 Q58 36 28 22 Z" fill="#22aa88" stroke="#118866" stroke-width="2"/><circle cx="30" cy="50" r="8" fill="#ff6688" opacity="0.7"/><circle cx="70" cy="65" r="7" fill="#ffaa44" opacity="0.7"/><circle cx="45" cy="80" r="6" fill="#ff6688" opacity="0.7"/><circle cx="85" cy="45" r="6" fill="#ffaa44" opacity="0.7"/></g>` },
  },
  hand: {
    'wand': { name: 'Zauberstab', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><line x1="14" y1="48" x2="40" y2="12" stroke="#4a3020" stroke-width="3" stroke-linecap="round"/><polygon points="40,6 42,12 48,12 44,16 45,22 40,18 35,22 36,16 32,12 38,12" fill="#ffdd44"/></svg>`,
      render: () => `<g transform="translate(206,190)"><line x1="0" y1="60" x2="30" y2="-10" stroke="#4a3020" stroke-width="5" stroke-linecap="round"/><polygon points="30,-16 33,-6 42,-6 36,2 38,12 30,6 22,12 24,2 18,-6 27,-6" fill="#ffdd44"/></g>` },
    'sword': { name: 'Schwert', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><line x1="30" y1="8" x2="30" y2="40" stroke="#aab" stroke-width="3"/><rect x="22" y="38" width="16" height="4" rx="1" fill="#886622"/><rect x="27" y="42" width="6" height="10" rx="1" fill="#664411"/><line x1="30" y1="8" x2="30" y2="38" stroke="#ccd" stroke-width="1" opacity="0.5"/></svg>`,
      render: () => `<g transform="translate(210,170)"><line x1="8" y1="-20" x2="8" y2="55" stroke="#aab" stroke-width="6"/><line x1="8" y1="-20" x2="8" y2="55" stroke="#ccd" stroke-width="2" opacity="0.5"/><rect x="-8" y="52" width="32" height="8" rx="2" fill="#886622"/><rect x="3" y="60" width="10" height="18" rx="2" fill="#664411"/></g>` },
    'lollipop': { name: 'Lolli', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><line x1="30" y1="52" x2="30" y2="28" stroke="#ddd" stroke-width="3" stroke-linecap="round"/><circle cx="30" cy="20" r="12" fill="#ff66aa"/><path d="M22 14 Q30 22 38 14" fill="none" stroke="#ff99cc" stroke-width="2"/><path d="M22 22 Q30 28 38 22" fill="none" stroke="#ffcc44" stroke-width="2"/></svg>`,
      render: () => `<g transform="translate(208,170)"><line x1="8" y1="80" x2="8" y2="30" stroke="#ddd" stroke-width="5" stroke-linecap="round"/><circle cx="8" cy="16" r="22" fill="#ff66aa"/><path d="M-8 6 Q8 20 24 6" fill="none" stroke="#ff99cc" stroke-width="3"/><path d="M-8 18 Q8 30 24 18" fill="none" stroke="#ffcc44" stroke-width="3"/></g>` },
    'balloon': { name: 'Ballon', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><path d="M30 50 Q28 42 30 38" stroke="#aaa" stroke-width="1" fill="none"/><ellipse cx="30" cy="22" rx="14" ry="18" fill="#ff4466"/><ellipse cx="26" cy="16" rx="4" ry="6" fill="white" opacity="0.3"/><path d="M27 38 L30 40 L33 38" fill="#ff4466"/></svg>`,
      render: () => `<g transform="translate(200,120)"><path d="M18 120 Q14 80 18 60" stroke="#aaa" stroke-width="1.5" fill="none"/><ellipse cx="18" cy="28" rx="26" ry="34" fill="#ff4466"/><ellipse cx="10" cy="16" rx="8" ry="12" fill="white" opacity="0.25"/><path d="M12 60 L18 64 L24 60" fill="#ff4466"/></g>` },
    'guitar': { name: 'Gitarre', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><ellipse cx="30" cy="38" rx="12" ry="14" fill="#cc7733" stroke="#aa5522" stroke-width="1.5"/><ellipse cx="30" cy="38" rx="4" ry="4" fill="#332211"/><rect x="28" y="8" width="4" height="26" rx="1" fill="#aa5522"/><rect x="24" y="6" width="12" height="4" rx="1" fill="#886633"/></svg>`,
      render: () => `<g transform="translate(198,165)"><ellipse cx="18" cy="56" rx="22" ry="26" fill="#cc7733" stroke="#aa5522" stroke-width="2"/><ellipse cx="18" cy="56" rx="7" ry="7" fill="#332211"/><rect x="14" y="-20" width="8" height="60" rx="2" fill="#aa5522"/><rect x="8" y="-26" width="20" height="8" rx="2" fill="#886633"/><line x1="15" y1="35" x2="15" y2="75" stroke="#ddd" stroke-width="0.5"/><line x1="18" y1="35" x2="18" y2="75" stroke="#ddd" stroke-width="0.5"/><line x1="21" y1="35" x2="21" y2="75" stroke="#ddd" stroke-width="0.5"/></g>` },
    'teddy': { name: 'Teddy', icon: (s=42) => `<svg viewBox="0 0 60 60" width="${s}" height="${s}"><circle cx="30" cy="32" r="14" fill="#c09060"/><circle cx="30" cy="26" r="10" fill="#c09060"/><circle cx="22" cy="20" r="5" fill="#c09060"/><circle cx="38" cy="20" r="5" fill="#c09060"/><circle cx="22" cy="20" r="3" fill="#a07040"/><circle cx="38" cy="20" r="3" fill="#a07040"/><circle cx="27" cy="24" r="1.5" fill="#3a2010"/><circle cx="33" cy="24" r="1.5" fill="#3a2010"/><ellipse cx="30" cy="28" rx="2" ry="1.5" fill="#3a2010"/></svg>`,
      render: () => `<g transform="translate(200,180)"><circle cx="18" cy="30" r="22" fill="#c09060"/><circle cx="18" cy="18" r="16" fill="#c09060"/><circle cx="6" cy="6" r="8" fill="#c09060"/><circle cx="30" cy="6" r="8" fill="#c09060"/><circle cx="6" cy="6" r="5" fill="#a07040"/><circle cx="30" cy="6" r="5" fill="#a07040"/><circle cx="12" cy="14" r="2.5" fill="#3a2010"/><circle cx="24" cy="14" r="2.5" fill="#3a2010"/><ellipse cx="18" cy="20" rx="3" ry="2" fill="#3a2010"/></g>` },
  },
  shoes: {
    'sneakers': { name: 'Sneaker', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><path d="M8 24 L8 16 Q14 10 28 10 L36 10 Q40 10 40 16 L40 24 L52 24 L52 30 L8 30 Z" fill="#4488ff" stroke="#2266cc" stroke-width="1.2"/><rect x="8" y="28" width="44" height="4" rx="1" fill="white"/><circle cx="32" cy="18" r="2" fill="white"/></svg>`,
      render: () => `<g transform="translate(88,318)"><path d="M4 8 Q12 0 36 0 L48 0 Q54 0 54 8 L54 14 L70 14 L70 22 L4 22 Z" fill="#4488ff" stroke="#2266cc" stroke-width="1.5"/><rect x="4" y="20" width="66" height="5" rx="1" fill="white"/><path d="M80 8 Q88 0 112 0 L124 0 Q130 0 130 8 L130 14 L146 14 L146 22 L80 22 Z" fill="#4488ff" stroke="#2266cc" stroke-width="1.5"/><rect x="80" y="20" width="66" height="5" rx="1" fill="white"/></g>` },
    'boots': { name: 'Stiefel', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><path d="M16 4 L16 24 L8 24 L8 32 L36 32 L36 24 L24 24 L24 4 Z" fill="#884422" stroke="#663311" stroke-width="1.2"/><rect x="16" y="2" width="8" height="4" rx="1" fill="#aa6633"/></svg>`,
      render: () => `<g transform="translate(86,296)"><path d="M10 0 L10 28 L-2 28 L-2 40 L42 40 L42 28 L22 28 L22 0 Z" fill="#884422" stroke="#663311" stroke-width="2"/><rect x="10" y="-2" width="12" height="5" rx="1" fill="#aa6633"/><path d="M86 0 L86 28 L74 28 L74 40 L118 40 L118 28 L98 28 L98 0 Z" fill="#884422" stroke="#663311" stroke-width="2"/><rect x="86" y="-2" width="12" height="5" rx="1" fill="#aa6633"/></g>` },
    'flippers': { name: 'Flossen', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><path d="M14 18 L14 24 L4 32 L38 32 L28 24 L28 18 Z" fill="#44bbaa" stroke="#229988" stroke-width="1"/></svg>`,
      render: () => `<g transform="translate(82,316)"><path d="M10 0 L10 10 L-14 24 L52 24 L34 10 L34 0 Z" fill="#44bbaa" stroke="#229988" stroke-width="1.5"/><path d="M86 0 L86 10 L62 24 L128 24 L110 10 L110 0 Z" fill="#44bbaa" stroke="#229988" stroke-width="1.5"/></g>` },
    'roller-skates': { name: 'Rollschuhe', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><rect x="12" y="10" width="20" height="16" rx="3" fill="white" stroke="#ddd" stroke-width="1.2"/><rect x="12" y="10" width="20" height="6" rx="2" fill="#ff66aa"/><circle cx="16" cy="30" r="3" fill="#333"/><circle cx="28" cy="30" r="3" fill="#333"/><circle cx="22" cy="30" r="3" fill="#333"/></svg>`,
      render: () => `<g transform="translate(86,304)"><rect x="2" y="0" width="38" height="22" rx="4" fill="white" stroke="#ddd" stroke-width="1.5"/><rect x="2" y="0" width="38" height="8" rx="3" fill="#ff66aa"/><circle cx="8" cy="28" r="5" fill="#333"/><circle cx="22" cy="28" r="5" fill="#333"/><circle cx="36" cy="28" r="5" fill="#333"/><rect x="78" y="0" width="38" height="22" rx="4" fill="white" stroke="#ddd" stroke-width="1.5"/><rect x="78" y="0" width="38" height="8" rx="3" fill="#ff66aa"/><circle cx="84" cy="28" r="5" fill="#333"/><circle cx="98" cy="28" r="5" fill="#333"/><circle cx="112" cy="28" r="5" fill="#333"/></g>` },
    'slippers': { name: 'Pantoffeln', icon: (s=42) => `<svg viewBox="0 0 60 40" width="${s}" height="${s}"><ellipse cx="26" cy="24" rx="18" ry="10" fill="#ffaacc"/><ellipse cx="22" cy="18" rx="4" ry="3" fill="#ff88aa"/><ellipse cx="30" cy="16" rx="4" ry="3" fill="#ff88aa"/></svg>`,
      render: () => `<g transform="translate(82,318)"><ellipse cx="34" cy="10" rx="36" ry="14" fill="#ffaacc"/><ellipse cx="24" cy="2" rx="8" ry="5" fill="#ff88aa"/><ellipse cx="38" cy="-2" rx="8" ry="5" fill="#ff88aa"/><ellipse cx="110" cy="10" rx="36" ry="14" fill="#ffaacc"/><ellipse cx="100" cy="2" rx="8" ry="5" fill="#ff88aa"/><ellipse cx="114" cy="-2" rx="8" ry="5" fill="#ff88aa"/></g>` },
  }
};

// === STATE ===

let currentAnimal = 'cat';
let currentCategory = 'hat';
let equipped = { hat: null, eyes: null, mouth: null, body: null, hand: null, shoes: null };
let creatureName = '';

// === INIT ===

function init() {
  buildAnimalPicker();
  renderCreature();
  renderItems();
  setupListeners();
  addStars();
}

function buildAnimalPicker() {
  const picker = document.getElementById('animal-picker');
  picker.innerHTML = '';
  Object.entries(animals).forEach(([key, a], i) => {
    const btn = document.createElement('button');
    btn.className = 'animal-btn' + (key === currentAnimal ? ' active' : '');
    btn.dataset.animal = key;
    btn.title = a.name;
    // Mini SVG head preview
    btn.innerHTML = `<svg viewBox="60 50 180 120" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="cg${i}" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ff9999" stop-opacity="0.5"/><stop offset="100%" stop-color="#ff9999" stop-opacity="0"/></radialGradient></defs>
      ${buildMiniHead(key, a)}
    </svg>`;
    picker.appendChild(btn);
  });
}

function buildMiniHead(key, a) {
  const c = { body: a.body, belly: a.belly, nose: a.nose };
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  a.buildHead(g, c);
  const g2 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  a.buildFace(g2, c);
  return g.innerHTML + g2.innerHTML;
}

// === RENDERING ===

function renderCreature() {
  const a = animals[currentAnimal];
  const c = { body: a.body, belly: a.belly, nose: a.nose };

  const layers = {
    tail: document.getElementById('layer-tail'),
    legs: document.getElementById('layer-legs'),
    body: document.getElementById('layer-body'),
    arms: document.getElementById('layer-arms'),
    outfit: document.getElementById('layer-outfit'),
    head: document.getElementById('layer-head'),
    ears: document.getElementById('layer-ears'),
    hat: document.getElementById('layer-hat'),
    face: document.getElementById('layer-face'),
    eyewear: document.getElementById('layer-eyewear'),
    mouthwear: document.getElementById('layer-mouthwear'),
    handItem: document.getElementById('layer-hand-item'),
    shoes: document.getElementById('layer-shoes'),
  };

  // Build animal
  a.buildTail(layers.tail, c);
  a.buildLegs(layers.legs, c);
  a.buildBody(layers.body, c);
  a.buildArms(layers.arms, c);
  a.buildHead(layers.head, c);
  layers.ears.innerHTML = '';

  // Face: hide default if eyewear/mouthwear equipped
  a.buildFace(layers.face, c);

  // Hide eyes/mouth from face if accessories equipped
  if (equipped.eyes) {
    const eyes = layers.face.querySelectorAll('ellipse, circle');
    // Hide the first ~10 elements (the eye area)
    let count = 0;
    eyes.forEach(el => {
      const cy = parseFloat(el.getAttribute('cy') || 0);
      if (cy >= 85 && cy <= 115 && count < 12) {
        el.setAttribute('opacity', '0');
        count++;
      }
    });
  }

  if (equipped.mouth) {
    const paths = layers.face.querySelectorAll('path, rect, ellipse');
    paths.forEach(el => {
      const cy = parseFloat(el.getAttribute('cy') || 0);
      const y = parseFloat(el.getAttribute('y') || 0);
      // Mouth area is around y 120-145
      if ((cy >= 118 && cy <= 145) || (y >= 118 && y <= 145)) {
        el.setAttribute('opacity', '0');
      }
    });
  }

  // Accessories
  layers.hat.innerHTML = equipped.hat ? itemSVGs.hat[equipped.hat.id].render() : '';
  layers.eyewear.innerHTML = equipped.eyes ? itemSVGs.eyes[equipped.eyes.id].render() : '';
  layers.mouthwear.innerHTML = equipped.mouth ? itemSVGs.mouth[equipped.mouth.id].render() : '';
  layers.outfit.innerHTML = equipped.body ? itemSVGs.body[equipped.body.id].render() : '';
  layers.handItem.innerHTML = equipped.hand ? itemSVGs.hand[equipped.hand.id].render() : '';
  layers.shoes.innerHTML = equipped.shoes ? itemSVGs.shoes[equipped.shoes.id].render() : '';

  // Name
  document.getElementById('creature-name-display').textContent = creatureName || '';
}

function renderItems() {
  const grid = document.getElementById('items-grid');
  grid.innerHTML = '';

  const categoryItems = itemSVGs[currentCategory] || {};
  Object.entries(categoryItems).forEach(([id, item]) => {
    const btn = document.createElement('button');
    btn.className = 'item-btn';
    if (equipped[currentCategory] && equipped[currentCategory].id === id) {
      btn.classList.add('selected');
    }
    btn.innerHTML = `${item.icon()}<span class="item-name">${item.name}</span>`;
    btn.addEventListener('click', () => toggleItem(currentCategory, id, item));
    grid.appendChild(btn);
  });
}

// === LOGIC ===

function toggleItem(category, id, item) {
  if (equipped[category] && equipped[category].id === id) {
    equipped[category] = null;
  } else {
    equipped[category] = { id, name: item.name };
  }
  renderCreature();
  renderItems();
}

function randomOutfit() {
  Object.keys(itemSVGs).forEach(category => {
    const ids = Object.keys(itemSVGs[category]);
    if (Math.random() > 0.3 && ids.length) {
      const id = ids[Math.floor(Math.random() * ids.length)];
      equipped[category] = { id, name: itemSVGs[category][id].name };
    } else {
      equipped[category] = null;
    }
  });

  const animalKeys = Object.keys(animals);
  currentAnimal = animalKeys[Math.floor(Math.random() * animalKeys.length)];
  buildAnimalPicker();

  const svg = document.getElementById('creature-svg');
  svg.style.transition = 'transform 0.1s';
  svg.style.transform = 'rotate(-3deg)';
  setTimeout(() => { svg.style.transform = 'rotate(3deg)'; }, 100);
  setTimeout(() => { svg.style.transform = 'rotate(-1deg)'; }, 200);
  setTimeout(() => { svg.style.transform = 'rotate(0deg)'; }, 300);

  renderCreature();
  renderItems();
}

function clearOutfit() {
  Object.keys(equipped).forEach(k => equipped[k] = null);
  renderCreature();
  renderItems();

  const stage = document.getElementById('stage');
  for (let i = 0; i < 8; i++) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '\u2728';
    sparkle.style.cssText = `position:absolute;font-size:1.5rem;z-index:100;pointer-events:none;left:${30+Math.random()*40}%;top:${20+Math.random()*50}%;animation:sparkle-fade 0.6s ease forwards;`;
    stage.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
  }
}

function askName() {
  const name = prompt('Wie soll dein Tier heißen?', creatureName || animals[currentAnimal].name);
  if (name !== null) { creatureName = name.trim(); renderCreature(); }
}

function takeScreenshot() {
  const animal = animals[currentAnimal];
  const parts = [];
  Object.entries(equipped).forEach(([slot, item]) => {
    if (item) parts.push(item.name);
  });
  const name = creatureName || animal.name;
  const outfit = parts.length > 0 ? parts.join(', ') : 'Nackt!';
  const text = `Mein verkleidetes Tier!\n\n${name}\nOutfit: ${outfit}\n\n- Kreatur-Verkleiden!`;
  navigator.clipboard.writeText(text).then(() => showToast('In die Zwischenablage kopiert!')).catch(() => showToast(text));
}

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:#5a4a6a;color:white;padding:12px 24px;border-radius:16px;font-family:'Baloo 2',cursive;font-size:1rem;z-index:1000;box-shadow:0 4px 16px rgba(0,0,0,0.2);animation:toast-in 0.3s ease;white-space:pre-line;text-align:center;max-width:90%;`;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.animation = 'toast-out 0.3s ease forwards'; setTimeout(() => toast.remove(), 300); }, 2500);
}

function addStars() {
  const chars = ['\u2b50', '\u2728', '\ud83d\udcab', '\ud83c\udf1f'];
  for (let i = 0; i < 10; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.textContent = chars[Math.floor(Math.random() * chars.length)];
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    star.style.fontSize = `${0.8 + Math.random() * 0.6}rem`;
    document.body.appendChild(star);
  }
}

// === LISTENERS ===

function setupListeners() {
  document.getElementById('animal-picker').addEventListener('click', e => {
    const btn = e.target.closest('.animal-btn');
    if (!btn) return;
    currentAnimal = btn.dataset.animal;
    creatureName = '';
    document.querySelectorAll('.animal-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCreature();
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentCategory = tab.dataset.category;
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderItems();
    });
  });

  document.getElementById('btn-random').addEventListener('click', randomOutfit);
  document.getElementById('btn-clear').addEventListener('click', clearOutfit);
  document.getElementById('btn-name').addEventListener('click', askName);
  document.getElementById('btn-screenshot').addEventListener('click', takeScreenshot);
}

init();
