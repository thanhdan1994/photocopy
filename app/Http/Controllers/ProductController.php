<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private $productRepo;
    public function __construct(Product $product)
    {
        $this->productRepo = $product;
    }

    public function sellByCategory($slug, $id)
    {

        $products = $this->productRepo->getProducts('1', '10', $id);
        return view('front.product-category.sell-by-category', compact('products'));
    }
}
