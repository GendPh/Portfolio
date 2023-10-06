const heroHeading = document.getElementById("hero-heading");
const heroHeader = heroHeading.querySelector("h1");
const heroSubHeader = heroHeading.querySelector("h3");
const heroButtonPortfolio = heroHeading.querySelector("a");
const heroFace = document.getElementById("hero-face");

gsap.fromTo(heroHeading, { opacity: 0, y: -30, x: -30 }, { opacity: 1, y: 0, x: 0, duration: 1 });

gsap.from(heroHeader, { opacity: 0, scaleX: 0, transformOrigin: "left", duration: 1 });

gsap.from(heroSubHeader, { opacity: 0, scaleX: 0, transformOrigin: "right", duration: 1, delay: .3 });

gsap.fromTo(heroButtonPortfolio, { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 });

gsap.from(heroFace, { opacity: 0, scale: 0, y: 100, duration: 1, delay: 1 });