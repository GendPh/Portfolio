const heroBgContainer = document.getElementById("hero-section");
const heroFaceContainer = document.getElementById("hero-face");

let heroBgLottie = bodymovin.loadAnimation({
  container: heroBgContainer,
  path: 'src/lottie-animation/animation/bg-hero.json',
  renderer: 'svg',
  loop: false,
  autoplay: true,
})
let heroFaceLottie = bodymovin.loadAnimation({
  container: heroFaceContainer,
  path: 'src/lottie-animation/animation/hero-face.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Hero Bg",
})
