const sectionHome = document.querySelectorAll("section");
const headerLinks = document.querySelectorAll("#primary-nav li a");
sectionHome.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    markers: true,
    onEnter: () => {
      headerLinks[index].classList.add("active");
    },
    onEnterBack: () => {
      headerLinks[index].classList.add("active");
      headerLinks[index + 1].classList.remove("active");
    },
    onLeave: () => {
      headerLinks[index].classList.remove("active");
    }
  });
});
