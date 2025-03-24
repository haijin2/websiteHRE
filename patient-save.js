
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