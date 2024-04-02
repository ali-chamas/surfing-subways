<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $fillable = ['ride_id', 'user_id', 'ticket_id', 'type'];

    public function user()
    {
        return $this->belongsToMany(User::class);
    }

    public function ticket()
    {
        return $this->belongsToMany(Ticket::class);
    }
}
