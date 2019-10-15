@extends('layouts.dashboard.app')

@section('content')
    <div class="container-fluid">
        <form method="POST" action="{{ route('admin.categories.store') }}" class="was-validated" enctype="multipart/form-data">
            {{ csrf_field() }}
            <div class="form-group">
                <label>Tên chuyên mục:</label>
                <input type="text" class="form-control" name="name" required>
            </div>
            <div class="form-group">
                <label>Chuyên mục cha:</label>
                <div class="input-group mb-3">
                    <select class="custom-select" name="categories">
                        <option selected value="0">Chọn chuyên mục cha</option>
                        @foreach($categories as $key => $category)
                            <option value="{{$category->id}}">{{$category->name}}</option>
                        @endforeach
                    </select>
                    <div class="input-group-append">
                        <label class="input-group-text" for="inputGroupSelect02">Options</label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label>Ảnh đại diện: </label>
                <input type="file" name="cover" />
            </div>
            <div class="form-check">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="status" />Kích hoạt
                </label>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
@endsection
