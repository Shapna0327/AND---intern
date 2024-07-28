document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  // Check localStorage for dark mode preference
  const darkMode = localStorage.getItem('darkMode') === 'enabled';
  if (darkMode) {
      document.body.classList.add('dark-mode');
  }

  // Toggle dark mode
  darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      // Update localStorage
      if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'enabled');
      } else {
          localStorage.setItem('darkMode', 'disabled');
      }
  });
});
