@extends('layouts.app')
@section('title', 'Lỗi thường gặp khi sử dụng máy photocopy, máy in...')
@section('metaName')
    <meta name="description" content="Lỗi thường gặp khi sử dụng máy photocopy, máy in..." />
@endsection
@section('content')
    <!-- Start Bradcaump area -->
    <div class="pt--90">
        <img src="{{asset('images/bg/dich-vu.webp')}}" alt="dịch vụ cho thuê máy photocopy, sửa chữa máy in tận nơi" />
    </div>
    <!-- End Bradcaump area -->
    <!-- Start Blog Area -->
    <div class="page-blog bg--white section-padding--lg blog-sidebar right-sidebar">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 col-12">
                    <div class="blog-page">
                        <div class="page__header">
                            <h1>Lỗi thường gặp của máy in, máy photocopy.</h1>
                        </div>
                        @foreach($services as $key => $service)
                            <!-- Start Single Post -->
                            @include('front.handle-error-item', ['blog' => $service])
                            <!-- End Single Post -->
                        @endforeach
                    </div>
                    <div class="wn__related__product">
                        <h2 class="title__be--2">Sản phẩm nổi bật</h2>
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
                        @include('front.block.aside-product', compact('productsPrior'))
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Blog Area -->
@endsection
