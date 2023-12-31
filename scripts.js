const toggleButton = document.getElementById('dark-mode-toggle');
const navElement = document.querySelector('nav');
const navElement__a = document.querySelectorAll('nav ul li a');
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
const sportifyDiv = document.getElementById('sportify');
const sporifyIcon = document.getElementById('sportify__icon');
const sportifyParagraphs = document.querySelectorAll('#sportify div p');
// const sportifyContent = document.querySelectorAll('');
const bottomMiddleBox = document.getElementById('bottom-middle-box');
const hoverSound = document.getElementById('sportify__sound');

const apparentlySound = new Audio('sound/Cole.mp3');

// Initialize a variable to track the state
let isActive = false;

// Function to toggle the active state
function toggleActive() {
  isActive = !isActive;
  if (isActive) {
    bodyElement.classList.add('darkmode');
    // navElement.classList.add('darkmode-navbar');
    // navElement__a.classList.add('darkmode__text');

    navElement__a.forEach((a) => {
      a.classList.add('darkmode__text');
    });

    navElement__a.forEach((link) => link.classList.remove('active'));

    navElement.classList.add('darkmode-scrolled');
    navElement.classList.remove('scrolled');

    navElement__btn.classList.add('darkmode__text');
    headingElement_1.classList.add('darkmode__text');
    headingElement_2.classList.add('darkmode__text');
    paragraphElement.classList.add('darkmode__text');
    // iconElement.classList.add('darkmode__text');
    projectsHeading.classList.add('darkmode__text');
    projectsHeading_2.classList.add('darkmode__text');
    contactParagraph.classList.add('darkmode__text');

    // sportifyDiv.classList.add('darkmode');
    sportifyDiv.classList.add('darkmode-navbar');

    sporifyIcon.classList.add('darkmode__text');

    sportifyParagraphs.forEach((p) => {
      p.classList.add('darkmode__text');
    });

    nestedContactDivText.forEach((div) => {
      div.classList.add('darkmode__text');
    });

    // bottomMiddleBox.classList.add('darkmode-navbar');
    lines.forEach((line) => {
      line.classList.add('darkmode-navbar');
    });
  } else {
    bodyElement.classList.remove('darkmode');
    navElement.classList.remove('darkmode');

    navElement__a.forEach((link) => link.classList.remove('active-darkmode'));

    navElement__a.forEach((a) => {
      a.classList.remove('darkmode__text');
    });

    navElement.classList.remove('darkmode-scrolled');
    navElement.classList.add('scrolled');

    // navElement__a.classList.remove('darkmode__text');
    navElement__btn.classList.remove('darkmode__text');
    headingElement_1.classList.remove('darkmode__text');
    headingElement_2.classList.remove('darkmode__text');
    paragraphElement.classList.remove('darkmode__text');
    // iconElement.classList.remove('darkmode__text');
    projectsHeading.classList.remove('darkmode__text');
    projectsHeading_2.classList.remove('darkmode__text');
    contactParagraph.classList.remove('darkmode__text');

    sportifyDiv.classList.remove('darkmode-navbar');

    sporifyIcon.classList.remove('darkmode__text');

    sportifyParagraphs.forEach((p) => {
      p.classList.remove('darkmode__text');
    });

    nestedContactDivText.forEach((div) => {
      div.classList.remove('darkmode__text');
    });

    // bottomMiddleBox.classList.remove('darkmode-navbar');
    lines.forEach((line) => {
      line.classList.remove('darkmode-navbar');
    });
  }
}

// Add a click event listener to the button
toggleButton.addEventListener('click', toggleActive);

const lines = document.querySelectorAll('.line');

lines.forEach((line) => {
  line.addEventListener('mouseenter', () => {
    line.style.height = '4rem';
  });

  line.addEventListener('mouseleave', () => {
    line.style.height = '2rem';
  });
});

hoverSound.addEventListener('click', () => {
  apparentlySound.play();
});

hoverSound.addEventListener('dblclick', () => {
  apparentlySound.pause();
});

hoverSound.addEventListener('mouseenter', () => {
  apparentlySound.play();
});

hoverSound.addEventListener('mouseleave', () => {
  apparentlySound.pause();
});

function scrollMode() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section');
  const navbarLinks = document.querySelectorAll('#navbar a');
  // const content = document.querySelector('h1');
  // const content = document.querySelector('body');

  // Get the current vertical scroll position
  const scrollPosition = window.scrollY;

  // Determine when to add or remove the "scrolled" class
  if (scrollPosition >= 1 && bodyElement.classList.contains('darkmode')) {
    // Adjust this value as needed to control when the background becomes visible
    navbar.classList.add('darkmode-scrolled');
  } else if (scrollPosition >= 1) {
    navbar.classList.remove('darkmode-scrolled');
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.remove('darkmode-scrolled');
  }

  // Determinig when the active class should be added to indicate on which section the page is on.
  let currentSectionIndex = 0;
  for (let i = 0; i < sections.length; i++) {
    const sectionTop = sections[i].offsetTop;
    if (window.scrollY >= sectionTop - 100) {
      currentSectionIndex = i;
    }
  }

  if (bodyElement.classList.contains('darkmode')) {
    // Remove the active class from all links
    navbarLinks.forEach((link) => link.classList.remove('active-darkmode'));

    navbarLinks.forEach((link) => link.classList.remove('active'));
    // Add the active class to the corresponding link
    navbarLinks[currentSectionIndex].classList.add('active-darkmode');
  } else {
    // Remove the active class from all links
    navbarLinks.forEach((link) => link.classList.remove('active-darkmode'));

    navbarLinks.forEach((link) => link.classList.remove('active'));

    // Add the active class to the corresponding link
    navbarLinks[currentSectionIndex].classList.add('active');
  }
}
