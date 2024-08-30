const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const subpageImage = document.querySelector(".subPage .parallaxImage");

const totalNum = imageAll.length;
let scrollNum = 0;
let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;

  imageAll.forEach((image, index) => {
    if (index < 4) {
      image.style.transform = `translateY(${
        -scrollNum / (2 * (totalNum - index))
      }px)`;
    }
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;

  imageAll[4].style.transform = `scale(1.1) translate(${-targetX / 50}px, ${
    -scrollNum / (2 * (totalNum - 4))
  }px)`;
  imageAll[5].style.transform = `scale(1.1) translate(${-targetX / 100}px, ${
    -scrollNum / (2 * (totalNum - 5))
  }px)`;
  subpageImage.style.transform = `scale(1.1) translateX(${-targetX / 20}px)`;

  window.requestAnimationFrame(loop);
};

loop();
