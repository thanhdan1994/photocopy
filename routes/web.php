<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// route front
Route::get('/', 'HomeController@index');
Route::get('/dich-vu', 'HomeController@service');
Route::get('/gioi-thieu.html', 'HomeController@introduce');
Route::get('/chia-se-tu-van', 'HomeController@share');
Route::get('/chia-se-tu-van/{slug}.html', 'HomeController@shareShow');
Route::get('/dich-vu/{slug}.html', 'HomeController@show');
Route::get('/{slugParent}.html', 'ProductController@sellAll');
Route::get('/{slugParent}/{slugChild}/{id}.html', 'ProductController@sellByCategory');
Route::get('/{slugCategory}/chi-tiet/{slug}/pro-{id}.html', 'ProductController@show');

// route admin
/**
 * Admin routes
 */
Route::namespace('Admin')->group(function () {
    Route::get('admin/login', 'LoginController@showLoginForm')->name('admin.login');
    Route::post('admin/login', 'LoginController@login')->name('admin.login');
    Route::get('admin/logout', 'LoginController@logout')->name('admin.logout');
});
Route::group(['prefix' => 'admin', 'middleware' => ['employee'], 'as' => 'admin.' ], function () {
    Route::namespace('Admin')->group(function () {
        Route::get('/', 'DashboardController@index');
        Route::resources([
            'services' => 'ServiceController',
            'introduces' => 'IntroduceController',
            'products' => 'ProductController',
            'categories' => 'CategoryController'
        ]);
    });
});
