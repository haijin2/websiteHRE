
import { auth } from './firebase-config.js'; // Import database
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";


// Sign-up logic with password confirmation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#login-form'); // Use unique ID
  const emailInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');


  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset errors
    emailInput.classList.remove('error');
    passwordInput.classList.remove('error');


    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
 
    // Create user with Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('Login Successfully!');
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = 'patient.html';  // Redirect after success
        }, 500);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('Firebase Error: ' + errorMessage);
        emailInput.classList.add('error');
        passwordInput.classList.add('error');
      });
  });

  // Remove error styles while typing
  emailInput.addEventListener('input', () => emailInput.classList.remove('error'));
  passwordInput.addEventListener('input', () => passwordInput.classList.remove('error'));
});
