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

	eval("let input = $('.js-input');\n\ninput.parent().addClass('is-empty');\n\ninput.on('keyup', function () {\n  if ($(this).val() == \"\") {\n    $(this).parent().addClass(\"is-empty\");\n  } else {\n    $(this).parent().removeClass(\"is-empty\");\n  }\n});\n\nlet burger = $('.js-burger');\n\nburger.on('click touch', () => {\n  $('.header__right').toggleClass('is-open');\n  $('body').toggleClass('is-overflow');\n});\n\nlet lang = $('.js-lang');\n\nlang.on('click touch', function (e) {\n  $(this).toggleClass('is-open');\n});\n\n$('body').on(\"click\", e => {\n  if (lang.hasClass('is-open') && $(e.target).closest('.js-lang').length === 0) {\n    lang.removeClass('is-open');\n  }\n});\n\nlet slider = $('.js-slider');\n\nlet options = {\n  fade: true,\n  dots: true,\n  infinite: true,\n  centerMode: true,\n  speed: 300,\n  slidesToShow: 1,\n  prevArrow: $('.js-slider-arr-left'),\n  nextArrow: $('.js-slider-arr-right')\n};\n\nslider.slick(options);\n\n//steps\n\nlet steps = $('.js-steps');\n\nif (steps.length) {\n  let child = steps.find('.steps__item.is-active');\n  if (child.index() > 0) {\n    steps.parent().scrollLeft($(window).width());\n  }\n}\n\nfunction validateEmail(email) {\n  let re = /^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n  return re.test(email);\n}\n\nfunction validate() {\n  let email = $(\"input[type=email]\").val();\n  let parent = $(\"input[type=email]\").closest('form');\n\n  if (validateEmail(email)) {\n    parent.removeClass('is-error');\n  } else {\n    parent.addClass('is-error');\n  }\n  return false;\n}\n$('form').on('submit', validate);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGlucHV0ID0gJCgnLmpzLWlucHV0Jyk7XG5cbmlucHV0XG4gIC5wYXJlbnQoKVxuICAuYWRkQ2xhc3MoJ2lzLWVtcHR5Jyk7XG5cbmlucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCl7XG4gICAgaWYoICQodGhpcykudmFsKCkgPT0gXCJcIil7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJpcy1lbXB0eVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImlzLWVtcHR5XCIpO1xuICAgIH1cbn0pO1xuXG5cbmxldCBidXJnZXIgPSAkKCcuanMtYnVyZ2VyJylcblxuYnVyZ2VyLm9uKCdjbGljayB0b3VjaCcsICgpID0+IHtcbiAgJCgnLmhlYWRlcl9fcmlnaHQnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2lzLW92ZXJmbG93Jyk7XG59KVxuXG5sZXQgbGFuZyA9ICQoJy5qcy1sYW5nJylcblxubGFuZy5vbignY2xpY2sgdG91Y2gnLCBmdW5jdGlvbihlKSB7XG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcbn0pO1xuXG4kKCdib2R5Jykub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAobGFuZy5oYXNDbGFzcygnaXMtb3BlbicpICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1sYW5nJykubGVuZ3RoID09PSAwICkge1xuICAgIGxhbmcucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgfVxufSk7XG5cblxuXG5sZXQgc2xpZGVyID0gJCgnLmpzLXNsaWRlcicpO1xuXG5sZXQgb3B0aW9ucyA9IHtcbiAgZmFkZTogdHJ1ZSxcbiAgZG90czogdHJ1ZSxcbiAgaW5maW5pdGU6IHRydWUsXG4gIGNlbnRlck1vZGU6IHRydWUsXG4gIHNwZWVkOiAzMDAsXG4gIHNsaWRlc1RvU2hvdzogMSxcbiAgcHJldkFycm93OiAkKCcuanMtc2xpZGVyLWFyci1sZWZ0JyksXG4gIG5leHRBcnJvdzogJCgnLmpzLXNsaWRlci1hcnItcmlnaHQnKVxufVxuXG5zbGlkZXIuc2xpY2sob3B0aW9ucyk7XG5cbi8vc3RlcHNcblxubGV0IHN0ZXBzID0gJCgnLmpzLXN0ZXBzJyk7XG5cbmlmIChzdGVwcy5sZW5ndGgpIHtcbiAgbGV0IGNoaWxkID0gc3RlcHMuZmluZCgnLnN0ZXBzX19pdGVtLmlzLWFjdGl2ZScpO1xuICBpZiAoY2hpbGQuaW5kZXgoKSA+IDApIHtcbiAgICBzdGVwc1xuICAgICAgLnBhcmVudCgpXG4gICAgICAuc2Nyb2xsTGVmdCgkKHdpbmRvdykud2lkdGgoKSlcbiAgfVxufVxuXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICBsZXQgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZSgpIHtcbiAgbGV0IGVtYWlsID0gJChcImlucHV0W3R5cGU9ZW1haWxdXCIpLnZhbCgpO1xuICBsZXQgcGFyZW50ID0gJChcImlucHV0W3R5cGU9ZW1haWxdXCIpLmNsb3Nlc3QoJ2Zvcm0nKTtcblxuICBpZiAodmFsaWRhdGVFbWFpbChlbWFpbCkpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2xhc3MoJ2lzLWVycm9yJyk7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50LmFkZENsYXNzKCdpcy1lcnJvcicpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiQoJ2Zvcm0nKS5vbignc3VibWl0JywgdmFsaWRhdGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);