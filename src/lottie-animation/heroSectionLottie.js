var animation = bodymovin.loadAnimation({
  container: document.getElementById('hero-section'), // Required
  path: 'src/lottie-animation/animation/animation.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
})