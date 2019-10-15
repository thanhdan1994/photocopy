<aside class="widget recent_widget">
    <h3 class="widget-title">Sản phẩm được yêu thích</h3>
    <div class="recent-posts">
        <ul>
            @foreach($productsPrior as $key => $product)
                <li>
                    <div class="post-wrapper d-flex">
                        <div class="thumb">
                            <a href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
                                <img class="lazy" data-src="{{asset('uploads/'.$product->cover)}}" alt="blog images">
                            </a>
                        </div>
                        <div class="content">
                            <h4>
                                <a href="/{{$product->category['slug']}}/chi-tiet/{{$product->slug}}/pro-{{$product->id}}.html">
                                    {{$product->name}}
                                </a>
                            </h4>
                            @if($product->type == 'SELL')
                                <span>Bán: {{number_format($product->price, 0, ',', '.')}}</span>
                            @else
                                <span>Thuê: {{number_format($product->price, 0, ',', '.')}}</span>
                            @endif
                        </div>
                    </div>
                </li>
            @endforeach
        </ul>
    </div>
</aside>
