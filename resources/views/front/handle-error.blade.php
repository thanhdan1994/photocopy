@extends('layouts.app')
@section('title', 'Lỗi thường gặp khi sử dụng máy photocopy, máy in...')
@section('metaName')
    <meta name="description" content="Lỗi thường gặp khi sử dụng máy photocopy, máy in..." />
@endsection
@section('jsonLd')
    <script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "url": "<?=request()->url()?>",
        "name": "Hoang Lai - Lỗi thường gặp khi sử dụng máy photocopy, máy in...",
        "description": "Hoang Lai là công ty hàng đầu về lĩnh vực máy photocopy, hiện công ty đang phân phối các dòng máy photocopy Ricoh với giá tốt, kèm theo các dịch vụ cho thuê máy photocopy uy tín, chất lượng."
    }
    </script>
@endsection
@section('content')
    <!-- Start Bradcaump area -->
    <div class="pt--90">
        <picture>
            <source type="image/webp" srcset="{{asset('images/banner/xu-ly-su-co.webp')}}">
            <source type="image/jpeg" srcset="{{asset('images/banner/xu-ly-su-co.jpg')}}">
            <img src="{{asset('images/banner/xu-ly-su-co.jpg')}}" alt="dịch vụ cho thuê máy photocopy, sửa chữa máy in tận nơi" />
        </picture>
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
