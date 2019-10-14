<?php

namespace App\Http\Controllers;

use App\Product;
use App\Service;

class HomeController extends Controller
{
    private $productRepo;
    private $serviceRepo;
    public function __construct(Product $product,Service $service)
    {
        $this->productRepo = $product;
        $this->serviceRepo = $service;
    }

    public function index()
    {
        $products = $this->productRepo->getProductsByPrior(1, 6, false, [], 'updated_at');
        $services = $this->serviceRepo->getPosts(1, 6, Service::IS_SERVICE);
        $productsPrior = $this->productRepo->getProductsByPrior(1, 6, false, [], 'updated_at');
        return view('front.home', compact('products', 'services', 'productsPrior'));
    }
}
