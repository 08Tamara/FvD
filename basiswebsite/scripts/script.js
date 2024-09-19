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