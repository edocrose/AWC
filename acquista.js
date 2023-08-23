document.addEventListener("DOMContentLoaded", function () {
    const acquistaButton = document.getElementById("acquistaButton");
    const pacchetti = document.querySelectorAll(".pacchetto");

    pacchetti.forEach(function (pacchetto) {
        const minusButton = pacchetto.querySelector(".minus");
        const plusButton = pacchetto.querySelector(".plus");
        const quantitySpan = pacchetto.querySelector(".quantity");

        let quantity = 0;

        minusButton.addEventListener("click", function () {
            if (quantity > 0) {
                quantity--;
                quantitySpan.textContent = quantity;
            }
        });

        plusButton.addEventListener("click", function () {
            quantity++;
            quantitySpan.textContent = quantity;
        });
    });

    acquistaButton.addEventListener("click", function () {
        // Implementa il tuo codice per l'acquisto dei pacchetti
        // Puoi utilizzare la variabile 'quantity' per ottenere la quantità selezionata
    });
});
