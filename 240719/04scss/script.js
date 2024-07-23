const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #fff; color: #000";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuJukebox.style = "background: #55b2e4; color: #fff";
};
const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "background: #55b2e4; color: #fff";
  menuGame.style = "background: #fff; color: #000";
  menuJukebox.style = "background: #55b2e4; color: #fff";
};
const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = "background: #55b2e4; color: #fff";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuJukebox.style = "background: #fff; color: #000";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);
