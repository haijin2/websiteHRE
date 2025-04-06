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

