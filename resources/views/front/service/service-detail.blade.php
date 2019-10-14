@extends('layouts.app')
@section('title', $service->name)
@section('metaName')
    <meta name="description" content="{{$service->excerpt}}" />
@endsection
@section('content')
    <!-- Start Bradcaump area -->
    <div class="ht__bradcaump__area bg-image--6">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="bradcaump__inner text-center">
                        <h2 class="bradcaump-title">Blog Details</h2>
                        <nav class="bradcaump-content">
                            <a class="breadcrumb_item" href="index.html">Home</a>
                            <span class="brd-separetor">/</span>
                            <span class="breadcrumb_item active">Blog-Details</span>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Bradcaump area -->
    <div class="page-blog-details section-padding--lg bg--white">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 col-12">
                    <div class="blog-details content">
                        <article class="blog-post-details">
                            <div class="post-thumbnail">
                                <img src="{{asset('uploads/'. $service->cover)}}" alt="blog images">
                            </div>
                            <div class="post_wrapper">
                                <div class="post_header">
                                    <h1>{{$service->name}}</h1>
                                    <div class="blog-date-categori">
                                        <ul>
                                            <li>June 27, 2018</li>
                                            <li><a href="#" title="Posts by boighor" rel="author">boighor</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="post_content">
                                    {!! $service->description !!}
                                </div>
                            </div>
                        </article>
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
@endsection
