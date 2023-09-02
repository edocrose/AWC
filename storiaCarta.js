//nome,immagine, descrizione, comics, serie, eventi
var json = localStorage.getItem('pacchetto')
var pack = JSON.parse(json);

const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get("carta");
const carta = pack[index];

const contenuto = document.querySelector(".text")
const immagine = document.createElement("img")
immagine.src = carta.thumbnail.path+"."+carta.thumbnail.extension
const nome = document.createElement("h2")
nome.textContent = carta.name
const descrizione = document.createElement("p")
descrizione.textContent = carta.description

const comics = document.querySelector(".comics")
const ul_com = document.createElement('ul');
if(carta.comics.items.length == 0){
    const p = document.createElement("p");
    p.textContent="Comics Not Found XDXDXDXD"
    comics.appendChild(p)
} else {
    for(let i=0; i<carta.comics.items.length; i++){
        const li = document.createElement('li');
        li.textContent = carta.comics.items[i].name;
        ul_com.appendChild(li);
    }
}


const series = document.querySelector(".series")
const ul_ser = document.createElement('ul');
if(carta.series.items.length == 0){
    const p = document.createElement("p");
    p.textContent="Series Not Found XDXDXDXD"
    series.appendChild(p)
} else {
    for(let i=0; i<carta.series.items.length; i++){
        const li = document.createElement('li');
        li.textContent = carta.series.items[i].name;
        ul_ser.appendChild(li);
    }
}

const events = document.querySelector(".events")
const ul_ev = document.createElement('ul');
if(carta.events.items.length == 0){
    const p = document.createElement("p");
    p.textContent="Events Not Found XDXDXDXD"
    events.appendChild(p)
}
for(let i=0; i<carta.events.items.length; i++){
    const li = document.createElement('li');
    li.textContent = carta.events.items[i].name;
    ul_ev.appendChild(li);
}



contenuto.appendChild(immagine)
contenuto.appendChild(nome)
contenuto.appendChild(descrizione)
comics.appendChild(ul_com)
series.appendChild(ul_ser)
events.appendChild(events_ev)