<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StationOperatingHour extends Model
{
    use HasFactory;
    protected $fillable = ['station_id' ,'from', 'to'];

    public function stations(){
        return $this->belongsTo(Station::class);
    }
}
