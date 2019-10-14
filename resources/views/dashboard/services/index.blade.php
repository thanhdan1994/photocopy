@extends('layouts.dashboard.app')

@section('content')
    <div class="container-fluid">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Tên dịch vụ</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Kích hoạt</th>
                <th scope="col">loại dịch vụ</th>
                <th scope="col">Tác vụ</th>
            </tr>
            </thead>
            <tbody>
                @foreach($services as $key => $service)
                <tr>
                    <th scope="row">{{$service->id}}</th>
                    <td>{{$service->name}}</td>
                    <td><img src="{{asset('uploads/'. $service->cover)}}" width="250" height="auto"/></td>
                    <td>
                        @if($service->status)
                            <span class="bg-success text-black">Đã kích hoạt</span>
                        @else
                            <span class="bg-danger text-white">Chưa kích hoạt</span>
                        @endif
                    </td>
                    <td>
                        @if($service->type)
                            <span class="bg-success text-black">Dịch vụ</span>
                        @else
                            <span class="bg-danger text-white">Kinh nghiệm xử lý sự cố</span>
                        @endif
                    </td>
                    <td>
                        <a class="btn btn-success" href="{{route('admin.services.edit', $service->id)}}">Sửa</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        {{ $services->appends(['sort' => 'name'])->links() }}
    </div>
@endsection
