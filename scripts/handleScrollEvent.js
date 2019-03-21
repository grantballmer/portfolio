const { nav } = require("./main");
const sideNavLinks = document.querySelectorAll(".side-nav__link");

// The 3 nav sections
const aboutTop = document.querySelector(".about").offsetTop;
const projectsTop = document.querySelector(".projects").offsetTop;
const contactTop = document.querySelector(".contact").offsetTop;

window.addEventListener("scroll", e => {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  //highlight active section in side nav bar
  const topArr = [
    { index: 3, top: contactTop },
    { index: 2, top: projectsTop },
    { index: 1, top: aboutTop },
    { index: 0, top: 0 }
  ];
  const active = topArr.find(element => {
    return scrollPosition >= element.top - 100;
  });

  sideNavLinks.forEach(link => link.classList.remove("active"));
  sideNavLinks[active.index].classList.add("active");

  //change nav background to white or transparent depending on if user has scrolled past hero image or not
  scrollPosition >= aboutTop - 100
    ? nav.classList.add("nav-colored")
    : nav.classList.remove("nav-colored");
});
