@extends('layouts.app')
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
@section('content')
    <div class="ftco-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    {!!regexContent($introduce->description)!!}
                </div> <!-- .col-md-12 -->
            </div>
        </div>
    </div> <!-- .section -->
@endsection
