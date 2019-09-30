<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Introduce;
use Illuminate\Http\Request;

class IntroduceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $introduces = Introduce::all();
        return view('dashboard.introduces.index', compact('introduces'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return  view('dashboard.introduces.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->file('photo')) {
            $path = $request->file('photo')->store('thumb', 'public_uploads');
            $introduce = new Introduce();
            $introduce->name = $request->input('name');
            $introduce->description = $request->input('description');
            $introduce->cover = $path;
            if ($introduce->save()) {
                return redirect()->route('admin.introduces.index');
            }
            return redirect()->route('admin.introduces.create');
        }
        return redirect()->route('admin.introduces.create');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Introduce  $introduce
     * @return \Illuminate\Http\Response
     */
    public function show(Introduce $introduce)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Introduce  $introduce
     * @return \Illuminate\Http\Response
     */
    public function edit(Introduce $introduce)
    {
        if ($introduce) {
            return view('dashboard.introduces.edit', compact('introduce'));
        }
        return '404 not found';
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Introduce  $introduce
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $introduce)
    {
        $introduce = Introduce::find($introduce);
        $introduce->name = $request->input('name');
        $introduce->description = $request->input('description');
        if ($request->file('photo')) {
            $path = $request->file('photo')->store('thumb', 'public_uploads');
            $introduce->cover = $path;
        }
        if ($introduce->save()) {
            return redirect()->route('admin.introduces.index');
        }
        return redirect()->route('admin.introduces.update');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Introduce  $introduce
     * @return \Illuminate\Http\Response
     */
    public function destroy(Introduce $introduce)
    {
        //
    }
}
