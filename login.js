
//Index.html
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

    //validation css
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

//patient.html (accordion)
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      setTimeout(() => {
        this.textContent = this.getAttribute('aria-expanded') === 'true' ? '▲' : '▼';
      }, 200); 
    });
  });
//patient.html (accordion input 1-10 only) 
document.addEventListener('DOMContentLoaded', function () {
  const painInput = document.getElementById('painInput');
  painInput.addEventListener('input', function () {
    if (this.value > 10) this.value = 10;
    if (this.value < 1) this.value = 1;
});
  });
// validation css signup
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const passwordInput = document.getElementById('signup-password');
  const confirmPasswordInput = document.getElementById('confirm-password');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 
   
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();


    passwordInput.classList.remove('error');
    confirmPasswordInput.classList.remove('error');

    if (password === confirmPassword) {
      alert('Account Created!');
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = 'index.html';  
      }, 500);
    } else {

      alert('Passwords do not match!');
      passwordInput.classList.add('error');
      confirmPasswordInput.classList.add('error');
    }
  });

  passwordInput.addEventListener('input', () => passwordInput.classList.remove('error'));
  confirmPasswordInput.addEventListener('input', () => confirmPasswordInput.classList.remove('error'));
});

//transition
document.addEventListener('DOMContentLoaded', () => {
  const loginLink = document.getElementById('login-link');

  // login
  loginLink.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = loginLink.getAttribute('href');
    }, 500);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const signupLink = document.getElementById('signup-link');

  // signup
  signupLink.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = signupLink.getAttribute('href');
    }, 500);
  });
});

//buttons next / back
