// const overout = document.querySelectorAll("div.out.overout");
// let i = 0;

// overout.forEach((item, index) => {
//   item.addEventListener("mouseover", function () {
//     const pTags = item.querySelectorAll("> p");
//     pTags[0].innerText = "mouseover";
//     pTags[1].innerText = ++i;
//   });
//   item.addEventListener("mouseout", function () {
//     const pTags = item.querySelectorAll("> p");
//     pTags[0].innerText = "mouseout";
//   });
// });

// OverOut 이벤트 처리
const overoutOuter = document.querySelector(".overout > p:last-of-type");
const overoutInner = document.querySelector(".overout .in > p:last-of-type");

let overoutOuterCount = 0;
let overoutInnerCount = 0;

document
  .querySelector(".overout")
  .addEventListener("mouseover", function (event) {
    if (event.target === this) {
      overoutOuterCount++;
      overoutOuter.textContent = overoutOuterCount;
    }
  });

document
  .querySelector(".overout")
  .addEventListener("mouseout", function (event) {
    if (event.target === this) {
      overoutOuterCount++;
      overoutOuter.textContent = overoutOuterCount;
    }
  });

document
  .querySelector(".overout .in")
  .addEventListener("mouseover", function (event) {
    if (event.target === this) {
      overoutInnerCount++;
      overoutInner.textContent = overoutInnerCount;
    }
  });

document
  .querySelector(".overout .in")
  .addEventListener("mouseout", function (event) {
    if (event.target === this) {
      overoutInnerCount++;
      overoutInner.textContent = overoutInnerCount;
    }
  });
