@extends('layouts.app')

@section('content')
    <div class="ftco-section bg-light">
        <div class="container">
            <div class="row">
                @foreach($products as $key => $product)
                    @include('front.product-category.product-item', compact('product'))
                @endforeach
            </div>
        </div>
    </div>
@endsection
