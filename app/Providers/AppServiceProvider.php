<?php

namespace App\Providers;

use App\Category;
use App\Service;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (Schema::hasTable('services')) {
            $posts = Service::take(3)->get();
            View::share('hotServices', $posts);
        }

        if (Schema::hasTable('categories')) {
            $menu = Category::where('parent', 0)->where('status', true)->get();
            View::share('menu', $menu);
        }
    }
}
