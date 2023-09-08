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

const emailPrev = data.email;

usernameElement.value=username;
emailElement.value=data.email;
passwordElement.value=data.password;
superheroElement.value=data.superhero;

function validaEmail(email) {
    const regexEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return regexEmail.test(email);
}

// Funzione per convalidare una password utilizzando una regex
function validaPassword(password) {
    // La password deve contenere almeno 8 caratteri, almeno una lettera maiuscola, almeno una lettera minuscola e almeno un numero.
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regexPassword.test(password);
}

function controllaEsistenza(usernameMod, emailMod, utenti) {
    for(let i=0; i<utenti.length; i++){
        //console.log("utenti"+utenti[i].username + "->mod" + usernameMod + "->norm" + username)
        //console.log("utenti"+utenti[i].email + "->mod" + emailMod + "->norm" + emailPrev)
        if (usernameMod === utenti[i].username && usernameMod !== username) {
            alert("Username già esistente");
            return true;
        } else if (emailMod === utenti[i].email && emailMod !== emailPrev) {
            alert("Email già esistente");
            return true;
        }
    }
    
    return false;
}

function modificaScambi(usernamePrev, usernameMod){
    var jsonS = localStorage.getItem('scambi');
    var scambi = JSON.parse(jsonS);
    for(let i = 0 ;i<scambi.length;i++){
        if(scambi[i].utenteRichiedente == usernamePrev){
            scambi[i].utenteRichiedente = usernameMod;
        }
    }

    var modS = JSON.stringify(scambi);
    localStorage.setItem('scambi', modS);
}

function modifica(e){
    event.preventDefault();

    var usernameMod = document.getElementById('username').value;
    var emailMod = document.getElementById('email').value;
    var passwordMod = document.getElementById('password').value;
    var superheroMod = document.getElementById('superhero').value;


    var utenti = localStorage.getItem('utenti');
    var json = JSON.parse(utenti);
    user = null
    for(var i = 0; i < json.length; i++){
        if(json[i].username == username){
            user = json[i];
            break;
        }
    }
    console.log(controllaEsistenza(usernameMod, emailMod, utenti));
    switch (true) {
        case controllaEsistenza(usernameMod, emailMod, json):
            break;
        case !validaEmail(emailMod):
            alert("Inserisci un indirizzo e-mail corretto");
            break; // Aggiungi il break per interrompere l'esecuzione del switch se questo caso viene soddisfatto.
    
        case !validaPassword(passwordMod):
            alert("La password deve avere almeno 8 caratteri con almeno 1 maiuscola, 1 minuscola e 1 numero");
            break; // Aggiungi il break anche qui.
    
        default:
            modificaScambi(user.username, usernameMod);
            user.username = usernameMod;
            user.email = emailMod;
            user.password = passwordMod;
            user.superhero = superheroMod;
            var mod = JSON.stringify(json);
            localStorage.setItem('utenti', mod);
            redirectToHome();
    }
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