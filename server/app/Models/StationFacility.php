<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class StationFacility extends Pivot
{
    protected $table = 'station_facilities';

    protected $fillable = ['station_id', 'facility_id'];
}