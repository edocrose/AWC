function redirectToHome() {
    var username = document.getElementById('username').value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);

    window.location.href = "../home.html?username="+data.username+"&email="+data.email+"&password="+data.password+"&superhero="+data.superhero+"&credits="+data.credits;
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
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('user added');
    alert("Registrazione avvenuta con successo!");
    redirectToHome();
}

// Gestione della registrazione
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    signup();
    event.target.reset();
});