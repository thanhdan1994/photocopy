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
            'public/css/open-iconic-bootstrap.min.css',
            // 'public/css/aos.css',
            'public/css/style.css'
        ],
        'public/css/bundle.min.css'
    )
    .scripts(
        [
            'public/js/jquery.min.js',
            'public/js/bootstrap.min.js',
            'public/js/aos.js',
            'public/js/main.js',
        ],
        'public/js/bundle.min.js'
    )
