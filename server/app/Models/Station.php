<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    protected $fillable = ['location', 'name', 'image', 'status', 'longitude', 'latitude','operating_hour_from','operating_hour_to'];

    public function facilities()
    {
        return $this->belongsToMany(Facility::class, 'stations');
    }

    
}
