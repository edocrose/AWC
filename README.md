# AWC

1 - la homepage è formata dalle figurine dell'utente
2 - i button nella nav bar portano a: Comprare pacchetto, Comprare Figurina, Scambio, Dati Utente
3 - Per il comprare figurina, usare sito indiano, aggiungendo prezzo e un bottone per comprare (NB: bisogna vedere i crediti come tenerli in memoria)



//funzione per visualizzare la figurina
button.addEventListener(
  "click",
  (getRsult = async () => {
    if (input.value.trim().length < 1) {
      alert("Input cannot be blank");
    }
    showContainer.innerHTML = "";
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${input.value}`;

    const response = await fetch(url);
    const jsonData = await response.json();
    jsonData.data["results"].forEach((element) => {
      showContainer.innerHTML = `<div class="card-container">
        <div class="container-character-image">
        <img src="${
          element.thumbnail["path"] + "." + element.thumbnail["extension"]
        }"/></div>
        <div class="character-name">${element.name}</div>
        <div class="character-description">${element.description}</div>
        </div>`;
    });
  })
);
