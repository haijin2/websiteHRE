//patient.html (accordion)
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      setTimeout(() => {
        this.textContent = this.getAttribute('aria-expanded') === 'true' ? '▲' : '▼';
      }, 200); 
    });
  });
//patient.html (accordion input 1-10 only) 
document.addEventListener('DOMContentLoaded', function () {
  const painInput = document.getElementById('painInput');
  painInput.addEventListener('input', function () {
    if (this.value > 10) this.value = 10;
    if (this.value < 1) this.value = 1;
});
  });