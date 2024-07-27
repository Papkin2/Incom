// menu nawigacji
function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    const boxes = document.querySelectorAll('.box');

    menu.classList.toggle('show');
}

// boxy
function handleHeaderClick(event, header) {
    // Zapobiega propagacji zdarzenia kliknięcia do rodzica
    event.stopPropagation();
    // Zmienia tło
    toggleBackground(header);
}

function toggleBackground(header) {
    const textBox = header.closest('.text-box');
    textBox.classList.toggle('show-text');
}

function toggleBox(element) {
    // Sprawdzamy, czy tekst jest już wyświetlany
    if (!element.classList.contains('show-text')) {
        element.classList.add('show-text');
    }
}

// smooth przewijanie 
document.addEventListener("DOMContentLoaded", function() {
    const textBoxHeaders = document.querySelectorAll(".text-box h2");

    textBoxHeaders.forEach(header => {
        header.addEventListener("click", function() {
            header.scrollIntoView({ behavior: "smooth", block: "start" });
            toggleBackground(header);
        });
    });
});
