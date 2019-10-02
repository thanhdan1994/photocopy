<?php

namespace App\Http\Controllers;

use App\Category;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private $productRepo;
    public function __construct(Product $product)
    {
        $this->productRepo = $product;
    }

    public function sellByCategory($slugParent, $slugChild, $id)
    {
        $products = $this->productRepo->getProducts('1', '10', $id);
        $category = Category::where('id', $id)->firstOrFail();
        $productsPrior = $this->productRepo->getProductsByPrior(1, 6, false, [], 'updated_at');
        return view('front.product-category.products-by-category', compact('products', 'productsPrior', 'category'));
    }

    public function show($slugCategory, $slug, $id)
    {
        $product = $this->productRepo->getProductById($id);
        $products = $this->productRepo->getProducts(1, 3, $product->category_id, []);
        return view('front.product-category.product-detail', compact('product', 'products'));
    }

    public function productsByRootCategory($slugParent, $id)
    {
        $products = $this->productRepo->getProductsByCatRoot($id, 1, 15);
        $category = Category::where('id', $id)->firstOrFail();
        $productsPrior = $this->productRepo->getProductsByPrior(1, 6, false, [], 'updated_at');
        return view('front.product-category.products-by-category', compact('products', 'productsPrior', 'category'));
    }
}
