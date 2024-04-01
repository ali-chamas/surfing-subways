<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
use laravel\sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable 
{
    use HasFactory;
    protected $fillable = [
        'username',
        'email',
        'password',
        'coins',
        'location',
        'status',
        'role_id',
        'profile_url'
    ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function coinRequests()
    {
        return $this->hasMany(CoinRequest::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function rideReviews()
    {
        return $this->hasMany(RideReview::class);
    }

    public function stationReviews()
    {
        return $this->hasMany(StationReview::class);
    }

    public function invitationsSent()
    {
        return $this->hasMany(Invitation::class, 'from');
    }

    public function invitationsReceived()
    {
        return $this->hasMany(Invitation::class, 'to');
    }

    public function chatsSent()
    {
        return $this->hasMany(Chat::class, 'sender');
    }

    public function chatsReceived()
    {
        return $this->hasMany(Chat::class, 'receiver');
    }
}
//     public function getJWTIdentifier()
//     {
//         return $this->getKey();
//     }

//     /**
//      * Return a key value array, containing any custom claims to be added to the JWT.
//      *
//      * @return array
//      */
//     public function getJWTCustomClaims()
//     {
//         return [];
//     }
// }

