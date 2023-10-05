const heroBg = document.getElementById("hero-section");
const heroFace = document.getElementById("hero-face");

let heroBgLottie = bodymovin.loadAnimation({
  container: heroBg,
  path: 'src/lottie-animation/animation/bg-hero.json',
  renderer: 'svg',
  loop: false,
  autoplay: true,
})
let heroFaceLottie = bodymovin.loadAnimation({
  container: heroFace,
  path: 'src/lottie-animation/animation/hero-face.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Hero Bg",
})
