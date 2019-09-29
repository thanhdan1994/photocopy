@extends('layouts.app')
@section('content')
<div class="ftco-section">
    <div class="container">
        <div class="row">
            @foreach($posts as $key => $post)
                <div class="col-md-6 col-lg-4" data-aos="fade-up" @if ($key > 0) data-aos-delay="{{$key * 100}}" @endif>
                    <a href="/chia-se-tu-van/{{$post->slug .'.html'}}" class="block-5" style="background-image: url({{asset('storage/'.$post->image)}});">
                        <div class="text">
                            <h3 class="heading">{{$post->title}}</h3>
                        </div>
                    </a>
                </div>
            @endforeach
        </div>
    </div>
</div>
@endsection
