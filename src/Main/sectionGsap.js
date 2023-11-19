function triggerText(xValue, skewXValue, triggerElement, markersOn) {
  gsap.to(triggerElement, { x: xValue, skewX: skewXValue })
  ScrollTrigger.create({
    trigger: triggerElement,
    markers: markersOn,
    start: "center 92%",
    onEnter: () => {
      gsap.to(triggerElement, { x: 0, opacity: 1, duration: .5 });
      gsap.to(triggerElement, { skewX: 0, duration: .5, delay: .2 });
    }
  })
}


const sectionHome = document.querySelectorAll("section");
const headerLinks = document.querySelectorAll("#primary-nav li a");
sectionHome.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    markers: false,
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

const sectionH3 = document.querySelectorAll("h3");
const sectionH4 = document.querySelectorAll("h4");
sectionH3.forEach(heading => {
  //triggerText(xValue, skewXValue, triggerElement, markersOn)
  triggerText("100%", 45, heading, false)
})
sectionH4.forEach(heading => {
  //triggerText(xValue, skewXValue, triggerElement, markersOn)
  triggerText("100%", 45, heading, false)
})



const skillsText = document.querySelectorAll(".skills-text");
//triggerText(xValue, skewXValue, triggerElement, markersOn)
triggerText("-200%", -45, skillsText, false)

const innerContainers = document.querySelectorAll(".inner-container");
innerContainers.forEach(container => {
  gsap.to(container, { scale: 0, opacity: 0 })
  ScrollTrigger.create({
    trigger: container,
    markers: false,
    start: "top 92%",
    onEnter: () => {
      gsap.to(container, { scale: 1, opacity: 1, duration: .5 })
    }
  })
})
