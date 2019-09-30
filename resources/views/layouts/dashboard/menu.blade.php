<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <!-- Brand -->
    <a class="navbar-brand" href="#">Logo</a>

    <!-- Links -->
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Quản lý dịch vụ</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="{{route('admin.services.index')}}">Danh sách dịch vụ</a>
                <a class="dropdown-item" href="{{route('admin.services.create')}}">Thêm dịch vụ mới</a>
            </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Quản lý sản phẩm</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="{{route('admin.products.index')}}">List product</a>
                <a class="dropdown-item" href="{{route('admin.products.create')}}">Create product</a>
            </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Category</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="{{route('admin.categories.index')}}">List category</a>
                <a class="dropdown-item" href="{{route('admin.categories.create')}}">Create category</a>
            </div>
        </li>
    </ul>
</nav>
