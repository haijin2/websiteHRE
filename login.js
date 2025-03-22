
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
  
    form.addEventListener('submit', function (a) {
    //this fuction prevents html from loading if error
      a.preventDefault(); 
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
    //valid email & password input
      const validUsername = 'titi@example.com';
      const validPassword = '12345';

    //validation
      usernameInput.classList.remove('error');
      passwordInput.classList.remove('error');
  
      if (username === validUsername && password === validPassword) {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = 'patient.html';
        }, 500);

      } else {
        alert('Invalid username or password');  
        usernameInput.classList.add('error');
        passwordInput.classList.add('error');
        
      }
    });

    usernameInput.addEventListener('input', () => username.classList.remove('error'));
    passwordInput.addEventListener('input', () => password.classList.remove('error'));
  });
  
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

document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      setTimeout(() => {
        this.textContent = this.getAttribute('aria-expanded') === 'true' ? '▲' : '▼';
      }, 200); 
    });
  });
  
document.addEventListener('DOMContentLoaded', function () {
  const painInput = document.getElementById('painInput');
  painInput.addEventListener('input', function () {
    if (this.value > 10) this.value = 10;
    if (this.value < 1) this.value = 1;
});
  });
