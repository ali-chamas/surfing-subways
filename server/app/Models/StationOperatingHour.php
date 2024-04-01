<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StationOperatingHour extends Model
{
    protected $fillable = ['station_id', 'from', 'to'];

    public function station()
    {
        return $this->belongsTo(Station::class);
    }
}