<!doctype html>
<html class="no-js" lang="vi">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id={{ env('GOOGLE_ANALYTICS') }}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '{{ env('GOOGLE_ANALYTICS') }}');
    </script>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="{{asset('favicon.png')}}" />
    <title>@yield('title')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @yield('metaName')
    <link rel="stylesheet" href="{{asset('css/bundle.min.css')}}">
    @yield('jsonLd')
    <meta name="google-site-verification" content="XE0UPcgosGHbnIHodV2jKI0yD0iQinWI6C2_c7PBynE" />
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
                            <picture>
                                <source type="image/webp" srcset="{{asset('logo.webp')}}">
                                <source type="image/png" srcset="{{asset('logo.png')}}">
                                <img class="logo-page" src="{{asset('logo.png')}}" alt="Công ty TNHH giải pháp in Hoang Lai">
                            </picture>
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
                                    <picture>
                                        <source type="image/webp" srcset="{{asset('logo.webp')}}">
                                        <source type="image/png" srcset="{{asset('logo.png')}}">
                                        <img class="logo-page" src="{{asset('logo.png')}}" alt="Công ty TNHH giải pháp in Hoang Lai">
                                    </picture>
                                </a>
                                <p>{{$descriptionFooter}}</p>
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
                                <p>Liên hệ: <i class="fa fa-copyright"></i> <a href="mailto:thanhdan26081994@gmail.com">{{$emailGlobal}}</a> hoặc <a href="callto:{{$phoneGlobal}}">{{$phoneGlobal}}</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="payment text-right">
                            <picture>
                                <source type="image/webp" srcset="{{asset('images/icons/gov.webp')}}">
                                <source type="image/png" srcset="{{asset('images/icons/gov.png')}}">
                                <img src="{{asset('images/icons/gov.png')}}" alt="Đã thông báo bộ công thương" />
                            </picture>
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
<script src="{{asset('js/bundle.min.js')}}"></script>
<script type='text/javascript' data-cfasync='false'>window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; (function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({c: 'ec4efbb6-04d2-4c9f-99e9-1aa8a6d981dd', f: true }); done = true; } }; })();</script>
</body>
</html>
