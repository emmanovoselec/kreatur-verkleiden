// === DATA ===

const animals = {
  cat: { emoji: '🐱', name: 'Katze', color: '#f5d5c8', earStyle: 'pointed' },
  dog: { emoji: '🐶', name: 'Hund', color: '#e8d4b8', earStyle: 'floppy' },
  bunny: { emoji: '🐰', name: 'Hase', color: '#f0e0f0', earStyle: 'long' },
  bear: { emoji: '🐻', name: 'Bär', color: '#d4b896', earStyle: 'round' },
  frog: { emoji: '🐸', name: 'Frosch', color: '#b8e6b8', earStyle: 'none' },
};

const items = {
  hat: [
    { id: 'pizza-hat', emoji: '🍕', name: 'Pizzahut' },
    { id: 'crown', emoji: '👑', name: 'Krone' },
    { id: 'top-hat', emoji: '🎩', name: 'Zylinder' },
    { id: 'party-hat', emoji: '🥳', name: 'Partyhut' },
    { id: 'flower', emoji: '🌸', name: 'Blume' },
    { id: 'rainbow', emoji: '🌈', name: 'Regenbogen' },
    { id: 'ufo', emoji: '🛸', name: 'UFO' },
    { id: 'banana', emoji: '🍌', name: 'Banane' },
    { id: 'frog-hat', emoji: '🐸', name: 'Froschkönig' },
    { id: 'star', emoji: '⭐', name: 'Stern' },
    { id: 'cheese', emoji: '🧀', name: 'Käse' },
    { id: 'octopus', emoji: '🐙', name: 'Oktopus' },
  ],
  eyes: [
    { id: 'sunglasses', emoji: '😎', name: 'Sonnenbrille' },
    { id: 'nerd', emoji: '🤓', name: 'Nerdbrille' },
    { id: 'star-eyes', emoji: '🤩', name: 'Staraugen' },
    { id: 'heart-eyes', emoji: '😍', name: 'Herzaugen' },
    { id: 'monocle', emoji: '🧐', name: 'Monokel' },
    { id: 'dizzy', emoji: '😵‍💫', name: 'Schwindel' },
    { id: 'mask', emoji: '🦹', name: 'Maske' },
    { id: 'robot-face', emoji: '🤖', name: 'Roboter' },
  ],
  mouth: [
    { id: 'mustache', emoji: '🥸', name: 'Schnurrbart' },
    { id: 'tongue', emoji: '😛', name: 'Zunge' },
    { id: 'kiss', emoji: '😘', name: 'Kussmund' },
    { id: 'vampire', emoji: '🧛', name: 'Vampir' },
    { id: 'clown', emoji: '🤡', name: 'Clown' },
    { id: 'zipper', emoji: '🤐', name: 'Reißverschluss' },
  ],
  body: [
    { id: 'cape', emoji: '🦸', name: 'Superheld' },
    { id: 'tshirt', emoji: '👕', name: 'T-Shirt' },
    { id: 'dress', emoji: '👗', name: 'Kleid' },
    { id: 'armor', emoji: '🛡️', name: 'Ritter' },
    { id: 'lab-coat', emoji: '🥼', name: 'Laborkittel' },
    { id: 'spacesuit', emoji: '🧑‍🚀', name: 'Raumanzug' },
    { id: 'tutu', emoji: '🩰', name: 'Ballerina' },
    { id: 'hawaiian', emoji: '🌺', name: 'Hawaii' },
  ],
  hand: [
    { id: 'wand', emoji: '🪄', name: 'Zauberstab' },
    { id: 'sword', emoji: '⚔️', name: 'Schwert' },
    { id: 'lollipop', emoji: '🍭', name: 'Lolli' },
    { id: 'guitar', emoji: '🎸', name: 'Gitarre' },
    { id: 'balloon', emoji: '🎈', name: 'Ballon' },
    { id: 'microphone', emoji: '🎤', name: 'Mikrofon' },
    { id: 'paintbrush', emoji: '🖌️', name: 'Pinsel' },
    { id: 'teddy', emoji: '🧸', name: 'Teddy' },
  ],
  shoes: [
    { id: 'sneakers', emoji: '👟', name: 'Sneaker' },
    { id: 'boots', emoji: '👢', name: 'Stiefel' },
    { id: 'roller', emoji: '⛸️', name: 'Schlittschuh' },
    { id: 'flipflops', emoji: '🩴', name: 'Flipflops' },
    { id: 'socks', emoji: '🧦', name: 'Socken' },
    { id: 'skis', emoji: '⛷️', name: 'Skier' },
  ],
};

// === STATE ===

let currentAnimal = 'cat';
let currentCategory = 'hat';
let equipped = { hat: null, eyes: null, mouth: null, body: null, hand: null, shoes: null };
let creatureName = '';

