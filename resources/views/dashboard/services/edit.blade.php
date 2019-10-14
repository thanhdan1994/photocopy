@extends('layouts.dashboard.app')

@section('content')
    <div class="container-fluid">
        <form method="POST" action="{{ route('admin.services.update', $service->id) }}" class="was-validated" enctype="multipart/form-data">
            @method('PUT')
            {{ csrf_field() }}
            <div class="form-group">
                <label>Tên dịch vụ:</label>
                <input type="text" class="form-control" name="name" value="{{$service->name}}" required>
            </div>
            <div class="form-group">
                <label>Mô tả:</label>
                <textarea class="form-control" rows="3" name="excerpt" required>{{$service->excerpt}}</textarea>
            </div>
            <div class="form-group">
                <label>Bài viết:</label>
                <textarea class="form-control" rows="3" name="description" id="editor">{!! $service->description  !!}</textarea>
            </div>
            <div class="form-group">
                <label>Ảnh đại diện: </label>
                <div class="col-md-3">
                    <div class="row">
                        <img src="{{asset('uploads/' . $service->cover)}}" alt="" class="img-responsive img-thumbnail">
                    </div>
                </div>
            </div>
            <div class="form-check">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="status" @if($service->status) checked @endif />Kích hoạt
                </label>
                <label class="form-check-label ml-5">
                    <input type="checkbox" class="form-check-input" name="type" @if($service->type) checked @endif>Là dịch vụ
                </label>
            </div>
            <input type="file" name="photo" class="form-control" />
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
@endsection
