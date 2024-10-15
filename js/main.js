(() => {
  console.log("Javascript Linked!");

  // Get references to the video and the description div
  const indusstryvideo = document.getElementById("video_container");
  const promoDesc = document.getElementById("industry_night_promo_video_desc");

  // Add click event listener to the video
  indusstryvideo.addEventListener("click", () => {
    // Set opacity of promo description to 0
    promoDesc.style.opacity = 0;
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  //Scroll for sequence
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#industry_night_section", {
    scrollTrigger: {
      trigger: "#hero_section",
      start: "top",
      end: "bottom top",
      scrub: true,
      pin: true,
      pinSpacing: false, // Prevent extra space beneath the pinned element
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
  if (window.innerWidth > 580) {
    const timeline_1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#cooperation_title h2",
        start: "top center",
        end: "bottom 35%",
        scrub: true,
        pin: true,
      },
    });

    // Animate the h2 and p simultaneously
    timeline_1
      .fromTo(
        "#cooperation_title h2",
        { opacity: 0, x: 0, y: 150 },
        { opacity: 1, y: -220, ease: "power1.inOut" }
      )
      .fromTo(
        "#cooperation_title p",
        { opacity: 0, x: 0, y: 0 },
        { opacity: 1, x: 0, y: 0, ease: "power1.inOut" },
        "<" // start at the same time as the previous one
      );
  }

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

    // Scroll animation for each finalist team
    gsap.to(finalists, {
      xPercent: -100 * (finalists.length - 1), // Move horizontally by 100% for each finalist
      ease: "none",
      scrollTrigger: {
        trigger: "#finalist_container",
        pin: true, // Pin the finalist container while scrolling
        scrub: 1, // Smooth scrolling
        snap: 1 / (finalists.length - 1), // Snap to each finalist
        end: () =>
          "+=" + document.querySelector("#finalist_container").offsetWidth, // Unpin after the last finalist
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
        end: () =>
          "+=" + document.querySelector("#honorable_section").offsetWidth, // Unpin after the last honorable
      },
    });
  }

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
})();
