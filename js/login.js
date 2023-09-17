function validlogin(){
    var loginemail = document.getElementById('lemail').value;
    var loginpassword = document.getElementById('lpwd').value;

    var getEmail = sessionStorage.getItem('UserEmail');
    var getPassword = sessionStorage.getItem('UserPassword');

    if(loginemail == getEmail)
    {
        if(loginpassword == getPassword)
        {
            alert("LOGIN SUCCESSFULLY!");
            location.href = "index.html";
        }
        else
        {
            alert('WRONG PASSWORD!');
        }
    }
    else
    {
        alert('INVALID DETAILS!');
    }

}