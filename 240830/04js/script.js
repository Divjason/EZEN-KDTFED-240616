const coverWrap = document.querySelector(".coverWrap");
const contWrap = document.querySelector(".contWrap");
const progressBar = document.querySelector(".bar");
const header = document.querySelector("header");
const coverTitle = document.querySelector(".coverTitle");
const overlay = document.querySelector(".overlay");

const coverHeight = window.innerHeight;

coverWrap.style.height = `${coverHeight}px`;
contWrap.style.marginTop = `${coverHeight}px`;

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight;

  const per = percent(scrollNum, documentHeight);
  progressBar.style.width = `${per}%`;

  if (scrollNum >= coverHeight) header.classList.add("fixed");
  else {
    header.classList.remove("fixed");
    // coverTitle.style.top = `${-scrollNum / 5}px`;
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 2}px`;
    overlay.style.background = `rgba(0, 0, 0, ${0.4 + scrollNum / 1000})`;
  }
});
