/* Menu Show */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

/* Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Scroll Sections Active Link */
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
    }
  })
}

/* Scroll Reveal Animation */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/* Scroll Home */
sr.reveal('.inicio_title', {})
sr.reveal('.inicio_scroll', {
  delay: 200
})
sr.reveal('.inicio_img', {
  origin: 'right',
  delay: 400
})

/* Scroll About */
sr.reveal('.about_img', {
  delay: 500
})
sr.reveal('.about_subtitle', {
  delay: 300
})
sr.reveal('.about_profession', {
  delay: 400
})
sr.reveal('.about_text', {
  delay: 500
})
sr.reveal('.about_social-icon', {
  delay: 600,
  interval: 200
})

/* Scroll Skills */
sr.reveal('.skills_subtitle', {})
sr.reveal('.skills_name', {
  distance: '20px',
  delay: 50,
  interval: 100
})
sr.reveal('.skills_img', {
  delay: 400
})

/* Scroll Portafolio */
sr.reveal('.portafolio_img', {
  interval: 200
})

/* Scroll Contacto */
sr.reveal('.contacto_subtitle', {})
sr.reveal('.contacto_text', {
  interval: 200
})
sr.reveal('.contacto_input', {
  delay: 400
})
sr.reveal('.contacto_button', {
  delay: 600
})