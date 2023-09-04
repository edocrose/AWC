const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");
var utenti = localStorage.getItem('utenti');
var json = JSON.parse(utenti);
var user = null;
for (var i = 0; i < json.length; i++) {
    if (json[i].username == username) {
        user = json[i];
        cards(user.carte);
        break;
    }
}
var mod = JSON.stringify(json);
localStorage.setItem('utenti', mod);

function cards(mazzo) {
    var cardContainer = document.querySelector('.contenitore');

    // Ordina le carte in base al nome
    mazzo.sort(function (a, b) {
        var nameA = a.name.toLowerCase(); // Converte le lettere in lettere minuscole
        var nameB = b.name.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    for (var i = 0; i < mazzo.length; i++) {
        var characterCard = document.createElement('div');
        characterCard.id = 'character-card';
        characterCard.classList.add('badge');

        var img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = mazzo[i].thumbnail.path + "." + mazzo[i].thumbnail.extension;

        var h2 = document.createElement('h2');
        h2.classList.add('card-title');

        var nameParts = mazzo[i].name.split('(');
        h2.innerHTML = nameParts[0];

        if (nameParts.length > 1) {
            h2.innerHTML += '<br>(' + nameParts.slice(1).join('(');
        }

        var a = document.createElement('a');
        a.classList.add('btn-primary');
        a.href = 'cartaDettagli.html?index=' + i + '&username=' + username;
        a.innerHTML = 'Scopri di più';

        characterCard.appendChild(img);
        characterCard.appendChild(h2);
        characterCard.appendChild(a);

        cardContainer.appendChild(characterCard); // Aggiungi il div clonato come figlio del contenitore
    }
}




