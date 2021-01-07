document.addEventListener('DOMContentLoaded', function(e) {
  const year = new Date().getFullYear();
  document.querySelector('[data-content="current_year"]').innerText = year;
});