const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".modal-gnb").classList.toggle("active");
});
