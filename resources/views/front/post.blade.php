@extends('layouts.app')
@section('title', $post->name)
@section('og')
    <meta name="description" content="{{ $post->excerpt }}"/>
@endsection
@section('content')
    <div class="ftco-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 block-img-fluid">
                    <div class="maincontent">
                        {!!regexContent($post->description)!!}
                    </div>
                </div> <!-- .col-md-12 -->
            </div>
        </div>
    </div> <!-- .section -->
    <div class="ftco-section bg-light">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-5">
                <div class="col-md-7 text-center"  data-aos="fade-up">
                    <h2>Các dịch vụ khác</h2>
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
