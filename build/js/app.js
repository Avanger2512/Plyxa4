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

	eval("let input = $('.js-input');\n\ninput.parent().addClass('is-empty');\n\ninput.on('keyup', function () {\n  if ($(this).val() == \"\") {\n    $(this).parent().addClass(\"is-empty\");\n  } else {\n    $(this).parent().removeClass(\"is-empty\");\n  }\n});\n\nlet burger = $('.js-burger');\n\nburger.on('click touch', () => {\n  $('.header__right').toggleClass('is-open');\n  $('body').toggleClass('is-overflow');\n});\n\nlet lang = $('.js-lang');\n\nlang.on('click touch', function (e) {\n  $(this).toggleClass('is-open');\n});\n\n$('body').on(\"click\", e => {\n  if (lang.hasClass('is-open') && $(e.target).closest('.js-lang').length === 0) {\n    lang.removeClass('is-open');\n  }\n});\n\nlet slider = $('.js-slider');\n\nlet options = {\n  fade: true,\n  dots: true,\n  infinite: true,\n  centerMode: true,\n  speed: 300,\n  slidesToShow: 1,\n  prevArrow: $('.js-slider-arr-left'),\n  nextArrow: $('.js-slider-arr-right')\n};\n\nslider.slick(options);\n\n//steps\n\nlet steps = $('.js-steps');\n\nif (steps.length) {\n  let child = steps.find('.steps__item.is-active');\n  if (child.index() > 0) {\n    steps.parent().scrollLeft($(window).width());\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGlucHV0ID0gJCgnLmpzLWlucHV0Jyk7XG5cbmlucHV0XG4gIC5wYXJlbnQoKVxuICAuYWRkQ2xhc3MoJ2lzLWVtcHR5Jyk7XG5cbmlucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCl7XG4gICAgaWYoICQodGhpcykudmFsKCkgPT0gXCJcIil7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJpcy1lbXB0eVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImlzLWVtcHR5XCIpO1xuICAgIH1cbn0pO1xuXG5cbmxldCBidXJnZXIgPSAkKCcuanMtYnVyZ2VyJylcblxuYnVyZ2VyLm9uKCdjbGljayB0b3VjaCcsICgpID0+IHtcbiAgJCgnLmhlYWRlcl9fcmlnaHQnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2lzLW92ZXJmbG93Jyk7XG59KVxuXG5sZXQgbGFuZyA9ICQoJy5qcy1sYW5nJylcblxubGFuZy5vbignY2xpY2sgdG91Y2gnLCBmdW5jdGlvbihlKSB7XG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcblxufSk7XG5cbiQoJ2JvZHknKS5vbihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChsYW5nLmhhc0NsYXNzKCdpcy1vcGVuJykgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLWxhbmcnKS5sZW5ndGggPT09IDAgKSB7XG4gICAgbGFuZy5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICB9XG59KTtcblxuXG5cbmxldCBzbGlkZXIgPSAkKCcuanMtc2xpZGVyJyk7XG5cbmxldCBvcHRpb25zID0ge1xuICBmYWRlOiB0cnVlLFxuICBkb3RzOiB0cnVlLFxuICBpbmZpbml0ZTogdHJ1ZSxcbiAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgc3BlZWQ6IDMwMCxcbiAgc2xpZGVzVG9TaG93OiAxLFxuICBwcmV2QXJyb3c6ICQoJy5qcy1zbGlkZXItYXJyLWxlZnQnKSxcbiAgbmV4dEFycm93OiAkKCcuanMtc2xpZGVyLWFyci1yaWdodCcpXG59XG5cbnNsaWRlci5zbGljayhvcHRpb25zKTtcblxuLy9zdGVwc1xuXG5sZXQgc3RlcHMgPSAkKCcuanMtc3RlcHMnKTtcblxuaWYgKHN0ZXBzLmxlbmd0aCkge1xuICBsZXQgY2hpbGQgPSBzdGVwcy5maW5kKCcuc3RlcHNfX2l0ZW0uaXMtYWN0aXZlJyk7XG4gIGlmIChjaGlsZC5pbmRleCgpID4gMCkge1xuICAgIHN0ZXBzXG4gICAgICAucGFyZW50KClcbiAgICAgIC5zY3JvbGxMZWZ0KCQod2luZG93KS53aWR0aCgpKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);