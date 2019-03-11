(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("entidiaprompt", [], factory);
	else if(typeof exports === 'object')
		exports["entidiaprompt"] = factory();
	else
		root["entidiaprompt"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/entidiaprompt.js":
/*!******************************!*\
  !*** ./src/entidiaprompt.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = entidiaprompt;

function entidiaprompt(options) {
  /* eslint-disable */
  var target = '';
  var name = options.name ? options.name : 'prompt';
  var url = options.url ? options.url : '';
  var text = options.text ? options.text : "This is just a simple notification.";
  var buttonText = options.buttonText ? options.buttonText : "OK, I got it!";
  var width = options.width ? options.width : '300px';
  var bottom = options.bottom ? options.bottom : '32px';
  var right = options.right ? options.right : '32px';
  var left = options.left ? options.left : 'unset';
  var colorOne = options.colorOne ? options.colorOne : '#5e8d00';
  var colorTwo = options.colorTwo ? options.colorTwo : '#89c400';
  var saveInCookies = typeof options.saveInCookies === 'boolean' ? options.saveInCookies : true;
  var id = "entidiaprompt-".concat(name.toLowerCase().replace(/[^a-zA-Z]+/g, "-"));
  var html_button = options.url ? "<a href=\"".concat(url, "\" class=\"ep-button\" target=\"").concat(target, "\">").concat(buttonText, "</a>") : "#"; //const html_button = `<a href="${url}" class="ep-button" target="${target}">${buttonText}</a>`;

  var html = "<div class=\"entidiaprompt\" id=\"".concat(id, "\"> <span class=\"entidianotify__close\" id=\"").concat(id, "-close\">\xD7</span><p class=\"entidianotify__text\">").concat(text, "</p> ").concat(html_button, "</div>");
  var css = "\n  .ep-button {\n    background: linear-gradient(65deg,".concat(colorOne, ",").concat(colorTwo, ");\n    font-family: sans-serif;\n    color: #fff !important;\n    display: block;\n    letter-spacing: 0;\n    font-weight: 700;\n    line-height: 16px;\n    font-size: 14px;\n    text-transform: uppercase;\n    text-decoration: none!important;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n    justify-content: center;\n    padding: 16px 16px;\n    text-align: center;\n    white-space: nowrap;\n    box-shadow: 0 8px 24px rgba(32,43,54,.12);\n    transition: all .3s ease;\n    margin-top: 16px;\n    font-size: 14px;\n  }\n  .ep-button:hover {\n    box-shadow: 0 6px 24px rgba(32,43,54,.4);\n  }\n  .entidiaprompt {\n    position: fixed;\n    background-color: #fff;\n    padding: 24px;\n    box-shadow: 0 4px 16px rgba(16, 31, 59, 0.16);\n    z-index: 10;\n    font-size: 16px;\n    color: #41454b;\n    font-family: sans-serif;\n    opacity: 1;\n    transition: all .3s ease;\n  }\n  .entidianotify__close {\n    position: absolute;\n    right: 16px;\n    top: 8px;\n    cursor: pointer;\n  }\n  .entidianotify__text {\n    margin: 0;\n  }\n  @media (max-width: 768px) {\n    .entidiaprompt {\n      width: calc(100% - 48px) !important;\n      bottom: 0 !important;\n      right: 0 !important;\n      left: 0 !important;\n      box-shadow: 0 -4px 16px rgba(16, 31, 59, 0.16) !important;\n    }\n  }");

  if (!window.localStorage.getItem(id) || saveInCookies == false) {
    createModal(html);
    setStyle(id, bottom, left, right, width);
    addClosingEvent("".concat(id, "-close"));

    if (url == '') {
      addClosingEvent("".concat(id, "-button"));
    }

    addStyle(css);
  }
  /* eslint-enable */

}

function createModal(html) {
  var prompt = document.createElement('div');
  prompt.innerHTML = html;
  document.body.appendChild(prompt);
}

function setStyle(id, bottom, left, right, width) {
  var promptModal = document.getElementById(id);
  promptModal.style.bottom = bottom;
  promptModal.style.left = left ? left : 'unset';
  promptModal.style.right = right ? right : 'unset';
  promptModal.style.width = width;
}

function addClosingEvent(id) {
  var promptModal = document.getElementById(id);
  var entidiapromptCloseButton = document.getElementById(id);
  entidiapromptCloseButton.addEventListener('click', function () {
    promptModal.style.opacity = 0;
    setTimeout(function () {
      promptModal.parentNode.removeChild(promptModal);
      window.localStorage.setItem(id, true);
    }, 300);
  });
}

function addStyle(css) {
  var linkElement = document.createElement('link');
  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('type', 'text/css');
  linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
  document.head.appendChild(linkElement);
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _entidiaprompt = _interopRequireDefault(__webpack_require__(/*! ./entidiaprompt.js */ "./src/entidiaprompt.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _entidiaprompt.default;
/* eslint-disable */

exports.default = _default;

(function (window) {
  window.entidiaprompt = _entidiaprompt.default;
})(window);
/* eslint-enable */


module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbnRpZGlhcHJvbXB0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9lbnRpZGlhcHJvbXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VudGlkaWFwcm9tcHQvLi9zcmMvZW50aWRpYXByb21wdC5qcyIsIndlYnBhY2s6Ly9lbnRpZGlhcHJvbXB0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImVudGlkaWFwcm9tcHQiLCJvcHRpb25zIiwidGFyZ2V0IiwibmFtZSIsInVybCIsInRleHQiLCJidXR0b25UZXh0Iiwid2lkdGgiLCJib3R0b20iLCJyaWdodCIsImxlZnQiLCJjb2xvck9uZSIsImNvbG9yVHdvIiwic2F2ZUluQ29va2llcyIsImlkIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiaHRtbF9idXR0b24iLCJodG1sIiwiY3NzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNyZWF0ZU1vZGFsIiwic2V0U3R5bGUiLCJhZGRDbG9zaW5nRXZlbnQiLCJhZGRTdHlsZSIsInByb21wdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInByb21wdE1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImVudGlkaWFwcm9tcHRDbG9zZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInNldEl0ZW0iLCJsaW5rRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlYWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0FBd0JwQixFQUF4QixDQUFqQztBQUVBc0IsMEJBQXdCLENBQUNDLGdCQUF6QixDQUEwQyxPQUExQyxFQUFtRCxZQUFNO0FBQ3ZESixlQUFXLENBQUNFLEtBQVosQ0FBa0JHLE9BQWxCLEdBQTRCLENBQTVCO0FBQ0FDLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZOLGlCQUFXLENBQUNPLFVBQVosQ0FBdUJDLFdBQXZCLENBQW1DUixXQUFuQztBQUNBYixZQUFNLENBQUNDLFlBQVAsQ0FBb0JxQixPQUFwQixDQUE0QjVCLEVBQTVCLEVBQWdDLElBQWhDO0FBQ0QsS0FIUyxFQUdQLEdBSE8sQ0FBVjtBQUlELEdBTkQ7QUFPRDs7QUFFRCxTQUFTWSxRQUFULENBQWtCUCxHQUFsQixFQUF1QjtBQUNyQixNQUFNd0IsV0FBVyxHQUFHZixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBcEI7QUFFQWMsYUFBVyxDQUFDQyxZQUFaLENBQXlCLEtBQXpCLEVBQWdDLFlBQWhDO0FBQ0FELGFBQVcsQ0FBQ0MsWUFBWixDQUF5QixNQUF6QixFQUFpQyxVQUFqQztBQUNBRCxhQUFXLENBQUNDLFlBQVosQ0FBeUIsTUFBekIsRUFBaUMsaUNBQWlDQyxrQkFBa0IsQ0FBQzFCLEdBQUQsQ0FBcEY7QUFDQVMsVUFBUSxDQUFDa0IsSUFBVCxDQUFjZCxXQUFkLENBQTBCVyxXQUExQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SEQ7Ozs7O0FBR0E7Ozs7QUFDQSxDQUFDLFVBQVN2QixNQUFULEVBQWdCO0FBQ2RBLFFBQU0sQ0FBQ3BCLGFBQVA7QUFDRCxDQUZGLEVBRUlvQixNQUZKO0FBR0MiLCJmaWxlIjoiZW50aWRpYXByb21wdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZW50aWRpYXByb21wdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJlbnRpZGlhcHJvbXB0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImVudGlkaWFwcm9tcHRcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbnRpZGlhcHJvbXB0KG9wdGlvbnMpIHtcblxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBjb25zdCB0YXJnZXQgPSAnJztcbiAgY29uc3QgbmFtZSA9IG9wdGlvbnMubmFtZSA/IG9wdGlvbnMubmFtZSA6ICdwcm9tcHQnO1xuICBjb25zdCB1cmwgPSBvcHRpb25zLnVybCA/IG9wdGlvbnMudXJsIDogJycgO1xuICBjb25zdCB0ZXh0ID0gb3B0aW9ucy50ZXh0ID8gb3B0aW9ucy50ZXh0IDogYFRoaXMgaXMganVzdCBhIHNpbXBsZSBub3RpZmljYXRpb24uYDtcbiAgY29uc3QgYnV0dG9uVGV4dCA9IG9wdGlvbnMuYnV0dG9uVGV4dCA/IG9wdGlvbnMuYnV0dG9uVGV4dCA6IGBPSywgSSBnb3QgaXQhYDtcbiAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gb3B0aW9ucy53aWR0aCA6ICczMDBweCc7XG4gIGNvbnN0IGJvdHRvbSA9IG9wdGlvbnMuYm90dG9tID8gb3B0aW9ucy5ib3R0b20gOiAnMzJweCc7XG4gIGNvbnN0IHJpZ2h0ID0gb3B0aW9ucy5yaWdodCA/IG9wdGlvbnMucmlnaHQgOiAnMzJweCc7XG4gIGNvbnN0IGxlZnQgPSBvcHRpb25zLmxlZnQgPyBvcHRpb25zLmxlZnQgOiAndW5zZXQnO1xuICBjb25zdCBjb2xvck9uZSA9IG9wdGlvbnMuY29sb3JPbmUgPyBvcHRpb25zLmNvbG9yT25lIDogJyM1ZThkMDAnO1xuICBjb25zdCBjb2xvclR3byA9IG9wdGlvbnMuY29sb3JUd28gPyBvcHRpb25zLmNvbG9yVHdvIDogJyM4OWM0MDAnO1xuICBjb25zdCBzYXZlSW5Db29raWVzID0gdHlwZW9mIG9wdGlvbnMuc2F2ZUluQ29va2llcyAgPT09ICdib29sZWFuJyA/IG9wdGlvbnMuc2F2ZUluQ29va2llcyA6IHRydWU7XG4gIGNvbnN0IGlkID0gYGVudGlkaWFwcm9tcHQtJHtuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXpBLVpdKy9nLCBcIi1cIil9YDtcbiAgY29uc3QgaHRtbF9idXR0b24gPSBvcHRpb25zLnVybCA/IGA8YSBocmVmPVwiJHt1cmx9XCIgY2xhc3M9XCJlcC1idXR0b25cIiB0YXJnZXQ9XCIke3RhcmdldH1cIj4ke2J1dHRvblRleHR9PC9hPmAgOiBgI2AgO1xuICAvL2NvbnN0IGh0bWxfYnV0dG9uID0gYDxhIGhyZWY9XCIke3VybH1cIiBjbGFzcz1cImVwLWJ1dHRvblwiIHRhcmdldD1cIiR7dGFyZ2V0fVwiPiR7YnV0dG9uVGV4dH08L2E+YDtcbiAgY29uc3QgaHRtbCA9IGA8ZGl2IGNsYXNzPVwiZW50aWRpYXByb21wdFwiIGlkPVwiJHtpZH1cIj4gPHNwYW4gY2xhc3M9XCJlbnRpZGlhbm90aWZ5X19jbG9zZVwiIGlkPVwiJHtpZH0tY2xvc2VcIj7Dlzwvc3Bhbj48cCBjbGFzcz1cImVudGlkaWFub3RpZnlfX3RleHRcIj4ke3RleHR9PC9wPiAke2h0bWxfYnV0dG9ufTwvZGl2PmA7XG4gIGNvbnN0IGNzcyA9IGBcbiAgLmVwLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDY1ZGVnLCR7Y29sb3JPbmV9LCR7Y29sb3JUd299KTtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDMyLDQzLDU0LC4xMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5lcC1idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDI0cHggcmdiYSgzMiw0Myw1NCwuNCk7XG4gIH1cbiAgLmVudGlkaWFwcm9tcHQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDE2LCAzMSwgNTksIDAuMTYpO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzQxNDU0YjtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbiAgfVxuICAuZW50aWRpYW5vdGlmeV9fY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTZweDtcbiAgICB0b3A6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmVudGlkaWFub3RpZnlfX3RleHQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuZW50aWRpYXByb21wdCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCkgIWltcG9ydGFudDtcbiAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTRweCAxNnB4IHJnYmEoMTYsIDMxLCA1OSwgMC4xNikgIWltcG9ydGFudDtcbiAgICB9XG4gIH1gO1xuXG5cbiAgaWYoIXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCkgfHwgc2F2ZUluQ29va2llcyA9PSBmYWxzZSkge1xuICAgIGNyZWF0ZU1vZGFsKGh0bWwpO1xuICAgIHNldFN0eWxlKGlkLCBib3R0b20sIGxlZnQsIHJpZ2h0LCB3aWR0aCk7XG4gICAgYWRkQ2xvc2luZ0V2ZW50KGAke2lkfS1jbG9zZWApO1xuICAgIGlmKHVybCA9PSAnJykge1xuICAgICAgYWRkQ2xvc2luZ0V2ZW50KGAke2lkfS1idXR0b25gKTtcbiAgICB9XG4gICAgYWRkU3R5bGUoY3NzKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlICovXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKGh0bWwpIHtcbiAgY29uc3QgcHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgcHJvbXB0LmlubmVySFRNTCA9IGh0bWw7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvbXB0KTtcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUoaWQsIGJvdHRvbSwgbGVmdCwgcmlnaHQsIHdpZHRoKSB7XG4gIGNvbnN0IHByb21wdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gIHByb21wdE1vZGFsLnN0eWxlLmJvdHRvbSA9IGJvdHRvbTtcbiAgcHJvbXB0TW9kYWwuc3R5bGUubGVmdCA9IGxlZnQgPyBsZWZ0IDogJ3Vuc2V0JztcbiAgcHJvbXB0TW9kYWwuc3R5bGUucmlnaHQgPSByaWdodCA/IHJpZ2h0IDogJ3Vuc2V0JztcbiAgcHJvbXB0TW9kYWwuc3R5bGUud2lkdGggPSB3aWR0aDtcbn1cblxuZnVuY3Rpb24gYWRkQ2xvc2luZ0V2ZW50KGlkKSB7XG4gIGNvbnN0IHByb21wdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBjb25zdCBlbnRpZGlhcHJvbXB0Q2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgZW50aWRpYXByb21wdENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb21wdE1vZGFsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcHJvbXB0TW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwcm9tcHRNb2RhbCk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oaWQsIHRydWUpO1xuICAgIH0sIDMwMCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShjc3MpIHtcbiAgY29uc3QgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgJ2RhdGE6dGV4dC9jc3M7Y2hhcnNldD1VVEYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGNzcykpO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcbn1cbiIsImltcG9ydCBlbnRpZGlhcHJvbXB0IGZyb20gJy4vZW50aWRpYXByb21wdC5qcyc7XG5leHBvcnQgZGVmYXVsdCBlbnRpZGlhcHJvbXB0O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuKGZ1bmN0aW9uKHdpbmRvdyl7XG4gICB3aW5kb3cuZW50aWRpYXByb21wdCA9IGVudGlkaWFwcm9tcHQ7XG4gfSkod2luZG93KVxuIC8qIGVzbGludC1lbmFibGUgKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=