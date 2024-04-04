<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CoinRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

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

        $coinRequest = CoinRequest::create([
            'user_id' => $request->user_id,
            'amount' => $request->amount,
            'status' => 'pending',
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

    public function processRequest(Request $request, $id)
{
    $coinRequest = CoinRequest::findOrFail($id);

    if ($request->status === 'Accepted') {
        $user = User::findOrFail($coinRequest->user_id);
        $user->coins += $coinRequest->amount;
        $user->save();
    }

    $coinRequest->status = $request->status;
    $coinRequest->approved_by = 1;
    $coinRequest->save();
    $coinRequest->delete();

    return response()->json(['message' => 'Coin request processed successfully'], 200);
}


    public function destroy($id)
    {
        $coinRequest = CoinRequest::findOrFail($id);

        $coinRequest->delete();

        return response()->json(['message' => 'Coin request deleted successfully'], 200);
    }

}
