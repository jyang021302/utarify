function signup(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;

    sessionStorage.setItem('UserEmail', email);
    sessionStorage.setItem('UserPassword', password);

    alert("SIGN UP SUCCESSFULLY!");

}

function closePage() 
{
    location.href = "index.html";
}


