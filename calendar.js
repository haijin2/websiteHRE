document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#appointmentDateTime", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      minDate: "today",
      altInput: true,
      altFormat: "F j, Y (h:i K)",
      defaultHour: 10,
      defaultMinute: 30
    });
  });