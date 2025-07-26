const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navMenu = document.querySelector('.nav-menu');
const menuGrid = document.querySelector('.menu-grid');

// Carrega os dados do menu do arquivo data.js
function loadMenu() {
    menuData.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.alt;
        menuItem.appendChild(img);

        const h3 = document.createElement('h3');
        h3.textContent = item.title;
        menuItem.appendChild(h3);

        const p = document.createElement('p');
        p.textContent = item.description;
        menuItem.appendChild(p);

        const weight = document.createElement('p');
        weight.classList.add('weight');
        weight.textContent = item.weight;
        menuItem.appendChild(weight);

        const price = document.createElement('span');
        price.classList.add('price');
        price.textContent = item.price;
        menuItem.appendChild(price);

        const link = document.createElement('a');
        link.href = '#';
        link.classList.add('btn', 'btn-small');
        link.textContent = 'Fazer pedido';
        menuItem.appendChild(link);

        menuGrid.appendChild(menuItem);
    });
}

// Event listener para o ícone do menu mobile
mobileMenuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuIcon.querySelector('.icon');
    if (navMenu.classList.contains('active')) {
        icon.src = 'Imagens/close_white_36dp.svg';
    } else {
        icon.src = 'Imagens/menu_white_36dp.svg';
    }
});

// Carrega o menu quando a página é carregada
window.addEventListener('DOMContentLoaded', loadMenu);