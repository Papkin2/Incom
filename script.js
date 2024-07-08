function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    const boxes = document.querySelectorAll('.box');

    menu.classList.toggle('show');
}


function toggleBackground(button) {
    const textBox = button.closest('.text-box');
    textBox.classList.toggle('show-text');
}
