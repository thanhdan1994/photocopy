/*********************************************************************************

    Template Name: Boighor Bookshop Responsive Bootstrap4 Template
    Version: 1.0

**********************************************************************************/


/*================================================
            [ INDEX ]
===================================================

    Scroll Up Activation
    Mobile Menu
    Sticky Header
    Banner Slider Active
    Testimonial Slick Carousel
    Testimonial Slick Carousel As Nav
    Product Activation
    Brand Activation
    Blog Activation
    Module Activation
    Cartbox Toggler
    Search Toggler
    Cart Toggler
    Setting Toggler
    Slider Activation
    Slider Text Activation
    Setting Option
    Video
    Gallery Mesonry Activation
    CheckOut Page
    Price Slider Active
    Dropdown


=================================================================================
            [ END INDEX ]
================================================================================*/

(function($) {
    'use strict';



/*============ Scroll Up Activation ============*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'slide'
    });

/*=========== Mobile Menu ===========*/
    $('nav.mobilemenu__nav').meanmenu({
        meanMenuClose: 'X',
        meanMenuCloseSize: '18px',
        meanScreenWidth: '991',
        meanExpandableChildren: true,
        meanMenuContainer: '.mobile-menu',
        onePage: true
    });
    $('.mobile-menu .meanmenu-reveal').attr('aria-label', 'Danh mục dịch vụ của chúng tôi');

/*=========== Sticky Header ===========*/
    function stickyHeader() {
        $(window).on('scroll', function () {
            var sticky_menu = $('.sticky__header');
            var pos = sticky_menu.position();
            if (sticky_menu.length) {
                var windowpos = sticky_menu.top;
                $(window).on('scroll', function () {
                  var windowpos = $(window).scrollTop();
                  if (windowpos > pos.top + 250) {
                    sticky_menu.addClass('is-sticky');
                  } else {
                    sticky_menu.removeClass('is-sticky');
                  }
            });
          }
        });
    }
    stickyHeader();

/*=============  Produst Activation  ==========*/
    $('.productcategory__slide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: false,
        autoplayTimeout: 10000,
        items:4,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
        dots: false,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:4
            },
            768:{
                items:3
            },
            576:{
                items:2
            },
            1920:{
                items:4
            }
        }
    });


/*=============  Produst Activation  ==========*/
    $('.productcategory__slide--2').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: false,
        autoplayTimeout: 10000,
        items:3,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
        dots: false,
        lazyLoad: true,
        responsive:{
            0:{
              items:1
            },
            576:{
              items:2
            },
            768:{
              items:3
            },
            1920:{
              items:3
            }
        }
    });


/*=============  Product Activation ============*/
    $('.product__indicator--4').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: false,
        autoplayTimeout: 10000,
        items:4,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
        dots: false,
        lazyLoad: true,
        responsive:{
            0:{
              items:1
            },
            576:{
              items:2
            },
            768:{
              items:3
            },
			992:{
                items:4
            },
            1920:{
              items:4
            }
        }
    });


/*=============  Product Activation  ==============*/
    $('.furniture--4').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        autoplay: false,
        autoplayTimeout: 10000,
        items:4,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
        dots: false,
        lazyLoad: true,
        responsive:{
            0:{
              items:1
            },
            576:{
              items:2
            },
            768:{
              items:3
            },
			992:{
                items:4
            },
            1920:{
              items:4
            }
        }
    });

})(jQuery);

