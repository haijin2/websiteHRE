import { database, auth } from './firebase-config.js'; // Import database
import { ref, set } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// Sign-up logic with password confirmation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#signup-form'); // Use unique ID
  const usernameInput = document.getElementById('signup-username');
  const emailInput = document.getElementById('signup-email');
  const passwordInput = document.getElementById('signup-password');
  const confirmPasswordInput = document.getElementById('confirm-password');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset errors
    emailInput.classList.remove('error');
    passwordInput.classList.remove('error');
    confirmPasswordInput.classList.remove('error');
    usernameInput.classList.remove('error');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      passwordInput.classList.add('error');
      confirmPasswordInput.classList.add('error');
      return;
    }

    // Create user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = auth.currentUser;
      const databaseRef = ref(database, 'users/' + user.uid); // Correct database ref
      const userData = {
        username: usernameInput.value, // Use .value to get input value
        email: emailInput.value,    // Use .value to get input value
      };
  
      set(databaseRef, userData) // Use set to write to database
        .then(() => {
          alert('Account Created Successfully!');
          document.body.classList.add('fade-out');
          setTimeout(() => {
            window.location.href = 'index.html'; // Redirect after success
          }, 500);
        })
        .catch((databaseError) => {
          console.error("Database error:", databaseError);
          alert('Error saving user data to database.');
        });
  
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
  confirmPasswordInput.addEventListener('input', () => confirmPasswordInput.classList.remove('error'));
});
