const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];
//funzione che trova l'index dell'utente
function trovaUtente(username) {
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
function trovaCarta(nomeCarta, mazzo) {
  var index = null;
  for (let i = 0; i < mazzo.length; i++) {
    if (mazzo[i].name == nomeCarta) {
      index = i;
      break;
    }
  }
  return index;
}


//trova l'immagine del nome della carte che gli passiamo
async function trovaImmagine(nomeCarta) {
  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${nomeCarta}`;

  try {
    const response = await fetch(url);
    const jsonData = await response.json();

    const img = jsonData.data.results[0].thumbnail.path + "/standard_fantastic." + jsonData.data.results[0].thumbnail.extension;
    return img;
  } catch (error) {
    console.error("Errore nella richiesta HTTP:", error);
    return null; // Gestione dell'errore
  }
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

var index = null

var container = document.querySelector('.mercato');

async function displayScambi() {
  for (var i = 0; i < scambi.length; i++) {
    index = i;
    if (scambi[i].utenteRichiedente != username) {
      // Crea l'elemento "change" aspettando che createChangeElement restituisca un valore
      const changeElement = await createChangeElement(scambi[i], i);
      var aCapo = document.createElement('br');
      // Aggiungi il "change" al container
      container.appendChild(changeElement);
    }
  }
}
displayScambi();

function effettuaScambio(user, scambio, index) {
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
  var indexRichiestaCarte = trovaCarta(scambioCompl.cartaRichiesta, accetta.carte);
  var indexRichiestaDoppie = trovaCarta(scambioCompl.cartaRichiesta, accetta.doppie);
  if (indexRichiestaDoppie != null) {
    var cartaCeduta = richiedente.doppie[indexCedutaDoppie];
    accetta.carte.push(cartaCeduta);
    richiedente.doppie.splice(indexCedutaDoppie, 1);
    richiedente.carte.splice(indexCedutaCarte, 1);

    var cartaRichiesta = accetta.doppie[indexRichiestaDoppie];
    richiedente.carte.push(cartaRichiesta);
    accetta.doppie.splice(indexRichiestaDoppie, 1);
    accetta.carte.splice(indexRichiestaCarte, 1);

    //console.log(cartaCeduta);
    for (let i = 0; i < scambi.length; i++) {
      //console.log(scambi[i].cartaCeduta);
      if (scambi[i].cartaCeduta == cartaCeduta.name && scambi[i].utenteRichiedente == richiedente.username) {
        scambi.splice(i, 1)
      }
    }

    //tolgo lo scambio
    //scambi.splice(index,1);



    //aggiorno il localStorage
    localStorage.setItem('utenti', JSON.stringify(utenti));
    localStorage.setItem('scambi', JSON.stringify(scambi));

    alert("Scambio effettuato con successo");
    getDataHome2();
  } else {
    alert("Non hai la carta richiesta!");
    window.location.href = "mercato.html?username=" + username;
  }

}

async function createChangeElement(scambio, index) {
  return new Promise(async (resolve, reject) => {
    // Crea un nuovo elemento "change" per ogni scambio
    var change = document.createElement('div');
    change.id = 'change';
    change.classList.add('change');

    // Crea l'elemento "richiesta"
    var richiesta = document.createElement('p');
    richiesta.className = 'richiesta';
    richiesta.textContent = "Richiesta: " + scambio.cartaRichiesta;

    // Crea l'elemento "cartaRichiesta"
    var cartaRichiesta = document.createElement('div');
    cartaRichiesta.id = 'character-card';
    var imgRic = document.createElement('img');

    try {
      // Attendere che trovaImmagine restituisca l'URL
      const urlRic = await trovaImmagine(scambio.cartaRichiesta);
      imgRic.src = urlRic;
    } catch (error) {
      console.error("Errore durante il caricamento dell'immagine:", error);
      imgRic.src = 'URL_dell_immagine_di_default_se_c_e_un_errore.jpg';
    }

    var h2Ric = document.createElement('h2');
    var nameRic = scambio.cartaRichiesta;

    if (nameRic.length > 12) {
      nameRic = nameRic.substring(0, 12) + '...';
    }
    h2Ric.innerHTML = nameRic
    cartaRichiesta.appendChild(imgRic);
    cartaRichiesta.appendChild(h2Ric);

    // Crea l'elemento "cartaCeduta" in modo simile
    var ceduta = document.createElement('p');
    ceduta.className = 'richiesta';
    ceduta.textContent = "Ceduta: " + scambio.cartaCeduta;

    // Crea l'elemento "cartaRichiesta"
    var cartaCeduta = document.createElement('div');
    cartaCeduta.id = 'character-card';
    var imgCed = document.createElement('img');

    try {
      // Attendere che trovaImmagine restituisca l'URL
      const urlCed = await trovaImmagine(scambio.cartaCeduta);
      imgCed.src = urlCed;
    } catch (error) {
      console.error("Errore durante il caricamento dell'immagine:", error);
      imgCed.src = 'URL_dell_immagine_di_default_se_c_e_un_errore.jpg';
    }

    var h2Ced = document.createElement('h2');
    var nameCed = scambio.cartaCeduta;

    if (nameCed.length > 12) {
      nameCed = nameRic.substring(0, 12) + '...';
    }
    h2Ced.innerHTML = nameRic
    cartaCeduta.appendChild(imgCed);
    cartaCeduta.appendChild(h2Ced);

    var contenitoreFrecce = document.createElement('div');
    contenitoreFrecce.className = 'contenitore-frecce';
    var aCapo = document.createElement('br');
    var frecciaSinistra = document.createElement('div');
    frecciaSinistra.className = 'freccia-sinistra';
    var frecciaDestra = document.createElement('div');
    frecciaDestra.className = 'freccia-destra';


    contenitoreFrecce.appendChild(frecciaSinistra);
    contenitoreFrecce.appendChild(aCapo);
    contenitoreFrecce.appendChild(frecciaDestra);

    var button = document.createElement('button');
    var accetta = document.createElement('span')
    accetta.textContent = "Accetta";
    button.appendChild(accetta)
    button.className = 'accetta';
    button.addEventListener('click', function () {
      effettuaScambio(accetta, scambi[index], index);
    });
    // Aggiungi tutti gli elementi al "change"
    change.appendChild(cartaRichiesta);
    change.appendChild(contenitoreFrecce);
    change.appendChild(cartaCeduta);
    change.appendChild(button);

    resolve(change); // Risolvi la promessa quando l'elemento è stato creato
  });
}