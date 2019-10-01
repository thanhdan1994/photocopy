@extends('layouts.dashboard.app')
@section('content')
    <div class="container-fluid">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Tên giới thiệu</th>
                <th scope="col">Chuyên mục cha</th>
                <th scope="col">Kích hoạt</th>
                <th scope="col">Tác vụ</th>
            </tr>
            </thead>
            <tbody>
                @foreach($categories as $key => $category)
                    <tr>
                        <th scope="row">{{$category->id}}</th>
                        <td>{{$category->name}}</td>
                        <td>{{$category->parentCategory['name']}}</td>
                        <td>
                            @if($category->status)
                                <span class="bg-success text-black">Đã kích hoạt</span>
                            @else
                                <span class="bg-danger text-white">Chưa kích hoạt</span>
                            @endif
                        </td>
                        <td>
                            <a class="btn btn-success" href="{{route('admin.categories.edit', $category->id)}}">Sửa</a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
