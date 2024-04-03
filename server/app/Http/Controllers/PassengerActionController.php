<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Models\User;
use App\Models\CoinRequest;
use App\Models\RideReview;
use App\Models\StationReview;

class PassengerActionController extends Controller
{
    public function purchaseTicketOrPass(Request $request)
    {

        $requestData = $request->validate([
            'type' => 'required|string',
            'user_id' => 'required|integer',
        ]);

        try {
            $user = User::findOrFail($requestData['user_id']);


            $requiredCoins = ($requestData['type'] === 'ticket') ? 1000 : 5000;
            if ($user->coins < $requiredCoins) {
                return response()->json(['message' => 'Insufficient coins'], 400);
            }

            if ($requestData['type'] === 'ticket') {
            } elseif ($requestData['type'] === 'pass') {
            } else 
            {
                return response()->json(['message' => 'Invalid ticket/pass type'], 400);
            }


            return response()->json(['message' => 'Ticket/pass purchased successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to purchase ticket/pass', 'error' => $e->getMessage()], 500);
        }
    }

    public function leaveReview(Request $request)
    {
        $requestData = $request->validate([
            'user_id' => 'required|integer',
            'type' => 'required|string',
            'entity_id' => 'required|integer',
            'rating' => 'required|integer',
            'message' => 'nullable|string',

        ]);

        if ($requestData['type'] === 'ride') {
            RideReview::create([
                'user_id' => $requestData['user_id'],
                'ride_id' => $requestData['entity_id'],
                'rating' => $requestData['rating'],
                'message' => $requestData['message'],
            ]);
        } elseif ($requestData['type'] === 'station') {
            StationReview::create([
                'user_id' => $requestData['user_id'],
                'station_id' => $requestData['entity_id'],
                'rating' => $requestData['rating'],
                'message' => $requestData['message'],
            ]);
        } else {
            return response()->json(['message' => 'Invalid review type'], 400);
        }

        
        return response()->json(['message' => 'Review submitted successfully'], 200);
    }
}




