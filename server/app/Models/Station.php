<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    use HasFactory;

    protected $fillable = ['location', 'name', 'image', 'status', 'longitude', 'latitude', 'profile_url'];

    public function stationOperatingHours()
    {
        return $this->hasMany(StationOperatingHour::class);
    }

    public function stationReviews()
    {
        return $this->hasMany(StationReview::class);
    }

    public function stationFacilities()
    {
        return $this->hasMany(StationFacility::class);
    }

    public function rides()
    {
        return $this->hasMany(Ride::class);
    }
}

