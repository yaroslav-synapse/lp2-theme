/**
 * @file
 * Author: Synpase-studio.
 */

(function($) {
    $(document).ready(function() {
        // Document ready!
        window_width = $(window).width();
        fixed_nav();
        scroll_to();
        mobile_nav();
        mobile_promo();
        partners_slider();
        clients_slider();
    });

    function fixed_nav() {
        var header = $('#header-full');
        $(window).on('scroll', function() {
            var scroll_value = $(this).scrollTop();
            if (scroll_value > 0) {
                header.addClass('header-full--fixed');
            } else {
                header.removeClass('header-full--fixed');
            }
        });
    }

    function scroll_to() {
        $('#header .menu-item a, [data-action="scroll"]').off().on('click', function(e) {
            e.preventDefault();
            var selector = $(this).attr('href');
            selector = selector.replace('/', '');
            var target = $(selector);
            var offset = target.offset().top;
            if (window_width < 993) {
                offset = offset - $('.header-small__inner').outerHeight();
            } else {
                offset = offset - 58;
            }
            $('html, body').animate({
                scrollTop: offset
            }, 600);
            if (window_width < 993 && $(this).is($('#header .menu-item a'))) {
                $('[data-target="#small-menu"]').click();
            }
        })
    }

    function mobile_nav() {
        if (window_width < 993) {
            var menu_trigger = $('.nav-menu'),
                info_trigger = $('.nav-info');
            $('.nav-toggler').on('click', function() {
                if ($(this).hasClass('nav-menu') && !info_trigger.hasClass('collapsed')) {
                    info_trigger.get(0).click();
                }
                if ($(this).hasClass('nav-info') && !menu_trigger.hasClass('collapsed')) {
                    menu_trigger.get(0).click();
                }
            });
        }
    }

    function mobile_promo() {
        if (window_width < 554) {
            var window_height = $(window).height() - $('.header-small__inner').outerHeight();
            $('.hero-inner').css({
                'min-height': window_height
            })
        }
    }

    function partners_slider() {
        var partners_block = $('.partners-slider');
        if (partners_block.length) {
            partners_block.owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                autoplay: true,
                autoplaySpeed: 1000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    600: {
                        items: 2
                    },
                }
            })
        }
    }
    function clients_slider() {
        var clients_block = $('.clients-slider');
        if (clients_block.length) {
            clients_block.owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                autoplay: true,
                autoplaySpeed: 1000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    600: {
                        items: 2
                    },
                }
            })
        }
    }
    Drupal.behaviors.adaptive = {
        attach: function(context) {
            // Drupal behaviors!
        }
    };
})(this.jQuery);
