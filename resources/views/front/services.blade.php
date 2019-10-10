@extends('layouts.app')
@section('title', 'Dịch vụ sữa chữa máy photocopy, cho thuê cho máy photocopy, bán máy photocopy giá rẻ nhanh chóng')
@section('metaName')
    <meta name="description" content="Dịch vụ sữa chữa máy photocopy, cho thuê cho máy photocopy, bán máy photocopy giá rẻ nhanh chóng" />
@endsection
@section('content')
<div class="ftco-section">
    <div class="container">
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
