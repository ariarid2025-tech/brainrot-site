/* ================= MATRIX RAIN ================= */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01@#$%^&*()ツ☺☠▓▒░";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffcc";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

/* ================= PROMPT GENERATOR ================= */
const prompts = [
  "AI cats dancing in a neon hacker city",
  "Skibidi toilet but cyberpunk horror",
  "Low quality brainrot meme exploding colors",
  "Minecraft Steve glitching through reality",
  "Deep fried AI animals spinning violently",
  "Unhinged AI animation with flashing lights",
  "Surreal cursed AI cats screaming",
  "Internet brainrot chaos meme aesthetic"
];

const promptBox = document.getElementById("promptBox");
const genBtn = document.getElementById("genBtn");
const copyBtn = document.getElementById("copyBtn");
const aiBtn = document.getElementById("aiBtn");

genBtn.onclick = () => {
  const p = prompts[Math.floor(Math.random() * prompts.length)];
  promptBox.innerText = p;
};

/* COPY PROMPT */
copyBtn.onclick = () => {
  navigator.clipboard.writeText(promptBox.innerText);
  alert("Prompt copied!");
};

/* OPEN AI */
aiBtn.onclick = () => {
  navigator.clipboard.writeText(promptBox.innerText);
  window.open("https://firefly.adobe.com/generate/video", "_blank");
};
