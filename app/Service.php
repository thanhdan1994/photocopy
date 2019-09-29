<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    public function getServices($number = 50)
    {
        $posts = Service::take($number)->get();
        return $posts;
    }
    /**
     * @return mixed
     */
    public function getServicesPrior()
    {
        $posts = Service::take(6)->get();
        return $posts;
    }

    /**
     * @param $slug
     * @return mixed
     */
    public function getPostServiceDetailBySlug($slug)
    {
        $post = Service::where('slug', $slug)
            ->first();
        return $post;
    }


}
