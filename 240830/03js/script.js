const progressBar = document.querySelector(".bar");
const depthWrap = document.querySelector(".depthWrap span");
const submarine = document.querySelector(".submarine");
const octopus = document.querySelector(".octopus");

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight - window.innerHeight;

  const per = `${percent(scrollNum, documentHeight)}`;

  progressBar.style.width = `${per}%`;
  depthWrap.innerText = scrollNum;
  submarine.style.transform = `translateX(${per}%)`;
  octopus.style.transform = `translateY(${-per / 2}%)`;
});
