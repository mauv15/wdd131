document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("experienceForm");
    const countDisplay = document.getElementById("submissionCount");
  
    // Load and display submission count from localStorage
    let count = Number(localStorage.getItem("formSubmissions")) || 0;
    countDisplay.textContent = `Total submissions: ${count}`;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const temple = document.getElementById("temple").value;
      const experience = document.getElementById("experience").value.trim();
  
      if (!name || !temple || !experience) {
        alert("Please fill out all fields.");
        return;
      }
  
      // Update submission count in localStorage
      count++;
      localStorage.setItem("formSubmissions", count);
      countDisplay.textContent = `Total submissions: ${count}`;
  
      // Feedback using template literal
      alert(`Thank you, ${name}, for sharing your experience at the ${temple}.`);
  
      form.reset();
    });
  });
  