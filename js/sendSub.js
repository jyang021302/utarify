function sendSub() 
{
    Email.send
    ({
        SecureToken: "ced1d3ef-e174-4917-82ef-7447f6da10c1",
        To: 'hanchung4real@gmail.com',
        From: document.getElementById("sendSubEmail").value,
        Subject: "🆃🅷🅰🅽🅺🆂 🅵🅾🆁 🆂🆄🅱🆂🅲🆁🅸🅱🅸🅽🅶 🆄🆂!",
        Body: "Dear [" + document.getElementById("sendSubEmail").value + "]"
        +"<br>"
        +"<br> We are absolutely thrilled to welcome you to our 𝐔𝐓𝐀𝐑𝐈𝐅𝐘 𝐁𝐎𝐎𝐊 𝐑𝐄𝐍𝐓𝐀𝐋! Your recent subscription has filled us with immense joy, and we can't wait to embark on this literary journey with you."
        +"<br>"
        +"<br> At 𝕌𝕋𝔸ℝ𝕀𝔽𝕐 𝔹𝕆𝕆𝕂 ℝ𝔼ℕ𝕋𝔸𝕃, we are committed to providing a curated selection of books that cater to a wide range of tastes and interests. Your decision to join us is a testament to your love for literature, and we're honored to be a part of your reading adventure."
        +"<br>"
        +"<br> Warm Regards,"
        +"<br> Lim Han Chung"
        +"<br> Co-founder"
        +"<br> ░U░T░A░R░I░F░Y░"
    }).then
    (
        message => alert("SUBSCRIBED SUCCESSFULLY!")

    );
}
