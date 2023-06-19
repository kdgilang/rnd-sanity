(function ($) {
    'use strict';

    var alime_window = $(window);
    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#alimeNav').classyNav();
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
            scrollText: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path fill="#ffffff" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>'
        });
    }

    // *********************************
    // :: 14.0 Prevent Default 'a' Click
    // *********************************
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    $('.btn-modal').on('click', function (e) {
        e.preventDefault();
        var target = $($(this).data('target'));
        target.fadeIn(200);
        setTimeout(function() {
            target.addClass('show');
        }, 200);
    });

    $('.btn-close-modal').on('click', function (e) {
        e.preventDefault();

        $(this).parents(".modal")
            .fadeOut(100)
                .removeClass('show')
            
    })

})(jQuery);