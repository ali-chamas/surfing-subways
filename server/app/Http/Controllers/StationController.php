<?php

namespace App\Http\Controllers;

use App\Models\Station;
use Illuminate\Http\Request;

class StationController extends Controller
{
    public function index()
    {
        $stations = Station::all();
        return response()->json($stations);
    }

    public function search(Request $request)
    {
        $request->validate([
            'location' => 'required|string',
        ]);

        $location = $request->input('location');
        $stations = Station::where('location', 'like', "%$location%")->get();
        return response()->json($stations);
    }

    public function show($id)
    {
        $station = Station::find($id);
        if (!$station) {
            return response()->json(['message' => 'Station not found'], 404);
        }
        return response()->json($station);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'location' => 'string',
            'name' => 'string',
            'image' => 'string',
            'status' => 'string',
            'longitude' => 'numeric',
            'latitude' => 'numeric',
        ]);

        $station = Station::find($id);
        if (!$station) {
            return response()->json(['message' => 'Station not found'], 404);
        }

        $station->update($request->all());
        return response()->json(['message' => 'Station updated successfully', 'station' => $station]);
    }

}
