<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('chats', function (Blueprint $table) {
            $table->id();
            $table->string('message');
            $table->unsignedBigInteger('sender');
            $table->unsignedBigInteger('receiver');
            $table->foreign('sender')->references('id')->on('users');
            $table->foreign('receiver')->references('id')->on('users');
            $table->timestamps();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('chats');
    }
};
