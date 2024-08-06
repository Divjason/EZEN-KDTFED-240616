const userId = document.querySelector("#userId");

userId.addEventListener("focus", function () {
  this.style.backgroundColor = "pink";
});

userId.addEventListener("blur", function () {
  this.style.backgroundColor = "transparent";
});
