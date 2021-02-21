"use strict";

/* Menu Show */
var showMenu = function showMenu(toggleId, navId) {
  var toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');
/* Remove Menu Mobile */

var navLink = document.querySelectorAll('.nav_link');

function linkAction() {
  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach(function (n) {
  return n.addEventListener('click', linkAction);
});
/* Scroll Sections Active Link */

var sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
  var scrollY = window.pageYOffset;
  sections.forEach(function (current) {
    var sectionHeight = current.offsetHeight;
    var sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
}
/* Scroll Reveal Animation */


var sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});
/* Scroll Home */

sr.reveal('.inicio_title', {});
sr.reveal('.inicio_scroll', {
  delay: 200
});
sr.reveal('.inicio_img', {
  origin: 'right',
  delay: 400
});
/* Scroll About */

sr.reveal('.about_img', {
  delay: 500
});
sr.reveal('.about_subtitle', {
  delay: 300
});
sr.reveal('.about_profession', {
  delay: 400
});
sr.reveal('.about_text', {
  delay: 500
});
sr.reveal('.about_social-icon', {
  delay: 600,
  interval: 200
});
/* Scroll Skills */

sr.reveal('.skills_subtitle', {});
sr.reveal('.skills_name', {
  distance: '20px',
  delay: 50,
  interval: 100
});
sr.reveal('.skills_img', {
  delay: 400
});
/* Scroll Portafolio */

sr.reveal('.portafolio_img', {
  interval: 200
});
/* Scroll Contacto */

sr.reveal('.contacto_subtitle', {});
sr.reveal('.contacto_text', {
  interval: 200
});
sr.reveal('.contacto_input', {
  delay: 400
});
sr.reveal('.contacto_button', {
  delay: 600
});