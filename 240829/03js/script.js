const h1 = document.querySelector("h1");
const box = document.querySelector(".box");

window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  h1.innerText = `X : ${x} Y : ${y}`;
});
