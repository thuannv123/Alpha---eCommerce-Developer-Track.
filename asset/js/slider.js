$(document).ready(function () {
  $(".my_slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    my_slider: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //slide mobile
  $(".product-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    fade: false,
    speed: 400,
    swipe: true,
    draggable: true,
    touchMove: true,
    asNavFor: ".product-thumbs",
    adaptiveHeight: true,
  });

  $(".product-thumbs").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".product-main",
    focusOnSelect: true,
    arrows: false,
    infinite: true,
    centerMode: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 4 } },
    ],
  });
});
