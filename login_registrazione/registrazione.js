function redirectToHome() {

    var username = document.getElementById('username').value;
    console.log(username);
    var utenti = localStorage.getItem('utenti');
    console.log(utenti);
    var json = JSON.parse(utenti);
    var data = json[json.length - 1];

    window.location.href = "../home.html?username="+data.username;
}

function caricaUtenti() {
    var utenti = []

    if (window.localStorage.getItem('utenti') != null) {
        utenti = JSON.parse(
            window.localStorage.getItem('utenti')
        )
    }

    return utenti
}

function signup(e){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var superhero = document.getElementById('superhero').value;

    var user = {
        username: username,
        email: email,
        password: password,
        superhero: superhero,
        credits: 10,
        carte: [],
        doppie: [],
    };

    var utenti = caricaUtenti()

    if (!controllaEsistenza(user, utenti)) {
        utenti.push(user)
    } else {
        alert("Utente già esistente")
    }

    console.table(utenti)
    window.localStorage.setItem('utenti', JSON.stringify(utenti))
    console.log('user added');
    alert("Registrazione avvenuta con successo!");
    redirectToHome();
}

function controllaEsistenza(newUtente, utenti) {
    var risultato = utenti.find(user => user.username == newUtente.username)

    if (risultato != undefined) {
        return true
    } else {
        return false
    }
}

// Gestione della registrazione
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    signup();
    event.target.reset();
});