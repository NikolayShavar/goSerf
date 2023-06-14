$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg"/>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg"/>',
    asNavFor: ".slider-dotshead",
  });

  $(".slider-dotshead").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: ".header__slider",
    focusOnSelect: true,
  });

  $(".serf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg"/>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg"/>',
    asNavFor:'.slider-map',
    });

  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor:'.serf-slider',
  });
});
