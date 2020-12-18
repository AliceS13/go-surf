$(function() {

    $('.header__slider').slick({
        infinite: true,
        // fade: true,
        prevArrow: `<img class="slider-arrow slider-arrow__left" src="./img/arrow-left.svg" alt="">`,
        nextArrow: `<img class="slider-arrow slider-arrow__right" src="./img/arrow-right.svg" alt="">`,
        asNavFor: '.slider-header-dots'
    });

    $('.slider-header-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider'
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        prevArrow: `<img class="slider-arrow slider-arrow__left" src="./img/arrow-left.svg" alt="">`,
        nextArrow: `<img class="slider-arrow slider-arrow__right" src="./img/arrow-right.svg" alt="">`,
        asNavFor: '.slider-map',
        responsive: [
          {
            breakpoint: 1210,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              // centerMode: true
            }
          },
          {
            breakpoint: 593,
            settings: {
              slidesToShow: 1,
            }
          },
          
        ]
      });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        // autoplay: true,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 4
            }
          }
        ]
    });

    $('.travel__slider').slick({
        infinite: true,
        // autoplay: true,
        prevArrow: `<img class="slider-arrow slider-arrow__left" src="./img/arrow-left.svg" alt="">`,
        nextArrow: `<img class="slider-arrow slider-arrow__right" src="./img/arrow-right.svg" alt="">`,
        asNavFor: '.slider-header-dots'
    });

    $('.sleep__slider').slick({
        infinite: true,
        // autoplay: true,
        prevArrow: `<img class="slider-arrow slider-arrow__left" src="./img/arrow-left.svg" alt="">`,
        nextArrow: `<img class="slider-arrow slider-arrow__right" src="./img/arrow-right.svg" alt="">`,
        asNavFor: '.slider-header-dots'
    });

    $('.shop__slider').slick({
      infinite: true,
      // autoplay: true,
      prevArrow: `<img class="slider-arrow slider-arrow__left" src="./img/arrow-left.svg" alt="">`,
      nextArrow: `<img class="slider-arrow slider-arrow__right" src="./img/arrow-right.svg" alt="">`,
  });


    

    $('.circle-content__box').on('click', function() {
      $(this).toggleClass('active');
    });

    $('.menu-btn').on('click', function() {
      $('.menu__list').toggleClass('open');
      $('.menu-btn__inner').toggleClass('active-btn');
    });
});

new WOW().init();