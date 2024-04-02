<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('coin_requests', function (Blueprint $table) {
            $table->id();
            $table->integer('amount');
            $table->string('status');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('approved_by');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('approved_by')->references('id')->on('users');
            $table->timestamps();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('coins_requests');
    }
};
