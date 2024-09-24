const expBox = document.querySelector('.experiencia__container__imgbox');
const expModal = document.querySelector('.experienciaModal');
const expModalClose = document.querySelector('.experienciaModal__box--close');
const menu = document.querySelector('.header__nav__menu');
const iconMenu = document.querySelector('.header__nav__iconMenu');
const menuContainer = document.querySelector('.header__nav__menu__container');

iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('active');
    menuContainer.classList.toggle('active');
})

expBox.addEventListener('click', e => {
    if (
        e.target.classList.contains(
            'experiencia__container__imgbox__item--link'
        )
    ) {
        e.preventDefault();
        expModal.classList.add('active');
    }
});

expModalClose.addEventListener('click', () => {
    expModal.classList.remove('active');
});

window.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
        expModal.classList.remove('active');
    }
});

window.addEventListener('scroll', e => {
    if (scrollY > 0) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoWidth:true,
        // nav:true,
        center: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            400: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5
            },
            1200: {
                items: 8,
            },
        },
    });
});
