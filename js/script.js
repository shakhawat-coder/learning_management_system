new VenoBox({
    selector: '.venobox',
    selector: '.img-popup'
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

// $(document).ready(function(){
//   $('.testimonials_wrapper').slick({
//       centerMode: true,
//       centerPadding: '60px',
//       prevArrow: "",
//       nextArrow: "",
//       slidesToShow: 1,
//       autoplay: false,
//     });
// });
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({

        items: 1,
        margin: 30,
        loop:true,
        dots:false,
        nav:true,
        navText: ['<i class="fa-sharp fa-solid fa-arrow-left-long"></i>', '<i class="fa-sharp fa-solid fa-arrow-right-long"></i>'],
  });
});


new WOW().init();