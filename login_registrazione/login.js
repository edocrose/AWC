function redirectToHome() {
    var username = document.getElementById('loginUsername').value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);

    window.location.href = "../home.html?username="+data.username+"&email="+data.email+"&password="+data.password+"&superhero="+data.superhero;
}

function loginFunc(e){
    event.preventDefault();

    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if(user == null){
        alert("Utente non corretto");
    } else if(username == data.username && password == data.password){
        alert("Accesso effettuato con successo!");
        redirectToHome();
    }else{
        alert("Password errata");
    }
}

// Gestione del login
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    loginFunc();
    event.target.reset();
});