/* Abre e fecha menu lateral em modo mobile */

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list") ? menuMobile.classList.replace("bi-list", "bi-x") : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle('menu-nav-active');
});

/* Fecha menu lateral ao clicar em algum item e muda o icone para list */

const navItem = document.querySelectorAll('.nav-item');

navItem.forEach(item => {
    item.addEventListener('click', () => {
        menuMobile.classList.replace("bi-x", "bi-list");
        body.classList.remove('menu-nav-active');
    });
});


// Animar os itens na tela que tiverem o atributo data-anime

const itens = document.querySelectorAll('[data-anime]');

const animeScroll = () => {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

    itens.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
    });
};

animeScroll();

window.addEventListener('scroll', () => {
    animeScroll();
});