(function ($) {
    'use strict';

    var alime_window = $(window);

    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************

        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });

    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#alimeNav').classyNav();
    }

    // *********************************
    // :: 3.0 Welcome Slides Active Code
    // *********************************

    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome-slides');

        welcomeSlider.each(function() {
            var animate = $(this).data('type');
            $(this).owlCarousel({
                items: 1,
                animateOut: animate === 'fade' ? 'fadeOut' : false,
                loop: true,
                autoplay: true,
                smartSpeed: 1000,
                autoplayTimeout: 10000,
                nav: true,
                navText: [('<i class="fa fa-angle-left"></i>'), ('<i class="fa fa-angle-right"></i>')]
            });

            $(this).on('translate.owl.carousel', function () {
                var layer = $("[data-animation]");
                layer.each(function () {
                    var anim_name = $(this).data('animation');
                    $(this).removeClass('animated ' + anim_name).css('opacity', '0');
                });
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $('.card-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            navText: [('<i class="fa fa-angle-left"></i>'), ('<i class="fa fa-angle-right"></i>')],
            responsive:{
                0:{
                    items: 1
                },
                600:{
                    items: 2
                },
                1000:{
                    items: 4
                }
            }
        });
    }


    // *********************************
    // :: 5.0 Masonary Gallery Active Code
    // *********************************
    if ($.fn.imagesLoaded) {
        $('.alime-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.alime-portfolio').isotope({
                itemSelector: '.alime-portfolio__item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.alime-portfolio__item'
                }
            });
        });
    }

    // ***********************************
    // :: 6.0 Portfolio Button Active Code
    // ***********************************
    
    $(document).on('click', '.portfolio-menu button.btn', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    });

    // ********************************
    // :: 7.0 Search Button Active Code
    // ********************************
    $('.search-btn').on('click', function () {
        $('.search-form').toggleClass('search-form-active');
    });

    // ************************
    // :: 8.0 Stick Active Code
    // ************************

    alime_window.on('scroll', function () {
        if (alime_window.scrollTop() > 0) {
            $('.main-header-area').addClass('sticky');
        } else {
            $('.main-header-area').removeClass('sticky');
        }
    });

    // *********************************
    // :: 9.0 Magnific Popup Active Code
    // *********************************
    if ($.fn.magnificPopup) {
        $('.video-play-btn').magnificPopup({
            type: 'iframe'
        });
        $('.portfolio-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                preload: [0, 2],
                navigateByImgClick: true,
                tPrev: 'Previous',
                tNext: 'Next'
            }
        });
    }

    // **************************
    // :: 10.0 Tooltip Active Code
    // **************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************
    // :: 11.0 WOW Active Code
    // ***********************
    if (alime_window.width() > 767) {
            new WOW().init();
    }

    // ****************************
    // :: 12.0 Jarallax Active Code
    // ****************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.5
        });
    }

    // ****************************
    // :: 13.0 Scrollup Active Code
    // ****************************
    if ($.fn.scrollUp) {
        alime_window.scrollUp({
            scrollSpeed: 1000,
            scrollText: '<i class="fa fa-angle-up"</i>'
        });
    }

    // *********************************
    // :: 14.0 Prevent Default 'a' Click
    // *********************************
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

})(jQuery);