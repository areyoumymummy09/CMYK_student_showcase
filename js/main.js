(() => {
  console.log("Javascript Linked!");
  
  
  
  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  
  //Scroll for sequence
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.to("#industry_night_section", {
    scrollTrigger: {
      trigger: "#hero_desc_box",
      start: "top 60%",
      end: "bottom top",
      scrub: true,
      pin: true,
      pinSpacing: false, // Prevent extra space beneath the pinned element
    },
  });
  
  gsap.to("#next_section", {
    scrollTrigger: {
      trigger: "#industry_night_promo_video_desc",
      start: "top bottom", // Ensure the following section starts scrolling when its top reaches the bottom of the viewport
      end: "center top", // Ends when the top of the next section reaches the top of the viewport
      scrub: true,
    },
  });
  gsap.fromTo(
    "#industry_night_promo_video_desc h2",
    { opacity: 0 },
    {
      opacity: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#industry_night_promo_video_desc h2",
        start: "top 90%",
        end: "bottom 30%",
        scrub: true,
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
        trigger: "#industry_night_promo_video_desc p",
        start: "top 90%",
        end: "top 65%",
        scrub: true,
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
      start: "top center",
      end: "bottom 35%",
      scrub: true,
      pin: true,
    },
  });
  
  //  Animate the h2 and p simultaneously
  timeline_1
    .fromTo(
      "#cooperation_title h2",
      { opacity: 0, x: 0, y: 150 },
      { opacity: 1, y: -150, ease: "power1.inOut" }
    )
    .fromTo(
      "#cooperation_title p",
      { opacity: 0, x: 0, y: 0 },
      { opacity: 1, x: 0, y: 0, ease: "power1.inOut" },
      "<" // "<" means start this animation at the same time as the previous one
    );
  
  
  
    // Disable finalist and honorable animations on screens <= 580px
  
    // Clear any existing ScrollTriggers to avoid duplicating animations
    
  
    // Check if the screen width is larger than 580px
    console.log("width: " + window.innerWidth);
    const finalists = document.querySelectorAll(".finalist");
    const honorable = document.querySelectorAll(".honorable");
    
    // Only trigger the scroll animations if the window width is greater than 580px
    if (window.innerWidth > 800) {
      // Scroll sequence for finalist
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ ease: "none", duration: 2 });
    
      // Scroll animation for each finalist team
      gsap.to(finalists, {
        xPercent: -100 * (finalists.length - 1), // Move horizontally by 100% for each finalist
        ease: "none",
        scrollTrigger: {
          trigger: "#finalist_container",
          pin: true, // Pin the finalist container while scrolling
          scrub: 1, // Smooth scrolling
          snap: 1 / (finalists.length - 1), // Snap to each finalist
          end: () => "+=" + document.querySelector("#finalist_container").offsetWidth, // Unpin after the last finalist
        },
      });
    
      // Scroll animation for each honorable team
      gsap.to(honorable, {
        xPercent: -100 * (honorable.length - 1), // Move horizontally by 100% for each honorable
        ease: "none",
        scrollTrigger: {
          trigger: "#honorable_section",
          pin: true, // Pin the honorable container while scrolling
          scrub: 1, // Smooth scrolling
          snap: 1 / (honorable.length - 1), // Snap to each honorable
          end: () => "+=" + document.querySelector("#honorable_section").offsetWidth, // Unpin after the last honorable
        },
      });
    }
    
  
  
  gsap.registerPlugin(ScrollTrigger);
  
  // Scroll the student list horizontally
  gsap.to("#student_list", {
    scrollTrigger: {
      trigger: "#search_portfolio",
      start: "top top", // Start scrolling when the section hits the top
      end: "+=0", // Continue scrolling for a specific distance
      scrub: true, // Smooth scroll
      pin: false, // Do not pin the list itself, just scroll it
      markers: true // For debugging, remove if not needed
    },
    x: -1000 // Adjust this value based on how far you want the list to scroll
  });
  
  
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
  
  })();
  
  