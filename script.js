document.getElementById('resumeButton').addEventListener('click', function() {
    document.getElementById('resumePopup').style.display = 'block';
  });
  
  document.getElementById('resumePopup').addEventListener('click', function() {
    this.style.display = 'none';
  });
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Fetch form data
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    // For demonstration purposes, you can log or process the form data here
    console.log(formDataObject);
    // You can add code to send the form data to a backend for processing here
    // After processing, you may want to display a success message or redirect the user
    alert('Message sent successfully!');
    // Clear the form fields
    this.reset();
  });
    