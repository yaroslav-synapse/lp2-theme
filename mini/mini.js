/* Author: Synpase-studio */
(function($){
  $( document ).ready(function() {
    /** ready */
    //$('.video-player').fitVids();
    $('.scroll').localScroll();
    $(".views-owl").owlCarousel({
      loop:true,
      nav: true,
      navText: ["<",">"],
      responsiveClass:true,
      responsive:{
        0:{
            items:1,
            nav:true,
        },
        992:{
            items:1,
            nav:true,
        },
        1200:{
            items:2,
            nav:true,
            loop:true,
            autoWidth: true,
            center: true,
        }
      }
    });
    
    /*
    $('.front-form .form-submit').click(function(e){
      console.log('submit');
      var form = $('#form form');
      //console.log(form);
      var msg   = form.serialize();
      console.log(msg);
      
      $.ajax({
          type: form.attr('method'),
          url: '/',
          success: function(data) {
            $('.section-heading').html(data);
          },
          error:  function(xhr, str){
	          alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
      e.preventDefault();
      return false;
    });*/
    
    $('.nav-one-page').onePageNav({
       currentClass: 'active',
       scrollOffset: 74,
       changeHash: false,
       scrollSpeed: 750,
       scrollThreshold: 0.5,
       filter: '',
       easing: 'swing',
    });
    
    var animationProp = $('.appear-onscroll'); //Navbar wraper

    if ( matchMedia( 'only screen and (min-width: 544px)' ).matches  ) {
      $(document).scroll(function() {
        animationEndPos = 150
        scrollPos = $(this).scrollTop();
          if( scrollPos > 150 ) {
            animationProp.removeClass('appear-onscroll');
          } else {
            animationProp.addClass('appear-onscroll');
          }
      });

    } else {
      if( animationProp.hasClass('appear-onscroll') ) {
        $(document).scroll(function() {
        var scrollPos = $(this).scrollTop();
          if( scrollPos > 150 ) {
            animationProp.removeClass('appear-onscroll');
          } else {
            animationProp.addClass('appear-onscroll');
          }
       });
      }    
    }
    
    function validateEmail(email) {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
    }
  });
  Drupal.behaviors.themelp = {
    attach: function(context) {
      //* load */
    }
  };
})(this.jQuery);
