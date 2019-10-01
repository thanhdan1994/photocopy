<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    const DEFAULT_PAGE = 1;
    const DEFAULT_NUMBER = 10;
    const IS_ACTIVE = 1;
    /**
     * Get the category that owns the product.
     */
    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    public function getProducts($page = self::DEFAULT_PAGE, $number = self::DEFAULT_NUMBER, $category = false, $exclude = [])
    {
        $offset = 0;
        if ($page > 1) {
            $offset = $page * $number;
        }
        if ($category) {
            $products = Product::where('status', self::IS_ACTIVE)->where('category_id', $category)->whereNotIn('id', $exclude)->offset($offset)->take($number)->get();
        } else {
            $products = Product::where('status', self::IS_ACTIVE)->whereNotIn('id', $exclude)->offset($offset)->take($number)->get();
        }
        return $products;
    }

    public function getProductById($id)
    {
        $product = Product::where('id', $id)->firstOrFail();
        return $product;
    }
}