// === INIT ===

function init() {
  renderCreature();
  renderItems();
  setupListeners();
  addStars();
}

// === RENDERING ===

function renderCreature() {
  const animal = animals[currentAnimal];
  const body = document.getElementById('creature-body');
  body.style.background = animal.color;
  body.style.boxShadow = `0 8px 24px ${animal.color}88`;

  // Update ears based on animal type
  removeEars();
  addEars(animal.earStyle, animal.color);

  // Update equipped items display
  Object.keys(equipped).forEach(slot => {
    const slotEl = document.getElementById(`slot-${slot}`);
    if (equipped[slot]) {
      slotEl.textContent = equipped[slot].emoji;
    } else {
      slotEl.textContent = '';
    }
  });

  // Show/hide default face based on equipped face items
  const face = document.getElementById('creature-face');
  if (equipped.eyes) {
    face.querySelectorAll('.eye').forEach(e => e.style.opacity = '0');
  } else {
    face.querySelectorAll('.eye').forEach(e => e.style.opacity = '1');
  }
  if (equipped.mouth) {
    face.querySelector('.mouth').style.opacity = '0';
  } else {
    face.querySelector('.mouth').style.opacity = '1';
  }

  // Name display
  const nameEl = document.getElementById('creature-name-display');
  nameEl.textContent = creatureName || '';
}

function removeEars() {
  document.querySelectorAll('.ear').forEach(e => e.remove());
}

function addEars(style, color) {
  const creature = document.getElementById('creature');
  if (style === 'none') return;

  const leftEar = document.createElement('div');
  const rightEar = document.createElement('div');
  leftEar.className = 'ear';
  rightEar.className = 'ear';

  const base = {
    position: 'absolute',
    background: color,
    zIndex: '2',
    transition: 'background 0.3s',
  };

  if (style === 'pointed') {
    Object.assign(leftEar.style, base, {
      width: '30px', height: '40px', top: '30px', left: '25px',
      borderRadius: '50% 50% 0 0',
      transform: 'rotate(-15deg)',
    });
    Object.assign(rightEar.style, base, {
      width: '30px', height: '40px', top: '30px', right: '25px',
      borderRadius: '50% 50% 0 0',
      transform: 'rotate(15deg)',
    });
  } else if (style === 'floppy') {
    Object.assign(leftEar.style, base, {
      width: '36px', height: '50px', top: '35px', left: '14px',
      borderRadius: '50% 0 50% 50%',
      transform: 'rotate(-30deg)',
    });
    Object.assign(rightEar.style, base, {
      width: '36px', height: '50px', top: '35px', right: '14px',
      borderRadius: '0 50% 50% 50%',
      transform: 'rotate(30deg)',
    });
  } else if (style === 'long') {
    Object.assign(leftEar.style, base, {
      width: '24px', height: '70px', top: '-10px', left: '40px',
      borderRadius: '50% 50% 30% 30%',
      transform: 'rotate(-10deg)',
    });
    Object.assign(rightEar.style, base, {
      width: '24px', height: '70px', top: '-10px', right: '40px',
      borderRadius: '50% 50% 30% 30%',
      transform: 'rotate(10deg)',
    });
  } else if (style === 'round') {
    Object.assign(leftEar.style, base, {
      width: '32px', height: '32px', top: '28px', left: '22px',
      borderRadius: '50%',
    });
    Object.assign(rightEar.style, base, {
      width: '32px', height: '32px', top: '28px', right: '22px',
      borderRadius: '50%',
    });
  }

  // Darker inner ear
  const innerLeft = document.createElement('div');
  const innerRight = document.createElement('div');
  innerLeft.style.cssText = 'position:absolute;inset:25%;border-radius:inherit;background:rgba(0,0,0,0.08);';
  innerRight.style.cssText = 'position:absolute;inset:25%;border-radius:inherit;background:rgba(0,0,0,0.08);';
  leftEar.appendChild(innerLeft);
  rightEar.appendChild(innerRight);

  creature.appendChild(leftEar);
  creature.appendChild(rightEar);
}

function renderItems() {
  const grid = document.getElementById('items-grid');
  grid.innerHTML = '';

  const categoryItems = items[currentCategory] || [];
  categoryItems.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'item-btn';
    if (equipped[currentCategory] && equipped[currentCategory].id === item.id) {
      btn.classList.add('selected');
    }
    btn.innerHTML = `${item.emoji}<span class="item-name">${item.name}</span>`;
    btn.addEventListener('click', () => toggleItem(currentCategory, item));
    grid.appendChild(btn);
  });
}

// === LOGIC ===

