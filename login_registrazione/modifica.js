const urlParams = new URLSearchParams(window.location.search);
    
    const username = urlParams.get("username");
    const email = urlParams.get("email");
    const password = urlParams.get("password");
    const superhero = urlParams.get("superhero");


const usernameElement = document.getElementById('username');
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');
const superheroElement = document.getElementById('superhero');

usernameElement.value=username;
emailElement.value=email;
passwordElement.value=password;
superheroElement.value=superhero;

function modifica(e){
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
    };
    var json = JSON.stringify(user);
    localStorage.removeItem(urlParams.get("username"));
    localStorage.setItem(username, json);
    redirectToHome();
}

function redirectToHome() {
    var username = document.getElementById('username').value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);

    window.location.href = "../home.html?username="+data.username+"&email="+data.email+"&password="+data.password+"&superhero="+data.superhero;
}