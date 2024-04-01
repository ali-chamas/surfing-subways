<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Station;

class StationController extends Controller
{
    public function index()
    {
        $stations = Station::all();
        return response()->json($stations);
    }

    public function show($id)
    {
        $station = Station::findOrFail($id);
        return response()->json($station);
    }

    public function store(Request $request)
{
    $request->validate([
        'location' => 'required|string',
        'name' => 'required|string',
        'image' => 'required|string',
        'status' => 'required|string',
        'longitude' => 'required|numeric',
        'latitude' => 'required|numeric',
    ]);
    
    $station = new Station();
    $station->location = $request->location;
    $station->name = $request->name;
    $station->image = $request->image;
    $station->status = $request->status;
    $station->longitude = $request->longitude;
    $station->latitude = $request->latitude;
    $station->save();

    return response()->json(['message' => 'Station created successfully', 'station' => $station], 201);
}

    public function update(Request $request, $id)
    {
        $station = Station::findOrFail($id);

        $request->validate([
            'location' => 'string',
            'name' => 'string',
            'image' => 'string',
            'status' => 'string',
            'longitude' => 'numeric',
            'latitude' => 'numeric',
        ]);

        $station->update($request->all());

        return response()->json(['message' => 'Station updated successfully', 'station' => $station], 200);
    }

    public function destroy($id)
    {
        $station = Station::findOrFail($id);
        $station->delete();

        return response()->json(['message' => 'Station deleted successfully'], 200);
    }
}
