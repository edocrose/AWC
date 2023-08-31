var json = localStorage.getItem('pacchetto');
var pack = JSON.parse(json);

const i1 = document.querySelector(".i1")
const imageElement1 = document.createElement("img");
imageElement1.src = pack[0].thumbnail.path+"."+pack[0].thumbnail.extension;
const nameElement1 = document.createElement("h2");
nameElement1.textContent = pack[0].name;

// Aggiungi gli elementi alla pagina dei dettagli
i1.appendChild(imageElement1);
i1.appendChild(nameElement1);


const i2 = document.querySelector(".i2")
const imageElement2 = document.createElement("img");
imageElement2.src = pack[1].thumbnail.path+"."+pack[1].thumbnail.extension;
const nameElement2 = document.createElement("h2");
nameElement2.textContent = pack[1].name;
// Aggiungi gli elementi alla pagina dei dettagli
i2.appendChild(imageElement2);
i2.appendChild(nameElement2);


const i3 = document.querySelector(".i3")
const imageElement3 = document.createElement("img");
imageElement3.src = pack[2].thumbnail.path+"."+pack[2].thumbnail.extension;
const nameElement3 = document.createElement("h2");
nameElement3.textContent = pack[2].name;
// Aggiungi gli elementi alla pagina dei dettagli
i3.appendChild(imageElement3);
i3.appendChild(nameElement3);


const i4 = document.querySelector(".i4")
const imageElement4 = document.createElement("img");
imageElement4.src = pack[3].thumbnail.path+"."+pack[3].thumbnail.extension;
const nameElement4 = document.createElement("h2");
nameElement4.textContent = pack[3].name;
// Aggiungi gli elementi alla pagina dei dettagli
i4.appendChild(imageElement4);
i4.appendChild(nameElement4);


const i5 = document.querySelector(".i5")
const imageElement5 = document.createElement("img");
imageElement5.src = pack[4].thumbnail.path+"."+pack[4].thumbnail.extension;
const nameElement5 = document.createElement("h2");
nameElement5.textContent = pack[4].name;
// Aggiungi gli elementi alla pagina dei dettagli
i5.appendChild(imageElement5);
i5.appendChild(nameElement5);

function redirectHome(){
    localStorage.removeItem('pacchetto');
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");
    window.location.href = "home.html?username="+username;
}

function redirectNegozio(){
    localStorage.removeItem('pacchetto');
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");
    window.location.href = "negozio.html?username="+username;
}