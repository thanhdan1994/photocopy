@extends('layouts.dashboard.app')

@section('content')
    <div class="container-fluid p-5">
        <h1>Thêm sản phẩm</h1>
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Chính</a>
                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-information" role="tab" aria-controls="nav-profile" aria-selected="false">Thông số kỹ thuật</a>
            </div>
        </nav>
        <form method="POST" action="{{ route('admin.products.store') }}" class="was-validated" enctype="multipart/form-data">
            {{ csrf_field() }}
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <label>Tên sản phẩm:</label>
                                    <input type="text" class="form-control" name="name" value="{{ old('name') }}">
                                </div>
                                <div class="col-md-4">
                                    <label>Giá sản phẩm:</label>
                                    <input type="number" class="form-control" name="price" value="{{ old('price') }}">
                                </div>
                                <div class="col-md-4">
                                    <label>Đơn vị tính:</label>
                                    <input type="text" class="form-control" name="measure" value="{{ old('measure') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Mô tả sản phẩm:</label>
                            <textarea class="form-control" rows="3" name="description">{{ old('description') }}</textarea>
                        </div>
                        <div class="form-group">
                            <label>Chọn chuyên mục:</label>
                            @if(empty(old('categories')))
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
                            @else
                                <div class="input-group mb-3">
                                    <select class="custom-select" name="categories">
                                        <option disabled>-- Chọn một chuyện mục --</option>
                                        @foreach($categories as $key => $category)
                                            <option disabled>-{{$category->name}}</option>
                                            @foreach($category->children as $key => $item)
                                                <option value="{{$item['id']}}" @if($item['id'] == old('categories')) selected @endif>{{$item['name']}}</option>
                                            @endforeach
                                        @endforeach
                                    </select>
                                </div>
                            @endif
                        </div>
                        <div class="form-group">
                            <label>Công nghệ sản phẩm (tạo kiểu bảng):</label>
                            <textarea class="form-control" rows="3" name="body" id="editor" >{{ old('body') }}</textarea>
                        </div>
                        <input type="file" name="cover" />
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" name="status" />Kích hoạt
                            </label>
                            <label class="form-check-label ml-5">
                                <input type="checkbox" class="form-check-input" name="prior" />Nổi bật
                            </label>
                        </div>
                        <div class="form-group">
                            <label>Ảnh chi tiết:</label>
                            <input type="file" name="images[]" multiple/>
                        </div>
                        <button type="submit" class="btn btn-primary">Save</button>
                </div>
                <div class="tab-pane fade" id="nav-information" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-4">
                                <label>Thông số 1:</label>
                                <input type="text" class="form-control" name="data[]">
                            </div>
                            <div class="col-md-4">
                                <label>Thông số 2:</label>
                                <input type="text" class="form-control" name="data[]">
                            </div>
                            <div class="col-md-4">
                                <label>Thông số 3:</label>
                                <input type="text" class="form-control" name="data[]">
                            </div>
                            <div class="col-md-4">
                                <label>Thông số 4:</label>
                                <input type="text" class="form-control" name="data[]">
                            </div>
                            <div class="col-md-4">
                                <label>Thông số 5:</label>
                                <input type="text" class="form-control" name="data[]">
                            </div>
                            <div class="col-md-4">
                                <label>Thông số 6:</label>
                                <input type="text" class="form-control" name="data[]">
                            </div>
                        </div>
                        <button type="button" class="btn btn-success mt-2" id="add_information">Thêm thông tin</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection
