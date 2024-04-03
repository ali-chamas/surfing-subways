<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Facility;

class FacilityController extends Controller
{
    public function index()
    {
        $facilities = Facility::all();
        return response()->json($facilities);
    }

    public function show($stationId)
    {
       
        
        $facilities = Facility::where('station_id', $stationId)->get();

        return response()->json($facilities);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:facilities,name',
            'station_id'=>'required|integer'
        ]);

        $facility = Facility::create($request->all());

        return response()->json(['message' => 'Facility created successfully', 'facility' => $facility], 201);
    }

    public function update(Request $request, $id)
    {
        $facility = Facility::findOrFail($id);

        $request->validate([
            'name' => 'required|string|unique:facilities,name,',
            
        ]);

        $facility->update($request->all());
        

        return response()->json(['message' => 'Facility updated successfully', 'facility' => $facility], 200);
    }

    public function destroy($id)
    {
        $facility = Facility::findOrFail($id);
        $facility->delete();

        return response()->json(['message' => 'Facility deleted successfully'], 200);
    }
}
