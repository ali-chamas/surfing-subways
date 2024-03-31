<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('email');
            $table->string('password');
            $table->integer('coins');
            $table->string('location');
            $table->string('status');
            $table->unsignedBigInteger('role_id');
            $table->foreign('role_id')->references('id')->on('roles');
            $table->string('profile_url');
            $table->timestamps();
        });
// ridse, stations , station_facilites, facilites,station_ope, station_rev
    }

    public function down(): void {
        Schema::dropIfExists('users');
    }
};
