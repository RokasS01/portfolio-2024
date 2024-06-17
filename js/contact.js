emailjs.init("PbpPzKXLEtmNr4Ngt");

function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    emailjs.send("service_020q0ng", "template_o5g2gge", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        showNotification('Votre message a été envoyé ! ✅');
        document.getElementById('contact-form').reset();
    }, function(error) {
        showNotification('Une erreur s\'est produite ! ❌');
    });
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

