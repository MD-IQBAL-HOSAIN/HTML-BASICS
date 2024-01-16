// Get the canvas element
const canvas = document.getElementById("flower");
const ctx = canvas.getContext("2d");

// Draw the stem
ctx.beginPath();
ctx.moveTo(250, 300);
ctx.lineTo(250, 200);
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.stroke();

// Draw the petals
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 190, 30, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(260, 190, 30, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(230, 160, 30, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(230, 220, 30, 0, Math.PI * 2);
ctx.fill();

// Draw the center of the flower
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(250, 190, 20, 0, Math.PI * 2);
ctx.fill();
