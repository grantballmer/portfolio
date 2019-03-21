const { nav, sideNav } = require('./main');
const menu = document.querySelector('.nav-menu');
const cancel = document.querySelector('.cancel');
const container = document.querySelector(".container ");

function toggleSideNav() {
  nav.classList.toggle('move-elements');
  container.classList.toggle('move-elements');
  sideNav.classList.toggle('display-nav');
}

function removeSideNav() {
  nav.classList.remove('move-elements');
  container.classList.remove('move-elements');
  sideNav.classList.remove('display-nav');
}

menu.addEventListener('click', toggleSideNav);
cancel.addEventListener('click', toggleSideNav);

module.exports = removeSideNav;
