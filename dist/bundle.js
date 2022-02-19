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
        this.onChange = function () { };
    }
    DataStore.prototype.toggleItem = function (id) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === id) {
                item.checked = !item.checked;
                this.save();
                return;
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
                        if (json.items) {
                            this.items = json.items;
                        }
                        this.onChange();
                        // Set checker
                        if (this.intervalID) {
                            clearInterval(this.intervalID);
                        }
                        this.intervalID = setInterval(function () {
                            _this.load(name);
                        }, 1000);
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
    var _loop_1 = function (item) {
        var holder = document.createElement('div');
        var button = document.createElement('button');
        var label = document.createElement('strong');
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
        buttonHolder.appendChild(holder);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWluLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENoZWNrSXRlbSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhU3RvcmUge1xuICAgIGl0ZW1zOiBDaGVja0l0ZW1bXSA9IFtdO1xuICAgIG9uQ2hhbmdlID0gKCkgPT4geyB9O1xuXG4gICAgcHJpdmF0ZSBpbnRlcnZhbElEOiBudW1iZXI7XG5cbiAgICB0b2dnbGVJdGVtKGlkOiBudW1iZXIpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc2F2ZSgpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgZmV0Y2goXCJhcGkvc2F2ZUl0ZW1zLnBocD9kYXRhPVwiICsgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmV0LnRleHQoKTtcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcih0ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCByZXQgPSBhd2FpdCBmZXRjaChcImFwaS9sb2FkSXRlbXMucGhwP25hbWU9XCIgKyBuYW1lKTtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJldC5qc29uKCk7XG5cbiAgICAgICAgaWYgKGpzb24uaXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBqc29uLml0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuXG4gICAgICAgIC8vIFNldCBjaGVja2VyXG4gICAgICAgIGlmICh0aGlzLmludGVydmFsSUQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElEKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWQobmFtZSk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEYXRhU3RvcmUgfSBmcm9tIFwiLi9EYXRhU3RvcmVcIjtcblxuY29uc3Qgc3RvcmUgPSBuZXcgRGF0YVN0b3JlKCk7XG5zdG9yZS5vbkNoYW5nZSA9ICgpID0+IHtcbiAgICBwb3B1bGF0ZUJ1dHRvbnMoKTtcbn07XG5cbndpbmRvdy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgc3RvcmUubG9hZChcImRhdGFcIik7XG59O1xuXG5mdW5jdGlvbiBwb3B1bGF0ZUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgYnV0dG9uSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbkhvbGRlcicpO1xuICAgIGJ1dHRvbkhvbGRlci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzdG9yZS5pdGVtcykge1xuICAgICAgICBjb25zdCBob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJykgYXMgSFRNTExhYmVsRWxlbWVudDtcblxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY2hlY2stYnRuJyk7XG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWxhYmVsJyk7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGl0ZW0ubGFiZWw7XG5cbiAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzdG9yZS50b2dnbGVJdGVtKGl0ZW0uaWQpKTtcblxuICAgICAgICBob2xkZXIuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBob2xkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgaG9sZGVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgICAgICBidXR0b25Ib2xkZXIuYXBwZW5kQ2hpbGQoaG9sZGVyKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4udHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=