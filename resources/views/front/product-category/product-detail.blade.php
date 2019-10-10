@extends('layouts.app')
    @section('title', $product->name)
    @section('metaName')
        <meta name="description" content="{{ strip_tags($product->description) }}"/>
        <meta property="og:type" content="product"/>
        <meta property="og:title" content="{{ $product->name }}"/>
        <meta property="og:description" content="{{ strip_tags($product->description) }}"/>
        @if(!is_null($product->cover))
            <meta property="og:image" content="{{ asset("uploads/$product->cover") }}"/>
        @endif
    @endsection
@php
    $category = $product->category;
    $categoryRoot = $category->parentCategory;
@endphp
@section('jsonLd')
    <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 4,
            "name": "<?=$product->name ?>",
            "item": "<?=request()->url()?>"
          },{
            "@type": "ListItem",
            "position": 3,
            "name": "<?=$category['name'] ?>",
            "item": "<?= env('APP_URL') . '/' . $categoryRoot['slug'] . '/' . $category['slug'] . '/' .$category['id']. '.html'?>"
          },{
            "@type": "ListItem",
            "position": 2,
            "name": "<?=$categoryRoot['name']?>",
            "item": "<?= env('APP_URL') . '/' . $categoryRoot['slug'] . '/' .$categoryRoot['id'] . '.html' ?>"
          },{
            "@type": "ListItem",
            "position": 1,
            "name": "Trang chủ",
            "item": "<?=env('APP_URL')?>"
          }]
        }
    </script>
    <script type="application/ld+json">
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "<?php echo $product->name ?>",
          "image": [
            "<?php echo asset('uploads/'. $product->cover)?>"
           ],
          "description": "<?=$product->description?>",
          "offers": {
            "@type": "Offer",
            "url": "<?=request()->url()?>",
            "priceCurrency": "VND",
            "price": "<?=$product->price?>",
            "seller": {
              "@type": "Organization",
              "name": "Công ty bla bla"
            }
          }
        }
    </script>
@endsection
@section('content')
    <div class="ftco-section">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{env('APP_URL')}}">Trang chủ</a></li>
                <li class="breadcrumb-item">
                    <a href="{{env('APP_URL') . '/' . $categoryRoot['slug']. '/' .$categoryRoot['id'].'.html'}}">
                        {{$categoryRoot['name']}}
                    </a>
                </li>
                <li class="breadcrumb-item">
                    <a href="{{env('APP_URL') . '/' . $categoryRoot['slug'] . '/' . $category['slug'] . '/' .$category['id']. '.html'}}">
                        {{$category['name']}}
                    </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    {{$product->name}}
                </li>
            </ol>
        </nav>
        <div class="container">
            <div class="block-3 d-md-flex" data-aos="fade-left">
                <div class="image" style="background-image: url({{asset('uploads/'.$product->cover)}}); "></div>
                <div class="text">
                    <h1 class="heading">{{$product->name}}</h1>
                    <span class="price-detail">Giá: <span>{{number_format($product->price, 0, ',', '.')}} VNĐ / {{$product->measure}}</span></span>
                    <ul>
                        @foreach(json_decode($product->data) as $key => $item)
                            <li>{{$item}}</li>
                        @endforeach
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 block-img-fluid">
                    {!! regexContent($product->body) !!}
                </div> <!-- .col-md-8 -->
                <div class="col-md-4 sidebar">
                    <div class="sidebar-box">
                        <form action="#" class="search-form">
                            <div class="form-group">
                                <span class="icon fa fa-search"></span>
                                <input type="text" class="form-control" placeholder="Type a keyword and hit enter">
                            </div>
                        </form>
                    </div>
                    <div class="sidebar-box">
                        <div class="categories">
                            <h3>Categories</h3>
                            <li><a href="#">Courses <span>(12)</span></a></li>
                            <li><a href="#">News <span>(22)</span></a></li>
                            <li><a href="#">Design <span>(37)</span></a></li>
                            <li><a href="#">HTML <span>(42)</span></a></li>
                            <li><a href="#">Web Development <span>(14)</span></a></li>
                        </div>
                    </div>
                    <div class="sidebar-box">
                        <img src="/images/person_1.jpg" alt="Image placeholder" class="img-fluid mb-4">
                        <h3>About The Author</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                        <p><a href="#" class="btn btn-primary btn-sm">Read More</a></p>
                    </div>

                    <div class="sidebar-box">
                        <h3>Tag Cloud</h3>
                        <div class="tagcloud">
                            <a href="#" class="tag-cloud-link">Life</a>
                            <a href="#" class="tag-cloud-link">Sport</a>
                            <a href="#" class="tag-cloud-link">Tech</a>
                            <a href="#" class="tag-cloud-link">Travel</a>
                            <a href="#" class="tag-cloud-link">Life</a>
                            <a href="#" class="tag-cloud-link">Sport</a>
                            <a href="#" class="tag-cloud-link">Tech</a>
                            <a href="#" class="tag-cloud-link">Travel</a>
                        </div>
                    </div>

                    <div class="sidebar-box">
                        <h3>Paragraph</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                    </div>
                </div>
            </div>
            <div class="block-more" style="text-align: center">
                <h4>Sản phẩm khác của chúng tôi</h4>
                <div class="row multiple-items">
                    @foreach($products as $key => $product)
                        @include('front.product-category.product-item', compact('product'))
                    @endforeach
                </div>
            </div>
        </div>
    </div> <!-- .section -->
@endsection
