const urlParams = new URLSearchParams(window.location.search);
    
    const username = urlParams.get("username");
    const email = urlParams.get("email");
    const password = urlParams.get("password");
    const superhero = urlParams.get("superhero");
    const credits = urlParams.get("credits");


const usernameElement = document.getElementById('username');
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');
const superheroElement = document.getElementById('superhero');
const creditsElement = document.getElementById('credits');

usernameElement.value=username;
emailElement.value=email;
passwordElement.value=password;
superheroElement.value=superhero;
creditsElement.value=credits;

function modifica(){
    window.location.href = "modifica_dati.html?username="+username+"&email="+email+"&password="+password+"&superhero="+superhero+"&credits="+credits;
};

//

function elimina(){
    localStorage.removeItem(username);
    window.location.href="login.html";
};



