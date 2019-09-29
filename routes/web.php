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
Route::get('/dich-vu', 'HomeController@services');
Route::get('/gioi-thieu', 'HomeController@introduce');
Route::get('/chia-se-tu-van', 'HomeController@recommended');
Route::get('/chia-se-tu-van/{slug}.html', 'HomeController@share');
Route::get('/dich-vu/{slug}.html', 'HomeController@show');

// route admin
Route::group(['prefix' => 'admin', 'as' => 'admin.' ], function () {
    Route::namespace('Admin')->group(function () {
        Route::get('/', 'DashboardController@index');
        Route::resource('services', 'ServiceController');
    });
});
