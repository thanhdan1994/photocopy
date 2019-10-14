<article class="blog__post d-flex flex-wrap">
    <div class="thumb">
        <a href="/dich-vu/{{$blog->slug .'.html'}}">
            <img src="{{asset('uploads/'.$blog->cover)}}" alt="blog images">
        </a>
    </div>
    <div class="content">
        <h4><a href="/dich-vu/{{$blog->slug .'.html'}}">{{$blog->name}}</a></h4>
        <p>{{$blog->excerpt}}</p>
        <div class="blog__btn">
            <a href="/dich-vu/{{$blog->slug .'.html'}}">Xem thêm</a>
        </div>
    </div>
</article>
