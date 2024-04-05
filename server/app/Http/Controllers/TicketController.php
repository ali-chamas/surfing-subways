<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Ticket;
use App\Models\Ride;

class TicketController extends Controller
{
    public function index($rideId){
        $tickets = Ticket::where('ride_id', $rideId)->get();
        return response()->json($tickets);
    }

    public function update(Request $request, $id){
        
        $ticket = Ticket::findOrFail($id);

        $validatedData=$request->validate([
            'status'=>'required|string',
            'ride_id' => 'required|integer',
        ]);

        $rideId = $validatedData['ride_id'];
        $newStatus = $validatedData['status'];

        Ticket::where('ride_id', $rideId)->update(['status' => $newStatus]);

        return response()->json(['message' => 'Ticket type updated successfully', 'ticket' => $ticket], 200);
    }
}
