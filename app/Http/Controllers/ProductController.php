<?php
namespace App\Http\Controllers;

use App\Category;
use App\Product;
use App\Service;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private $productRepo;
    private $serviceRepo;
    public function __construct(Product $product,Service $service)
    {
        $this->productRepo = $product;
        $this->serviceRepo = $service;
    }


    public function show($slugCategory, $slug, $id)
    {
        $product = $this->productRepo->getProductById($id);
        $products = $this->productRepo->getProducts(1, 3, $product->category_id, []);
        $productsPrior = $this->productRepo->getProductsByPrior(1, 6, false, [], 'updated_at');
        return view('front.product-category.product-detail', compact('product', 'products', 'productsPrior'));
    }

    public function sellByCategory($slugParent, $slugChild, $id)
    {
        $products = $this->productRepo->getProducts('1', '10', $id);
        $category = Category::where('id', $id)->firstOrFail();
        $productsPrior = $this->productRepo->getProductsByPrior(1, 6, false, [], 'updated_at');
        $services = $this->serviceRepo->getPosts(1, 50, Service::IS_SERVICE);
        return view('front.product-category.products-by-category', compact('products', 'productsPrior', 'category', 'services'));
    }

    public function productsByRootCategory($slugParent, $id)
    {
        $products = $this->productRepo->getProductsByCatRoot($id, 1, 15);
        $category = Category::where('id', $id)->firstOrFail();
        $productsPrior = $this->productRepo->getProductsByPrior(1, 6, false, [], 'updated_at');
        $services = $this->serviceRepo->getPosts(1, 50, Service::IS_SERVICE);
        return view('front.product-category.products-by-category', compact('products', 'productsPrior', 'category', 'services'));
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function search()
    {
        $productsPrior = $this->productRepo->getProductsByPrior(1, 6, false, [], 'updated_at');
        if (request()->has('q') && request()->input('q') != '') {
            $products = $this->productRepo->searchProduct(request()->input('q'));
            return view('front.product-category.products-by-category', compact('products', 'productsPrior'));
        }
    }
}
