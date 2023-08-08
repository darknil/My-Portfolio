const sideBarButton = document.getElementById('toggleButton');
const sideBar = document.getElementById('sidebar');
const navButtons = document.querySelectorAll('.nav_buttons');

sideBarButton.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (window.innerWidth <= 912) { // Проверяем ширину экрана
            sideBar.classList.toggle('close');
        }
    });
});