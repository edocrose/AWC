const urlParams = new URLSearchParams(window.location.search);
    
    const username = urlParams.get("username");
    var utenti = localStorage.getItem('utenti');
    var json = JSON.parse(utenti);
    var data = null;
    for(var i = 0; i < json.length; i++){
        if(json[i].username == username){
            data = json[i];
            break;
        }
    }


const usernameElement = document.getElementById('username');
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');
const superheroElement = document.getElementById('superhero');
const creditsElement = document.getElementById('credits');

usernameElement.value=username;
emailElement.value=data.email;
passwordElement.value=data.password;
superheroElement.value=data.superhero;
creditsElement.value=data.credits;

function modifica(e){
    event.preventDefault();

    var usernameMod = document.getElementById('username').value;
    var emailMod = document.getElementById('email').value;
    var passwordMod = document.getElementById('password').value;
    var superheroMod = document.getElementById('superhero').value;


    var utenti = localStorage.getItem('utenti');
    var json = JSON.parse(utenti);
    for(var i = 0; i < json.length; i++){
        if(json[i].username == username){
            json[i].username = usernameMod;
            json[i].email = emailMod;
            json[i].password = passwordMod;
            json[i].superhero = superheroMod;
            break;
        }
    }

    var mod = JSON.stringify(json);
    localStorage.setItem('utenti', mod);
    redirectToHome();
}

function compraPacchetto(){
    var user = {
        username: username,
        email: email,
        password: password,
        superhero: superhero,
        credits: credits - 1,
    };
    var json = JSON.stringify(user);
    localStorage.removeItem(urlParams.get("username"));
    localStorage.setItem(username, json);
}

function redirectToHome() {
    var username = document.getElementById('username').value;

    window.location.href = "../home.html?username="+username;
}