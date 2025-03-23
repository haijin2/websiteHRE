document.addEventListener('DOMContentLoaded', function () {
  const appointmentForm = document.getElementById('appointment-form');
  
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission
      console.log("Form submitted");

      // Collect data from patient-form
      const patientData = new FormData(document.getElementById('patient-form'));
      const patientGivenName = patientData.get('patient-given-name');
      const patientMiddleName = patientData.get('patient-middle-name');
      const patientLastName = patientData.get('patient-last-name');
      const patientAge = patientData.get('patient-age');
      const patientGender = patientData.get('patient-gender');
      const patientContact = patientData.get('patient-contact');
      const patientHeight = patientData.get('patient-height');
      const patientOccupation = patientData.get('patient-occupation');
      const patientLifestyle = patientData.get('patient-lifestyle');
      const patientImmunization = patientData.get('patient-immunization');
    
      // Collect data from physical-form
      const physicalData = new FormData(document.getElementById('physical-form'));
      // Vital Signs
      const bloodPressure = physicalData.get('blood-pressure');
      const heartRate = physicalData.get('heart-rate');
      const pulseRate = physicalData.get('pulse-rate');
      const temperature = physicalData.get('temperature');
      const oxySat = physicalData.get('oxy-sat');
    
      // Skin
      const skinColor = physicalData.get('skin_color');
      const skinTemp = physicalData.get('skin_temp');
      const woundType = physicalData.get('wound_type');
    
      // Wound 1
      const wound1Location = physicalData.get('wound1_location');
      const wound1Stage = physicalData.get('wound1_stage');
      const wound1Picture = physicalData.get('wound1_picture');
    
      // Wound 2
      const wound2Location = physicalData.get('wound2_location');
      const wound2Stage = physicalData.get('wound2_stage');
      const wound2Picture = physicalData.get('wound2_picture');
    
      // Wound 3
      const wound3Location = physicalData.get('wound3_location');
      const wound3Stage = physicalData.get('wound3_stage');
      const wound3Picture = physicalData.get('wound3_picture');
    
      // Extremity
      const extremity = physicalData.get('extremity');
      const pain = physicalData.get('pain');
      const pulses = physicalData.get('pulses');
      const neuroColor = physicalData.get('neuro_color');
      const neuroMovement = physicalData.get('neuro_movement');
      const sensation = physicalData.get('sensation');
      const neuroTemp = physicalData.get('neuro_temp');
    
      // Neurological
      const eyeResponse = physicalData.get('eye_response');
      const verbalResponse = physicalData.get('verbal_response');
      const motorResponse = physicalData.get('motor_response');
    
      // Respiratory
      const effort = physicalData.get('effort');
      const soundsLeft = physicalData.get('sounds_left');
      const soundsRight = physicalData.get('sounds_right');
      const cough = physicalData.get('cough');
    
      // Cardiovascular
      const centralPulses = physicalData.get('central_pulses');
      const heartSounds = physicalData.get('heart_sounds');
      const peripheralPulses = physicalData.get('peripheral_pulses');
    
      // Abdominal
      const abdomenIs = physicalData.get('abdomen_is');
      const bowelSounds = physicalData.get('bowel_sounds');
      const quadrants = physicalData.get('quadrants');
      const lastBMDt = physicalData.get('last_bm_date');
      const stoolConsistency = physicalData.get('stool_consistency');
    
      // Musculoskeletal
      const movement = physicalData.get('movement');
      const contracture = physicalData.get('contracture');
      const musculoLocation = physicalData.get('musculo_location');
    
      // Collect data from appoint-form
      const appointData = new FormData(document.getElementById('appointment-form'));
      const appointmentDate = appointData.get('appointmentDateTime');
      const appointmentReason = appointData.get('appointmentReason');
    
      // Create Notepad text
      const notepadText = `
        PATIENT INFORMATION
        Name: ${patientGivenName} ${patientMiddleName} ${patientLastName}
        Age: ${patientAge}
        Gender: ${patientGender}
        Contact: ${patientContact}
        Height: ${patientHeight}
        Occupation: ${patientOccupation}
        Lifestyle: ${patientLifestyle}
        Immunization: ${patientImmunization}

        PHYSICAL ASSESSMENT
        Blood Pressure: ${bloodPressure}
        Heart Rate: ${heartRate}
        Pulse Rate: ${pulseRate}
        Temperature: ${temperature}
        Oxygen Saturation: ${oxySat}

        Skin:
          Color: ${skinColor}
          Temperature: ${skinTemp}
          Type of Wound: ${woundType}

        Wound 1:
          Location: ${wound1Location}
          Stage: ${wound1Stage}
          Picture: ${wound1Picture}

        Wound 2:
          Location: ${wound2Location}
          Stage: ${wound2Stage}
          Picture: ${wound2Picture}

        Wound 3:
          Location: ${wound3Location}
          Stage: ${wound3Stage}
          Picture: ${wound3Picture}

        Extremity:
          Location: ${extremity}
          Pain (0-10): ${pain}
          Pulses: ${pulses}
          Color: ${neuroColor}
          Movement: ${neuroMovement}
          Sensation: ${sensation}
          Temperature: ${neuroTemp}

        Neurological Responses:
          Eye Opening: ${eyeResponse}
          Verbal Response: ${verbalResponse}
          Motor Response: ${motorResponse}

        Respiratory:
          Effort: ${effort}
          Left Sounds: ${soundsLeft}
          Right Sounds: ${soundsRight}
          Cough: ${cough}

        Cardiovascular:
          Central Pulses: ${centralPulses}
          Heart Sounds: ${heartSounds}
          Peripheral Pulses: ${peripheralPulses}

        Abdominal:
          Abdomen: ${abdomenIs}
          Bowel Sounds: ${bowelSounds}
          Quadrants: ${quadrants}
          Last BM/Date: ${lastBMDt}
          Stool Consistency: ${stoolConsistency}

        Musculoskeletal:
          Movement: ${movement}
          Contracture: ${contracture}
          Location: ${musculoLocation}

        APPOINTMENT
        Date: ${appointmentDate}
        Reason: ${appointmentReason}
      `;

      // Show Notepad Output
      const outputDiv = document.getElementById('notepadOutput');
      outputDiv.textContent = notepadText;
      outputDiv.style.display = 'block';
    });
  } else {
    console.log("Appointment form not found");
  }
});
