console.log("Javascript Linked!");

//Plyr video player//
const player = new Plyr("video");
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

function adjustNavBar() {
  if (window.innerWidth > 700) {
    navBar.style.transform = "translateX(0)";
  } else {
    navBar.style.transform = "translateX(-100vw)";
  }
  burgerMenu.textContent = "Menu";
}

video.addEventListener("click", playNpause);
window.addEventListener("load", updateVideoPoster);
window.addEventListener("resize", updateVideoPoster);
window.addEventListener("scroll", closeBurger);
window.addEventListener("resize", adjustNavBar);
adjustNavBar();
burgerMenu.addEventListener("click", openBurger);

//portfoliio//

const searchInput = document.getElementById("search-input");
const portfolioList = document.getElementById("portfolio-list");
const imageGallery = document.getElementById("image-gallery");

// Add event listener to the search input
searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase();

  const portfolios = portfolioList.querySelectorAll("p");

  let imageUpdated = false;

  portfolios.forEach((portfolio) => {
    const name = portfolio.dataset.name.toLowerCase();

    // Check if the portfolio name contains the search input
    if (name.includes(searchValue)) {
      portfolio.style.display = "";
      if (!imageUpdated) {
        const imageUrl = portfolio.dataset.image;
        imageGallery.innerHTML = `<img src="${imageUrl}" alt="${portfolio.dataset.name}" />`;
        imageUpdated = true;
      }
    } else {
      portfolio.style.display = "none";
    }
  });

  // If no match is found, reset the image gallery
  if (!imageUpdated) {
    imageGallery.innerHTML = `<img src="images/image-gallery-2.png" alt="No matching portfolio" />`;
  }
});

// Student Portfolio name that shows the image accordingly

const portfolioItems = document.querySelectorAll(".portfolio-list p");

// Select the image gallery where the image will be displayed
const dataImage = document.getElementById("data-image");

// Add a click event listener to each portfolio item
portfolioItems.forEach((item) => {
  item.addEventListener("click", function () {
    const imageUrl = item.getAttribute("data-image");

    imageGallery.innerHTML = `<img src="${imageUrl}" alt="${item.textContent}" />`;
  });
});
