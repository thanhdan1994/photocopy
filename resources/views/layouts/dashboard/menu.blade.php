<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <!-- Brand -->
    <a class="navbar-brand" href="#">Logo</a>

    <!-- Links -->
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Dịch vụ</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="{{route('admin.services.index')}}">Danh sách dịch vụ</a>
                <a class="dropdown-item" href="{{route('admin.services.create')}}">Thêm dịch vụ mới</a>
            </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Sản phẩm</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="{{route('admin.products.index')}}">Danh sách sản phẩm</a>
                <a class="dropdown-item" href="{{route('admin.products.create')}}">Thêm sản phẩm khác</a>
            </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Chuyên mục</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="{{route('admin.categories.index')}}">Danh sách chuyên mục</a>
                <a class="dropdown-item" href="{{route('admin.categories.create')}}">Thêm chuyên mục mới</a>
            </div>
        </li>
    </ul>
</nav>
