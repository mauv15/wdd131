// Product array
const products = [
    { id: 'product1', name: 'Laptop' },
    { id: 'product2', name: 'Smartphone' },
    { id: 'product3', name: 'Headphones' },
    { id: 'product4', name: 'Smartwatch' },
    { id: 'product5', name: 'Tablet' }
  ];
  
  // Function to populate the product name dropdown
  function populateProductDropdown() {
    const selectElement = document.getElementById('productName');
    
    // Clear any existing options (in case there's any previous data)
    selectElement.innerHTML = '<option value="" disabled selected>Select a Product ...</option>';
    
    // Create and append option elements
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id; // ID as the value
      option.textContent = product.name; // Name as the display text
      selectElement.appendChild(option);
    });
  }
  
  // Call the function to populate the dropdown
  populateProductDropdown();
  
  // Add event listener to the form to handle submission
  document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the form from submitting the normal way
    event.preventDefault();
  
    // Get current submission count from localStorage (if any)
    let reviewCount = localStorage.getItem('reviewCount') || 0;
  
    // Increment the count
    reviewCount++;
  
    // Store the new count back into localStorage
    localStorage.setItem('reviewCount', reviewCount);
  
    // Now submit the form programmatically
    window.location.href = 'review.html';
  });
  
  // Footer date logic
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
  