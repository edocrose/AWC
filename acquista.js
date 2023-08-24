document.addEventListener("DOMContentLoaded", function () {
    const pacchetti = document.querySelectorAll(".descrizione");

    pacchetti.forEach(function (pacchetto) {
        const minusButton = pacchetto.querySelector(".minus");
        const plusButton = pacchetto.querySelector(".plus");
        const quantitySpan = pacchetto.querySelector(".quantity");
        const priceSpan = pacchetto.querySelector(".price");

        let quantity = 1;
        const basePrice = 5; // Cambia questo valore al prezzo base del pacchetto

        minusButton.addEventListener("click", function () {
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
                updatePrice();
            }
        });

        plusButton.addEventListener("click", function () {
            quantity++;
            quantitySpan.textContent = quantity;
            updatePrice();
        });

        function updatePrice() {
            const totalPrice = basePrice * quantity;
            priceSpan.textContent = totalPrice;
        }
    });
});
