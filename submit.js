import { auth } from './firebase-config.js'; // Import database
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { savePatientInfo, populatePatientSelect, displayPatientSummary } from './functions.js';



document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit');
  const patientSelect = document.getElementById('patient-select');


  onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, populate the select
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
 
  
  // Disable all fields on Save
  submitBtn.addEventListener('click', function () {
    savePatientInfo();
  });




});