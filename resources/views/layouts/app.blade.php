<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Papers - Free Bootstrap 4 Template by Colorlib</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500" rel="stylesheet">
        <link rel="stylesheet" href={{asset("css/open-iconic-bootstrap.min.css")}}>
        <link rel="stylesheet" href={{asset("css/animate.css")}}>

        <link rel="stylesheet" href={{asset("css/owl.carousel.min.css")}}>
        <link rel="stylesheet" href={{asset("css/owl.theme.default.min.css")}}>
        <link rel="stylesheet" href={{asset("css/magnific-popup.css")}}>

        <link rel="stylesheet" href={{asset("css/aos.css")}}>

        <link rel="stylesheet" href={{asset("css/ionicons.min.css")}}>

        <link rel="stylesheet" href={{asset("css/bootstrap-datepicker.css")}}>
        <link rel="stylesheet" href={{asset("css/jquery.timepicker.css")}}>


        <link rel="stylesheet" href={{asset("css/flaticon.css")}}>
        <link rel="stylesheet" href={{asset("css/icomoon.css")}}>
        <link rel="stylesheet" href={{asset("css/style.css")}}>
    </head>
    <body>
        @include('layouts.header')
        <!-- END nav -->
        @yield('section')
        <!-- END section -->
        @yield('content')
        @include('layouts.footer')
        <script src={{asset("js/jquery.min.js")}}></script>
        <script src={{asset("js/jquery-migrate-3.0.1.min.js")}}></script>
        <script src={{asset("js/popper.min.js")}}></script>
        <script src={{asset("js/bootstrap.min.js")}}></script>
        <script src={{asset("js/jquery.easing.1.3.js")}}></script>
        <script src={{asset("js/jquery.waypoints.min.js")}}></script>
        <script src={{asset("js/jquery.stellar.min.js")}}></script>
        <script src={{asset("js/owl.carousel.min.js")}}></script>
        <script src={{asset("js/jquery.magnific-popup.min.js")}}></script>
        <script src={{asset("js/aos.js")}}></script>
        <script src={{asset("js/jquery.animateNumber.min.js")}}></script>
        <script src={{asset("js/main.js")}}></script>
        <script>
            $('div.ftco-section .maincontent img').addClass('img-fluid')
        </script>
    </body>
</html>
