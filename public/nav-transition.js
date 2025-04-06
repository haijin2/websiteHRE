document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.navbar');
  const links = document.querySelectorAll('.menu-link');
  const line = document.createElement('div');
  line.classList.add('line');
  nav.appendChild(line);

  function setLine(el) {
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const leftPos = elRect.left - navRect.left;
    const width = elRect.width;

    line.style.left = `${leftPos}px`;
    line.style.width = `${width}px`;
  }

  // Initialize underline on the active link
  const activeLink = document.querySelector('.menu-link.active');
  if (activeLink) {
    setLine(activeLink);
  }

  // Click event for all nav links
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      setLine(this);
    });
  });

  // Optional: Recalculate position on window resize
  window.addEventListener('resize', function() {
    const active = document.querySelector('.menu-link.active');
    if (active) setLine(active);
  });
});