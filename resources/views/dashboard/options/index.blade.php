@extends('layouts.dashboard.app')

@section('content')
    <div class="container-fluid">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Tên tuỳ chỉnh</th>
                <th scope="col">Giá trị</th>
                <th scope="col">Tác vụ</th>
            </tr>
            </thead>
            <tbody>
                @foreach($options as $key => $option)
                <tr>
                    <th scope="row">{{$option->id}}</th>
                    <td>{{$option->option_name}}</td>
                    <td>{{$option->option_value}}</td>
                    <td>
                        <a class="btn btn-success" href="{{route('admin.options.edit', $option->id)}}">Sửa</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        {{ $options->appends(['sort' => 'name'])->links() }}
    </div>
@endsection
