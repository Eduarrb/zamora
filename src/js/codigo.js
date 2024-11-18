import axios from 'axios';
import Swal from 'sweetalert2';
const expBox = document.querySelector('.experiencia__container__imgbox');
const menu = document.querySelector('.header__nav__menu');
const iconMenu = document.querySelector('.header__nav__iconMenu');
const menuContainer = document.querySelector('.header__nav__menu__container');
const form = document.querySelector('.contacto__container__form');

const modalImgBox = document.querySelector(
    '.experienciaModal__box__col__imgbox'
);

iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('active');
    menuContainer.classList.toggle('active');
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
        autoWidth: true,
        // nav:true,
        center: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            400: {
                items: 1,
            },
            500: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
            1200: {
                items: 8,
            },
        },
    });
});

form.addEventListener('submit', async e => {
    e.preventDefault();
    const csrf = e.target[0].value;
    const nombres = document.querySelector('.nombres');
    const apellidos = document.querySelector('.apellidos');
    const empresa = document.querySelector('.empresa');
    const correo = document.querySelector('.correo');
    const mensaje = document.querySelector('.mensaje');

    const error__nombres = document.querySelector('.error__nombres');
    const error__apellidos = document.querySelector('.error__apellidos');
    const error__empresa = document.querySelector('.error__empresa');
    const error__correo = document.querySelector('.error__correo');
    const error__mensaje = document.querySelector('.error__mensaje');

    error__nombres.textContent = '';
    error__apellidos.textContent = '';
    error__empresa.textContent = '';
    error__correo.textContent = '';
    error__mensaje.textContent = '';

    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    const errores = {};

    if (nombres.value === '') {
        errores.nombres = 'El campo nombres no debe estar vacio';
    }
    if (apellidos.value === '') {
        errores.apellidos = 'El campo apellidos no debe estar vacio ';
    }
    if (empresa.value === '') {
        errores.empresa = 'El campo empresa no debe estar vacio ';
    }
    if (correo.value === '' || !validEmail.test(correo.value)) {
        errores.correo =
            'El campo correo no debe estar vacio o no es el formato correcto';
    }
    if (mensaje.value === '') {
        errores.mensaje = 'El campo mensaje no debe estar vacio ';
    }
    if (Object.keys(errores).length >= 1) {
        if (errores.nombres) {
            error__nombres.textContent = errores.nombres;
        }
        if (errores.apellidos) {
            error__apellidos.textContent = errores.apellidos;
        }
        if (errores.empresa) {
            error__empresa.textContent = errores.empresa;
        }
        if (errores.correo) {
            error__correo.textContent = errores.correo;
        }
        if (errores.mensaje) {
            error__mensaje.textContent = errores.mensaje;
        }
    } else {
        console.log('todo ok');
        axios
            .post(`${location.origin}?_csrf=${csrf}`, {
                nombres: nombres.value,
                apellidos: apellidos.value,
                empresa: empresa.value,
                correo: correo.value,
                mensaje: mensaje.value,
            })
            .then(res => {
                console.log(res);
                if(res.status === 200) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Tu mensaje ha sido enviado\n Pronto nos contactaremos',
                        showConfirmButton: false,
                        timer: 2500,
                    });
                    nombres.value = '';
                    apellidos.value = '';
                    empresa.value = '';
                    correo.value = '';
                    mensaje.value = '';
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
});
