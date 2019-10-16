document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Possibly fall back to a more compatible method here
    }
});

$("button[type=submit]").on('click', function (e) {
    var $star = $('#nav-rating').find('input[name=star]:checked').val();
    var $name = $('#nav-rating').find('input[name=nickname]').val();
    var $review = $('#nav-rating').find('textarea[name=review]').val();
    if ($name != '' && $star != 'undefined') {
        $.ajax({
            url: '/api/rating',
            type: 'POST',
            data: {'star': $star, 'name': $name, 'review': $review},
            success: function (data) {
                $('#nav-rating').find('input[name=nickname]').val('');
                $('#nav-rating').find('textarea[name=review]').val('');
                alert('Cám ơn bạn đã đánh giá sản phẩm của chúng tôi')
            }
        })
    } else {
        alert('Bạn chưa cho điểm sản phẩm hoặc chưa nhập tên của bạn')
    }
});
