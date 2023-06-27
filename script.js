document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle the class
    function toggleNavbarClass() {
      var navbar = document.getElementById('navbar');
      navbar.classList.toggle('navactive');
    }
  
    // Button click event
    var toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', function() {
      toggleNavbarClass();
    });
  
    // Window resize event
    window.addEventListener('resize', function() {
      var windowWidth = window.innerWidth;
      var navbar = document.getElementById('navbar');
      if (windowWidth > 830) {
        navbar.classList.remove('navactive');
      }
    });
  });
  