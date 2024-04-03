<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ride;

class RideController extends Controller
{
    public function index()
    {
        $rides = Ride::all();
        return response()->json($rides);
    }

    public function show($id)
    {
        $ride = Ride::findOrFail($id);
        return response()->json($ride);
    }

    public function store(Request $request)
    {
        $request->validate([
            'departure_time' => 'required',
            'arrival_time' => 'required',
            'price' => 'required|numeric',
            'departure_station_id' => 'required|exists:stations,id',
            'arrival_station_id' => 'required|exists:stations,id',
        ]);

        $ride = new Ride();
        $ride->departure_time = $request->departure_time;
        $ride->arrival_time = $request->arrival_time;
        $ride->price = $request->price;
        $ride->departure_station_id = $request->departure_station_id;
        $ride->arrival_station_id = $request->arrival_station_id;
        $ride->save();

        return response()->json(['message' => 'Ride created successfully', 'ride' => $ride], 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'departure_time' => 'required',
            'arrival_time' => 'required',
            'price' => 'required|numeric',
            'departure_station_id' => 'required|exists:stations,id',
            'arrival_station_id' => 'required|exists:stations,id',
            'seats' => 'required|numeric'
        ]);

        $ride = Ride::findOrFail($id);
        $ride->update([
            'departure_time' => $request->departure_time,
            'arrival_time' => $request->arrival_time,
            'price' => $request->price,
            'departure_station_id' => $request->departure_station_id,
            'arrival_station_id' => $request->arrival_station_id,
            'seats' => $request->seats
        ]);

        return response()->json(['message' => 'Ride updated successfully', 'ride' => $ride]);
    }

    public function destroy($id)
    {
        $ride = Ride::findOrFail($id);
        $ride->delete();
        return response()->json(['message' => 'Ride deleted successfully']);
    }
}
