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
