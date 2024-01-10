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
$('.testimonials_wrapper').on('translated.owl.carousel', function() {
  $('..testimonials_wrapper .owl-item.active').removeClass('center'); // Remove from previous active item
  $('.testimonials_wrapper .owl-item.active').addClass('center'); // Add to current active item
});

$('#aboutpage .testimonials_wrapper .active').addClass('center');
$(document).ready(function(){
  $('#aboutpage .testimonials_wrapper').owlCarousel({
        autoplay:true,
        items: 3,
        margin: 30,
        loop:true,
        dots:false,
        nav:true,
        navText: ['<i class="fa-sharp fa-solid fa-arrow-left-long"></i>', '<i class="fa-sharp fa-solid fa-arrow-right-long"></i>'],
  });
});
$(document).ready(function(){
  $('.course_slider').owlCarousel({
        autoplay:true,
        items: 3,
        margin: 30,
        loop:true,
        dots:false,
        nav:true,
        navText: ['<i class="fa-sharp fa-solid fa-arrow-left-long"></i>', '<i class="fa-sharp fa-solid fa-arrow-right-long"></i>'],
  });
});
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
        autoplay:true,
        items: 1,
        margin: 30,
        loop:true,
        dots:false,
        nav:true,
        navText: ['<i class="fa-sharp fa-solid fa-arrow-left-long"></i>', '<i class="fa-sharp fa-solid fa-arrow-right-long"></i>'],
  });
});



new WOW().init();