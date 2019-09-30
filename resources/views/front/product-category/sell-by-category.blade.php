@extends('layouts.app')

@section('content')
    <div class="ftco-section bg-light">
        <div class="container">
            <div class="row">
                @foreach($products as $key => $product)
                    <div class="col-md-6 col-lg-4" data-aos="fade-up" @if ($key > 0) data-aos-delay="{{$key * 100}}" @endif>
                        <a href="/ban-may-photo/{{$product->slug .'.html'}}" class="block-5" style="background-image: url({{asset('uploads/'.$product->cover)}});">
                            <div class="text">
                                <h3 class="heading">{{$product->name}}</h3>
                                <div class="post-meta">
                                    <span>{{number_format($product->price, 0, ',', '.')}} VNĐ / {{$product->measure}}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
@endsection
