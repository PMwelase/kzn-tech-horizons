// Contact form handler
function sendEmail() {
    // Collect form data
    const formData = {
        role: document.getElementById('role').value,
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        text: document.getElementById('message').value
    };

    console.log('Role: ', formData.role);
    console.log('Name: ', formData.name);
    console.log('Surname: ', formData.surname);
    console.log('Email: ', formData.email);
    console.log('Text: ', formData.text);
  
    // Validate form data
    if (!formData.name || !formData.surname || !formData.email || !formData.text) {
        alert('Please fill out all fields.');
        return;
    }
  
    // Send the data to the backend using fetch
    fetch('send_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    });
  }