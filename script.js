const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.textContent = (hamburger.textContent === "☰") ? "✖" : "☰";
});

// Auto-close menu when clicking a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.textContent = "☰";
  });
});
