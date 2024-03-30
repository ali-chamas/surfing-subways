<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ride extends Model
{
    use HasFactory;

    protected $fillable = ['departure_time', 'arrival_time', 'price', 'deprature_station_id', 'arrival_station_id'];

    public function stations(){
        return $this->belongsTo(Station::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function rideReviews()
    {
        return $this->hasMany(RideReview::class);
    }
}
