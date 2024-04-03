<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = ['ride_id', 'date', 'status'];

    public function ride(){
        return $this->belongsTo(Ride::class);
    }

    public function booking(){
        return $this->belongsToMany(Booking::class);
    }
}