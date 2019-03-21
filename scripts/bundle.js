(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { nav } = require('./main');
const sideNavLinks = document.querySelectorAll('.side-nav__link');

const aboutTop = document.querySelector('.about').offsetTop;
const projectsTop = document.querySelector('.projects').offsetTop;
const contactTop = document.querySelector('.contact').offsetTop;

window.addEventListener('scroll', (e) => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  const topArr = [{ index: 3, top: contactTop }, { index: 2, top: projectsTop }, { index: 1, top: aboutTop }, { index: 0, top: 0 }];
  const active = topArr.find(element => {
    return scrollPosition >= element.top - 100;
  });

  sideNavLinks.forEach(link => link.classList.remove('active'));
  sideNavLinks[active.index].classList.add('active');

  scrollPosition >= aboutTop - 100 ? nav.classList.add("nav-colored") : nav.classList.remove("nav-colored");
});

},{"./main":3}],2:[function(require,module,exports){
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

},{"./main":3}],3:[function(require,module,exports){
const nav = document.querySelector('nav');
const sideNav = document.querySelector('.side-nav');

module.exports = {
    nav,
    sideNav,
};

const smoothScroll = require('./smoothScroll');
const navScroll = require('./handleScrollEvent');
const handleSideNav = require('./handleSideNav');

},{"./handleScrollEvent":1,"./handleSideNav":2,"./smoothScroll":4}],4:[function(require,module,exports){
// const { sideNav } = require('./main');
const removeSideNav = require('./handleSideNav');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => link.addEventListener('click', (e) => {
  e.preventDefault();

  //no longer display side nav if it's open
  removeSideNav();

  const hrefStr = e.currentTarget.hash.split('#')[1];
  const linkRef = document.querySelector(`.${hrefStr}`) || document.querySelector('.hero');
  const offSetVal = linkRef.offsetTop || 0;

  window.scrollTo({ top: offSetVal - 100, behavior: 'smooth' });
}));

},{"./handleSideNav":2}]},{},[3]);
