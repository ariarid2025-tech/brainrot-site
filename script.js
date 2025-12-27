const output = document.getElementById("output");
const topic = document.getElementById("topic");

let selectedStyle = "Brainrot";

document.querySelectorAll(".style").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".style").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedStyle = btn.textContent;
  };
});

document.getElementById("generate").onclick = () => {
  const prompt = `A ${selectedStyle} style AI video about ${topic.value || "random brainrot chaos"}, hyper-saturated colors, fast cuts, absurd energy, viral TikTok pacing, surreal visuals.`;
  output.textContent = prompt;
};

document.getElementById("copy").onclick = () => {
  navigator.clipboard.writeText(output.textContent);
  alert("Prompt copied!");
};

document.getElementById("firefly").onclick = () => {
  navigator.clipboard.writeText(output.textContent);
  window.open("https://firefly.adobe.com/generate/video", "_blank");
};
