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
    element.classList.toggle('show-content');
}
