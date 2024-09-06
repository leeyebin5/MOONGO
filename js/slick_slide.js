$(document).ready(function () {
  // 메인비주얼
  $('.main_visual').slick({
    dots: $('.paging'),
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

  var $status = $('.paging');
  var $slickElement = $('.main_visual');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + 2);
  });

  $slickElement.slick({
    slide: 'img',
    autoplay: true,
    dots: true,
  });

  $('.books').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  });
});

$('.event_wrap > .img_wrap').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: $('.event_button1'),
  nextArrow: $('.event_button2'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
