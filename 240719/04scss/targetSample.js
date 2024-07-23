const button = document.querySelector("button");

const buttonAction = (e) => {
  console.log(e);
  console.log(e.target);
  console.log(e.currentTarget);
};

button.addEventListener("click", buttonAction);
