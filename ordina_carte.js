document.addEventListener("DOMContentLoaded", function () {
    const characterContainer = document.getElementById("characterContainer");
    const characterCards = Array.from(characterContainer.getElementsByClassName("character-card"));

    // Ordina le carte in ordine alfabetico basato sul testo dell'elemento <h2>
    characterCards.sort(function (cardA, cardB) {
        const nameA = cardA.querySelector("h2").textContent;
        const nameB = cardB.querySelector("h2").textContent;
        return nameA.localeCompare(nameB);
    });

    // Rimuovi le carte dall'HTML
    characterCards.forEach(function (card) {
        characterContainer.removeChild(card);
    });

    // Aggiungi le carte ordinate nuovamente al container
    characterCards.forEach(function (card) {
        characterContainer.appendChild(card);
    });
});
