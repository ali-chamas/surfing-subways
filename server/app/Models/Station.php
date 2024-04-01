<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    protected $fillable = ['location', 'name', 'image', 'status', 'longitude', 'latitude'];

    public function facilities()
    {
        return $this->belongsToMany(Facility::class, 'station_facilities');
    }

    public function operatingHours()
    {
        return $this->hasMany(StationOperatingHour::class);
    }
}
