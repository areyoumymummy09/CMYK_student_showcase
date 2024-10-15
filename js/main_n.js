/* Industry Night JS main outline 📒

* General Variable
- Ticket Lightbox Controller

* General Function

* Plyr Controller 
* Screen Tracking Events
* Hero Section; Variable, Function, and Arrays
* Industry Night Video Controller 
* About IDP Section; Variabl, Functions, and Arrays

* General Event Listener
* Nominee Section; Variable, Functions, and Arrays
- Carousel
* Portfolio Section; Variable, Functions, and Arrays
* Testimonial Section Variables, Function, and Arrays
* Devs Section; Variables, Function, and Arrays


!Graveyard

*/

(() => {
  console.log("Javascript Linked!");

  // * General Variables
  const mobileMenu = document.querySelector("#burger_ic");
  const navBar = document.querySelector("#navbar > nav > ul");
  const studentList = document.querySelector("#student_list");
  const closeTicket = document.querySelector("#close_ticket_box");
  const cta = document.querySelectorAll(".cta");

  // Ticket Lightbox Controller
  closeTicket.addEventListener("click", () => {
    document.querySelector("#ticket_box").classList.add("hidden");
  });

  cta.forEach((e) => {
    e.addEventListener("click", function () {
      console.log(this);
      document.querySelector("#ticket_box").classList.remove("hidden");
    });
  });

  // * General Functions
  function openBurger() {
    if (navBar.style.transform === "translateX(-100vw)") {
      navBar.style.transform = "translateX(0)";
      mobileMenu.textContent = "Close";
    } else {
      navBar.style.transform = "translateX(-100vw)";
      mobileMenu.textContent = "Menu";
    }
  }

  function closeBurger() {
    if (window.innerWidth <= 580) {
      navBar.style.transform = "translateX(-100vw)";
      mobileMenu.textContent = "Menu";
      document.querySelector(
        "#cooperation_text p:first-of-type"
      ).innerHTML = `Transforming Communities, <br> Enhancing Lives`;
      document.querySelector(
        "#cooperation_text h3"
      ).innerHTML = `Brother<br> in arms`;
    }
  }

  function adjustNavBar() {
    if (window.innerWidth > 768) {
      navBar.style.transform = "translateX(0)";
      navBar.style.zIndex = "0";
    } else {
      navBar.style.transform = "translateX(-100vw)";
      navBar.style.zIndex = "9";
      mobileMenu.textContent = "Menu";
    }
  }

  // ?When Screen turn to Table size, these will be functioned
  function changeETC() {
    if (window.innerWidth <= 580) {
      document.querySelector(
        "#cooperation_text p:first-of-type"
      ).innerHTML = `Transforming Communities, <br> Enhancing Lives`;
      document.querySelector(
        "#cooperation_text h3"
      ).innerHTML = `Brother<br> in arms`;
    }
  }

  // * Plyr Controller
  const player = new Plyr("video", {});

  // *  Hero Section; Variable, Function, and Arrays
  const textHero = [
    `<p><b>Join us Industry Night 2025</b><br />April 18<sup>th</sup> Fanshawe, London, CA</p>`,
    `<p>Interactive Media Design &amp; <br />User Experience Design Program<br />School of Media &amp; Design Arts</p>`,
  ];

  let intervalID;
  let isTextChangingActive = false;
  function startTextChange() {
    let index = 1;
    if (window.innerWidth <= 768 && !isTextChangingActive) {
      isTextChangingActive = true;
      intervalID = setInterval(function () {
        const textChange = document.querySelector(
          "#hero_desc_box p:first-of-type"
        );

        textChange.classList.add("textChanging");
        textChange.innerHTML = textHero[index];
        index++;
        if (index === textHero.length) {
          index = 0;
        }
      }, 3000);
    }
  }

  function stopTextChange() {
    if (isTextChangingActive) {
      clearInterval(intervalID);
      isTextChangingActive = false;
      const textChange = document.querySelector(
        "#hero_desc_box p:first-of-type"
      );
      textChange.innerHTML = textHero[0];
    }
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      stopTextChange();
    } else {
      startTextChange();
    }
  });

  // * Industry Night Video controller
  const industryVid = document.querySelector("#industryVideo");

  industryVid.addEventListener("play", () => {
    industryVid.play();

    document
      .querySelector("#industry_night_promo_video_desc h2")
      .classList.add("hide");
    document
      .querySelector("#industry_night_promo_video_desc h2")
      .classList.remove("show");

    document
      .querySelector("#industry_night_promo_video_desc p")
      .classList.add("hide");
    document
      .querySelector("#industry_night_promo_video_desc p")
      .classList.remove("show");

    playVid.classList.add("hide");
    playVid.classList.remove("show");

    industryVid.style.position = "absolute";
  });

  industryVid.addEventListener("ended", () => {
    document
      .querySelector("#industry_night_promo_video_desc h2")
      .classList.remove("hide");
    document
      .querySelector("#industry_night_promo_video_desc h2")
      .classList.add("show");

    document
      .querySelector("#industry_night_promo_video_desc p")
      .classList.remove("hide");
    document
      .querySelector("#industry_night_promo_video_desc p")
      .classList.add("show");

    playVid.classList.remove("hide");
    playVid.classList.add("show");

    industryVid.style.position = "unset";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 580) {
      const industryVid = document.querySelector("#industryVideo");
      industryVid.src = "video/IndustryNight-Vertical.mp4";
      console.log("Hey!");
    }
  });

  // * About IDP Section; Variables, Functions, and Arrays
  const idpCards = document.querySelectorAll(".idp_card");
  const lightbox = document.querySelector("#idp_text_lightbox");

  idpCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      lightbox.style.opacity = 0;

      setTimeout(() => {
        const idpText = this.querySelector(".idp_text");
        const headingText = idpText.getAttribute("data-hl");
        const paragraphText = idpText.getAttribute("data-text");
        lightbox.innerHTML = "";
        const h3 = document.createElement("h3");
        h3.textContent = headingText;
        const p = document.createElement("p");
        p.textContent = paragraphText;
        lightbox.appendChild(h3);
        lightbox.appendChild(p);
        lightbox.classList.add("visible");
        lightbox.style.opacity = 1;
      }, 200);
    });

    card.addEventListener("mouseleave", function () {
      lightbox.classList.remove("visible");
    });
  });

  // * General Event Listener
  mobileMenu.addEventListener("click", openBurger);
  window.addEventListener("scroll", closeBurger);
  window.addEventListener("resize", adjustNavBar);
  window.addEventListener("resize", changeETC);
  adjustNavBar();

  // Carousal Session
  // Finalist Carousel
  let currentSlide = 0;
  const slides = document.querySelectorAll(".finalist");
  const dots = document.querySelectorAll("#pagination_finalist .dot");
  const totalSlides = slides.length;
  let startX = 0;
  let isDragging = false;

  function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    const offset = -slideWidth * index;
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${offset}px)`;
    });

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  const carousel = document.getElementById("finalist_container");

  carousel.addEventListener("mousedown", (e) => {
    startX = e.pageX;
    isDragging = true;
  });
  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX;
    isDragging = true;
  });
  carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    let moveX = e.pageX - startX;
    if (moveX > 50) {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
      isDragging = false;
    } else if (moveX < -50) {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
      isDragging = false;
    }
  });
  carousel.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    let moveX = e.touches[0].pageX - startX;
    if (moveX > 50) {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
      isDragging = false;
    } else if (moveX < -50) {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
      isDragging = false;
    }
  });

  carousel.addEventListener("mouseup", () => (isDragging = false));
  carousel.addEventListener("touchend", () => (isDragging = false));
  showSlide(currentSlide);

  // Honorable Carousel
  let currentSlideH = 0;
  const slidesH = document.querySelectorAll(".honorable");
  const dotsH = document.querySelectorAll("#pagination_honorable .dot");
  const totalSlidesH = slidesH.length;
  let startXH = 0;
  let isDraggingH = false;

  function showSlideH(index) {
    const slideWidthH = slidesH[0].clientWidth;
    const containerWidth =
      document.getElementById("honorable_section").clientWidth;
    const offsetH = -slideWidthH * index + (containerWidth - slideWidthH) / 2;

    slidesH.forEach((slide) => {
      slide.style.transform = `translateX(${offsetH}px)`;
    });

    dotsH.forEach((dot) => dot.classList.remove("active"));
    dotsH[index].classList.add("active");
  }

  dotsH.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlideH = index;
      showSlideH(currentSlideH);
    });
  });

  const carouselH = document.getElementById("honorable_section");

  carouselH.addEventListener("mousedown", (e) => {
    startXH = e.pageX;
    isDraggingH = true;
  });
  carouselH.addEventListener("touchstart", (e) => {
    startXH = e.touches[0].pageX;
    isDraggingH = true;
  });
  carouselH.addEventListener("mousemove", (e) => {
    if (!isDraggingH) return;
    let moveXH = e.pageX - startXH;
    if (moveXH > 50) {
      currentSlideH = (currentSlideH - 1 + totalSlidesH) % totalSlidesH;
      showSlideH(currentSlideH);
      isDraggingH = false;
    } else if (moveXH < -50) {
      currentSlideH = (currentSlideH + 1) % totalSlidesH;
      showSlideH(currentSlideH);
      isDraggingH = false;
    }
  });
  carouselH.addEventListener("touchmove", (e) => {
    if (!isDraggingH) return;
    let moveXH = e.touches[0].pageX - startXH;
    if (moveXH > 50) {
      currentSlideH = (currentSlideH - 1 + totalSlidesH) % totalSlidesH;
      showSlideH(currentSlideH);
      isDraggingH = false;
    } else if (moveXH < -50) {
      currentSlideH = (currentSlideH + 1) % totalSlidesH;
      showSlideH(currentSlideH);
      isDraggingH = false;
    }
  });

  carouselH.addEventListener("mouseup", () => (isDraggingH = false));
  carouselH.addEventListener("touchend", () => (isDraggingH = false));

  showSlideH(currentSlideH);

  // * Portfolio Section; Variable, Functions, and Arrays
  const searchInput = document.querySelector("#search_portfolio");
  const studentPortrait = document.querySelector("#student_portrait");
  const portraitImg = document.querySelector("#portrait_img");
  const studentIllustrate = document.querySelector("#student_abstract_image");
  const illustrateImg = document.querySelector("#abstract_image");

  studentDetail = [
    {
      portrait: "images/student_1.webp",
      portfolio: "http://portolio.com/diego-rodriguez-ramos",
      illustrate: "images/i_student_1.jpg",
      firstName: "Diego",
      lastName: "Rodriguez-Ramos",
    },
    {
      portrait: "images/student_2.webp",
      portfolio: "http://portolio.com/kayla-cooper",
      illustrate: "images/i_student_2.jpg",
      firstName: "Kayla",
      lastName: "Cooper",
    },
    {
      portrait: "images/student_3.webp",
      portfolio: "http://portolio.com/ramona-lozon",
      illustrate: "images/i_student_3.jpg",
      firstName: "Ramona",
      lastName: "Lozon",
    },
    {
      portrait: "images/student_4.webp",
      portfolio: "http://portolio.com/qingdong-chen",
      illustrate: "images/i_student_4.jpg",
      firstName: "Qingdong",
      lastName: "Chen",
    },
    {
      portrait: "images/student_5.webp",
      portfolio: "http://portolio.com/taylor-khan",
      illustrate: "images/i_student_5.jpg",
      firstName: "Taylor",
      lastName: "Khan",
    },
    {
      portrait: "images/student_6.webp",
      portfolio: "http://portolio.com/cassidy-pelacek-boutilier",
      illustrate: "images/i_student_6.jpg",
      firstName: "Cassidy",
      lastName: "Pelacek-Boutilier",
    },
    {
      portrait: "images/student_7.webp",
      portfolio: "http://portolio.com/isaac-bilyea",
      illustrate: "images/i_student_7.jpg",
      firstName: "Isaac",
      lastName: "Bilyea",
    },
    {
      portrait: "images/student_8.webp",
      portfolio: "http://portolio.com/ezra-carriere",
      illustrate: "images/i_student_8.jpg",
      firstName: "Ezra",
      lastName: "Carriere",
    },
    {
      portrait: "images/student_9.webp",
      portfolio: "http://portolio.com/shauraya-salwan",
      illustrate: "images/i_student_9.jpg",
      firstName: "Shauraya",
      lastName: "Salwan",
    },
    {
      portrait: "images/student_10.webp",
      portfolio: "http://portolio.com/rebin-reji-vazhavilayil",
      illustrate: "images/i_student_10.jpg",
      firstName: "Rebin",
      lastName: "Reji Vazhavilayil",
    },
    {
      portrait: "images/student_11.webp",
      portfolio: "http://portolio.com/divij-saddul",
      illustrate: "images/i_student_11.jpg",
      firstName: "Divij",
      lastName: "Saddul",
    },
    {
      portrait: "images/student_12.webp",
      portfolio: "http://portolio.com/kyuri-park",
      illustrate: "images/i_student_12.jpg",
      firstName: "Kyuri",
      lastName: "Park",
    },
    {
      portrait: "images/student_13.webp",
      portfolio: "http://portolio.com/nikolai-meijer",
      illustrate: "images/i_student_13.jpg",
      firstName: "Nikolai",
      lastName: "Meijer",
    },
    {
      portrait: "images/student_14.webp",
      portfolio: "http://portolio.com/xaviere-hanbury",
      illustrate: "images/i_student_14.jpg",
      firstName: "Xaviere",
      lastName: "Hanbury",
    },
    {
      portrait: "images/student_15.webp",
      portfolio: "http://portolio.com/amari-buck",
      illustrate: "images/i_student_15.jpg",
      firstName: "Amari",
      lastName: "Buck",
    },
    {
      portrait: "images/student_16.webp",
      portfolio: "http://portolio.com/thaseekaran-sivaskaran",
      illustrate: "images/i_student_16.jpg",
      firstName: "Thaseekaran",
      lastName: "Sivaskaran",
    },
    {
      portrait: "images/student_17.webp",
      portfolio: "http://portolio.com/meet-amrutbhai-parmar",
      illustrate: "images/i_student_17.jpg",
      firstName: "Meet Amrutbhai",
      lastName: "Parmar",
    },
    {
      portrait: "images/student_18.webp",
      portfolio: "http://portolio.com/justin-rian-reyes",
      illustrate: "images/i_student_18.jpg",
      firstName: "Justin Rian",
      lastName: "Reyes",
    },
    {
      portrait: "images/student_19.webp",
      portfolio: "http://portolio.com/alisher-yantizhanov",
      illustrate: "images/i_student_19.jpg",
      firstName: "Alisher",
      lastName: "Yantizhanov",
    },
    {
      portrait: "images/student_20.webp",
      portfolio: "http://portolio.com/parvesh-thakur",
      illustrate: "images/i_student_20.jpg",
      firstName: "Parvesh",
      lastName: "Thakur",
    },
    {
      portrait: "images/student_21.webp",
      portfolio: "http://portolio.com/meghan-damen",
      illustrate: "images/i_student_21.jpg",
      firstName: "Meghan",
      lastName: "Damen",
    },
    {
      portrait: "images/student_22.webp",
      portfolio: "http://portolio.com/saif-amjad-omar-abu-sa'ad",
      illustrate: "images/i_student_22.jpg",
      firstName: "Saif",
      lastName: "Amjad Omar Abu-Sa'ad",
    },
    {
      portrait: "images/student_23.webp",
      portfolio: "http://portolio.com/bozhi-zhang",
      illustrate: "images/i_student_23.jpg",
      firstName: "Bozhi",
      lastName: "Zhang",
    },
    {
      portrait: "images/student_24.webp",
      portfolio: "http://portolio.com/qiao-yi-chu",
      illustrate: "images/i_student_24.jpg",
      firstName: "Qiao-Yi",
      lastName: "Chu",
    },
    {
      portrait: "images/student_25.webp",
      portfolio: "http://portolio.com/sashoye-maxwell",
      illustrate: "images/i_student_25.jpg",
      firstName: "Sashoye",
      lastName: "Maxwell",
    },
    {
      portrait: "images/student_26.webp",
      portfolio: "http://portolio.com/dina-bondarchuk",
      illustrate: "images/i_student_26.jpg",
      firstName: "Dina",
      lastName: "Bondarchuk",
    },
    {
      portrait: "images/student_27.webp",
      portfolio: "http://portolio.com/wisdom-utenwojo-okutepa",
      illustrate: "images/i_student_27.jpg",
      firstName: "Wisdom Utenwojo",
      lastName: "Okutepa",
    },
    {
      portrait: "images/student_28.webp",
      portfolio: "http://portolio.com/bernardo-jr-macapagal",
      illustrate: "images/i_student_28.jpg",
      firstName: "Bernardo Jr.",
      lastName: "Macapagal",
    },
    {
      portrait: "images/student_29.webp",
      portfolio: "http://portolio.com/ezekiel-john-celis",
      illustrate: "images/i_student_29.jpg",
      firstName: "Ezekiel John",
      lastName: "Celis",
    },
    {
      portrait: "images/student_30.webp",
      portfolio: "http://portolio.com/katrina-macadams",
      illustrate: "images/i_student_30.jpg",
      firstName: "Katrina",
      lastName: "Macadams",
    },
    {
      portrait: "images/student_31.webp",
      portfolio: "http://portolio.com/ali-el-maniary",
      illustrate: "images/i_student_31.jpg",
      firstName: "Ali",
      lastName: "El Maniary",
    },
    {
      portrait: "images/student_32.webp",
      portfolio: "http://portolio.com/lok-ting-tina-yam",
      illustrate: "images/i_student_32.jpg",
      firstName: "Lok Ting Tina",
      lastName: "Yam",
    },
    {
      portrait: "images/student_33.webp",
      portfolio: "http://portolio.com/thi-thanh-thuong-nguyen",
      illustrate: "images/i_student_33.jpg",
      firstName: "Thi Thanh Thuong",
      lastName: "Nguyen",
    },
    {
      portrait: "images/student_34.webp",
      portfolio: "http://portolio.com/jenifer-quelali-evangelista",
      illustrate: "images/i_student_34.jpg",
      firstName: "Jenifer",
      lastName: "Quelali Evangelista",
    },
    {
      portrait: "images/student_35.webp",
      portfolio: "http://portolio.com/rodrigo-nobre-do-nascimento",
      illustrate: "images/i_student_35.jpg",
      firstName: "Rodrigo",
      lastName: "Nobre Do Nascimento",
    },
    {
      portrait: "images/student_36.webp",
      portfolio: "http://portolio.com/milana-gabbassova",
      illustrate: "images/i_student_36.jpg",
      firstName: "Milana",
      lastName: "Gabbassova",
    },
    {
      portrait: "images/student_37.webp",
      portfolio: "http://portolio.com/izel-esteban-cardenas-ramos",
      illustrate: "images/i_student_37.jpg",
      firstName: "Izel Esteban",
      lastName: "Cardenas Ramos",
    },
    {
      portrait: "images/student_38.webp",
      portfolio: "http://portolio.com/timothy-bryle-flores",
      illustrate: "images/i_student_38.jpg",
      firstName: "Timothy Bryle",
      lastName: "Flores",
    },
    {
      portrait: "images/student_39.webp",
      portfolio: "http://portolio.com/loi-pan-sit",
      illustrate: "images/i_student_39.jpg",
      firstName: "Loi Pan",
      lastName: "Sit",
    },
    {
      portrait: "images/student_40.webp",
      portfolio: "http://portolio.com/napas-polchai",
      illustrate: "images/i_student_40.jpg",
      firstName: "Napas",
      lastName: "Polchai",
    },
    {
      portrait: "images/student_41.webp",
      portfolio: "http://portolio.com/akamjot-singh",
      illustrate: "images/i_student_41.jpg",
      firstName: "Akamjot",
      lastName: "Singh",
    },
    {
      portrait: "images/student_42.webp",
      portfolio: "http://portolio.com/emmanuel-opadele",
      illustrate: "images/i_student_42.jpg",
      firstName: "Emmanuel",
      lastName: "Opadele",
    },
    {
      portrait: "images/student_43.webp",
      portfolio: "http://portolio.com/shon-sojan",
      illustrate: "images/i_student_43.jpg",
      firstName: "Shon",
      lastName: "Sojan",
    },
    {
      portrait: "images/student_44.webp",
      portfolio: "http://portolio.com/ishan-mehra-ishan-mehra",
      illustrate: "images/i_student_44.jpg",
      firstName: "Ishan Mehra",
      lastName: "Ishan Mehra",
    },
    {
      portrait: "images/student_45.webp",
      portfolio: "http://portolio.com/shiyon-biju-varghese",
      illustrate: "images/i_student_45.jpg",
      firstName: "Shiyon",
      lastName: "Biju Varghese",
    },
    {
      portrait: "images/student_46.webp",
      portfolio: "http://portolio.com/jashan-kumar-jashan-kumar",
      illustrate: "images/i_student_46.jpg",
      firstName: "Jashan Kumar",
      lastName: "Jashan Kumar",
    },
    {
      portrait: "images/student_47.webp",
      portfolio: "http://portolio.com/meetinder-singh-dhaliwal",
      illustrate: "images/i_student_47.jpg",
      firstName: "Meetinder Singh",
      lastName: "Dhaliwal",
    },
    {
      portrait: "images/student_48.webp",
      portfolio: "http://portolio.com/harnoorpreet-kaur-harnoorpreet-kaur",
      illustrate: "images/i_student_48.jpg",
      firstName: "Harnoorpreet",
      lastName: "Kaur",
    },
    {
      portrait: "images/student_49.webp",
      portfolio: "http://portolio.com/apapat-juntarattanakamol",
      illustrate: "images/i_student_49.jpg",
      firstName: "Apapat",
      lastName: "Juntarattanakamol",
    },
    {
      portrait: "images/student_50.webp",
      portfolio: "http://portolio.com/sydney-bandarra",
      illustrate: "images/i_student_50.jpg",
      firstName: "Sydney",
      lastName: "Bandarra",
    },
    {
      portrait: "images/student_51.webp",
      portfolio: "http://portolio.com/osarieme-ogbeide",
      illustrate: "images/i_student_51.jpg",
      firstName: "Osarieme",
      lastName: "Ogbeide",
    },
    {
      portrait: "images/student_52.webp",
      portfolio: "http://portolio.com/tanya-mae-huertas",
      illustrate: "images/i_student_52.jpg",
      firstName: "Tanya Mae",
      lastName: "Huertas",
    },
    {
      portrait: "images/student_53.webp",
      portfolio: "http://portolio.com/carlos-andres-cano-menendez",
      illustrate: "images/i_student_53.jpg",
      firstName: "Carlos Andres",
      lastName: "Cano Menendez",
    },
    {
      portrait: "images/student_54.webp",
      portfolio: "http://portolio.com/kamana-bishokarma",
      illustrate: "images/i_student_54.jpg",
      firstName: "Kamana",
      lastName: "Bishokarma",
    },
    {
      portrait: "images/student_55.webp",
      portfolio: "http://portolio.com/king-yin-sham",
      illustrate: "images/i_student_55.jpg",
      firstName: "King Yin",
      lastName: "Sham",
    },
    {
      portrait: "images/student_56.webp",
      portfolio: "http://portolio.com/tapshveer-benipal",
      illustrate: "images/i_student_56.jpg",
      firstName: "Tapshveer",
      lastName: "Benipal",
    },
    {
      portrait: "images/student_57.webp",
      portfolio: "http://portolio.com/dixie-marie-laput",
      illustrate: "images/i_student_57.jpg",
      firstName: "Dixie Marie",
      lastName: "Laput",
    },
    {
      portrait: "images/student_58.webp",
      portfolio: "http://portolio.com/faizan-khan-faizan-khan",
      illustrate: "images/i_student_58.jpg",
      firstName: "Faizan Khan",
      lastName: "Faizan Khan",
    },
    {
      portrait: "images/student_59.webp",
      portfolio: "http://portolio.com/keith-lie",
      illustrate: "images/i_student_59.jpg",
      firstName: "Keith",
      lastName: "Lie",
    },
    {
      portrait: "images/student_60.webp",
      portfolio: "http://portolio.com/henrique-gamborgi-menezes",
      illustrate: "images/i_student_60.jpg",
      firstName: "Henrique",
      lastName: "Gamborgi Menezes",
    },
    {
      portrait: "images/student_61.webp",
      portfolio: "http://portolio.com/natchanon-mahaittidon",
      illustrate: "images/i_student_61.jpg",
      firstName: "Natchanon",
      lastName: "Mahaittidon",
    },
    {
      portrait: "images/student_62.webp",
      portfolio: "http://portolio.com/wing-lam-stephanie-chan",
      illustrate: "images/i_student_62.jpg",
      firstName: "Wing Lam Stephanie",
      lastName: "Chan",
    },
    {
      portrait: "images/student_63.webp",
      portfolio: "http://portolio.com/yi-ting-lai",
      illustrate: "images/i_student_63.jpg",
      firstName: "Yi Ting",
      lastName: "Lai",
    },
    {
      portrait: "images/student_64.webp",
      portfolio: "http://portolio.com/sheldon-gohetia",
      illustrate: "images/i_student_64.jpg",
      firstName: "Sheldon",
      lastName: "Gohetia",
    },
    {
      portrait: "images/student_65.webp",
      portfolio: "http://portolio.com/joyal-gregory",
      illustrate: "images/i_student_65.jpg",
      firstName: "Joyal",
      lastName: "Gregory",
    },
    {
      portrait: "images/student_66.webp",
      portfolio: "http://portolio.com/sukhbhag-singh-sidhu",
      illustrate: "images/i_student_66.jpg",
      firstName: "Sukhbhag Singh",
      lastName: "Sidhu",
    },
    {
      portrait: "images/student_67.webp",
      portfolio: "http://portolio.com/het-shah",
      illustrate: "images/i_student_67.jpg",
      firstName: "Het",
      lastName: "Shah",
    },
    {
      portrait: "images/student_68.webp",
      portfolio: "http://portolio.com/lav-pareshkumar-patel",
      illustrate: "images/i_student_68.jpg",
      firstName: "Lav Pareshkumar",
      lastName: "Patel",
    },
    {
      portrait: "images/student_69.webp",
      portfolio: "http://portolio.com/simon-dasilva",
      illustrate: "images/i_student_69.jpg",
      firstName: "Simon",
      lastName: "Dasilva",
    },
    {
      portrait: "images/student_70.webp",
      portfolio:
        "http://portolio.com/wimarsha-heshan-jayasinghe-jayasinghe-mudalige",
      illustrate: "images/i_student_70.jpg",
      firstName: "Wimarsha Heshan Jayasinghe",
      lastName: "Jayasinghe Mudalige",
    },
    {
      portrait: "images/student_71.webp",
      portfolio: "http://portolio.com/gia-khang-ho",
      illustrate: "images/i_student_71.jpg",
      firstName: "Gia Khang",
      lastName: "Ho",
    },
    {
      portrait: "images/student_72.webp",
      portfolio: "http://portolio.com/kristina-bendzsel",
      illustrate: "images/i_student_72.jpg",
      firstName: "Kristina",
      lastName: "Bendzsel",
    },
  ];

  studentDetail.forEach((each) => {
    const li = document.createElement("li");
    li.classList.add("student");

    const anchor = document.createElement("a");
    anchor.href = each.portfolio;
    anchor.textContent = `${each.firstName} ${each.lastName}`;

    li.appendChild(anchor);
    studentList.appendChild(li);
  });

  function filterStudents(searchValue) {
    studentList.innerHTML = "";
    studentDetail
      .filter((student) => {
        const fullName =
          `${student.firstName} ${student.lastName}`.toLowerCase();
        return fullName.includes(searchValue.toLowerCase());
      })
      .forEach((each) => {
        const li = document.createElement("li");
        li.classList.add("student");

        const portfolioLink = document.createElement("a");
        portfolioLink.href = each.portfolio;
        portfolioLink.textContent = `${each.firstName} ${each.lastName}`;

        li.appendChild(portfolioLink);
        if (window.innerWidth <= 580) {
          let isClicked = false;

          li.addEventListener("click", (e) => {
            e.preventDefault();

            if (!isClicked) {
              studentPortrait.style.visibility = "visible";
              studentIllustrate.style.visibility = "visible";
              portraitImg.src = each.portrait;
              illustrateImg.src = each.illustrate;

              const sound = new Audio("audio/pop.wav");
              sound.play();

              isClicked = true;
            } else {
              window.location.href = each.portfolio;
            }
          });
        } else {
          li.addEventListener("mouseenter", () => {
            studentPortrait.style.visibility = "visible";
            studentIllustrate.style.visibility = "visible";
            portraitImg.src = each.portrait;
            illustrateImg.src = each.illustrate;

            const sound = new Audio("video/pop.wav");
            sound.play();
          });

          li.addEventListener("mouseleave", () => {
            studentPortrait.style.visibility = "hidden";
            studentIllustrate.style.visibility = "hidden";
          });
        }
        studentList.appendChild(li);
      });
  }

  filterStudents("");

  searchInput.addEventListener("input", function () {
    filterStudents(searchInput.value);
  });

  // * Testimonial Section Variables, Function, and Arrays
  const testimonialBox = document.querySelector("#testimonial_box");

  testimonial = [
    {
      name: "Bobby McBounce",
      company: "Wobble Enterprises",
      testimonial:
        "Working with the institute has been an absolute blast! The creativity and energy they bring to every project are unmatched. They really helped us step up our game, and the results speak for themselves. Wobble Enterprises will definitely partner with them again in the future.",
      clientPortrait: "images/client_1.webp",
      companyLogo: "images/company_1.png",
    },
    {
      name: "Sally Gigglesworth",
      company: "Laughology Ltd.",
      testimonial:
        "The team at the institute is amazing! Their professionalism combined with their innovative approach made the whole experience enjoyable. Our collaboration brought fresh ideas and laughter to the table, and we couldn’t be happier with the outcome.",
      clientPortrait: "images/client_2.webp",
      companyLogo: "images/company_2.png",
    },
    {
      name: "Chad Thundercat",
      company: "ZapZap Inc.",
      testimonial:
        "The institute brought the thunder to our project! Their unique ideas and ability to adapt to our fast-paced environment was truly impressive. We couldn’t have done it without them. ZapZap Inc. highly recommends their expertise!",
      clientPortrait: "images/client_3.webp",
      companyLogo: "images/company_3.png",
    },
    {
      name: "Milly Quackers",
      company: "DuckDuckDesigns",
      testimonial:
        "Partnering with the institute was one of the best decisions we’ve made. Their team is full of quack-tastic talent! They helped us take our designs to the next level, and the results were simply fantastic. We’ll be coming back for sure!",
      clientPortrait: "images/client_4.webp",
      companyLogo: "images/company_4.png",
    },
    {
      name: "Frankie Fizzlebop",
      company: "Bop and Beyond",
      testimonial:
        "What a bop working with the institute! They brought a burst of creativity and energy to our brand. The team was not only professional but also fun to work with. Their fresh approach helped us connect with our audience like never before.",
      clientPortrait: "images/client_5.webp",
      companyLogo: "images/company_5.png",
    },
    {
      name: "Luna Moonbeam",
      company: "Galactic Ventures",
      testimonial:
        "The institute took us on a creative journey that was out of this world! Their innovative solutions and visionary thinking helped us achieve something truly stellar. We’re beyond excited with the results and look forward to future collaborations.",
      clientPortrait: "images/client_6.webp",
      companyLogo: "images/company_6.png",
    },
    {
      name: "Timmy Toots",
      company: "WhistleWorks",
      testimonial:
        "WhistleWorks couldn’t be happier with the collaboration! The institute’s team was always on point and full of great ideas. Their creative process blew us away, and the final product was a breath of fresh air. Highly recommend their services!",
      clientPortrait: "images/client_7.webp",
      companyLogo: "images/company_7.png",
    },
    {
      name: "Penny Pizzazz",
      company: "SparkleCorp",
      testimonial:
        "The institute brought sparkle and shine to our project! Their team was incredibly creative and professional, and they delivered beyond our expectations. It was a pleasure to work with such a dynamic group of people. We’re excited for future projects!",
      clientPortrait: "images/client_8.webp",
      companyLogo: "images/company_8.png",
    },
    {
      name: "Fifi Fluffington",
      company: "CloudNine Creations",
      testimonial:
        "CloudNine Creations had a cloud-tastic experience working with the institute! Their creative approach was exactly what we needed to bring our ideas to life. The team was a delight to work with, and we couldn’t be happier with the results.",
      clientPortrait: "images/client_9.webp",
      companyLogo: "images/company_9.png",
    },
    {
      name: "Tommy Tickles",
      company: "JollyGood Industries",
      testimonial:
        "JollyGood Industries had an absolutely jolly time working with the institute! Their creativity and professionalism are second to none. They took our ideas and turned them into something extraordinary. We can’t wait to work together again!",
      clientPortrait: "images/client_10.webp",
      companyLogo: "images/company_10.png",
    },
  ];

  testimonial.forEach((e) => {
    const card = document.createElement("div");
    card.classList.add("testimonial_card");

    const companyLogo = document.createElement("img");
    companyLogo.classList.add("company_logo");
    companyLogo.src = e.companyLogo;
    companyLogo.alt = `${e.company} logo`;

    const testimonialText = document.createElement("blockquote");
    testimonialText.classList.add("testimonial-text");
    testimonialText.textContent = e.testimonial;

    const clientDetails = document.createElement("div");
    clientDetails.classList.add("client_details");

    const clientImage = document.createElement("img");
    clientImage.classList.add("client_image");
    clientImage.src = e.clientPortrait;
    clientImage.alt = `${e.name}'s portrait`;

    const cite = document.createElement("div");
    cite.classList.add("cite");

    const clientName = document.createElement("cite");
    clientName.classList.add("client_name");
    clientName.textContent = e.name;

    const companyName = document.createElement("span");
    companyName.classList.add("company_name");
    companyName.textContent = `CEO, ${e.company}`;

    cite.appendChild(clientName);
    cite.appendChild(companyName);

    clientDetails.appendChild(clientImage);
    clientDetails.appendChild(cite);

    card.appendChild(companyLogo);
    card.appendChild(testimonialText);
    card.appendChild(clientDetails);

    testimonialBox.appendChild(card);
  });

  // Devs Section

  const devsData = [
    {
      imgSrc: "images/dev_1.jpg",
      name: "Connie Sham",
      portfolioText: "connie.ca",
      portfolioLink: "https://connie.ca",
      spanText: "C",
    },
    {
      imgSrc: "images/dev_2.jpg",
      name: "Nate Mahaittidon",
      portfolioText: "natem.com",
      portfolioLink: "https://natem.com",
      spanText: "M",
    },
    {
      imgSrc: "images/dev_3.jpg",
      name: "Yi Ting Lai",
      portfolioText: "elaine.com",
      portfolioLink: "https://elaine.com",
      spanText: "Y",
    },
    {
      imgSrc: "images/dev_4.jpg",
      name: "Keith Lie",
      portfolioText: "keithr.com",
      portfolioLink: "https://keithl.com",
      spanText: "K",
    },
  ];

  // * Devs Section Variables
  const devImg = document.querySelector("#dev_img");
  const devName = document.querySelector("#dev_name");
  const devPortfolio = document.querySelector("#dev_name_and_portfolio a");
  const alphabetSpan = document.querySelector("#alphabet");
  const cmykWheelImg = document.querySelector("#cmyk_wheel img");

  let currentIndex = 0;

  function updateContent() {
    devImg.style.backgroundImage = `url(${devsData[currentIndex].imgSrc})`;
    devName.textContent = devsData[currentIndex].name;
    devPortfolio.textContent = devsData[currentIndex].portfolioText;
    devPortfolio.href = devsData[currentIndex].portfolioLink;
    alphabetSpan.textContent = devsData[currentIndex].spanText;
    cmykWheelImg.classList.toggle("rotated");
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % devsData.length;
    updateContent();
  }, 4000);

  // !Graveyard
  // const toLinkBtn = document.querySelectorAll(".to_project_btn");
})();
