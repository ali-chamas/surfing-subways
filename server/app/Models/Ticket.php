<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = ['ride_id', 'date', 'status'];

    public function ride(){
        return $this->belongsToMany(Ride::class);
    }

    public function booking(){
        return $this->belongsTo(Booking::class);
    }
}