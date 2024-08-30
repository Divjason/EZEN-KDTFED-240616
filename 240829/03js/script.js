const h1 = document.querySelector("h1");
const box = document.querySelector(".box");

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

  console.log(x, y);

  h1.innerText = `X : ${x} Y : ${y}`;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  box.style.top = `${targetY}px`;
  box.style.left = `${targetX}px`;

  window.requestAnimationFrame(loop);
};

loop();
