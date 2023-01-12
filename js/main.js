$(function() {

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,      
        autoplaySpeed:2000,
        touchMove: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 'auto',
        draggable: true,
        arrows: false,
        adaptiveHeight: true,
        responsive:[
          {
            breakpoint: 600,
            settings:{
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: true,
            },
          },
        ],



    });

});