console.log("Javascript Linked!");

const videoBox = document.getElementById("IndVideoBox");
const video = document.getElementById("indVideo");
const burgerMenu = document.getElementById("menuMobile");
const navBar = document.querySelector("#navbar");

console.log(burgerMenu);

function playNpause() {
  if (video.paused) {
    video.play();
    video.setAttribute("controls", "controls");
  } else {
    video.pause();
  }
}

function updateVideoPoster() {
  const videoElement = document.getElementById("indVideo");
  if (window.innerWidth <= 390) {
    videoElement.poster = "images/Group538.png";
  } else {
    videoElement.poster = "images/video_placeholder.png";
  }
}

function openBurger() {
  if (navBar.style.transform === "translateX(-100vw)") {
    navBar.style.transform = "translateX(0)";
    burgerMenu.textContent = "Close";
  } else {
    navBar.style.transform = "translateX(-100vw)";
    burgerMenu.textContent = "Menu";
  }
}

function closeBurger() {
  navBar.style.transform = "translateX(-100vw)";
  burgerMenu.textContent = "Menu";
}

video.addEventListener("click", playNpause);
window.addEventListener("load", updateVideoPoster);
window.addEventListener("resize", updateVideoPoster);
window.addEventListener("scroll", closeBurger);
burgerMenu.addEventListener("click", openBurger);
