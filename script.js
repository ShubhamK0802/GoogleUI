const form = document.querySelector('form');
const searchInput = document.getElementById('searchInput');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = url;
  }
});
