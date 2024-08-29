const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// save()
// restore()

// 1.save & restore를 활용한 작업
// ctx.fillStyle = "#ccc";
// ctx.fillRect(10, 10, 100, 100);

// ctx.save();
// ctx.translate(150, 150);
// ctx.fillStyle = "#222";
// ctx.fillRect(10, 10, 100, 100);

// ctx.fillStyle = "#f00";
// ctx.fillRect(50, 50, 80, 20);
// ctx.restore();

// ctx.fillStyle = "#f00";
// ctx.fillRect(50, 50, 80, 20);

// 2.moveTo를 활용한 작업
// ctx.fillStyle = "#ccc";
// ctx.fillRect(10, 10, 100, 100);

// ctx.moveTo(150, 150);

// ctx.fillStyle = "#222";
// ctx.fillRect(160, 160, 100, 100);

// ctx.fillStyle = "#f00";
// ctx.fillRect(50, 50, 80, 20);
