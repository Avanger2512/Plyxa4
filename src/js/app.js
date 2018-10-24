let input = $('.js-input');

input
  .parent()
  .addClass('is-empty');

input.on('keyup', function(){
    if( $(this).val() == ""){
        $(this).parent().addClass("is-empty");
    }else{
        $(this).parent().removeClass("is-empty");
    }
});


let burger = $('.js-burger')

burger.on('click touch', () => {
  $('.header__right').toggleClass('is-open');
  $('body').toggleClass('is-overflow');
})

let lang = $('.js-lang')

lang.on('click touch', function(e) {
  $(this).toggleClass('is-open');
});

$('body').on("click", (e) => {
  if (lang.hasClass('is-open') && $(e.target).closest('.js-lang').length === 0 ) {
    lang.removeClass('is-open');
  }
});



let slider = $('.js-slider');

let options = {
  fade: true,
  dots: true,
  infinite: true,
  centerMode: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow: $('.js-slider-arr-left'),
  nextArrow: $('.js-slider-arr-right')
}

slider.slick(options);

//steps

let steps = $('.js-steps');

if (steps.length) {
  let child = steps.find('.steps__item.is-active');
  if (child.index() > 0) {
    steps
      .parent()
      .scrollLeft($(window).width())
  }
}



function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validateFill(input) {
  let re = /.+/;
  return re.test(input);
}

function validate() {
  let email = $(this).find("input[type=email]").val();
  let parent = $(this);
  let input = $(this).find("input[type=text]").val();

  if (email === undefined) {
    if (input.length !== 0 && validateFill(input)) {
      parent.removeClass('is-error');
    } else {
      parent.addClass('is-error');
    }
  } else {
    if (email.length !== 0 && validateEmail(email)) {
      $(parent).removeClass('is-error');
    }  else {
      $(parent).addClass('is-error');
    }

  }
  return false;
}
$('form').on('submit', validate);
