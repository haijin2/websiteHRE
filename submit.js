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


function savePatientInfo() {
  const db = getDatabase();
  const patientsRef = ref(db, 'patients/');

  const newPatientRef = push(patientsRef);
  const patientId = newPatientRef.key;

  // Patient Information
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

  // Physical Assessment
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
  const wound1PictureInput = document.getElementById("wound1_picture");
  const wound2LocationInput = document.getElementById("wound2_location");
  const wound2StageInput = document.getElementById("wound2_stage");
  const wound2PictureInput = document.getElementById("wound2_picture");
  const wound3LocationInput = document.getElementById("wound3_location");
  const wound3StageInput = document.getElementById("wound3_stage");
  const wound3PictureInput = document.getElementById("wound3_picture");
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
    wound1Picture: wound1PictureInput.value || '',
    wound2Location: wound2LocationInput.value || '',
    wound2Stage: wound2StageInput.value || '',
    wound2Picture: wound2PictureInput.value || '',
    wound3Location: wound3LocationInput.value || '',
    wound3Stage: wound3StageInput.value || '',
    wound3Picture: wound3PictureInput.value || '',
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

  set(newPatientRef, patientData)
    .then(() => {
      console.log(`Patient saved successfully with ID: ${patientId}`);
      alert("Patient saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving patient data:", error);
      alert("Failed to save patient data.");
    });
}


document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit');

  
  // Disable all fields on Save
  submitBtn.addEventListener('click', function () {
    savePatientInfo();
  });


});