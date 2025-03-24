// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js"; // Correct Firebase import
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWg9QMvmGuXO8muczaT8C7mtKbAQdxflQ",
  authDomain: "website-7c0bb.firebaseapp.com",
  databaseURL: "https://website-7c0bb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "website-7c0bb",
  storageBucket: "website-7c0bb.firebasestorage.app",
  messagingSenderId: "161489771293",
  appId: "1:161489771293:web:ce3088f4c22bbb7e96dff4",
  measurementId: "G-KXHKNXW8WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)



document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('save-btn');
    const editBtn = document.getElementById('edit-btn');
    const form = document.getElementById('patient-form');
    const formFields = form.querySelectorAll('input, select, textarea');

    
    // Disable all fields on Save
    saveBtn.addEventListener('click', function () {
      formFields.forEach(field => field.disabled = true);
      saveBtn.disabled = true;
      editBtn.disabled = false;
      saveBtn.textContent = "Saved";
    });
  
    // Enable fields on Edit
    editBtn.addEventListener('click', function () {
      formFields.forEach(field => field.disabled = false);
      saveBtn.disabled = false;
      editBtn.disabled = true;
      saveBtn.textContent = "Save";
    });
  });