    //funzione che trova l'index dell'utente
    function trovaUtente(username){
        var index = null;
        for (var i = 0; i < utenti.length; i++) {
            if (utenti[i].username == username) {
                index = i;
                break;
            }
        }
        return index;
    }

    //funzione che trova l'index la carta richiesta/ceduta nel mazzo dell'altro user, 
    function trovaCarta(nomeCarta, mazzo){
        var index = null;
        for(let i=0; i<mazzo.length; i++){
            if(mazzo[i].name == nomeCarta){
                index = i;
                break;
            }
        }
        return index;
    }

//TROVA UTENTE
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");
var json = localStorage.getItem('utenti');
var utenti = JSON.parse(json);
var accetta = utenti[trovaUtente(username)];

//Prendi Scambi
var jsonScambi = localStorage.getItem('scambi');
var scambi = JSON.parse(jsonScambi);
//si può aggiungere una funzione per non fare vedere quelli effettuati dallo stesso utente


var container = document.querySelector('.mercato');

for (var i = 0; i < scambi.length; i++) {
    if(scambi[i].utenteRichiedente != username){
        var change = document.createElement('div');
        change.id = 'change';
        change.classList.add('change');
        var richiesta = document.createElement('p');
        richiesta.className = 'richiesta';
        richiesta.textContent = "Richiesta: " + scambi[i].cartaRichiesta;
        var ceduta = document.createElement('p');
        ceduta.className = 'ceduta';
        ceduta.textContent = "Ceduta: " + scambi[i].cartaCeduta;
        var button = document.createElement('button');
        button.type='submit';
        button.textContent= "Effettua lo scambio";
        button.onclick= (function(i){
            return function(){
                effettuaScambio(accetta, scambi[i], i);
            };
        })(i);
        change.appendChild(richiesta);
        change.appendChild(ceduta);
        change.appendChild(button);

        container.appendChild(change); // Aggiungi il div clonato come figlio del contenitore
    }
    
}

function effettuaScambio(user, scambio, index){
    console.log(index);
    console.log(scambi);
    var scambioCompl = {
        cartaRichiesta: scambio.cartaRichiesta,
        cartaCeduta: scambio.cartaCeduta,
        utenteRichiedente: scambio.utenteRichiedente,
        utenteAccetta: user.username,
    };

    richiedente = utenti[trovaUtente(scambioCompl.utenteRichiedente)];
    
    //metto carta dentro Accetta e tolgo da Richiedente
    var indexCedutaCarte = trovaCarta(scambioCompl.cartaCeduta, richiedente.carte);
    var indexCedutaDoppie = trovaCarta(scambioCompl.cartaCeduta, richiedente.doppie);
    //console.log(indexCedutaCarte);
    //console.log(indexCedutaDoppie);
    var cartaCeduta = richiedente.doppie[indexCedutaDoppie];
    accetta.carte.push(cartaCeduta);
    richiedente.doppie.splice(indexCedutaDoppie, 1);
    richiedente.carte.splice(indexCedutaCarte, 1);

    //metto carta dentro Richiedente e tolgo da Accetta
    var indexRichiestaCarte = trovaCarta(scambioCompl.cartaRichiesta, accetta.carte);
    var indexRichiestaDoppie = trovaCarta(scambioCompl.cartaRichiesta, accetta.doppie);
    //console.log(indexRichiestaCarte);
    //console.log(indexRichiestaDoppie);
    var cartaRichiesta = accetta.doppie[indexRichiestaDoppie];
    richiedente.carte.push(cartaRichiesta);
    accetta.doppie.splice(indexRichiestaDoppie, 1);
    accetta.carte.splice(indexRichiestaCarte, 1);

    //tolgo lo scambio
    scambi.splice(index,1);

    //aggiorno il localStorage
    localStorage.setItem('utenti', JSON.stringify(utenti));
    localStorage.setItem('scambi', JSON.stringify(scambi));

    alert("Scambio effettuato con successo");
    getDataHome2();
}