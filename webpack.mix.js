let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .styles(
        [
            'public/css/bootstrap.min.css',
            'public/css/plugins/font-awesome.min.css',
            // 'public/css/plugins/bicon.min.css',
            // 'public/css/plugins/pe-icon-7-stroke.css',
            'public/css/plugins/slick.min.css',
            // 'public/css/plugins/fakeloader.css',
            // 'public/css/plugins/nivo-slider.css',
            // 'public/css/plugins/nivo-preview-2.css',
            'public/css/plugins/owl.carousel.min.css',
            // 'public/css/plugins/owl.theme.default.min.css',
            'public/css/plugins/material-design-iconic-font.min.css',
            'public/css/plugins/animation.css',
            'public/css/plugins/fancybox.css',
            'public/css/plugins/mainmenu.css',
            'public/css/plugins/fotorama.css',
            // 'public/css/plugins/simple-line-icons.css',
            // 'public/css/plugins/jquery-ui.min.css',
            // 'public/css/plugins/lightbox.css',
            'public/style.css',
            'public/css/custom.css'
        ],
        'public/css/bundle.min.css'
    )
    .scripts(
        [
            'public/js/vendor/jquery-3.4.1.min.js',
            'public/js/popper.min.js',
            'public/js/bootstrap.min.js',
            'public/js/plugins.js',
            'public/js/active.js',
            'public/js/lazyload.js',
        ],
        'public/js/bundle.min.js'
    )
