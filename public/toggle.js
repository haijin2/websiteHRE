document.querySelector('.accordion-header').addEventListener('click', function() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('open');
  });