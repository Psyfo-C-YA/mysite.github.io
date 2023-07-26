const toggleButton = document.getElementById('dark-mode-toggle');
const navElement = document.querySelector('nav');
// const navElement__a = document.querySelectorAll('nav ul li a');
const navElement__btn = document.querySelector('nav ul li button');
const bodyElement = document.querySelector('body');
const headingElement_1 = document.querySelector(' h1');
const headingElement_2 = document.querySelector('h2');
const paragraphElement = document.querySelector('p');
// const iconElement = document.querySelectorAll('i');
const projectsHeading = document.getElementById('projects__heading');
const projectsHeading_2 = document.getElementById('projects__heading_2');
const contactParagraph = document.getElementById('name-tag');
const nestedContactDivText = document.querySelectorAll('#right-box div');

// Initialize a variable to track the state
let isActive = false;

// Function to toggle the active state
function toggleActive() {
  isActive = !isActive;
  if (isActive) {
    bodyElement.classList.add('darkmode');
    navElement.classList.add('darkmode');
    // navElement__a.classList.add('darkmode__text');
    navElement__btn.classList.add('darkmode__text');
    headingElement_1.classList.add('darkmode__text');
    headingElement_2.classList.add('darkmode__text');
    paragraphElement.classList.add('darkmode__text');
    // iconElement.classList.add('darkmode__text');
    projectsHeading.classList.add('darkmode__text');
    projectsHeading_2.classList.add('darkmode__text');
    contactParagraph.classList.add('darkmode__text');
    nestedContactDivText.forEach((div) => {
      div.classList.add('darkmode__text');
    });
  } else {
    bodyElement.classList.remove('darkmode');
    navElement.classList.remove('darkmode');
    // navElement__a.classList.remove('darkmode__text');
    navElement__btn.classList.remove('darkmode__text');
    headingElement_1.classList.remove('darkmode__text');
    headingElement_2.classList.remove('darkmode__text');
    paragraphElement.classList.remove('darkmode__text');
    // iconElement.classList.remove('darkmode__text');
    projectsHeading.classList.remove('darkmode__text');
    projectsHeading_2.classList.remove('darkmode__text');
    contactParagraph.classList.remove('darkmode__text');
    nestedContactDivText.forEach((div) => {
      div.classList.remove('darkmode__text');
    });
  }
}

// Add a click event listener to the button
toggleButton.addEventListener('click', toggleActive);

function scrollMode() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section');
  const navbarLinks = document.querySelectorAll('#navbar a');
  // const content = document.querySelector('h1');
  // const content = document.querySelector('body');

  // Get the height of the navbar
  var navbarHeight = navbar.offsetHeight;

  // Get the current vertical scroll position
  const scrollPosition = window.scrollY;

  // Determine when to add or remove the "scrolled" class
  if (scrollPosition > 1) {
    // Adjust this value as needed to control when the background becomes visible
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  let currentSectionIndex = 0;
  for (let i = 0; i < sections.length; i++) {
    const sectionTop = sections[i].offsetTop;
    if (window.scrollY >= sectionTop - 100) {
      currentSectionIndex = i;
    }
  }

  // Remove the active class from all links
  navbarLinks.forEach((link) => link.classList.remove('active'));

  // Add the active class to the corresponding link
  navbarLinks[currentSectionIndex].classList.add('active');
}
