@extends('layouts.app')
@section('title', 'Kinh nghiệm xử lý sự cố máy in, máy photocopy, bom mực, nạp mực máy in')
@section('metaName')
    <meta name="description" content="Kinh nghiệm xử lý sự cố máy in, máy photocopy, bom mực, nạp mực máy in" />
@endsection
@section('section')
    <section class="ftco-cover" style="background-image: url(https://haiminhco.com.vn/wp-content/uploads/2016/09/may-photocopy-ricoh-aficio-mp-9002.jpg);" id="section-home" data-aos="fade"  data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row align-items-center ftco-vh-100">
                <div class="col-md-7">
                    <h1 class="ftco-heading mb-3" data-aos="fade-up" data-aos-delay="500">Cho thuê máy photocopy màu Ricol MPC 4000</h1>
                    <h2 class="h5 ftco-subheading mb-5" data-aos="fade-up"  data-aos-delay="600">
                        Máy mới chất lượng cao cho ra bản in đẹp
                        <a href="/bao-gia" target="_blank">Nhấn để xem báo giá chi tiết</a>.
                    </h2>
                    <p data-aos="fade-up"  data-aos-delay="700">
                        <a href="https://free-template.co/" target="_blank" class="btn btn-outline-white px-4 py-3">
                            Xem nhiều hơn sản phẩm của chúng tôi
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </section>
@endsection
<style>
    .block-title {
        float: left;
        width: 100%;
        margin: 30px 0;
        font-size: 22px;
        text-align: center;
        position: relative;
    }
    .container1 {
        width: calc(100% - 30px);
        max-width: 1200px;
        position: relative;
        margin: 0 auto;
    }
    .reasons {
        margin: 0 -10px 10px;
    }
    .reason {
        float: left;
        width: 25%;
        padding: 10px;
        box-sizing: border-box;
    }
</style>
@section('content')
    <div class="ftco-section bg-light">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-5">
                <div class="col-md-7 text-center"  data-aos="fade-up">
                    <h2>Kinh nghiệm xử lý sự cố</h2>
                </div>
            </div>

            <div class="row">
                @foreach($posts as $key => $post)
                    <div class="col-md-6 col-lg-4" data-aos="fade-up" @if ($key > 0) data-aos-delay="{{$key * 100}}" @endif>
                        <a href="/chia-se-tu-van/{{$post->slug .'.html'}}" class="block-5" style="background-image: url({{asset('uploads/'.$post->cover)}});">
                            <div class="text">
                                <h3 class="heading">{{$post->name}}</h3>
                            </div>
                        </a>
                    </div>
                @endforeach
            </div>

        </div>
    </div>
@endsection
