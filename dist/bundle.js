/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DataStore.ts":
/*!**************************!*\
  !*** ./src/DataStore.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports) {


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
exports.DataStore = exports.CheckList = exports.CheckItem = void 0;
var CheckItem = /** @class */ (function () {
    function CheckItem() {
    }
    return CheckItem;
}());
exports.CheckItem = CheckItem;
var CheckList = /** @class */ (function () {
    function CheckList() {
    }
    return CheckList;
}());
exports.CheckList = CheckList;
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.lists = [];
        this.onChange = function () { };
    }
    DataStore.prototype.toggleItem = function (id) {
        for (var _i = 0, _a = this.lists; _i < _a.length; _i++) {
            var list = _a[_i];
            for (var _b = 0, _c = list.items; _b < _c.length; _b++) {
                var item = _c[_b];
                if (item.id === id) {
                    item.checked = !item.checked;
                    this.save();
                    return;
                }
            }
        }
    };
    DataStore.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("api/saveItems.php?data=" + JSON.stringify(this))];
                    case 1:
                        ret = _a.sent();
                        return [4 /*yield*/, ret.text()];
                    case 2:
                        text = _a.sent();
                        if (text.length > 0) {
                            console.error(text);
                        }
                        this.onChange();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataStore.prototype.load = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var ret, json;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("api/loadItems.php?name=" + name)];
                    case 1:
                        ret = _a.sent();
                        return [4 /*yield*/, ret.json()];
                    case 2:
                        json = _a.sent();
                        if (json.lists) {
                            this.lists = json.lists;
                        }
                        this.onChange();
                        // Set checker
                        if (this.intervalID) {
                            clearInterval(this.intervalID);
                        }
                        this.intervalID = setInterval(function () {
                            _this.load(name);
                        }, 10000);
                        return [2 /*return*/];
                }
            });
        });
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
var store = new DataStore_1.DataStore();
store.onChange = function () {
    populateButtons();
};
window.onload = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        store.load("data");
        return [2 /*return*/];
    });
}); };
function populateButtons() {
    var buttonHolder = document.getElementById('buttonHolder');
    buttonHolder.innerHTML = "";
    for (var _i = 0, _a = store.lists; _i < _a.length; _i++) {
        var list = _a[_i];
        var listDiv = document.createElement('div');
        var listLabel = document.createElement('h1');
        listLabel.innerText = list.label;
        listDiv.classList.add('box');
        listDiv.appendChild(listLabel);
        var _loop_1 = function (item) {
            var holder = document.createElement('div');
            var button = document.createElement('button');
            var label = document.createElement('h2');
            button.classList.add('check-btn');
            label.classList.add('check-label');
            label.innerText = item.label;
            if (item.checked) {
                button.classList.add('checked');
                label.classList.add('checked');
            }
            button.addEventListener('click', function () { return store.toggleItem(item.id); });
            holder.classList.add('item');
            holder.appendChild(button);
            holder.appendChild(label);
            listDiv.appendChild(holder);
        };
        for (var _b = 0, _c = list.items; _b < _c.length; _b++) {
            var item = _c[_b];
            _loop_1(item);
        }
        buttonHolder.appendChild(listDiv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFMUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFuQmhDLEtBQW1CLFVBQVUsRUFBVixTQUFJLENBQUMsS0FBSyxFQUFWLGNBQVUsRUFBVixJQUFVO1lBQXhCLElBQU0sSUFBSTtvQkFBSixJQUFJO1NBb0JkO1FBRUQsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNyQztBQUNMLENBQUM7Ozs7Ozs7VUM5Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9EYXRhU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2hlY2tJdGVtIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgY2hlY2tlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIENoZWNrTGlzdCB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGl0ZW1zOiBDaGVja0l0ZW1bXTtcbn1cblxuZXhwb3J0IGNsYXNzIERhdGFTdG9yZSB7XG4gICAgbGlzdHM6IENoZWNrTGlzdFtdID0gW107XG4gICAgb25DaGFuZ2UgPSAoKSA9PiB7IH07XG5cbiAgICBwcml2YXRlIGludGVydmFsSUQ6IG51bWJlcjtcblxuICAgIHRvZ2dsZUl0ZW0oaWQ6IG51bWJlcikge1xuICAgICAgICBmb3IgKGNvbnN0IGxpc3Qgb2YgdGhpcy5saXN0cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzYXZlKCkge1xuICAgICAgICBjb25zdCByZXQgPSBhd2FpdCBmZXRjaChcImFwaS9zYXZlSXRlbXMucGhwP2RhdGE9XCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXQudGV4dCgpO1xuICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKHRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IGZldGNoKFwiYXBpL2xvYWRJdGVtcy5waHA/bmFtZT1cIiArIG5hbWUpO1xuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmV0Lmpzb24oKTtcblxuICAgICAgICBpZiAoanNvbi5saXN0cykge1xuICAgICAgICAgICAgdGhpcy5saXN0cyA9IGpzb24ubGlzdHM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG5cbiAgICAgICAgLy8gU2V0IGNoZWNrZXJcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJRCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSUQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZChuYW1lKTtcbiAgICAgICAgfSwgMTAwMDApO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEYXRhU3RvcmUgfSBmcm9tIFwiLi9EYXRhU3RvcmVcIjtcblxuY29uc3Qgc3RvcmUgPSBuZXcgRGF0YVN0b3JlKCk7XG5zdG9yZS5vbkNoYW5nZSA9ICgpID0+IHtcbiAgICBwb3B1bGF0ZUJ1dHRvbnMoKTtcbn07XG5cbndpbmRvdy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgc3RvcmUubG9hZChcImRhdGFcIik7XG59O1xuXG5mdW5jdGlvbiBwb3B1bGF0ZUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgYnV0dG9uSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbkhvbGRlcicpO1xuICAgIGJ1dHRvbkhvbGRlci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAoY29uc3QgbGlzdCBvZiBzdG9yZS5saXN0cykge1xuICAgICAgICBjb25zdCBsaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGxpc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJykgYXMgSFRNTEhlYWRpbmdFbGVtZW50O1xuICAgICAgICBsaXN0TGFiZWwuaW5uZXJUZXh0ID0gbGlzdC5sYWJlbDtcblxuICAgICAgICBsaXN0RGl2LmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuICAgICAgICBsaXN0RGl2LmFwcGVuZENoaWxkKGxpc3RMYWJlbCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QuaXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJykgYXMgSFRNTEhlYWRpbmdFbGVtZW50O1xuXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY2hlY2stYnRuJyk7XG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdjaGVjay1sYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gaXRlbS5sYWJlbDtcblxuICAgICAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3RvcmUudG9nZ2xlSXRlbShpdGVtLmlkKSk7XG5cbiAgICAgICAgICAgIGhvbGRlci5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICAgICAgICBob2xkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGhvbGRlci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQoaG9sZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbkhvbGRlci5hcHBlbmRDaGlsZChsaXN0RGl2KTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4udHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=