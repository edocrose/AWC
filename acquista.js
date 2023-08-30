function trovaUtente() {
    const urlParams = new URLSearchParams(window.location.search);

    const username = urlParams.get("username");
    var utenti = localStorage.getItem('utenti');
    var json = JSON.parse(utenti);
    var data = null;
    for (var i = 0; i < json.length; i++) {
        if (json[i].username == username) {
            data = json[i];
            break;
        }
    }

    return data;
}

document.addEventListener("DOMContentLoaded", function () {
    const pacchetti = document.querySelectorAll(".descrizione");
    var utente = trovaUtente();

    pacchetti.forEach(function (pacchetto) {
        const minusButton = pacchetto.querySelector(".minus");
        const plusButton = pacchetto.querySelector(".plus");
        const quantitySpan = pacchetto.querySelector(".quantity");
        const priceSpan = pacchetto.querySelector(".price");
        const acquistaButton = pacchetto.querySelector(".acquista");

        let quantity = 1;
        const basePrice = 1; // Cambia questo valore al prezzo base del pacchetto

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
            return priceSpan.textContent
        }

        //funzione acquista
        acquistaButton.addEventListener("click", function(){
            const packPrice = updatePrice();
            if (utente.credits >= packPrice) {
                const urlParams = new URLSearchParams(window.location.search);
                const username = urlParams.get("username");
                var utenti = localStorage.getItem('utenti');
                var json = JSON.parse(utenti);
                var data = null;
                for (var i = 0; i < json.length; i++) {
                    if (json[i].username == username) {
                        json[i].credits -= packPrice
                        data = json[i]
                        break;
                    }
                }
                var mod = JSON.stringify(json);
                localStorage.setItem('utenti', mod);
                alert("Punti rimanenti: "+ data.credits);
            } else {
                console.log("Punti insufficienti per l'acquisto")
            }
        });

    });
});

document.addEventListener("DOMContentLoaded", function () {
    const creditsQuantityButtons = document.querySelector(".credits .quantity-buttons");
    const creditsQuantitySpan = document.querySelector(".credits .quantity");
    const totalPriceSpan = document.querySelector(".credits .total-price");

    let creditsQuantity = 1;
    const creditPrice = 1; // Cambia questo valore al prezzo di ciascun credito

    creditsQuantityButtons.addEventListener("click", function (event) {
        if (event.target.classList.contains("minus")) {
            if (creditsQuantity > 1) {
                creditsQuantity--;
            }
        } else if (event.target.classList.contains("plus")) {
            creditsQuantity++;
        }

        creditsQuantitySpan.textContent = creditsQuantity;
        updateTotalPrice();
    });

    function updateTotalPrice() {
        const total = creditsQuantity * creditPrice;
        totalPriceSpan.textContent = total;
    }
});

