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

    public function getProducts(
        $page = self::DEFAULT_PAGE,
        $number = self::DEFAULT_NUMBER,
        $category = false,
        $exclude = [],
        $orderBy = 'updated_at'
    ) {
        $offset = 0;
        if ($page > 1) {
            $offset = $page * $number;
        }
        if ($category) {
            $products = Product::where('status', self::IS_ACTIVE)
                ->where('category_id', $category)
                ->whereNotIn('id', $exclude)
                ->offset($offset)->take($number)
                ->orderBy($orderBy, 'DESC')->get();
        } else {
            $products = Product::where('status', self::IS_ACTIVE)
                ->whereNotIn('id', $exclude)
                ->offset($offset)->take($number)
                ->orderBy($orderBy, 'DESC')->get();
        }
        return $products;
    }

    public function getProductById($id)
    {
        $product = Product::where('id', $id)->firstOrFail();
        return $product;
    }

    public function getProductsByPrior(
        $page = self::DEFAULT_PAGE,
        $number = self::DEFAULT_NUMBER,
        $category = false,
        $exclude = [],
        $orderBy = 'updated_at'
    ) {
        $offset = 0;
        if ($page > 1) {
            $offset = $page * $number;
        }
        if ($category) {
            $products = Product::where('status', self::IS_ACTIVE)
                ->where('category_id', $category)
                ->where('prior', true)
                ->whereNotIn('id', $exclude)
                ->offset($offset)->take($number)
                ->orderBy($orderBy, 'DESC')->get();
        } else {
            $products = Product::where('status', self::IS_ACTIVE)
                ->where('prior', true)
                ->whereNotIn('id', $exclude)
                ->offset($offset)->take($number)
                ->orderBy($orderBy, 'DESC')->get();
        }
        return $products;
    }

    public function getProductsByCatRoot(
        $category,
        $page = self::DEFAULT_PAGE,
        $number = self::DEFAULT_NUMBER,
        $orderBy = 'updated_at'
    ) {
        $categoriesByRoot = Category::find($category)->children;
        $ids = [];
        foreach ($categoriesByRoot as $key => $item) {
            array_push($ids, $item->id);
        }
        $offset = 0;
        if ($page > 1) {
            $offset = $page * $number;
        }
        $products = Product::where('status', self::IS_ACTIVE)
            ->whereIn('category_id', $ids)
            ->offset($offset)->take($number)
            ->orderBy($orderBy, 'DESC')->get();
        return $products;
    }
}
