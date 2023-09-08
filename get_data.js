//funzione che riporta ai dati utente mantenendo i dati di login
// DA USARE NEI FILE FUORI DALLA CARTELLA LOGIN
function getData(){
    const urlParams = new URLSearchParams(window.location.search);
    
    const username = urlParams.get("username");


    window.location.href = "login_registrazione/dati_utente.html?username="+username;
}

function getData2(){
    const urlParams = new URLSearchParams(window.location.search);
    
    const username = urlParams.get("username");


    window.location.href = "../login_registrazione/dati_utente.html?username="+username;
}

//funzione che riporta ai dati utente mantenendo i dati di login
// DA USARE NEI FILE DENTRO DALLA CARTELLA LOGIN
function getDataLogin(){
    const urlParams = new URLSearchParams(window.location.search);
    
    const username = urlParams.get("username");
    window.location.href = "dati_utente.html?username="+username;
}

//funzione che riporta alla home mantenendo i dati di login
function getDataHome(){
    const urlParams = new URLSearchParams(window.location.search);
    
    const username = urlParams.get("username");
    window.location.href = "home.html?username="+username;
}

function getDataHome2(){
    const urlParams = new URLSearchParams(window.location.search);
    
    const username = urlParams.get("username");
    window.location.href = "../home.html?username="+username;
}


function getDataNegozio(){
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");
    window.location.href = "negozio/negozio.html?username="+username;
}

function getDataNegozio2(){
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");
    window.location.href = "../negozio/negozio.html?username="+username;
}

function getDataScambia(){
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");
    window.location.href = "scambia/mercato.html?username="+username;
}

function getDataScambia2(){
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");
    window.location.href = "../scambia/mercato.html?username="+username;
}

function getDataScambia3(){
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");
    window.location.href = "../scambia/scambia.html?username="+username;
}

function getDataScambia4(){
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");
    window.location.href = "../scambia/proposte.html?username="+username;
}


