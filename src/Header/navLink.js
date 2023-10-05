const navLinks = document.querySelectorAll("#primary-nav li > a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(allLinks => {
      (allLinks.classList.contains("active") && allLinks.classList.remove("active"));
    })
    link.classList.add("active");
  })
})