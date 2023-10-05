const headerButtonOpen = document.getElementById("openHeader");
const header = document.querySelector("header");

headerButtonOpen.addEventListener("click", () => {
  if (!headerButtonOpen.classList.contains("is-active")) {
    headerButtonOpen.classList.add("is-active");
    gsap.to(header, { x: 0, duration: .5 })
  } else {
    headerButtonOpen.classList.remove("is-active");
    gsap.to(header, { x: "-100%", duration: .5 })
  }
})
