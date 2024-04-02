<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CoinRequest;
use Illuminate\Support\Facades\Auth;

class CoinsRequestController extends Controller
{
    public function index()
    {
        $coinRequests = CoinRequest::all();
        return response()->json($coinRequests);
    }

    public function show($id)
    {
        $coinRequest = CoinRequest::findOrFail($id);
        return response()->json($coinRequest);
    }

    public function store(Request $request)
    {
        $request->validate([
            'amount' => 'required|integer|min:1',
        ]);

        $defaultApprovedBy = 1;
        $userId = 1; 

        $coinRequest = CoinRequest::create([
            'user_id' => $userId, // Assuming you're using authentication to get the user ID
            'amount' => $request->amount,
            'status' => 'Pending',
            'approved_by' => $defaultApprovedBy,
        ]);

        return response()->json(['message' => 'Coin request submitted successfully', 'request_id' => $coinRequest->id], 201);
    }

    public function update(Request $request, $id)
    {
        $coinRequest = CoinRequest::findOrFail($id);

        $coinRequest->update($request->all());

        return response()->json(['message' => 'Coin request updated successfully'], 200);
    }

    public function destroy($id)
    {
        $coinRequest = CoinRequest::findOrFail($id);

        $coinRequest->delete();

        return response()->json(['message' => 'Coin request deleted successfully'], 200);
    }

    // public function processRequest(Request $request, $id)
    // {
    //     $coinRequest = CoinRequest::findOrFail($id);

    //     $coinRequest->status = $request->status;
    //     $coinRequest->approved_by = Auth::id();
    //     $coinRequest->save();

    //     return response()->json(['message' => 'Coin request processed successfully'], 200);
    // }
}
