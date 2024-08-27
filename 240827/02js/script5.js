const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.scale(1, 0.7);

// face
ctx.beginPath();
ctx.arc(150, 150, 80, 0, Math.PI * 2, false);
ctx.closePath();

ctx.fillStyle = "green";
ctx.fill();

// eye
ctx.beginPath();
ctx.arc(120, 80, 20, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 20, 0, Math.PI * 2, false);
ctx.closePath();

ctx.fillStyle = "white";
ctx.strokeStyle = "green";
ctx.fill();
ctx.stroke();

// circle
ctx.beginPath();
ctx.arc(120, 80, 5, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 5, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fillStyle = "black";
ctx.fill();

// mouth
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI, false);
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.stroke();
