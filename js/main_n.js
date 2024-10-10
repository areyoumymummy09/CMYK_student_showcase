(() => {
  console.log("Javascript Linked!");

  // Variables

  const burgerMenu = document.querySelector("#burger_ic");
  const navBar = document.querySelector("#navbar > nav > ul");

  // Functions

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
    if (window.innerWidth <= 414) {
      navBar.style.transform = "translateX(-100vw)";
      burgerMenu.textContent = "Menu";
    }
  }

  function adjustNavBar() {
    if (window.innerWidth >= 768) {
      navBar.style.transform = "translateX(0)";
      navBar.style.zIndex = "0";
    } else {
      navBar.style.transform = "translateX(-100vw)";
      navBar.style.zIndex = "9";
    }
  }

  const textHero = [
    `<p><b>Join us Industry Night 2025</b><br />April 18<sup>th</sup> Fanshawe, London, CA</p>`,
    `<p>Interactive Media Design &amp; <br />User Experience Design Program<br />School of Media &amp; Design Arts</p>`,
  ];

  let index = 0;

  const textChange = document.querySelector("#hero_desc_box p:first-of-type");

  function startTextChange() {
    if (window.innerWidth <= 414) {
      intervalID = setInterval(function () {
        const textChange = document.querySelector(
          "#hero_desc_box p:first-of-type"
        );
        textChange.classList.add("hide");

        setTimeout(function () {
          textChange.innerHTML = textHero[index];
          index++;

          if (index === textHero.length) {
            index = 0;
          }

          textChange.classList.remove("hide");
        }, 500);
      }, 3000);
    }
  }

  function stopTextChange() {
    if (window.innerWidth > 414) {
      if (intervalID) {
        clearInterval(intervalID);
        intervalID = null;
      }
      textChange.innerHTML = textHero[0];
    }
  }

  // Event Listener

  burgerMenu.addEventListener("click", openBurger);
  window.addEventListener("scroll", closeBurger);
  window.addEventListener("resize", adjustNavBar);
  window.addEventListener("resize", stopTextChange);
  window.addEventListener("resize", startTextChange);

  adjustNavBar();
  startTextChange();
})();
