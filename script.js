function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    const boxes = document.querySelectorAll('.box');

    menu.classList.toggle('show');

    // Ukrycie otwartych boxów po kliknięciu na ikonę rozwijania menu
    boxes.forEach(box => {
        box.classList.remove('show-content');
    });
}

function toggleBox(element) {
    const boxes = document.querySelectorAll('.box');

    // Hide other boxes
    boxes.forEach(box => {
        if (box !== element) {
            box.classList.remove('show-content');
        }
    });

    // Toggle the visibility of the current box
    element.classList.toggle('show-content');
}
