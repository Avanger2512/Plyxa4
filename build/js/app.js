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

	eval("let input = $('.js-input');\n\ninput.parent().addClass('is-empty');\n\ninput.on('keyup', function () {\n  if ($(this).val() == \"\") {\n    $(this).parent().addClass(\"is-empty\");\n  } else {\n    $(this).parent().removeClass(\"is-empty\");\n  }\n});\n\nlet burger = $('.js-burger');\n\nburger.on('click touch', () => {\n  $('.header__right').toggleClass('is-open');\n  $('body').toggleClass('is-overflow');\n});\n\nlet lang = $('.js-lang');\n\nlang.on('click touch', function (e) {\n  $(this).toggleClass('is-open');\n});\n\n$('body').on(\"click\", e => {\n  if (lang.hasClass('is-open') && $(e.target).closest('.js-lang').length === 0) {\n    lang.removeClass('is-open');\n  }\n});\n\nlet slider = $('.js-slider');\n\nlet options = {\n  fade: true,\n  dots: true,\n  infinite: true,\n  centerMode: true,\n  speed: 300,\n  slidesToShow: 1,\n  prevArrow: $('.js-slider-arr-left'),\n  nextArrow: $('.js-slider-arr-right')\n};\n\nslider.slick(options);\n\n//steps\n\nlet steps = $('.js-steps');\n\nif (steps.length) {\n  let child = steps.find('.steps__item.is-active');\n  if (child.index() > 0) {\n    steps.parent().scrollLeft($(window).width());\n  }\n}\n\nfunction validateEmail(email) {\n  let re = /^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n  return re.test(email);\n}\nfunction validateFill(input) {\n  let re = /.+/;\n  return re.test(input);\n}\n\nfunction validate() {\n  let email = $(this).find(\"input[type=email]\").val();\n  let parent = $(this);\n  let input = $(this).find(\"input[type=text]\").val();\n\n  if (email === undefined) {\n    if (input.length !== 0 && validateFill(input)) {\n      parent.removeClass('is-error');\n    } else {\n      parent.addClass('is-error');\n    }\n  } else {\n    if (email.length !== 0 && validateEmail(email)) {\n      $(parent).removeClass('is-error');\n    } else {\n      $(parent).addClass('is-error');\n    }\n  }\n  return false;\n}\n$('form').on('submit', validate);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGlucHV0ID0gJCgnLmpzLWlucHV0Jyk7XG5cbmlucHV0XG4gIC5wYXJlbnQoKVxuICAuYWRkQ2xhc3MoJ2lzLWVtcHR5Jyk7XG5cbmlucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCl7XG4gICAgaWYoICQodGhpcykudmFsKCkgPT0gXCJcIil7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJpcy1lbXB0eVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImlzLWVtcHR5XCIpO1xuICAgIH1cbn0pO1xuXG5cbmxldCBidXJnZXIgPSAkKCcuanMtYnVyZ2VyJylcblxuYnVyZ2VyLm9uKCdjbGljayB0b3VjaCcsICgpID0+IHtcbiAgJCgnLmhlYWRlcl9fcmlnaHQnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2lzLW92ZXJmbG93Jyk7XG59KVxuXG5sZXQgbGFuZyA9ICQoJy5qcy1sYW5nJylcblxubGFuZy5vbignY2xpY2sgdG91Y2gnLCBmdW5jdGlvbihlKSB7XG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcbn0pO1xuXG4kKCdib2R5Jykub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAobGFuZy5oYXNDbGFzcygnaXMtb3BlbicpICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1sYW5nJykubGVuZ3RoID09PSAwICkge1xuICAgIGxhbmcucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgfVxufSk7XG5cblxuXG5sZXQgc2xpZGVyID0gJCgnLmpzLXNsaWRlcicpO1xuXG5sZXQgb3B0aW9ucyA9IHtcbiAgZmFkZTogdHJ1ZSxcbiAgZG90czogdHJ1ZSxcbiAgaW5maW5pdGU6IHRydWUsXG4gIGNlbnRlck1vZGU6IHRydWUsXG4gIHNwZWVkOiAzMDAsXG4gIHNsaWRlc1RvU2hvdzogMSxcbiAgcHJldkFycm93OiAkKCcuanMtc2xpZGVyLWFyci1sZWZ0JyksXG4gIG5leHRBcnJvdzogJCgnLmpzLXNsaWRlci1hcnItcmlnaHQnKVxufVxuXG5zbGlkZXIuc2xpY2sob3B0aW9ucyk7XG5cbi8vc3RlcHNcblxubGV0IHN0ZXBzID0gJCgnLmpzLXN0ZXBzJyk7XG5cbmlmIChzdGVwcy5sZW5ndGgpIHtcbiAgbGV0IGNoaWxkID0gc3RlcHMuZmluZCgnLnN0ZXBzX19pdGVtLmlzLWFjdGl2ZScpO1xuICBpZiAoY2hpbGQuaW5kZXgoKSA+IDApIHtcbiAgICBzdGVwc1xuICAgICAgLnBhcmVudCgpXG4gICAgICAuc2Nyb2xsTGVmdCgkKHdpbmRvdykud2lkdGgoKSlcbiAgfVxufVxuXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICBsZXQgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVGaWxsKGlucHV0KSB7XG4gIGxldCByZSA9IC8uKy87XG4gIHJldHVybiByZS50ZXN0KGlucHV0KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGUoKSB7XG4gIGxldCBlbWFpbCA9ICQodGhpcykuZmluZChcImlucHV0W3R5cGU9ZW1haWxdXCIpLnZhbCgpO1xuICBsZXQgcGFyZW50ID0gJCh0aGlzKTtcbiAgbGV0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRbdHlwZT10ZXh0XVwiKS52YWwoKTtcblxuICBpZiAoZW1haWwgPT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChpbnB1dC5sZW5ndGggIT09IDAgJiYgdmFsaWRhdGVGaWxsKGlucHV0KSkge1xuICAgICAgcGFyZW50LnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQuYWRkQ2xhc3MoJ2lzLWVycm9yJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChlbWFpbC5sZW5ndGggIT09IDAgJiYgdmFsaWRhdGVFbWFpbChlbWFpbCkpIHtcbiAgICAgICQocGFyZW50KS5yZW1vdmVDbGFzcygnaXMtZXJyb3InKTtcbiAgICB9ICBlbHNlIHtcbiAgICAgICQocGFyZW50KS5hZGRDbGFzcygnaXMtZXJyb3InKTtcbiAgICB9XG5cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4kKCdmb3JtJykub24oJ3N1Ym1pdCcsIHZhbGlkYXRlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);