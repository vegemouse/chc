$(function() {

  $('.slideshow div').hide(); // hide all slides
  $('.slideshow div:first-child').show(); // show first slide
  setInterval(function () {
    $('.slideshow div:first-child').fadeOut(500)
    .next('div').fadeIn(1000).end().appendTo('.slideshow');
  },
  5000);

})
