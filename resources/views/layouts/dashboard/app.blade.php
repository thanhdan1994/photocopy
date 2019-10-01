<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <title>Trang quản trị photocopy</title>
    </head>
    <body>
        @include('layouts.dashboard.menu')
        @yield('content')
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
{{--        <script src={{asset("/ckeditor5-build-classic/ckeditor.js")}}></script>--}}
{{--        <script src={{asset("/ckfinder/ckfinder.js")}}></script>--}}
{{--        <script>--}}
{{--            ClassicEditor--}}
{{--                .create( document.querySelector( '#editor' ), {--}}
{{--                    ckfinder: {--}}
{{--                        uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'--}}
{{--                    },--}}
{{--                    toolbar: [ 'ckfinder', 'imageUpload', '|', 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo' ],--}}
{{--                    heading: {--}}
{{--                        options: [--}}
{{--                            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },--}}
{{--                            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },--}}
{{--                            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },--}}
{{--                            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' }--}}
{{--                        ]--}}
{{--                    }--}}
{{--                })--}}
{{--                .then( editor => {--}}
{{--                    console.log( editor );--}}
{{--                })--}}
{{--                .catch( error => {--}}
{{--                    console.error( error );--}}
{{--                });--}}
{{--        </script>--}}
        <script src="{{asset("/ckeditor/ckeditor.js")}}"></script>
        <script src={{asset("/ckfinder/ckfinder.js")}}></script>
        <script>
            var editor = CKEDITOR.replace('editor', {
                filebrowserBrowseUrl: '/ckfinder/ckfinder.html',
                filebrowserImageBrowseUrl: '/ckfinder/ckfinder.html?type=Images',
                filebrowserUploadUrl:
                    '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&currentFolder=/archive/',
                filebrowserImageUploadUrl:
                    '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&currentFolder=/cars/'
            });
        </script>
        <script>
            $('#add_information').on('click', function () {
                var htmlAdd = `<div class="col-md-4">
                                <label>Thông tin thêm:</label>
                                <input type="text" class="form-control" name="data[]">
                            </div>`
                var posAdd = $('#nav-information .form-group .row');
                posAdd.append(htmlAdd);
            })
        </script>
    </body>
</html>
