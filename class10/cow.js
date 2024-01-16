// Get the canvas element
const cow = document.getElementById("cow");
const ctx2 = cow.getContext("2d");

// Draw the body
ctx2.fillStyle = "brown";
ctx2.beginPath();
ctx2.arc(250, 200, 100, 0, Math.PI * 2);
ctx2.fill();

// Draw the head
ctx2.fillStyle = "brown";
ctx2.beginPath();
ctx2.arc(180, 140, 50, 0, Math.PI * 2);
ctx2.fill();

// Draw the eyes
ctx2.fillStyle = "white";
ctx2.beginPath();
ctx2.arc(170, 130, 10, 0, Math.PI * 2);
ctx2.fill();
ctx2.beginPath();
ctx2.arc(190, 130, 10, 0, Math.PI * 2);
ctx2.fill();

// Draw the nose
ctx2.fillStyle = "black";
ctx2.beginPath();
ctx2.arc(180, 150, 5, 0, Math.PI * 2);
ctx2.fill();

// Draw the ears
ctx2.beginPath();
ctx2.arc(140, 140, 15, 0, Math.PI * 2);
ctx2.fill();
ctx2.beginPath();
ctx2.arc(220, 140, 15, 0, Math.PI * 2);
ctx2.fill();

// Draw the tail
ctx2.strokeStyle = "brown";
ctx2.lineWidth = 5;
ctx2.beginPath();
ctx2.moveTo(330, 200);
ctx2.lineTo(370, 140);
ctx2.stroke();

// Draw the legs
ctx2.fillStyle = "brown";
ctx2.fillRect(160, 240, 20, 40);
ctx2.fillRect(220, 240, 20, 40);

ctx2.fillRect(240, 240, 20, 40);
ctx2.fillRect(290, 240, 20, 40);
