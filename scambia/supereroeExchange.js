let input = document.getElementById("superheroExchange");
let listContainer = document.querySelector(".listaRichiesta");

let date = new Date();
//console.log(date.getTime());

const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];

function displayWords(value) {
  input.value = value;
  removeElements();
}
 
function removeElements() {
  listContainer.innerHTML = "";
}

input.addEventListener("keyup", async () => {
  removeElements();
  if (input.value.length < 4) {
    return false;
  }

  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${input.value}`;

  const response = await fetch(url);
  const jsonData = await response.json();

  jsonData.data["results"].forEach((result) => {
    let name = result.name;
    let div = document.createElement("div");
    div.style.cursor = "pointer";
    div.classList.add("autocomplete-items");
    div.setAttribute("onclick", "displayWords('" + name + "')");
    let word = "<b>" + name.substr(0, input.value.length) + "</b>";
    word += name.substr(input.value.length);
    div.innerHTML = `<p class="item">${word}</p>`;
    listContainer.appendChild(div);
  });
});


//PARTE PER LA SCELTA DELLA DOPPIA DA SCAMBIARE
let cambio = document.getElementById("superheroDouble");
let listDoppie = document.querySelector(".listaDoppie");

function displayWords2(value) {
  cambio.value = value;
  removeElements2();
}
 
function removeElements2() {
  listDoppie.innerHTML = "";
}

cambio.addEventListener("keyup", async () => {
  removeElements2();
  if (cambio.value.length < 4) {
    return false;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  var utenti = localStorage.getItem('utenti');
  var json = JSON.parse(utenti);
  var doppie = null;
  for (var i = 0; i < json.length; i++) {
      if (json[i].username == username) {
          doppie = json[i].doppie;
          break;
      }
  }

  function inizioCon(element){
    return element.name.startsWith(cambio.value);
  }

  var fill = doppie.filter(inizioCon);

  for(let i=0; i<fill.length; i++){
    let name = fill[i].name;

    let div = document.createElement("div");
    var img = document.createElement('img');
    img.classList.add('list-img');
    img.alt = '...';
    img.src = fill[i].thumbnail.path + "." + fill[i].thumbnail.extension;
    div.style.cursor = "pointer";
    div.classList.add("autocomplete-items");
    div.setAttribute("onclick", "displayWords2('" + name + "')");
    //let word = "<b>" + name.substr(0, cambio.value.length) + "</b>";
    let word = name.substr(0, cambio.value.length);
    word += name.substr(cambio.value.length);
    var text = document.createElement("p");
    text.classList.add('item');
    text.textContent=word;


    div.appendChild(img);
    div.appendChild(text);
    //div.innerHTML = `<p class="item">${word}</p>`;
    
    listDoppie.appendChild(div);
  };
});