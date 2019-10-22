@extends('layouts.app')
@section('title', 'Dịch vụ sữa chữa máy photocopy, cho thuê cho máy photocopy, bán máy photocopy giá rẻ nhanh chóng')
@section('metaName')
    <meta name="description" content="Dịch vụ sữa chữa máy photocopy, cho thuê cho máy photocopy, bán máy photocopy giá rẻ nhanh chóng" />
@endsection
@section('jsonLd')
    <script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "url": "<?=request()->url()?>",
        "name": "Hoang Lai - Dịch vụ sữa chữa máy photocopy, cho thuê cho máy photocopy, bán máy photocopy giá rẻ nhanh chóng",
        "description": "Hoang Lai là công ty hàng đầu về lĩnh vực máy photocopy, hiện công ty đang phân phối các dòng máy photocopy Ricoh với giá tốt, kèm theo các dịch vụ cho thuê máy photocopy uy tín, chất lượng."
    }
    </script>
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
                            <h2>Danh sách dịch vụ của chúng tôi</h2>
                        </div>
                        @foreach($services as $key => $service)
                            <!-- Start Single Post -->
                            @include('front.blog-item', ['blog' => $service])
                            <!-- End Single Post -->
                        @endforeach
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
