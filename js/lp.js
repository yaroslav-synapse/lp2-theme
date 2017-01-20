/**
 * @file
 * Author: Synpase-studio.
 */

(function ($) {
  $(document).ready(function () {
    // Document ready!
    console.log('lp.js');
    // localScroll.
    // X $('.scroll').localScroll();!
    // OnePageNav!
    $('a.scroll').click(function (e) {
      var $link = $(e.currentTarget);
      var $parent = $link.parent();
      var newLoc = '#' + $(this).attr('href').split('#')[1];
      var scrollSpeed = 1250;
      var easing = 'swing';
      var scrollOffset = 0;
      $.scrollTo(newLoc, scrollSpeed, {
        axis: 'y',
        easing: easing,
        offset: scrollOffset,
        onAfter: function () {
          // DEL:window.location.hash = newLoc;!
          $('#name').focus();
        }
      });
      return false;
    });
    $('.nav-one-page').onePageNav({
       currentClass: 'active',
       scrollOffset: 74,
       changeHash: false,
       scrollSpeed: 750,
       scrollThreshold: 0.5,
       filter: '',
       easing: 'swing',
    });
    // Owl!
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
  });
  Drupal.behaviors.themelp = {
    attach: function (context) {
      // Laod.
    }
  };
})(this.jQuery);
