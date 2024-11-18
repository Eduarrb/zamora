/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/experiencias.js":
/*!********************************!*\
  !*** ./src/js/experiencias.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst experienciasBox = document.querySelector(\r\n    '.experiencia__container__imgbox'\r\n);\r\nconst experienciaModal = document.querySelector('.experienciaModal');\r\n\r\nasync function obtenerJson() {\r\n    try {\r\n        const res = await axios.get('data/experiencias.json');\r\n        return res.data.experiencias;\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n}\r\n\r\nconst renderExperiencias = exp => {\r\n    return `\r\n        <article class=\"experiencia__container__imgbox__item\">\r\n            <img src=\"img/experiencias/${exp.img01}\" alt=\"${exp.nombre}\">\r\n            <h3 class=\"experiencia__container__imgbox__item--title\">${exp.nombre}</h3>\r\n            <a href=\"#\" class=\"experiencia__container__imgbox__item--link\" data-id=\"${exp.id}\">ver más</a>\r\n        </article>\r\n    `;\r\n};\r\n\r\nconst imprimirExperiencias = async () => {\r\n    const res = await obtenerJson();\r\n    const experiencias = res.map(renderExperiencias).join('');\r\n    // console.log(experiencias)\r\n    experienciasBox.innerHTML = experiencias;\r\n};\r\n\r\nimprimirExperiencias();\r\n\r\nconst imprimirModal = async id => {\r\n    const res = await obtenerJson();\r\n    const exp = res.find(e => e.id === +id);\r\n\r\n    const modalData = `\r\n        <div class=\"experienciaModal__box\">\r\n            <div class=\"experienciaModal__box__col\">\r\n                <div class=\"experienciaModal__box__col__blank\"></div>\r\n                <div class=\"experienciaModal__box__col__imgbox\">\r\n                    <div class=\"experienciaModal__box__col__imgbox__item active\">\r\n                        <img src=\"img/experiencias/${exp.img01}\" alt=\"${exp.nombre}\">\r\n                    </div>\r\n                    <div class=\"experienciaModal__box__col__imgbox__item\">\r\n                        <img src=\"img/experiencias/${exp.img02}\" alt=\"${exp.nombre}\">\r\n                    </div>\r\n                    <div class=\"experienciaModal__box__col__imgbox__item\">\r\n                        <img src=\"img/experiencias/${exp.img03}\" alt=\"${exp.nombre}\">\r\n                    </div>\r\n                    <div class=\"experienciaModal__box__col__imgbox__item\">\r\n                        <img src=\"img/experiencias/${exp.img04}\" alt=\"${exp.nombre}\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"experienciaModal__box__col pt-5 pb-5 pl-5 pr-5\">\r\n                <h2 class=\"experienciaModal__box__col--title mb-3\">${exp.nombre}</h2>\r\n                <p class=\"experienciaModal__box__col--descri\">\r\n                    ${exp.descripcion}\r\n                </p>\r\n            </div>\r\n            <div class=\"experienciaModal__box--close\">\r\n                <i class=\"fa-solid fa-xmark\"></i>\r\n            </div>\r\n        </div>\r\n    `;\r\n    experienciaModal.innerHTML = modalData;\r\n\r\n    const modalImgBox = document.querySelector(\r\n        '.experienciaModal__box__col__imgbox'\r\n    );\r\n    const expModalClose = document.querySelector('.experienciaModal__box--close');\r\n\r\n\r\n    modalImgBox.addEventListener('click', e => {\r\n        Array.from(modalImgBox.children).forEach(i => {\r\n            i.classList.remove('active');\r\n        });\r\n        if (e.target.tagName === 'IMG') {\r\n            console.log('hiciste click');\r\n            e.target.parentElement.classList.add('active');\r\n        }\r\n    });\r\n\r\n    expModalClose.addEventListener('click', () => {\r\n        experienciaModal.classList.remove('active');\r\n    });\r\n};\r\n\r\nexperienciasBox.addEventListener('click', e => {\r\n    console.log('hiciste click');\r\n    if (\r\n        e.target.classList.contains(\r\n            'experiencia__container__imgbox__item--link'\r\n        )\r\n    ) {\r\n        e.preventDefault();\r\n        const id = e.target.dataset.id;\r\n        imprimirModal(id);\r\n        experienciaModal.classList.add('active');\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://zamora/./src/js/experiencias.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/experiencias.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;