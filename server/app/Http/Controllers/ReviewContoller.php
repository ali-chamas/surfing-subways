<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RideReview;
use App\Models\StationReview;

class ReviewController extends Controller
{
    public function submitRideReview(Request $request)
    {
        $request->validate([
            'ride_id' => 'required|integer|exists:rides,id',
            'rating' => 'required|integer|between:1,5',
            'message' => 'nullable|string|max:255',
        ]);

        // Check if the user has a booking for the specified ride with onboard or done status
        $userBooking = Booking::where('ride_id', $request->ride_id)
            ->where('user_id', auth()->id())
            ->whereIn('status', ['onboard', 'done'])
            ->first();

        if (!$userBooking) {
            return response()->json(['error' => 'You can only submit a review for a completed or onboarded ride'], 403);
        }

        $rideReview = new RideReview();
        $rideReview->ride_id = $request->ride_id;
        $rideReview->user_id = auth()->id();
        $rideReview->rating = $request->rating;
        $rideReview->message = $request->message;
        $rideReview->save();

        return response()->json(['message' => 'Ride review submitted successfully'], 200);
    }

    public function submitStationReview(Request $request)
    {
        $request->validate([
            'station_id' => 'required|integer|exists:stations,id',
            'rating' => 'required|integer|between:1,5',
            'message' => 'nullable|string|max:255',
        ]);

        // Create a new station review
        $stationReview = new StationReview();
        $stationReview->station_id = $request->station_id;
        $stationReview->user_id = auth()->id();
        $stationReview->rating = $request->rating;
        $stationReview->message = $request->message;
        $stationReview->save();

        return response()->json(['message' => 'Station review submitted successfully'], 200);
    }
}
