const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

// ctx.globalAlpha = 0.3;
// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.fillRect(50, 50, 100, 50);

// ctx.fillStyle = "rgb(0, 0, 255)";
// ctx.fillRect(150, 50, 100, 50);

// ctx.fillStyle = "rgb(0, 255, 0)";
// ctx.fillRect(250, 50, 100, 50);

// ctx.fillStyle = "rgb(255, 255, 0)";
// ctx.fillRect(350, 50, 100, 50);

ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
ctx.fillRect(50, 50, 100, 50);

ctx.fillStyle = "rgba(0, 0, 255, 0.4)";
ctx.fillRect(150, 50, 100, 50);

ctx.fillStyle = "rgba(0, 255, 0, 0.6)";
ctx.fillRect(250, 50, 100, 50);

ctx.fillStyle = "rgba(255, 255, 0, 0.8)";
ctx.fillRect(350, 50, 100, 50);
