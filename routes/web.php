<?php

use App\Category;
use Spatie\Sitemap\SitemapGenerator;
use Spatie\Sitemap\Tags\Url;
use Carbon\Carbon;
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
Route::get('/{slugParent}/{id}.html', 'ProductController@productsByRootCategory');
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
        Route::get('/create-sitemap', function () {
            $sitemap = SitemapGenerator::create(env('APP_URL'))
                ->getSitemap()
                ->add(Url::create('/')
                    ->setLastModificationDate(Carbon::yesterday())
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                    ->setPriority(0.1));
            $menu = Category::where('status', true)->get();
            foreach ($menu as $key => $item) {
                $url = env('APP_URL') . '/' . $item->slug . '/' . $item->id . '.html';
                if ($item->parent) {
                    $url = env('APP_URL') . '/' . $item->parentCategory['slug'] . '/' . $item->slug . '/' . $item->id . '.html';
                }
                $sitemap->add(Url::create($url)
                    ->setLastModificationDate(Carbon::yesterday())
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                    ->setPriority(0.1));
            }

            $services = \App\Service::all();
            foreach ($services as $key => $item) {
                $url = env('APP_URL') . '/dich-vu/' . $item->slug . '.html';
                if (!$item->type) {
                    $url = env('APP_URL') . '/chia-se-tu-van/' . $item->slug . '.html';
                }
                $sitemap->add(Url::create($url)
                    ->setLastModificationDate(Carbon::yesterday())
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                    ->setPriority(0.1));
            }
            $products = \App\Product::where('status', 1)->get();
            foreach ($products as $key => $item) {
                $url = env('APP_URL') . '/' . $item->category['slug'] . '/chi-tiet/' . $item['slug'] . '/pro-' . $item->id . '.html';
                $sitemap->add(Url::create($url)
                    ->setLastModificationDate(Carbon::yesterday())
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                    ->setPriority(0.1));
            }


            $sitemap->writeToFile(public_path('sitemap.xml'));
        });
    });
});
