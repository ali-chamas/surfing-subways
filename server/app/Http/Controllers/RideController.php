<?php

namespace App\Http\Controllers;

use App\Models\Ride;
use Illuminate\Http\Request;

class RideController extends Controller
{

    public function index()
    {
        $rides = Ride::all();
        return response()->json($rides);
    }

    public function show($id)
    {
        $ride = Ride::find($id);
        if (!$ride) {
            return response()->json(['message' => 'Ride not found'], 404);
        }
        return response()->json($ride);
    }

    public function purchaseTicket(Request $request)
    {
        $request->validate([
            'ride_id' => 'required|exists:rides,id',
            'user_id' => 'required|exists:users,id',
            'ticket_id' => 'required|exists:tickets,id',
            'status' => 'required|string',
        ]);

        $booking = Booking::create($request->all());

        return response()->json(['message' => 'Ticket purchased successfully', 'booking' => $booking]);
    }

}
