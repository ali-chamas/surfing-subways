<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Models\Station;
use App\Models\User;
use App\Models\RideReview;
use App\Models\Ride;


class PassengerBookingController extends Controller
{
    public function purchaseTicket(Request $request, $user_id, $ride_id)
    {
    

    $request->validate([
        'price' => 'required|numeric',
        'departure_station_id' => 'required|exists:stations,id',
    ]);

    $user = User::findOrFail($user_id);
    $ride = Ride::find($ride_id);

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    if (!$ride) {
        return response()->json(['message' => 'Ride not found'], 404);
    }

    $ticketPrice = $ride->price;

    $departureStation = Station::find($ride->departure_station_id);

    if (!$departureStation || $departureStation->status !== 'active') {
        return response()->json(['message' => 'Departure station not active'], 400);
    }

    if ($request->getContentTypeFormat === 'multiride') {
        $ticketPrice *= 1.3;
    }elseif($request->type === 'oneTime'){
        $ticketPrice = $ride->price;
    }

    if ($user->coins < $ticketPrice) {
        return response()->json(['message' => 'Insufficient coins!'], 400);
    }

    $ticket = new Ticket();
    $ticket->type = $request->type;
    $ticket->user_id = $user->id;
    $ticket->ride_id = $ride_id;
    $ticket->save();

    $user->coins -= $ticketPrice;
    $departureStation->revenue += $ticketPrice;
    $user->save();
    $departureStation->save();

    return response()->json(['message' => 'Ticket purchased successfully'], 200);
}

}