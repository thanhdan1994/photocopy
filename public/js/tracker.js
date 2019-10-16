setTimeout(function () {
    $.ajax({
        url: '/api/tracker-product',
        type: 'POST',
        data: {'id': 4},
        dataType: 'json',
        success: function (data) {
            console.log(data)
        }
    })
}, 1000);
