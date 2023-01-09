import $ from "jquery";
$(".instagram_slider").slick({
  centerMode: true,
  slidesToShow: 4,
  autoplay: true,
  slideToScroll: 1,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        centerMode: true,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1,
      },
    },
  ],
});
$(".testimonial").slick({
  centerMode: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        centerMode: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1,
      },
    },
  ],
});
