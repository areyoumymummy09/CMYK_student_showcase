console.log("Javascript Linked!");

//smooth scroll

// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
//Scroll for sequence

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#industry_night_container",
    start: "top 50%",
    end: "bottom 90%",
    scrub: true,
    onEnter: () => console.log("Entered scroll trigger area"), // Log when entering the area
    onLeave: () => console.log("Left scroll trigger area"),
  },
});
console.log("GSAP Timeline created");

tl.to("#industry_night_promo_video", {
  y: 100,
});

gsap.fromTo(
  "#industry_night_promo_video_desc h2",
  { opacity: 0 },
  {
    opacity: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "#industry_night_promo_video_desc h2", // Trigger when h2 elements come into view
      start: "top 90%", // Start the animation earlier
      end: "bottom 30%", // Control how long the h2 animation lasts
      scrub: true, // Smooth scroll
    },
  }
);
gsap.fromTo(
  "#industry_night_promo_video_desc p",
  { opacity: 0 },
  {
    opacity: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "#industry_night_promo_video_desc p", // Trigger when p elements come into view
      start: "top 90%", // Start the animation when p is 90% down from the top of the viewport (starts earlier)
      end: "top 65%", // Control how long the p animation lasts
      scrub: true, // Smooth scroll
    },
  }
);

//smaller image
gsap.fromTo(
  "#industry_night_desc-img",
  {
    width: "100%",
    margin: "0 auto",
  },
  {
    width: "90%",
    transform: "translateX(-5%)",
    scrollTrigger: {
      trigger: "#industry_night_desc-img",
      start: "top 60%",
      end: "bottom 40%",
      scrub: true,
    },
  }
);

//scroll for foundation-content
gsap.registerPlugin(ScrollTrigger);

// Create a timeline to synchronize the animations
const timeline_1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#cooperation_title h2",
    start: "-=400",
    end: "bottom 25%",
    scrub: true,
    pin: true,
    pinSpacing: false,
    markers: true,
  },
});

// Animate the h2 and p simultaneously
timeline_1
  .fromTo(
    "#cooperation_title h2",
    { opacity: 0, x: 0, y: 50 },
    { opacity: 1, y: -280, ease: "power1.inOut" }
  )
  .fromTo(
    "#cooperation_title p",
    { opacity: 0, x: 0, y: 0 },
    { opacity: 1, x: 0, y: 0, ease: "power1.inOut" },
    "<" // "<" means start this animation at the same time as the previous one
  );

//scroll sequence for finalist
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

// Scroll animation for each finalist team
const timeline_2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#finalist_container",
    start: "top top",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true,
  },
});

// Scroll each finalist horizontally as user scrolls
timeline_2.to("#finalist_team_1", { xPercent: -100, ease: "none" });
timeline_2.to("#finalist_team_2", { xPercent: -100, ease: "none" }, "<");
timeline_2.to("#finalist_team_3", { xPercent: -100, ease: "none" }, "<");

// Move the original background image inside each container
timeline_2.to(
  ".bg_showcase .showcase_img",
  {
    xPercent: -100,
    ease: "none",
  },
  0
);

// Scroll animation for each honorable team
const timeline_3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#honorable_section",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true,
  },
});

// Scroll each honorable team horizontally
timeline_3.to("#honorable_team_1", { xPercent: -100, ease: "none" });
timeline_3.to("#honorable_team_2", { xPercent: -100, ease: "none" }, "<");
timeline_3.to("#honorable_team_3", { xPercent: -100, ease: "none" }, "<");
timeline_3.to("#honorable_team_4", { xPercent: -100, ease: "none" }, "<");
timeline_3.to("#honorable_team_6", { xPercent: -100, ease: "none" }, "<");

//gallery
gsap.registerPlugin(ScrollTrigger);

// Create a timeline for the top row animation
// Timeline for the top row animation
const timelineTopRow = gsap.timeline({
  scrollTrigger: {
    trigger: "#bts_section",
    start: "top 60%",
    end: "top 20%",
    scrub: true,
  },
});

// Animate the top row from the left
timelineTopRow.from("#bts_gallery-a li", {
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

// Timeline for the down row animation
const timelineDownRow = gsap.timeline({
  scrollTrigger: {
    trigger: "#bts_section",
    start: "top 60%",
    end: "top 5%",
    scrub: true,
  },
});

// Animate the down row from the right
timelineDownRow.from("#bts_gallery-b li", {
  x: 200,
  opacity: 0,
  duration: 4,
  stagger: 0.3,
});

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
  if (window.innerWidth <= 432) {
    navBar.style.transform = "translateX(-100vw)";
    burgerMenu.textContent = "Menu";
  }
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

const searchInput = document.getElementById("searchPortfolio");
const portfolioList = document.getElementById("portfolio-list1");
const imageGallery = document.getElementById("image-gallery1");

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

//enlarge video
gsap.fromTo(
  ".player",
  { width: "80%" },
  {
    width: "100%",
    scrollTrigger: {
      trigger: ".player",
      start: "top 80%",
      end: "bottom 40%",
      scrub: true,
    },
  }
);
