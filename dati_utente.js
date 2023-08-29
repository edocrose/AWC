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

function modifica(){
    window.location.href = "modifica_dati.html?username="+username;
};

//

function elimina(){
    var conferma = window.confirm("Sei sicuro di voler cancellare l'account?");
    var username = urlParams.get("username");
    if (conferma) {
        var utenti = localStorage.getItem('utenti');
        var json = JSON.parse(utenti);
        for(var i = 0; i < json.length; i++){
            if(json[i].username == username){
                json.splice(i, 1);
                break;
            }
        }

        var mod = JSON.stringify(json);
        localStorage.setItem('utenti', mod);

        window.location.href="login.html";
    } else {
        window.location.href = "../home.html?username="+username;
    }
    
};



