<div class="col-md-6 col-lg-4">
    <div class="module-product-item">
        <a href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
            <div class="vp11">
                <img class="lazy" data-src="{{asset('uploads/'.$product->cover)}}" alt="{{$product->name}}">
                <noscript>
                    <img src="{{asset('uploads/'.$product->cover)}}" alt="{{$product->name}}">
                </noscript>
            </div>
            <h2 class="module-product-item-name">{{$product->name}}</h2>
        </a>
        <div class="price">{{number_format($product->price, 0, ',', '.')}} VNĐ / {{$product->measure}}</div>
        <a class="view" href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">Xem chi tiết</a>
        <div class="description">
            <ul>
                @foreach(json_decode($product->data) as $key => $item)
                    @if($key < 5) <li><strong>{{$item}}</strong></li> @endif
                @endforeach
            </ul>
        </div>
    </div>
</div>
