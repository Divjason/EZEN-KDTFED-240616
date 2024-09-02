anime({
  targets: "li",
  translateX: 250,
  easing: "linear",
  loop: true,
  direction: "alternate",
  // delay: (el, i) => {
  //   return i * 100;
  // },
  // endDelay: (el, i) => {
  //   return i * 100;
  // },

  delay: anime.stagger(100),
  endDelay: anime.stagger(100),
});
