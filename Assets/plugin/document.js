$(function(){
    
    $('.all-cards').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 6,
    //   variableWidth: true,
    //   prevArrow: '.arrow_prev',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

});