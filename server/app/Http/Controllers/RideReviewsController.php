<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RideReview;
use App\Models\Station;
use App\Models\Ticket;
use App\Models\Ride;


class RideReviewsController extends Controller
{
    public function getReviews(Request $request, $rideId)
{
    $review = RideReview::where('ride_id', $rideId)->get();
    if (!$review) {
        return response()->json(['error' => 'Review not found.'], 404);
    }

    return response()->json($review);
}
    public function addReview(Request $request, $rideId,$user_Id)
    {
        
        

       
        $ticket = Ticket::where('ride_id', $rideId)
            ->where('user_id', $user_Id)
            ->whereNotIn('status', ['pending'])
            ->first();

        if (!$ticket) {
            return response()->json(['error' => 'You are not authorized to add a review for this ride.'], 403);
        }

        $review = new RideReview();
        $review->rating = $request->input('rating');
        $review->message = $request->input('message');
        $review->user_id = $user_Id; 
        $review->ride_id = $rideId;
        $review->save();
       
    

        $ride = Ride::findOrFail($rideId);

       
        $reviews = RideReview::where('ride_id', $rideId)->get();
    
   
        if ($reviews->isNotEmpty()) {
            $averageRating = $reviews->avg('rating');
        } else {
            $averageRating = 0; 
        }
    
        
        $ride->rating = $averageRating;
        $ride->save();

    
    $stationId = $ride->departure_station_id;
    $this->updateStationRating($stationId);

        
    return response()->json(['message' => 'Review added successfully']);

        
    }
    public function updateStationRating($stationId)
{
    $averageRating = Ride::where('departure_station_id', $stationId)->avg('rating');

    $station = Station::findOrFail($stationId);
    $station->rating = $averageRating;
    $station->save();
}

}
