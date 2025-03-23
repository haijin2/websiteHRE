//tabs
//patient.html (navigation/toggle tabs)
document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('.section-content');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
  
        // remove active class from all links and sections
        menuLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('active'));
  
        // add active class to clicked link and its section
        link.classList.add('active');
        document.getElementById(target).classList.add('active');
      });
    });
  });

