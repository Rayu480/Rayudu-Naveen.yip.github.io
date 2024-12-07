// Add event listener to the contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get form input values
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
  
    // Display a thank-you message
    alert(`Thank you, ${name}! Your message: "${message}" has been received.`);
  
    // Clear the form
    document.getElementById('contactForm').reset();
  });
  