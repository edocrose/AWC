//funzione che riporta ai dati utente mantenendo i dati di login
// DA USARE NEI FILE FUORI DALLA CARTELLA LOGIN
function getData(){
    const urlParams = new URLSearchParams(window.location.search);
    
    const username = urlParams.get("username");
    const email = urlParams.get("email");
    const password = urlParams.get("password");
    const superhero = urlParams.get("superhero");
    window.location.href = "login_registrazione/dati_utente.html?username="+username+"&email="+email+"&password="+password+"&superhero="+superhero;
}

//funzione che riporta ai dati utente mantenendo i dati di login
// DA USARE NEI FILE DENTRO DALLA CARTELLA LOGIN
function getDataLogin(){
    const urlParams = new URLSearchParams(window.location.search);
    
    const username = urlParams.get("username");
    const email = urlParams.get("email");
    const password = urlParams.get("password");
    const superhero = urlParams.get("superhero");
    window.location.href = "dati_utente.html?username="+username+"&email="+email+"&password="+password+"&superhero="+superhero;
}

//funzione che riporta alla home mantenendo i dati di login
function getDataHome(){
    const urlParams = new URLSearchParams(window.location.search);
    
    const username = urlParams.get("username");
    const email = urlParams.get("email");
    const password = urlParams.get("password");
    const superhero = urlParams.get("superhero");
    window.location.href = "../home.html?username="+username+"&email="+email+"&password="+password+"&superhero="+superhero;
}


