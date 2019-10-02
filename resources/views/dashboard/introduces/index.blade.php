@extends('layouts.dashboard.app')

@section('content')
    <div class="container-fluid">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Tên giới thiệu</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Tác vụ</th>
            </tr>
            </thead>
            <tbody>
            @foreach($introduces as $key => $introduce)
                <tr>
                    <th scope="row">{{$introduce->id}}</th>
                    <td>{{$introduce->name}}</td>
                    <td><img src="{{asset('uploads/'. $introduce->cover)}}" width="250" height="auto"/></td>
                    <td>
                        <a class="btn btn-success" href="{{route('admin.introduces.edit', $introduce->id)}}">Sửa</a>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
        {{ $introduces->appends(['sort' => 'name'])->links() }}
    </div>
@endsection
