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

