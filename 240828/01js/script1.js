const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

const img = new Image();
// img.addEventListener("load", () => {
//   ctx.drawImage(img, 0, 0);
// });

img.onload = function () {
  ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
};

img.src = "./cat.jpg";

// const img = new Image();
// img.onload = function () {
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// };

// img.src = "./bird.jpg";

// ctx.beginPath();
// ctx.arc(480, 380, 150, 0, Math.PI * 2, false);
// ctx.clip();
