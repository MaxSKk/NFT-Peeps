$(function () {
   $('.header__burger, .menu__link').click(function () {
      $('.menu, .header__burger').toggleClass('open');
      $('body').toggleClass('lock')
   });

});