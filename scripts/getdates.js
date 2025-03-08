// Get the current year dynamically
const currentYear = new Date().getFullYear();

// Insert the copyright symbol and current year into the footer
document.querySelector("#year").innerHTML = `&copy; ${currentYear}`;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Insert the last modified date into the footer
document.querySelector("#lastModified").textContent = `Last Modification: ${lastModified}`;
