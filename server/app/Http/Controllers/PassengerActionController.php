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
            } else {
                return response()->json(['message' => 'Invalid ticket/pass type'], 400);
            }


            return response()->json(['message' => 'Ticket/pass purchased successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to purchase ticket/pass', 'error' => $e->getMessage()], 500);
        }
    }

    public function requestCoins(Request $request)
    {
        $requestData = $request->validate([
            'user_id' => 'required|integer',
            'amount' => 'required|integer',
        ]);
        $coinRequest = CoinRequest::create([
            'user_id' => $requestData['user_id'],
            'amount' => $requestData['amount'],
            'status' => 'pending',
        ]);

        return response()->json(['message' => 'Coin request submitted successfully', 'request_id' => $coinRequest->id], 200);
    }
    
    public function submitRequest(Request $request)
    {
        $request->validate([
            'amount' => 'required|integer|min:1',
        ]);

        if (auth()->user()->role_id !== 1) {
            return response()->json(['error' => 'Only passengers can submit coin requests'], 403);
        }

        $coinRequest = new CoinRequest();
        $coinRequest->amount = $request->amount;
        $coinRequest->user_id = auth()->id();
        $coinRequest->status = 'Pending';
        $coinRequest->save();

        return response()->json(['message' => 'Coin request submitted successfully'], 200);
    }

    public function processRequest(Request $request, $id)
    {

        $coinRequest = CoinRequest::findOrFail($id);

        // Check if the authenticated user is authorized to process the request (admin or specific role)
        // You can implement your authorization logic here

        // Process the request (approve or reject)
        $coinRequest->status = $request->status;

        $coinRequest->approved_by = auth()->id();
        $coinRequest->save();

        return response()->json(['message' => 'Coin request processed successfully'], 200);
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




