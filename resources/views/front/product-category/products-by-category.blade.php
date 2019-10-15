@extends('layouts.app')
@section('title', $category['name'])
@section('metaName')
    <meta name="description" content="{{ strip_tags($category['name']) }}"/>
@endsection
@section('jsonLd')
    @if(!empty($category->parentCategory))
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 3,
            "name": "<?=$category['name'] ?>",
            "item": "<?= request()->url() ?>"
          },{
            "@type": "ListItem",
            "position": 2,
            "name": "<?=$category->parentCategory['name']?>",
            "item": "<?= env('APP_URL') . '/' . $category->parentCategory['slug'] . '/' .$category->parentCategory['id']. '.html' ?>"
          },{
            "@type": "ListItem",
            "position": 1,
            "name": "Trang chủ",
            "item": "<?=env('APP_URL')?>"
          }]
        }
    </script>
    @endif
@endsection
@section('content')
    <!-- Start Bradcaump area -->
    <div class="pt--90">
        <img src="{{asset('uploads/'.$category->cover)}}" />
    </div>
    <!-- End Bradcaump area -->
    <!-- Start Shop Page -->
    <div class="page-shop-sidebar left--sidebar bg--white section-padding--lg">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 col-12">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="shop__list__wrapper d-flex flex-wrap flex-md-nowrap justify-content-between">
                                <div class="shop__list nav justify-content-center" role="tablist">
                                    <a class="nav-item nav-link active" data-toggle="tab" href="#nav-grid" role="tab"><i class="fa fa-th"></i></a>
                                    <a class="nav-item nav-link" data-toggle="tab" href="#nav-list" role="tab"><i class="fa fa-list"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab__container">
                        <div class="shop-grid tab-pane fade show active" id="nav-grid" role="tabpanel">
                            <div class="row">
                                @foreach($products as $key => $product)
                                <!-- Start Single Product -->
                                <div class="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12 height-440">
                                    <div class="product__thumb height-340">
                                        <a class="first__img" href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
                                            <img class="lazy" data-src="{{asset('uploads/'.$product->cover)}}" alt="{{$product->name}}">
                                        </a>
{{--                                        <div class="hot__box">--}}
{{--                                            <span class="hot-label">BEST SALLER</span>--}}
{{--                                        </div>--}}
                                    </div>
                                    <div class="product__content content--center">
                                        <h4>
                                            <a href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
                                                {{$product->name}}
                                            </a>
                                        </h4>
                                        <ul class="prize">
                                            @if($product->type == 'SELL')
                                                <li>Giá bán: {{number_format($product->price, 0, ',', '.')}} VND</li>
{{--                                                <li class="old_prize">Giá cũ: {{number_format($product->price, 0, ',', '.')}}</li>--}}
                                            @else
                                                <li>Giá thuê: {{number_format($product->price, 0, ',', '.')}} VND</li>
                                            @endif
                                        </ul>
                                        <div class="product__hover--content">
                                            <ul class="rating d-flex">
                                                <li class="on"><i class="fa fa-star-o"></i></li>
                                                <li class="on"><i class="fa fa-star-o"></i></li>
                                                <li class="on"><i class="fa fa-star-o"></i></li>
                                                <li class="on"><i class="fa fa-star-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Product -->
                                @endforeach
                            </div>
                        </div>
                        <div class="shop-grid tab-pane fade" id="nav-list" role="tabpanel">
                            <div class="list__view__wrapper">
                            @foreach($products as $key => $product)
                                <!-- Start Single Product -->
                                <div class="list__view mt--40">
                                    <div class="thumb">
                                        <a class="first__img" href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
                                            <img src="{{asset('uploads/'.$product->cover)}}" alt="product images">
                                        </a>
                                        <a class="second__img animation1" href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
                                            <img src="{{asset('uploads/'.$product->cover)}}" alt="product images">
                                        </a>
                                    </div>
                                    <div class="content">
                                        <h2>
                                            <a href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
                                                {{$product->name}}
                                            </a>
                                        </h2>
                                        <ul class="rating d-flex">
                                            <li class="on"><i class="fa fa-star-o"></i></li>
                                            <li class="on"><i class="fa fa-star-o"></i></li>
                                            <li class="on"><i class="fa fa-star-o"></i></li>
                                            <li class="on"><i class="fa fa-star-o"></i></li>
                                            <li><i class="fa fa-star-o"></i></li>
                                            <li><i class="fa fa-star-o"></i></li>
                                        </ul>
                                        <div class="product-infomation">
                                            <ul>
                                                @foreach(json_decode($product->data) as $key => $item)
                                                    <li>{{$item}}</li>
                                                @endforeach
                                            </ul>
                                        </div>
                                        <ul class="prize__box">
                                            <li>Giá bán: {{number_format($product->price, 0, ',', '.')}}</li>
{{--                                            <li class="old__prize">{{number_format($product->price, 0, ',', '.')}}</li>--}}
                                        </ul>
                                    </div>
                                </div>
                                <!-- End Single Product -->
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
            <div class="row">
                <div class="col-lg-9 col-12">
                    <div class="blog-page">
                        <div class="page__header">
                            <h2>Danh sách dịch vụ của chúng tôi</h2>
                        </div>
                    @foreach($services as $key => $service)
                        <!-- Start Single Post -->
                        @include('front.blog-item', ['blog' => $service])
                        <!-- End Single Post -->
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Shop Page -->
@endsection
