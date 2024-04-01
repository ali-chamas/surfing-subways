<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    public function up(): void
    {
        Schema::create('stations', function (Blueprint $table) {
            $table->id();
            $table->string('location');
            $table->string('name');
            $table->string('image');
            $table->string('status');
            $table->double('longitude');
            $table->double('latitude');
            $table->timestamps();
        });

        Schema::create('facilities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('station_facilities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('station_id');
            $table->unsignedBigInteger('facility_id');
            $table->foreign('user_id')-> references('id')->on('users');
            $table->foreign('station_id')->references('id')->on('stations');
            $table->foreign('facility_id')->references('id')->on('facilities');
            $table->timestamps();
        });

        Schema::create('station_operating_hours', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('station_id');
            $table->dateTime('from');
            $table->dateTime('to');
            $table->foreign('station_id')->references('id')->on('stations');
            $table->timestamps();
        });
    }
    
    public function down(): void
    {
        Schema::dropIfExists('stations');
    }
};
