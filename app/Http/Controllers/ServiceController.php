<?php
namespace App\Http\Controllers;

use App\Product;
use App\Service;

class ServiceController extends Controller
{
    private $productRepo;
    private $serviceRepo;
    public function __construct(Product $product,Service $service)
    {
        $this->productRepo = $product;
        $this->serviceRepo = $service;
    }

    public function show($slug)
    {
        $service = $this->serviceRepo->getPostServiceDetailBySlug($slug);
        $productsPrior = $this->productRepo->getProductsByPrior(1, 6, false, [], 'updated_at');
        $services = $this->serviceRepo->getPosts(1, 50, Service::IS_SERVICE, $service->id);
        return view('front.service.service-detail', compact('service', 'services', 'productsPrior'));
    }

    public function index()
    {
        $productsPrior = $this->productRepo->getProductsByPrior(1, 6, false, [], 'updated_at');
        $services = $this->serviceRepo->getPosts(1, 10, Service::IS_SERVICE);
        return view('front.services', compact('services', 'productsPrior'));
    }
}
