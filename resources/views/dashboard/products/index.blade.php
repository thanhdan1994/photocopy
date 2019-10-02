@extends('layouts.dashboard.app')

@section('content')
    <div class="container-fluid">
        <table class="table table-striped text-center">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Nổi bật</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Loại sản phẩm</th>
                <th scope="col">Kích hoạt</th>
                <th scope="col">Tác vụ</th>
            </tr>
            </thead>
            <tbody>
                @foreach($products as $key => $product)
                <tr>
                    <th scope="row">{{$product->id}}</th>
                    <td>{{$product->name}}</td>
                    <td>
                        @if($product->prior)
                            <span class="bg-success text-black">Nổi bật</span>
                        @else
                            <span class="bg-warning text-black">Bình thường</span>
                        @endif
                    </td>
                    <td><img src="{{asset('uploads/'. $product->cover)}}" width="125" height="auto"/></td>
                    <td>{{$product->category['name']}}</td>
                    <td>
                        @if($product->status)
                            <span class="bg-success text-black">Đã kích hoạt</span>
                        @else
                            <span class="bg-danger text-white">Chưa kích hoạt</span>
                        @endif
                    </td>
                    <td>
                        <a class="btn btn-success" href="{{route('admin.products.edit', $product->id)}}">Sửa</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        {{ $products->appends(['sort' => 'name'])->links() }}
    </div>
@endsection
