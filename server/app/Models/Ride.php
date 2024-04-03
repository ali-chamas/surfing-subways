<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ride extends Model
{
    use HasFactory;
    protected $fillable = ['departure_time', 'arrival_time','price','departure_station_id','arrival_station_id'];

    public function stations(){
        return $this->belongsToMany(Station::class);
    }

    public function tickets(){
        return $this->belongsTo(Ticket::class);
    }

    public function ride_reviews(){
        return $this->belongsTo(RideReview::class);
}
}
