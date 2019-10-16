@extends('layouts.app')
@section('title', $service->name)
@section('metaName')
    <meta name="description" content="{{$service->excerpt}}" />
@endsection
@section('content')
    <div class="page-blog-details section-padding--lg bg--white">
        <!-- Start Bradcaump area -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{env('APP_URL')}}">Trang chủ</a></li>
                <li class="breadcrumb-item">
                    <a href="/dich-vu">
                        Dịch vụ
                    </a>
                </li>
                <li class="breadcrumb-item">
                    {{$service->name}}
                </li>
            </ol>
        </nav>
        <!-- End Bradcaump area -->
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
                        @include('front.block.aside-product', compact('productsPrior'))
                        <!-- End Single Widget -->
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
