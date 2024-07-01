const content =
  "Hi!✋ I'm David, \n Front-End Developer. \n Welcome to My World :D";

const text = document.querySelector(".text");
const cursor = document.querySelector(".blink");

let i = 0;

const typing = () => {
  // let txt = content[i++];
  // text.innerHTML += txt === "\n" ? "<br/>" : txt;

  //   if (i > content.length) {
  //     text.textContent = "";
  //     // i = 0;
  //   }
  // };

  // setInterval(typing, 250);

  if (i < content.length) {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    setTimeout(typing, 250);
  } else {
    cursor.style.animation = "none";
    cursor.style.display = "none";
  }
};

typing();
