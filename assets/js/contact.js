document.getElementById('form-submit').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('start');

    // These IDs from the previous steps
    const serviceID = 'service_6qp5zzh';
    const templateID = 'template_6vqd8o4';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Your message has been sent successfully!');
        }, (err) => {
            alert(JSON.stringify(err));
        });
});
