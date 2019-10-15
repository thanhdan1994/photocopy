<div class="product product__style--3">
    <div class="col-lg-3 col-md-4 col-sm-6 col-12 height-440">
        <div class="product__thumb height-340">
            <a class="first__img" href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
                <img class="lazy" data-src="{{asset('uploads/'.$product->cover)}}" alt="{{$product->name}}">
            </a>
{{--            <div class="hot__box">--}}
{{--                <span class="hot-label">BEST SALLER</span>--}}
{{--            </div>--}}
        </div>
        <div class="product__content content--center">
            <h4>
                <a href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
                    {{$product->name}}
                </a>
            </h4>
            <ul class="prize">
                @if($product->type == 'SELL')
                    <li>Giá bán: {{number_format($product->price, 0, ',', '.')}} VND</li>
{{--                    <li class="old_prize">Giá cũ: {{number_format($product->price, 0, ',', '.')}}</li>--}}
                @else
                    <li>Giá thuê: {{number_format($product->price, 0, ',', '.')}} VND</li>
                @endif
            </ul>
            <div class="product__hover--content">
                <ul class="rating d-flex">
                    <li class="on"><i class="fa fa-star-o"></i></li>
                    <li class="on"><i class="fa fa-star-o"></i></li>
                    <li class="on"><i class="fa fa-star-o"></i></li>
                    <li><i class="fa fa-star-o"></i></li>
                    <li><i class="fa fa-star-o"></i></li>
                </ul>
            </div>
        </div>
    </div>
</div>
