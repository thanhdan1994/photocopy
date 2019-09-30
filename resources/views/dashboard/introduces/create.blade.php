@extends('layouts.dashboard.app')

@section('content')
    <div class="container-fluid">
        <form method="POST" action="{{ route('admin.introduces.store') }}" class="was-validated" enctype="multipart/form-data">
            {{ csrf_field() }}
            <div class="form-group">
                <label>Tên giới thiệu:</label>
                <input type="text" class="form-control" name="name" required>
            </div>
            <div class="form-group">
                <label>Bài viết:</label>
                <textarea class="form-control" rows="5" name="description" id="editor"></textarea>
            </div>
            <input type="file" name="photo" class="form-control" />
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
@endsection
