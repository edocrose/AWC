//nome,immagine, descrizione, comics, serie, eventi
var json = localStorage.getItem('carta1')
var carta = JSON.parse(json);

const contenuto = document.querySelector(".contenuto")
const immagine = document.createElement("img")
immagine.src = carta.immagine
const nome = document.createElement("h2")
nome = carta.nome
const descrizione = document.createElement("p")
descrizione = carta.descrizione
const comics = document.createElement("p")
comics = carta.comics
const series = document.createElement("p")
series = carta.series
const events = document.createElement("p")
events = carta.events

contenuto.appendChild(immagine)
contenuto.appendChild(nome)
contenuto.appendChild(descrizione)
contenuto.appendChild(comics)
contenuto.appendChild(series)
contenuto.appendChild(events)