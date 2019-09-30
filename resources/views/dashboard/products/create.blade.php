@extends('layouts.dashboard.app')

@section('content')
    <div class="container-fluid">
        <form method="POST" action="{{ route('admin.products.store') }}" class="was-validated" enctype="multipart/form-data">
            {{ csrf_field() }}
            <div class="form-group">
                <div class="row">
                    <div class="col-md-4">
                        <label>Tên sản phẩm:</label>
                        <input type="text" class="form-control" name="name" required>
                    </div>
                    <div class="col-md-4">
                        <label>Giá sản phẩm:</label>
                        <input type="number" class="form-control" name="price">
                    </div>
                    <div class="col-md-4">
                        <label>Đơn vị tính:</label>
                        <input type="text" class="form-control" name="measure">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label>Mô tả sản phẩm:</label>
                <textarea class="form-control" rows="3" name="description"></textarea>
            </div>
            <div class="form-group">
                <label>Chọn chuyên mục:</label>
                <div class="input-group mb-3">
                    <select class="custom-select" name="categories">
                        <option disabled selected>-- Chọn một chuyện mục --</option>
                        @foreach($categories as $key => $category)
                            <option disabled>-{{$category->name}}</option>
                            @foreach($category->children as $key => $item)
                                <option value="{{$item['id']}}">{{$item['name']}}</option>
                            @endforeach
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>Công nghệ sản phẩm (tạo kiểu bảng):</label>
                <textarea class="form-control" rows="3" name="body" id="editor"></textarea>
            </div>
            <input type="file" name="cover" />
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
@endsection
