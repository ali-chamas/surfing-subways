<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StationFacility extends Model
{
    use HasFactory;
    
    protected $fillable = ['facility_id', 'station_id'];

    public function stations(){
        return $this->belongsTo(Station::class);
    }
    
    public function facilities(){
        return $this->belongsTo(Facility::class);
    }
}
