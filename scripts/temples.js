// temples.js - JavaScript for navigation and footer updates
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
    });
});
