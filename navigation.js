document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.menu-link');
  const sections = document.querySelectorAll('.section-content');
  const transitionDuration = 500; // Match this to your CSS duration

  // Show the initially active section
  const activeLink = document.querySelector('.menu-link.active');
  if (activeLink) {
    const targetId = activeLink.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    targetSection.classList.add('show', 'fade-in');
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

      // Fade out current visible section
      const currentSection = document.querySelector('.section-content.show');
      if (currentSection) {
        currentSection.classList.remove('fade-in');
        currentSection.classList.add('fade-out');

        // After fade-out completes, hide the section
        setTimeout(() => {
          currentSection.classList.remove('fade-out', 'show');

          // Now, show the target section smoothly
          targetSection.classList.add('show');
          // Use rAF to avoid skipping frames
          requestAnimationFrame(() => {
            targetSection.classList.add('fade-in');
          });
        }, transitionDuration);
      } else {
        // If no current section, just show target
        targetSection.classList.add('show');
        requestAnimationFrame(() => {
          targetSection.classList.add('fade-in');
        });
      }
    });
  });
});
