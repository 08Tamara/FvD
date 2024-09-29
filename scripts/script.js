// JavaScript Document
console.log("hi");

document.querySelectorAll('.format-button').forEach(button => {
    button.addEventListener('click', function() {
        const format = this.getAttribute('data-format');
        document.getElementById('formatText').innerText = 'Format: ' + format;
    });
});

document.querySelectorAll('.thumbnail-container img').forEach(img => {
    img.addEventListener('click', function() {
        const imageSrc = this.getAttribute('data-image');
        changeImage(imageSrc); 
    });
});

function changeImage(imageSrc) {
    document.getElementById('largeImage').src = imageSrc; 
}

let currentQuantity = 1;
const maxQuantity = 10; 

document.getElementById('quantityButton').addEventListener('click', function(event) {
    const quantitySpan = document.getElementById('quantity');

    const isDecrement = event.target.textContent.trim() === "-";

    if (isDecrement) {
        if (currentQuantity > 1) {
            currentQuantity--; 
        }
    } else {
        if (currentQuantity < maxQuantity) {
            currentQuantity++; 
        }
    }

    quantitySpan.innerText = currentQuantity; 
});



// script.js
const toggle = document.getElementById('mode-toggle');
const body = document.body;

// Controleer opgeslagen modus bij het laden van de pagina
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggle.checked = true; // Zet de schakelaar aan
}

// Functie om modus te wijzigen
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark'); // Bewaar de geselecteerde modus
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light'); // Bewaar de geselecteerde modus
    }
});

// gevraagd aan chatgpt