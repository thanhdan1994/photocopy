<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    const IS_ACTIVE = 1;
    const IS_SERVICE = 1;
    const IS_SHARE_INFORMATION = 0;
    const DEFAULT_NUMBER = 10;
    const DEFAULT_PAGE = 1;
    public function getPosts(
        $page = self::DEFAULT_PAGE,
        $number = self::DEFAULT_NUMBER,
        $type = self::IS_SERVICE,
        $exclude = []
    ) {
        $offset = 0;
        if ($page > 1) {
            $offset = $page * $number;
        }
        if (!is_array($exclude)) {
            $posts = Service::where([
                ['type', $type],
                [ 'id', '!=', $exclude]
            ])->where('status', self::IS_ACTIVE)->offset($offset)->take($number)->orderBy('updated_at', 'DESC')->get();
        } else {
            $posts = Service::where('type', $type)->where('status', self::IS_ACTIVE)->whereNotIn('id', $exclude)->offset($offset)->take($number)->orderBy('updated_at', 'DESC')->get();
        }
        return $posts;
    }
    /**
     * @return mixed
     */
    public function getServicesPrior()
    {
        $posts = Service::where('type', self::IS_SERVICE)->where('status', self::IS_ACTIVE)->take(6)->get();
        return $posts;
    }

    /**
     * @param $slug
     * @return mixed
     */
    public function getPostServiceDetailBySlug($slug)
    {
        $post = Service::where('slug', $slug)->where('status', self::IS_ACTIVE)
            ->first();
        return $post;
    }


}