function toggleItem(category, item) {
  if (equipped[category] && equipped[category].id === item.id) {
    // Unequip
    equipped[category] = null;
  } else {
    // Equip
    equipped[category] = item;
    // Bounce animation
    const slotEl = document.getElementById(`slot-${category}`);
    slotEl.classList.remove('equip-bounce');
    void slotEl.offsetWidth; // trigger reflow
    slotEl.classList.add('equip-bounce');
  }
  renderCreature();
  renderItems();
}

function randomOutfit() {
  Object.keys(items).forEach(category => {
    const categoryItems = items[category];
    if (Math.random() > 0.3) {
      equipped[category] = categoryItems[Math.floor(Math.random() * categoryItems.length)];
    } else {
      equipped[category] = null;
    }
  });
  // Also random animal
  const animalKeys = Object.keys(animals);
  currentAnimal = animalKeys[Math.floor(Math.random() * animalKeys.length)];

  // Update animal picker buttons
  document.querySelectorAll('.animal-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.animal === currentAnimal);
  });

  // Fun shake animation
  const creature = document.getElementById('creature');
  creature.style.transition = 'transform 0.1s';
  creature.style.transform = 'rotate(-5deg)';
  setTimeout(() => { creature.style.transform = 'rotate(5deg)'; }, 100);
  setTimeout(() => { creature.style.transform = 'rotate(-3deg)'; }, 200);
  setTimeout(() => { creature.style.transform = 'rotate(0deg)'; }, 300);

  renderCreature();
  renderItems();
}

function clearOutfit() {
  Object.keys(equipped).forEach(k => equipped[k] = null);
  renderCreature();
  renderItems();

  // Sparkle effect
  const stage = document.getElementById('stage');
  for (let i = 0; i < 8; i++) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
      position: absolute;
      font-size: 1.5rem;
      z-index: 100;
      pointer-events: none;
      left: ${30 + Math.random() * 60}%;
      top: ${20 + Math.random() * 60}%;
      animation: sparkle-fade 0.6s ease forwards;
    `;
    stage.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
  }
}

function askName() {
  const name = prompt('Wie soll dein Tier heißen?', creatureName || animals[currentAnimal].name);
  if (name !== null) {
    creatureName = name.trim();
    renderCreature();
  }
}

function takeScreenshot() {
  // Build a text summary since we can't use html2canvas
  const animal = animals[currentAnimal];
  const outfitParts = [];
  Object.keys(equipped).forEach(slot => {
    if (equipped[slot]) {
      outfitParts.push(`${equipped[slot].emoji} ${equipped[slot].name}`);
    }
  });

  const name = creatureName || animal.name;
  const outfit = outfitParts.length > 0 ? outfitParts.join(', ') : 'Nackt! 😄';

  const text = `🎨 Mein verkleidetes Tier!\n\n${animal.emoji} ${name}\nOutfit: ${outfit}\n\n— Kreatur-Verkleiden! 🎉`;

  // Copy to clipboard
  navigator.clipboard.writeText(text).then(() => {
    showToast('In die Zwischenablage kopiert! 📋');
  }).catch(() => {
    showToast(text);
  });
}

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: #5a4a6a;
    color: white;
    padding: 12px 24px;
    border-radius: 16px;
    font-family: 'Baloo 2', cursive;
    font-size: 1rem;
    z-index: 1000;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    animation: toast-in 0.3s ease;
    white-space: pre-line;
    text-align: center;
    max-width: 90%;
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toast-out 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function addStars() {
  const starChars = ['⭐', '✨', '💫', '🌟'];
  for (let i = 0; i < 12; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.textContent = starChars[Math.floor(Math.random() * starChars.length)];
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    star.style.fontSize = `${0.8 + Math.random() * 0.8}rem`;
    document.body.appendChild(star);
  }
}

// === LISTENERS ===

function setupListeners() {
  // Animal picker
  document.querySelectorAll('.animal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentAnimal = btn.dataset.animal;
      creatureName = '';
      document.querySelectorAll('.animal-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCreature();
    });
  });

  // Category tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentCategory = tab.dataset.category;
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderItems();
    });
  });

  // Action buttons
  document.getElementById('btn-random').addEventListener('click', randomOutfit);
  document.getElementById('btn-clear').addEventListener('click', clearOutfit);
  document.getElementById('btn-name').addEventListener('click', askName);
  document.getElementById('btn-screenshot').addEventListener('click', takeScreenshot);
}

// === CSS Animations (injected) ===
const style = document.createElement('style');
style.textContent = `
  @keyframes sparkle-fade {
    0% { opacity: 1; transform: scale(1) translateY(0); }
    100% { opacity: 0; transform: scale(0.5) translateY(-30px); }
  }
  @keyframes toast-in {
    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
  @keyframes toast-out {
    from { opacity: 1; transform: translateX(-50%) translateY(0); }
    to { opacity: 0; transform: translateX(-50%) translateY(20px); }
  }
`;
document.head.appendChild(style);

// Start!
init();
