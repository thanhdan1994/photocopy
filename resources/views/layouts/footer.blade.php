<footer class="ftco-footer ftco-bg-dark ftco-section">
    <div class="container">
        <div class="row mb-5">
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">công ty TNHH Bla Bla Việt Nam</h2>
                            <p>Với kinh nghiệm trên 10 năm bán và cho thuê máy photocopy. Cam kết đem đến khách hàng sản phẩm chất lượng, cao cấp và giá tốt nhất</p>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Dịch vụ của chúng tôi</h2>
                            <ul class="list-unstyled">
                                @foreach($hotServices as $key => $post)
                                <li><a href="/dich-vu/{{$post->slug . '.html'}}" class="py-2 d-block">{{$post->name}}</a></li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="ftco-footer-widget mb-4">
                    <ul class="ftco-footer-social list-unstyled float-md-right float-lft">
                        <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                        <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                        <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center">
                <p>Mọi chi tiết xin liên hệ - 0906 28 3070 - 0907 28 7070 - chivinh668@gmail.com
                    © 2012 CHIVINH CO.,LTD All Rights Reserved. Powered by LeGiaICT.</p>
            </div>
        </div>
    </div>
</footer>

<div class="modal" id="modalSell">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <!-- Modal body -->
            <div class="modal-body">
                <div class="list-group">
                    <a class="list-group-item list-group-item-success" href="/ban-may-photo/may-photocopy-toshiba/3.html">Máy photocopy Toshiba</a>
                    <a class="list-group-item list-group-item-success">Máy photocopy Shard </a>
                    <a class="list-group-item list-group-item-success">Máy photocopy Canon </a>
                    <a class="list-group-item list-group-item-success">Máy photocopy Ricoh</a>
                    <a class="list-group-item list-group-item-success" href="/ban-may-photo">All</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal" id="modalRent">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <!-- Modal body -->
            <div class="modal-body">
                <div class="list-group">
                    <a class="list-group-item list-group-item-success">Máy photocopy Toshiba</a>
                    <a class="list-group-item list-group-item-success" href="/ban-may-photo/may-photocopy-shard">Máy photocopy Shard </a>
                    <a class="list-group-item list-group-item-success">Máy photocopy Canon </a>
                    <a class="list-group-item list-group-item-success">Máy photocopy Ricoh</a>
                </div>
            </div>
        </div>
    </div>
</div>
