<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ride extends Model

{
    protected $fillable = ['departure_time','arrival_time','price','departure_station_id','arrival_station_id','seats'];

    public function ride_reviews(){
        return $this->hasMany(RideReview::class, 'ride_reviews');
    }
    
    public function tickets(){
        return $this->belongsToMany(Ticket::class, 'tickets');
    }
    
    public function departure_station(){
        return $this->belongsTo(Station::class, 'departure_station_id');
    }
    
    public function arrival_station(){
        return $this->belongsTo(Station::class, 'arrival_station_id');
    }
    
}
