// Function to handle search
function handleSearch() {
  var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
  // Perform search-related actions
  if (searchTerm) {
      console.log("Searching for: " + searchTerm);
      // Here you can implement further actions, such as fetching search results from a server or displaying search results on the page
      displaySearchResults(searchTerm); // Example function call to display search results
  } else {
      console.log("Please enter a search term.");
  }
}

// Function to display search results (example)
function displaySearchResults(searchTerm) {
  // Example: Displaying search term in an alert
  alert("Search results for: " + searchTerm);
  // You can replace this with actual code to display search results on the page
}

// Function to handle login
function handleLogin() {
  // Example: Redirecting to login page
  window.location.href = "login.html";
}

// Function to handle signup
function handleSignup() {
  // Example: Redirecting to signup page
  window.location.href = "signup.html";
}

// Smooth scroll to target section
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
      window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth"
      });
  }
}

// Add event listener to About links for smooth scrolling
document.querySelectorAll('.nav-left .dropdown-content a').forEach(function(link) {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      var sectionId = this.getAttribute('href').substring(1);
      scrollToSection(sectionId);
  });
});


// Add event listeners to search button, login link, and signup link
document.getElementById("searchButton").addEventListener("click", handleSearch);
document.getElementById("loginLink").addEventListener("click", handleLogin);
document.getElementById("signupLink").addEventListener("click", handleSignup);