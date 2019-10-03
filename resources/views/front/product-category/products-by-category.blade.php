@extends('layouts.app')
@section('title', $category['name'])
@section('og')
    <meta property="description" content="{{ strip_tags($category['name']) }}"/>
@endsection
@section('jsonLd')
    @if(!empty($category->parentCategory))
    <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 3,
            "name": "<?=$category['name'] ?>",
            "item": "<?= request()->url() ?>"
          },{
            "@type": "ListItem",
            "position": 2,
            "name": "<?=$category->parentCategory['name']?>",
            "item": "<?= env('APP_URL') . '/' . $category->parentCategory['slug'] . '/' .$category->parentCategory['id']. '.html' ?>"
          },{
            "@type": "ListItem",
            "position": 1,
            "name": "Trang chủ",
            "item": "<?=env('APP_URL')?>"
          }]
        }
    </script>
    @endif
@endsection
@section('content')
    <div class="ftco-section bg-light">
        @if(!empty($category->parentCategory))
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{env('APP_URL')}}">Trang chủ</a></li>
                <li class="breadcrumb-item">
                    <a href="/{{$category->parentCategory['slug'] . '/' . $category->parentCategory['id'] . '.html'}}">
                        {{$category->parentCategory['name']}}
                    </a>
                </li>
                <li class="breadcrumb-item" aria-current="page">
                    {{$category->name}}
                </li>
            </ol>
        </nav>
        @endif
        <div class="list-product-by-category">
            @if(!empty($category->parentCategory))
                <h1 class="title-by-category">{{'Danh sách : '.$category->name}}</h1>
            @else
                <h1 class="title-by-category">{{$category->name}}</h1>
            @endif
            <div class="container">
                <div class="row">
                    @foreach($products as $key => $product)
                        @include('front.product-category.product-item', compact('product'))
                    @endforeach
                </div>
            </div>
        </div>
        <div class="list-product-by-prior">
            <h4 class="title-by-category">Sản phẩm nổi bật</h4>
            <div class="container">
                <div class="row">
                    @foreach($productsPrior as $key => $product)
                        @include('front.product-category.product-item', compact('product'))
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection
