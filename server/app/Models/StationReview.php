<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StationReview extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'station_id', 'rating', 'message'];

    public function stations(){
        return $this->belongsTo(Station::class);
    }

    public function users(){
        return $this->belongsTo(User::class);
    }
}
