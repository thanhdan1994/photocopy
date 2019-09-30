<?php
namespace App\Http\Controllers;

use App\Introduce;
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
        $posts = $this->post->getPosts(1, 6, Service::IS_SERVICE);
        return view('front.home', compact('posts'));
    }

    public function show($slug)
    {
        $post = $this->post->getPostServiceDetailBySlug($slug);
        $posts = $this->post->getPosts(1, 50, Service::IS_SERVICE, $post->id);
        return view('front.post', compact('post', 'posts'));
    }

    public function share()
    {
        $posts = $this->post->getPosts(1, 50, Service::IS_SHARE_INFORMATION);
        return view('front.share-information', compact('posts'));
    }

    public function shareShow($slug)
    {
        $post = $this->post->getPostServiceDetailBySlug($slug);
        $posts = $this->post->getPosts(1, 50, Service::IS_SHARE_INFORMATION, $post->id);
        return view('front.share-detail', compact('post', 'posts'));
    }

    public function introduce()
    {
        $introduce = Introduce::first();
        return view('front.introduce', compact('introduce'));
    }

    public function service()
    {
        $posts = $this->post->getPosts(1, 10, Service::IS_SERVICE);
        return view('front.services', compact('posts'));
    }
}
