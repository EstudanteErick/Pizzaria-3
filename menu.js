const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navMenu = document.querySelector('.nav-menu');

mobileMenuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuIcon.querySelector('.icon');
    if (navMenu.classList.contains('active')) {
        icon.src = 'Imagens/close_white_36dp.svg';
    } else {
        icon.src = 'Imagens/menu_white_36dp.svg';
    }
});
