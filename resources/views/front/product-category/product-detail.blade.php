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
    <!-- Start main Content -->
    <div class="maincontent bg--white pb--55">
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
            <div class="row">
                <div class="col-lg-9 col-12">
                    <div class="wn__single__product">
                        <div class="row">
                            <div class="col-lg-6 col-12">
                                <div class="wn__fotorama__wrapper">
                                    <div class="fotorama wn__fotorama__action" data-nav="thumbs">
                                        @if($images = json_decode($product->images))
                                            @foreach($images as $image)
                                                <img src="{{asset($image)}}" alt="">
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="product__info__main">
                                    <h1>{{$product->name}}</h1>
                                    <div class="price-box">
                                        <span>{{number_format($product->price, 0, ',', '.')}} VND</span>
                                    </div>
                                    <div class="product-infomation">
                                        <ul>
                                            @foreach(json_decode($product->data) as $key => $item)
                                                <li>{{$item}}</li>
                                            @endforeach
                                        </ul>
                                    </div>
                                    <div class="product__overview">
                                        <p>{{$product->description}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product__info__detailed">
                        <div class="pro_details_nav nav justify-content-start" role="tablist">
                            <a class="nav-item nav-link active" data-toggle="tab" href="#nav-details" role="tab">Chi tiết sản phẩm</a>
                        </div>
                        <div class="tab__container">
                            <!-- Start Single Tab Content -->
                            <div class="pro__tab_label tab-pane fade show active" id="nav-details" role="tabpanel">
                                <div class="description__attribute">
                                    {!! $product->body !!}
                                </div>
                            </div>
                            <!-- End Single Tab Content -->
                        </div>
                    </div>
                    <div class="wn__related__product pt--80 pb--50">
                        <div class="section__title text-center">
                            <h2 class="title__be--2">Các sản phẩm khác</h2>
                        </div>
                        <div class="row mt--60">
                            <div class="productcategory__slide--2 arrows_style owl-carousel owl-theme">
                                @foreach($products as $key => $product)
                                    <!-- Start Single Product -->
                                    @include('front.product-item', compact('product'))
                                    <!-- Start Single Product -->
                                @endforeach
                            </div>
                        </div>
                    </div>
                    <div class="wn__related__product">
                        <div class="section__title text-center">
                            <h2 class="title__be--2">Sản phẩm được quan tâm nhiều nhất</h2>
                        </div>
                        <div class="row mt--60">
                            <div class="productcategory__slide--2 arrows_style owl-carousel owl-theme">
                                @foreach($productsPrior as $key => $product)
                                    <!-- Start Single Product -->
                                    @include('front.product-item', compact('product'))
                                    <!-- Start Single Product -->
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-12 md-mt-40 sm-mt-40">
                    <div class="wn__sidebar">
                        <!-- Start Single Widget -->
                        @include('front.block.aside-product', compact('productsPrior'))
                        <!-- End Single Widget -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End main Content -->
@endsection
