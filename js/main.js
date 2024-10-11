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

requestAnimationFrame(raf);

//Scroll for sequence

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".industry-night-video-text",
    start: "top 50%",
    end: "bottom 90%",
    scrub: true,
  },
});

tl.to(".industry-night-video-text", {
  y: 100,
});

// console.log("roll sequence");
// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(
//   ".industry-night-video-text h2, .industry-night-video-text p"
// );
// //create a sequence that moves the panels in from different directions
// // gsap.to(".industry-night-video-text", {
// //   y: "-100%",
// //   ease: "none",
// //   scrollTrigger: {
// //     trigger: ".main-hero-text",
// //     start: "top center",
// //     end: () => "+=" + document.querySelector(".main-hero-text").offsetHeight,
// //     scrub: 1,
// //   },
// // });

// // Animate the h2 element
// gsap.to(".industry-night-video-text h2", {
//   yPercent: -500 * (sections.length - 1), // Adjust based on number of sections
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".industry-night-video-text h2", // Trigger on the h2
//     start: "top 50% ", // Start the animation when h2 is in center
//     end: () =>
//       "+=" +
//       document.querySelector(".industry-night-video-text").offsetHeight / 1,
//     scrub: 1, // Smooth scroll tied to scrub
//     markers: true,
//   },
// });

gsap.fromTo(
  ".industry-night-video-text h2",
  { opacity: 0 },
  {
    opacity: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".industry-night-video-text h2", // Trigger when h2 elements come into view
      start: "top 90%", // Start the animation earlier
      end: "bottom 30%", // Control how long the h2 animation lasts
      scrub: true, // Smooth scroll
      markers: true, // For debugging purposes (you can remove this later)
    },
  }
);
gsap.fromTo(
  ".industry-night-video-text p",
  { opacity: 0 },
  {
    opacity: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".industry-night-video-text p", // Trigger when p elements come into view
      start: "top 90%", // Start the animation when p is 90% down from the top of the viewport (starts earlier)
      end: "bottom 30%", // Control how long the p animation lasts
      scrub: true, // Smooth scroll
      markers: true, // For debugging purposes, you can remove this later
    },
  }
);

// Adjust the second p animation to also start earlier
gsap.fromTo(
  ".industry-night-video-text p",
  { opacity: 0 },
  {
    opacity: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".industry-night-video-text p", // Trigger on the p elements
      start: "top 90%", // Adjust start to earlier, closer to the top of the viewport
      end: () =>
        "+=" +
        document.querySelector(".industry-night-video-text").offsetHeight,
      scrub: true, // Smooth scroll
    },
  }
);

// gsap.to(sections, {
//   yPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".main-hero-text",
//     start: "top ",
//     markers: true,
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 2),
//     end: () => "-=" + document.querySelector(".main-hero-text").offsetHeight,
//   },
// });

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

//smaller image
gsap.fromTo(
  ".industry-night-image-container",
  { width: "100%" },
  {
    width: "90%",
    scrollTrigger: {
      trigger: ".industry-night-image-container",
      start: "top 80%",
      end: "bottom 40%",
      scrub: true,
    },
  }
);

//scroll for foundation-content
gsap.registerPlugin(ScrollTrigger);

//Animating "IN COOPERATION WITH" and "OBJECTIVE" separately
// Create a timeline to synchronize the animations
const timeline_1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#cooperation h2", // Use the same trigger for both
    start: "-=400",
    end: "bottom 25%",
    scrub: true,
    pin: true,
    pinSpacing: false,
    markers: true, // Remove this if you don't want to see markers
  },
});

// Animate the h2 and h3 simultaneously
timeline_1
  .fromTo(
    "#cooperation h2",
    { opacity: 0, x: 0, y: 50 }, // Start from bottom-left
    { opacity: 1, x: 0, y: -250, ease: "power1.inOut" } // Move to top-left
  )
  .fromTo(
    "#objective h3",
    { opacity: 0, x: 0, y: 0 }, // Start from bottom-left
    { opacity: 1, x: 0, y: 0, ease: "power1.inOut" }, // Move to top-left
    "<" // "<" means start this animation at the same time as the previous one
  );

// //split text

// gsap.registerPlugin(SplitText);
// var yourElement = document.getElementById("foundation-content");

// // Initialize SplitText
// var splitText = new SplitText(yourElement, { type: "words,chars" });
// var chars = splitText.chars; // Get the array of all divs wrapping each character

// // Set perspective for the animation
// gsap.set(".subject-title-container", { perspective: 400 });

// // Initialize a timeline
// var timeline = gsap.timeline();

// // Create the animation
// timeline.from(chars, {
//   duration: 0.8,
//   opacity: 0,
//   scale: 0,
//   y: 80,
//   rotationX: 180,
//   transformOrigin: "0% 50% -50",
//   ease: "back",
//   stagger: 0.05, // Adjust stagger for a smoother effect
// });

//scroll sequence for finalist
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

const timeline_2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".finalist-display", // The trigger element
    start: "top top", // Start animation when the top of .finalist-display hits the top of the viewport
    end: "+=2000", // The end point for the scrolling (adjust this for the desired scroll length)
    scrub: true, // Smooth scrubbing based on the scroll
    pin: true, // Pin the section during the scroll
    anticipatePin: 1, // Optional, smoothens the pin effect
    markers: true, // Markers for debugging (can be removed)
  },
});
timeline_2.to(".finalist-display", {
  xPercent: -100, // Scroll horizontally, moving all containers to the left
  ease: "none",
});

//gallery
gsap.registerPlugin(ScrollTrigger);

// Create a timeline for the top row animation
// Timeline for the top row animation
const timelineTopRow = gsap.timeline({
  scrollTrigger: {
    trigger: "#gallery",
    start: "top 60%",
    end: "top 20%",
    scrub: true,
  },
});

// Animate the top row from the left
timelineTopRow.from(".top-row li", {
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

// Timeline for the down row animation
const timelineDownRow = gsap.timeline({
  scrollTrigger: {
    trigger: "#gallery",
    start: "top 60%",
    end: "top 5%",
    scrub: true,
  },
});

// Animate the down row from the right
timelineDownRow.from(".down-row li", {
  x: 200,
  opacity: 0,
  duration: 4,
  stagger: 0.3,
});
