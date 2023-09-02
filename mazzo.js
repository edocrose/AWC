const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");
var utenti = localStorage.getItem('utenti');
var json = JSON.parse(utenti);
var user = null;
for (var i = 0; i < json.length; i++) {
    if (json[i].username == username) {
        user = json[i];
        cards(user);
        break;
    }
}

function cards(user) {
    var cardContainer = document.querySelector('.contenitore');

    for (var i = 0; i < user.carte.length; i++) {
        var characterCard = document.createElement('div');
        characterCard.id = 'character-card';
        characterCard.classList.add('badge');

        var img = document.createElement('img');
        img.classList.add('card-img-top');
        img.alt = '...';
        img.src = user.carte[i].thumbnail.path + "." + user.carte[i].thumbnail.extension;

        var h2 = document.createElement('h2');
        h2.classList.add('card-title');
        h2.innerHTML = user.carte[i].name;

        var a = document.createElement('a');
        a.classList.add('btn-primary');
        a.href = 'scheda-supereroe.html?id=' + user.carte[i].id + '&username=' + user.username;
        a.innerHTML = 'Scopri di più';

        characterCard.appendChild(img);
        characterCard.appendChild(h2);
        characterCard.appendChild(a);

        cardContainer.appendChild(characterCard); // Aggiungi il div clonato come figlio del contenitore
    }
}


