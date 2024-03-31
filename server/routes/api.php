<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RideController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\CoinRequestController;



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



//user controllers

Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);


//auth Controllers

Route::post('/login', [AuthController::class, 'login']); // Login route
Route::post('/register', [AuthController::class, 'register']); // Register route
Route::post('/logout', [AuthController::class, 'logout']);
 

//role Controllers

Route::get('/roles', [RoleController::class, 'index']);
Route::post('/roles', [RoleController::class, 'store']);
Route::get('/roles/{id}', [RoleController::class, 'show']);
Route::put('/roles/{id}', [RoleController::class, 'update']);
Route::delete('/roles/{id}', [RoleController::class, 'destroy']);


//rides Controllers

Route::get('/rides', [RideController::class, 'index']);
Route::get('/rides/{id}', [RideController::class, 'show']);
Route::post('/rides', [RideController::class, 'store']);
Route::put('/rides/{id}', [RideController::class, 'update']);
Route::delete('/rides/{id}', [RideController::class, 'destroy']);


//Chats Controllers

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/chats', [ChatController::class, 'sendMessage']);
    Route::get('/chats', [ChatController::class, 'getChats']);
});


//CoinRequest Controllers

Route::post('/coin-requests', [CoinRequestController::class, 'store'])->middleware('auth:sanctum');
Route::get('/coin-requests', [CoinRequestController::class, 'index'])->middleware('auth:sanctum');
Route::get('/coin-requests/{id}', [CoinRequestController::class, 'show'])->middleware('auth:sanctum');
Route::put('/coin-requests/{id}', [CoinRequestController::class, 'update'])->middleware('auth:sanctum');
Route::delete('/coin-requests/{id}', [CoinRequestController::class, 'destroy'])->middleware('auth:sanctum');
Route::put('/coin-requests/{id}/process', [CoinRequestController::class, 'processRequest'])->middleware('auth:sanctum');


//BranchInvitation Controllers

use App\Http\Controllers\InvitationController;

// Define routes for sending invitations and canceling invitations
Route::post('invitations', [InvitationController::class, 'sendInvitation']);
Route::delete('invitations/{id}', [InvitationController::class, 'cancelInvitation']);