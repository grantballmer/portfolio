const nav = document.querySelector("nav");
const sideNav = document.querySelector(".side-nav");

module.exports = {
  nav,
  sideNav
};

const smoothScroll = require("./smoothScroll");
const navScroll = require("./handleScrollEvent");
const handleSideNav = require("./handleSideNav");
const honeypot = require("./honeypot.js");
