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



var i = 1;
var trnsScore = 0;
$('.hero-sec, .intro-sec').on('mousewheel', function(e){
  if(e.deltaY < 0){
    
    
    if(trnsScore <= -38){
      trnsScore = -38;
      i = -38+10;
    }else{
      trnsScore = i-10;
    }
    trnsScore = i-10;
    i--;

    var translate = 'translateX('+trnsScore+'%)';
  }else{
    
    trnsScore = i+10;
    if(trnsScore >= 0){
      trnsScore = 0;
      i = 0;
    }else{
      trnsScore = i+10;
    }
    i++;
    var translate = 'translateX('+trnsScore+'%)';
  }
  $('.sections').css('transform', translate);
  
});

$('.site-wrapper').on('wheel', function(e){
  if(trnsScore === 0 || trnsScore === -38){
    return;
  }

  e.preventDefault();
  
});

var buttons = document.querySelectorAll(".hover-btn");
  buttons.forEach(function (button) {
    ["mouseenter", "mouseout"].forEach(function (evt) {
      button.addEventListener(evt, function (e) {
        var parentOffset = button.getBoundingClientRect(),
          relX = e.clientX - parentOffset.left,
          relY = e.clientY - parentOffset.top;
        var span = button.getElementsByTagName("span");
        span[0].style.top = relY + "px";
        span[0].style.left = relX + "px";
      });
    });
  });





  
})(jQuery);