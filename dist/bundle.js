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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function() {

eval("var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nwindow.onload = () => {\n    loadItems();\n};\nlet store = new DataStore();\nfunction loadItems() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const ret = yield fetch(\"api/loadItems.php\");\n        const json = yield ret.json();\n        store = DataStore.FromJson(json);\n        populateButtons();\n    });\n}\nfunction populateButtons() {\n    const buttonHolder = document.getElementById('buttonHolder');\n    for (const item of store.items) {\n        const elem = document.createElement('button');\n        elem.innerText = item.label;\n        elem.classList.add('check');\n        if (item.checked) {\n            elem.classList.add('checked');\n        }\n        elem.addEventListener('click', () => {\n            item.checked = !item.checked;\n        });\n        buttonHolder.appendChild(elem);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;