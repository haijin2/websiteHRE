import { auth } from './firebase-config.js'; // Import database
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { savePatientInfo, populatePatientSelect, displayPatientSummary, WelcomeUser, logoutButton, showWelcome } from './functions.js';

const appointmentForm = document.getElementById('appointment-form');

document.addEventListener('DOMContentLoaded', () => {

  const patientSelect = document.getElementById('patient-select');

  showWelcome();
  onAuthStateChanged(auth, (user) => {
    if (user) {
        WelcomeUser(user);
        populatePatientSelect(user);
    } else {
        // User is signed out, show login message
        document.getElementById('patient-select').innerHTML = '<option value="">Please log in</option>';
        console.log("User is logged out");
    }

});

patientSelect.addEventListener('change', () => {
    const selectedPatientId = patientSelect.value;
    if (selectedPatientId) {
        displayPatientSummary(selectedPatientId);
    }
});

appointmentForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission (reload)

    if (appointmentForm.checkValidity()) {
      savePatientInfo();
    } else {
      appointmentForm.reportValidity(); 
    }
  });

  // Logout button listener
  if (logoutbtn) {
    logoutbtn.addEventListener('click', logoutButton);
  } else {
    console.error("Exit button element not found. Ensure the button has the ID 'logoutbtn'.");
  }
});