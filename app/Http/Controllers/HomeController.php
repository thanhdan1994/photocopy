<?php
namespace App\Http\Controllers;

use App\Service;

class HomeController extends Controller
{
    private $post;

    public function __construct(Service $postModel)
    {
        $this->post = $postModel;
    }

    public function index()
    {
        $posts = $this->post->getServicesPrior();
        return view('front.home', compact('posts'));
    }

    public function show($slug)
    {
        $post = $this->post->getPostServiceDetailBySlug($slug);
        $posts = $this->post->getServices(6);
        return view('front.post', compact('post', 'posts'));
    }
}
