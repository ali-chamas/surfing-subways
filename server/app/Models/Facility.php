<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    protected $fillable = ['name','station_id'];

    public function stations()
    {
        return $this->belongsTo(Station::class, 'facilities');
    }
}