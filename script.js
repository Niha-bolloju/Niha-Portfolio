// Mobile nav toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('show'); // close menu on mobile
    }
  });
});