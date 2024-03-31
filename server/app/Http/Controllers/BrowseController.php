<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Station;
use App\Models\Ride;

class BrowseController extends Controller
{
    
public function browseBranches(Request $request)
{
    $filters = [
        'status' => 'active',
    ];

    if ($request->has('location')) {
        $filters['location'] = $request->input('location');
    }

    $branchesQuery = Station::query();


    if (isset($filters['status'])) {

        $branchesQuery->where('status', $filters['status']);
    }

    if (isset($filters['location'])) {

        $branchesQuery->where('location', $filters['location']);
    }

    $branches = $branchesQuery->get();

    return response()->json($branches);
}


    public function browseRides(Request $request)
    {
        $filters = [
            'availability' => true,
        ];
        if ($request->has('departure_time')) {
            $filters['departure_time'] = $request->input('departure_time');
        }
    
        if ($request->has('arrival_time')) {
            $filters['arrival_time'] = $request->input('arrival_time');
        }
    
        if ($request->has('price')) {
            $filters['price'] = $request->input('price');
        }
    
        $ridesQuery = Ride::query();
    
        if ($filters['availability']) {
            $ridesQuery->where('departure_time', '>', now());
        }
    
        if (isset($filters['departure_time'])) {
            $ridesQuery->where('departure_time', '>=', $filters['departure_time']);
        }
    
        if (isset($filters['arrival_time'])) {

            $ridesQuery->where('arrival_time', '<=', $filters['arrival_time']);
        }
    
        if (isset($filters['price'])) {
            $ridesQuery->where('price', '<=', $filters['price']);
        }
    
        $rides = $ridesQuery->get();
    
        return response()->json($rides);
    }
}
