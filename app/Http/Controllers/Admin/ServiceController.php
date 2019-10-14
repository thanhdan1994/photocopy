<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $services = Service::orderBy('created_at', 'desc')->paginate(5);
        return view('dashboard.services.index', compact('services'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return  view('dashboard.services.create');
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
            $services = new Service();
            $services->name = $request->input('name');
            $services->slug = Str::slug($request->input('name'), '-');
            $services->description = $request->input('description');
            $services->excerpt = $request->input('excerpt');
            $services->cover = $path;
            $services->type = !empty($request->input('type')) ? 1 : 0;
            $services->status = !empty($request->status) ? true : false;
            if ($services->save()) {
                return redirect()->route('admin.services.index');
            }
            return redirect()->route('admin.services.create');
        }
        return redirect()->route('admin.services.create');
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function edit(Service $service)
    {
        if ($service) {
            return view('dashboard.services.edit', compact('service'));
        }
        return '404 not found';
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $service)
    {
        $service = Service::find($service);
        $service->name = $request->input('name');
        $service->slug = Str::slug($request->input('name'), '-');
        $service->description = $request->input('description');
        $service->excerpt = $request->input('excerpt');
        $service->type = !empty($request->input('type')) ? 1 : 0;
        $service->status = true;
        if (empty($request->status)) {
            $service->status = false;
        }
        if ($request->file('photo')) {
            $path = $request->file('photo')->store('thumb', 'public_uploads');
            $service->cover = $path;
        }
        if ($service->save()) {
            return redirect()->route('admin.services.index');
        }
        return redirect()->route('admin.services.update');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function destroy(Service $service)
    {
        //
    }
}
