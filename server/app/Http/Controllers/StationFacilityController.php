<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StationFacility;

class StationFacilityController extends Controller
{
    public function index()
    {
        $stationFacilities = StationFacility::all();
        return response()->json($stationFacilities);
    }

    public function show($id)
    {
        $stationFacility = StationFacility::findOrFail($id);
        return response()->json($stationFacility);
    }

    public function store(Request $request)
    {
        $request->validate([
            'station_id' => 'required|integer|exists:stations,id',
            'facility_id' => 'required|integer|exists:facilities,id',
        ]);

        $stationFacility = StationFacility::create($request->all());

        return response()->json(['message' => 'Station Facility created successfully', 'station_facility' => $stationFacility], 201);
    }

    public function update(Request $request, $id)
    {
        $stationFacility = StationFacility::findOrFail($id);

        $request->validate([
            'station_id' => 'integer|exists:stations,id',
            'facility_id' => 'integer|exists:facilities,id',
        ]);

        $stationFacility->update($request->all());

        return response()->json(['message' => 'Station Facility updated successfully', 'station_facility' => $stationFacility], 200);
    }

    public function destroy($id)
    {
        $stationFacility = StationFacility::findOrFail($id);
        $stationFacility->delete();

        return response()->json(['message' => 'Station Facility deleted successfully'], 200);
    }
}
