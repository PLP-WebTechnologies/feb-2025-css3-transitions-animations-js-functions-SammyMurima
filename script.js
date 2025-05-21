// Store user preference
const themeSelect = document.getElementById('theme');
themeSelect.addEventListener('change', () => {
  localStorage.setItem('preferredTheme', themeSelect.value);
  document.body.className = themeSelect.value;
});

// Retrieve and apply preference
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('preferredTheme');
  if (savedTheme) {
    themeSelect.value = savedTheme;
    document.body.className = savedTheme;
  }
});

// Trigger animation
const animateBtn = document.getElementById('animateBtn');
animateBtn.addEventListener('click', () => {
  animateBtn.classList.add('animate');
  setTimeout(() => animateBtn.classList.remove('animate'), 600);
});
