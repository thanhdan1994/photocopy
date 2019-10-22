@extends('layouts.dashboard.app')

@section('content')
    <div class="container-fluid">
        <form method="POST" action="{{ route('admin.options.store') }}" class="was-validated" enctype="multipart/form-data">
            {{ csrf_field() }}
            <div class="form-group">
                <label>Tên tuỳ chỉnh:</label>
                <input type="text" class="form-control" name="option_name" required>
            </div>
            <div class="form-group">
                <label>Giá trị:</label>
                <textarea class="form-control" rows="3" name="option_value"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Lưu</button>
        </form>
    </div>
@endsection
