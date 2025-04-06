document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.menu-link');
  const sections = document.querySelectorAll('.section-content');

  // Show the initially active section
  const activeLink = document.querySelector('.menu-link.active');
  if (activeLink) {
    const targetId = activeLink.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    targetSection.classList.add('show');
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);

      // If already active, do nothing
      if (link.classList.contains('active')) return;

      // Update active menu
      menuLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Hide all sections instantly
      sections.forEach(section => section.classList.remove('show'));

      // Show the target section instantly
      targetSection.classList.add('show');
    });
  });
});
