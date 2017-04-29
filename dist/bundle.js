/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_1 = __webpack_require__(0);
var ToDoList = function (_super) {
    __extends(ToDoList, _super);
    function ToDoList() {
        var _this = _super.call(this) || this;
        _this.state = {
            toDoList: [_this.getNewItem()],
            filter: "SHOW_ALL"
        };
        return _this;
    }
    ToDoList.prototype.getNewItem = function () {
        return {
            value: "",
            done: false
        };
    };
    ToDoList.prototype.handleToDoInputChange = function (index, ev) {
        var newValue = ev.target.value;
        var newState = this.state;
        newState.toDoList[index].value = newValue;
        this.setState(newState);
    };
    ToDoList.prototype.toDoList = function () {
        var _this = this;
        // onChange={this.setState(this.state)}
        var toDoList = this.state.toDoList.map(function (item, index) {
            return React.createElement("tr", { key: index }, React.createElement("td", null, React.createElement("input", { type: "checkbox", onChange: _this.toggleStatus.bind(_this, index), checked: item.done })), React.createElement("td", null, React.createElement("input", { type: "text", value: item.value, onChange: _this.handleToDoInputChange.bind(_this, index) })));
        });
        var toDoListFiltered = toDoList.filter(function (item, index) {
            return _this.state.filter === "SHOW_ALL" || !_this.state.toDoList[index].done;
        });
        return React.createElement("table", null, React.createElement("thead", null, toDoListFiltered.length > 0 ? React.createElement("tr", null, React.createElement("th", null, "Done"), React.createElement("th", null, "ToDo")) : React.createElement("tr", null, React.createElement("th", { colSpan: 2 }, "All done!"))), React.createElement("tbody", null, toDoListFiltered));
    };
    ToDoList.prototype.toggleStatus = function (index) {
        var state = this.state;
        state.toDoList[index].done = !state.toDoList[index].done;
        this.setState(state);
    };
    ToDoList.prototype.addListItem = function () {
        var toDoList = this.state.toDoList;
        toDoList.push(this.getNewItem());
        this.setState({ toDoList: toDoList });
    };
    ToDoList.prototype.toggleFilter = function (ev) {
        var target = ev.target;
        var checked = target.checked;
        this.setState({ filter: checked ? "SHOW_UNDONE" : "SHOW_ALL" });
    };
    ToDoList.prototype.render = function () {
        var toDoList = this.toDoList();
        return React.createElement("div", null, React.createElement("h1", null, "ToDo list:"), toDoList, React.createElement("br", null), React.createElement("button", { type: "button", onClick: this.addListItem.bind(this) }, "Add new item"), React.createElement("label", null, React.createElement("input", { type: "checkbox", onChange: this.toggleFilter.bind(this) }), "Hide done items"));
    };
    return ToDoList;
}(react_1.Component);
exports.default = ToDoList;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var toDoList_1 = __webpack_require__(1);
ReactDOM.render(React.createElement(toDoList_1.default, null), document.getElementById('root'));

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map