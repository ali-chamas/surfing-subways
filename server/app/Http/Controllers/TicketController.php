<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Ticket;
use App\Models\Ride;

class TicketController extends Controller
{
    public function index(){
        $tickets = Ticket::all();
        return response()->json($tickets);
    }

    public function update(Request $request, $id){
        
        $ticket = Ticket::findOrFail($id);

        $request->validate([
            'user_id' => 'required|integer',
            'type' => 'required|string',
            'ride_id' => 'required|integer',
        ]);

        $ticket->update($request->only(['user_id', 'type', 'ride_id']));

        return response()->json(['message' => 'Ticket type updated successfully', 'ticket' => $ticket], 200);
    }
}
