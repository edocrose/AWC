function getData(){
    const urlParams = new URLSearchParams(window.location.search);
    
    const username = urlParams.get("username");
    const email = urlParams.get("email");
    const password = urlParams.get("password");
    const superhero = urlParams.get("superhero");
    window.location.href = "login_registrazione/dati_utente.html?username="+username+"&email="+email+"&password="+password+"&superhero="+superhero;
}


