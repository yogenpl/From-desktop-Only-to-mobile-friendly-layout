const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle menu open/close
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  if (hamburger.textContent === "☰") {
    hamburger.textContent = "✖";
  } else {
    hamburger.textContent = "☰";
  }
});

// Auto-close menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');  // hide menu
    hamburger.textContent = "☰";         // reset icon
  });
});
