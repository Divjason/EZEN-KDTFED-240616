// Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  let scrollY = window.scrollY;
  if (scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Trigger
const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", function () {
  const gnb = document.querySelector(".gnb");
  const menus = document.querySelectorAll(".menu a");

  this.classList.toggle("active");
  gnb.classList.toggle("active");

  menus.forEach((menu) => {
    menu.addEventListener("click", () => {
      trigger.classList.remove("active");
      gnb.classList.remove("active");
    });
  });
});

// ScrollTo
$(".menu a").click(function () {
  $.scrollTo(this.hash || 0, 900);
});

// Slick Slider : History
$(".history-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// Slick Slider : Project
$(".project-photo").slick({
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
});
