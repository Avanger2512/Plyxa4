// import $ from "../../node_modules/jquery";

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


burger.on('click', () => {
  $('.header__right').toggleClass('is-open')
})
