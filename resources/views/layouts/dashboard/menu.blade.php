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
        <li class="nav-item">
            <a class="nav-link" href="#">Quản lý sản phẩm</a>
        </li>

        <!-- Dropdown -->
{{--        <li class="nav-item dropdown">--}}
{{--            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">--}}
{{--                Dropdown link--}}
{{--            </a>--}}
{{--            <div class="dropdown-menu">--}}
{{--                <a class="dropdown-item" href="#">Link 1</a>--}}
{{--                <a class="dropdown-item" href="#">Link 2</a>--}}
{{--                <a class="dropdown-item" href="#">Link 3</a>--}}
{{--            </div>--}}
{{--        </li>--}}
    </ul>
</nav>
