@extends('layouts.app')

@section('title', 'Cho thuê máy in, bán máy in, sữa chữa máy in nhanh chóng giá rẻ tại Tp.HCM')
@section('metaName')
    <meta name="description" content="Chí Vinh là công ty hàng đầu về lĩnh vực máy photocopy, hiện công ty đang phân phối các dòng máy photocopy Ricoh với giá tốt, kèm theo các dịch vụ cho thuê máy photocopy uy tín, chất lượng." />
@endsection
@section('section')
    <section class="ftco-cover" style="background-image: url(https://haiminhco.com.vn/wp-content/uploads/2016/09/may-photocopy-ricoh-aficio-mp-9002.jpg);" id="section-home" data-aos="fade"  data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row align-items-center ftco-vh-100">
                <div class="col-md-7">
                    <h1 class="ftco-heading mb-3" data-aos="fade-up" data-aos-delay="500">Cho thuê máy photocopy màu Ricol MPC 4000</h1>
                    <h2 class="h5 ftco-subheading mb-5" data-aos="fade-up"  data-aos-delay="600">
                        Máy mới chất lượng cao cho bản in đẹp
                        <a href="/bao-gia" target="_blank">Nhấn để xem báo giá chi tiết</a>.
                    </h2>
                    <p data-aos="fade-up"  data-aos-delay="700">
                        <a href="/{{$menu[1]->slug}}/{{$menu[1]->id}}.html" class="btn btn-outline-white px-4 py-3">
                            Xem nhiều hơn sản phẩm của chúng tôi
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </section>
@endsection
@section('content')
    <div class="ftco-section-nopadding">
        <div class="container">
            <div class="block-3 d-md-flex" data-aos="fade-left">
                <div class="image" style="background-image: url('images/image_5.jpg'); "></div>
                <div class="text">
                    <h2 class="heading">Bán máy photo</h2>
                    <p>
                        Với nhiều năm kinh nghiệm trong việc phân phối các dòng sản phẩm máy photocopy chính hãng tại Việt Nam
                        cùng đội ngũ kỹ thuật viên chuyên nghiệp, tận tình,
                        chúng tôi hy vọng sẽ mang đến cho quý khách hàng một giải pháp văn phòng tiện lợi,
                        dịch vụ tốt nhất với giá cả cạnh tranh nhất.
                    </p>
                </div>
            </div>
            <div class="block-3 d-md-flex" data-aos="fade-right">
                <div class="image order-2" style="background-image: url('images/image_6.jpg'); "></div>
                <div class="text order-1">
                    <h2 class="heading">Cho thuê máy photo</h2>
                    <p>
                        Đáp ứng nhu cầu sử dụng máy photocopy nhưng hạn chế việc tốn kém chi phí mà dịch vụ cho thuê máy photocopy ra đời,
                        đây là hình thức phổ biến và được nhiều các doanh nghiệp lựa chọn. Với dịch vụ thuê máy photocopy này,
                        chỉ tốn một khoản tiền thuê vô cùng ít,
                        các doanh nghiệp có thể sử dụng máy photocopy một cách thoải mái mà không phải lo nghĩ đến những vấn đề bảo dưỡng,
                        bảo trì, thay vật tư,…
                        như chúng tôi vừa nêu trên mà lại còn tiết kiệm được một khoản ngân sách cũng kha kha đấy.
                    </p>
                </div>
            </div>
            <div class="block-3 d-md-flex" data-aos="fade-left">
                <div class="image" style="background-image: url('images/image_7.jpg'); "></div>
                <div class="text">
                    <h2 class="heading">Bán máy in - mực in</h2>
                    <p>
                        Bạn đã từng gặp những rắc rối này chưa?: trang in xấu quá, chữ nhòe, chữ mờ, sao nhanh hết mực vậy?
                        Sao giá hộp mực đắt quá? Và điều đặc biệt mà ít ai nhận ra: Sao máy in hay bị hư vậy, gọi thợ tới sửa hoài,
                        tốn kém và mất thời gian quá. Nhưng khi sử dụng mực máy in của chúng tôi bạn sẽ không còn gặp những rắc rối này nữa.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="ftco-section bg-light">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                    <h2>
                        <strong>
                            <img class="alignnone size-full" src="https://photocopyricoh.vn/wp-content/uploads/2017/03/dieu-giay.png" width="60" height="45">
                            Bạn đang gặp rắc rối với máy photocopy của mình?
                        </strong>
                    </h2>
                    <div class="chothue1">
                        <p><strong>1. Máy photocopy của bạn thường xuyên hỏng vặt. Gây ảnh hưởng đến tiến độ công việc</strong></p>
                        <p><strong>2. Máy photocopy của bạn đã lỗi thời hay chậm chạm. Những tính năng bạn cần dùng thường xuyên nhưng lại không có?</strong></p>
                        <p><strong>3. Những lúc cần sử dụng thì máy photocopy của bạn lại hỏng? Cần tìm đơn vị sửa chữa thì họ lại quá chậm chạm?</strong></p>
                        <p><strong>4. Thời gian là để bạn làm việc nhưng lại gặp quá nhiều điều không muốn với máy photocopy của mình</strong></p>
                        <p><strong>5. Hay đơn giản doanh nghiệp của bạn đang cần tìm một thiết bị máy photocopy hiệu quả cho công việc nhưng không phải đầu tư nhiều!</strong></p>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 doan1">
                    &nbsp;<img class="alignnone size-full wp-image-6318" src="{{asset('photos/photocopy_1.jpg')}}" alt="cho thuê máy photocopy" />
                </div>
            </div>
            <div class="row justify-content-center pb-2 pt-5">
                <div class="col-md-7 text-center"  data-aos="fade-up">
                    <h2>Dịch vụ của chúng tôi</h2>
                </div>
            </div>

            <div class="row">
                @foreach($posts as $key => $post)
                    <div class="col-md-6 col-lg-4" data-aos="fade-up" @if ($key > 0) data-aos-delay="{{$key * 100}}" @endif>
                        <a href="/dich-vu/{{$post->slug .'.html'}}" class="block-5" style="background-image: url({{asset('uploads/'.$post->cover)}});">
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
