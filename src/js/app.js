import $ from "jquery";


console.log('bla');

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
