<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rides', function (Blueprint $table) {
            $table->id();
            $table->time('departure_time');
            $table->time('arrival_time');
            $table->integer('price');
            $table->unsignedBigInteger('departure_station_id');
            $table->unsignedBigInteger('arrival_station_id');
            $table->integer('rating')->default(0);
            $table->foreign('departure_station_id')->references('id')->on('stations');
            $table->foreign('arrival_station_id')->references('id')->on('stations');
            $table->unsignedTinyInteger('seats')->default(40)->nullable(false)->unsigned();
            $table->timestamps();
        });

        Schema::create('ride_reviews', function (Blueprint $table) {
            $table->id();
            $table->integer('rating');
            $table->string('message')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('ride_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('ride_id')->references('id')->on('rides');
            $table->timestamps();
        });

        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('status')->default('pending');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('ride_id');
            $table->foreign('ride_id')->references('id')->on('rides');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('rides');
    }
};