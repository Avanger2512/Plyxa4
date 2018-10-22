/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	eval("// import $ from \"../../node_modules/jquery\";\n\nlet input = $('.js-input');\n\ninput.parent().addClass('is-empty');\n\ninput.on('keyup', function () {\n    if ($(this).val() == \"\") {\n        $(this).parent().addClass(\"is-empty\");\n    } else {\n        $(this).parent().removeClass(\"is-empty\");\n    }\n});\n\nlet burger = $('.js-burger');\n\nburger.on('click', () => {\n    $('.header__right').toggleClass('is-open');\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9qcXVlcnlcIjtcblxubGV0IGlucHV0ID0gJCgnLmpzLWlucHV0Jyk7XG5cblxuaW5wdXRcbiAgLnBhcmVudCgpXG4gIC5hZGRDbGFzcygnaXMtZW1wdHknKTtcblxuaW5wdXQub24oJ2tleXVwJywgZnVuY3Rpb24oKXtcbiAgICBpZiggJCh0aGlzKS52YWwoKSA9PSBcIlwiKXtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcImlzLWVtcHR5XCIpO1xuICAgIH1lbHNle1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiaXMtZW1wdHlcIik7XG4gICAgfVxufSk7XG5cblxubGV0IGJ1cmdlciA9ICQoJy5qcy1idXJnZXInKVxuXG5cbmJ1cmdlci5vbignY2xpY2snLCAoKSA9PiB7XG4gICQoJy5oZWFkZXJfX3JpZ2h0JykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);