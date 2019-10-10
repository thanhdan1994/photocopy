<nav class="navbar navbar-expand-lg navbar-light ftco_navbar bg-success ftco-navbar-light" id="ftco-navbar" data-aos="fade-down" data-aos-delay="500">
    <div class="container">
        <a class="navbar-brand" href="/">Logo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
                @foreach($menu as $key => $item)
                    <li class="nav-item" data-toggle="modal" data-target="#modalMenu_{{$item->id}}">
                        <a href="javascript:void(0)" class="nav-link">{{$item->name}}</a>
                    </li>
                @endforeach
                <li class="nav-item"><a href="/dich-vu" class="nav-link">Dịch vụ</a></li>
                <li class="nav-item"><a href="/chia-se-tu-van" class="nav-link">Chia sẻ - tư vấn</a></li>
            </ul>
        </div>
    </div>
</nav>
