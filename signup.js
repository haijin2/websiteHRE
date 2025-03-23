// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWg9QMvmGuXO8muczaT8C7mtKbAQdxflQ",
  authDomain: "website-7c0bb.firebaseapp.com",
  projectId: "website-7c0bb",
  storageBucket: "website-7c0bb.firebasestorage.app",
  messagingSenderId: "161489771293",
  appId: "1:161489771293:web:ce3088f4c22bbb7e96dff4",
  measurementId: "G-KXHKNXW8WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Sign-up logic with password confirmation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#signup-form'); // Use unique ID
  const emailInput = document.getElementById('signup-email');
  const passwordInput = document.getElementById('signup-password');
  const confirmPasswordInput = document.getElementById('confirm-password');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset errors
    emailInput.classList.remove('error');
    passwordInput.classList.remove('error');
    confirmPasswordInput.classList.remove('error');

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
        alert('Account Created Successfully!');
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = 'index.html';  // Redirect after success
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
  confirmPasswordInput.addEventListener('input', () => confirmPasswordInput.classList.remove('error'));
});
