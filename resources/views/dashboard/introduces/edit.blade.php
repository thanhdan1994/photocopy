@extends('layouts.dashboard.app')

@section('content')
    <div class="container-fluid">
        <form method="POST" action="{{ route('admin.introduces.update', $introduce->id) }}" class="was-validated" enctype="multipart/form-data">
            @method('PUT')
            {{ csrf_field() }}
            <div class="form-group">
                <label>Tên dịch vụ:</label>
                <input type="text" class="form-control" name="name" value="{{$introduce->name}}" required>
            </div>
            <div class="form-group">
                <label>Bài viết:</label>
                <textarea class="form-control" rows="3" name="description" id="editor">{!! $introduce->description  !!}</textarea>
            </div>
            <div class="form-group">
                <label>Ảnh đại diện: </label>
                <div class="col-md-3">
                    <div class="row">
                        <img src="{{asset('uploads/' . $introduce->cover)}}" alt="" class="img-responsive img-thumbnail">
                    </div>
                </div>
            </div>
            <input type="file" name="photo" class="form-control" />
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
@endsection
