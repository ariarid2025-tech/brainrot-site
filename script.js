// MATRIX RAIN EFFECT
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
let columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
  drops[i] = Math.random() * canvas.height;
}

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff66"; // green
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

window.addEventListener("resize", resize);

// BUTTON PLACEHOLDER
document.getElementById("genBtn").onclick = () => {
  const video = document.getElementById("video");
  const download = document.getElementById("download");
  const status = document.getElementById("status");

  // Array of random brainrot prompts
  const prompts = [
    "AI cats doing the cha-cha",
    "Glitchy neon frogs dancing in space",
    "Pixelated spaghetti with a disco ball",
    "Dancing toaster in a cyberpunk city",
    "Robot puppies playing jazz on a rainbow"
  ];

  // Pick a random prompt
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];

  // Placeholder video (same video for now)
  const videoUrl = "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4";

  // Update video
  video.src = videoUrl;
  video.play();

  // Update download link
  download.href = videoUrl;
  download.style.display = "block";

  // Show prompt
  status.innerText = `Prompt: ${prompt} | Video ready!`;
};
