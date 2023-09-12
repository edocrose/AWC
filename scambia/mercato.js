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
var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get("username");
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
  
  for (let y=0; y<accetta.carte.length; y++){
    //console.log("carta" + accetta.carte[y].name +"==" + cartaCeduta)
    if(accetta.carte[y].name == cartaCeduta){
      alert ("La carta che stai accentando è già nel tuo mazzo!")
      return 
    }
  }

  richiedente = utenti[trovaUtente(scambioCompl.utenteRichiedente)];

  //metto carta dentro Accetta e tolgo da Richiedente
  var indexCedutaCarte = trovaCarta(scambioCompl.cartaCeduta, richiedente.carte);
  var indexCedutaDoppie = trovaCarta(scambioCompl.cartaCeduta, richiedente.doppie);
  var indexRichiestaCarte = trovaCarta(scambioCompl.cartaRichiesta, accetta.carte);
  var indexRichiestaDoppie = trovaCarta(scambioCompl.cartaRichiesta, accetta.doppie);
  if (indexRichiestaDoppie != null) {
    var cartaCeduta = richiedente.doppie[indexCedutaDoppie];
    //accetta.carte.push(cartaCeduta);
    //richiedente.doppie.splice(indexCedutaDoppie, 1);
    //richiedente.carte.splice(indexCedutaCarte, 1);

    var cartaRichiesta = accetta.doppie[indexRichiestaDoppie];
    //richiedente.carte.push(cartaRichiesta);
    //accetta.doppie.splice(indexRichiestaDoppie, 1);
    //accetta.carte.splice(indexRichiestaCarte, 1);

    //funzione che toglie dagli scambi porposti da 'accetta':
    // - quelli in cui chiedeva la carta che ha accettato
    // - quelli dove metteva in cambio la figurina che ha ceduto
    // NB: non deve cancellare se ci sono più doppie
    function cancellaScambi(){
      if(!controllaDoppie(cartaRichiesta, accetta)){
        for(let j=0; j<scambi.length; j++){  
          if(scambi[j].utenteAccetta = accetta.username){
            console.log(scambi[j].cartaCeduta + "==" + cartaRichiesta.name)
            console.log(scambi[j].cartaRichiesta + "==" + cartaCeduta.name)
            if(scambi[j].cartaCeduta == cartaRichiesta.name || scambi[j].cartaRichiesta == cartaCeduta.name){
              scambi.splice(j, 1);
              j--
              console.log("Cancella scambi splice")
            }
          }
        }  
      }
    }

    //funzione che controlla se ci sono doppie uguali, in modo da capire se cancellare
    // o meno tutti gli scambi con quella carta fatto dall'utente
    function controllaDoppie(carta, user){
      var count = 0;
      for(let k=0; k<user.doppie.length; k++){
        if(carta.name == user.doppie[k].name){
          count++;
        }
      }
      if(count > 1){
        return true;
      }
      return false;
    }

    //console.log(cartaCeduta);
    for (let i = 0; i < scambi.length; i++) {
      console.log(scambi[i].cartaCeduta);
      console.log(cartaCeduta.name);
      console.log(scambi[i].utenteRichiedente);
      console.log(richiedente.username);
      console.log(i);
      if (scambi[i].cartaCeduta == cartaCeduta.name && scambi[i].utenteRichiedente == richiedente.username) {
        var temp = null;
        temp = scambi[i];
        scambi[i] = scambi[scambi.length -1];
        scambi[scambi.length-1] = temp;
        scambi.length--;
        i--;
        console.log("VIWBASNDOV SBKZ");
        console.log(controllaDoppie(cartaCeduta, richiedente));
        console.log(richiedente);
        if (controllaDoppie(cartaCeduta, richiedente)){
          console.log("aaaaaa");
          break;
        }
      }
    }
    

    cancellaScambi();
    console.log(scambi);

    //aggiorno il localStorage
    //localStorage.setItem('utenti', JSON.stringify(utenti));
    //localStorage.setItem('scambi', JSON.stringify(scambi));

    alert("Scambio effettuato con successo");
    //getDataHome2();
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
      nameCed = nameCed.substring(0, 12) + '...';
    }
    h2Ced.innerHTML = nameCed
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