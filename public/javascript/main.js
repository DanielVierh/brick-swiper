/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project-template/./src/scss/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/script.js */ \"./src/js/script.js\");\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\n\n\n\n//# sourceURL=webpack://project-template/./src/index.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("const btn_setBrick = document.getElementById('btn_setBrick');\nconst bricks = document.querySelectorAll('.brick');\nconst brick_wrapper = document.getElementById('brick_wrapper');\nconst btn_restart = document.getElementById('btn_restart');\nconst modal = document.getElementById('modal');\nconst modal_lbl = document.getElementById('modal_lbl');\nlet x_anker = 0;\nlet new_width = 300;\nconst looser_width = 3;\nlet stack_height = 20;\nlet round = 1;\nconst winnerRound = 30;\nlet velocity = 3;\n\nconst brickColors = ['red', 'yellow', 'green', 'blue', 'lightblue', 'tomato'];\n\nbtn_setBrick.addEventListener('click', () => {\n    const current_brick = document.querySelector(\".current\").getBoundingClientRect();\n    const old_brick = document.querySelector(\".old\").getBoundingClientRect();\n\n    // Abbruchstelle rechts\n    if ((current_brick.x + current_brick.width) > (old_brick.x + old_brick.width)) {\n        const demolition_right = (current_brick.x + current_brick.width) - (old_brick.x + old_brick.width);\n        new_width = current_brick.width - demolition_right;\n        //*  check if game is over   \n        check_game_status();\n        x_anker = (current_brick.x + demolition_right);\n        document.querySelector(\".current\").left = x_anker;\n        //* CSS Class handler\n        classhandler();\n        //* create new Brick    \n        create_new_Brick();\n\n        //* Abbruchstelle links\n    } else if ((current_brick.x) < (old_brick.x)) {\n        const demolition_left = old_brick.x - current_brick.x;\n        new_width = current_brick.width - demolition_left;\n        // * check if game is over\n        check_game_status();\n        x_anker = old_brick.x;\n        //* CSS Class handler\n        classhandler();\n        //* create new Brick    \n        create_new_Brick();\n    } \n    round++;\n    if(round === winnerRound) {\n        modal.classList.add('active');\n        modal_lbl.innerHTML = 'Gewonnen 😄';\n        modal_lbl.style.color = 'green';\n        document.getElementById('lbl_roundInfo').innerHTML = '30 Runden geschafft';\n        document.querySelector(\".current\").classList.remove('swipe');\n    }\n    document.getElementById('lbl_round').innerHTML = `Brick ${round}/${winnerRound}`\n})\n\nfunction check_game_status() {\n    if(new_width <= 3) {\n        modal.classList.add('active');\n        modal_lbl.innerHTML = 'Game Over';\n        document.getElementById('lbl_roundInfo').innerHTML = `${round} Runden geschafft`;\n        document.querySelector(\".current\").classList.remove('swipe');\n    }\n}\n\nfunction classhandler() {\n    document.querySelector(\".current\").classList.remove('swipe');\n    document.querySelector(\".old\").classList.remove('old');\n    document.querySelector(\".current\").classList.add('old');\n    document.querySelector(\".current\").style.width = `${new_width}px`;\n    document.querySelector(\".current\").classList.remove('current');\n}\n\nfunction create_new_Brick() {\n    let new_Brick = document.createElement('div');\n    new_Brick.classList.add('brick');\n    new_Brick.classList.add('swipe');\n    new_Brick.classList.add('current');\n    new_Brick.style.width = `${new_width}px`;\n    new_Brick.style.left = `translateX(${x_anker}px)`;\n    stack_height = stack_height + 20;\n    new_Brick.style.bottom = `${stack_height}px`;\n    const brick_colorIndex = Math.floor(Math.random() * brickColors.length) + 1;\n    new_Brick.style.backgroundColor = `${brickColors[brick_colorIndex]}`;\n    const random_velocity = (Math.random() * 0.15).toFixed(2);\n    console.log('random_velocity', random_velocity);\n    velocity = velocity -= random_velocity;\n    console.log('velocity', velocity);\n    new_Brick.style.animationDuration = `${velocity}s`;\n    brick_wrapper.insertBefore(new_Brick, brick_wrapper.firstChild);\n}\n\n//* Neustart\nbtn_restart.addEventListener('click', ()=> {\n    window.location.reload();\n})\n\n\n\n//# sourceURL=webpack://project-template/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;