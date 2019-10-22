<?php

namespace App\Providers;

use App\Category;
use App\Option;
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

        if (Schema::hasTable('options')) {
            $options = Option::get();
            $descriptionFooter = 'Cung cấp máy photocopy, cho thuê máy photocopy, sữa chữa máy in, nạp mực máy in, máy photocopy tận nơi giá rẻ nhanh chóng';
            $phoneGlobal = '0982390731';
            $emailGlobal = 'hoangnhan1111@gmail.com';
            foreach ($options as $key => $value) {
                $descriptionFooter = $value['option_name'] == 'descriptionFooter' ? $value['option_value'] : $descriptionFooter;
                $phoneGlobal = $value['option_name'] == 'phoneGlobal' ? $value['option_value'] : $phoneGlobal;
                $emailGlobal = $value['option_name'] == 'emailGlobal' ? $value['option_value'] : $emailGlobal;
            }
            View::share('descriptionFooter', $descriptionFooter);
            View::share('phoneGlobal', $phoneGlobal);
            View::share('emailGlobal', $emailGlobal);
        }
    }
}
