@extends('layouts.dashboard.app')

@section('content')
    <div class="container-fluid">
        <form method="POST" action="{{ route('admin.categories.update', $category->id) }}" class="was-validated" enctype="multipart/form-data">
            @method('PUT')
            {{ csrf_field() }}
            <div class="form-group">
                <label>Tên chuyên mục:</label>
                <input type="text" class="form-control" name="name" value="{{$category->name}}" required>
            </div>
            <div class="form-group">
                <label>Chuyên mục cha:</label>
                <div class="input-group mb-3">
                    <select class="custom-select" name="categories">
                        <option value="0">Chọn chuyên mục cha</option>
                        @foreach($categories as $key => $item)
                            <option value="{{$item->id}}" @if($item->id == $category->parent) selected @endif>{{$item->name}}</option>
                        @endforeach
                    </select>
                    <div class="input-group-append">
                        <label class="input-group-text" for="inputGroupSelect02">Options</label>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
@endsection
