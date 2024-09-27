const experienciasBox = document.querySelector(
    '.experiencia__container__imgbox'
);
const experienciaModal = document.querySelector('.experienciaModal');

async function obtenerJson() {
    try {
        const res = await axios.get('data/experiencias.json');
        return res.data.experiencias;
    } catch (error) {
        console.log(error);
    }
}

const renderExperiencias = exp => {
    return `
        <article class="experiencia__container__imgbox__item">
            <img src="img/experiencias/${exp.img01}" alt="${exp.nombre}">
            <h3 class="experiencia__container__imgbox__item--title">${exp.nombre}</h3>
            <a href="#" class="experiencia__container__imgbox__item--link" data-id="${exp.id}">ver más</a>
        </article>
    `;
};

const imprimirExperiencias = async () => {
    const res = await obtenerJson();
    const experiencias = res.map(renderExperiencias).join('');
    // console.log(experiencias)
    experienciasBox.innerHTML = experiencias;
};

imprimirExperiencias();

const imprimirModal = async id => {
    const res = await obtenerJson();
    const exp = res.find(e => e.id === +id);

    const modalData = `
        <div class="experienciaModal__box">
            <div class="experienciaModal__box__col">
                <div class="experienciaModal__box__col__blank"></div>
                <div class="experienciaModal__box__col__imgbox">
                    <div class="experienciaModal__box__col__imgbox__item active">
                        <img src="img/experiencias/${exp.img01}" alt="${exp.nombre}">
                    </div>
                    <div class="experienciaModal__box__col__imgbox__item">
                        <img src="img/experiencias/${exp.img02}" alt="${exp.nombre}">
                    </div>
                    <div class="experienciaModal__box__col__imgbox__item">
                        <img src="img/experiencias/${exp.img03}" alt="${exp.nombre}">
                    </div>
                    <div class="experienciaModal__box__col__imgbox__item">
                        <img src="img/experiencias/${exp.img04}" alt="${exp.nombre}">
                    </div>
                </div>
            </div>
            <div class="experienciaModal__box__col pt-5 pb-5 pl-5 pr-5">
                <h2 class="experienciaModal__box__col--title mb-3">${exp.nombre}</h2>
                <p class="experienciaModal__box__col--descri">
                    ${exp.descripcion}
                </p>
            </div>
            <div class="experienciaModal__box--close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
    `;
    experienciaModal.innerHTML = modalData;

    const modalImgBox = document.querySelector(
        '.experienciaModal__box__col__imgbox'
    );
    const expModalClose = document.querySelector('.experienciaModal__box--close');


    modalImgBox.addEventListener('click', e => {
        Array.from(modalImgBox.children).forEach(i => {
            i.classList.remove('active');
        });
        if (e.target.tagName === 'IMG') {
            console.log('hiciste click');
            e.target.parentElement.classList.add('active');
        }
    });

    expModalClose.addEventListener('click', () => {
        experienciaModal.classList.remove('active');
    });
};

experienciasBox.addEventListener('click', e => {
    console.log('hiciste click');
    if (
        e.target.classList.contains(
            'experiencia__container__imgbox__item--link'
        )
    ) {
        e.preventDefault();
        const id = e.target.dataset.id;
        imprimirModal(id);
        experienciaModal.classList.add('active');
    }
});
