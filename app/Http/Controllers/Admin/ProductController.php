<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return view('dashboard.products.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::where('parent', 0)->get();
        return view('dashboard.products.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->file('cover')) {
            $path = $request->file('cover')->store('thumb', 'public_uploads');
            $product = new Product();
            $product->name = $request->input('name');
            $product->price = $request->input('price');
            $product->measure = $request->input('measure');
            $product->slug = Str::slug($request->input('name'), '-');
            $product->description = $request->input('description');
            $product->body = $request->input('body');
            $product->cover = $path;
            $product->category_id = $request->input('categories');
            if ($product->save()) {
                return redirect()->route('admin.products.index');
            }
            return redirect()->route('admin.products.create');
        }
        return redirect()->route('admin.products.create');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        if ($product) {
            $categories = Category::where('parent', 0)->get();
            return view('dashboard.products.edit', compact('product', 'categories'));
        }
        return '404 not found';
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $product)
    {
        $product = Product::find($product);
        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->measure = $request->input('measure');
        $product->slug = Str::slug($request->input('name'), '-');
        $product->description = $request->input('description');
        $product->body = $request->input('body');
        if ($request->file('cover')) {
            $path = $request->file('cover')->store('thumb', 'public_uploads');
            $product->cover = $path;
        }
        $product->category_id = $request->input('categories');
        if ($product->save()) {
            return redirect()->route('admin.products.index');
        }
        return redirect()->route('admin.products.edit');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
