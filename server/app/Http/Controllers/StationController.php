<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Station;
use Faker\Core\File;

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
<<<<<<< HEAD
        'image' => 'required|string',
        'status' => 'required|string',
=======
        'image' => 'required|image|mimes:jpeg,png,jpg,gif',
        'status' => 'string',
>>>>>>> 3bf0e61a0d8b22c67665c2772add7dd6c3214aa5
        'longitude' => 'required|numeric',
        'latitude' => 'required|numeric',
        'rating' => 'numeric',
        'revenue' => 'numeric',
        'operating_hour_from' => [
            
            'string',
            'regex:/^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/'
        ],
        'operating_hour_to' => [
            
            'string',
            'regex:/^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/'
        ],

    ]);
    
        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();
        $filename = time() . '.' . $extension;
        $file->move(public_path('/station_pictures/'), $filename);

    $station = new Station();
    $station->user_id = $request->user_id;
    $station->location = $request->location;
    $station->name = $request->name;
    $station->image = $filename;
    $station->longitude = $request->longitude;
    $station->latitude = $request->latitude;
    $station->rating = 0;
    $station->revenue = 0;
    $station->operating_hour_from = 0;
    $station->operating_hour_to = 0;
    $station->save();
   

    return response()->json(['message' => 'Station created successfully', 'station' => $station], 201);
}

    public function update(Request $request, $id)
    {
        $station = Station::findOrFail($id);

        $validatedData=$request->validate([
            'user_id' => 'required|integer',
            'location' => 'string',
            'name' => 'string',
            'image' => 'image|mimes:jpeg,png,jpg,gif',
            'status' => 'string',
            'rating' => 'numeric',
            'revenue' => 'numeric',
            'longitude' => 'numeric',
            'latitude' => 'numeric',
            'operating_hour_from' => 'date_format:H:i',
            'operating_hour_to' => 'date_format:H:i',
        ]);

        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();
        $filename = time() . '.' . $extension;
        $file->move(public_path('/station_pictures/'), $filename);

        $station->name = $validatedData['name'];
        $station->image = $filename;
        $station->operating_hour_from = $validatedData['operating_hour_from'];
        $station->operating_hour_to = $validatedData['operating_hour_to'];
       
        $station->status = $validatedData['status'];
        

        $station->save();

        return response()->json(['message' => 'Station updated successfully', 'station' => $station], 200);
    }

    public function destroy($id)
    {
        $station = Station::findOrFail($id);
        $station->delete();

        return response()->json(['message' => 'Station deleted successfully'], 200);
    }
}