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
                                <div class="orderby__wrapper">
                                    <span>Sắp xếp theo</span>
                                    <select class="shot__byselect">
                                        <option>Giá tiền</option>
                                        <option>Mới nhất</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab__container">
                        <div class="shop-grid tab-pane fade show active" id="nav-grid" role="tabpanel">
                            <div class="row">
                                @foreach($products as $key => $product)
                                <!-- Start Single Product -->
                                <div class="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div class="product__thumb">
                                        <a class="first__img" href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
                                            <img src="{{asset('uploads/'.$product->cover)}}" alt="product image">
                                        </a>
                                        <a class="second__img animation1" href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
                                            <img src="{{asset('uploads/'.$product->cover)}}" alt="product image">
                                        </a>
                                        <div class="hot__box">
                                            <span class="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div class="product__content content--center">
                                        <h4>
                                            <a href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
                                                {{$product->name}}
                                            </a>
                                        </h4>
                                        <ul class="prize d-flex">
                                            <li>{{number_format($product->price, 0, ',', '.')}}</li>
                                            <li class="old_prize">{{number_format($product->price, 0, ',', '.')}}</li>
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
                                        <ul class="prize__box">
                                            <li>{{number_format($product->price, 0, ',', '.')}}</li>
                                            <li class="old__prize">{{number_format($product->price, 0, ',', '.')}}</li>
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
                        <aside class="widget recent_widget">
                            <h3 class="widget-title">Sản phẩm được yêu thích</h3>
                            <div class="recent-posts">
                                <ul>
                                    @foreach($productsPrior as $key => $product)
                                        <li>
                                            <div class="post-wrapper d-flex">
                                                <div class="thumb">
                                                    <a href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
                                                        <img src="{{asset('uploads/'.$product->cover)}}" alt="blog images">
                                                    </a>
                                                </div>
                                                <div class="content">
                                                    <h4>
                                                        <a href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
                                                            {{$product->name}}
                                                        </a>
                                                    </h4>
                                                    <p>{{number_format($product->price, 0, ',', '.')}} VNĐ</p>
                                                </div>
                                            </div>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        </aside>
                        <!-- End Single Widget -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Shop Page -->
@endsection
