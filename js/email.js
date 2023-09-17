function sendEmail()
{
    Email.send
    ({
        SecureToken: "ced1d3ef-e174-4917-82ef-7447f6da10c1",
        To : 'lhcbuspur@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone Number: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then
    (
    message => alert("ENQUIRY SENT SUCCESSFULLY!")
    );  
}

