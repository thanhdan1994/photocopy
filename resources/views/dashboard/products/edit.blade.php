@extends('layouts.dashboard.app')

@php
    $data = json_decode($product->data);
@endphp

@section('content')
    <div class="container-fluid">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Chính</a>
                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-information" role="tab" aria-controls="nav-profile" aria-selected="false">Thông số kỹ thuật</a>
            </div>
        </nav>
        <form method="POST" action="{{ route('admin.products.update', $product->id) }}" class="was-validated" enctype="multipart/form-data">
            @method('PUT')
            {{ csrf_field() }}
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-4">
                                <label>Tên sản phẩm:</label>
                                <input type="text" class="form-control" name="name" required value="{{$product->name}}">
                            </div>
                            <div class="col-md-4">
                                <label>Giá sản phẩm:</label>
                                <input type="number" class="form-control" name="price" value="{{$product->price}}">
                            </div>
                            <div class="col-md-4">
                                <label>Đơn vị tính:</label>
                                <input type="text" class="form-control" name="measure" value="{{$product->measure}}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Mô tả sản phẩm:</label>
                        <textarea class="form-control" rows="3" name="description">{{$product->description}}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Chọn chuyên mục:</label>
                        <div class="input-group mb-3">
                            <select class="custom-select" name="categories">
                                <option disabled>-- Chọn một chuyện mục --</option>
                                @foreach($categories as $key => $category)
                                    <option disabled>-{{$category->name}}</option>
                                    @foreach($category->children as $key => $item)
                                        <option value="{{$item['id']}}" @if($item['id'] == $product->category_id) selected @endif>{{$item['name']}}</option>
                                    @endforeach
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Công nghệ sản phẩm (tạo kiểu bảng):</label>
                        <textarea class="form-control" rows="3" name="body" id="editor">{!! $product->body !!}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Ảnh đại diện: </label>
                        <div class="col-md-3">
                            <div class="row">
                                <img src="{{asset('uploads/' . $product->cover)}}" alt="" class="img-responsive img-thumbnail">
                            </div>
                        </div>
                    </div>
                    <input type="file" name="cover" />
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" name="status" @if($product->status) checked @endif />Kích hoạt
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
                <div class="tab-pane fade" id="nav-information" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div class="form-group">
                        <div class="row">
                            @foreach($data as $key => $item)
                            <div class="col-md-4">
                                <label>Thông tin {{$key + 1}}:</label>
                                <input type="text" class="form-control" name="data[]" value="{{$item}}">
                            </div>
                            @endforeach
                        </div>
                        <button type="button" class="btn btn-success mt-2" id="add_information">Thêm thông tin</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection
