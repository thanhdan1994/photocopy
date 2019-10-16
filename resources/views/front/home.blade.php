@extends('layouts.app')

@section('title', 'Cho thuê máy in, bán máy in, sữa chữa máy in nhanh chóng giá rẻ tại Tp.HCM')
@section('metaName')
    <meta name="description" content="Chí Vinh là công ty hàng đầu về lĩnh vực máy photocopy, hiện công ty đang phân phối các dòng máy photocopy Ricoh với giá tốt, kèm theo các dịch vụ cho thuê máy photocopy uy tín, chất lượng." />
@endsection

@section('content')
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="{{asset('images/banner-home/banner-1.webp')}}"
                     alt="Cho thuê máy photocopy">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="{{asset('images/banner-home/banner-2.webp')}}"
                     alt="Sửa chữa máy photocopy, máy in tận nơi tại TPHCM.">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="{{asset('images/banner-home/banner-3.webp')}}"
                     alt="Máy in màu chất lượng bản in đẹp">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <!-- Start BEst Seller Area -->
    <section class="wn__product__area brown--color pt--80  pb--30">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section__title text-center">
                        <h2 class="title__be--2">Sản phẩm nổi bật</h2>
                        <p>Danh sách máy photocopy, máy in được nhiều người quan tâm nhất</p>
                    </div>
                </div>
            </div>
            <!-- Start Single Tab Content -->
            <div class="furniture--4 border--round arrows_style owl-carousel owl-theme row mt--50">
                @foreach($products as $key => $product)
                    <!-- Start Single Product -->
                    @include('front.product-item', compact('product'))
                    <!-- Start Single Product -->
                @endforeach
            </div>
            <!-- End Single Tab Content -->
        </div>
    </section>
    <!-- Start BEst Seller Area -->
    <!-- Start Recent Post Area -->
    <section class="wn__recent__post">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section__title text-center">
                        <h2 class="title__be--2">Dịch vụ của chúng tôi</h2>
                    </div>
                </div>
            </div>
            <!-- Start Blog Area -->
            <div class="page-blog bg--white section-padding--lg blog-sidebar right-sidebar">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 col-12">
                            <div class="blog-page">
                                @foreach($services as $key => $service)
                                    <!-- Start Single Post -->
                                    @include('front.blog-item', ['blog' => $service])
                                    <!-- End Single Post -->
                                @endforeach
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
            <!-- End Blog Area -->
        </div>
    </section>
    <!-- End Recent Post Area -->
@endsection
