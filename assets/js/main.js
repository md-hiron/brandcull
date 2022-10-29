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



// var i = 1;
// var trnsScore = 0;
// $('.hero-sec').on('mousewheel', function(e){
//   if(e.deltaY < 0){
    // if(trnsScore <= -38){
    //   trnsScore = -38;
    //   i = -38+20;
    // }else{
    //   trnsScore = i-20;
    // }
    // trnsScore = i-20;
  //   trnsScore = -38;

  //   var translate = 'translateX('+trnsScore+'%)';
  //   if(i < -5){
  //     return;
  //   }
  //    i--;
  // }else{
    
    // trnsScore = i+20;
    // if(trnsScore >= 0){
    //   trnsScore = 0;
    //   i = 0;
    // }else{
    //   trnsScore = i+20;
    // }
    
//     trnsScore = 0;
//     var translate = 'translateX('+trnsScore+'%)';
//     if(i > 5){
//       return;
//     }
//      i++;
//   }

//   console.log(i);
//   $('.sections').css('transform', translate);
  
// });

// $(window).on('scroll', function(e){
//   var heroTop = $(window).scrollTop();

//   console.log(heroTop);
//   e.preventDefault();
// })

// $('.hero-sec').on('wheel', function(e){
//   if(i < -2){
//     return
//   }

//   e.preventDefault();
  
// });

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



  $('.hero-sec').on('mousewheel', function(e, delta){
    this.scrollLeft -= (delta * 150);
    var newscrollLeft = this.find('.hero-sec-area').scrollLeft;
    var width = $('.hero-sec-area').outerWidth();
    var scrollWidth = $('.hero-sec-area').get(0).scrollWidth;
    var offset = 8;
    
    var scrolltop = $(document).scrollTop();
    // if(scrolltop == 0){
    //     $(this).addClass('hero-scroll-disable');
    // }

    console.log('width '+ width);
    console.log('scroll width '+ scrollWidth);

    console.log('Delta '+ delta);
    console.log('new scroll left' + newscrollLeft);

    if(scrollWidth - newscrollLeft == width){
        //$(this).removeClass('hero-scroll-disable');
        return;
    }

    if(delta < 0){
        e.preventDefault();
    }
    
});


  





  
})(jQuery);