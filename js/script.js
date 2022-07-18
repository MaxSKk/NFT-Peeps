$(function () {
   $('.header__burger, .menu__link').click(function () {
      $('.menu, .header__burger').toggleClass('open');
      $('body').toggleClass('lock')
   });

   $('a[href*="#"]').on('click', function () {
      $('html, body').animate({
         scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
   });

});