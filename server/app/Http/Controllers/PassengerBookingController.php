<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Models\Station;
use App\Models\Booking;
use App\Models\User;
use App\Models\RideReview;
use App\Models\Ride;


class PassengerBookingController extends Controller
{
    public function purchaseTicket(Request $request, $ride_id){

        $user = User::find($request->user_id);
        $departureStations = Station::find($ride->deparure_station_id);

        if (!$user){
            return response()->json(['message => User not found'], 404);
        }

        if(!$ride){
            return response()->json(['message => Ride not found'], 404);
        }

        if(!$departureStation || $departureStation->status !== 'active'){
            return response()->json(['message => Departure station not active'], 400);
        }

        if(!$user->coins < $ride->price){
            return response()->json(['message => Insufficient coins!'], 400);
        }

        $booking = new Booking();
        $booking->type = '';
        $booking->user_id = $request->$user_id;
    }
}
