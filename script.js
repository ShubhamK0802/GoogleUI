// Get the search form element
const searchForm = document.querySelector('form');

// Add event listener for the search form submission
searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  const searchInput = document.getElementById('searchInput'); // Get the search input element
  const searchTerm = searchInput.value.trim(); // Get the search term and trim any whitespace
  if (searchTerm) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`; // Build the Google search URL with the search term
    window.location.href = searchUrl; // Redirect the user to the Google search page
  }
});
