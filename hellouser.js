function showWelcome() {
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
  