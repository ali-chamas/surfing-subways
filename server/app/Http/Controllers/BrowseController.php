<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Station;
use App\Models\Ride;

class BrowseController extends Controller
{
    public function browseBranches(Request $request)
    {
        $branches = Station::all();
        return response()->json($branches);
    }


    public function browseRides(Request $request)
    {
        $rides = Ride::all(); 
        return response()->json($rides);
    }
}
