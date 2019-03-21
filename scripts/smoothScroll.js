// const { sideNav } = require('./main');

const smoothscroll = require("smoothscroll-polyfill");

const removeSideNav = require("./handleSideNav");
const navLinks = document.querySelectorAll(".nav-link");
const container = document.querySelector(".container");

navLinks.forEach(link =>
  link.addEventListener("click", e => {
    e.preventDefault();
    smoothscroll.polyfill();

    //no longer display side nav if it's open
    removeSideNav();

    const hrefStr = e.currentTarget.hash.split("#")[1]; //parse section name to scroll to
    const linkRef =
      document.querySelector(`.${hrefStr}`) || document.querySelector(".hero");

    const offSetVal = linkRef.offsetTop || 0;

    window.scrollTo({ top: offSetVal - 99, behavior: "smooth" });
  })
);
