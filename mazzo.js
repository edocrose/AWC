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
    var card = document.getElementById('character-card');
    for (var i = 0; i < user.carte.length; i++) {
            
        var clone = card.cloneNode(true);
        clone.id = 'badge-' + i;

        clone.getElementsByClassName('card-title')[0].innerHTML = user.carte[i].name;
          
        clone.getElementsByClassName('card-img-top')[0].src = user.carte[i].thumbnail.path+"."+user.carte[i].thumbnail.extension;
        card.after(clone);

        clone.getElementsByClassName('btn-primary')[0].href = clone.getElementsByClassName('btn-primary')[0].href + user.carte[i].id + "&username=" + user.username;
    }


}