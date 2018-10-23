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

	eval("let input = $('.js-input');\n\ninput.parent().addClass('is-empty');\n\ninput.on('keyup', function () {\n  if ($(this).val() == \"\") {\n    $(this).parent().addClass(\"is-empty\");\n  } else {\n    $(this).parent().removeClass(\"is-empty\");\n  }\n});\n\nlet burger = $('.js-burger');\n\nburger.on('click touch', () => {\n  $('.header__right').toggleClass('is-open');\n});\n\nlet slider = $('.js-slider');\n\nlet options = {\n  dots: true,\n  infinite: true,\n  centerMode: true,\n  speed: 300,\n  slidesToShow: 1,\n  prevArrow: $('.js-slider-arr-left'),\n  nextArrow: $('.js-slider-arr-right')\n};\n\nslider.slick(options);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGlucHV0ID0gJCgnLmpzLWlucHV0Jyk7XG5cbmlucHV0XG4gIC5wYXJlbnQoKVxuICAuYWRkQ2xhc3MoJ2lzLWVtcHR5Jyk7XG5cbmlucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCl7XG4gICAgaWYoICQodGhpcykudmFsKCkgPT0gXCJcIil7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJpcy1lbXB0eVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImlzLWVtcHR5XCIpO1xuICAgIH1cbn0pO1xuXG5cbmxldCBidXJnZXIgPSAkKCcuanMtYnVyZ2VyJylcblxuYnVyZ2VyLm9uKCdjbGljayB0b3VjaCcsICgpID0+IHtcbiAgJCgnLmhlYWRlcl9fcmlnaHQnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xufSlcblxuXG5cbmxldCBzbGlkZXIgPSAkKCcuanMtc2xpZGVyJyk7XG5cbmxldCBvcHRpb25zID0ge1xuICBkb3RzOiB0cnVlLFxuICBpbmZpbml0ZTogdHJ1ZSxcbiAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgc3BlZWQ6IDMwMCxcbiAgc2xpZGVzVG9TaG93OiAxLFxuICBwcmV2QXJyb3c6ICQoJy5qcy1zbGlkZXItYXJyLWxlZnQnKSxcbiAgbmV4dEFycm93OiAkKCcuanMtc2xpZGVyLWFyci1yaWdodCcpXG59XG5cbnNsaWRlci5zbGljayhvcHRpb25zKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);