const links = document.querySelectorAll('.navbar a');
const navbar = document.querySelector('.navbar');
const topIcon = document.querySelector('.footer-iconTop i');
const topId = document.getElementById('top');

links.forEach(link => {
  link.addEventListener('click', clickHandler);
});

function clickHandler(e) {
  e.preventDefault();
  e.stopPropagation();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
  navbar.classList.remove('active');
}

topIcon.addEventListener('click', () => {
  topId.scrollIntoView({ behavior: 'smooth' });
});

function toggleNavbar() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}

document.getElementById('menu-icon').addEventListener('click', toggleNavbar);

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (viewportTop >= sectionTop && viewportTop < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`header nav a[href="#${section.id}"]`).classList.add('active');
      });
    }
  });
};

ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay:200
 });
 ScrollReveal().reveal('.home-content, .heading', { origin: top });
 ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});
 

 const typed =new Typed('.multiple-text',{
  strings: [ 'Front-End Developer', 'photographer',' Gamer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay:1000,
  loop: true
  });

