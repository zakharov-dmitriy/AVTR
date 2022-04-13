$(function () {
   $('.design__slider').slick({
      dots: false,
      slideToShow: 4,
      variableWidth: true,
      prevArrow: '<img class="arrow arrow-left" src="images/Arrow-left.svg">',
      nextArrow: '<img class="arrow arrow-right" src="images/Arrow-right.svg">',
      responsive: [
         {
            breackpoint: 361,
            settings: {
               variableWidth: false,
               slideToShow: 1,
               arrows: false,
            }
         }
      ]
   });
});