(function($){
  $('.menu-toggle').on('click', function(){
    $('ul.main-menu').slideToggle();
    $(this).toggleClass('active-toggle');
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 50){
      $('.header').addClass('sticy-header');
      $('.main-body').css('margin-top','108px');
    }else{
      $('.header').removeClass('sticy-header');
      $('.content-body-sec').css('margin-top','0');
    }
  });

  $(document).mousemove(function(e){
    o = $('.hero-bouble').offset();
    console.log(o);
    $('.hero-bouble').css({
      'top': e.pageY,
      'left': e.pageX,
    });
    
  });

  $('.home-port-slider').slick({
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          autoplay: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.home-port-content').on('mousemove', function(){
    $('.home-port-content').removeClass('active-home-port');
    $(this).addClass('active-home-port');
  });

  $('.testimony-slider').slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
    dotsClass: 'testi-dots',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          autoplay: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.testimony-slide').on('mousemove',function(){
    $('.testimony-slide').removeClass('active-testimony');
    $(this).addClass('active-testimony');
  });

  $('.testimony-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.testimony-slide').removeClass('active-testimony');
    $('.slick-current').addClass('active-testimony');
  });

  var holderHeight = $('.light-holder').height();
  console.log(holderHeight);
  $('.booking-light.light-only').css('top', holderHeight+'px');

  AOS.init({
    offset: 20
  });
})(jQuery);