/* MATRIX RAIN */
const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "@%^&*()☺░▒▓01アイウエオ";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }, () => 1);

function drawRain() {
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff66";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}

setInterval(drawRain, 33);

/* UI LOGIC */
const output = document.getElementById("output");
let currentPrompt = "";

document.querySelectorAll(".style").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".style").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  };
});

document.getElementById("generate").onclick = () => {
  const topic = document.getElementById("topic").value || "random chaos";
  const style = document.querySelector(".style.active").innerText;

  currentPrompt = `
Create a short, high-energy AI video.
Topic: ${topic}
Style: ${style}
Visuals: chaotic, colorful, fast cuts
Mood: viral, surreal, absurd
Camera: handheld, zooms, glitches
Duration: 5–10 seconds
`;

  output.textContent = currentPrompt.trim();
};

document.getElementById("copy").onclick = () => {
  navigator.clipboard.writeText(currentPrompt);
  alert("Prompt copied!");
};

document.getElementById("firefly").onclick = () => {
  navigator.clipboard.writeText(currentPrompt);
  window.open("https://firefly.adobe.com/generate/video", "_blank");
};

