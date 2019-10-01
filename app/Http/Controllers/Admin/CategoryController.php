<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return view('dashboard.categories.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::where('parent', 0)->get();
        return  view('dashboard.categories.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $category = new Category();
        $category->name = $request->input('name');
        $category->slug = Str::slug($request->input('name'), '-');
        $category->parent = $request->categories;
        $category->status = !empty($request->status) ? true : false;
        if ($category->save()) {
            return redirect()->route('admin.categories.index');
        }
        return redirect()->route('admin.categories.create');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        if ($category) {
            $categories = Category::where('parent', 0)->get();
            return view('dashboard.categories.edit', compact('category', 'categories'));
        }
        return '404 not found';
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $category)
    {
        $category = Category::find($category);
        $category->name = $request->input('name');
        $category->slug = Str::slug($request->input('name'), '-');
        $category->status = true;
        if (empty($request->status)) {
            $category->status = false;
        }
        if ($category->save()) {
            return redirect()->route('admin.categories.index');
        }
        return redirect()->route('admin.categories.update');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        //
    }
}
