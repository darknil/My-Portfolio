const sideBarButton = document.getElementById('toggleButton');
const sideBar = document.getElementById('sidebar');
const navButtons = document.querySelectorAll('.nav_buttons');


window.onload = () => {
    if(window.innerWidth <= 912){
        sideBar.classList.toggle('close');
    }
};

sideBarButton.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        sideBar.classList.toggle('close');
    });
});
window.addEventListener('resize', () => {
    if (window.innerWidth <= 912) { 
        sideBar.classList.add('close'); 
    } else if(window.innerWidth > 912){
        sideBar.classList.remove('close');
    }
});