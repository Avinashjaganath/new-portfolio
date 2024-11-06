document.getElementById('form-submit').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('start');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('comment').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate form fields
    if (!name || !email || !subject || !message) {
        alert('Please fill in all the required fields.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    alert("please wait")

    // These IDs from the previous steps
    const serviceID = 'service_6qp5zzh';
    const templateID = 'template_6vqd8o4';

    emailjs.send(serviceID, templateID,{
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    }).then(function(response) {
        alert('Message sent successfully!');
    }, function(error) {
        alert('Failed to send message: ' + error.text);
    });
});
