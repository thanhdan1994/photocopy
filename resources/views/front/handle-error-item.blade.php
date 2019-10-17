<article class="blog__post d-flex flex-wrap">
    <div class="thumb">
        <a href="/xu-ly-su-co/{{$blog->slug .'.html'}}">
            <img class="lazy" data-src="{{asset('uploads/'.$blog->cover)}}" alt="{{$blog->name}}">
        </a>
    </div>
    <div class="content">
        <h4><a href="/xu-ly-su-co/{{$blog->slug .'.html'}}">{{$blog->name}}</a></h4>
        <p>{{$blog->excerpt}}</p>
        <div class="blog__btn">
            <a href="/xu-ly-su-co/{{$blog->slug .'.html'}}">Xem thêm</a>
        </div>
    </div>
</article>
