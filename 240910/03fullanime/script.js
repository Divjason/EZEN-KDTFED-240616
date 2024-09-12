const sec0 = () => {
  anime({
    targets: ".svg1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 4000,
    easing: "easeInOutSine",
    loop: true,
    direction: "alternate",
  });
};

const sec1 = () => {
  const tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });

  tl.add({
    targets: ".g01",
    height: "80%",
  })
    .add({
      targets: ".g02",
      height: "70%",
    })
    .add({
      targets: ".g03",
      height: "84%",
    })
    .add({
      targets: ".g04",
      height: "63%",
    });
};

const sec1_reset = () => {
  anime({
    targets: ".gage_in",
    height: "0%",
  });
};

const sec2 = () => {
  const tl = anime
    .timeline({
      duration: 500,
      easing: "linear",
    })
    .add({
      targets: "#sec2 h1",
      opacity: 1,
      translateY: 50,
    })
    .add({
      targets: ".slider_wrap",
      opacity: 1,
      translateY: 50,
    });
};

const sec3 = () => {
  const d0 =
    "M453 100C283.5 11.5 184 0.499989 0.5 0.5V772H1921V63C1753.5 144 1381.5 288 1146 288C825 288 726.67 242.89 453 100Z";
  const d1 =
    "M570 10C308.5 -26.5 135 62 0.5 95V730H1921V95C1753.5 176 1579.5 209 1344 209C1028.11 209 875.763 52.6782 570 10Z";
  const d2 =
    "M585.5 276C367.959 243.273 245 160.5 0.5 20V729H1921V20C1693 -24 1501 6.78688 1312 147.287C1070.85 326.558 758.5 302.027 585.5 276Z";

  anime({
    targets: ".sec3_svg path",
    d: [{ value: d0 }, { value: d1 }, { value: d2 }],
    fill: [{ value: "#667eea" }, { value: "#764ba2" }, { value: "#66a6ff" }],
    duration: 3000,
    easing: "easeInOutQuart",
    loop: true,
    direction: "alternate",
  });

  anime({
    targets: "#sec3 h1",
    translateX: 40,
    easing: "easeOutSine",
  });

  anime({
    targets: "#sec3 h1 span",
    delay: anime.stagger(100),
    opacity: 1,
    easing: "easeOutSine",
  });
};

const staggerWrap = document.querySelector("#sec4 .img_wrap");
const grid = [20, 20];
const col = grid[0];
const row = grid[1];

const allElem = col * row;

for (let i = 0; i < allElem; i++) {
  const div = document.createElement("div");
  div.className = "tail";
  staggerWrap.appendChild(div);
}

const sec4 = () => {
  const stageAni = anime.timeline({
    targets: ".tail",
    easing: "easeInBack",
    delay: anime.stagger(10, { from: "last" }),
    duration: 2000,
    endDelay: 1000,
    loop: false,
    autoplay: false,
  });

  stageAni
    .add({
      targets: "#sec4 h1 img",
      opacity: 0,
      duration: 500,
    })
    .add({
      translateX: () => {
        return anime.random(-500, 500);
      },
      translateY: () => {
        return anime.random(-500, 500);
      },
      delay: anime.stagger(200, { grid: grid, from: "last" }),
      background: "#fff",
      borderRadius: "50%",
      scale: 0.2,
    })
    .add({
      targets: ".img_wrap",
      rotate: 360,
      easing: "linear",
      duration: 4000,
      scale: 0.5,
    })
    .add({
      targets: ".img_wrap",
      duration: 1000,
      scale: 1,
    })
    .add({
      translateX: 0,
      translateY: 0,
      delay: anime.stagger(100, { grid: grid, from: "center" }),
      duration: 3000,
      scale: 0.8,
      background: "#2af598",
    })
    .add({
      scale: 0.5,
      rotate: 60,
      duration: 500,
      borderRadius: "0%",
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      scale: 0.8,
      rotate: -60,
      duration: 500,
      borderRadius: "50%",
      background: "#fff",
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      scaleX: 0.1,
      scaleY: 1,
      rotate: 120,
      duration: 500,
      borderRadius: "0%",
      background: "#2af598",
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      rotate: 0,
      duration: 500,
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      scaleX: 1,
      duration: 500,
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      scale: 1,
      background: "#009efd",
      duration: 800,
      delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
    .add({
      targets: "#sec4 h1 img",
      opacity: 1,
      duration: 500,
    });

  staggerWrap.addEventListener("click", () => {
    stageAni.play();
  });
};

sec4();

// fullpage.js
new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 0) sec0();
    if (new_elem.index === 1) sec1();
    if (old_elem.index === 1) sec1_reset();
    if (new_elem.index === 2) sec2();
    if (new_elem.index === 3) sec3();
  },
});

// nav event
const navBtn = document.querySelector("#nav_icon");
navBtn.addEventListener("click", () => {
  document.body.classList.toggle("nav_active");
});

// slide event
const bg = document.querySelector("#sec2");
const s_left = bg.querySelector(".slide_btn.left");
const s_right = bg.querySelector(".slide_btn.right");
const s_slider = bg.querySelectorAll(".sec2_slider li");
const s_icons = bg.querySelectorAll(".slide_icons li");

const s_reset = () => {
  s_slider.forEach((li, idx, arr) => {
    s_slider[idx].classList.remove("on");
    s_icons[idx].classList.remove("active");
  });
};

s_icons.forEach((li) => {
  li.addEventListener("click", (e) => {
    console.log(e);
    let target = Number(e.target.dataset.index);
    s_reset();
    for (let i = 0; i < s_icons.length; i++) {
      if (target === i) {
        s_slider[i].classList.add("on");
        s_icons[i].classList.add("active");
        bg.style.backgroundImage = `url("./img/sec2_bg_${i}.png")`;
      }
    }
  });
});

const next = () => {
  let crtSlide = bg.querySelector(".sec2_slider li.on");
  let i = crtSlide.dataset.index;
  s_reset();
  i++;
  if (i >= s_slider.length) i = 0;
  s_slider[i].classList.add("on");
  s_icons[i].classList.add("active");
  bg.style.backgroundImage = `url("./img/sec2_bg_${i}.png")`;
};

s_right.addEventListener("click", next);

const prev = () => {
  let crtSlide = bg.querySelector(".sec2_slider li.on");
  let i = crtSlide.dataset.index;
  s_reset();
  i--;
  if (i < 0) i = s_slider.length - 1;
  s_slider[i].classList.add("on");
  s_icons[i].classList.add("active");
  bg.style.backgroundImage = `url("./img/sec2_bg_${i}.png")`;
};

s_left.addEventListener("click", prev);
