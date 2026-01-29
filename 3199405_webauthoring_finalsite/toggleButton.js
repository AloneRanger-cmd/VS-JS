// toggleButton.js file to handle the toggle button functionality for mobile navigation//
// Thıs script adds an event lıstener to the toggle button that toggles the 'show' class on the nav links ul element //
const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});