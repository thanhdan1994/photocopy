<!doctype html>
<html class="no-js" lang="vi">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
{{--    <script async src="https://www.googletagmanager.com/gtag/js?id={{ env('GOOGLE_ANALYTICS') }}"></script>--}}
{{--    <script>--}}
{{--        window.dataLayer = window.dataLayer || [];--}}
{{--        function gtag(){dataLayer.push(arguments);}--}}
{{--        gtag('js', new Date());--}}

{{--        gtag('config', '{{ env('GOOGLE_ANALYTICS') }}');--}}
{{--    </script>--}}
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link rel="icon" type="image/x-icon" href="{{asset('favicon.ico')}}" />
    <title>@yield('title')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @yield('metaName')
    <!-- Favicons -->
{{--    <link rel="shortcut icon" href="{{asset('images/favicon.ico')}}">--}}
{{--    <link rel="apple-touch-icon" href="{{asset('images/icon.png')}}">--}}

    <!-- Google font (font-family: 'Roboto', sans-serif; Poppins ; Satisfy) -->

    <!-- Stylesheets -->
{{--    <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}">--}}
{{--    <link rel="stylesheet" href="{{asset('css/plugins.css')}}">--}}
{{--    <link rel="stylesheet" href="{{asset('style.css')}}">--}}
{{--    <link rel="stylesheet" href="{{asset('css/custom.css')}}">--}}
    <link rel="stylesheet" href="{{asset('css/bundle.min.css')}}">
    <!-- Modernizer js -->
{{--    <script src="{{asset('js/vendor/modernizr-3.5.0.min.js')}}"></script>--}}
    @yield('jsonLd')
</head>
<body>
<!--[if lte IE 9]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
<![endif]-->

<!-- Main wrapper -->
<div class="wrapper" id="wrapper">
    <!-- Header -->
    <header id="wn__header" class="header__area header__absolute sticky__header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-6 col-lg-2">
                    <div class="logo">
                        <a href="/">
                            <img class="logo-page" src="{{asset('logo.webp')}}" alt="Công ty TNHH giải pháp in Hoang Lai">
                        </a>
                    </div>
                </div>
                <div class="col-lg-8 d-none d-lg-block">
                    <nav class="mainmenu__nav">
                        <ul class="meninmenu d-flex justify-content-start">
                            @foreach($menu as $key => $item)
                                <li class="nav-item" data-toggle="modal" data-target="#modalMenu_{{$item->id}}">
                                    <a href="javascript:void(0)" class="nav-link" aria-label="danh mục sản phẩm">{{$item->name}}</a>
                                </li>
                            @endforeach
                            <li class="nav-item"><a href="/xu-ly-su-co" class="nav-link">Xử lý sự cố</a></li>
                            <li class="nav-item"><a href="/dich-vu" class="nav-link">Dịch vụ</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- Start Mobile Menu -->
            <div class="row d-none">
                <div class="col-lg-12 d-none">
                    <nav class="mobilemenu__nav">
                        <ul class="meninmenu">
                            @foreach($menu as $key => $item)
                                <li class="nav-item" data-toggle="modal" data-target="#modalMenu_{{$item->id}}">
                                    <a href="javascript:void(0)" class="nav-link" aria-label="danh mục sản phẩm">{{$item->name}}</a>
                                </li>
                            @endforeach
                            <li class="nav-item"><a href="/xu-ly-su-co" class="nav-link">Xử lý sự cố</a></li>
                            <li class="nav-item"><a href="/dich-vu" class="nav-link">Dịch vụ</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- End Mobile Menu -->
            <div class="mobile-menu d-block d-lg-none">
            </div>
            <!-- Mobile Menu -->
        </div>
    </header>
    <!-- //Header -->
    @yield('content')
    <!-- Footer Area -->
    <footer id="wn__footer" class="footer__area bg__cat--8 brown--color">
        <div class="footer-static-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer__widget footer__menu">
                            <div class="ft__logo">
                                <a href="/">
                                    <img class="logo-page" src="{{asset('logo.webp')}}" alt="logo">
                                </a>
                                <p>{{$descriptionFooter}}</p>
                            </div>
                            <div class="footer__content">
                                <ul class="social__net social__net--2 d-flex justify-content-center">
                                    <li><a href="#" aria-label="Read more about Seminole tax hike"><i class="bi bi-facebook"></i></a></li>
                                    <li><a href="#" aria-label="Read more about Seminole tax hike"><i class="bi bi-google"></i></a></li>
                                    <li><a href="#" aria-label="Read more about Seminole tax hike"><i class="bi bi-twitter"></i></a></li>
                                    <li><a href="#" aria-label="Read more about Seminole tax hike"><i class="bi bi-linkedin"></i></a></li>
                                    <li><a href="#" aria-label="Read more about Seminole tax hike"><i class="bi bi-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright__wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="copyright">
                            <div class="copy__right__inner text-left">
                                <p>Liên hệ: <i class="fa fa-copyright"></i> <a href="mailto:thanhdan26081994@gmail.com">{{$emailGlobal}}</a> hoặc {{$phoneGlobal}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="payment text-right">
                            <img src="{{asset('images/icons/gov.webp')}}" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- //Footer Area -->
    @foreach($menu as $key => $item)
        <div class="modal" id="modalMenu_{{$item->id}}">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <!-- Modal body -->
                    <div class="list-group">
                        @foreach($item->children as $key => $itemChild)
                            <a class="list-group-item list-group-item-light" href="/{{$item->slug}}/{{$itemChild->slug}}/{{$itemChild->id}}.html">
                                {{$itemChild->name}}
                            </a>
                        @endforeach
                        <a class="list-group-item list-group-item-light" href="/{{$item->slug}}/{{$item->id}}.html">
                            Tất cả
                        </a>
                    </div>
                </div>
            </div>
        </div>
    @endforeach
</div>
<!-- //Main wrapper -->

<!-- JS Files -->
{{--<script src="{{asset('js/vendor/jquery-3.4.1.min.js')}}"></script>--}}
{{--<script src="{{asset('js/popper.min.js')}}"></script>--}}
{{--<script src="{{asset('js/bootstrap.min.js')}}"></script>--}}
{{--<script src="{{asset('js/plugins.js')}}"></script>--}}
{{--<script src="{{asset('js/active.js')}}"></script>--}}
{{--<script src="{{asset('js/lazyload.js')}}"></script>--}}
<script src="{{asset('js/bundle.min.js')}}"></script>
</body>
</html>
