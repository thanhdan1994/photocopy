@extends('layouts.dashboard.app')

@section('content')
    <div class="container-fluid">
        <form method="POST" action="{{ route('admin.services.store') }}" class="was-validated" enctype="multipart/form-data">
            {{ csrf_field() }}
            <div class="form-group">
                <label>Tên dịch vụ:</label>
                <input type="text" class="form-control" name="name" required>
            </div>
            <div class="form-group">
                <label>Mô tả:</label>
                <textarea class="form-control" rows="3" name="excerpt"></textarea>
            </div>
            <div class="form-group">
                <label>Bài viết:</label>
                <textarea class="form-control" rows="5" name="description" id="editor"></textarea>
            </div>
            <div class="form-check">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="type">Là dịch vụ
                </label>
            </div>
            <input type="file" name="photo" class="form-control" />
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
@endsection
