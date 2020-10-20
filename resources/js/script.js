$(document).ready(function() {

/* Scroll on buttons */
$('.js--scroll-to-song').click(function () {
$('html, body').animate({scrollTop: $('.js--section-promo').offset().top}, 1000);
});

$('.js--scroll-to-contact').click(function () {
  $('html, body').animate({scrollTop: $('.js--section-mailing-list').offset().top}, 1000);
  });

});



