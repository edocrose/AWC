var json = localStorage.getItem('pacchetto');
var pack = JSON.parse(json);

const i1 = document.querySelector(".i1")
const imageElement1 = document.createElement("img");
imageElement1.src = pack[0].thumbnail.path+"."+pack[0].thumbnail.extension;
imageElement1.id = pack[0].id
const nameElement1 = document.createElement("h2");
nameElement1.textContent = pack[0].name;
const descrizione1 = pack[0].description
const comics1 = pack[0].comics.items.name
const series1 = pack[0].series.items.name
const events1 = pack[0].events.items.name

// Aggiungi gli elementi alla pagina dei dettagli
i1.appendChild(imageElement1);
i1.appendChild(nameElement1);


const i2 = document.querySelector(".i2")
const imageElement2 = document.createElement("img");
imageElement2.src = pack[1].thumbnail.path+"."+pack[1].thumbnail.extension;
const nameElement2 = document.createElement("h2");
nameElement2.textContent = pack[1].name;
const descrizione2 = pack[1].description
const comics2 = pack[1].comics.items.name
const series2 = pack[1].series.items.name
const events2 = pack[1].events.items.name
// Aggiungi gli elementi alla pagina dei dettagli
i2.appendChild(imageElement2);
i2.appendChild(nameElement2);


const i3 = document.querySelector(".i3")
const imageElement3 = document.createElement("img");
imageElement3.src = pack[2].thumbnail.path+"."+pack[2].thumbnail.extension;
const nameElement3 = document.createElement("h2");
nameElement3.textContent = pack[2].name;
const descrizione3 = pack[2].description
const comics3 = pack[2].comics.items.name
const series3 = pack[2].series.items.name
const events3 = pack[2].events.items.name
// Aggiungi gli elementi alla pagina dei dettagli
i3.appendChild(imageElement3);
i3.appendChild(nameElement3);
 

const i4 = document.querySelector(".i4")
const imageElement4 = document.createElement("img");
imageElement4.src = pack[3].thumbnail.path+"."+pack[3].thumbnail.extension;
const nameElement4 = document.createElement("h2");
nameElement4.textContent = pack[3].name;
const descrizione4 = pack[3].description
const comics4 = pack[3].comics.items.name
const series4 = pack[3].series.items.name
const events4 = pack[3].events.items.name
// Aggiungi gli elementi alla pagina dei dettagli
i4.appendChild(imageElement4);
i4.appendChild(nameElement4);


const i5 = document.querySelector(".i5")
const imageElement5 = document.createElement("img");
imageElement5.src = pack[4].thumbnail.path+"."+pack[4].thumbnail.extension;
const nameElement5 = document.createElement("h2");
nameElement5.textContent = pack[4].name;
const descrizione5 = pack[4].description
const comics5 = pack[4].comics.items.name
const series5 = pack[4].series.items.name
const events5 = pack[4].events.items.name
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

function mostraDettagliCarta1(){
    const carta1 = {
        immagine: imageElement1.src, 
        nome: nameElement1,
        descrizione: descrizione1,
        comics: comics1,
        series: series1,
        events: events1
    }
    localStorage.setItem("cartaDettagli", JSON.stringify(carta1))
    window.location.href = "cartaDettagli.html"
}

function mostraDettagliCarta2(){
    const carta2 = {
        immagine: imageElement2.src, 
        nome: nameElement2,
        descrizione: descrizione2,
        comics: comics2,
        series: series2,
        events: events2
    }
    localStorage.setItem("cartaDettagli", JSON.stringify(carta2))
    window.location.href = "cartaDettagli.html"
}

function mostraDettagliCarta3(){
    const carta3 = {
        immagine: imageElement3.src, 
        nome: nameElement3,
        descrizione: descrizione3,
        comics: comics3,
        series: series3,
        events: events3
    }
    localStorage.setItem("cartaDettagli", JSON.stringify(carta3))
    window.location.href = "cartaDettagli.html"
}

function mostraDettagliCarta4(){
    const carta4 = {
        immagine: imageElement4.src, 
        nome: nameElement4,
        descrizione: descrizione4,
        comics: comics4,
        series: series4,
        events: events4
    }
    localStorage.setItem("cartaDettagli", JSON.stringify(carta4))
    window.location.href = "cartaDettagli.html"
}

function mostraDettagliCarta5(){
    const carta5 = {
        immagine: imageElement5.src, 
        nome: nameElement5,
        descrizione: descrizione5,
        comics: comics5,
        series: series5,
        events: events5
    }
    localStorage.setItem("cartaDettagli", JSON.stringify(carta5))
    window.location.href = "cartaDettagli.html"
}