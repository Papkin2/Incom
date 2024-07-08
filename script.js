function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    const boxes = document.querySelectorAll('.box');

    menu.classList.toggle('show');
}


function toggleBackground(button) {
    const textBox = button.closest('.text-box');
    textBox.classList.toggle('show-text');
}

document.addEventListener("DOMContentLoaded", function() {
    const textBoxHeaders = document.querySelectorAll(".text-box h2");

    textBoxHeaders.forEach(header => {
        header.addEventListener("click", function() {
            header.scrollIntoView({ behavior: "smooth", block: "start" });
            toggleBackground(header);
        });
    });
});
