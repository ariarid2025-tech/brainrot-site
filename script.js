// MATRIX RAIN
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const columns = Math.floor(width / 20);
const drops = Array(columns).fill(1);

const chars = '01@%^☺☻★☆☯☢☣♠♣♥♦♪♫'.split('');

function drawMatrix() {
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#0F0';
  ctx.font = '18px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * 20, drops[i] * 20);

    if (drops[i] * 20 > height || Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }

  requestAnimationFrame(drawMatrix);
}

drawMatrix();

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// BUTTONS
const genBtn = document.getElementById("genBtn");
const copyBtn = document.getElementById("copyBtn");
const download = document.getElementById("download");
const status = document.getElementById("status");
const video = document.getElementById("video");

genBtn.onclick = () => {
  // Random brainrot prompt
  const subjects = ["AI cats", "Glitchy frogs", "Robot puppies", "Pixelated toasters", "Neon spaghetti"];
  const actions = ["dancing", "singing", "floating", "hacking", "glitching"];
  const places  = ["in space", "on a disco ball", "in a cyberpunk city", "on a rainbow", "inside a toaster"];

  const prompt = `${subjects[Math.floor(Math.random()*subjects.length)]} ${actions[Math.floor(Math.random()*actions.length)]} ${places[Math.floor(Math.random()*places.length)]}`;

  status.innerText = `Prompt: ${prompt}`;

  // Optional: placeholder video
  // video.src = "https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4";
  // video.style.display = "block";

  // Optional: enable download prompt as text
  const blob = new Blob([prompt], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  download.href = url;
  download.download = "brainrot-prompt.txt";
  download.style.display = "inline-block";
};

// COPY PROMPT
copyBtn.onclick = () => {
  const text = status.innerText.replace("Prompt: ", "");
  navigator.clipboard.writeText(text);
  alert("Prompt copied!");
};
