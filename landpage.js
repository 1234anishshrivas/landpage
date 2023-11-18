// script.js

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Validate form fields
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields');
        return;
      }
  
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
      }
  
      // Form is valid, you can send the data to the server or take other actions
      alert('Form submitted successfully!');
      // You can also use AJAX to send the form data to the server
  
      // Optional: Reset the form after submission
      contactForm.reset();
    });
  });
  