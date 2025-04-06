document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.getElementById('save-btn');
  const editBtn = document.getElementById('edit-btn');
  const form = document.getElementById('patient-form');
  const formFields = form.querySelectorAll('input, select, textarea');
  const requiredFields = form.querySelectorAll('[required]'); // Only required fields

  function isFormValid() {
      let isValid = true;

      requiredFields.forEach(field => {
          if (!field.value.trim()) {
              field.classList.add('highlight'); // Add soft yellow highlight
              isValid = false;
          } else {
              field.classList.remove('highlight'); // Remove highlight if filled
          }
      });

      return isValid;
  }

  function toggleFields(disabled) {
      formFields.forEach(field => field.disabled = disabled);
  }

  form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission (reload)

      if (!isFormValid()) {
          alert('Please fill out all required fields before saving.');
          return;
      }

      toggleFields(true);
      saveBtn.disabled = true;
      editBtn.disabled = false;
      saveBtn.textContent = "Saved";
  });

  // Ensure the save button triggers the same behavior as form submission
  saveBtn.addEventListener('click', function () {
      if (!isFormValid()) {
          alert('Please fill out all required fields before saving.');
          return;
      }

      form.dispatchEvent(new Event('submit')); // Triggers the form submit event
  });

  editBtn.addEventListener('click', function () {
      toggleFields(false);
      saveBtn.disabled = false;
      editBtn.disabled = true;
      saveBtn.textContent = "Save";
  });

  // Remove highlight when the user starts typing/selecting
  requiredFields.forEach(field => {
      field.addEventListener('input', function () {
          if (field.value.trim()) {
              field.classList.remove('highlight');
          }
      });

      field.addEventListener('change', function () {
          if (field.value.trim()) {
              field.classList.remove('highlight');
          }
      });
  });
});
