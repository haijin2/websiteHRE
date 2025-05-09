import { database, auth, storage } from './firebase-config.js'; // Import database
import { ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-storage.js";
import { ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";

async function uploadImage(imageFile, storagePath) {
  if (!imageFile) return null; // Handle null or undefined imageFile

  const storageReference = storageRef(storage, storagePath);

  try {
      const snapshot = await uploadBytes(storageReference, imageFile);
      return await getDownloadURL(snapshot.ref);
  } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please check console for error details.");
      return null; // Return null to indicate failure
  }
}


export async function savePatientInfo() {
  const user = auth.currentUser;

  if (!user) {
      console.error("User is not authenticated.");
      alert("Please log in to save patient information.");
      return;
  }

  const patientsRef = ref(database, `patients/${user.uid}`);
  const newPatientRef = push(patientsRef);
  const patientId = newPatientRef.key;

  // Get input element values
  const givenNameInput = document.getElementById("patient-given-name");
  const middleNameInput = document.getElementById("patient-middle-name");
  const lastNameInput = document.getElementById("patient-last-name");
  const ageInput = document.getElementById("patient-age");
  const genderInput = document.getElementById("patient-gender");
  const heightInput = document.getElementById("patient-height");
  const weightInput = document.getElementById("patient-weight");
  const contactInfoInput = document.getElementById("patient-contact");
  const occupationInput = document.getElementById("patient-occupation");
  const lifestyleInput = document.getElementById("patient-lifestyle");
  const immunizationInput = document.getElementById("patient-immunization");
  const mentalStatusInput = document.getElementById("mental_status");
  const pupilsInput = document.getElementById("pupils");
  const orientationInput = document.getElementById("orientation");
  const pupilSizeRightInput = document.getElementById("pupil_size_right");
  const pupilSizeLeftInput = document.getElementById("pupil_size_left");
  const affectInput = document.getElementById("affect");
  const centralPulsesInput = document.getElementById("central_pulses");
  const heartSoundsInput = document.getElementById("heart_sounds");
  const peripheralPulsesInput = document.getElementById("peripheral_pulses");
  const abdomenIsInput = document.getElementById("abdomen_is");
  const bowelSoundsInput = document.getElementById("bowel_sounds");
  const quadrantsInput = document.getElementById("quadrants");
  const lastBmDateInput = document.getElementById("last_bm_date");
  const stoolConsistencyInput = document.getElementById("stool_consistency");
  const movementInput = document.getElementById("movement");
  const contractureInput = document.getElementById("contracture");
  const musculoLocationInput = document.getElementById("musculo_location");
  const eyeResponseInput = document.getElementById("eye_response");
  const verbalResponseInput = document.getElementById("verbal_response");
  const motorResponseInput = document.getElementById("motor_response");
  const effortInput = document.getElementById("effort");
  const soundsLeftInput = document.getElementById("sounds_left");
  const soundsRightInput = document.getElementById("sounds_right");
  const coughInput = document.getElementById("cough");
  const skinColorInput = document.getElementById("skin_color");
  const skinTempInput = document.getElementById("skin_temp");
  const woundTypeInput = document.getElementById("wound_type");
  const wound1LocationInput = document.getElementById("wound1_location");
  const wound1StageInput = document.getElementById("wound1_stage");
  const wound2LocationInput = document.getElementById("wound2_location");
  const wound2StageInput = document.getElementById("wound2_stage");
  const wound3LocationInput = document.getElementById("wound3_location");
  const wound3StageInput = document.getElementById("wound3_stage");
  const extremityInput = document.getElementById("extremity");
  const painInput = document.getElementById("pain");
  const pulsesInput = document.getElementById("pulses");
  const neuroColorInput = document.getElementById("neuro_color");
  const neuroMovementInput = document.getElementById("neuro_movement");
  const sensationInput = document.getElementById("sensation");
  const neuroTempInput = document.getElementById("neuro_temp");
  const bloodPressureInput = document.getElementById("blood-pressure");
  const heartRateInput = document.getElementById("heart-rate");
  const pulseRateInput = document.getElementById("pulse-rate");
  const temperatureInput = document.getElementById("temperature");
  const oxySatInput = document.getElementById("oxy-sat");
  const appointmentDateTimeInput = document.getElementById("appointmentDateTime");
  const appointmentReasonInput = document.getElementById("appointmentReason");

  // Get the image files from the input elements
  const wound1PictureInput = document.getElementById("wound1_picture").files[0];
  const wound2PictureInput = document.getElementById("wound2_picture").files[0];
  const wound3PictureInput = document.getElementById("wound3_picture").files[0];

  // Upload images and get their URLs
  const wound1PictureUrl = await uploadImage(wound1PictureInput, `patients/${user.uid}/${patientId}/wound1.jpg`);
  const wound2PictureUrl = await uploadImage(wound2PictureInput, `patients/${user.uid}/${patientId}/wound2.jpg`);
  const wound3PictureUrl = await uploadImage(wound3PictureInput, `patients/${user.uid}/${patientId}/wound3.jpg`);

  // Construct patient data object.  Include the image URLs.
  const patientData = {
      patientId: patientId,
      givenName: givenNameInput.value || '',
      middleName: middleNameInput.value || '',
      lastName: lastNameInput.value || '',
      age: ageInput.value || 0,
      gender: genderInput.value || '',
      height: heightInput.value || 0,
      weight: weightInput.value || 0,
      contactInfo: contactInfoInput.value || '',
      occupation: occupationInput.value || '',
      lifestyle: lifestyleInput.value || '',
      immunization: immunizationInput.value || '',
      mentalStatus: mentalStatusInput.value || '',
      pupils: pupilsInput.value || '',
      orientation: orientationInput.value || '',
      pupilSizeRight: pupilSizeRightInput.value || 0,
      pupilSizeLeft: pupilSizeLeftInput.value || 0,
      affect: affectInput.value || '',
      centralPulses: centralPulsesInput.value || '',
      heartSounds: heartSoundsInput.value || '',
      peripheralPulses: peripheralPulsesInput.value || '',
      abdomenIs: abdomenIsInput.value || '',
      bowelSounds: bowelSoundsInput.value || '',
      quadrants: quadrantsInput.value || '',
      lastBmDate: lastBmDateInput.value || '',
      stoolConsistency: stoolConsistencyInput.value || '',
      movement: movementInput.value || '',
      contracture: contractureInput.value || '',
      musculoLocation: musculoLocationInput.value || '',
      eyeResponse: eyeResponseInput.value || '',
      verbalResponse: verbalResponseInput.value || '',
      motorResponse: motorResponseInput.value || '',
      effort: effortInput.value || '',
      soundsLeft: soundsLeftInput.value || '',
      soundsRight: soundsRightInput.value || '',
      cough: coughInput.value || '',
      skinColor: skinColorInput.value || '',
      skinTemp: skinTempInput.value || 0,
      woundType: woundTypeInput.value || '',
      wound1Location: wound1LocationInput.value || '',
      wound1Stage: wound1StageInput.value || '',
      wound1Picture: wound1PictureUrl || '', // Use the URL here
      wound2Location: wound2LocationInput.value || '',
      wound2Stage: wound2StageInput.value || '',
      wound2Picture: wound2PictureUrl || '', // Use the URL here
      wound3Location: wound3LocationInput.value || '',
      wound3Stage: wound3StageInput.value || '',
      wound3Picture: wound3PictureUrl || '', // Use the URL here
      extremity: extremityInput.value || '',
      pain: painInput.value || 0,
      pulses: pulsesInput.value || '',
      neuroColor: neuroColorInput.value || '',
      neuroMovement: neuroMovementInput.value || '',
      sensation: sensationInput.value || '',
      neuroTemp: neuroTempInput.value || 0,
      bloodPressure: bloodPressureInput.value || 0,
      heartRate: heartRateInput.value || 0,
      pulseRate: pulseRateInput.value || 0,
      temperature: temperatureInput.value || 0,
      oxySat: oxySatInput.value || 0,
      appointmentDateTime: appointmentDateTimeInput.value || '',
      appointmentReason: appointmentReasonInput.value || '',
  };

  try {
      await set(newPatientRef, patientData);
      alert("Patient information and images saved successfully!");
  } catch (error) {
      console.error("Error saving patient information:", error);
      alert("Failed to save patient information. Please check console for error details.");
  }
}

export function populatePatientSelect(user) {
  const patientSelect = document.getElementById('patient-select');

  if (!user) {
      patientSelect.innerHTML = '<option value="">Please log in</option>';
      console.log("User is not logged in");
      return;
  }

  const patientsRef = ref(database, `patients/${user.uid}`);

  onValue(patientsRef, (snapshot) => {
      const patientsData = snapshot.val();
      patientSelect.innerHTML = '<option value="">Select a Patient</option>'; // Clear and add initial option
      if (patientsData && Object.keys(patientsData).length > 0) {
          for (const patientId in patientsData) {
              const patient = patientsData[patientId];
              const option = document.createElement('option');
              option.value = patientId;
              option.textContent = `${patient.givenName} ${patient.lastName}`;
              patientSelect.appendChild(option);
          }
      }
  }, (error) => {
      console.error("Error populating patient select:", error);
      patientSelect.innerHTML = '<option value="">Error loading patients</option>';
  });
}

export function displayPatientSummary(patientId) {
  const user = auth.currentUser;
  if (!user) {
      alert("Please log in.");
      return;
  }

  const patientRef = ref(database, `patients/${user.uid}/${patientId}`);

  onValue(patientRef, (snapshot) => {
      const patientData = snapshot.val();
      if (patientData) {
          // Populate summary inputs with patient data
          document.getElementById('summary-given-name').value = patientData.givenName || '';
          document.getElementById('summary-middle-name').value = patientData.middleName || '';
          document.getElementById('summary-last-name').value = patientData.lastName || '';
          document.getElementById('summary-age').value = patientData.age || '';
          document.getElementById('summary-gender').value = patientData.gender || '';
          document.getElementById('summary-contact').value = patientData.contactInfo || '';
          document.getElementById('summary-height').value = patientData.height || '';
          document.getElementById('summary-weight').value = patientData.weight || '';
          document.getElementById('summary-occupation').value = patientData.occupation || '';
          document.getElementById('summary-lifestyle').value = patientData.lifestyle || '';
          document.getElementById('summary-immunization').value = patientData.immunization || '';

          document.getElementById('summary-mental').value = patientData.mentalStatus || '';
          document.getElementById('summary-orientation').value = patientData.orientation || '';
          document.getElementById('summary-pupils').value = patientData.pupils || '';
          document.getElementById('summary-pupil-right').value = patientData.pupilSizeRight || '';
          document.getElementById('summary-pupil-left').value = patientData.pupilSizeLeft || '';
          document.getElementById('summary-affect').value = patientData.affect || '';

          document.getElementById('summary-central-pulses').value = patientData.centralPulses || '';
          document.getElementById('summary-heart-sounds').value = patientData.heartSounds || '';
          document.getElementById('summary-peripheral-pulses').value = patientData.peripheralPulses || '';

          document.getElementById('summary-abdomen').value = patientData.abdomenIs || '';
          document.getElementById('summary-bowel-sounds').value = patientData.bowelSounds || '';
          document.getElementById('summary-quadrants').value = patientData.quadrants || '';
          document.getElementById('summary-bm-date').value = patientData.lastBmDate || '';
          document.getElementById('summary-stool').value = patientData.stoolConsistency || '';

          document.getElementById('summary-movement').value = patientData.movement || '';
          document.getElementById('summary-contracture').value = patientData.contracture || '';
          document.getElementById('summary-musculo-location').value = patientData.musculoLocation || '';

          document.getElementById('summary-eye').value = patientData.eyeResponse || '';
          document.getElementById('summary-verbal').value = patientData.verbalResponse || '';
          document.getElementById('summary-motor').value = patientData.motorResponse || '';

          document.getElementById('summary-effort').value = patientData.effort || '';
          document.getElementById('summary-sounds-left').value = patientData.soundsLeft || '';
          document.getElementById('summary-sounds-right').value = patientData.soundsRight || '';
          document.getElementById('summary-cough').value = patientData.cough || '';

          document.getElementById('summary-skin-color').value = patientData.skinColor || '';
          document.getElementById('summary-skin-temp').value = patientData.skinTemp || '';
          document.getElementById('summary-type-of-wound').value = patientData.woundType || '';
          document.getElementById('summary-location-wound1').value = patientData.wound1Location || '';
          document.getElementById('summary-stage-wound1').value = patientData.wound1Stage || '';
          document.getElementById('summary-location-wound2').value = patientData.wound2Location || '';
          document.getElementById('summary-stage-wound2').value = patientData.wound2Stage || '';
          document.getElementById('summary-location-wound3').value = patientData.wound3Location || '';
          document.getElementById('summary-stage-wound3').value = patientData.wound3Stage || '';

          document.getElementById('summary-extremity').value = patientData.extremity || '';
          document.getElementById('summary-pain').value = patientData.pain || 0;
          document.getElementById('summary-pulses').value = patientData.pulses || '';
          document.getElementById('summary-neuro-color').value = patientData.neuroColor || '';
          document.getElementById('summary-neuro-movement').value = patientData.neuroMovement || '';
          document.getElementById('summary-sensation').value = patientData.sensation || '';
          document.getElementById('summary-neuro-temp').value = patientData.neuroTemp || 0;

          document.getElementById('summary-bp').value = patientData.bloodPressure || 0;
          document.getElementById('summary-hr').value = patientData.heartRate || 0;
          document.getElementById('summary-pr').value = patientData.pulseRate || 0;
          document.getElementById('summary-temp').value = patientData.temperature || 0;
          document.getElementById('summary-oxy').value = patientData.oxySat || 0;

          document.getElementById('summary-appt-date').value = patientData.appointmentDateTime || '';
          document.getElementById('summary-appt-reason').value = patientData.appointmentReason || '';

          // Display Images
          const wound1Image = document.getElementById('summary-wound1-display');
          const wound2Image = document.getElementById('summary-wound2-display');
          const wound3Image = document.getElementById('summary-wound3-display');

          const placeholderUrl = 'https://placehold.co/600x400?text=N/A'; // Define placeholder URL

          wound1Image.src = patientData.wound1Picture || placeholderUrl;
          wound1Image.style.display = 'block'; // Ensure it's always displayed
          wound1Image.alt = patientData.wound1Picture ? 'Wound 1' : 'No Wound 1 Image Available'; // set alt

          wound2Image.src = patientData.wound2Picture || placeholderUrl;
          wound2Image.style.display = 'block';
          wound2Image.alt = patientData.wound2Picture ? 'Wound 2' : 'No Wound 2 Image Available';

          wound3Image.src = patientData.wound3Picture || placeholderUrl;
          wound3Image.style.display = 'block';
          wound3Image.alt = patientData.wound3Picture ? 'Wound 3' : 'No Wound 3 Image Available';

      } else {
          alert("Patient data not found.");
      }
  }, (error) => {
      console.error("Error fetching patient summary:", error);
      alert("Error loading patient data.");
  });
}

export function WelcomeUser(user) {
  const welcomeUserElement = document.getElementById('welcome-user');
  if (!welcomeUserElement) {
      console.error("Element with id 'welcome-user' not found in the DOM.");
      return;
  }

  if (!user) {
      console.error("No user is currently logged in.");
      welcomeUserElement.textContent = "Hello, User!";
      return;
  }
  const userRef = ref(database, `users/${user.uid}`);

  onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      if (userData && userData.username) {
          welcomeUserElement.textContent = `Hello, ${userData.username}`;
      } else {
          console.warn("User data or username not found in the database for the current user.");
          welcomeUserElement.textContent = "Hello, User!"; // Or some default
      }
  }, {
      onlyOnce: true
  });
}

export function logoutButton() {
  auth.signOut()
      .then(() => {
          // Sign-out successful.
          console.log("User signed out.");
          window.location.href = "index.html"; // Redirect to login page
      })
      .catch((error) => {
          console.error("Error signing out:", error);
      });
}

export function showWelcome() {
  const welcome = document.getElementById('welcome');
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');

  function updateTime() {
    const now = new Date();

    // Format Time (12-hour format with AM/PM)
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  // Format Date (e.g., March 28, 2025)
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);
  dateElement.textContent = formattedDate;

  // Show the welcome message
  welcome.classList.add('show');
  welcome.style.display = 'flex';

  // Update the time immediately and every second
  updateTime();
  setInterval(updateTime, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    showWelcome();
    
  }); // Optional slight delay to simulate login
});