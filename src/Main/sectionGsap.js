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

const sectionHeading = document.querySelectorAll(".section-header");
sectionHeading.forEach(heading => {
  //triggerText(xValue, skewXValue, triggerElement, markersOn)
  triggerText("100%", 45, heading, false)
})

const aboutMeText = document.querySelectorAll(".about-me-text");
aboutMeText.forEach(text => {
  //triggerText(xValue, skewXValue, triggerElement, markersOn)
  triggerText("-200%", -45, text, false)
})

const skillsText = document.querySelectorAll(".skills-text");
//triggerText(xValue, skewXValue, triggerElement, markersOn)
triggerText("-200%", -45, skillsText, false)

const skillsContainer = document.querySelectorAll(".skills-container");
skillsContainer.forEach(skill => {
  gsap.to(skill, { scale: 0, opacity: 0 })
  ScrollTrigger.create({
    trigger: skill,
    markers: false,
    start: "top 92%",
    onEnter: () => {
      gsap.to(skill, { scale: 1, opacity: 1, duration: .5 })
    }
  })
})

const educationContainer = document.querySelectorAll(".education-container");
educationContainer.forEach(container => {
  gsap.to(container, { y: 40, opacity: 0 })
  ScrollTrigger.create({
    trigger: container,
    markers: false,
    start: "top 92%",
    onEnter: () => {
      gsap.to(container, { y: 0, opacity: 1, duration: .5 })
    }
  })
})
