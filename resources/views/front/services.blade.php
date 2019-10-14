@extends('layouts.app')
@section('title', 'Dịch vụ sữa chữa máy photocopy, cho thuê cho máy photocopy, bán máy photocopy giá rẻ nhanh chóng')
@section('metaName')
    <meta name="description" content="Dịch vụ sữa chữa máy photocopy, cho thuê cho máy photocopy, bán máy photocopy giá rẻ nhanh chóng" />
@endsection
@section('content')
    <!-- Start Bradcaump area -->
    <div class="ht__bradcaump__area bg-image--6">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="bradcaump__inner text-center">
                        <h2 class="bradcaump-title">Shop Grid</h2>
                        <nav class="bradcaump-content">
                            <a class="breadcrumb_item" href="index.html">Home</a>
                            <span class="brd-separetor">/</span>
                            <span class="breadcrumb_item active">Shop Grid</span>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Bradcaump area -->
    <!-- Start Blog Area -->
    <div class="page-blog bg--white section-padding--lg blog-sidebar right-sidebar">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 col-12">
                    <div class="blog-page">
                        <div class="page__header">
                            <h2>Danh sách dịch vụ của chúng tôi</h2>
                        </div>
                        @foreach($services as $key => $service)
                            <!-- Start Single Post -->
                            @include('front.blog-item', ['blog' => $service])
                            <!-- End Single Post -->
                        @endforeach
                    </div>
                </div>
                <div class="col-lg-3 col-12 md-mt-40 sm-mt-40">
                    <div class="wn__sidebar">
                        <!-- Start Single Widget -->
                        <aside class="widget search_widget">
                            <h3 class="widget-title">Search</h3>
                            <form action="#">
                                <div class="form-input">
                                    <input type="text" placeholder="Search...">
                                    <button><i class="fa fa-search"></i></button>
                                </div>
                            </form>
                        </aside>
                        <!-- End Single Widget -->
                        <!-- Start Single Widget -->
                        <aside class="widget recent_widget">
                            <h3 class="widget-title">Recent</h3>
                            <div class="recent-posts">
                                <ul>
                                    <li>
                                        <div class="post-wrapper d-flex">
                                            <div class="thumb">
                                                <a href="blog-details.html"><img src="images/blog/sm-img/1.jpg" alt="blog images"></a>
                                            </div>
                                            <div class="content">
                                                <h4><a href="blog-details.html">Blog image post</a></h4>
                                                <p>	March 10, 2015</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="post-wrapper d-flex">
                                            <div class="thumb">
                                                <a href="blog-details.html"><img src="images/blog/sm-img/2.jpg" alt="blog images"></a>
                                            </div>
                                            <div class="content">
                                                <h4><a href="blog-details.html">Post with Gallery</a></h4>
                                                <p>	March 10, 2015</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="post-wrapper d-flex">
                                            <div class="thumb">
                                                <a href="blog-details.html"><img src="images/blog/sm-img/3.jpg" alt="blog images"></a>
                                            </div>
                                            <div class="content">
                                                <h4><a href="blog-details.html">Post with Video</a></h4>
                                                <p>	March 10, 2015</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="post-wrapper d-flex">
                                            <div class="thumb">
                                                <a href="blog-details.html"><img src="images/blog/sm-img/4.jpg" alt="blog images"></a>
                                            </div>
                                            <div class="content">
                                                <h4><a href="blog-details.html">Maecenas ultricies</a></h4>
                                                <p>	March 10, 2015</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="post-wrapper d-flex">
                                            <div class="thumb">
                                                <a href="blog-details.html"><img src="images/blog/sm-img/5.jpg" alt="blog images"></a>
                                            </div>
                                            <div class="content">
                                                <h4><a href="blog-details.html">Blog image post</a></h4>
                                                <p>	March 10, 2015</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                        <!-- End Single Widget -->
                        <!-- Start Single Widget -->
                        <aside class="widget comment_widget">
                            <h3 class="widget-title">Comments</h3>
                            <ul>
                                <li>
                                    <div class="post-wrapper">
                                        <div class="thumb">
                                            <img src="images/blog/comment/1.jpeg" alt="Comment images">
                                        </div>
                                        <div class="content">
                                            <p>demo says:</p>
                                            <a href="#">Quisque semper nunc vitae...</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="post-wrapper">
                                        <div class="thumb">
                                            <img src="images/blog/comment/1.jpeg" alt="Comment images">
                                        </div>
                                        <div class="content">
                                            <p>Admin says:</p>
                                            <a href="#">Curabitur aliquet pulvinar...</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="post-wrapper">
                                        <div class="thumb">
                                            <img src="images/blog/comment/1.jpeg" alt="Comment images">
                                        </div>
                                        <div class="content">
                                            <p>Irin says:</p>
                                            <a href="#">Quisque semper nunc vitae...</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="post-wrapper">
                                        <div class="thumb">
                                            <img src="images/blog/comment/1.jpeg" alt="Comment images">
                                        </div>
                                        <div class="content">
                                            <p>Boighor says:</p>
                                            <a href="#">Quisque semper nunc vitae...</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="post-wrapper">
                                        <div class="thumb">
                                            <img src="images/blog/comment/1.jpeg" alt="Comment images">
                                        </div>
                                        <div class="content">
                                            <p>demo says:</p>
                                            <a href="#">Quisque semper nunc vitae...</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </aside>
                        <!-- End Single Widget -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Blog Area -->
@endsection
