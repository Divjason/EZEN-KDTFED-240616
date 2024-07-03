// mouseover & mouseout 기능 구현

const outerElement1 = document.querySelector(".out.overout");
let outerCount1 = 0;
outerElement1.addEventListener("mouseover", () => {
  const pElements = outerElement1.querySelectorAll("p");
  if (pElements.length > 0) {
    pElements[0].innerText = `Outer Box Over: ${outerCount1++}`;
  }
});

const innerElement1 = document.querySelector(".in.overout");
let innerCount1 = 0;
innerElement1.addEventListener("mouseover", () => {
  const pElements = innerElement1.querySelectorAll("p");
  if (pElements.length > 0) {
    pElements[0].innerText = `Inner Box Over: ${outerCount1++}`;
  }
});

// mouseenter & mouseleave 기능 구현

const outerElement2 = document.querySelector(".out.enterleave");
let outerCount2 = 0;
outerElement2.addEventListener("mouseenter", () => {
  const pElements = outerElement2.querySelectorAll("p");
  if (pElements.length > 0) {
    pElements[0].innerText = `Outer Box Over: ${outerCount2++}`;
  }
});

const innerElement2 = document.querySelector(".in.enterleave");
let innerCount2 = 0;
innerElement2.addEventListener("mouseenter", () => {
  const pElements = innerElement2.querySelectorAll("p");
  if (pElements.length > 0) {
    pElements[0].innerText = `Inner Box Over: ${outerCount2++}`;
  }
});
