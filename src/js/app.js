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
})



let slider = $('.js-slider');

let options = {
  dots: true,
  infinite: true,
  centerMode: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow: $('.js-slider-arr-left'),
  nextArrow: $('.js-slider-arr-right')
}

slider.slick(options);
