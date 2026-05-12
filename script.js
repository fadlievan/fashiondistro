// LOADER

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

  }, 1800);

});

// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

// GLOW EFFECT

const glow = document.querySelector(".glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX - 150 + "px";
  glow.style.top = e.clientY - 150 + "px";

});

// SCROLL REVEAL

ScrollReveal({

  distance:"100px",
  duration:2000,
  delay:200

});

ScrollReveal().reveal(".hero-content", {
  origin:"top"
});

ScrollReveal().reveal(".about-content", {
  origin:"left"
});

ScrollReveal().reveal(".about-image", {
  origin:"right"
});

ScrollReveal().reveal(".card", {
  origin:"bottom",
  interval:200
});

ScrollReveal().reveal(".product-item", {
  origin:"bottom",
  interval:200
});

ScrollReveal().reveal(".contact-box", {
  origin:"bottom"
});

// PARALLAX HERO

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  document.querySelector(".hero-video").style.transform =
  `translateY(${scroll * 0.3}px)`;

});

// NAVBAR BACKGROUND

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if(window.scrollY > 100){

    header.style.background = "rgba(0,0,0,0.7)";

  } else {

    header.style.background = "rgba(0,0,0,0.2)";

  }

});

// HOVER EFFECT BUTTON

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

  btn.addEventListener("mouseenter", () => {

    cursor.style.transform = "translate(-50%,-50%) scale(2)";

  });

  btn.addEventListener("mouseleave", () => {

    cursor.style.transform = "translate(-50%,-50%) scale(1)";

  });

});