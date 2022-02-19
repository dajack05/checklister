/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DataStore.ts":
/*!**************************!*\
  !*** ./src/DataStore.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.DataStore = exports.CheckItem = void 0;
var CheckItem = /** @class */ (function () {
    function CheckItem() {
    }
    return CheckItem;
}());
exports.CheckItem = CheckItem;
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.items = [];
    }
    DataStore.FromJson = function (json) {
        if (!json.items) {
            console.error("Failed to parse JSON. Missing Items.", json);
            return;
        }
        var store = new DataStore();
        for (var _i = 0, _a = json.items; _i < _a.length; _i++) {
            var item = _a[_i];
            store.items.push(item);
        }
        return store;
    };
    return DataStore;
}());
exports.DataStore = DataStore;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var DataStore_1 = __webpack_require__(/*! ./DataStore */ "./src/DataStore.ts");
window.onload = function () {
    loadItems();
};
var store = new DataStore_1.DataStore();
function loadItems() {
    return __awaiter(this, void 0, void 0, function () {
        var ret, json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("api/loadItems.php")];
                case 1:
                    ret = _a.sent();
                    return [4 /*yield*/, ret.json()];
                case 2:
                    json = _a.sent();
                    store = DataStore_1.DataStore.FromJson(json);
                    populateButtons();
                    return [2 /*return*/];
            }
        });
    });
}
function publishChanges() {
    return __awaiter(this, void 0, void 0, function () {
        var ret, text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("api/saveItems.php?data=" + JSON.stringify(store))];
                case 1:
                    ret = _a.sent();
                    return [4 /*yield*/, ret.text()];
                case 2:
                    text = _a.sent();
                    if (text.length > 0) {
                        console.error(text);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function populateButtons() {
    var buttonHolder = document.getElementById('buttonHolder');
    buttonHolder.innerHTML = "";
    var _loop_1 = function (item) {
        var elem = document.createElement('button');
        elem.innerText = item.label;
        elem.classList.add('check');
        if (item.checked) {
            elem.classList.add('checked');
        }
        elem.addEventListener('click', function () {
            item.checked = !item.checked;
            publishChanges();
            populateButtons();
        });
        buttonHolder.appendChild(elem);
    };
    for (var _i = 0, _a = store.items; _i < _a.length; _i++) {
        var item = _a[_i];
        _loop_1(item);
    }
}


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO2dCQUFKLElBQUk7S0FhZDtBQUNMLENBQUM7Ozs7Ozs7VUN4Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9EYXRhU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2hlY2tJdGVtIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgY2hlY2tlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIERhdGFTdG9yZSB7XG4gICAgaXRlbXM6IENoZWNrSXRlbVtdID0gW107XG5cbiAgICBzdGF0aWMgRnJvbUpzb24oanNvbjogYW55KSB7XG4gICAgICAgIGlmICghanNvbi5pdGVtcykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBwYXJzZSBKU09OLiBNaXNzaW5nIEl0ZW1zLlwiLCBqc29uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0b3JlID0gbmV3IERhdGFTdG9yZSgpO1xuXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBqc29uLml0ZW1zKSB7XG4gICAgICAgICAgICBzdG9yZS5pdGVtcy5wdXNoKGl0ZW0gYXMgQ2hlY2tJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGF0YVN0b3JlIH0gZnJvbSBcIi4vRGF0YVN0b3JlXCI7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgbG9hZEl0ZW1zKCk7XG59O1xuXG5sZXQgc3RvcmUgPSBuZXcgRGF0YVN0b3JlKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRJdGVtcygpIHtcbiAgICBjb25zdCByZXQgPSBhd2FpdCBmZXRjaChcImFwaS9sb2FkSXRlbXMucGhwXCIpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXQuanNvbigpO1xuICAgIHN0b3JlID0gRGF0YVN0b3JlLkZyb21Kc29uKGpzb24pO1xuICAgIHBvcHVsYXRlQnV0dG9ucygpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwdWJsaXNoQ2hhbmdlcygpIHtcbiAgICBjb25zdCByZXQgPSBhd2FpdCBmZXRjaChcImFwaS9zYXZlSXRlbXMucGhwP2RhdGE9XCIgKyBKU09OLnN0cmluZ2lmeShzdG9yZSkpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXQudGV4dCgpO1xuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcih0ZXh0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQnV0dG9ucygpIHtcbiAgICBjb25zdCBidXR0b25Ib2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uSG9sZGVyJyk7XG4gICAgYnV0dG9uSG9sZGVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHN0b3JlLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWxlbS5pbm5lclRleHQgPSBpdGVtLmxhYmVsO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gICAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xuICAgICAgICAgICAgcHVibGlzaENoYW5nZXMoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlQnV0dG9ucygpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnV0dG9uSG9sZGVyLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==