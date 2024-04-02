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
        return response()->json($station,);
    }

    public function store(Request $request)
{
    $request->validate([
        'user_id' => 'required|integer',
        'location' => 'required|string',
        'name' => 'required|string',
        'image' => 'required|string',
        // 'status' => 'required|string',
        'longitude' => 'required|numeric',
        'latitude' => 'required|numeric',
        'operating_hour_from' => 'required|date_format:H:i',
        'operating_hour_to' => 'required|date_format:H:i',

    ]);
    
    $station = new Station();
    $station->user_id = $request->user_id;
    $station->location = $request->location;
    $station->name = $request->name;
    $station->image = $request->image;
    // $station->status = $request->status; 
    $station->longitude = $request->longitude;
    $station->latitude = $request->latitude;
    $station->operating_hour_from = $request->operating_hour_from;
    $station->operating_hour_to = $request->operating_hour_to;
    $station->save();

    return response()->json(['message' => 'Station created successfully', 'station' => $station], 201);
}

    public function update(Request $request, $id)
    {
        $station = Station::findOrFail($id);

        $request->validate([
            'user_id' => 'required|integer',
            'location' => 'string',
            'name' => 'string',
            'image' => 'string',
            'status' => 'string',
            'longitude' => 'numeric',
            'latitude' => 'numeric',
            'operating_hour_from' => 'date_format:H:i',
            'operating_hour_to' => 'date_format:H:i',
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
