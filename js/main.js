$(document).ready(function(){
  $(".owl-carousel").owlCarousel();

  $('.owl-carousel').owlCarousel({
        items:10,
        loop:true,
        center:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });

});
