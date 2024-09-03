const ul = document.querySelector("ul");

const grid = [9, 5];
const col = grid[0];
const row = grid[1];
const allElem = col * row;

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  li.style.backgroundColor = "#ffffff";
  ul.appendChild(li);
}

const tl = anime.timeline({
  targets: "li",
  loop: true,
  direction: "alternate",
  delay: anime.stagger(200, { grid: [9, 5], from: "center" }),
});

tl.add({
  scale: [
    { value: 0.1, easing: "easeOutSine", duration: 500 },
    { value: 1, easing: "easeOutQuad", duration: 1200 },
  ],
}).add({
  translateX: anime.stagger(10, { grid: [9, 5], from: "center", axis: "x" }),
  translateY: anime.stagger(10, { grid: [9, 5], from: "center", axis: "y" }),
  rotate: anime.stagger([0, 90], { grid: [9, 5], from: "center", axis: "x" }),
  backgroundColor: anime.stagger(["#ff0000", "#0000ff"], {
    grid: [9, 5],
    from: "center",
    axis: "x",
  }),
});
