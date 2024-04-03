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
            $table->string('status')->default('active');
            $table->double('longitude');
            $table->double('latitude');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->time('operating_hour_from');
            $table->time('operating_hour_to');
            $table->timestamps();
        });

        Schema::create('facilities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('station_id');
            $table->foreign('station_id')->references('id')->on('stations');
            $table->timestamps();
        });

    }

    public function down(): void
    {
        Schema::dropIfExists('stations');
    }
};
